import { Globe, Wallet, Truck, ShieldCheck, Cpu, BarChart3, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    title: "Global Marketplace",
    desc: "Discover suppliers and premium buyers worldwide. Access 20M+ verified entities across 198+ countries.",
    icon: Globe,
    color: "blue"
  },
  {
    title: "Trade Finance",
    desc: "Seamlessly access letters of credit, supply chain financing, and working capital for global transactions.",
    icon: Wallet,
    color: "indigo"
  },
  {
    title: "Logistics Intelligence",
    desc: "Real-time container tracking, route optimization, and digital freight management in one unified view.",
    icon: Truck,
    color: "cyan"
  },
  {
    title: "Compliance Automation",
    desc: "Automated KYB, KYC, and AML checks. AI-driven customs documentation and regulatory monitoring.",
    icon: ShieldCheck,
    color: "emerald"
  },
  {
    title: "AI Vendor Matching",
    desc: "Intelligent matching based on reliability scoring, historical performance, and pricing benchmarks.",
    icon: Cpu,
    color: "violet"
  },
  {
    title: "Cross-Border Payments",
    desc: "Secure multi-currency settlement with real-time FX optimization and integrated escrow protocols.",
    icon: BarChart3,
    color: "sky"
  }
];

export function PlatformOverview() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 flex flex-col items-center text-center">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Integrated Ecosystem</h2>
          <p className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Unified Trade Infrastructure</p>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Everything you need to manage the global trade lifecycle, from discovery to final delivery, on a single intelligent platform.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all hover:border-primary/50 hover:bg-primary/[0.02]"
            >
              <div className="absolute top-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full"></div>
              
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <feature.icon className="h-7 w-7" />
              </div>
              
              <h3 className="mt-6 text-2xl font-bold text-white">{feature.title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {feature.desc}
              </p>
              
              <Link href="#" className="mt-8 flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-primary opacity-0 transition-all group-hover:opacity-100">
                Learn More <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
