import React, { useState } from 'react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { companyInfo } from '../../data/companyData';
import { Mail, Phone, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    requirement: 'Debt Recovery & Asset Resolution',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Get In Touch"
          title="Let's Start a Conversation"
          subtitle="Reach out to discuss institutional portfolio resolution, tele-calling desks, or field collection partnerships."
          centered
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Official Contact Info */}
          <div className="lg:col-span-5 bg-[#0B1F33] text-white p-8 sm:p-10 rounded-3xl space-y-8 shadow-2xl relative overflow-hidden">
            
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#0057A8]/30 rounded-full blur-2xl pointer-events-none" />

            <div>
              <h3 className="text-2xl font-extrabold text-white mb-2">Corporate Information</h3>
              <p className="text-sm text-slate-300">
                Official contact desk for Grow More Solution, owned by {companyInfo.owner}.
              </p>
            </div>

            <div className="space-y-6 pt-2">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0057A8] text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase">Headquarters</div>
                  <div className="text-base font-extrabold text-white">{companyInfo.location}</div>
                  <div className="text-xs text-slate-300">Karnataka, India</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0057A8] text-white flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase">Email Support</div>
                  <a href={`mailto:${companyInfo.email}`} className="text-base font-extrabold text-white hover:text-[#60A5FA] transition-colors">
                    {companyInfo.email}
                  </a>
                  <div className="text-xs text-slate-300">Response within 24 business hours</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#42A51F] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase">Direct Helpline</div>
                  <a href={`tel:${companyInfo.phone}`} className="text-base font-extrabold text-white hover:text-[#55C42B] transition-colors">
                    {companyInfo.phone}
                  </a>
                  <div className="text-xs text-slate-300">Mon - Sat: 9:00 AM - 7:00 PM IST</div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-[#42A51F]" />
              <span>Strict Confidentiality & Non-Disclosure Compliant</span>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#F8FAFC] p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-[#EAF5E5] text-[#42A51F] rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#0B1F33]">Enquiry Received!</h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm">
                  Thank you for reaching out to Grow More Solution. Our team will review your requirement and get back to you shortly.
                </p>
                <Button variant="outline" size="sm" onClick={() => setSubmitted(false)} icon={false}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0057A8]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Company / Institution *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. HDFC Bank / NBFC"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0057A8]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@institution.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0057A8]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0057A8]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Service Requirement</label>
                  <select
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0057A8]"
                  >
                    <option value="Debt Recovery & Asset Resolution">Debt Recovery & Asset Resolution</option>
                    <option value="Multi-lingual Tele-calling Desk">Multi-lingual Tele-calling Desk</option>
                    <option value="Field Collection Operations">Field Collection Operations</option>
                    <option value="ACS System & Skip Tracing">ACS System & Skip Tracing</option>
                    <option value="Portfolio Audit & Advisory">Portfolio Audit & Advisory</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Portfolio Details / Message</label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your loan portfolio type or specific operational requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0057A8]"
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Submit Enquiry
                </Button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
