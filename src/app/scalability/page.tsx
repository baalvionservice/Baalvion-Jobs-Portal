
'use client';

import { SharedHero } from '@/app/components/SharedHero';
import { 
  Activity, 
  Zap, 
  Cpu, 
  Globe, 
  ShieldCheck, 
  Loader2, 
  Terminal, 
  BarChart3, 
  AlertTriangle,
  History,
  Network,
  RefreshCw,
  Server,
  Layers,
  Flame,
  ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';

export default function ScalabilityPage() {
  const [loading, setLoading] = useState(true);
  const [testing, setTesting] = useState<string | null>(null);
  const [performance, setPerformance] = useState<any[]>([]);
  const [regionalLatency, setRegionalLatency] = useState<any[]>([]);
  const [scenarios, setScenarios] = useState<any[]>([]);
  const [activeScenario, setActiveScenario] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [perfRes, regRes] = await Promise.all([
          axios.get('/api/monitoring/performance'),
          axios.get('/api/monitoring/regional-latency')
        ]);
        setPerformance(perfRes.data);
        setRegionalLatency(regRes.data);
        // Mock scenarios from the mock-api.ts file indirectly
        setScenarios([
          { id: "S1", name: "Extreme Market Crash", impact: "High Volume / High Latency", color: "rose" },
          { id: "S2", name: "Sovereign Node Offline", impact: "Failover Rerouting", color: "amber" },
          { id: "S3", name: "Global Sourcing Surge", impact: "Throughput Peak", color: "blue" },
          { id: "S4", name: "API Throttling Test", impact: "Rate Limit Resilience", color: "emerald" }
        ]);
      } catch (e) {
        console.error("Scalability fetch failed", e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const runStressTest = async (scenario: any) => {
    setTesting(scenario.id);
    setActiveScenario(scenario);
    try {
      await axios.post('/api/monitoring/run-stress-test', { 
        scenario_id: scenario.id,
        scenario_name: scenario.name 
      });
      // Simulate performance jitter during test
      setPerformance(prev => prev.map(p => ({
        ...p,
        latency: p.latency + (Math.random() * 20),
        errorRate: p.errorRate + (Math.random() * 0.1)
      })));
      await new Promise(r => setTimeout(r, 2000));
    } finally {
      setTesting(null);
    }
  };

  return (
    <main className="bg-white min-h-screen pb-24">
      <SharedHero 
        badge="Load & Scalability"
        title="Institutional Performance Mesh"
        subtitle="Monitoring 99.998% global trade availability across $33T+ simulated throughput nodes."
      />

      <section className="py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid gap-12 lg:grid-cols-3 mb-24">
             {/* Performance KPIs */}
             <div className="lg:col-span-2 space-y-12">
                <div className="flex items-center justify-between">
                   <h3 className="text-2xl font-bold text-[#111827] flex items-center gap-3"><Activity className="text-primary" size={24} /> Global Load Telemetry</h3>
                   <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100">
                      <Zap size={14} className="animate-pulse" /> Live Mesh Active
                   </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                   <div className="p-8 rounded-3xl border border-gray-100 bg-[#F8FAFC] shadow-xl corporate-card">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">Throughput (Tx/Sec)</p>
                      <div className="h-[200px]">
                         <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={performance}>
                               <defs>
                                  <linearGradient id="colorThroughput" x1="0" y1="0" x2="0" y2="1">
                                     <stop offset="5%" stopColor="#1E3A8A" stopOpacity={0.1}/>
                                     <stop offset="95%" stopColor="#1E3A8A" stopOpacity={0}/>
                                  </linearGradient>
                               </defs>
                               <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                               <XAxis dataKey="time" hide />
                               <YAxis hide />
                               <Tooltip />
                               <Area type="monotone" dataKey="throughput" stroke="#1E3A8A" fillOpacity={1} fill="url(#colorThroughput)" strokeWidth={2} />
                            </AreaChart>
                         </ResponsiveContainer>
                      </div>
                   </div>
                   <div className="p-8 rounded-3xl border border-gray-100 bg-[#F8FAFC] shadow-xl corporate-card">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">Latency Mesh (ms)</p>
                      <div className="h-[200px]">
                         <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={performance}>
                               <defs>
                                  <linearGradient id="colorLatency" x1="0" y1="0" x2="0" y2="1">
                                     <stop offset="5%" stopColor="#0F766E" stopOpacity={0.1}/>
                                     <stop offset="95%" stopColor="#0F766E" stopOpacity={0}/>
                                  </linearGradient>
                               </defs>
                               <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                               <XAxis dataKey="time" hide />
                               <YAxis hide />
                               <Tooltip />
                               <Area type="monotone" dataKey="latency" stroke="#0F766E" fillOpacity={1} fill="url(#colorLatency)" strokeWidth={2} />
                            </AreaChart>
                         </ResponsiveContainer>
                      </div>
                   </div>
                </div>
             </div>

             {/* Stress Test Controls */}
             <div className="space-y-8">
                <h3 className="text-xl font-bold text-[#111827]">Stress Scenarios</h3>
                <div className="p-10 rounded-[40px] bg-[#0F172A] text-white shadow-2xl relative overflow-hidden h-full min-h-[400px]">
                   <div className="absolute top-0 right-0 p-10 opacity-5 rotate-12"><Flame size={200} /></div>
                   <div className="relative z-10 space-y-6">
                      {scenarios.map(s => (
                        <button 
                          key={s.id}
                          onClick={() => runStressTest(s)}
                          disabled={!!testing}
                          className={`w-full p-6 text-left rounded-2xl border transition-all flex items-center justify-between group ${testing === s.id ? 'bg-white text-[#111827]' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
                        >
                           <div>
                              <h4 className="font-bold text-sm">{s.name}</h4>
                              <p className={`text-[10px] mt-1 ${testing === s.id ? 'text-gray-500' : 'text-gray-400'}`}>{s.impact}</p>
                           </div>
                           {testing === s.id ? <Loader2 className="animate-spin text-primary" size={18} /> : <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={18} />}
                        </button>
                      ))}
                      <div className="pt-10 border-t border-white/5">
                         <div className="flex justify-between items-center mb-4">
                            <span className="text-[10px] font-bold text-gray-500 uppercase">System Integrity</span>
                            <span className="text-[10px] font-bold text-emerald-400">99.998% Stable</span>
                         </div>
                         <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                              animate={{ width: testing ? '60%' : '99.9%' }}
                              className="h-full bg-emerald-400" 
                            />
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
             {/* Regional Breakdown */}
             <div className="space-y-8">
                <h3 className="text-2xl font-bold text-[#111827] flex items-center gap-3"><Globe className="text-[#1E3A8A]" size={24} /> Regional Node Latency</h3>
                <div className="grid gap-4">
                   {regionalLatency.map(reg => (
                     <div key={reg.region} className="p-8 rounded-3xl border border-gray-100 bg-white flex items-center justify-between group hover:shadow-xl transition-all">
                        <div className="flex items-center gap-6">
                           <div className={`h-12 w-12 rounded-2xl flex items-center justify-center transition-all ${reg.status === 'Healthy' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600 animate-pulse'}`}>
                              <Server size={22} />
                           </div>
                           <div>
                              <h4 className="font-bold text-[#111827]">{reg.region} Node</h4>
                              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Status: {reg.status}</p>
                           </div>
                        </div>
                        <div className="text-right">
                           <p className="text-2xl font-bold text-[#1E3A8A]">{reg.latency}ms</p>
                           <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Global Parity</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>

             {/* System Health Monitor */}
             <div className="space-y-8">
                <h3 className="text-2xl font-bold text-[#111827] flex items-center gap-3"><Layers className="text-[#1E3A8A]" size={24} /> Load Balancing Core</h3>
                <div className="p-10 rounded-[40px] bg-[#F8FAFC] border border-gray-100 relative overflow-hidden">
                   <div className="space-y-10">
                      {[
                        { label: 'Neural Mesh Scaling', val: 'V4.2 (Auto)', icon: Cpu },
                        { label: 'Concurrent Node Sessions', val: '1.2M DID', icon: Network },
                        { label: 'Global API Records/Hr', val: '250M+', icon: Terminal },
                        { label: 'Persistence Sync Latency', val: '< 2ms', icon: History }
                      ].map(item => (
                        <div key={item.label} className="flex items-center justify-between pb-6 border-b border-gray-200">
                           <div className="flex items-center gap-4">
                              <item.icon className="text-[#1E3A8A]" size={20} />
                              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{item.label}</span>
                           </div>
                           <span className="text-sm font-bold text-[#111827]">{item.val}</span>
                        </div>
                      ))}
                   </div>
                   <div className="mt-12 p-8 rounded-3xl bg-[#111827] text-white">
                      <div className="flex items-center gap-4 mb-4">
                         <ShieldCheck className="text-emerald-400" size={24} />
                         <h4 className="font-bold">Institutional Sourcing Active</h4>
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed">Dynamic load balancers are currently distributing $33T+ volume across 450 global cloud clusters.</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Test Log */}
          <div className="mt-24">
             <h3 className="text-xl font-bold text-[#111827] mb-8">Performance Event Log</h3>
             <div className="overflow-x-auto rounded-[32px] border border-gray-100 bg-white shadow-lg">
                <table className="w-full text-left">
                   <thead className="bg-[#F8FAFC] border-b border-gray-100">
                      <tr>{['Event ID', 'Institutional Node', 'Type', 'Load Impact', 'Timestamp'].map(h => <th key={h} className="px-8 py-5 text-[10px] font-bold text-gray-500 uppercase tracking-widest">{h}</th>)}</tr>
                   </thead>
                   <tbody>
                      {[
                        { id: 'PF1001', node: 'NA-East-01', type: 'Load Peak', impact: '+12% CPU', time: '2 Min Ago' },
                        { id: 'PF1002', node: 'Global-Mesh-AI', type: 'Neural Scaling', impact: 'Stable', time: '12 Min Ago' },
                        { id: 'PF1003', node: 'EU-West-04', type: 'API Throttling', impact: 'Resilient', time: '45 Min Ago' }
                      ].map(log => (
                        <tr key={log.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                           <td className="px-8 py-6 font-bold text-[#1E3A8A] text-xs">{log.id}</td>
                           <td className="px-8 py-6 text-sm text-[#111827]">{log.node}</td>
                           <td className="px-8 py-6 text-sm font-medium">{log.type}</td>
                           <td className="px-8 py-6"><span className="text-[10px] font-bold text-[#1E3A8A] uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">{log.impact}</span></td>
                           <td className="px-8 py-6 text-xs text-gray-400">{log.time}</td>
                        </tr>
                      ))}
                   </tbody>
                </table>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
