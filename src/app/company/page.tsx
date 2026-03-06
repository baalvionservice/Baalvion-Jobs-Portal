'use client';

import { SharedHero } from '@/app/components/SharedHero';
import { company } from '@/mocks/baalvion-api';
import { 
  Users, 
  Briefcase, 
  MapPin, 
  Globe, 
  Landmark, 
  Target, 
  Users2, 
  Building2, 
  Search, 
  Filter, 
  Loader2,
  ArrowUpDown,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';

export default function CompanyPage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<{ team: typeof company.team; jobs: typeof company.jobs } | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData({
        team: company.team,
        jobs: company.jobs
      });
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-white min-h-screen pb-24">
      <SharedHero 
        badge="ABOUT BAALVION"
        title="Revolutionizing Global Trade"
        subtitle="Founded in 2025, BAALVION Industries Pvt. Ltd. is a pioneer in global B2B trade technology, leveraging AI, blockchain, and secure cloud solutions."
      />
      
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-center mb-32">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E3A8A] mb-4">Our Founding Vision</h2>
              <h3 className="text-4xl font-bold text-[#111827] leading-tight mb-8">Next-Generation Commercial Infrastructure</h3>
              <p className="text-lg text-[#6B7280] leading-relaxed mb-10">
                BAALVION was established to connect fragmented logistics, finance, and compliance systems into a unified, high-trust ecosystem for 198+ sovereign nations.
              </p>
              <div className="grid grid-cols-2 gap-8">
                 <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-gray-50">
                    <Sparkles className="text-[#1E3A8A] mb-4" size={24} />
                    <h5 className="font-bold text-[#111827]">AI-Driven Innovation</h5>
                    <p className="text-xs text-[#6B7280] mt-2">Predictive intelligence powering global trade resilient supply chains.</p>
                 </div>
                 <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-gray-50">
                    <Globe className="text-[#1E3A8A] mb-4" size={24} />
                    <h5 className="font-bold text-[#111827]">Secure Cloud Mesh</h5>
                    <p className="text-xs text-[#6B7280] mt-2">Scalable infrastructure designed for $33T+ in annual trade volume.</p>
                 </div>
              </div>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2">
              {loading ? (
                Array.from({ length: 2 }).map((_, i) => <div key={i} className="h-64 bg-gray-50 rounded-2xl animate-pulse border border-gray-100" />)
              ) : (
                data?.team.map((member, i) => (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} key={member.id} className="p-10 rounded-3xl border border-gray-100 bg-[#F8FAFC] text-center hover:bg-white hover:shadow-2xl transition-all">
                     <div className="h-16 w-16 rounded-full bg-white shadow-sm flex items-center justify-center text-[#1E3A8A] mx-auto mb-6">
                       <Users size={28} />
                     </div>
                     <h4 className="text-xl font-bold text-[#111827] leading-tight">{member.name}</h4>
                     <p className="text-[10px] font-bold text-[#1E3A8A] mt-2 uppercase tracking-[0.2em]">{member.role}</p>
                  </motion.div>
                ))
              )}
            </div>
          </div>

          <div className="mt-48 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
             {[
                { icon: Landmark, label: "Integrity", desc: "Upholding institutional standards in every trade node." },
                { icon: Users2, label: "Collaboration", desc: "Building unified networks with global partners." },
                { icon: Target, label: "Excellence", desc: "Developing elite-grade digital infrastructure." },
                { icon: Building2, label: "Stability", desc: "Providing the secure backbone of global commerce." }
             ].map((val, i) => (
                <div key={i} className="p-10 rounded-2xl border border-gray-50 bg-[#F8FAFC] text-center">
                   <div className="h-12 w-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#1E3A8A] mx-auto mb-6">
                      <val.icon size={24} />
                   </div>
                   <h5 className="font-bold text-[#111827] mb-2">{val.label}</h5>
                   <p className="text-xs text-[#6B7280] leading-relaxed">{val.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>
    </main>
  );
}
