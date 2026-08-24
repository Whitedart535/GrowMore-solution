import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { capabilities } from '../../data/companyData';
import { ShieldAlert, Headphones, MapPin, BarChart3, Send, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Solutions() {
  const iconMap = {
    ShieldAlert: ShieldAlert,
    Headphones: Headphones,
    MapPin: MapPin,
    BarChart3: BarChart3,
    Send: Send,
    CheckCircle2: CheckCircle2
  };

  return (
    <section id="solutions" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Core Capabilities"
          title="Our Collection & Recovery Capabilities"
          subtitle="Comprehensive institutional solutions spanning early-stage delinquency, multi-lingual calling, field operations, and strategic debt resolution."
          centered
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || CheckCircle2;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 hover:border-[#0057A8] hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 text-[#0057A8] group-hover:bg-[#0057A8] group-hover:text-white group-hover:border-[#0057A8] transition-colors flex items-center justify-center mb-6 shadow-sm">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-extrabold text-[#0B1F33] mb-3 group-hover:text-[#0057A8] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-sm font-bold text-[#0057A8] group-hover:text-[#42A51F] transition-colors">
                  <span>Learn Operational Details</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
