'use client';

import { motion } from 'framer-motion';

export function TradeVisualization() {
  return (
    <section className="bg-[#F8FAFC] py-24 sm:py-32 border-b border-gray-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E3A8A]">Active Infrastructure</h2>
          <p className="mt-4 text-4xl font-bold tracking-tight text-[#111827]">Global Trade Activity</p>
        </div>

        <div className="relative aspect-video rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm">
           <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]"></div>
           </div>
           
           {/* Animated dots representing global trade flows */}
           <div className="absolute inset-0 p-20">
              <svg className="w-full h-full" viewBox="0 0 800 400">
                 {/* Simplified World Outlines */}
                 <path d="M100,100 Q150,50 200,100 T300,150 T400,100 T500,200 T700,150" fill="none" stroke="#E5E7EB" strokeWidth="2" />
                 
                 {/* Animated Trade Lines */}
                 <motion.path 
                    d="M150,120 Q300,50 450,200" 
                    fill="none" 
                    stroke="#1E3A8A" 
                    strokeWidth="1" 
                    strokeDasharray="4,4"
                    animate={{ strokeDashoffset: [0, -20] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                 />
                 <motion.path 
                    d="M450,200 Q600,150 700,250" 
                    fill="none" 
                    stroke="#0F766E" 
                    strokeWidth="1" 
                    strokeDasharray="4,4"
                    animate={{ strokeDashoffset: [0, -20] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                 />
                 <motion.path 
                    d="M200,300 Q400,350 600,200" 
                    fill="none" 
                    stroke="#1E3A8A" 
                    strokeWidth="1" 
                    strokeDasharray="4,4"
                    animate={{ strokeDashoffset: [0, -20] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                 />

                 {/* Pulse Dots */}
                 {[
                   { x: 150, y: 120 },
                   { x: 450, y: 200 },
                   { x: 700, y: 250 },
                   { x: 200, y: 300 },
                   { x: 600, y: 200 }
                 ].map((dot, i) => (
                   <g key={i}>
                      <circle cx={dot.x} cy={dot.y} r="3" fill="#1E3A8A" />
                      <motion.circle 
                         cx={dot.x} cy={dot.y} r="8" 
                         stroke="#1E3A8A" strokeWidth="0.5" fill="none"
                         animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                         transition={{ duration: 2, repeat: Infinity }}
                      />
                   </g>
                 ))}
              </svg>
           </div>

           <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <p className="text-xs font-bold uppercase tracking-widest text-[#6B7280]">
                Real-time trade networks powered by Baalvion infrastructure.
              </p>
           </div>
        </div>
      </div>
    </section>
  );
}