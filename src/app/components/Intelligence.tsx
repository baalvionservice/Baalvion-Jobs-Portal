'use client';

import { ShieldCheck, TrendingUp, Search, BarChart3, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const intelligenceItems = [
  { icon: ShieldCheck, title: "Vendor Risk Scoring", desc: "Automated institutional analysis of supplier financial stability and performance history." },
  { icon: TrendingUp, title: "Supply Chain Insights", desc: "Predictive alerts for logistics disruptions, port congestion, and regional events." },
  { icon: BarChart3, title: "Trade Analytics", desc: "Deep operational insights across complex multi-market supply networks." },
  { icon: Search, title: "Market Intelligence", desc: "Global benchmark pricing and demand forecasting for strategic sourcing." },
  { icon: Zap, title: "Fraud Detection", desc: "Real-time monitoring of shell entities and suspicious cross-border transaction patterns." }
];

export function Intelligence() {
  return (
    <section className="bg-white py-24 sm:py-32 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E3A8A]">Intelligence Layer</h2>
            <p className="mt-4 text-4xl font-bold tracking-tight text-[#111827]">Trade Intelligence Platform</p>
            <p className="mt-8 text-lg text-[#6B7280] leading-relaxed">
              Baalvion provides institutional-grade intelligence to secure and optimize your global trade operations.
            </p>
            <button className="mt-10 rounded bg-[#1E3A8A] px-10 py-4 text-sm font-bold text-white hover:bg-[#1E40AF] transition-all shadow-sm">
               Access Insights Hub
            </button>
          </div>

          <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
            {intelligenceItems.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="corporate-card p-8 rounded-xl bg-white"
              >
                <div className="h-10 w-10 rounded-lg bg-[#F8FAFC] flex items-center justify-center text-[#1E3A8A] mb-6">
                  <item.icon size={20} />
                </div>
                <h4 className="text-xl font-bold text-[#111827] mb-2">{item.title}</h4>
                <p className="text-sm text-[#6B7280] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}