
'use client';

import { Pickaxe, Factory, Sprout, Flame, Laptop, FlaskConical } from 'lucide-react';

const industries = [
  { name: "Mining", icon: Pickaxe, desc: "Metals & Minerals" },
  { name: "Manufacturing", icon: Factory, desc: "Industrial Goods" },
  { name: "Agriculture", icon: Sprout, desc: "Commodities & Food" },
  { name: "Energy", icon: Flame, desc: "Oil, Gas & Renewables" },
  { name: "Technology", icon: Laptop, desc: "Electronics & Chips" },
  { name: "Chemicals", icon: FlaskConical, desc: "Petrochemicals" }
];

export function Industries() {
  return (
    <section className="bg-white py-24 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center md:text-left">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-end mb-16">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E3A8A]">Vertical Solutions</h2>
            <p className="mt-4 text-4xl font-bold tracking-tight text-[#111827]">Sectors We Serve</p>
          </div>
          <button className="text-sm font-bold text-[#1E3A8A] hover:underline">
            View All Industries
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {industries.map((ind, i) => (
            <div key={i} className="flex flex-col items-center p-8 rounded-xl border border-gray-100 bg-[#F8FAFC] transition-all hover:-translate-y-2 hover:bg-white hover:shadow-xl">
              <div className="h-16 w-16 rounded bg-white shadow-sm flex items-center justify-center text-[#1E3A8A]">
                <ind.icon size={32} />
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
