
'use client';

import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContentCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ContentCard({ icon: Icon, title, description }: ContentCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-10 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all group"
    >
      <div className="h-12 w-12 rounded bg-gray-50 flex items-center justify-center text-[#1E3A8A] mb-8 group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold text-[#111827] mb-4">{title}</h3>
      <p className="text-sm text-[#6B7280] leading-relaxed">{description}</p>
    </motion.div>
  );
}
