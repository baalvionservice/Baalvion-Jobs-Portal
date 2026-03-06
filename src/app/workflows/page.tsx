
'use client';

import { SharedHero } from '@/app/components/SharedHero';
import { 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Zap, 
  Settings, 
  Users, 
  ShieldCheck, 
  MoreHorizontal, 
  Loader2, 
  Plus, 
  Filter,
  ArrowRight,
  ChevronRight,
  BrainCircuit,
  Settings2,
  GitBranch,
  Repeat,
  Fingerprint,
  CreditCard,
  Ship
} from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

export default function WorkflowsPage() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'orchestration' | 'tasks' | 'rules' | 'logs'>('orchestration');
  const [tasks, setTasks] = useState<any[]>([]);
  const [rules, setRules] = useState<any[]>([]);
  const [isProcessing, setIsProcessing] = useState<string | null>(null);

  useEffect(() => {
    const fetchWorkflows = async () => {
      try {
        const [tRes, rRes] = await Promise.all([
          axios.get('/api/workflow/tasks'),
          axios.get('/api/workflow/rules')
        ]);
        setTasks(tRes.data);
        setRules(rRes.data);
      } catch (e) {
        console.error("Workflow fetch error", e);
      } finally {
        setLoading(false);
      }
    };
    fetchWorkflows();
  }, []);

  const handleUpdateTask = async (id: string, status: string) => {
    setIsProcessing(id);
    try {
      await axios.put(`/api/workflow/${id}/update`, { status });
      setTasks(prev => prev.map(t => t.id === id ? { ...t, status } : t));
    } catch (e) {
      console.error("Task update error", e);
    } finally {
      setIsProcessing(null);
    }
  };

  const handleUpdateRule = async (id: string, active: boolean) => {
    setIsProcessing(id);
    try {
      await axios.put(`/api/workflow-rule/${id}/update`, { active });
      setRules(prev => prev.map(r => r.id === id ? { ...r, active } : r));
    } catch (e) {
      console.error("Rule update error", e);
    } finally {
      setIsProcessing(null);
    }
  };

  const getPriorityStyle = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-rose-50 text-rose-700 border-rose-100';
      case 'Medium': return 'bg-amber-50 text-amber-700 border-amber-100';
      case 'Low': return 'bg-blue-50 text-blue-700 border-blue-100';
      default: return 'bg-gray-50 text-gray-700 border-gray-100';
    }
  };

  return (
    <main className="bg-white min-h-screen pb-24">
      <SharedHero 
        badge="Smart Orchestration"
        title="Institutional Workflow Engine"
        subtitle="End-to-end automation from Order to Compliance. Orchestrate global trade operations with sovereign-grade rule sets."
      />

      <section className="py-8 bg-white border-b border-gray-100 sticky top-16 z-40 backdrop-blur-md bg-white/90">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex gap-12 overflow-x-auto no-scrollbar">
             {[
               { id: 'orchestration', label: 'E2E Orchestration', icon: GitBranch },
               { id: 'tasks', label: 'Operational Tasks', icon: Zap },
               { id: 'rules', label: 'Rule Engine', icon: Settings2 },
               { id: 'logs', label: 'Automation Logs', icon: Clock }
             ].map((tab) => (
               <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`pb-4 text-xs font-bold uppercase tracking-[0.2em] transition-all relative flex items-center gap-2 shrink-0 ${activeTab === tab.id ? 'text-[#1E3A8A]' : 'text-gray-400 hover:text-gray-600'}`}
               >
                 <tab.icon size={14} /> {tab.label}
                 {activeTab === tab.id && <motion.div layoutId="workflow-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1E3A8A]" />}
               </button>
             ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {activeTab === 'orchestration' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-16">
                 <div className="flex items-center justify-between mb-8">
                    <h3 className="text-3xl font-bold text-[#111827]">Order-to-Compliance Lifecycle</h3>
                    <button className="px-8 py-4 bg-[#111827] text-white text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-[#1E3A8A] transition-all shadow-xl">Initiate Global Order</button>
                 </div>
                 
                 <div className="grid gap-12 lg:grid-cols-4 relative">
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -translate-y-1/2 hidden lg:block -z-0" />
                    {[
                      { icon: Repeat, label: 'Order Placement', status: 'Completed', details: 'Institutional RFQ verified.' },
                      { icon: CreditCard, label: 'Payment Routing', status: 'Active', details: 'FX Optimization in progress.' },
                      { icon: Fingerprint, label: 'Neural Compliance', status: 'Pending', details: 'Sanctions check scheduled.' },
                      { icon: Ship, label: 'Logistics Release', status: 'Pending', details: 'Bill of Lading automation.' }
                    ].map((step, i) => (
                      <div key={i} className="relative z-10">
                         <div className={`p-8 rounded-[32px] border bg-white flex flex-col items-center text-center group transition-all hover:shadow-2xl ${step.status === 'Completed' ? 'border-emerald-100' : step.status === 'Active' ? 'border-[#1E3A8A]/30 shadow-lg' : 'border-gray-100'}`}>
                            <div className={`h-16 w-16 rounded-2xl flex items-center justify-center mb-6 transition-all ${step.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' : step.status === 'Active' ? 'bg-blue-50 text-[#1E3A8A] scale-110 shadow-xl' : 'bg-gray-50 text-gray-300'}`}>
                               <step.icon size={32} />
                            </div>
                            <h4 className="font-bold text-[#111827] mb-2">{step.label}</h4>
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4">{step.status}</p>
                            <div className="p-3 bg-[#F8FAFC] rounded-xl border border-gray-50 w-full">
                               <p className="text-[9px] text-[#1E3A8A] font-medium leading-relaxed">{step.details}</p>
                            </div>
                         </div>
                      </div>
                    ))}
                 </div>

                 <div className="grid gap-12 lg:grid-cols-2">
                    <div className="p-10 rounded-[40px] bg-[#0F172A] text-white shadow-2xl relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-8 opacity-5"><BrainCircuit size={150} /></div>
                       <h4 className="text-2xl font-bold mb-6">Automation Core Status</h4>
                       <p className="text-sm text-gray-400 leading-relaxed mb-10">Baalvion AI is managing 1,200+ concurrent trade cycles with zero manual touchpoints in 85% of cases.</p>
                       <div className="space-y-6">
                          {[
                            { label: 'Auto-Settlement Rate', val: '92%' },
                            { label: 'Compliance Pass Parity', val: '99.9%' },
                            { label: 'Throughput Optimization', val: '+22%' }
                          ].map(item => (
                            <div key={item.label} className="flex justify-between items-center border-b border-white/5 pb-4">
                               <span className="text-[10px] font-bold uppercase text-gray-500">{item.label}</span>
                               <span className="text-[10px] font-bold text-emerald-400 uppercase">{item.val}</span>
                            </div>
                          ))}
                       </div>
                    </div>
                    <div className="space-y-8">
                       <h4 className="text-xl font-bold text-[#111827]">Active Orchestration Logs</h4>
                       <div className="space-y-4">
                          {[
                            { event: 'Auto-Routing Initiated', details: 'PAYEDGE01 via Swift-Alpha', date: '2 Min Ago' },
                            { event: 'KYC Node Verified', details: 'Entity DID1005 cleared.', date: '12 Min Ago' },
                            { event: 'RF-BOL Generated', details: 'Shipment SHP987 finalized.', date: '45 Min Ago' }
                          ].map((log, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-[#F8FAFC] border border-gray-50 flex items-center justify-between">
                               <div>
                                  <p className="font-bold text-[#111827] text-sm">{log.event}</p>
                                  <p className="text-[10px] text-gray-400 mt-1">{log.details}</p>
                               </div>
                               <span className="text-[9px] font-bold text-gray-400 uppercase">{log.date}</span>
                            </div>
                          ))}
                       </div>
                    </div>
                 </div>
              </motion.div>
            )}

            {activeTab === 'tasks' && (
              <motion.div key="tasks" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-12">
                <div className="flex items-center justify-between mb-8">
                   <h3 className="text-2xl font-bold text-[#111827]">Active Operational Tasks</h3>
                   <div className="flex gap-4">
                      <button className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-[#1E3A8A]"><Filter size={14} /> Filter Node</button>
                      <button className="px-6 py-2.5 bg-[#111827] text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-xl hover:bg-[#1E3A8A] transition-all flex items-center gap-2"><Plus size={14} /> Manual Task</button>
                   </div>
                </div>

                <div className="grid gap-6">
                  {loading ? (
                    Array.from({ length: 4 }).map((_, i) => <div key={i} className="h-24 bg-gray-50 rounded-2xl animate-pulse border border-gray-100" />)
                  ) : (
                    tasks.map((task, i) => (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        key={task.id} 
                        className={`p-8 rounded-2xl border bg-white hover:shadow-2xl transition-all group flex items-center justify-between ${task.status === 'Completed' ? 'opacity-60 border-gray-100' : 'border-[#1E3A8A]/10 shadow-sm'}`}
                      >
                         <div className="flex items-center gap-8">
                            <div className={`h-14 w-14 rounded-xl flex items-center justify-center transition-all ${task.status === 'Completed' ? 'bg-gray-50 text-emerald-500' : 'bg-blue-50 text-[#1E3A8A]'}`}>
                               {task.status === 'Completed' ? <CheckCircle2 size={24} /> : <Zap size={24} />}
                            </div>
                            <div>
                               <div className="flex items-center gap-3 mb-2">
                                  <h4 className="text-lg font-bold text-[#111827]">{task.type}</h4>
                                  <span className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase border ${getPriorityStyle(task.priority)}`}>{task.priority} Priority</span>
                               </div>
                               <div className="flex items-center gap-6">
                                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{task.module} Node</span>
                                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5"><Users size={12} /> {task.assigned_to}</span>
                                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5"><Clock size={12} /> {task.date}</span>
                               </div>
                            </div>
                         </div>
                         <div className="flex items-center gap-4">
                            {task.status !== 'Completed' ? (
                              <button 
                                onClick={() => handleUpdateTask(task.id, 'Completed')}
                                disabled={isProcessing === task.id}
                                className="px-6 py-2.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase rounded-xl border border-emerald-100 hover:bg-emerald-100 transition-all flex items-center gap-2"
                              >
                                {isProcessing === task.id ? <Loader2 className="animate-spin" size={12} /> : <>Mark Resolved <ArrowRight size={12} /></>}
                              </button>
                            ) : (
                              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100 flex items-center gap-2"><CheckCircle2 size={12} /> Archived</span>
                            )}
                            <button className="p-2 text-gray-300 hover:text-primary transition-colors"><MoreHorizontal size={20} /></button>
                         </div>
                      </motion.div>
                    ))
                  )}
                </div>
              </motion.div>
            )}

            {activeTab === 'rules' && (
              <motion.div key="rules" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-16">
                 <div className="grid gap-12 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                       <h3 className="text-2xl font-bold text-[#111827] mb-8 flex items-center gap-3">
                          <Settings2 className="text-[#1E3A8A]" size={24} /> Sovereign Automation Protocols
                       </h3>
                       <div className="grid gap-6">
                          {rules.map((rule, i) => (
                            <div key={rule.id} className="p-10 rounded-3xl border border-gray-100 bg-white hover:border-[#1E3A8A]/30 transition-all group">
                               <div className="flex justify-between items-start mb-6">
                                  <div>
                                     <span className="text-[9px] font-bold text-[#1E3A8A] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded border border-blue-100">{rule.module} Node</span>
                                     <h4 className="text-xl font-bold text-[#111827] mt-3">{rule.condition}</h4>
                                  </div>
                                  <div className="flex items-center gap-4">
                                     <button 
                                      onClick={() => handleUpdateRule(rule.id, !rule.active)}
                                      disabled={isProcessing === rule.id}
                                      className={`px-4 py-2 rounded-full text-[9px] font-bold uppercase border transition-all ${rule.active ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-gray-100 text-gray-400 border-gray-200'}`}
                                     >
                                        {isProcessing === rule.id ? <Loader2 className="animate-spin" size={12} /> : rule.active ? 'Active Node' : 'Suspended'}
                                     </button>
                                  </div>
                               </div>
                               <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                                  <div className="flex items-center gap-3">
                                     <Zap className="text-primary" size={16} />
                                     <p className="text-xs font-bold text-[#111827]">Action: {rule.action}</p>
                                  </div>
                                  <button className="text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-primary transition-colors">Modify Parameters</button>
                               </div>
                            </div>
                          ))}
                       </div>
                    </div>
                    <div className="space-y-8">
                       <div className="p-8 rounded-3xl bg-[#0F172A] text-white shadow-2xl relative overflow-hidden group">
                          <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform duration-1000"><BrainCircuit size={150} /></div>
                          <h4 className="text-xl font-bold mb-4">Neural Rule Engine</h4>
                          <p className="text-xs text-gray-400 leading-relaxed mb-8">AI models are dynamically adjusting automation thresholds based on high-fidelity risk data nodes.</p>
                          <div className="space-y-4">
                             {[
                               { label: 'Automation Efficiency', val: '+28%' },
                               { label: 'Manual Touchpoints', val: '-45%' },
                               { label: 'Rule Model Node', val: 'V1.4' }
                             ].map(item => (
                               <div key={item.label} className="flex justify-between items-center border-b border-white/5 pb-2">
                                  <span className="text-[10px] font-bold text-gray-500 uppercase">{item.label}</span>
                                  <span className="text-xs font-bold text-primary">{item.val}</span>
                               </div>
                             ))}
                          </div>
                          <button className="w-full mt-10 py-4 border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/5 transition-all">Optimize Protocols</button>
                       </div>
                    </div>
                 </div>
              </motion.div>
            )}

            {activeTab === 'logs' && (
              <motion.div key="logs" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-12">
                 <div className="bg-gray-50 rounded-[40px] p-16 border border-gray-100 shadow-inner">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
                       <div>
                          <h3 className="text-4xl font-bold text-[#111827] tracking-tight">Automation Event Stream</h3>
                          <p className="text-gray-500 mt-1">Sovereign ledger of all automated task triggers and rule execution nodes.</p>
                       </div>
                       <button className="px-10 py-4 bg-[#111827] text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-xl hover:bg-[#1E3A8A] transition-all">Export Archive</button>
                    </div>
                    <div className="space-y-4">
                       {[
                         { id: 'LOG1059', event: 'Auto-Approval Triggered', module: 'Trade Finance', status: 'Success', date: '5 Min Ago' },
                         { id: 'LOG1060', event: 'Rule Violation Flagged', module: 'Compliance', status: 'Alert', date: '12 Min Ago' },
                         { id: 'LOG1061', event: 'Node Task Reassigned', module: 'Operations', status: 'Success', date: '45 Min Ago' }
                       ].map(log => (
                         <div key={log.id} className="p-8 bg-white rounded-2xl border border-gray-100 flex items-center justify-between hover:shadow-xl transition-all">
                            <div className="flex items-center gap-8">
                               <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${log.status === 'Alert' ? 'bg-rose-50 text-rose-500' : 'bg-blue-50 text-blue-500'}`}>
                                  <AlertCircle size={20} />
                               </div>
                               <div>
                                  <h4 className="font-bold text-[#111827]">{log.event}</h4>
                                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-1">ID: {log.id} • {log.module}</p>
                               </div>
                            </div>
                            <div className="flex items-center gap-12">
                               <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{log.date}</span>
                               <span className={`px-4 py-1.5 rounded-full text-[9px] font-bold uppercase border ${log.status === 'Alert' ? 'bg-rose-50 text-rose-700 border-rose-100' : 'bg-emerald-50 text-emerald-700 border-emerald-100'}`}>{log.status}</span>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
