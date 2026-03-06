
'use client';

import { Users, Truck, Landmark, ShieldCheck, Factory, Laptop } from 'lucide-react';

const partners = [
  { icon: Users, label: "Buyers" },
  { icon: Factory, label: "Suppliers" },
  { icon: Truck, label: "Freight" },
  { icon: Landmark, label: "Banks" },
  { icon: ShieldCheck, label: "Governments" },
  { icon: Laptop, label: "ERP Systems" }
];

export function PlatformEcosystem() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-8">
        <div className="text-center mb-20">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Interconnected</h2>
          <p className="mt-4 text-3xl font-bold tracking-tight text-[#111827] sm:text-5xl">Built for the Global Trade Ecosystem</p>
        </div>

        <div className="relative flex flex-wrap justify-center gap-12 lg:gap-24">
          {partners.map((partner, i) => (
            <div key={i} className="flex flex-col items-center gap-4 group">
              <div className="h-24 w-24 rounded-full border border-gray-100 bg-[#F9FAFB] flex items-center justify-center text-gray-400 group-hover:border-primary group-hover:text-primary group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                <partner.icon className="h-10 w-10" />
              </div>
              <span className="font-bold text-[#111827] uppercase tracking-widest text-[10px]">{partner.label}</span>
            </div>
          ))}
          {/* Connector simulation */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
             <div className="h-[240px] w-[240px] rounded-full border-2 border-dashed border-primary animate-spin-slow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
