import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { languages } from '../../data/companyData';
import { PhoneCall, Languages, MapPin, TrendingUp, Info, Mic, Volume2 } from 'lucide-react';
import AnimatedCounter from '../common/AnimatedCounter';

export default function NativeCalling() {
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Content & Metrics */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              badge="Multilingual Outreach"
              title="Communication That Speaks Your Customer's Language"
              subtitle="Deploying 30+ native language callers across 6 major Indian languages to overcome communication barriers and establish empathetic resolution."
            />

            {/* Performance Uplift Stat Card */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#EAF5E5] text-[#42A51F] flex items-center justify-center font-extrabold text-2xl shadow-sm">
                  <AnimatedCounter value={2} suffix="×" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[#0B1F33] text-base">Native-Language Performance Uplift</h4>
                  <p className="text-xs text-slate-500">Source Reported Metric</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                The source presentation reports a 2× performance uplift associated with native-language proficiency in tele-calling outreach.
              </p>
              <div className="flex items-center gap-2 text-[11px] text-amber-700 bg-amber-50 p-3 rounded-xl border border-amber-200/60 font-medium">
                <Info className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Presented as a source-reported figure from historical portfolio operations.</span>
              </div>
            </div>

            {/* Call Center Operational Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#0057A8] text-white shadow-md shadow-blue-900/10">
                <div className="text-3xl sm:text-4xl font-extrabold">
                  <AnimatedCounter value={30} suffix="+" />
                </div>
                <div className="text-xs font-semibold text-blue-100 mt-1">Native Language Callers</div>
              </div>
              <div className="p-5 rounded-2xl bg-[#0B1F33] text-white shadow-md">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#42A51F]">
                  <AnimatedCounter value={40} />
                </div>
                <div className="text-xs font-semibold text-slate-300 mt-1">Total Tele-Callers</div>
              </div>
            </div>

          </div>

          {/* Right: Interactive Language Dialect Selector & Audio Wave Preview */}
          <div className="lg:col-span-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2 text-sm font-extrabold text-[#0B1F33]">
                  <Languages className="w-5 h-5 text-[#0057A8]" />
                  <span>Select Dialect Region</span>
                </div>
                <span className="text-xs font-bold text-[#42A51F] bg-[#EAF5E5] px-3 py-1 rounded-full">
                  Pan-India Voice Desk
                </span>
              </div>

              {/* 6 Language Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {languages.map((lang) => {
                  const isSelected = selectedLang.code === lang.code;
                  return (
                    <button
                      key={lang.code}
                      onClick={() => setSelectedLang(lang)}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
                        isSelected
                          ? 'bg-[#0057A8] border-[#0057A8] text-white shadow-md shadow-[#0057A8]/30 scale-102'
                          : 'bg-[#F8FAFC] border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <span className={`w-8 h-8 rounded-xl font-extrabold text-xs flex items-center justify-center ${
                        isSelected ? 'bg-white text-[#0057A8]' : 'bg-slate-200 text-slate-800'
                      }`}>
                        {lang.code}
                      </span>
                      <span className="font-bold text-xs">{lang.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Dialect Inspection Box with Animated Audio Waves */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedLang.code}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#0B1F33] text-white p-6 rounded-2xl space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-extrabold">{selectedLang.name} Voice Desk</div>
                      <div className="text-xs text-slate-300 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-[#42A51F]" />
                        {selectedLang.region}
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-[#42A51F] text-white flex items-center justify-center">
                      <Volume2 className="w-5 h-5 animate-pulse" />
                    </div>
                  </div>

                  {/* Animated Voice Waveform Visual */}
                  <div className="flex items-center gap-1 justify-center py-3 bg-white/5 rounded-xl border border-white/10">
                    {[40, 75, 30, 90, 50, 85, 45, 95, 60, 35, 80, 50, 70, 40].map((h, i) => (
                      <motion.div
                        key={i}
                        animate={{ height: [12, h / 2.5, 12] }}
                        transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.08 }}
                        className="w-1.5 bg-[#42A51F] rounded-full"
                      />
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-300 pt-1">
                    <span>Call Quality SLA: 99.4%</span>
                    <span className="text-[#42A51F] font-bold">Native Voice Verified</span>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
