'use client';

import { SharedHero } from '@/app/components/SharedHero';
import { 
  Scale, 
  Activity, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Search, 
  ShieldCheck, 
  Loader2, 
  Fingerprint, 
  FileText, 
  Download, 
  UserCheck, 
  ChevronRight,
  Globe,
  Plus,
  Trash2,
  ShieldAlert,
  Gavel,
  History,
  ShieldEllipsis,
  FileSpreadsheet,
  FileBadge,
  AlertCircle
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

export default function CompliancePage() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'rules' | 'violations' | 'sovereign' | 'reports'>('violations');
  const [violations, setViolations] = useState<any[]>([]);
  const [lawUpdates, setLawUpdates] = useState<any[]>([]);
  const [rules, setRules] = useState<any[]>([]);
  const [isProcessing, setIsProcessing] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [vioRes, lawRes, ruleRes] = await Promise.all([
          axios.get('/api/compliance/violations'),
          axios.get('/api/compliance/law-updates'),
          axios.get('/api/compliance/rules')
        ]);
        setViolations(vioRes.data);
        setLawUpdates(lawRes.data);
        setRules(ruleRes.data);
        setLoading(false);
      } catch (e) {
        console.error("Compliance fetch error", e);
      }
    };
    fetchData();
  }, []);

  const handleRemediate = async (id: string) => {
    setIsProcessing(id);
    try {
      await axios.post('/api/compliance/remediate', { violation_id: id });
      setViolations(prev => prev.map(v => v.id === id ? { ...v, status: 'Remediating' } : v));
    } finally {
      setIsProcessing(null);
    }
  };

  return (
    <main className="bg-white min-h-screen pb-24">
      <SharedHero 
        badge="GLOBAL TRADE COMPLIANCE"
        title="Compliance Automation Engine"
        subtitle="Automated checks for screening vendors, shipments, and transactions in real-time. Secure digital documentation with full institutional audit trails."
      />
      
      <section className="bg-white border-b border-gray-100 sticky top-16 z-40 backdrop-blur-md bg-white/90">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex gap-12 pt-8 overflow-x-auto no-scrollbar">
             {[
               { id: 'violations', label: 'Violation Dashboard', icon: ShieldAlert },
               { id: 'rules', label: 'Compliance Engine', icon: Gavel },
               { id: 'sovereign', label: 'Regulatory Updates', icon: Globe },
               { id: 'reports', label: 'Sovereign Reports', icon: FileSpreadsheet }
             ].map((tab) => (
               <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`pb-4 text-xs font-bold uppercase tracking-[0.2em] transition-all relative flex items-center gap-2 shrink-0 ${activeTab === tab.id ? 'text-[#1E3A8A]' : 'text-gray-400 hover:text-gray-600'}`}
               >
                 <tab.icon size={14} /> {tab.label}
                 {activeTab === tab.id && <motion.div layoutId="comp-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1E3A8A]" />}
               </button>
             ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 sm:grid-cols-2 mb-24">
             <div className="p-10 rounded-3xl border border-gray-100 bg-[#F8FAFC] shadow-sm">
                <h4 className="text-xl font-bold text-[#111827] mb-4">Continuous Regulation Monitoring</h4>
                <p className="text-sm text-[#6B7280] leading-relaxed">Stay informed on global trade regulations and sanctions. Our neural law mesh synchronizes with 450+ nodes daily.</p>
             </div>
             <div className="p-10 rounded-3xl border border-gray-100 bg-[#F8FAFC] shadow-sm">
                <h4 className="text-xl font-bold text-[#111827] mb-4">Digital Audit Integrity</h4>
                <p className="text-sm text-[#6B7280] leading-relaxed">Store and manage trade documents digitally with cryptographic hashes and full sovereign audit trails.</p>
             </div>
          </div>

          <AnimatePresence mode="wait">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-32 text-gray-400 gap-4">
                <Loader2 className="animate-spin" size={48} />
                <p className="text-sm font-bold uppercase tracking-widest">Syncing Regulatory Nodes...</p>
              </div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-16">
                {activeTab === 'violations' && (
                  <div className="grid gap-6">
                    {violations.map(vio => (
                      <div key={vio.id} className="p-8 rounded-[32px] border border-gray-100 bg-white shadow-sm flex items-center justify-between group corporate-card">
                         <div className="flex items-center gap-8">
                            <div className="h-14 w-14 rounded-2xl bg-rose-50 text-rose-500 flex items-center justify-center shadow-inner"><ShieldAlert size={28} /></div>
                            <div>
                               <h4 className="text-xl font-bold text-[#111827]">{vio.entity}</h4>
                               <p className="text-xs text-gray-500 mt-1">{vio.message}</p>
                            </div>
                         </div>
                         <button 
                          onClick={() => handleRemediate(vio.id)}
                          disabled={isProcessing === vio.id || vio.status === 'Remediating'}
                          className="px-8 py-4 bg-rose-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-rose-600 transition-all active:scale-95 disabled:opacity-50"
                         >
                           {isProcessing === vio.id ? <Loader2 className="animate-spin" size={16} /> : vio.status === 'Remediating' ? 'Remediating...' : 'Initiate Protocol'}
                         </button>
                      </div>
                    ))}
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
