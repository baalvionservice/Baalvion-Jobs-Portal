'use client';

import { FileText, Navigation, ShieldAlert, BarChart3, Repeat } from 'lucide-react';
import { motion } from 'framer-motion';

const infrastructureItems = [
  { icon: FileText, title: "Trade Documentation Automation", desc: "Digitally generated Bills of Lading, Invoices, and Certificates of Origin." },
  { icon: Repeat, title: "Global Payment Routing", desc: "Institutional-grade multi-currency settlement with real-time FX optimization." },
  { icon: Navigation, title: "Logistics Intelligence", desc: "Integrated freight marketplace and real-time container tracking." },
  { icon: BarChart3, title: "Supply Chain Visibility", desc: "End-to-end data integration across fragmented logistics networks." },
  { icon: ShieldAlert, title: "Risk Monitoring", desc: "Predictive analysis of geopolitical, financial, and environmental trade risks." }
];

export function Infrastructure() {
  return (
    <section className="bg-white py-24 sm:py-32 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E3A8A]">Technical Core</h2>
            <p className="mt-4 text-4xl font-bold tracking-tight text-[#111827]">Infrastructure for Modern Trade</p>
          </div>
          <button className="text-sm font-bold text-[#1E3A8A] hover:underline">
            View API Documentation
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {infrastructureItems.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="corporate-card p-10 rounded-xl group"
            >
              <div className="h-10 w-10 rounded bg-gray-50 flex items-center justify-center text-[#1E3A8A] mb-8 group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors">
                <item.icon size={20} />
              </div>
              <h4 className="text-xl font-bold text-[#111827] mb-4">{item.title}</h4>
              <p className="text-sm text-[#6B7280] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
          <div className="p-10 rounded-xl border-2 border-dashed border-gray-200 flex flex-col justify-center items-center text-center">
             <p className="text-sm font-bold text-gray-400">Scale your trade infrastructure with Baalvion API.</p>
             <button className="mt-4 text-xs font-bold uppercase tracking-widest text-[#1E3A8A]">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}