
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Marketplace', href: '#' },
  { label: 'Suppliers', href: '#' },
  { label: 'Trade Services', href: '#' },
  { label: 'Logistics', href: '#' },
  { label: 'Trade Finance', href: '#' },
  { label: 'Insights', href: '#' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 z-50 w-full transition-all duration-200 border-b",
      isScrolled ? "bg-white/95 backdrop-blur-md border-gray-200 py-3 shadow-sm" : "bg-white border-transparent py-5"
    )}>
      <div className="mx-auto max-w-7xl px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href="/" className="text-xl font-bold tracking-tighter text-[#111827]">
              BAALVION<span className="text-[#1E3A8A]">.</span>
            </Link>
            
            <div className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <Link 
                  key={item.label} 
                  href={item.href} 
                  className="text-sm font-medium text-gray-500 transition-colors hover:text-[#1E3A8A]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-6 md:flex">
              <button className="text-sm font-semibold text-gray-600 hover:text-[#111827] transition-colors">
                Login
              </button>
              <Link 
                href="#" 
                className="rounded-lg bg-[#1E3A8A] px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-[#1E40AF] active:scale-95 shadow-sm"
              >
                Create Account
              </Link>
            </div>
            
            <button 
              className="lg:hidden p-2 text-gray-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 p-6 lg:hidden shadow-lg animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="text-base font-medium text-gray-900 py-2 border-b border-gray-50 last:border-0">
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <button className="w-full py-3 font-bold text-gray-900 border border-gray-200 rounded-lg">Login</button>
              <button className="w-full bg-[#1E3A8A] text-white py-3 rounded-lg font-bold shadow-sm">Create Account</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
