
'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const insights = [
  {
    title: "Global trade trends 2026",
    category: "Market Report",
    image: "https://picsum.photos/seed/trade1/800/600",
    date: "March 12, 2026"
  },
  {
    title: "Supply chain resilience insights",
    category: "Insights",
    image: "https://picsum.photos/seed/trade2/800/600",
    date: "March 10, 2026"
  },
  {
    title: "New trade regulations in EU",
    category: "Regulations",
    image: "https://picsum.photos/seed/trade3/800/600",
    date: "March 08, 2026"
  }
];

export function IndustryInsights() {
  return (
    <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-end mb-16">
          <div className="text-center md:text-left">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Intelligence Hub</h2>
            <p className="mt-4 text-4xl font-bold tracking-tight text-[#111827]">Industry Insights</p>
          </div>
          <button className="rounded-lg border border-gray-300 bg-white px-8 py-3 text-sm font-bold text-gray-700 transition-all hover:bg-gray-50">
            View All Reports
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {insights.map((card, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative h-64 w-full rounded-xl overflow-hidden mb-6 border border-gray-100">
                <Image 
                  src={card.image} 
                  alt={card.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                  data-ai-hint="trade insights"
                />
                <div className="absolute top-4 left-4 rounded bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#111827] shadow-sm backdrop-blur-md">
                  {card.category}
                </div>
              </div>
              <h4 className="text-xl font-bold text-[#111827] group-hover:text-primary transition-colors leading-tight mb-4">
                {card.title}
              </h4>
              <div className="flex items-center justify-between text-xs font-bold text-gray-400 uppercase tracking-widest">
                <span>{card.date}</span>
                <span className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity text-primary">Read More <ArrowRight className="h-3 w-3" /></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
