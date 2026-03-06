'use client';

import { Globe, Building2, Cpu, ShieldCheck, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const pillars = [
  { icon: Globe, title: "Global B2B Marketplace", desc: "Digital discovery layer for buyers and suppliers across 198+ countries.", href: "/marketplace" },
  { icon: Building2, title: "Trade Infrastructure", desc: "Core digital systems for managing the entire trade lifecycle at enterprise scale.", href: "/infrastructure" },
  { icon: Cpu, title: "Vendor Intelligence", desc: "Predictive risk scoring and reliability analysis for global supply partners.", href: "/trade-intelligence" },
  { icon: ShieldCheck, title: "Compliance Systems", desc: "Automated international trade regulation and sanity checks.", href: "/compliance" },
  { icon: Landmark, title: "Financial Connectivity", desc: "Integrated payment routing and institutional trade finance networks.", href: "/trade-finance" }
];

export function Platform() {
  return (
    <section className="bg-white py-24 sm:py-32 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E3A8A]">The Baalvion Global Platform</h2>
          <p className="mt-4 text-4xl font-bold tracking-tight text-[#111827] sm:text-5xl">Unified Trade Architecture</p>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-[#6B7280]">
            Baalvion integrates marketplace infrastructure, trade finance, supply chain intelligence, and compliance systems into a unified platform.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((pillar, i) => (
            <Link href={pillar.href} key={i}>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="corporate-card p-8 rounded-xl h-full flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="h-12 w-12 rounded bg-gray-50 flex items-center justify-center text-[#1E3A8A] mb-6 group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors">
                  <pillar.icon size={24} aria-hidden="true" />
                </div>
                <h4 className="text-lg font-bold text-[#111827] mb-3 leading-tight">{pillar.title}</h4>
                <p className="text-[#6B7280] text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
