'use client';

import { SharedHero } from '@/app/components/SharedHero';
import { 
  Search, 
  Globe, 
  Star, 
  ShieldCheck, 
  Loader2,
  Building2,
  Package,
  Zap,
  ChevronDown,
  BrainCircuit,
  Target,
  ShoppingCart,
  Truck,
  Layers,
  ExternalLink,
  CheckCircle2,
  FileText,
  RefreshCw,
  AlertTriangle,
  Network,
  Sparkles,
  Link2,
  TrendingUp,
  Clock,
  History,
  Scale
} from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

export default function MarketplacePage() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'assets' | 'vendors' | 'analytics' | 'clusters' | 'sourcing'>('assets');
  const [source, setSource] = useState<'baalvion' | 'Alibaba' | 'Amazon' | 'ariba'>('baalvion');
  const [search, setSearch] = useState("");
  const [data, setData] = useState<any>(null);
  const [isSyncing, setIsSyncing] = useState(false);
  const [clusters, setClusters] = useState<any[]>([]);
  const [recommendations, setRecommendations] = useState<any[]>([]);

  const fetchMarketplace = async () => {
    setLoading(true);
    try {
      const [pRes, vRes, clRes, rRes] = await Promise.all([
        axios.get(`/api/marketplace/products?marketplace=${source === 'baalvion' ? '' : source}`),
        axios.get('/api/marketplace/vendors'),
        axios.get('/api/marketplace/risk-clusters'),
        axios.get('/api/marketplace/recommendations')
      ]);
      
      setData({ products: pRes.data, vendors: vRes.data });
      setClusters(clRes.data);
      setRecommendations(rRes.data);
    } catch (e) {
      console.error("Marketplace fetch error", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMarketplace();
  }, [source]);

  const handleSync = async () => {
    setIsSyncing(true);
    try {
      await axios.post('/api/marketplace/sync', { marketplace: source });
      await fetchMarketplace();
    } finally {
      setIsSyncing(false);
    }
  };

  const filteredProducts = useMemo(() => {
    if (!data) return [];
    return [...data.products].filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || 
                           (p.vendor && p.vendor.toLowerCase().includes(search.toLowerCase()));
      return matchesSearch;
    });
  }, [search, data]);

  const getRiskStyle = (risk: string) => {
    switch (risk) {
      case 'Low': return 'bg-emerald-50 text-emerald-700 border-emerald-100';
      case 'Medium': return 'bg-amber-50 text-amber-700 border-amber-100';
      case 'High': return 'bg-rose-50 text-rose-700 border-rose-100';
      default: return 'bg-gray-50 text-gray-700 border-gray-100';
    }
  };

  return (
    <main className="bg-white min-h-screen pb-24">
      <SharedHero 
        badge="Global B2B Marketplace"
        title="Verified Sourcing Network"
        subtitle="Access thousands of verified suppliers and manufacturers. Leverage AI-driven vendor scoring based on compliance, delivery history, and financial stability."
      />
      
      <section className="py-8 bg-white border-b border-gray-100 sticky top-16 z-40 backdrop-blur-md bg-white/90">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex items-center gap-4 w-full md:w-auto">
               <div className="relative">
                  <select 
                    className="pl-4 pr-10 py-4 border border-gray-200 rounded-xl bg-white text-xs font-bold text-[#1E3A8A] appearance-none uppercase tracking-widest cursor-pointer hover:border-[#1E3A8A] transition-all outline-none shadow-sm"
                    value={source}
                    onChange={(e) => setSource(e.target.value as any)}
                  >
                    <option value="baalvion">Verified Suppliers</option>
                    <option value="Alibaba">Alibaba Network</option>
                    <option value="Amazon">Amazon Business</option>
                    <option value="ariba">SAP Ariba Mesh</option>
                  </select>
                  <Layers className="absolute right-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none" size={14} />
               </div>
               <button 
                onClick={handleSync}
                disabled={isSyncing}
                aria-label="Synchronize Data"
                className="p-4 bg-gray-50 border border-gray-100 rounded-xl hover:bg-white transition-all text-[#1E3A8A] disabled:opacity-50"
               >
                 <RefreshCw size={18} className={isSyncing ? "animate-spin" : ""} />
               </button>
            </div>

            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder={`Search ${source} verified assets...`} 
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1E3A8A] outline-none text-sm font-medium transition-all shadow-sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="flex gap-8 mt-8 border-b border-gray-100 overflow-x-auto no-scrollbar">
             {[
               { id: 'assets', label: 'Asset Catalog', icon: Package },
               { id: 'vendors', label: 'Vendor Ratings', icon: Building2 },
               { id: 'analytics', label: 'Procurement Insights', icon: TrendingUp },
               { id: 'clusters', label: 'Network Clusters', icon: Network }
             ].map((tab) => (
               <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`pb-4 text-xs font-bold uppercase tracking-[0.2em] transition-all relative flex items-center gap-2 shrink-0 ${activeTab === tab.id ? 'text-[#1E3A8A]' : 'text-gray-400 hover:text-gray-600'}`}
               >
                 <tab.icon size={14} /> {tab.label}
                 {activeTab === tab.id && <motion.div layoutId="market-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1E3A8A]" />}
               </button>
             ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-32 text-gray-400 gap-4">
                <Loader2 className="animate-spin" size={48} />
                <p className="text-sm font-bold uppercase tracking-widest">Scanning Marketplace Nodes...</p>
              </div>
            ) : activeTab === 'assets' ? (
              <motion.div key="assets" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((p) => (
                  <div key={p.id} className="p-10 rounded-3xl border border-gray-100 bg-white hover:border-[#1E3A8A]/30 hover:shadow-2xl transition-all group corporate-card flex flex-col justify-between">
                     <div>
                        <div className="flex justify-between items-start mb-6">
                           <span className="text-[9px] font-bold text-[#1E3A8A] uppercase tracking-[0.2em] bg-blue-50 px-3 py-1 rounded border border-blue-100">
                             {p.category}
                           </span>
                           <p className="text-xl font-bold text-[#111827]">${p.priceUSD.toLocaleString()}</p>
                        </div>
                        <h4 className="text-2xl font-bold text-[#111827] leading-tight mb-6">{p.name}</h4>
                        <div className="flex items-center gap-3 text-xs text-gray-500 font-bold uppercase tracking-widest"><Building2 size={14} /> {p.vendor}</div>
                     </div>
                     <button className="w-full mt-10 py-5 bg-[#111827] text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-xl hover:bg-[#1E3A8A] transition-all flex items-center justify-center gap-3">
                        Request Institutional RFQ <ShoppingCart size={16} />
                     </button>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div key="vendors" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
                <div className="overflow-x-auto rounded-3xl border border-gray-100 bg-white shadow-2xl">
                  <table className="w-full text-left">
                    <thead className="bg-[#F8FAFC] border-b border-gray-100">
                       <tr>{['Verified Entity', 'Status', 'AI Score', 'Institutional Rating'].map(h => <th key={h} className="px-8 py-5 text-[10px] font-bold text-gray-500 uppercase tracking-widest">{h}</th>)}</tr>
                    </thead>
                    <tbody>
                       {data?.vendors.map((v: any) => (
                         <tr key={v.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                            <td className="px-8 py-6">
                               <p className="font-bold text-[#111827]">{v.name}</p>
                               <p className="text-[9px] text-gray-400 font-bold uppercase">{v.location}</p>
                            </td>
                            <td className="px-8 py-6">
                               <span className={`px-4 py-1.5 rounded-full text-[9px] font-bold uppercase border ${getRiskStyle(v.risk_level)}`}>{v.risk_level} Risk Profile</span>
                            </td>
                            <td className="px-8 py-6 font-bold text-[#111827]">{v.score}%</td>
                            <td className="px-8 py-6">
                               <div className="flex items-center gap-1">
                                  <Star size={12} className="fill-yellow-400 text-yellow-400" />
                                  <span className="text-sm font-bold text-[#111827]">{v.rating}</span>
                               </div>
                            </td>
                         </tr>
                       ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
