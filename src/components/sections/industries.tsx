
'use client';

import { Pickaxe, Factory, Sprout, Flame, Laptop, FlaskConical, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const industries = [
  { name: "Mining", icon: Pickaxe, desc: "Metals & Minerals" },
  { name: "Manufacturing", icon: Factory, desc: "Industrial Goods" },
  { name: "Agriculture", icon: Sprout, desc: "Commodities & Food" },
  { name: "Energy", icon: Flame, desc: "Oil, Gas & Renewables" },
  { name: "Technology", icon: Laptop, desc: "Electronics & Chips" },
  { name: "Chemicals", icon: FlaskConical, desc: "Petrochemicals" }
];

export function IndustryInsightsGrid() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-end">
          <div className="text-center md:text-left">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Vertical Solutions</h2>
            <p className="mt-4 text-4xl font-bold tracking-tight text-[#111827]">Built for Global Industries</p>
          </div>
          <Link href="#" className="group flex items-center gap-2 text-sm font-bold text-[#111827] hover:text-primary transition-colors">
            View All Sectors <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {industries.map((ind, i) => (
            <div 
              key={i} 
              className="flex flex-col items-center rounded-xl border border-gray-100 bg-[#F9FAFB] p-8 text-center transition-all hover:-translate-y-2 hover:bg-white hover:border-primary/20 hover:shadow-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white shadow-sm text-primary">
                <ind.icon className="h-8 w-8" />
              </div>
              <h4 className="mt-6 text-lg font-bold text-[#111827]">{ind.name}</h4>
              <p className="mt-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
