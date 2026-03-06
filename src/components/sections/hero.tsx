
'use client';

import Link from 'next/link';
import { ArrowRight, Globe, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-24 overflow-hidden bg-white hero-subtle">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-gray-100 bg-gray-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#1E3A8A]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#1E3A8A]"></span>
              The Global Standard for Trade
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-8 text-5xl font-bold tracking-tight text-[#111827] sm:text-6xl lg:text-7xl leading-[1.05]"
            >
              Powering the <br />
              <span className="text-[#1E3A8A]">Future</span> of <br />
              Global Trade
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 max-w-lg text-lg leading-relaxed text-gray-500 lg:text-xl"
            >
              Baalvion connects buyers, suppliers, logistics networks, and financial institutions into one intelligent global trade platform.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row w-full sm:w-auto"
            >
              <Link 
                href="#" 
                className="group flex h-14 items-center justify-center gap-2 rounded-lg bg-[#1E3A8A] px-10 text-base font-bold text-white transition-all hover:bg-[#1E40AF] shadow-sm active:scale-95"
              >
                Start Sourcing <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                href="#" 
                className="flex h-14 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-10 text-base font-bold text-gray-700 transition-all hover:bg-gray-50 active:scale-95"
              >
                Become a Supplier
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-16 flex flex-wrap items-center justify-center gap-10 lg:justify-start"
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <Globe className="h-4 w-4 text-[#1E3A8A]" />
                198 Countries
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <ShieldCheck className="h-4 w-4 text-[#1E3A8A]" />
                Verified Network
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <Zap className="h-4 w-4 text-[#1E3A8A]" />
                Instant Settlement
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl border border-gray-200 bg-white p-4 shadow-xl">
              <div className="aspect-[4/3] rounded-xl border border-gray-100 bg-gray-50 overflow-hidden flex flex-col p-8 space-y-6">
                 <div className="flex items-center justify-between">
                    <div className="h-5 w-32 rounded bg-gray-200"></div>
                    <div className="flex gap-2">
                       <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                       <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                       <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                    </div>
                 </div>
                 <div className="grid grid-cols-3 gap-4">
                    <div className="h-24 rounded-lg bg-white border border-gray-100 shadow-sm animate-pulse"></div>
                    <div className="h-24 rounded-lg bg-white border border-gray-100 shadow-sm animate-pulse delay-75"></div>
                    <div className="h-24 rounded-lg bg-white border border-gray-100 shadow-sm animate-pulse delay-150"></div>
                 </div>
                 <div className="space-y-4">
                    <div className="h-3 w-full rounded bg-gray-200"></div>
                    <div className="h-3 w-3/4 rounded bg-gray-200"></div>
                    <div className="h-3 w-1/2 rounded bg-gray-200"></div>
                 </div>
                 <div className="mt-auto flex justify-between items-center">
                    <div className="h-10 w-32 rounded-lg bg-[#1E3A8A]/10"></div>
                    <div className="h-10 w-10 rounded-full bg-gray-200"></div>
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
