import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { acsModules } from '../../data/companyData';
import { Cpu, Server, Smartphone, Target, DollarSign, RefreshCw, BarChart2, ShieldCheck, CheckCircle2, ArrowRight, Zap, Database } from 'lucide-react';

export default function TechnologyACS() {
  const [activeModule, setActiveModule] = useState(acsModules[0]);

  const iconList = [Server, Smartphone, Smartphone, Target, DollarSign, DollarSign, RefreshCw, BarChart2];

  return (
    <section id="technology" className="py-20 lg:py-32 bg-[#0B1F33] text-white relative overflow-hidden">
      
      {/* Background Dot Grid Texture */}
      <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#0057A8]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Proprietary Infrastructure"
          title="Technology That Turns Collections Into Intelligence"
          subtitle="The Advanced Collection System (ACS) powers end-to-end debt recovery, integrating predictive allocation, field mobile tracking, and real-time bank reconciliation."
          centered
          dark
          className="mb-16"
        />

        {/* Central Interactive Enterprise Fintech Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: ACS Interactive Node Network */}
          <div className="lg:col-span-7 bg-slate-900/90 p-6 sm:p-8 rounded-3xl border border-slate-800 backdrop-blur-xl shadow-2xl relative">
            
            <div className="text-center mb-8 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0057A8]/30 border border-[#0057A8]/60 text-[#60A5FA] text-xs font-extrabold uppercase tracking-widest">
                <Cpu className="w-4 h-4 text-[#60A5FA] animate-spin" style={{ animationDuration: '8s' }} />
                ACS Central Intelligence Hub
              </div>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                ● Live Data Flow
              </span>
            </div>

            {/* Grid of 8 ACS Modules */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 relative">
              {acsModules.map((mod, idx) => {
                const IconComponent = iconList[idx] || Cpu;
                const isSelected = activeModule.id === mod.id;

                return (
                  <button
                    key={mod.id}
                    onClick={() => setActiveModule(mod)}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between group ${
                      isSelected
                        ? 'bg-gradient-to-br from-[#0057A8] to-[#003B73] border-[#60A5FA] shadow-lg shadow-[#0057A8]/40 scale-102 z-10'
                        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-slate-600'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/20 rounded-full blur-xl pointer-events-none" />
                    )}

                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected ? 'bg-white text-[#0057A8]' : 'bg-white/10 text-slate-300 group-hover:bg-[#0057A8] group-hover:text-white'
                      }`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className={`text-[10px] font-bold ${isSelected ? 'text-blue-200' : 'text-slate-500'}`}>0{idx + 1}</span>
                    </div>

                    <div className={`font-bold text-xs sm:text-sm leading-tight ${
                      isSelected ? 'text-white' : 'text-slate-200'
                    }`}>
                      {mod.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* SVG Interactive Connection Pulses */}
            <div className="mt-8 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 font-semibold text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                AES-256 Encrypted Institutional API Gateway
              </span>
              <span className="text-slate-400 font-mono text-[11px]">ISO 27001 & Statutory Audited</span>
            </div>

          </div>

          {/* Right: Selected Module Deep-Dive View */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModule.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-[#112942] via-[#0B1F33] to-[#081829] p-8 rounded-3xl border-2 border-[#0057A8]/50 shadow-2xl relative"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-900/30">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/30">
                    Active Module Blueprint
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-white mb-3">
                  {activeModule.title}
                </h3>

                <p className="text-base text-slate-300 leading-relaxed mb-6">
                  {activeModule.desc}
                </p>

                <div className="space-y-3 pt-6 border-t border-slate-700/60 text-sm text-slate-300">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                    <span>Automated SLA Tracking & Event Escalation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#0057A8] shrink-0" />
                    <span>Instant Bank-Grade Audit Logs & Reporting</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-sky-400 shrink-0" />
                    <span>Seamless Mobile App Sync for 50+ Field Agents</span>
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <a href="#contact" className="inline-flex items-center gap-2 text-xs font-extrabold text-[#60A5FA] hover:text-white transition-colors">
                    <span>Request ACS Technical Documentation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
