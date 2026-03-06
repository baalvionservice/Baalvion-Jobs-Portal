'use client';

import { motion } from 'framer-motion';

const phases = [
  { id: "01", title: "Corporate Platform", desc: "High-fidelity digital identity and infrastructure roadmap." },
  { id: "02", title: "B2B Marketplace", desc: "Core global trade discovery and RFQ infrastructure." },
  { id: "03", title: "Trust Network", desc: "Institutional vendor verification and risk scoring." },
  { id: "04", title: "Document Core", desc: "Digital Bill of Lading and automated trade paperwork." },
  { id: "05", title: "Logistics Layer", desc: "Integrated freight marketplace and route optimization." },
  { id: "06", title: "Finance Integration", desc: "Escrow, L/C, and multi-currency settlement networks." },
  { id: "07", title: "Compliance Hub", desc: "Automated international trade regulation monitoring." },
  { id: "08", title: "AI Trade Engine", desc: "Predictive demand forecasting and fraud detection." },
  { id: "09", title: "Partner Ecosystem", desc: "Deep API integrations with banks and global ports." },
  { id: "10", title: "Autonomous Trade", desc: "The future of intelligent, friction-free global commerce." }
];

export function Roadmap() {
  return (
    <section className="bg-white py-24 sm:py-32 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E3A8A]">Future Vision</h2>
          <p className="mt-4 text-4xl font-bold tracking-tight text-[#111827]">Development Phases</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {phases.map((phase, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-8 rounded-xl border border-gray-100 bg-[#F8FAFC] hover:bg-white hover:border-[#1E3A8A]/20 transition-all group"
            >
              <span className="text-xs font-bold text-[#1E3A8A] mb-4 block">Phase {phase.id}</span>
              <h4 className="text-lg font-bold text-[#111827] mb-2">{phase.title}</h4>
              <p className="text-xs text-[#6B7280] leading-relaxed">{phase.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}