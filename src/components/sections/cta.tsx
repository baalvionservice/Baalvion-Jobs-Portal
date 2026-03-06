
'use client';

import { ArrowRight, Search, Factory } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="bg-[#1E3A8A] py-24 sm:py-32 overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-8 relative z-10 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl max-w-4xl mx-auto leading-[1.1]">
          Start Your Global <br /> Trade Journey
        </h2>
        <p className="mt-8 max-w-2xl mx-auto text-lg font-medium text-white/80 leading-relaxed">
          Join the digital infrastructure powering global commerce. Secure, intelligent, and borderless.
        </p>
        
        <div className="mt-12 flex flex-col gap-4 sm:flex-row justify-center">
          <button className="flex h-14 items-center justify-center gap-3 rounded-lg bg-white px-10 text-base font-bold text-[#1E3A8A] transition-all hover:bg-gray-50 active:scale-95 shadow-lg">
            <Search className="h-5 w-5" /> Find Suppliers <ArrowRight className="h-5 w-5" />
          </button>
          <button className="flex h-14 items-center justify-center gap-3 rounded-lg border border-white/30 bg-white/10 px-10 text-base font-bold text-white transition-all hover:bg-white/20 active:scale-95">
            <Factory className="h-5 w-5" /> Join as Supplier
          </button>
        </div>
        
        <p className="mt-10 text-[10px] font-bold text-white/40 uppercase tracking-[0.3em]">
          Over 150+ financial institutions integrated
        </p>
      </div>
    </section>
  );
}
