
'use client';

import { ArrowRight } from 'lucide-react';

const insights = [
  {
    title: "The Shift in Global Supply Chain Resilience",
    category: "Market Report",
    date: "March 2026",
    desc: "How enterprises are diversifying supplier networks across 198 countries."
  },
  {
    title: "Digital Trade Finance: A New Liquid Asset",
    category: "Insights",
    date: "February 2026",
    desc: "Unlocking global liquidity through integrated digital letters of credit."
  },
  {
    title: "AI Compliance in Cross-Border Trade",
    category: "Research",
    date: "January 2026",
    desc: "Automating international trade regulations with predictive intelligence."
  }
];

export function Insights() {
  return (
    <section className="bg-white py-24 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-end mb-16 text-center md:text-left">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E3A8A]">Intelligence Hub</h2>
            <p className="mt-4 text-4xl font-bold tracking-tight text-[#111827]">Industry Insights</p>
          </div>
          <button className="rounded border border-gray-300 bg-white px-8 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50">
            Access Library
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {insights.map((card, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="bg-gray-50 aspect-[16/9] rounded-xl mb-6 border border-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/10 to-transparent"></div>
              </div>
              <div className="flex gap-4 items-center mb-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1E3A8A]">{card.category}</span>
                <span className="text-[10px] font-bold text-gray-400">{card.date}</span>
              </div>
              <h4 className="text-xl font-bold text-[#111827] group-hover:text-[#1E3A8A] transition-colors leading-tight mb-4">
                {card.title}
              </h4>
              <p className="text-sm text-[#6B7280] leading-relaxed mb-6">{card.desc}</p>
              <div className="flex items-center gap-2 text-xs font-bold text-[#111827] uppercase tracking-wider group-hover:gap-3 transition-all">
                Read Report <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
