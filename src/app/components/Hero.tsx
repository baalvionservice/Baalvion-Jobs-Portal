'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-white pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden global-grid border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-gray-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#1E3A8A] border border-gray-200">
              The Global Standard for Trade
            </span>
            <h1 className="mt-8 text-5xl font-bold tracking-tight text-[#111827] sm:text-6xl lg:text-7xl leading-[1.1]">
              Next-Generation <br />
              <span className="text-[#1E3A8A]">Global B2B Platform</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#6B7280] lg:text-xl">
              BAALVION connects businesses across 198+ countries. Seamlessly integrate trade compliance, AI-driven intelligence, and vendor scoring to expand your global operations securely and efficiently.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row w-full sm:w-auto">
              <Link 
                href="/request-access" 
                className="group flex h-14 items-center justify-center gap-2 rounded bg-[#111827] px-10 text-base font-bold text-white transition-all hover:bg-[#1E3A8A] shadow-xl active:scale-95"
              >
                Request Platform Access <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                href="/platform" 
                className="flex h-14 items-center justify-center gap-2 rounded border border-gray-300 bg-white px-10 text-base font-bold text-gray-700 transition-all hover:bg-gray-50 active:scale-95"
              >
                Explore Platform
              </Link>
            </div>
          </motion.div>

          <div className="relative hidden lg:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative rounded-2xl border border-gray-200 bg-white p-2 shadow-2xl"
            >
              <div className="aspect-[4/3] rounded-xl bg-gray-50 overflow-hidden relative flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1E3A8A]/5 to-transparent"></div>
                <div className="relative w-full h-full p-12">
                   <div className="absolute inset-0 flex items-center justify-center opacity-10">
                      <div className="w-[80%] h-[80%] rounded-full border border-[#1E3A8A] animate-spin-slow"></div>
                      <div className="absolute w-[60%] h-[60%] rounded-full border border-[#1E3A8A] animate-spin-slow reverse"></div>
                   </div>
                   <div className="flex h-full w-full flex-col justify-between">
                      <div className="flex justify-between">
                         <div className="h-8 w-32 bg-white rounded shadow-sm border border-gray-100 px-3 flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                            <div className="h-1.5 w-full bg-gray-200 rounded"></div>
                         </div>
                         <div className="h-8 w-24 bg-white rounded shadow-sm border border-gray-100 px-3 flex items-center gap-2">
                            <div className="h-1.5 w-full bg-gray-200 rounded"></div>
                         </div>
                      </div>
                      <div className="flex justify-center">
                         <div className="h-12 w-48 bg-white rounded-lg shadow-md border border-gray-100 p-4 flex flex-col gap-2">
                            <div className="h-2 w-3/4 bg-gray-200 rounded"></div>
                            <div className="h-2 w-1/2 bg-gray-200 rounded"></div>
                         </div>
                      </div>
                      <div className="flex justify-between items-end">
                         <div className="h-24 w-24 bg-white rounded-lg shadow-sm border border-gray-100 p-4 flex flex-col gap-3">
                            <div className="h-2 w-full bg-gray-200 rounded"></div>
                            <div className="h-2 w-full bg-gray-200 rounded"></div>
                            <div className="h-2 w-1/2 bg-gray-200 rounded"></div>
                         </div>
                         <div className="h-10 w-32 bg-[#1E3A8A]/10 rounded border border-[#1E3A8A]/20"></div>
                      </div>
                   </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-xl border border-gray-200 bg-white p-5 shadow-lg flex items-center gap-4">
                 <div className="h-12 w-12 rounded-lg bg-green-50 flex items-center justify-center text-green-600">
                    <ShieldCheck size={28} />
                 </div>
                 <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Security Standard</p>
                    <p className="text-base font-bold text-gray-900">KYB Verified</p>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
