
'use client';

import { Search, FileText, Handshake, ShieldCheck, Truck } from 'lucide-react';

const steps = [
  { icon: Search, title: "Search suppliers", desc: "Discover verified manufacturers across 198 countries." },
  { icon: FileText, title: "Send RFQ", desc: "Submit structured requests and receive competitive bids." },
  { icon: Handshake, title: "Negotiate trade", desc: "Secure terms using integrated digital contracts." },
  { icon: ShieldCheck, title: "Secure payment", desc: "Release funds via escrow upon verified logistics milestones." },
  { icon: Truck, title: "Track logistics", desc: "Full visibility of your goods from factory to final destination." }
];

export function HowItWorks() {
  return (
    <section className="bg-white py-24 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-8">
        <div className="text-center mb-20">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E3A8A]">The Process</h2>
          <p className="mt-4 text-4xl font-bold tracking-tight text-[#111827] sm:text-5xl">How Baalvion Works</p>
        </div>

        <div className="relative grid gap-12 md:grid-cols-5">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="relative mb-8">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-50 border border-gray-100 text-[#1E3A8A] transition-all group-hover:bg-[#1E3A8A] group-hover:text-white">
                  <step.icon className="h-9 w-9" />
                </div>
                <div className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white border border-gray-200 text-[10px] font-bold text-gray-900 shadow-sm">
                  0{i + 1}
                </div>
              </div>
              <h4 className="text-lg font-bold text-[#111827] mb-3">{step.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
