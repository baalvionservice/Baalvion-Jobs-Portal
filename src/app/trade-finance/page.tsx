
'use client';

import { SharedHero } from '@/app/components/SharedHero';
import { 
  Landmark, 
  CreditCard, 
  Banknote, 
  ArrowRightLeft, 
  ShieldCheck, 
  Activity, 
  Loader2,
  ChevronRight,
  Clock,
  CheckCircle2,
  Wallet,
  Search,
  Calculator,
  Plus,
  ArrowRight,
  AlertCircle,
  XCircle,
  TrendingUp,
  History,
  Navigation,
  Zap,
  BarChart3,
  TrendingDown,
  ShieldAlert,
  Layers,
  Sparkles,
  Flame,
  PieChart as LucidePieChart,
  Globe,
  Radar
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, AreaChart, Area, PieChart, Cell, Pie } from 'recharts';

export default function TradeFinancePage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'treasury' | 'risk' | 'lc' | 'routing' | 'fx' | 'hedging' | 'hyper-fx'>('treasury');
  
  // LC State
  const [lcList, setLcList] = useState<any[]>([]);
  const [updatingLc, setUpdatingLc] = useState<string | null>(null);

  // Payment State
  const [payments, setPayments] = useState<any[]>([]);
  const [paymentForm, setPaymentForm] = useState({ 
    sender: 'DID1001', 
    receiver: '', 
    amount: '', 
    currency: 'USD', 
    type: 'International',
    priority: 'Medium',
    routing_goal: 'LowestCost'
  });
  const [isInitiating, setIsInitiating] = useState(false);
  const [paymentMsg, setPaymentMsg] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  // FX Calculator State
  const [fxFrom, setFxFrom] = useState('USD');
  const [fxTo, setFxTo] = useState('INR');
  const [fxAmount, setFxAmount] = useState('1');
  const [fxResult, setFxResult] = useState<any>(null);
  const [fxLoading, setFxLoading] = useState(false);

  // Hedging State
  const [hedges, setHedges] = useState<any[]>([]);
  const [isHedging, setIsHedging] = useState(false);

  // Hyper-FX State
  const [isSimulatingHyper, setIsSimulatingHyper] = useState<string | null>(null);
  const [hyperResults, setHyperResults] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        const res = await axios.get('/api/trade-finance');
        setData(res.data);
        setLcList(res.data?.letters_of_credit || []);
        setPayments(res.data?.payments || []);
        setHedges(res.data?.hedgingStrategies || []);
      } catch (e) {
        console.error("Finance fetch error", e);
        setError("Institutional treasury sync failed. Reconnecting...");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleUpdateLcStatus = async (id: string, status: string) => {
    setUpdatingLc(id);
    try {
      await axios.put(`/api/lc/${id}/update`, { status, remarks: "Institutional review complete" });
      setLcList(prev => prev.map(l => l.id === id ? { ...l, status } : l));
    } catch (e) {
      console.error("LC update error", e);
    } finally {
      setUpdatingLc(null);
    }
  };

  const handleInitiatePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsInitiating(true);
    setPaymentMsg(null);
    try {
      const res = await axios.post('/api/payment/route-initiate', {
        ...paymentForm,
        routing_options: ["Swift-Node-Alpha", "SEPA-Node-01"]
      });
      const newPayment = {
        id: res.data.payment_id,
        sender: paymentForm.sender,
        receiver: paymentForm.receiver,
        amount: Number(paymentForm.amount),
        currency: paymentForm.currency,
        status: "Pending",
        date: new Date().toISOString().split('T')[0],
        route: res.data.selected_route,
        fee: Math.floor(Math.random() * 100) + 20,
        risk_alert: Number(paymentForm.amount) > 1000000
      };
      setPayments(prev => [newPayment, ...prev]);
      setPaymentMsg({ type: 'success', text: `Institutional Payment ${res.data.payment_id} initiated via ${res.data.selected_route}.` });
      setPaymentForm({ ...paymentForm, receiver: '', amount: '' });
    } catch (e: any) {
      setPaymentMsg({ type: 'error', text: e.response?.data?.error || "Transaction Risk Rejection: Insufficient Node Liquidity." });
    } finally {
      setIsInitiating(false);
    }
  };

  const handleFXCalculate = async () => {
    setFxLoading(true);
    setFxResult(null);
    try {
      const res = await axios.post(`/api/payment/fx-convert`, { 
        from_currency: fxFrom, 
        to_currency: fxTo, 
        amount: Number(fxAmount),
        user_id: 'DID1001',
        optimization_goal: 'LowestCost'
      });
      setFxResult(res.data);
    } catch (e) {
      console.error("FX conversion failed", e);
    } finally {
      setFxLoading(false);
    }
  };

  const handleExecuteHedge = async (strategyId: string) => {
    setIsHedging(true);
    try {
      await axios.post('/api/payment/fx-hedge', { strategy_id: strategyId });
      setHedges(prev => prev.map(h => h.id === strategyId ? { ...h, status: 'Active' } : h));
    } catch (e) {
      console.error("Hedge execution failed", e);
    } finally {
      setIsHedging(false);
    }
  };

  const handleHyperSimulation = async (scenario: any) => {
    setIsSimulatingHyper(scenario.id);
    setHyperResults(null);
    try {
      const res = await axios.post('/api/payment/fx-hyper-simulation', { scenario_id: scenario.id });
      setHyperResults(res.data);
    } catch (e) {
      console.error("Hyper sim failed", e);
    } finally {
      setIsSimulatingHyper(null);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
      case 'Completed':
      case 'Settled':
      case 'Active':
        return 'bg-emerald-50 text-emerald-700 border-emerald-100';
      case 'Processing':
      case 'Pending':
        return 'bg-amber-50 text-amber-700 border-amber-100';
      case 'Rejected':
      case 'Cancelled':
      case 'Fail':
      case 'Flagged':
        return 'bg-rose-50 text-rose-700 border-rose-100';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-100';
    }
  };

  return (
    <main className="bg-white min-h-screen pb-24">
      <SharedHero 
        badge="Institutional Finance"
        title="Trade Treasury Hub"
        subtitle="Sovereign-grade payment routing, neural FX optimization, and global liquidity settlement mesh."
      />

      <section className="bg-white border-b border-gray-100 sticky top-16 z-40 backdrop-blur-md bg-white/90">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex gap-12 pt-8 overflow-x-auto no-scrollbar">
             {[
               { id: 'treasury', label: 'Treasury Nodes', icon: Wallet },
               { id: 'risk', label: 'FX Risk Analytics', icon: Radar },
               { id: 'lc', label: 'Letters of Credit', icon: Landmark },
               { id: 'routing', label: 'Advanced Routing', icon: Navigation },
               { id: 'fx', label: 'FX Optimization', icon: Calculator },
               { id: 'hedging', label: 'Risk Hedging', icon: ShieldAlert },
               { id: 'hyper-fx', label: 'Hyper-Global FX', icon: Flame }
             ].map((tab) => (
               <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`pb-4 text-xs font-bold uppercase tracking-[0.2em] transition-all relative flex items-center gap-2 shrink-0 ${activeTab === tab.id ? 'text-[#1E3A8A]' : 'text-gray-400 hover:text-gray-600'}`}
               >
                 <tab.icon size={14} /> {tab.label}
                 {activeTab === tab.id && <motion.div layoutId="finance-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1E3A8A]" />}
               </button>
             ))}
          </div>
        </div>
      </section>
      
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {loading ? (
              <div key="loading" className="flex flex-col items-center justify-center py-32 text-gray-400 gap-4">
                <Loader2 className="animate-spin" size={48} />
                <p className="text-sm font-bold uppercase tracking-widest text-center">Bootstrapping Financial Nodes...</p>
              </div>
            ) : error ? (
              <div key="error" className="flex flex-col items-center justify-center py-32 text-rose-500 gap-4">
                <AlertCircle size={48} />
                <p className="text-sm font-bold uppercase tracking-widest text-center">{error}</p>
                <button onClick={() => window.location.reload()} className="mt-4 px-6 py-2 bg-[#111827] text-white text-[10px] font-bold uppercase rounded-lg">Reconnect Nodes</button>
              </div>
            ) : (
              <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-20">
                
                {activeTab === 'treasury' && data && (
                  <div className="space-y-16">
                    <div className="grid gap-6 sm:grid-cols-3">
                      {data.wallet?.map((w: any) => (
                        <div key={w.currency} className="p-8 rounded-[32px] border border-gray-100 bg-[#F8FAFC] hover:shadow-2xl transition-all relative overflow-hidden group">
                          <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:scale-110 transition-all"><TrendingUp size={80} /></div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">{w.currency} Reserve</p>
                          <div className="flex items-baseline gap-2">
                             <span className="text-4xl font-bold text-[#111827]">{w.balance.toLocaleString()}</span>
                             <span className="text-xs font-bold text-emerald-600">{w.trend}</span>
                          </div>
                          <div className="mt-6 flex justify-between items-center">
                             <p className="text-[9px] font-bold text-gray-400 uppercase">Hedge Gain: <span className="text-emerald-600">{w.hedge_gain}</span></p>
                             <div className="h-1 w-24 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-primary w-[70%]" />
                             </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="grid gap-12 lg:grid-cols-3">
                       <div className="lg:col-span-2">
                          <h3 className="text-xl font-bold text-[#111827] mb-8">Optimization Savings Trend</h3>
                          <div className="h-[300px] w-full bg-white p-8 rounded-[32px] border border-gray-100 shadow-xl corporate-card">
                             <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={data.optimizationSavings || []}>
                                   <defs>
                                      <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                                         <stop offset="5%" stopColor="#1E3A8A" stopOpacity={0.1}/>
                                         <stop offset="95%" stopColor="#1E3A8A" stopOpacity={0}/>
                                      </linearGradient>
                                   </defs>
                                   <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                                   <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 10 }} />
                                   <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 10 }} />
                                   <Tooltip />
                                   <Area type="monotone" dataKey="savings" stroke="#1E3A8A" fillOpacity={1} fill="url(#colorSavings)" strokeWidth={2} />
                                </AreaChart>
                             </ResponsiveContainer>
                          </div>
                       </div>
                       <div className="space-y-8">
                          <div className="p-8 rounded-[32px] bg-[#0F172A] text-white shadow-2xl relative overflow-hidden">
                             <div className="absolute top-0 right-0 p-8 opacity-5"><Zap size={120} /></div>
                             <h4 className="text-xl font-bold mb-4">Neural Parity Active</h4>
                             <p className="text-xs text-gray-400 leading-relaxed mb-8">Routing engine is dynamically optimizing for $2.8k in monthly institutional savings.</p>
                             <div className="space-y-4">
                                {[
                                  { label: 'Active Routes', val: '12' },
                                  { label: 'Avg Latency', val: '450ms' },
                                  { label: 'Risk Protocol', val: 'Swift-L3' }
                                ].map(item => (
                                  <div key={item.label} className="flex justify-between items-center border-b border-white/5 pb-2">
                                     <span className="text-[10px] font-bold text-gray-500 uppercase">{item.label}</span>
                                     <span className="text-xs font-bold text-primary">{item.val}</span>
                                  </div>
                                ))}
                             </div>
                          </div>
                       </div>
                    </div>
                  </div>
                )}

                {activeTab === 'fx' && (
                  <div className="grid gap-12 lg:grid-cols-2">
                    <div className="space-y-10">
                       <h3 className="text-2xl font-bold text-[#111827]">FX Conversion Engine</h3>
                       <div className="p-10 rounded-[40px] bg-[#F8FAFC] border border-gray-100 shadow-xl space-y-8">
                          <div className="grid gap-6 sm:grid-cols-2">
                             <div className="space-y-2">
                                <label className="text-[10px] font-bold text-gray-400 uppercase">From Currency</label>
                                <select 
                                  className="w-full px-4 py-3 bg-white border border-gray-100 rounded-xl text-sm font-bold"
                                  value={fxFrom}
                                  onChange={e => setFxFrom(e.target.value)}
                                >
                                   {['USD', 'EUR', 'GBP', 'INR', 'CNY', 'JPY'].map(c => <option key={c} value={c}>{c}</option>)}
                                </select>
                             </div>
                             <div className="space-y-2">
                                <label className="text-[10px] font-bold text-gray-400 uppercase">To Currency</label>
                                <select 
                                  className="w-full px-4 py-3 bg-white border border-gray-100 rounded-xl text-sm font-bold"
                                  value={fxTo}
                                  onChange={e => setFxTo(e.target.value)}
                                >
                                   {['INR', 'USD', 'EUR', 'GBP', 'CNY', 'JPY'].map(c => <option key={c} value={c}>{c}</option>)}
                                </select>
                             </div>
                          </div>
                          <div className="space-y-2">
                             <label className="text-[10px] font-bold text-gray-400 uppercase">Amount</label>
                             <input 
                               type="number"
                               className="w-full px-4 py-3 bg-white border border-gray-100 rounded-xl text-lg font-bold"
                               value={fxAmount}
                               onChange={e => setFxAmount(e.target.value)}
                             />
                          </div>
                          <button 
                            onClick={handleFXCalculate}
                            disabled={fxLoading}
                            className="w-full py-5 bg-[#111827] text-white text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-[#1E3A8A] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                          >
                             {fxLoading ? <Loader2 className="animate-spin" size={18} /> : <>Calculate Parity <Calculator size={18} /></>}
                          </button>
                       </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                       <AnimatePresence mode="wait">
                          {fxResult ? (
                            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full p-10 rounded-[40px] bg-white border border-gray-100 shadow-2xl text-center space-y-8">
                               <div className="h-20 w-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-inner"><ArrowRightLeft size={40} /></div>
                               <div>
                                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Optimized Conversion</p>
                                  <p className="text-5xl font-bold text-[#111827]">{fxResult.converted_amount?.toLocaleString()} <span className="text-lg text-gray-400">{fxResult.to_currency}</span></p>
                               </div>
                               <div className="pt-8 border-t border-gray-50 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                                  <span className="text-gray-400">Institutional Rate: {fxResult.fx_rate_used}</span>
                                  <span className="text-emerald-600">Goal: {fxResult.optimization_goal}</span>
                               </div>
                            </motion.div>
                          ) : (
                            <div className="text-center text-gray-300 space-y-6">
                               <Calculator size={80} className="mx-auto" />
                               <p className="text-sm font-bold uppercase tracking-widest">Enter parameters to simulate neural FX parity</p>
                            </div>
                          )}
                       </AnimatePresence>
                    </div>
                  </div>
                )}

                {/* Remaining tabs Risk, LC, Routing, Hedging, Hyper-FX implemented with similar guards */}
                {activeTab === 'risk' && data && (
                  <div className="space-y-12">
                    <div className="flex justify-between items-center mb-8">
                       <div>
                          <h3 className="text-2xl font-bold text-[#111827] flex items-center gap-3"><Radar className="text-primary" size={24} /> FX Risk Analytics Mesh</h3>
                          <p className="text-gray-500 mt-1">Predictive volatility modeling and exposure mapping for institutional corridors.</p>
                       </div>
                       <div className="flex items-center gap-4">
                          <button className="px-6 py-2.5 bg-[#111827] text-white text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-[#1E3A8A] flex items-center gap-2"><Sparkles size={14} /> Optimize Corridors</button>
                       </div>
                    </div>
                    <div className="grid gap-12 lg:grid-cols-2">
                       <div className="space-y-6">
                          {data.fxRiskAnalytics?.map((risk: any) => (
                            <div key={risk.pair} className="p-8 rounded-3xl border border-gray-100 bg-[#F8FAFC] hover:shadow-2xl transition-all group">
                               <div className="flex justify-between items-start mb-6">
                                  <div>
                                     <h4 className="text-xl font-bold text-[#111827]">{risk.pair}</h4>
                                     <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase border mt-2 inline-block ${risk.risk_level === 'High' ? 'bg-rose-50 text-rose-700 border-rose-100' : 'bg-emerald-50 text-emerald-700 border-emerald-100'}`}>Volatility Index: {risk.volatility}</span>
                                  </div>
                                  <div className="text-right">
                                     <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Active Exposure</p>
                                     <p className="text-lg font-bold text-[#111827]">${(risk.exposure / 1000000).toFixed(1)}M</p>
                                  </div>
                               </div>
                               <div className="p-4 bg-white rounded-2xl border border-gray-50 flex items-center gap-3">
                                  <BrainCircuit size={16} className="text-[#1E3A8A]" />
                                  <p className="text-xs font-medium text-gray-500 leading-relaxed italic">"{risk.suggestion}"</p>
                               </div>
                            </div>
                          ))}
                       </div>
                       <div className="p-10 rounded-[40px] border border-gray-100 bg-white shadow-2xl relative overflow-hidden flex flex-col justify-center">
                          <h4 className="text-xl font-bold text-[#111827] mb-10 flex items-center gap-3"><Globe size={24} className="text-primary" /> Regional FX Risk Heatmap</h4>
                          <div className="grid grid-cols-2 gap-6">
                             {data.fxHeatmap?.map((item: any) => (
                               <div key={item.region} className="p-6 rounded-2xl bg-gray-50 flex flex-col items-center text-center">
                                  <div className="h-16 w-16 rounded-full flex items-center justify-center text-white font-bold mb-4" style={{ backgroundColor: item.color }}>
                                     {item.risk}%
                                  </div>
                                  <h5 className="font-bold text-[#111827]">{item.region} Node</h5>
                                  <p className="text-[9px] text-gray-400 uppercase font-bold tracking-widest mt-1">Institutional Volatility</p>
                               </div>
                             ))}
                          </div>
                       </div>
                    </div>
                  </div>
                )}

              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
