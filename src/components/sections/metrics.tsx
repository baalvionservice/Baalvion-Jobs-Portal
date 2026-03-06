
'use client';

import { motion } from 'framer-motion';

export function GlobalMetrics() {
  const metrics = [
    { label: "Global Suppliers", value: "1.2M+" },
    { label: "Products Listed", value: "85M+" },
    { label: "Countries Connected", value: "198" },
    { label: "Annual Trade Volume", value: "$1.4T+" }
  ];

  return (
    <section className="bg-[#F8FAFC] py-24 border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-gray-100 shadow-sm"
            >
              <span className="text-4xl font-bold tracking-tight text-[#111827] sm:text-5xl">
                {metric.value}
              </span>
              <h4 className="mt-4 text-xs font-bold text-gray-400 uppercase tracking-widest">{metric.label}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
