import React from 'react';
import { motion } from 'framer-motion';
import { Database, TrendingUp, Users, PhoneCall, MapPin, ShieldCheck, Cpu, Activity } from 'lucide-react';
import AnimatedCounter from '../common/AnimatedCounter';

export default function CollectionIntelligenceVisual() {
  return (
    <div className="relative w-full max-w-xl mx-auto aspect-square sm:aspect-[4/3] lg:aspect-square flex items-center justify-center p-4">
      
      {/* Background Ambient Radial Glow Blobs */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0057A8]/15 via-emerald-500/15 to-transparent rounded-full blur-3xl -z-10 animate-pulse-ring" />
      <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#0057A8]/20 rounded-full blur-2xl -z-10" />
      <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-emerald-500/20 rounded-full blur-2xl -z-10" />

      {/* Central ACS Intelligence Hub Node */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 bg-white/95 backdrop-blur-xl border-2 border-[#0057A8] p-5 sm:p-6 rounded-3xl shadow-2xl shadow-blue-900/20 text-center max-w-[230px] animate-float"
      >
        <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-2 rounded-2xl bg-gradient-to-tr from-[#0057A8] to-[#1B7DDD] text-white flex items-center justify-center shadow-lg shadow-[#0057A8]/30">
          <Cpu className="w-7 h-7 animate-pulse" />
        </div>
        <h4 className="font-extrabold text-[#0B1F33] text-sm sm:text-base font-heading">ACS Intelligence Engine</h4>
        <p className="text-[11px] text-slate-500 font-medium mt-1">Real-time Risk & Portfolio Routing</p>
        
        <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-[#15803D] text-[10px] font-extrabold border border-emerald-200/80">
          <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-ping" />
          Active Live Telemetry
        </div>
      </motion.div>

      {/* Floating Telemetry Node Cards */}

      {/* Node 1: Live Risk Data (Top Left) */}
      <motion.div
        initial={{ x: -25, y: -25, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-2 left-0 sm:left-2 z-10 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-xl hover:border-[#0057A8] transition-all animate-float-slow"
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0057A8] flex items-center justify-center shrink-0">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-extrabold text-slate-800">Portfolio Analytics</div>
            <div className="text-[10px] text-slate-500 flex items-center gap-1 font-medium">
              <Activity className="w-3 h-3 text-[#0057A8]" />
              Risk Segmentation
            </div>
          </div>
        </div>
      </motion.div>

      {/* Node 2: >30% NPA Improvement (Top Right) */}
      <motion.div
        initial={{ x: 25, y: -25, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute top-2 right-0 sm:right-2 z-10 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-xl hover:border-[#16A34A] transition-all animate-float"
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#15803D] flex items-center justify-center shrink-0">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-extrabold text-[#15803D]">
              &gt;<AnimatedCounter value={30} suffix="%" /> NPA Uplift
            </div>
            <div className="text-[10px] text-slate-500 font-medium">Source Reported</div>
          </div>
        </div>
      </motion.div>

      {/* Node 3: 30+ Native Callers (Middle Left) */}
      <motion.div
        initial={{ x: -35, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute top-1/2 -translate-y-1/2 -left-2 z-10 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-xl"
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
            <PhoneCall className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-extrabold text-slate-800">
              <AnimatedCounter value={50} suffix="+" /> Native Callers
            </div>
            <div className="text-[10px] text-slate-500 font-medium">6 Regional Dialects</div>
          </div>
        </div>
      </motion.div>

      {/* Node 4: 50+ Field Agents (Middle Right) */}
      <motion.div
        initial={{ x: 35, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute top-1/2 -translate-y-1/2 -right-2 z-10 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-xl"
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-extrabold text-slate-800">
              <AnimatedCounter value={50} suffix="+" /> Field Agents
            </div>
            <div className="text-[10px] text-slate-500 font-medium">Doorstep Resolution</div>
          </div>
        </div>
      </motion.div>

      {/* Node 5: Planned India Reach (Bottom Left) */}
      <motion.div
        initial={{ x: -25, y: 25, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-2 left-0 sm:left-2 z-10 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-xl animate-float-slow"
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-extrabold text-slate-800">
              <AnimatedCounter value={600} suffix="+" /> PIN Codes
            </div>
            <div className="text-[10px] text-slate-500 font-medium">Planned Expansion</div>
          </div>
        </div>
      </motion.div>

      {/* Node 6: Statutory Compliance (Bottom Right) */}
      <motion.div
        initial={{ x: 25, y: 25, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute bottom-2 right-0 sm:right-2 z-10 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-xl animate-float"
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-extrabold text-slate-800">100% Compliant</div>
            <div className="text-[10px] text-slate-500 font-medium">Judicial Guidelines</div>
          </div>
        </div>
      </motion.div>

      {/* Connecting Animated SVG Dash Flow Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
        <line x1="25%" y1="20%" x2="50%" y2="50%" stroke="#0057A8" strokeWidth="2" opacity="0.3" className="animate-flow-line" />
        <line x1="75%" y1="20%" x2="50%" y2="50%" stroke="#16A34A" strokeWidth="2" opacity="0.3" className="animate-flow-line" />
        <line x1="15%" y1="50%" x2="50%" y2="50%" stroke="#0057A8" strokeWidth="2" opacity="0.3" className="animate-flow-line" />
        <line x1="85%" y1="50%" x2="50%" y2="50%" stroke="#0057A8" strokeWidth="2" opacity="0.3" className="animate-flow-line" />
        <line x1="25%" y1="80%" x2="50%" y2="50%" stroke="#0057A8" strokeWidth="2" opacity="0.3" className="animate-flow-line" />
        <line x1="75%" y1="80%" x2="50%" y2="50%" stroke="#16A34A" strokeWidth="2" opacity="0.3" className="animate-flow-line" />
      </svg>
    </div>
  );
}
