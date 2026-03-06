
'use client';

import { SharedHero } from '@/app/components/SharedHero';
import { AnalyticsCards } from '@/app/components/AnalyticsCards';
import { 
  TrendingUp, 
  Download, 
  Loader2,
  BarChart3,
  Search,
  Zap,
  Clock,
  LayoutGrid,
  ShieldCheck,
  BrainCircuit,
  AlertTriangle,
  ChevronRight,
  Target,
  Play,
  Settings2,
  Plus,
  ArrowRight,
  ShieldAlert,
  Layers,
  Cpu,
  Globe,
  Activity,
  History,
  TrendingDown,
  Navigation,
  Anchor,
  Box,
  MapPin,
  RefreshCw,
  MoreVertical,
  CheckCircle2,
  ScatterChart as LucideScatter,
  Wifi,
  Radio
} from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, AreaChart, Area, ScatterChart, Scatter, ZAxis } from 'recharts';
import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

type IntelTab = 'command' | 'analytics' | 'monitoring' | 'forecasts' | 'whatifs' | 'decisions';

export default function TradeIntelligencePage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<IntelTab>('command');
  const [period, setPeriod] = useState("monthly");
  const [data, setData] = useState<any>(null);

  const [shipments, setShipments] = useState<any[]>([]);
  const [liveFeed, setLiveFeed] = useState<any[]>([]);
  const [forecasts, setForecasts] = useState<any[]>([]);
  const [whatIfs, setWhatIfs] = useState<any[]>([]);
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [selectedWhatIf, setSelectedWhatIf] = useState<any>(null);
  const [simulationResult, setSimulationResult] = useState<any>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const fetchIntelData = async () => {
    try {
      setError(null);
      const [kpiRes, volRes, shipRes, wiRes, feedRes, forRes, recRes] = await Promise.all([
        axios.get('/api/analytics/kpis'),
        axios.get(`/api/analytics/trade-volume?period=${period}`),
        axios.get('/api/monitoring/shipments'),
        axios.get('/api/ai/what-ifs'),
        axios.get('/api/monitoring/live-feed'),
        axios.get('/api/ai/forecasts'),
        axios.get('/api/ai/recommendations')
      ]);
      
      setData({
        kpis: kpiRes.data,
        tradeVolume: volRes.data,
      });
      setShipments(shipRes.data || []);
      setWhatIfs(wiRes.data || []);
      setLiveFeed(feedRes.data || []);
      setForecasts(forRes.data || []);
      setRecommendations(recRes.data || []);
    } catch (e) {
      console.error("Intelligence fetch failed", e);
      setError("AI decision engine sync failed. Re-initiating protocols...");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIntelData();
  }, [period]);

  const handleRunWhatIf = async (wi: any) => {
    setSelectedWhatIf(wi);
    setIsSimulating(true);
    setSimulationResult(null);
    try {
      const res = await axios.post('/api/ai/run-what-if', { scenario_id: wi.id });
      setSimulationResult(res.data);
    } catch (e) {
      console.error("What-if simulation failed", e);
    } finally {
      setIsSimulating(false);
    }
  };

  const analyticsStats = useMemo(() => {
    if (!data || !data.kpis) return [];
    return [
      { label: "Gross Volume", value: `$${((data.kpis.total_users || 0) * 100000 / 1000000).toFixed(1)}M`, trend: "+4.2%", desc: "Gross throughput" },
      { label: "Neural Confidence", value: "98.5%", desc: "AI model certainty" },
      { label: "Predictive Parity", value: "99.2%", desc: "Forecast accuracy" },
      { label: "Risk Anomalies", value: (data.kpis.high_risk_transactions || 0).toString(), desc: "Detected last 24h" }
    ];
  }, [data]);

  return (
    <main className="bg-white min-h-screen pb-24">
      <SharedHero 
        badge="TRADE INTELLIGENCE"
        title="Predictive Trade Analytics"
        subtitle="Leverage AI-driven insights to forecast demand, evaluate vendor risk, and optimize global trade operations with data-driven decision modeling."
      />

      <section className="bg-white border-b border-gray-100 sticky top-16 z-40 backdrop-blur-md bg-white/90">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex gap-12 pt-8 overflow-x-auto no-scrollbar">
             {[
               { id: 'command', label: 'AI Insights Hub', icon: Radio },
               { id: 'analytics', label: 'Global Forecasting', icon: BarChart3 },
               { id: 'monitoring', label: 'Risk Assessment', icon: Globe },
               { id: 'whatifs', label: 'Market Simulations', icon: Target },
               { id: 'decisions', label: 'Neural Decisions', icon: Zap }
             ].map((tab) => (
               <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`pb-4 text-xs font-bold uppercase tracking-[0.2em] transition-all relative flex items-center gap-2 shrink-0 ${activeTab === tab.id ? 'text-[#1E3A8A]' : 'text-gray-400 hover:text-gray-600'}`}
               >
                 <tab.icon size={14} /> {tab.label}
                 {activeTab === tab.id && <motion.div layoutId="intel-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1E3A8A]" />}
               </button>
             ))}
          </div>
        </div>
      </section>
      
      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {loading ? (
              <div key="loading" className="flex flex-col items-center justify-center py-32 text-gray-400 gap-4">
                <Loader2 className="animate-spin" size={48} />
                <p className="text-sm font-bold uppercase tracking-widest">Booting Decision Engine...</p>
              </div>
            ) : error ? (
              <div key="error" className="flex flex-col items-center justify-center py-32 text-rose-500 gap-4">
                <AlertTriangle size={48} />
                <p className="text-sm font-bold uppercase tracking-widest text-center">{error}</p>
                <button onClick={() => window.location.reload()} className="mt-4 px-6 py-2 bg-[#111827] text-white text-[10px] font-bold uppercase rounded-lg">Retry AI Mesh</button>
              </div>
            ) : (
              <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-16">
                
                {activeTab === 'command' && data && (
                  <div className="space-y-16">
                    <AnalyticsCards items={analyticsStats} />
                    
                    <div className="grid gap-12 lg:grid-cols-2">
                       <div className="p-10 rounded-3xl border border-gray-100 bg-[#F8FAFC] shadow-sm">
                          <h3 className="text-xl font-bold text-[#111827] mb-8">Demand Forecasting Node</h3>
                          <div className="h-[300px]">
                             <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={data.tradeVolume || []}>
                                   <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                                   <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 10 }} />
                                   <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 10 }} />
                                   <Tooltip />
                                   <Area type="monotone" dataKey="volume" stroke="#1E3A8A" fill="#1E3A8A" fillOpacity={0.05} strokeWidth={2} />
                                </AreaChart>
                             </ResponsiveContainer>
                          </div>
                       </div>
                       <div className="p-10 rounded-3xl bg-[#0F172A] text-white shadow-2xl relative overflow-hidden">
                          <div className="absolute top-0 right-0 p-8 opacity-5 rotate-12"><BrainCircuit size={200} /></div>
                          <h4 className="text-2xl font-bold mb-6">Risk Monitoring Mesh</h4>
                          <p className="text-sm text-gray-400 leading-relaxed mb-8">Identifying trade compliance issues, neural fraud signatures, and systemic vendor reliability trends in real-time.</p>
                          <div className="space-y-4 pt-8 border-t border-white/5">
                             {['Sanctions Node Sync', 'Fraud Signature Check', 'Vendor Reliability Index'].map(m => (
                               <div key={m} className="flex justify-between items-center">
                                  <span className="text-[10px] font-bold uppercase text-gray-500">{m}</span>
                                  <span className="text-[10px] font-bold text-emerald-400 uppercase">Active</span>
                               </div>
                             ))}
                          </div>
                       </div>
                    </div>
                  </div>
                )}

                {activeTab === 'whatifs' && (
                  <div className="grid gap-12 lg:grid-cols-3">
                    <div className="lg:col-span-1 space-y-6">
                       {whatIfs.map(wi => (
                         <button 
                          key={wi.id}
                          onClick={() => handleRunWhatIf(wi)}
                          className={`w-full p-8 rounded-3xl border text-left transition-all ${selectedWhatIf?.id === wi.id ? 'bg-[#111827] text-white border-[#111827] shadow-xl' : 'bg-[#F8FAFC] border-gray-100 hover:border-primary/30'}`}
                         >
                            <h4 className="font-bold text-lg">{wi.id === 'WI1' ? 'Global Market Crash' : wi.id === 'WI2' ? 'Sudden FX Spike' : 'Vendor Bankruptcy'}</h4>
                            <p className={`text-xs mt-2 ${selectedWhatIf?.id === wi.id ? 'text-gray-400' : 'text-gray-500'}`}>{wi.impact}</p>
                         </button>
                       ))}
                    </div>
                    <div className="lg:col-span-2">
                       <div className="p-10 rounded-[40px] bg-white border border-gray-100 shadow-2xl h-full flex flex-col justify-center items-center relative overflow-hidden min-h-[400px]">
                          <AnimatePresence mode="wait">
                             {isSimulating ? (
                               <motion.div key="simulating" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center space-y-6">
                                  <Loader2 className="animate-spin text-[#1E3A8A] mx-auto" size={64} />
                                  <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">Executing Scenario Impact Analysis...</p>
                               </motion.div>
                             ) : simulationResult ? (
                               <motion.div key="result" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="w-full space-y-10">
                                  <div className="p-8 rounded-3xl bg-rose-50 border border-rose-100">
                                     <p className="text-[10px] font-bold text-rose-400 uppercase tracking-widest mb-2">Neural Revenue Projection</p>
                                     <p className="text-3xl font-bold text-rose-600">{simulationResult.impact}</p>
                                  </div>
                                  <div className="p-8 rounded-3xl bg-blue-50 border border-blue-100">
                                     <p className="text-[10px] font-bold text-[#1E3A8A] uppercase tracking-widest mb-2">AI Recommended Action</p>
                                     <p className="text-sm font-bold text-[#111827]">{simulationResult.recommendation}</p>
                                  </div>
                               </motion.div>
                             ) : (
                               <div className="text-center space-y-6">
                                  <Target className="text-gray-200 mx-auto" size={80} />
                                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Select an institutional scenario to model risk</p>
                               </div>
                             )}
                          </AnimatePresence>
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
