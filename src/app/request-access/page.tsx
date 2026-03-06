
'use client';

import { SharedHero } from '@/app/components/SharedHero';
import { ShieldCheck, Mail, Globe, Send, Loader2, CheckCircle2, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

export default function RequestAccessPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState('');
  const [orgName, setOrgName] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!orgName.trim()) newErrors.orgName = "Organization name is required";
    if (!email.trim()) {
      newErrors.email = "Work email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid work email";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setErrors({});
    
    try {
      const response = await axios.post('/api/request-access', { 
        email, 
        orgName,
        role: 'Sourcing Director'
      });
      
      setMessage(response.data.message);
      setSuccess(true);
    } catch (err: any) {
      setErrors({ form: "Institutional registration failed. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSuccess(false);
    setEmail('');
    setOrgName('');
    setErrors({});
  };

  return (
    <main className="bg-white min-h-screen">
      <SharedHero 
        badge="Enterprise Onboarding"
        title="Institutional Access Request"
        subtitle="Apply for tier-1 access to the Baalvion global trade infrastructure. Verified organization credentials required."
      />
      
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-bold text-[#111827] mb-8">Onboarding Requirements</h2>
                <p className="text-lg text-[#6B7280] leading-relaxed mb-10">
                  Every entity must undergo a rigorous institutional verification process to ensure the security and integrity of our global trade network.
                </p>
              </div>

              <div className="space-y-10">
                {[
                  { icon: ShieldCheck, title: "Institutional Verification", desc: "Rigorous KYB/KYC checks to validate corporate identity and standing." },
                  { icon: Globe, title: "Global Compliance", desc: "Mandatory screening against international trade sanctions and regulations." },
                  { icon: Mail, title: "Domain Verification", desc: "Platform access is restricted to verified enterprise email domains." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="h-12 w-12 shrink-0 rounded-xl bg-gray-50 flex items-center justify-center text-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white transition-all shadow-sm">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#111827] group-hover:text-[#1E3A8A] transition-colors">{item.title}</h4>
                      <p className="text-sm text-[#6B7280] mt-2">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-gray-100 mt-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[10px] font-bold text-[#1E3A8A] uppercase tracking-widest">Verification System Active</span>
                </div>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  Average institutional approval time: <span className="font-bold text-[#111827]">24-48 Hours</span>. Detailed documentation may be requested following registration.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl border border-gray-100 bg-white shadow-2xl relative overflow-hidden h-fit"
            >
              <AnimatePresence mode="wait">
                {success ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="h-20 w-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-8 shadow-inner">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#111827] mb-4">Application Registered</h3>
                    <p className="text-lg text-[#6B7280] max-w-sm mx-auto mb-10">{message}</p>
                    <div className="flex flex-col gap-4 w-full">
                       <button 
                        onClick={() => window.location.href = '/'}
                        className="w-full py-4 bg-[#111827] text-white text-xs font-bold uppercase tracking-[0.2em] rounded-xl hover:bg-[#1E3A8A] transition-all active:scale-95 shadow-lg"
                       >
                         Return to Dashboard
                       </button>
                       <button 
                        onClick={resetForm} 
                        className="text-[10px] font-bold text-[#1E3A8A] uppercase tracking-widest hover:underline"
                       >
                        Register another entity
                       </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6" 
                    onSubmit={handleSubmit}
                  >
                    {errors.form && <div className="p-4 bg-red-50 text-red-600 text-xs font-bold rounded-xl">{errors.form}</div>}
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-[#111827] uppercase tracking-[0.2em]">Organization Name</label>
                      <input 
                        type="text" 
                        className={`w-full px-4 py-4 border ${errors.orgName ? 'border-red-300' : 'border-gray-100'} bg-[#F8FAFC] rounded-xl focus:ring-2 focus:ring-[#1E3A8A] outline-none transition-all text-sm font-medium`} 
                        placeholder="Global Trade Corporation" 
                        value={orgName}
                        onChange={(e) => setOrgName(e.target.value)}
                      />
                      {errors.orgName && <p className="text-[9px] font-bold text-red-500 uppercase tracking-widest">{errors.orgName}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-[#111827] uppercase tracking-[0.2em]">Work Email</label>
                      <input 
                        type="email" 
                        className={`w-full px-4 py-4 border ${errors.email ? 'border-red-300' : 'border-gray-100'} bg-[#F8FAFC] rounded-xl focus:ring-2 focus:ring-[#1E3A8A] outline-none transition-all text-sm font-medium`} 
                        placeholder="legal@enterprise.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {errors.email && <p className="text-[9px] font-bold text-red-500 uppercase tracking-widest">{errors.email}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-[#111827] uppercase tracking-[0.2em]">Enterprise Role</label>
                      <select className="w-full px-4 py-4 border border-gray-100 bg-[#F8FAFC] rounded-xl focus:ring-2 focus:ring-[#1E3A8A] outline-none text-sm font-bold text-[#111827] appearance-none cursor-pointer">
                         <option>Director of Sourcing</option>
                         <option>Head of Logistics</option>
                         <option>Trade Finance Officer</option>
                         <option>Compliance Manager</option>
                      </select>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="flex gap-3">
                         <ShieldCheck className="text-[#1E3A8A] shrink-0" size={16} />
                         <p className="text-[10px] text-gray-400 font-medium leading-relaxed">
                           By submitting this application, you agree to Baalvion's institutional data verification protocols.
                         </p>
                      </div>
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-16 bg-[#111827] text-white text-xs font-bold uppercase tracking-[0.2em] rounded-xl flex items-center justify-center gap-3 hover:bg-[#1E3A8A] transition-all disabled:opacity-50 shadow-xl shadow-gray-200 active:scale-95"
                    >
                      {isSubmitting ? (
                        <>Processing... <Loader2 className="animate-spin" size={18} /></>
                      ) : (
                        <>Apply for Institutional Access <ArrowRight size={18} /></>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
