import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, TrendingUp, Sparkles, Activity, CheckCircle2, ArrowRight } from 'lucide-react';

export default function HeroBannerShowcase() {
  return (
    <section className="relative py-8 sm:py-12 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Enterprise Banner Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/15 border border-slate-700/40 bg-[#0B1F33] group"
        >
          {/* Pristine 3D Visual Background */}
          <div className="relative min-h-[460px] sm:min-h-[500px] lg:min-h-[540px] w-full flex items-center overflow-hidden">
            <img
              src="/modern_fintech_banner_clean.jpg"
              alt="Grow More FinTech Platform Visual"
              className="absolute inset-0 w-full h-full object-cover object-right sm:object-center transform group-hover:scale-103 transition-transform duration-1000 ease-out opacity-90"
            />

            {/* Gradient Scrim overlays for maximum text legibility & elegant depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F33] via-[#0B1F33]/85 to-transparent sm:w-4/5" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33] via-[#0B1F33]/30 to-transparent" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#42A51F]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Banner Overlay Content Layer */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14 flex flex-col justify-between h-full space-y-8">
              
              {/* Top Tag Pill Row */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-xs">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>Enterprise FinTech Platform</span>
                </div>

                <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 bg-slate-950/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-700/60">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>AI Analytics Active</span>
                </div>
              </div>

              {/* Main Typography Header & Messaging */}
              <div className="max-w-2xl space-y-4">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] font-heading">
                  Next-Gen <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
                    Debt Recovery Platform
                  </span>
                </h2>

                <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-normal leading-relaxed max-w-xl">
                  Combining automated tele-calling, predictive field analytics, and legal compliance to maximize NPA recovery rates with complete audit security.
                </p>

                {/* Banner Call-To-Action Link */}
                <div className="pt-2">
                  <a
                    href="#technology"
                    className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors group/link"
                  >
                    <span>Explore ACS Intelligence Suite</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>

              {/* Glassmorphic Metrics Strip Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-2">
                
                {/* Metric 1 */}
                <div className="bg-slate-900/80 backdrop-blur-xl p-3.5 sm:p-4 rounded-2xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 shadow-lg group/card">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30 group-hover/card:scale-105 transition-transform">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-base sm:text-xl font-bold text-white font-heading">₹500Cr+</div>
                      <div className="text-[11px] sm:text-xs text-slate-400 font-medium">Portfolio Managed</div>
                    </div>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="bg-slate-900/80 backdrop-blur-xl p-3.5 sm:p-4 rounded-2xl border border-white/10 hover:border-emerald-500/40 transition-all duration-300 shadow-lg group/card">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30 group-hover/card:scale-105 transition-transform">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-base sm:text-xl font-bold text-white font-heading">98.4%</div>
                      <div className="text-[11px] sm:text-xs text-slate-400 font-medium">Resolution Rate</div>
                    </div>
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="bg-slate-900/80 backdrop-blur-xl p-3.5 sm:p-4 rounded-2xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 shadow-lg group/card">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 border border-purple-500/30 group-hover/card:scale-105 transition-transform">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-base sm:text-xl font-bold text-white font-heading">ACS Engine</div>
                      <div className="text-[11px] sm:text-xs text-slate-400 font-medium">AI Tele-Calling</div>
                    </div>
                  </div>
                </div>

                {/* Metric 4 */}
                <div className="bg-slate-900/80 backdrop-blur-xl p-3.5 sm:p-4 rounded-2xl border border-white/10 hover:border-amber-500/40 transition-all duration-300 shadow-lg group/card">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30 group-hover/card:scale-105 transition-transform">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-base sm:text-xl font-bold text-white font-heading">100%</div>
                      <div className="text-[11px] sm:text-xs text-slate-400 font-medium">RBI Compliant</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
