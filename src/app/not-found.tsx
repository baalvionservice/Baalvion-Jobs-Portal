
'use client';

import Link from 'next/link';
import { SharedHero } from '@/app/components/SharedHero';
import { ArrowLeft, Search, ShieldAlert, Globe, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <main className="bg-white min-h-[90vh] flex flex-col items-center justify-center px-6 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl text-center"
      >
        <div className="flex justify-center mb-8">
          <div className="h-24 w-24 rounded-3xl bg-gray-50 flex items-center justify-center text-[#1E3A8A] border border-gray-100 shadow-sm relative">
            <Search size={48} />
            <div className="absolute -top-2 -right-2 h-8 w-8 bg-white rounded-full flex items-center justify-center text-red-500 shadow-md">
              <ShieldAlert size={20} />
            </div>
          </div>
        </div>

        <SharedHero 
          badge="Trade Integrity Error"
          title="Institutional Resource Not Found"
          subtitle="The requested global trade asset, secure portal, or sovereign document could not be located within the Baalvion digital infrastructure."
        />

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/" className="group inline-flex h-16 items-center gap-3 rounded-2xl bg-[#111827] px-10 text-xs font-bold text-white uppercase tracking-[0.2em] shadow-2xl shadow-gray-200 hover:bg-[#1E3A8A] transition-all active:scale-95">
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" /> Return to Dashboard
          </Link>
          <Link href="/contact" className="inline-flex h-16 items-center gap-3 rounded-2xl border border-gray-200 bg-white px-10 text-xs font-bold text-[#111827] uppercase tracking-[0.2em] hover:bg-gray-50 transition-all active:scale-95">
            Contact Support Operations
          </Link>
        </div>

        <div className="mt-32 pt-12 border-t border-gray-50">
          <div className="flex flex-col items-center gap-6">
             <div className="flex gap-12 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                <div className="flex items-center gap-2"><Globe size={14} className="text-[#1E3A8A]" /> Global Node: 01</div>
                <div className="flex items-center gap-2"><Activity size={14} className="text-green-500" /> Uptime: 99.998%</div>
                <div className="flex items-center gap-2"><ShieldAlert size={14} className="text-red-500" /> Code: 404_ASSET_MISSING</div>
             </div>
             <p className="text-[9px] font-bold text-gray-300 uppercase tracking-[0.4em]">
               Baalvion Connectivity Integrity System • Secure Layer L3
             </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
