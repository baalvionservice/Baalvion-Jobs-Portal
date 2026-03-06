'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Factory, Truck, Landmark, UserCheck } from 'lucide-react';

export function Marketplace() {
  return (
    <section className="bg-[#F8FAFC] py-24 sm:py-32 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E3A8A]">Marketplace Layer</h2>
            <p className="mt-4 text-4xl font-bold tracking-tight text-[#111827] sm:text-5xl">Digital Marketplace for Global Trade</p>
            <p className="mt-8 text-lg text-[#6B7280] leading-relaxed">
              Baalvion connects manufacturers, suppliers, enterprises, and distributors across international markets in a secure, high-trust environment.
            </p>
            
            <div className="mt-12 space-y-6">
              {[
                "Global discovery of verified tier-1 and tier-2 suppliers.",
                "Real-time request-for-quotation (RFQ) processing.",
                "Integrated multi-language trade negotiation tools."
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <div className="h-2 w-2 rounded-full bg-[#1E3A8A]"></div>
                  <p className="text-[#111827] font-medium">{item}</p>
                </div>
              ))}
            </div>

            <button className="mt-12 rounded bg-[#111827] px-8 py-4 text-sm font-bold text-white hover:bg-black transition-all shadow-sm">
              Explore Marketplace
            </button>
          </div>

          <div className="bg-white p-12 rounded-2xl border border-gray-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
               <Factory size={200} />
            </div>
            <h4 className="text-2xl font-bold text-[#111827] mb-12">Institutional Trade Flow</h4>
            
            <div className="flex flex-col gap-12 relative">
              {/* Animated Arrows */}
              <div className="absolute left-[24px] top-10 bottom-10 w-0.5 bg-gray-100 -z-0"></div>
              
              {[
                { icon: Factory, label: "Supplier", desc: "Production & Inspection" },
                { icon: Truck, label: "Logistics", desc: "Freight Orchestration" },
                { icon: Landmark, label: "Trade Finance", desc: "Letter of Credit & Escrow" },
                { icon: UserCheck, label: "Buyer", desc: "Verification & Settlement" }
              ].map((step, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-6 items-center relative z-10"
                >
                  <div className="h-12 w-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#1E3A8A]">
                    <step.icon size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#111827]">{step.label}</h5>
                    <p className="text-xs text-[#6B7280]">{step.desc}</p>
                  </div>
                  {i < 3 && (
                    <motion.div 
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute left-[18px] top-14 text-gray-300"
                    >
                      <ArrowRight size={14} className="rotate-90" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}