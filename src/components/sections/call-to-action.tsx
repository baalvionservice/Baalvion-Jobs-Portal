import Link from 'next/link';
import { ArrowRight, Globe, Users, Building2 } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="bg-primary py-24 sm:py-32 overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-white blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-white blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-primary-foreground sm:text-7xl max-w-4xl">
            Start Global Trade <br /> with Baalvion
          </h2>
          <p className="mt-8 max-w-2xl text-lg font-medium text-primary-foreground/80 leading-relaxed">
            Join the world's leading enterprises in building a more efficient, transparent, and resilient global supply chain.
          </p>
          
          <div className="mt-12 grid gap-4 sm:flex sm:flex-row">
            <Link 
              href="#" 
              className="group flex h-14 items-center justify-center gap-2 rounded-full bg-white px-10 text-base font-bold text-primary transition-all hover:scale-105 active:scale-95 shadow-xl"
            >
              <Users className="h-5 w-5" /> Create Account <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link 
              href="#" 
              className="flex h-14 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-10 text-base font-bold text-white transition-all hover:bg-white/20"
            >
              <Building2 className="h-5 w-5" /> Become a Supplier
            </Link>
          </div>

          <Link href="#" className="mt-8 text-sm font-bold text-white underline underline-offset-8 hover:text-white/80 transition-colors">
            Request Enterprise Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
