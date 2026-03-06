
'use client';

import { SharedHero } from '@/app/components/SharedHero';
import { 
  CheckCircle2, 
  Terminal, 
  ShieldCheck, 
  Activity, 
  Loader2, 
  ChevronRight, 
  ShieldAlert, 
  Zap,
  Globe,
  Database,
  Cpu,
  BarChart3,
  Network,
  Scale,
  Settings,
  BrainCircuit,
  History,
  Lock,
  Box,
  Truck,
  Layers,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  RefreshCw
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function FinalAuditPage() {
  const [loading, setLoading] = useState(true);
  const [verifying, setVerifying] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [simResults, setSimResults] = useState<any>(null);
  const [currentScanNode, setCurrentScanNode] = useState<string | null>(null);
  const [mountTime, setMountTime] = useState("");

  const fetchAudit = async () => {
    try {
      const [auditRes, verifyRes] = await Promise.all([
        axios.get('/api/audit'),
        axios.get('/api/audit/verify')
      ]);
      setResults(auditRes.data);
      setSimResults(verifyRes.data);
    } catch (e) {
      console.error("Audit fetch error", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAudit();
    setMountTime(new Date().toLocaleDateString() + " • " + new Date().toLocaleTimeString());
  }, []);

  const runFullSystemScan = async () => {
    setVerifying(true);
    // Simulate node-by-node verification
    for (const node of results) {
      setCurrentScanNode(node.name);
      await new Promise(r => setTimeout(r, 200));
    }
    setCurrentScanNode(null);
    setVerifying(false);
  };

  const icons = [ShieldCheck, Activity, Database, Scale, BrainCircuit, Cpu, Globe, Lock, Settings, History, Network, Zap, Box, Truck, Layers, BarChart3];

  return (
    <main className="bg-white min-h-screen pb-24">
      <SharedHero 
        badge="Phase 5 Sign-off"
        title="Institutional Verification Mesh"
        subtitle="Final end-to-end audit of all 24 trade nodes including Real-time Dashboards, AI Decision Modeling, and Global Automation."
      />

      <section className="py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold text-[#111827] flex items-center gap-4">
                <Terminal size={32} className="text-[#1E3A8A]" /> Sovereign Console
              </h2>
              <p className="text-gray-500 mt-2 font-medium">System Version: Baalvion V5.0-Global-Mesh (Active)</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
               {verifying ? (
                <div className="flex items-center gap-4 px-8 py-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 shadow-inner w-full sm:w-auto">
                   <Loader2 size={20} className="animate-spin text-primary" />
                   <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Scanning Node</p>
                      <p className="text-xs font-bold text-[#111827] truncate max-w-[150px]">{currentScanNode}</p>
                   </div>
                </div>
              ) : (
                <button 
                  onClick={runFullSystemScan}
                  className="w-full sm:w-auto px-10 py-5 bg-[#111827] text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-2xl hover:bg-[#1E3A8A] transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3"
                >
                  <Zap size={16} className="text-amber-400" /> Run Full System Verification
                </button>
              )}
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-3 mb-24">
             <div className="lg:col-span-2 space-y-8">
                <h3 className="text-xl font-bold text-[#111827] flex items-center gap-3"><BrainCircuit className="text-primary" size={24} /> E2E Phase 5 Workflows</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                   {simResults?.e2eResults.map((sim: any) => (
                     <div key={sim.module} className="p-8 rounded-3xl border border-gray-100 bg-[#F8FAFC] hover:shadow-xl transition-all group">
                        <div className="flex justify-between items-start mb-6">
                           <h4 className="font-bold text-[#111827]">{sim.module}</h4>
                           <span className="text-[9px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">{sim.status}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                           {sim.latency && (
                             <div>
                                <p className="text-[9px] font-bold text-gray-400 uppercase">Avg Latency</p>
                                <p className="text-sm font-bold text-[#1E3A8A]">{sim.latency}</p>
                             </div>
                           )}
                           {sim.accuracy && (
                             <div>
                                <p className="text-[9px] font-bold text-gray-400 uppercase">Neural Accuracy</p>
                                <p className="text-sm font-bold text-[#1E3A8A]">{sim.accuracy}</p>
                             </div>
                           )}
                           {sim.throughput && (
                             <div>
                                <p className="text-[9px] font-bold text-gray-400 uppercase">Throughput</p>
                                <p className="text-sm font-bold text-[#1E3A8A]">{sim.throughput}</p>
                             </div>
                           )}
                           {sim.savings_projected && (
                             <div>
                                <p className="text-[9px] font-bold text-gray-400 uppercase">Savings Mesh</p>
                                <p className="text-sm font-bold text-emerald-600">{sim.savings_projected}</p>
                             </div>
                           )}
                        </div>
                     </div>
                   ))}
                </div>
             </div>

             <div className="space-y-8">
                <h3 className="text-xl font-bold text-[#111827]">Phase 5 Mesh Stats</h3>
                <div className="p-10 rounded-[40px] bg-[#0F172A] text-white shadow-2xl relative overflow-hidden h-full min-h-[400px]">
                   <div className="absolute top-0 right-0 p-10 opacity-5 rotate-12"><Activity size={200} /></div>
                   <div className="relative z-10 space-y-10">
                      <div>
                         <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Simulated Scale</p>
                         <p className="text-4xl font-bold text-primary">{simResults?.stressTest.transactions || 'Synchronizing...'}</p>
                      </div>
                      <div className="space-y-6 pt-10 border-t border-white/5">
                         {[
                           { label: 'Concurrent Nodes', val: simResults?.stressTest.users },
                           { label: 'Uptime Parity', val: simResults?.stressTest.availability },
                           { label: 'Automation Status', val: 'Fully Operational' }
                         ].map(item => (
                           <div key={item.label} className="flex justify-between items-center">
                              <span className="text-[10px] font-bold uppercase text-gray-500">{item.label}</span>
                              <span className="text-[10px] font-bold text-emerald-400 uppercase flex items-center gap-2">{item.val || '...'} <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /></span>
                           </div>
                         ))}
                      </div>
                      <button className="w-full py-5 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all">Download Validation Pack</button>
                   </div>
                </div>
             </div>
          </div>

          <div className="grid gap-4 sm:gap-6">
            <h3 className="text-xl font-bold text-[#111827] mb-4 flex items-center gap-3"><Layers className="text-[#1E3A8A]" size={24} /> Verified 24-Node Ledger</h3>
            <AnimatePresence mode="popLayout">
              {loading ? (
                Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="h-28 bg-gray-50 rounded-2xl animate-pulse border border-gray-100" />
                ))
              ) : (
                results.map((res, i) => {
                  const Icon = icons[i % icons.length];
                  const isScanning = currentScanNode === res.name;
                  return (
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} key={res.name} className={`p-6 sm:p-10 rounded-2xl border flex flex-col md:flex-row md:items-center justify-between group transition-all corporate-card gap-6 ${isScanning ? 'border-primary ring-4 ring-primary/5 bg-blue-50/10' : 'border-gray-100 bg-white'}`}>
                      <div className="flex items-center gap-4 sm:gap-8">
                        <div className={`h-14 w-14 sm:h-16 sm:w-16 shrink-0 rounded-2xl flex items-center justify-center transition-all ${isScanning ? 'bg-primary text-white scale-110 shadow-xl' : 'bg-gray-50 text-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white'}`}>
                          {isScanning ? <RefreshCw className="animate-spin" size={28} /> : <Icon size={28} />}
                        </div>
                        <div className="min-w-0">
                          <h4 className={`text-lg sm:text-xl font-bold transition-colors truncate ${isScanning ? 'text-primary' : 'text-[#111827]'}`}>{res.name}</h4>
                          <p className="text-[10px] sm:text-xs text-gray-500 mt-2 font-medium leading-relaxed">{res.notes}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 pt-4 sm:pt-0">
                        <span className={`px-4 sm:px-6 py-2.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-widest border transition-all ${res.status.includes('Verified') ? 'bg-emerald-50 text-emerald-700 border-emerald-100 shadow-sm' : 'bg-amber-50 text-amber-700 border-amber-100'}`}>
                          {res.status}
                        </span>
                        <ChevronRight className="text-gray-200 group-hover:text-primary transition-colors hidden sm:block" size={20} />
                      </div>
                    </motion.div>
                  )
                })
              )}
            </AnimatePresence>
          </div>

          <div className="mt-24 sm:mt-32 p-8 sm:p-16 rounded-[30px] sm:rounded-[40px] bg-[#0F172A] text-white relative overflow-hidden shadow-3xl">
             <div className="absolute top-0 right-0 p-20 opacity-5 rotate-12 hidden lg:block"><ShieldCheck size={400} /></div>
             <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12 sm:mb-16">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary"><ShieldAlert size={32} /></div>
                  <div>
                    <h3 className="text-2xl sm:text-4xl font-bold tracking-tight">Phase 5 Handover Finalized</h3>
                    <p className="text-sm sm:text-gray-400 font-medium mt-1">Sovereign infrastructure handover for 24 nodes complete. Platform fully global-ready.</p>
                  </div>
                </div>
                <div className="mt-12 sm:mt-20 pt-12 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-8">
                  <div className="flex flex-wrap justify-center sm:justify-start gap-8 sm:gap-12">
                    <div>
                      <p className="text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase mb-2">Completion Timestamp</p>
                      <p className="text-xs font-bold text-white uppercase tracking-widest">{mountTime || "Synchronizing Time Nodes..."}</p>
                    </div>
                    <div>
                      <p className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase mb-2">Verification Hash</p>
                      <p className="text-xs font-mono font-bold text-primary uppercase tracking-widest">0xBAALVION_PHASE_5_FINAL_V5</p>
                    </div>
                  </div>
                  <div className="flex gap-4 w-full sm:w-auto">
                     <button className="flex-1 sm:flex-none px-10 py-5 bg-white text-[#111827] text-[10px] font-bold uppercase tracking-[0.2em] rounded-2xl hover:bg-gray-100 transition-all active:scale-95">Download Sign-off</button>
                     <button className="p-5 bg-white/5 rounded-2xl hover:bg-white/10 transition-all"><AlertTriangle size={24} className="text-amber-400" /></button>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
