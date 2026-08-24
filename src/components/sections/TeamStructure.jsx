import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { teamStructure } from '../../data/companyData';
import { Users, UserCheck, PhoneCall, ShieldCheck, Briefcase, Cpu, ChevronRight } from 'lucide-react';

export default function TeamStructure() {
  const [activeDept, setActiveDept] = useState(0);

  return (
    <section id="team" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Human Operations"
          title="People Behind the Process"
          subtitle="Structured, specialized operational teams driving seamless execution between central technology, tele-calling desks, and field visits."
          centered
          className="mb-16"
        />

        {/* 4 Interactive Department Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamStructure.departments.map((dept, idx) => {
            const isSelected = activeDept === idx;

            return (
              <motion.div
                key={dept.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setActiveDept(idx)}
                className={`border-2 rounded-3xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-[#0057A8] shadow-xl shadow-blue-900/10 scale-102'
                    : 'bg-[#F8FAFC] border-slate-200/90 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                    <div className="flex items-center gap-2">
                      <span className={`w-3 h-3 rounded-full ${isSelected ? 'bg-[#0057A8]' : 'bg-slate-400'}`} />
                      <h3 className="font-extrabold text-[#0B1F33] text-base">{dept.title}</h3>
                    </div>
                  </div>

                  <div className="space-y-3.5">
                    {dept.roles.map((role) => (
                      <div key={role.name} className="bg-[#F8FAFC] p-3.5 rounded-2xl border border-slate-200/70 shadow-sm hover:border-[#0057A8] transition-colors">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-slate-800 text-xs sm:text-sm">{role.name}</span>
                          <span className="px-2.5 py-1 rounded-lg bg-[#0057A8] text-white text-xs font-extrabold shadow-xs">
                            {role.count}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-1">{role.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 text-[11px] font-bold text-[#42A51F] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Audited Operational Unit</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'rotate-90 text-[#0057A8]' : 'text-slate-300'}`} />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
