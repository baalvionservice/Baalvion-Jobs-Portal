
'use client';

import { Lock, CreditCard, Landmark, Banknote, ShieldAlert, FileText } from 'lucide-react';

const financeFeatures = [
  { icon: Lock, title: "Escrow Payments", desc: "Funds are only released when logistics milestones are digitally verified." },
  { icon: FileText, title: "Letter of Credit", desc: "Automated LCs integrated directly with global banking protocols." },
  { icon: Banknote, title: "Invoice Financing", desc: "Get paid instantly on your trade invoices through our capital partners." },
  { icon: CreditCard, title: "Multi-currency Settlement", desc: "Settlement in 45+ currencies with real-time FX optimization." }
];

export function TradeFinance() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="grid gap-4">
              {financeFeatures.map((feat, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="h-12 w-12 shrink-0 rounded-lg bg-white shadow-sm flex items-center justify-center text-[#1E3A8A]">
                    <feat.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#111827] mb-1">{feat.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E3A8A]">Financial Infrastructure</h2>
            <p className="mt-4 text-4xl font-bold tracking-tight text-[#111827] sm:text-5xl">Trade Finance Reimagined</p>
            <p className="mt-8 text-lg text-gray-500 leading-relaxed">
              Eliminate payment risk and unlock global liquidity. Baalvion connects every trade transaction with trusted financial institutions to ensure security and funding.
            </p>
            <div className="mt-10 p-8 rounded-xl border border-gray-100 bg-[#F8FAFC] flex items-center gap-6">
              <Landmark className="h-12 w-12 text-[#1E3A8A] shrink-0" />
              <p className="text-lg font-medium text-[#111827] italic">
                "Connecting global trade with over 150+ trusted financial institutions."
              </p>
            </div>
            <button className="mt-12 rounded-lg bg-[#1E3A8A] px-10 py-4 text-sm font-bold text-white hover:bg-[#1E40AF] transition-all shadow-sm active:scale-95">
              Apply for Financing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
