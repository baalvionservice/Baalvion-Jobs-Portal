'use client';

import { SharedHero } from '@/app/components/SharedHero';
import { Landmark, Truck, Laptop, Building2, ChevronRight, Globe, ShieldCheck, Briefcase, Loader2, Cloud, Repeat } from 'lucide-react';
import { partners as mockData } from '@/mocks/baalvion-api';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function PartnersPage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<{ list: typeof mockData.list; onboardingSteps: typeof mockData.onboardingSteps } | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData({
        list: mockData.list,
        onboardingSteps: mockData.onboardingSteps
      });
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-white min-h-screen">
      <SharedHero 
        badge="BAALVION ECOSYSTEM"
        title="Enterprise Trade Partnerships"
        subtitle="Collaborate with financial institutions, logistics providers, and government agencies. Enhance your trade capabilities with banking and government API integrations."
      />
      
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 sm:grid-cols-3 mb-24">
             {[
               { icon: Landmark, title: "Banking Integration", desc: "Connect with Tier-1 banks for trade finance, FX, and sovereign settlements." },
               { icon: Truck, title: "Logistics Partners", desc: "Real-time shipment tracking and fulfillment integration across 198 nations." },
               { icon: Globe, title: "Government APIs", desc: "Automate compliance and certifications via direct institutional portals." }
             ].map((p, i) => (
               <div key={i} className="p-10 rounded-3xl border border-gray-100 bg-[#F8FAFC] text-center">
                  <div className="h-16 w-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#1E3A8A] mx-auto mb-8">
                    <p.icon size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-[#111827] mb-4">{p.title}</h4>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{p.desc}</p>
               </div>
             ))}
          </div>

          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-[#111827] mb-10 flex items-center gap-3">
                 <Briefcase className="text-[#1E3A8A]" size={24} /> Institutional Directory
              </h2>
              <div className="grid gap-6">
                <AnimatePresence mode="wait">
                  {loading ? (
                    Array.from({ length: 4 }).map((_, i) => <div key={i} className="h-32 bg-gray-50 rounded-2xl animate-pulse border border-gray-100" />)
                  ) : (
                    data?.list.map((p, i) => (
                      <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} key={p.id} className="p-8 rounded-2xl border border-gray-100 bg-[#F8FAFC] flex items-center justify-between hover:bg-white hover:shadow-xl transition-all">
                        <div className="flex items-center gap-6">
                           <div className="h-14 w-14 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary">
                              <Building2 size={24} />
                           </div>
                           <div>
                              <h4 className="font-bold text-[#111827] text-lg leading-tight">{p.name}</h4>
                              <p className="text-[10px] font-bold text-gray-400 mt-2 uppercase tracking-widest">{p.type}</p>
                           </div>
                        </div>
                        <ChevronRight size={20} className="text-gray-300" />
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="p-10 rounded-3xl border border-gray-100 bg-[#0F172A] text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-5"><Repeat size={200} /></div>
               <h3 className="text-2xl font-bold mb-10 relative z-10">Integration Roadmap</h3>
               <div className="space-y-12 relative z-10">
                  {data?.onboardingSteps.map((step, i) => (
                    <div key={i} className="flex gap-8 items-start">
                       <div className="h-12 w-12 shrink-0 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-lg">0{step.step}</div>
                       <div>
                          <p className="text-lg font-bold text-white leading-tight mb-2">Phase 0{step.step}</p>
                          <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                       </div>
                    </div>
                  ))}
               </div>
               <button className="w-full mt-16 py-5 bg-white text-[#0F172A] text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-gray-100 transition-all shadow-xl">Apply for Institutional Access</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
