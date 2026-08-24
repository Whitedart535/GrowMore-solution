import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { engineSteps } from '../../data/companyData';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function RecoveryEngine() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Operational Workflow"
          title="Collection & Recovery Engine"
          subtitle="A structured 8-stage resolution pipeline driving delinquent accounts from initial data ingestion to successful payment reconciliation."
          centered
          className="mb-16"
        />

        {/* 8-Step Grid Pipeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {engineSteps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="relative bg-[#F8FAFC] border border-slate-200/90 rounded-3xl p-6 hover:border-[#0057A8] hover:bg-white hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-xl bg-[#0057A8] text-white text-xs font-extrabold flex items-center justify-center shadow-sm">
                    {item.step}
                  </span>
                  {idx < engineSteps.length - 1 && (
                    <ArrowRight className="hidden lg:block w-4 h-4 text-slate-300 group-hover:text-[#0057A8] group-hover:translate-x-1 transition-all" />
                  )}
                </div>

                <h3 className="text-lg font-extrabold text-[#0B1F33] mb-2 group-hover:text-[#0057A8] transition-colors">
                  {item.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-bold text-[#42A51F]">
                <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                <span>ACS Automated Checkpoint</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
