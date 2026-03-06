'use client';

export function Company() {
  return (
    <section className="bg-[#F8FAFC] py-24 sm:py-32 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E3A8A]">About Baalvion</h2>
            <p className="mt-4 text-4xl font-bold tracking-tight text-[#111827]">Building Global Trust</p>
            <p className="mt-8 text-lg text-[#6B7280] leading-relaxed">
              Baalvion Industries Private Limited is developing next-generation digital infrastructure for global trade, enterprise commerce, and supply chain intelligence.
            </p>
            <p className="mt-6 text-lg text-[#6B7280] leading-relaxed">
              Our mission is to enable secure, efficient, and intelligent global trade by connecting fragmented systems into a unified, high-trust ecosystem.
            </p>
          </div>
          <div className="p-12 bg-white rounded-2xl border border-gray-100 shadow-sm">
             <div className="space-y-8">
                <div>
                   <h5 className="text-xs font-bold uppercase tracking-widest text-[#1E3A8A] mb-2">Our Mission</h5>
                   <p className="text-xl font-medium text-[#111827]">Secure, efficient, and intelligent trade for every enterprise.</p>
                </div>
                <div className="h-px bg-gray-100"></div>
                <div>
                   <h5 className="text-xs font-bold uppercase tracking-widest text-[#1E3A8A] mb-2">Our Reach</h5>
                   <p className="text-xl font-medium text-[#111827]">Integrating trade networks across 198+ sovereign nations.</p>
                </div>
                <div className="h-px bg-gray-100"></div>
                <div>
                   <h5 className="text-xs font-bold uppercase tracking-widest text-[#1E3A8A] mb-2">Our Goal</h5>
                   <p className="text-xl font-medium text-[#111827]">The operating system for the world's commercial infrastructure.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}