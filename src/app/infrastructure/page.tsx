'use client';

import { SharedHero } from '@/app/components/SharedHero';
import { 
  Lock, 
  ShieldCheck, 
  Activity, 
  Loader2,
  Fingerprint,
  Settings,
  History,
  AlertTriangle,
  ChevronRight,
  Database,
  CheckCircle2,
  Zap,
  Radar,
  Network,
  Cloud,
  Code,
  Link as LinkIcon,
  ShieldX,
  Globe,
  Terminal,
  BrainCircuit,
  Eye,
  ArrowUpRight,
  Blocks,
  Key,
  ShieldAlert,
  RefreshCw,
  Search,
  ShieldEllipsis,
  UserX,
  AlertCircle
} from 'lucide-react';
import { infrastructure } from '@/mocks/baalvion-api';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

type InfraTab = 'security' | 'fraud' | 'integration' | 'audit' | 'threats' | 'web3';

export default function InfrastructurePage() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<InfraTab>('security');
  const [data, setData] = useState<any>(null);
  const [integrations, setIntegrations] = useState<any[]>([]);
  const [threats, setThreats] = useState<any[]>([]);
  const [auditLogs, setAuditLogs] = useState<any[]>([]);
  const [blockchainLogs, setBlockchainLogs] = useState<any[]>([]);
  const [fraudEvents, setFraudEvents] = useState<any[]>([]);
  const [verifyingBlock, setVerifyingBlock] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState<string | null>(null);

  const fetchInfra = async () => {
    try {
      const [secRes, intRes, thRes, auditRes, bcRes, frRes] = await Promise.all([
        axios.get('/api/platform/features'), 
        axios.get('/api/integration/status'),
        axios.get('/api/security/threat-heatmap'),
        axios.get('/api/audit/logs'),
        axios.get('/api/security/blockchain-logs'),
        axios.get('/api/security/fraud-events')
      ]);
      
      setData({ security: secRes.data });
      setIntegrations(intRes.data);
      setThreats(thRes.data);
      setAuditLogs(auditRes.data);
      setBlockchainLogs(bcRes.data);
      setFraudEvents(frRes.data);
    } catch (e) {
      console.error("Infrastructure fetch failed", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInfra();
  }, []);

  const handleVerifyBlockchain = async (txHash: string) => {
    setVerifyingBlock(txHash);
    try {
      await axios.post('/api/security/blockchain-verify', { tx_hash: txHash });
      setBlockchainLogs(prev => prev.map(log => log.tx_hash === txHash ? { ...log, integrity: 'Verified', status: 'Finalized' } : log));
    } catch (e) {
      console.error("Verification failed");
    } finally {
      setVerifyingBlock(null);
    }
  };

  const handleLockAccount = async (id: string) => {
    setIsProcessing(id);
    try {
      await new Promise(r => setTimeout(r, 1000));
      setFraudEvents(prev => prev.map(f => f.id === id ? { ...f, status: 'Locked' } : f));
    } finally {
      setIsProcessing(null);
    }
  };

  return (
    <main className="bg-white min-h-screen pb-24">
      <SharedHero 
        badge="TECHNICAL CORE"
        title="Secure B2B Infrastructure"
        subtitle="Scalable API-first architecture designed for global trade compliance, banking integration, and enterprise-grade cloud deployment."
      />
      
      <section className="bg-white border-b border-gray-100 sticky top-16 z-40 backdrop-blur-md bg-white/90">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex gap-12 pt-8 overflow-x-auto no-scrollbar">
             {[
               { id: 'security', label: 'Data Security', icon: ShieldCheck },
               { id: 'fraud', label: 'Fraud Detection', icon: ShieldEllipsis },
               { id: 'integration', label: 'API Mesh', icon: LinkIcon },
               { id: 'web3', label: 'Immutable Ledger', icon: Blocks },
               { id: 'threats', label: 'Cloud Intel', icon: Radar },
               { id: 'audit', label: 'Audit Trail', icon: History }
             ].map((tab) => (
               <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`pb-4 text-xs font-bold uppercase tracking-[0.2em] transition-all relative flex items-center gap-2 shrink-0 ${activeTab === tab.id ? 'text-[#1E3A8A]' : 'text-gray-400 hover:text-gray-600'}`}
               >
                 <tab.icon size={14} /> {tab.label}
                 {activeTab === tab.id && <motion.div layoutId="infra-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1E3A8A]" />}
               </button>
             ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 sm:grid-cols-3 mb-20">
             {[
               { icon: Cloud, title: "Cloud-Ready Deployment", desc: "Low latency, high availability, and global coverage across hybrid nodes." },
               { icon: ShieldCheck, title: "Compliance Core", desc: "Native support for GDPR, ISO 27001, and global trade standards." },
               { icon: Code, title: "API-First Architecture", desc: "Connect with banking APIs, government portals, and legacy ERP systems." }
             ].map((p, i) => (
               <div key={i} className="p-8 rounded-2xl border border-gray-100 bg-[#F8FAFC]">
                  <p className="text-[10px] font-bold text-[#1E3A8A] uppercase tracking-widest mb-4">Infrastructure Node 0{i+1}</p>
                  <h4 className="text-xl font-bold text-[#111827] mb-3">{p.title}</h4>
                  <p className="text-xs text-[#6B7280] leading-relaxed">{p.desc}</p>
               </div>
             ))}
          </div>

          <AnimatePresence mode="wait">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-32 text-gray-400 gap-4">
                <Loader2 className="animate-spin" size={48} />
                <p className="text-sm font-bold uppercase tracking-widest">Synchronizing Infrastructure Mesh...</p>
              </div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-16">
                
                {activeTab === 'security' && (
                  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {infrastructure.security.map((s: any, i: number) => (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} key={s.id} className="p-10 rounded-3xl border border-gray-100 bg-[#F8FAFC] hover:bg-white hover:shadow-2xl transition-all group corporate-card">
                        <div className="flex items-center gap-4 mb-8">
                          <div className="h-12 w-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white transition-all">
                            {s.name.includes("Encryption") ? <Fingerprint size={22} /> : <Lock size={22} />}
                          </div>
                          <div>
                            <h4 className="font-bold text-[#111827] text-lg leading-tight">{s.name}</h4>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">ISO Verified</span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed mb-6">{s.description}</p>
                        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                           <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest flex items-center gap-2"><CheckCircle2 size={12} /> {s.status}</span>
                           <ShieldCheck size={16} className="text-emerald-500" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeTab === 'fraud' && (
                  <div className="space-y-12">
                    <div className="flex justify-between items-center mb-8">
                       <div>
                          <h3 className="text-2xl font-bold text-[#111827] flex items-center gap-3"><ShieldEllipsis className="text-rose-500" size={24} /> Neural Fraud Mesh</h3>
                          <p className="text-gray-500 mt-1">Real-time pattern matching and anomaly detection across institutional trade corridors.</p>
                       </div>
                    </div>
                    <div className="grid gap-6">
                       {fraudEvents.map(event => (
                         <div key={event.id} className={`p-10 rounded-[40px] border bg-white hover:shadow-3xl transition-all group corporate-card flex flex-col lg:flex-row items-center justify-between gap-8 ${event.status === 'Locked' ? 'border-rose-200 bg-rose-50/10' : 'border-gray-100'}`}>
                            <div className="flex items-start gap-8 flex-1">
                               <div className={`h-16 w-16 rounded-2xl flex items-center justify-center shrink-0 transition-all ${event.risk_score > 0.9 ? 'bg-rose-100 text-rose-600' : 'bg-amber-100 text-amber-600'}`}>
                                  <AlertCircle size={32} />
                               </div>
                               <div>
                                  <div className="flex items-center gap-4 mb-3">
                                     <h4 className="text-2xl font-bold text-[#111827]">{event.entity}</h4>
                                     <span className="px-4 py-1 rounded-full text-[10px] font-bold uppercase border bg-rose-50 text-rose-700 border-rose-100">Risk Score: {(event.risk_score * 100).toFixed(0)}%</span>
                                  </div>
                                  <p className="text-base text-gray-500 font-medium mb-4">{event.message}</p>
                               </div>
                            </div>
                            <div className="flex items-center gap-4 w-full lg:w-auto">
                               {event.status === 'Locked' ? (
                                 <div className="px-8 py-4 bg-rose-100 text-rose-700 rounded-2xl border border-rose-200 text-[10px] font-bold uppercase flex items-center gap-2">
                                    <UserX size={16} /> Account Node Locked
                                 </div>
                               ) : (
                                 <button 
                                  onClick={() => handleLockAccount(event.id)}
                                  disabled={isProcessing === event.id}
                                  className="flex-1 lg:flex-none px-10 py-5 bg-[#111827] text-white text-[10px] font-bold uppercase tracking-widest rounded-2xl hover:bg-rose-600 transition-all shadow-xl active:scale-95 disabled:opacity-50"
                                 >
                                   {isProcessing === event.id ? <Loader2 className="animate-spin" size={16} /> : 'Initiate Node Lock'}
                                 </button>
                               )}
                            </div>
                         </div>
                       ))}
                    </div>
                  </div>
                )}

                {activeTab === 'integration' && (
                  <div className="space-y-12">
                    <div className="grid gap-6">
                       {integrations.map(int => (
                         <div key={int.id} className="p-10 rounded-[40px] border border-gray-100 bg-white hover:shadow-3xl transition-all group corporate-card flex flex-col lg:flex-row items-center justify-between gap-8">
                            <div className="flex items-start gap-8 flex-1">
                               <div className={`h-16 w-16 rounded-2xl flex items-center justify-center shrink-0 transition-all ${int.status === 'Success' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-500'}`}>
                                  <LinkIcon size={32} />
                               </div>
                               <div>
                                  <h4 className="text-2xl font-bold text-[#111827] mb-2">{int.name}</h4>
                                  <div className="flex flex-wrap gap-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                     <span>ID: {int.id}</span>
                                     <span>Latency: {int.latency}</span>
                                     <span>Last Sync: {int.last_sync}</span>
                                  </div>
                               </div>
                            </div>
                            <span className={`px-6 py-2.5 rounded-full text-[10px] font-bold uppercase border ${int.status === 'Success' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-rose-50 text-rose-700 border-rose-100'}`}>{int.status}</span>
                         </div>
                       ))}
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
