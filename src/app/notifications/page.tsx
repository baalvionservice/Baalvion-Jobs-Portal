
'use client';

import { SharedHero } from '@/app/components/SharedHero';
import { 
  Bell, 
  ShieldAlert, 
  CreditCard, 
  Ship, 
  Clock,
  MoreHorizontal,
  CheckCircle2,
  Trash2,
  Loader2,
  Filter,
  Check,
  ChevronRight,
  MapPin,
  Wifi,
  WifiOff
} from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { notifications as mockTypes } from '@/mocks/baalvion-api';
import axios from 'axios';

export default function NotificationsPage() {
  const [loading, setLoading] = useState(true);
  const [alerts, setAlerts] = useState<any[]>([]);
  const [filterType, setFilterType] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [isProcessing, setIsProcessing] = useState<string | null>(null);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await axios.get('/api/notifications');
        setAlerts(res.data);
      } catch (e) {
        console.error("Notification fetch failed", e);
      } finally {
        setLoading(false);
      }
    };
    fetchNotifications();

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleMarkRead = async (id: string) => {
    setIsProcessing(id);
    try {
      await axios.put(`/api/notifications/${id}/mark-read`, { status: 'Read' });
      setAlerts(prev => prev.map(a => a.id === id ? { ...a, status: 'Read' } : a));
    } catch (e) {
      console.error("Mark read failed", e);
    } finally {
      setIsProcessing(null);
    }
  };

  const handleResolveAlert = async (id: string) => {
    setIsProcessing(id);
    try {
      await axios.put(`/api/alerts/${id}/resolve`, { status: 'Resolved' });
      setAlerts(prev => prev.filter(a => a.id !== id));
    } catch (e) {
      console.error("Resolve failed", e);
    } finally {
      setIsProcessing(null);
    }
  };

  const filteredAlerts = useMemo(() => {
    return alerts.filter(alert => 
      (filterType === "All" || alert.type === filterType) &&
      (filterStatus === "All" || alert.status === filterStatus)
    );
  }, [alerts, filterType, filterStatus]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'Payment': return <CreditCard className="text-emerald-500" size={18} />;
      case 'Compliance': return <ShieldAlert className="text-rose-500" size={18} />;
      case 'Trade': return <Ship className="text-blue-500" size={18} />;
      default: return <Bell className="text-gray-400" size={18} />;
    }
  };

  return (
    <main className="bg-white min-h-screen pb-24">
      <SharedHero 
        badge="Alerts & Monitoring"
        title="Institutional Notification Stream"
        subtitle="Real-time operational alerts across global trade, finance, and compliance nodes."
      />

      <section className="py-6 bg-white border-b border-gray-100 sticky top-16 z-40 backdrop-blur-md bg-white/90">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 w-full md:w-auto">
              <div className="flex items-center gap-3">
                <Filter size={16} className="text-[#1E3A8A]" />
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Category</span>
                <select 
                  className="text-xs font-bold text-[#111827] uppercase tracking-widest border border-gray-100 rounded-xl px-4 py-3 bg-gray-50 outline-none hover:bg-white transition-all" 
                  value={filterType} 
                  onChange={(e) => setFilterType(e.target.value)}
                >
                  {mockTypes.alertTypes.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div className={isOnline ? "text-emerald-600" : "text-rose-600"}>
                 <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-current text-[10px] font-bold uppercase tracking-widest bg-white">
                    {isOnline ? <Wifi size={14} /> : <WifiOff size={14} />}
                    {isOnline ? "Node Synced" : "Offline Cache Mode"}
                 </div>
              </div>
            </div>
            <div className="flex items-center justify-between w-full md:w-auto gap-4">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                <Clock size={14} /> Node Alerts: {filteredAlerts.length}
              </span>
              <button className="text-[10px] font-bold text-[#1E3A8A] uppercase tracking-widest hover:underline flex items-center gap-2">
                <Check size={14} /> Clear Cache
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4">
            <AnimatePresence mode="popLayout">
              {loading ? (
                Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="h-24 bg-gray-50 rounded-2xl animate-pulse border border-gray-100" />
                ))
              ) : filteredAlerts.length > 0 ? (
                filteredAlerts.map((alert, i) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: i * 0.05 }}
                    key={alert.id} 
                    className={`p-6 sm:p-8 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-6 group hover:shadow-2xl transition-all cursor-pointer bg-white ${alert.status === 'Unread' ? 'border-[#1E3A8A]/20 bg-blue-50/5 shadow-sm' : 'border-gray-100'}`}
                  >
                    <div className="flex items-center gap-4 sm:gap-8">
                      <div className="h-12 w-12 sm:h-14 sm:w-14 shrink-0 rounded-xl flex items-center justify-center shadow-inner bg-gray-50 group-hover:bg-white transition-all">
                        {getIcon(alert.type)}
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h4 className={`text-sm sm:text-base tracking-tight truncate ${alert.status === 'Unread' ? 'font-bold text-[#111827]' : 'font-medium text-[#6B7280]'}`}>{alert.message}</h4>
                          {alert.status === 'Unread' && (
                            <span className="flex items-center gap-2 text-[9px] font-bold text-[#1E3A8A] uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#1E3A8A] animate-pulse" /> New Node
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                          <span className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5"><MapPin size={10} /> {alert.geolocation || 'Global Mesh'}</span>
                          <span className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5"><Clock size={10} /> {alert.date}</span>
                          <span className={`text-[8px] sm:text-[9px] font-bold uppercase px-2 py-0.5 rounded border ${alert.status === 'Unread' ? 'bg-amber-50 text-amber-700 border-amber-100' : 'bg-gray-50 text-gray-500 border-gray-100'}`}>
                            {alert.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-end gap-4 border-t sm:border-t-0 pt-4 sm:pt-0">
                      {alert.status === 'Unread' ? (
                        <button 
                          onClick={(e) => { e.stopPropagation(); handleMarkRead(alert.id); }}
                          disabled={isProcessing === alert.id}
                          className="flex-1 sm:flex-none px-6 py-3 sm:py-2 bg-[#1E3A8A] text-white text-[9px] font-bold uppercase rounded-lg hover:bg-[#1E40AF] transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/10"
                        >
                          {isProcessing === alert.id ? <Loader2 className="animate-spin" size={12} /> : 'Authorize Read'}
                        </button>
                      ) : (
                        <button 
                          onClick={(e) => { e.stopPropagation(); handleResolveAlert(alert.id); }}
                          disabled={isProcessing === alert.id}
                          className="p-3 bg-gray-50 sm:bg-transparent rounded-lg text-gray-300 hover:text-rose-500 transition-colors"
                        >
                          {isProcessing === alert.id ? <Loader2 className="animate-spin" size={16} /> : <Trash2 size={18} />}
                        </button>
                      )}
                      <button className="p-3 bg-gray-50 sm:bg-transparent rounded-lg text-gray-300 group-hover:text-[#1E3A8A] transition-colors">
                        <MoreHorizontal size={20} />
                      </button>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="py-32 text-center border-2 border-dashed border-gray-100 rounded-3xl">
                   <Bell className="mx-auto text-gray-200 mb-6" size={48} />
                   <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">No active institutional alerts found in local cache</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  );
}
