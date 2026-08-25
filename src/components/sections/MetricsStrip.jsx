import React from 'react';
import { motion } from 'framer-motion';
import { companyInfo } from '../../data/companyData';
import AnimatedCounter from '../common/AnimatedCounter';
import { Info, TrendingUp, ShieldCheck, MapPin } from 'lucide-react';

export default function MetricsStrip() {
  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-900/5 p-6 sm:p-8 lg:p-10">
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {companyInfo.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`flex flex-col justify-between group ${idx !== 0 ? 'pt-4 md:pt-0 md:pl-6' : ''}`}
            >
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F33] tracking-tight group-hover:text-[#0057A8] transition-colors">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </span>
                </div>

                <div className="mt-2 text-sm sm:text-base font-bold text-slate-800 leading-snug">
                  {stat.label}
                </div>
              </div>

              {/* Progress bar visual indicator */}
              <div className="mt-4 space-y-2">
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.1 }}
                    className={`h-full rounded-full ${stat.disclaimer ? 'bg-amber-500' : 'bg-[#16A34A]'}`}
                  />
                </div>

                {stat.disclaimer ? (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60">
                    <Info className="w-3 h-3 text-amber-600 shrink-0" />
                    {stat.disclaimer}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-md">
                    <TrendingUp className="w-3 h-3 text-[#16A34A] shrink-0" />
                    {stat.highlight}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
