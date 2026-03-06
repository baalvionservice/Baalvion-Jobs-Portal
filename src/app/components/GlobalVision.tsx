
'use client';

export function GlobalVision() {
  return (
    <section className="bg-[#F8FAFC] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E3A8A]">Our Vision</h2>
            <p className="mt-4 text-4xl font-bold tracking-tight text-[#111827] sm:text-5xl">Global Infrastructure Platform</p>
            <p className="mt-8 text-lg text-[#6B7280] leading-relaxed">
              Baalvion is not just a marketplace; it is a global digital trade infrastructure. We are building the backbone of international commerce, connecting fragmented logistics, finance, and compliance systems into one unified ecosystem.
            </p>
            <p className="mt-6 text-lg text-[#6B7280] leading-relaxed font-medium italic">
              "Connecting the world through intelligent infrastructure, from enterprise to sovereign state."
            </p>
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <span className="text-4xl font-bold text-[#111827]">198</span>
                <p className="text-xs font-bold uppercase tracking-widest text-[#1E3A8A] mt-2">Nations Integrated</p>
              </div>
              <div>
                <span className="text-4xl font-bold text-[#111827]">$10T+</span>
                <p className="text-xs font-bold uppercase tracking-widest text-[#1E3A8A] mt-2">Market Potential</p>
              </div>
            </div>
          </div>
          <div className="relative p-10 bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:scale-110 transition-transform duration-1000">
              <svg className="w-96 h-96" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-[#111827] mb-6">The Baalvion Ecosystem</h4>
            <ul className="space-y-4">
              {[
                { label: "Sovereign Integration", desc: "Automated customs and regulatory compliance." },
                { icon: "02", label: "Financial Intermediation", desc: "Institutional liquidity and credit networks." },
                { icon: "03", label: "Logistics Orchestration", desc: "Global door-to-door freight intelligence." }
              ].map((item, i) => (
                <li key={i} className="flex gap-6 items-start p-6 bg-gray-50 rounded-xl hover:bg-white border border-transparent hover:border-gray-100 transition-all">
                  <span className="text-xs font-bold text-[#1E3A8A] bg-white w-8 h-8 rounded flex items-center justify-center shadow-sm">0{i+1}</span>
                  <div>
                    <h5 className="font-bold text-[#111827]">{item.label}</h5>
                    <p className="text-sm text-[#6B7280] mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
