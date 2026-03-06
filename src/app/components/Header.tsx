'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Globe, ShieldCheck, Wifi, WifiOff, Languages, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navigation } from '@/mocks/baalvion-api';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isOnline, setIsOnline] = useState(true);
  const [activeNode, setActiveNode] = useState('Global (EN)');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav 
      role="banner"
      aria-label="Institutional Navigation Mesh"
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 border-b",
        isScrolled ? "bg-white/95 backdrop-blur-md border-gray-200 py-3 shadow-sm" : "bg-white border-transparent py-5"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-10">
            <Link href="/" className="text-xl font-bold tracking-tighter text-[#111827] flex items-center gap-1" aria-label="Baalvion Home - Sovereign Trade Operating System">
              BAALVION<span className="text-[#1E3A8A]">.</span>
            </Link>
            
            <div 
              aria-label={isOnline ? "Institutional trade node online" : "Institutional trade node offline"}
              role="status"
              className={cn(
                "hidden sm:flex items-center gap-2 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border transition-colors",
                isOnline ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-rose-50 text-rose-600 border-rose-100"
              )}
            >
              {isOnline ? <Wifi size={10} aria-hidden="true" /> : <WifiOff size={10} aria-hidden="true" />}
              {isOnline ? "Node Online" : "Node Offline"}
            </div>

            <div className="hidden items-center gap-6 xl:flex" role="menubar">
              {navigation.map((item) => (
                <div 
                  key={item.name} 
                  className="relative group"
                  onMouseEnter={() => item.sub.length > 0 && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  role="none"
                >
                  <Link 
                    href={item.href} 
                    role="menuitem"
                    aria-haspopup={item.sub.length > 0 ? "true" : "false"}
                    aria-expanded={activeDropdown === item.name}
                    className={cn(
                      "flex items-center gap-1 text-xs font-bold uppercase tracking-widest transition-colors py-2",
                      pathname === item.href || activeDropdown === item.name ? "text-[#1E3A8A]" : "text-gray-400 hover:text-[#1E3A8A]"
                    )}
                  >
                    {item.name}
                    {item.sub.length > 0 && (
                      <ChevronDown 
                        size={12} 
                        className={cn("transition-transform duration-200", activeDropdown === item.name && "rotate-180")} 
                        aria-hidden="true"
                      />
                    )}
                  </Link>

                  <AnimatePresence>
                    {item.sub.length > 0 && activeDropdown === item.name && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-64 rounded-xl border border-gray-100 bg-white p-2 shadow-2xl"
                        role="menu"
                        aria-label={`${item.name} institutional sub-menu`}
                      >
                        {item.sub.map((subItem) => (
                          <Link 
                            key={subItem} 
                            href={`${item.href}#${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                            role="menuitem"
                            className="block rounded-lg px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:bg-gray-50 hover:text-[#1E3A8A] transition-colors"
                          >
                            {subItem}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden items-center gap-6 md:flex">
              <div className="relative group">
                <button 
                  className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-[#111827] uppercase tracking-widest transition-colors py-2"
                  aria-label="Select global regional node or institutional language"
                  aria-haspopup="listbox"
                  aria-expanded={activeDropdown === 'language'}
                >
                  <Languages size={14} /> {activeNode}
                </button>
                <div 
                  className="absolute right-0 top-full mt-2 w-48 rounded-xl border border-gray-100 bg-white p-2 shadow-2xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all" 
                  role="listbox" 
                  aria-label="Regional Node Selector"
                >
                   {['Global (EN)', 'USA (EN)', 'EU (EN/DE)', 'Asia (EN/ZH)'].map(node => (
                     <button 
                      key={node} 
                      onClick={() => setActiveNode(node)}
                      role="option"
                      aria-selected={activeNode === node}
                      className="w-full text-left px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:bg-gray-50 hover:text-[#1E3A8A] rounded-lg transition-colors"
                     >
                       {node}
                     </button>
                   ))}
                </div>
              </div>
              <Link href="/admin" className="text-xs font-bold text-gray-400 hover:text-[#111827] uppercase tracking-widest transition-colors py-2" aria-label="Access Institutional Admin Panel">
                Admin
              </Link>
              <Link 
                href="/request-access" 
                className="rounded-lg bg-[#111827] px-6 py-3 text-xs font-bold text-white uppercase tracking-widest transition-all hover:bg-[#1E3A8A] shadow-xl shadow-gray-200 active:scale-95"
              >
                Request Access
              </Link>
            </div>
            
            <button 
              className="xl:hidden p-2 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close institutional main menu" : "Open institutional main menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-mesh"
            >
              {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            id="mobile-navigation-mesh"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white border-b border-gray-200 px-6 py-10 xl:hidden shadow-2xl overflow-y-auto max-h-[85vh]"
          >
            <div className="flex flex-col gap-8">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Connectivity Nodes</span>
                <div 
                  role="status"
                  aria-label={isOnline ? "Node Online" : "Offline Mode"}
                  className={cn(
                    "flex items-center gap-2 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border",
                    isOnline ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-rose-50 text-rose-600 border-rose-100"
                  )}
                >
                  {isOnline ? <Wifi size={10} /> : <WifiOff size={10} />}
                  {isOnline ? "Node Online" : "Offline Cache Mode"}
                </div>
              </div>
              <div role="menubar" className="flex flex-col gap-8">
                {navigation.map((item) => (
                  <div key={item.name} className="flex flex-col gap-4" role="none">
                    <Link 
                      href={item.href} 
                      role="menuitem"
                      className={cn(
                        "text-xl font-bold flex items-center justify-between",
                        pathname === item.href ? "text-[#1E3A8A]" : "text-[#111827]"
                      )}
                    >
                      {item.name}
                      <ChevronRight size={20} />
                    </Link>
                    {item.sub.length > 0 && (
                      <div className="grid grid-cols-2 gap-x-4 gap-y-3 pl-4 border-l-2 border-gray-50" role="menu">
                        {item.sub.map((sub) => (
                          <Link 
                            key={sub} 
                            href={`${item.href}#${sub.toLowerCase().replace(/\s+/g, '-')}`}
                            role="menuitem"
                            className="text-[10px] font-bold uppercase text-gray-400 tracking-widest hover:text-[#1E3A8A]"
                          >
                            {sub}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4 pt-10 border-t border-gray-50">
                <Link 
                  href="/admin"
                  className="w-full py-5 text-xs font-bold text-center text-[#111827] border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors uppercase tracking-widest"
                >
                  Institutional Login
                </Link>
                <Link 
                  href="/request-access" 
                  className="w-full bg-[#111827] text-white py-5 rounded-xl text-center text-xs font-bold uppercase tracking-widest shadow-xl shadow-gray-200"
                >
                  Request Access
                </Link>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <Globe size={16} aria-hidden="true" />
                <ShieldCheck size={16} aria-hidden="true" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Verified Sovereign Portal</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
