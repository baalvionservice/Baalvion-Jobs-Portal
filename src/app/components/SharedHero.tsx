'use client';

import { motion } from 'framer-motion';

interface SharedHeroProps {
  title: string;
  subtitle: string;
  badge?: string;
}

export function SharedHero({ title, subtitle, badge }: SharedHeroProps) {
  return (
    <section 
      className="relative bg-white pt-32 pb-20 border-b border-gray-100 overflow-hidden" 
      aria-labelledby="shared-hero-title"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" aria-hidden="true">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]"></div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {badge && (
            <span className="inline-flex items-center rounded-full bg-gray-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#1E3A8A] border border-gray-200 mb-6">
              {badge}
            </span>
          )}
          <h1 id="shared-hero-title" className="text-4xl font-bold tracking-tight text-[#111827] sm:text-6xl leading-[1.1]">
            {title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#6B7280]">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
