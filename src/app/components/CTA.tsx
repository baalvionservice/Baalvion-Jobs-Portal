'use client';

import Link from 'next/link';

export function CTA() {
  return (
    <section className="bg-[#1E3A8A] py-24 sm:py-32 text-center text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
         <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]"></div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl mb-8">
          Join the Future of Global Trade
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-white/80 leading-relaxed mb-12">
          Experience the power of institutional-grade trade infrastructure. Connect your enterprise to the global commercial network.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row justify-center">
          <Link 
            href="/request-access" 
            className="rounded-lg bg-white px-10 py-4 text-base font-bold text-[#1E3A8A] transition-all hover:bg-gray-100 shadow-xl active:scale-95"
          >
            Request Platform Access
          </Link>
          <Link 
            href="/partners" 
            className="rounded-lg border-2 border-white/20 px-10 py-4 text-base font-bold text-white transition-all hover:bg-white/10 active:scale-95"
          >
            Partner With Baalvion
          </Link>
        </div>
      </div>
    </section>
  );
}
