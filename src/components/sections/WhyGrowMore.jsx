import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { differentiators } from '../../data/companyData';
import { Users, Cpu, PhoneCall, TrendingUp, Zap, ShieldCheck } from 'lucide-react';

export default function WhyGrowMore() {
  const iconMap = {
    Users: Users,
    Cpu: Cpu,
    PhoneCall: PhoneCall,
    TrendingUp: TrendingUp,
    Zap: Zap,
    ShieldCheck: ShieldCheck
  };

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Why Grow More Solution"
          title="Our Differentiators"
          subtitle="A collection & asset resolution partner driven by proprietary technology, deep field presence, and verified operational intelligence."
          centered
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((diff, idx) => {
            const IconComponent = iconMap[diff.icon] || ShieldCheck;
            const isHighlight = diff.id === 'recovery-rates' || diff.id === 'tech-led';

            return (
              <motion.div
                key={diff.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative p-8 rounded-3xl transition-all duration-300 ${
                  isHighlight
                    ? 'bg-white border-2 border-[#0057A8] shadow-xl shadow-blue-900/5 hover:-translate-y-1.5'
                    : 'bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 hover:-translate-y-1.5'
                }`}
              >
                {/* Top Icon Box */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
                  isHighlight
                    ? 'bg-[#0057A8] text-white shadow-md shadow-[#0057A8]/30'
                    : 'bg-slate-100 text-[#0057A8] group-hover:bg-emerald-50 group-hover:text-[#16A34A]'
                }`}>
                  <IconComponent className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-extrabold text-[#0B1F33] mb-3 group-hover:text-[#0057A8] transition-colors">
                  {diff.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                  {diff.description}
                </p>

                {diff.statNote && (
                  <div className="pt-3 border-t border-slate-100">
                    <span className="inline-block text-xs font-extrabold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200/80">
                      {diff.statNote}
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
