
'use client';

import Link from 'next/link';
import { Twitter, Linkedin, Github, Mail, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tighter text-[#111827]">
              BAALVION<span className="text-[#1E3A8A]">.</span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-gray-500">
              The Global Operating System for Trade. Connecting commerce through intelligent digital infrastructure in 198+ countries.
            </p>
            <div className="mt-8 flex gap-3">
              {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                <Link key={i} href="#" className="h-10 w-10 rounded-lg border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#1E3A8A] hover:border-[#1E3A8A] transition-all">
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-[#1E3A8A] transition-colors">About Baalvion</Link></li>
              <li><Link href="#" className="hover:text-[#1E3A8A] transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-[#1E3A8A] transition-colors">Press</Link></li>
              <li><Link href="#" className="hover:text-[#1E3A8A] transition-colors">Global Presence</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-[#1E3A8A] transition-colors">Marketplace</Link></li>
              <li><Link href="#" className="hover:text-[#1E3A8A] transition-colors">Trade Services</Link></li>
              <li><Link href="#" className="hover:text-[#1E3A8A] transition-colors">Logistics</Link></li>
              <li><Link href="#" className="hover:text-[#1E3A8A] transition-colors">Finance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-[#1E3A8A] transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-[#1E3A8A] transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-[#1E3A8A] transition-colors">Compliance</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-24 pt-10 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">
            © {new Date().getFullYear()} Baalvion Global Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
            <Globe size={14} className="text-[#1E3A8A]" />
            Serving 198+ Nations
          </div>
        </div>
      </div>
    </footer>
  );
}
