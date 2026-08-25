import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import CollectionIntelligenceVisual from './CollectionIntelligenceVisual';
import { ShieldCheck, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-36 sm:pt-44 lg:pt-52 pb-20 lg:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      
      {/* Background Subtle Mesh Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Pill Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#15803D] text-xs sm:text-sm font-bold shadow-xs"
            >
              <Award className="w-4 h-4 text-[#16A34A]" />
              <span>Institutional FinTech & Asset Resolution Partner</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-[#0B1F33] tracking-tight leading-[1.15] font-heading space-y-1"
            >
              <span className="block text-[#0B1F33]">Smarter Collections.</span>
              <span className="block text-gradient-brand">Stronger Recovery.</span>
              <span className="block text-[#16A34A]">Better Outcomes.</span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#334155] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal tracking-normal"
            >
              Grow More Solution combines enterprise technology, predictive analytics, nationwide field operations, and strategic customer engagement to deliver compliant, high-performing debt recovery for financial institutions.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <Button href="#solutions" variant="primary" size="lg" className="w-full sm:w-auto">
                Explore Our Solutions
              </Button>
              <Button href="#contact" variant="outline" size="lg" className="w-full sm:w-auto">
                Partner With Us
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-semibold text-slate-600 border-t border-slate-200/70 max-w-xl"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0057A8]" />
                <span>Regulatory & Judicial Compliance</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
                <span>Audited Ethical Practices</span>
              </div>
            </motion.div>

          </div>

          {/* Right Hero Graphic */}
          <div className="lg:col-span-5">
            <CollectionIntelligenceVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
