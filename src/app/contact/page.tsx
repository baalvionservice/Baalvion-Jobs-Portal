'use client';

import { SharedHero } from '@/app/components/SharedHero';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, Globe, Activity } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    inquiry: 'Enterprise Platform Access', 
    details: '' 
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await axios.post('/api/contact', formData);
      setMessage(res.data.message);
      setSuccess(true);
    } catch (err: any) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white min-h-screen">
      <SharedHero 
        badge="GET IN TOUCH"
        title="Global Trade Solutions"
        subtitle="Expand your global trade operations with BAALVION. Request access, schedule a demo, or connect with our team for enterprise-grade solutions."
      />
      
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-[#111827] mb-6">Connect with BAALVION Support</h2>
                <p className="text-lg text-[#6B7280] leading-relaxed">
                  Our distributed institutional teams are available 24/7 to facilitate cross-border trade operations and sovereign integration queries.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { icon: Mail, label: "Institutional Inquiries", val: "support@baalvion.node" },
                  { icon: Globe, label: "Global Node Access", val: "node-01.baalvion.mesh" },
                  { icon: Activity, label: "System Status", val: "99.998% Uptime" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="h-12 w-12 rounded-xl bg-gray-50 flex items-center justify-center text-[#1E3A8A] shadow-sm">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="text-base font-bold text-[#111827]">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="p-10 rounded-[40px] border border-gray-100 bg-white shadow-2xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                {success ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                    <div className="h-20 w-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-8 mx-auto shadow-inner">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#111827] mb-4">Request Registered</h3>
                    <p className="text-[#6B7280] mb-10">{message}</p>
                    <button onClick={() => setSuccess(false)} className="text-xs font-bold text-[#1E3A8A] uppercase tracking-widest hover:underline">Register Another Inquiry</button>
                  </motion.div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-[#111827] uppercase tracking-widest">Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-4 border border-gray-100 bg-[#F8FAFC] rounded-xl focus:ring-2 focus:ring-[#1E3A8A] outline-none transition-all text-sm font-medium" 
                        placeholder="Institutional Contact" 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-[#111827] uppercase tracking-widest">Enterprise Email</label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-4 py-4 border border-gray-100 bg-[#F8FAFC] rounded-xl focus:ring-2 focus:ring-[#1E3A8A] outline-none transition-all text-sm font-medium" 
                        placeholder="compliance@enterprise.com" 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-[#111827] uppercase tracking-widest">Detailed Inquiry</label>
                      <textarea 
                        required
                        className="w-full px-4 py-4 border border-gray-100 bg-[#F8FAFC] rounded-xl focus:ring-2 focus:ring-[#1E3A8A] outline-none transition-all h-32 text-sm font-medium resize-none" 
                        placeholder="Organizational requirements..."
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-16 bg-[#111827] text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-xl flex items-center justify-center gap-3 hover:bg-[#1E3A8A] transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : <>Submit Request Access <Send size={18} /></>}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
