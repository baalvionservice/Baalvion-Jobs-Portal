
'use client';

import { SharedHero } from '@/app/components/SharedHero';
import { 
  Users, 
  Settings, 
  ShieldAlert, 
  Activity, 
  Plus, 
  Search, 
  Filter, 
  Loader2, 
  ChevronRight, 
  UserPlus, 
  Lock, 
  Globe, 
  Terminal,
  MoreHorizontal,
  CheckCircle2,
  AlertTriangle,
  Mail,
  ShieldCheck,
  Building2,
  Clock,
  Settings2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AdminPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'users' | 'settings'>('dashboard');
  const [data, setData] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState<string | null>(null);
  
  const [users, setUsers] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [settings, setSettings] = useState<any[]>([]);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        setError(null);
        const [dashRes, userRes, setRes] = await Promise.all([
          axios.get('/api/admin/dashboard'),
          axios.get('/api/admin/user_list'),
          axios.get('/api/admin/settings')
        ]);
        setData(dashRes.data);
        setUsers(userRes.data || []);
        setSettings(setRes.data || []);
      } catch (e) {
        console.error("Admin fetch error", e);
        setError("Failed to synchronize with administrative nodes. Retrying...");
      } finally {
        setLoading(false);
      }
    };
    fetchAdminData();
  }, []);

  const handleUpdateUser = async (id: string, status: string) => {
    setIsProcessing(id);
    try {
      await axios.put(`/api/admin/user_update/${id}`, { status });
      setUsers(prev => prev.map(u => u.user_id === id ? { ...u, status } : u));
    } catch (e) {
      console.error("User update failed", e);
    } finally {
      setIsProcessing(null);
    }
  };

  const handleUpdateSetting = async (setting: string, newValue: any) => {
    setIsProcessing(setting);
    try {
      await axios.post('/api/admin/settings_update', { setting, value: newValue });
      setSettings(prev => prev.map(s => s.setting === setting ? { ...s, value: newValue } : s));
    } catch (e) {
      console.error("Setting update failed", e);
    } finally {
      setIsProcessing(null);
    }
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-emerald-50 text-emerald-700 border-emerald-100';
      case 'Suspended': return 'bg-rose-50 text-rose-700 border-rose-100';
      default: return 'bg-gray-50 text-gray-700 border-gray-100';
    }
  };

  return (
    <main className="bg-white min-h-screen pb-24">
      <SharedHero 
        badge="Institutional Control"
        title="Admin Command Center"
        subtitle="Manage sovereign-grade access, user orchestration, and global system thresholds across the Baalvion mesh."
      />

      <section className="bg-white border-b border-gray-100 sticky top-16 z-40 backdrop-blur-md bg-white/90">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex gap-12 pt-8 overflow-x-auto no-scrollbar">
             {[
               { id: 'dashboard', label: 'Admin Dashboard', icon: Terminal },
               { id: 'users', label: 'User Management', icon: Users },
               { id: 'settings', label: 'Global Settings', icon: Settings2 }
             ].map((tab) => (
               <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`pb-4 text-xs font-bold uppercase tracking-[0.2em] transition-all relative flex items-center gap-2 shrink-0 ${activeTab === tab.id ? 'text-[#1E3A8A]' : 'text-gray-400 hover:text-gray-600'}`}
               >
                 <tab.icon size={14} /> {tab.label}
                 {activeTab === tab.id && <motion.div layoutId="admin-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1E3A8A]" />}
               </button>
             ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {loading ? (
              <div key="loading" className="flex flex-col items-center justify-center py-32 text-gray-400 gap-4">
                <Loader2 className="animate-spin" size={48} />
                <p className="text-sm font-bold uppercase tracking-widest text-center">Synchronizing Admin Nodes...</p>
              </div>
            ) : error ? (
              <div key="error" className="flex flex-col items-center justify-center py-32 text-rose-500 gap-4">
                <AlertTriangle size={48} />
                <p className="text-sm font-bold uppercase tracking-widest text-center">{error}</p>
                <button onClick={() => window.location.reload()} className="mt-4 px-6 py-2 bg-[#111827] text-white text-[10px] font-bold uppercase rounded-lg">Retry Sync</button>
              </div>
            ) : (
              <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-16">
                
                {activeTab === 'dashboard' && data && (
                  <div className="space-y-16">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                       {[
                         { label: 'Total Users', val: data.total_users, icon: Users, color: 'text-[#1E3A8A]' },
                         { label: 'Active Sessions', val: data.active_sessions, icon: Activity, color: 'text-emerald-600' },
                         { label: 'Pending Tasks', val: data.pending_tasks, icon: Clock, color: 'text-amber-600' },
                         { label: 'Anomalies', val: data.high_risk_transactions, icon: ShieldAlert, color: 'text-rose-600' }
                       ].map(stat => (
                         <div key={stat.label} className="p-8 rounded-2xl border border-gray-100 bg-[#F8FAFC] hover:shadow-xl transition-all">
                            <stat.icon className={`mb-4 ${stat.color}`} size={20} />
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">{stat.label}</p>
                            <p className={`text-3xl font-bold ${stat.color}`}>{stat.val?.toLocaleString()}</p>
                         </div>
                       ))}
                    </div>

                    <div className="grid gap-12 lg:grid-cols-3">
                       <div className="lg:col-span-2 space-y-8">
                          <h3 className="text-xl font-bold text-[#111827] flex items-center gap-3"><AlertTriangle className="text-rose-500" size={20} /> High-Risk Admin Alerts</h3>
                          <div className="grid gap-4">
                             {data.recent_alerts?.length > 0 ? data.recent_alerts.map((alert: any) => (
                               <div key={alert.alert_id} className="p-8 rounded-2xl border border-gray-100 bg-white flex items-center justify-between hover:shadow-2xl transition-all group">
                                  <div className="flex items-center gap-8">
                                     <div className={`h-14 w-14 rounded-xl flex items-center justify-center transition-all ${alert.type === 'Fraud' ? 'bg-rose-50 text-rose-500' : 'bg-amber-50 text-amber-500'}`}>
                                        <ShieldAlert size={24} />
                                     </div>
                                     <div>
                                        <h4 className="font-bold text-[#111827]">{alert.message}</h4>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">ID: {alert.alert_id} • {alert.type} Node</p>
                                     </div>
                                  </div>
                                  <button className="text-[10px] font-bold text-[#1E3A8A] uppercase tracking-widest hover:underline">Investigate</button>
                               </div>
                             )) : (
                               <p className="p-8 text-center text-gray-400 text-sm italic">No active high-risk alerts detected.</p>
                             )}
                          </div>
                       </div>
                       <div className="p-10 rounded-[40px] bg-[#0F172A] text-white shadow-2xl relative overflow-hidden h-fit">
                          <div className="absolute top-0 right-0 p-10 opacity-5 rotate-12"><Terminal size={200} /></div>
                          <div className="relative z-10">
                             <h4 className="text-2xl font-bold mb-6">System Health</h4>
                             <div className="space-y-6 pt-8 border-t border-white/5">
                                {['Mesh Availability', 'API Integrity', 'Persistence Sync'].map(m => (
                                   <div key={m} className="flex justify-between items-center">
                                      <span className="text-[10px] font-bold uppercase text-gray-500">{m}</span>
                                      <span className="text-[10px] font-bold text-emerald-400 uppercase flex items-center gap-2">99.99% <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /></span>
                                   </div>
                                ))}
                             </div>
                          </div>
                       </div>
                    </div>
                  </div>
                )}

                {activeTab === 'users' && (
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                       <h3 className="text-2xl font-bold text-[#111827]">Institutional Identity Ledger</h3>
                       <div className="flex gap-4 w-full md:w-auto">
                          <div className="relative flex-1">
                             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                             <input 
                               type="text" 
                               className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-100 bg-[#F8FAFC] text-sm outline-none focus:ring-2 focus:ring-[#1E3A8A]" 
                               placeholder="Search identities..." 
                               value={search}
                               onChange={e => setSearch(e.target.value)}
                             />
                          </div>
                          <button className="px-6 py-3 bg-[#111827] text-white text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-[#1E3A8A] flex items-center gap-2"><UserPlus size={14} /> New DID Node</button>
                       </div>
                    </div>

                    <div className="overflow-x-auto rounded-3xl border border-gray-100 bg-white shadow-2xl">
                       <table className="w-full text-left">
                          <thead className="bg-[#F8FAFC] border-b border-gray-100">
                             <tr>{['User Node', 'Role Authority', 'Status', 'Actions'].map(h => <th key={h} className="px-8 py-5 text-[10px] font-bold text-gray-500 uppercase tracking-widest">{h}</th>)}</tr>
                          </thead>
                          <tbody>
                             {users.filter(u => u.name?.toLowerCase().includes(search.toLowerCase())).length > 0 ? (
                               users.filter(u => u.name?.toLowerCase().includes(search.toLowerCase())).map(u => (
                                 <tr key={u.user_id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                                    <td className="px-8 py-6">
                                       <div className="flex items-center gap-4">
                                          <div className="h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center text-[#1E3A8A] font-bold text-xs">{u.name?.[0]}</div>
                                          <div>
                                             <p className="font-bold text-[#111827]">{u.name}</p>
                                             <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">{u.user_id}</p>
                                          </div>
                                       </div>
                                    </td>
                                    <td className="px-8 py-6"><span className="text-[9px] font-bold uppercase text-[#1E3A8A] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">{u.role}</span></td>
                                    <td className="px-8 py-6"><span className={`px-4 py-1.5 rounded-full text-[9px] font-bold uppercase border ${getStatusStyle(u.status)}`}>{u.status}</span></td>
                                    <td className="px-8 py-6">
                                       <div className="flex gap-2">
                                          <button 
                                            onClick={() => handleUpdateUser(u.user_id, u.status === 'Active' ? 'Suspended' : 'Active')}
                                            disabled={isProcessing === u.user_id}
                                            className="px-4 py-2 bg-gray-50 text-[9px] font-bold uppercase rounded-lg border border-gray-100 hover:bg-gray-100 transition-all min-w-[100px]"
                                          >
                                             {isProcessing === u.user_id ? <Loader2 size={12} className="animate-spin mx-auto" /> : u.status === 'Active' ? 'Suspend Node' : 'Activate Node'}
                                          </button>
                                          <button className="p-2 text-gray-300 hover:text-primary"><MoreHorizontal size={18} /></button>
                                       </div>
                                    </td>
                                 </tr>
                               ))
                             ) : (
                               <tr><td colSpan={4} className="px-8 py-12 text-center text-gray-400 text-sm italic">No users matching search criteria found.</td></tr>
                             )}
                          </tbody>
                       </table>
                    </div>
                  </div>
                )}

                {activeTab === 'settings' && (
                  <div className="grid gap-12 lg:grid-cols-3">
                    <div className="lg:col-span-2 space-y-8">
                       <h3 className="text-2xl font-bold text-[#111827]">Global Node Thresholds</h3>
                       <div className="grid gap-6">
                          {settings.map((s) => (
                            <div key={s.setting} className="p-10 rounded-3xl border border-gray-100 bg-white hover:border-[#1E3A8A]/30 transition-all group">
                               <div className="flex justify-between items-start mb-6">
                                  <div>
                                     <h4 className="text-xl font-bold text-[#111827]">{s.setting?.replace(/_/g, ' ').toUpperCase()}</h4>
                                     <p className="text-xs text-gray-500 mt-2">{s.description}</p>
                                  </div>
                                  <div className="flex items-center gap-4">
                                     <div className="bg-[#F8FAFC] border border-gray-100 px-6 py-3 rounded-xl font-bold text-[#1E3A8A]">
                                        {s.value?.toLocaleString()}
                                     </div>
                                  </div>
                               </div>
                               <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                                  <button 
                                    onClick={() => handleUpdateSetting(s.setting, s.value + 1000)}
                                    disabled={isProcessing === s.setting}
                                    className="text-[10px] font-bold text-[#1E3A8A] uppercase tracking-widest hover:underline disabled:opacity-50"
                                  >
                                     {isProcessing === s.setting ? <Loader2 size={12} className="animate-spin" /> : 'Modify Parameter'}
                                  </button>
                                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2"><Lock size={12} /> Institutional Superuser Required</span>
                               </div>
                            </div>
                          ))}
                       </div>
                    </div>
                    <div className="space-y-8">
                       <div className="p-8 rounded-3xl bg-[#0F172A] text-white shadow-2xl relative overflow-hidden">
                          <div className="absolute top-0 right-0 p-8 opacity-5"><Terminal size={120} /></div>
                          <h4 className="text-xl font-bold mb-4">Sovereign Overrides</h4>
                          <p className="text-xs text-gray-400 leading-relaxed mb-8">System-wide parameters require DID verification from two Superuser nodes before global propagation.</p>
                          <div className="space-y-4 pt-8 border-t border-white/5">
                             <button className="w-full py-4 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-xl hover:opacity-90 transition-all shadow-xl shadow-primary/20">Sync All Nodes</button>
                             <button className="w-full py-4 border border-white/10 text-rose-400 text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-rose-500/5 transition-all">Emergency Node Lock</button>
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
