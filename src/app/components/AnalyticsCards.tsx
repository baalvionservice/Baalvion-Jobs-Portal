
'use client';

import { motion } from 'framer-motion';

interface AnalyticsCardsProps {
  items: {
    label: string;
    value: string;
    trend?: string;
    desc: string;
  }[];
}

export function AnalyticsCards({ items }: AnalyticsCardsProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="p-8 rounded-xl border border-gray-100 bg-[#F8FAFC]"
        >
          <p className="text-xs font-bold text-[#1E3A8A] uppercase tracking-widest mb-4">{item.label}</p>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-3xl font-bold text-[#111827]">{item.value}</span>
            {item.trend && <span className="text-xs font-bold text-green-600">{item.trend}</span>}
          </div>
          <p className="text-xs text-[#6B7280] leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}
