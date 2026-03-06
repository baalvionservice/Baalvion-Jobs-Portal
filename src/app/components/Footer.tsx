
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Globe, ShieldCheck } from 'lucide-react';

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer 
      role="contentinfo"
      aria-label="Institutional Footer Hub"
      className="bg-white border-t border-gray-100 pt-24 pb-12"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-[#111827]" aria-label="Baalvion Home - Sovereign Trade OS">
              BAALVION<span className="text-[#1E3A8A]">.</span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#6B7280]">
              Baalvion Industries Pvt. Ltd. <br />
              Founded in 2025. Pioneering next-generation global B2B trade technology with AI, blockchain, and institutional cloud solutions.
            </p>
            <div className="mt-8 flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
              <Globe size={14} className="text-[#1E3A8A]" aria-hidden="true" />
              Serving 198+ Sovereign Nations
            </div>
          </div>
          
          <nav className="space-y-6" aria-label="Platform Modules">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#111827]">Platform</h4>
            <ul className="space-y-4 text-sm text-[#6B7280]">
              <li><Link href="/platform" className="hover:text-[#1E3A8A] transition-colors">Overview</Link></li>
              <li><Link href="/marketplace" className="hover:text-[#1E3A8A] transition-colors">Marketplace</Link></li>
              <li><Link href="/trade-intelligence" className="hover:text-[#1E3A8A] transition-colors">Intelligence</Link></li>
              <li><Link href="/workflows" className="hover:text-[#1E3A8A] transition-colors">Workflows</Link></li>
              <li><Link href="/scalability" className="hover:text-[#1E3A8A] transition-colors">Scalability</Link></li>
            </ul>
          </nav>

          <nav className="space-y-6" aria-label="Infrastructure Modules">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#111827]">Infrastructure</h4>
            <ul className="space-y-4 text-sm text-[#6B7280]">
              <li><Link href="/infrastructure" className="hover:text-[#1E3A8A] transition-colors">Security Core</Link></li>
              <li><Link href="/infrastructure#enterprise-api" className="hover:text-[#1E3A8A] transition-colors">Enterprise API</Link></li>
              <li><Link href="/partners" className="hover:text-[#1E3A8A] transition-colors">Integration Hub</Link></li>
              <li><Link href="/audit" className="hover:text-[#1E3A8A] transition-colors">System Verification</Link></li>
            </ul>
          </nav>

          <nav className="space-y-6" aria-label="Corporate Nodes">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#111827]">Company</h4>
            <ul className="space-y-4 text-sm text-[#6B7280]">
              <li><Link href="/company" className="hover:text-[#1E3A8A] transition-colors">About Us</Link></li>
              <li><Link href="/company#leadership" className="hover:text-[#1E3A8A] transition-colors">Leadership</Link></li>
              <li><Link href="/company#institutional-careers" className="hover:text-[#1E3A8A] transition-colors">Institutional Careers</Link></li>
              <li><Link href="/partners" className="hover:text-[#1E3A8A] transition-colors">Global Partners</Link></li>
            </ul>
          </nav>

          <nav className="space-y-6" aria-label="Contact & Compliance">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#111827]">Connect</h4>
            <ul className="space-y-4 text-sm text-[#6B7280]">
              <li><Link href="/contact" className="hover:text-[#1E3A8A] transition-colors">Contact Support</Link></li>
              <li><Link href="/request-access" className="hover:text-[#1E3A8A] transition-colors">Request Access</Link></li>
              <li><Link href="/compliance" className="hover:text-[#1E3A8A] transition-colors">Trade Compliance</Link></li>
              <li><Link href="/trade-finance" className="hover:text-[#1E3A8A] transition-colors">Trade Finance</Link></li>
            </ul>
          </nav>
        </div>
        
        <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            © {year || '...'} Baalvion Industries Private Limited. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <Link href="/contact#institutional-terms" className="hover:text-[#1E3A8A] transition-colors">Institutional Terms</Link>
            <Link href="/contact#privacy-data-mesh" className="hover:text-[#1E3A8A] transition-colors">Privacy & Data Mesh</Link>
            <div className="flex items-center gap-2" aria-label="SOC2 Type II Verified">
              <ShieldCheck size={12} className="text-[#1E3A8A]" aria-hidden="true" /> 
              <span>SOC2 Type II Verified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
