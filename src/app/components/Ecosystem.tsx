'use client';

import { Building2, Truck, Landmark, ShieldCheck, Laptop, Globe } from 'lucide-react';

const partners = [
  { icon: Globe, label: "Global Trade Institutions" },
  { icon: Landmark, label: "International Banks" },
  { icon: Truck, label: "Logistics Providers" },
  { icon: Laptop, label: "ERP Systems" },
  { icon: ShieldCheck, label: "Customs & Compliance" },
  { icon: Building2, label: "Enterprise Partners" }
];

export function Ecosystem() {
  return (
    <section className="bg-white py-24 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E3A8A] mb-16">Global Ecosystem</h2>
        
        <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center">
          {partners.map((partner, i) => (
            <div key={i} className="flex flex-col items-center gap-4 group cursor-default">
              <div className="h-20 w-20 rounded-xl border border-gray-100 bg-[#F8FAFC] flex items-center justify-center text-gray-300 group-hover:border-[#1E3A8A] group-hover:text-[#1E3A8A] transition-all">
                <partner.icon size={32} />
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{partner.label}</span>
            </div>
          ))}
        </div>
        
        <p className="mt-20 text-sm font-medium text-gray-400">
          Trusted by infrastructure partners across 198+ nations.
        </p>
      </div>
    </section>
  );
}