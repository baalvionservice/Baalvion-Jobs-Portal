
'use client';

import { Ship, Plane, Box, Navigation, Globe } from 'lucide-react';

const logisticsFeatures = [
  { icon: Globe, label: "Freight marketplace" },
  { icon: Ship, label: "Ocean shipping" },
  { icon: Plane, label: "Air cargo" },
  { icon: Box, label: "Container booking" },
  { icon: Navigation, label: "Shipment tracking" }
];

export function GlobalLogistics() {
  return (
    <section className="bg-white py-24 sm:py-32 relative overflow-hidden border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-8 relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Supply Chain Hub</h2>
            <p className="mt-4 text-4xl font-bold tracking-tight text-[#111827] sm:text-6xl leading-[1.1]">Integrated Global Logistics</p>
            <p className="mt-8 text-lg text-gray-500 leading-relaxed">
              Baalvion orchestrates complex global shipping networks, connecting you directly with carriers and freight forwarders for seamless door-to-door delivery.
            </p>
            
            <div className="mt-12 grid grid-cols-2 gap-4">
              {logisticsFeatures.map((feat, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-[#F9FAFB] border border-gray-100 hover:border-primary/30 transition-all">
                  <div className="h-10 w-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-primary">
                    <feat.icon className="h-5 w-5" />
                  </div>
                  <span className="font-bold text-[#111827] text-sm">{feat.label}</span>
                </div>
              ))}
            </div>

            <button className="mt-12 rounded-lg bg-[#111827] px-10 py-4 text-sm font-bold text-white hover:bg-black transition-all shadow-lg">
              Access Logistics Hub
            </button>
          </div>

          <div className="relative aspect-video rounded-2xl border border-gray-200 bg-[#F9FAFB] overflow-hidden group shadow-inner">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent"></div>
            {/* Visual simulation of shipping routes */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full p-12">
                <div className="absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-primary animate-ping"></div>
                <div className="absolute bottom-1/4 right-1/4 h-2 w-2 rounded-full bg-primary animate-ping"></div>
                <svg className="w-full h-full opacity-10" viewBox="0 0 100 100">
                  <path d="M25,25 Q50,10 75,75" fill="none" stroke="#1E3A8A" strokeWidth="0.5" strokeDasharray="2,2" />
                  <path d="M10,60 Q40,40 80,20" fill="none" stroke="#1E3A8A" strokeWidth="0.5" strokeDasharray="2,2" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-5 rounded-xl border border-gray-100 shadow-xl">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Live Shipment: BV-4059</p>
              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-[#111827]">Shanghai → Rotterdam</span>
                <span className="text-primary text-xs font-bold bg-primary/10 px-2 py-0.5 rounded">In Transit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
