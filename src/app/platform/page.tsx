'use client';

import { SharedHero } from '@/app/components/SharedHero';
import { Globe, Building2, Cpu, ShieldCheck, Landmark, Database, Cloud, Code, Loader2, Zap, Activity, Repeat } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import axios from 'axios';

const icons = [Globe, Cpu, ShieldCheck, Landmark, Building2, Code];

export default function PlatformPage() {
  const [features, setFeatures] = useState<any[]>([]);
  const [architecture, setArchitecture] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [fRes, aRes] = await Promise.all([
          axios.get('/api/platform/features'),
          axios.get('/api/platform/architecture')
        ]);
        setFeatures(fRes.data);
        setArchitecture(aRes.data);
      } catch (e) {
        console.error("Platform data fetch failed", e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="bg-white min-h-screen pb-24">
      <SharedHero 
        badge="BAALVION PLATFORM"
        title="Real-Time Trade Monitoring"
        subtitle="Manage global trade operations in real-time with enterprise-grade security, AI analytics, and automated multi-currency solutions."
      />
      
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E3A8A] mb-4">Core Platform Capabilities</h2>
            <h3 className="text-3xl font-bold text-[#111827]">Sovereign Trade Infrastructure</h3>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-24">
             {[
               { icon: Activity, title: "Global Trade Dashboard", desc: "Live monitoring of shipments, orders, and payments across 198 nations." },
               { icon: Zap, title: "Event-Driven Alerts", desc: "Automated notifications for trade, compliance, and shipment node updates." },
               { icon: Landmark, title: "Trade Finance Integration", desc: "Access letters of credit (LC), FX solutions, and secure settlements." },
               { icon: Cpu, title: "AI-Powered Insights", desc: "Predictive analytics for vendor reliability, trade risk, and fraud detection." }
             ].map((feat, i) => (
               <div key={i} className="p-8 rounded-2xl border border-gray-100 bg-[#F8FAFC] hover:shadow-xl transition-all">
                  <div className="h-12 w-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#1E3A8A] mb-6">
                    <feat.icon size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-[#111827] mb-3 leading-tight">{feat.title}</h4>
                  <p className="text-xs text-[#6B7280] leading-relaxed">{feat.desc}</p>
               </div>
             ))}
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="wait">
              {loading ? (
                Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="p-10 rounded-2xl border border-gray-100 bg-gray-50/50 animate-pulse h-64 flex flex-col justify-center" />
                ))
              ) : (
                features.map((f, i) => {
                  const Icon = icons[i % icons.length];
                  return (
                    <motion.div 
                      key={f.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="p-10 rounded-2xl border border-gray-100 bg-white hover:shadow-2xl hover:border-[#1E3A8A]/20 transition-all group"
                    >
                      <div className="h-12 w-12 rounded bg-gray-50 flex items-center justify-center text-[#1E3A8A] mb-8 group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors">
                        <Icon size={24} />
                      </div>
                      <h4 className="text-xl font-bold text-[#111827] mb-4">{f.name}</h4>
                      <p className="text-sm text-[#6B7280] leading-relaxed">{f.description}</p>
                    </motion.div>
                  );
                })
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F8FAFC] border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E3A8A] mb-4">Enterprise Hub</h2>
              <h3 className="text-4xl font-bold tracking-tight text-[#111827]">Integrated Service Mesh</h3>
              <p className="mt-8 text-lg text-[#6B7280] leading-relaxed">
                Architected for cross-border payment solutions and high-fidelity global trade monitoring at $33T+ scale.
              </p>
              
              <div className="mt-12 space-y-8">
                {loading ? (
                  <div className="h-48 w-full bg-white border border-gray-100 rounded-2xl animate-pulse" />
                ) : (
                  architecture.map((a, i) => (
                    <div key={i} className="flex items-center gap-6 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm group hover:border-[#1E3A8A]/30 transition-all">
                        <div className="h-12 w-12 rounded-xl bg-gray-50 flex items-center justify-center text-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white transition-all">
                          {a.type === "Infrastructure" ? <Cloud size={24} /> : a.type === "Persistence" ? <Database size={24} /> : <Code size={24} />}
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">{a.type}</span>
                          <span className="text-lg font-bold text-[#111827] block leading-tight">{a.title}</span>
                          <p className="text-xs text-gray-500 mt-1">{a.description}</p>
                        </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="p-10 rounded-3xl bg-white border border-gray-100 shadow-2xl relative overflow-hidden group">
              <div className="flex items-center gap-3 mb-8">
                 <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></div>
                 <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Neural API Mesh Active</span>
              </div>
              <div className="space-y-4">
                {['Banking API Integration', 'FX Optimization Engine', 'Sovereign Law Node'].map((mesh) => (
                  <div key={mesh} className="flex items-center justify-between p-5 bg-gray-50 rounded-xl border border-transparent hover:border-[#1E3A8A]/20 transition-all">
                    <div className="flex items-center gap-4">
                      <Code className="text-[#1E3A8A]" size={18} />
                      <span className="text-sm font-bold text-[#111827]">{mesh}</span>
                    </div>
                    <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
