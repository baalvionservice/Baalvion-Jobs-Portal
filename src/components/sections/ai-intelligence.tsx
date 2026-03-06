
'use client';

import { Zap, TrendingUp, ShieldAlert, BarChart3, Search, CircleCheck } from 'lucide-react';

const aiHighlights = [
  { icon: ShieldAlert, title: "Supplier Risk Analysis", desc: "Automated vetting of financial stability, fulfillment history, and compliance." },
  { icon: TrendingUp, title: "Market Demand Prediction", desc: "Neural networks analyzing global trends to forecast commodity demand." },
  { icon: Zap, title: "Fraud Detection", desc: "Real-time monitoring of transaction patterns to identify shell entities." },
  { icon: BarChart3, title: "Trade Analytics", desc: "Deep insights into your supply chain efficiency and cost saving opportunities." },
  { icon: Search, title: "Pricing Insights", desc: "Benchmarking product prices across global markets in real-time." }
];

export function AIIntelligence() {
  return (
    <section className="bg-[#F9FAFB] py-24 sm:py-32 border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-20">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Intelligence Layer</h2>
          <p className="mt-4 text-3xl font-bold tracking-tight text-[#111827] sm:text-5xl">AI-Powered Trade Intelligence</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
            {aiHighlights.map((feat, i) => (
              <div key={i} className="corporate-card p-8 rounded-xl hover:border-primary/30 transition-all bg-white">
                <div className="h-12 w-12 rounded-lg bg-gray-50 flex items-center justify-center text-primary mb-6">
                  <feat.icon className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-bold text-[#111827] mb-3">{feat.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="rounded-2xl bg-[#0F172A] p-10 flex flex-col justify-between items-start text-white relative overflow-hidden group shadow-xl">
            <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-110 transition-transform">
              <Zap className="h-64 w-64" />
            </div>
            <div>
              <h4 className="text-3xl font-bold leading-tight mb-6 text-white">Real-time <br />Predictive <br />Power.</h4>
              <p className="text-base font-medium text-gray-400 leading-relaxed mb-8">
                Baalvion AI processes over 500M data points daily, providing the predictive intelligence your supply chain needs to stay resilient.
              </p>
              <ul className="space-y-3">
                {['99.8% Accuracy', '22% Cost Reduction', 'Automated Compliance'].map((item) => (
                   <li key={item} className="flex items-center gap-2 text-sm font-semibold text-white">
                     <CircleCheck size={16} className="text-primary" /> {item}
                   </li>
                ))}
              </ul>
            </div>
            <button className="mt-12 bg-white text-[#0F172A] px-8 py-4 rounded-lg font-bold text-sm hover:bg-gray-100 transition-all shadow-lg">
              Request Insights Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
