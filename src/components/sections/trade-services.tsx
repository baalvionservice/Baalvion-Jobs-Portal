
'use client';

import { Globe, FileEdit, ClipboardCheck, LayoutGrid, Fingerprint, Database, ArrowRight } from 'lucide-react';

const services = [
  { icon: Globe, title: "Supplier Discovery", desc: "Proprietary matching engine connecting you with 1.2M+ verified manufacturers." },
  { icon: LayoutGrid, title: "RFQ Marketplace", desc: "Centralized hub to manage complex request-for-quotation workflows at scale." },
  { icon: FileEdit, title: "Trade Contracts", desc: "Legally binding international trade agreements with automated compliance checks." },
  { icon: Fingerprint, title: "Compliance Engine", desc: "Real-time KYB, KYC, and global sanction monitoring for every transaction." },
  { icon: ClipboardCheck, title: "Trade Documents", desc: "Automated creation of Bills of Lading, Invoices, and regulatory paperwork." },
  { icon: Database, title: "Vendor Intelligence", desc: "Deep performance analytics and risk scoring for global supply partners." }
];

export function TradeServices() {
  return (
    <section className="bg-[#F8FAFC] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-8">
        <div className="text-center mb-20">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E3A8A]">Trade Infrastructure</h2>
          <p className="mt-4 text-4xl font-bold tracking-tight text-[#111827]">Integrated Platform Services</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div key={i} className="corporate-card p-10 rounded-xl group bg-white">
              <div className="h-12 w-12 rounded-lg bg-gray-50 flex items-center justify-center text-[#1E3A8A] mb-8 transition-colors group-hover:bg-[#1E3A8A] group-hover:text-white">
                <service.icon size={24} />
              </div>
              <h4 className="text-xl font-bold text-[#111827] mb-3">{service.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">{service.desc}</p>
              <button className="flex items-center gap-1.5 text-xs font-bold text-[#1E3A8A] uppercase tracking-wider group-hover:gap-2 transition-all">
                Learn More <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
