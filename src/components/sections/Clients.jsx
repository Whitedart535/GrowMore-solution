import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { clients } from '../../data/companyData';
import { Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Clients() {
  return (
    <section id="clients" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Institutional Partnerships"
          title="Trusted By Industry Leaders"
          subtitle="Delivering technology-driven debt resolution and portfolio management for top financial institutions and digital fintech platforms."
          centered
          className="mb-16"
        />

        {/* 3 Client Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {clients.map((client, idx) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border-2 border-slate-200 rounded-3xl p-8 text-center hover:border-[#0057A8] hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-[#0057A8] group-hover:text-white transition-colors">
                  <Building2 className="w-8 h-8 text-[#0057A8] group-hover:text-white" />
                </div>

                <h3 className="text-2xl font-extrabold text-[#0B1F33] mb-2">{client.name}</h3>
                <p className="text-sm font-semibold text-slate-500 mb-4">{client.subtitle}</p>

                <div className="inline-block px-3.5 py-1 rounded-full bg-[#EAF5E5] text-[#42A51F] text-xs font-bold border border-[#42A51F]/30">
                  {client.tag}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-center gap-1.5 text-xs text-slate-500 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#42A51F]" />
                <span>Verified Asset Resolution Partner</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
