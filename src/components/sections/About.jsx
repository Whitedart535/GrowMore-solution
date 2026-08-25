import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { companyInfo } from '../../data/companyData';
import { Scale, ShieldCheck, FileCheck, Clock, BarChart2, Headphones, MapPin, HeartHandshake } from 'lucide-react';

export default function About() {
  const pillars = [
    { title: "Timely Action", desc: "Rapid escalation protocols before delinquency hardens", icon: Clock },
    { title: "Judicial Guidelines", desc: "Strict adherence to court & tribunal compliance standards", icon: Scale },
    { title: "Regulatory Compliance", desc: "Full alignment with RBI code of conduct & fair practice codes", icon: ShieldCheck },
    { title: "Statutory Standards", desc: "Lawful, audited, and transparent resolution workflows", icon: FileCheck },
    { title: "Analytics & Intelligence", desc: "Proprietary risk scoring & contractability modeling", icon: BarChart2 },
    { title: "Multi-lingual Calling", desc: "30+ native callers driving respectful voice resolution", icon: Headphones },
    { title: "Field Operations", desc: "50+ agents providing verified ground visits", icon: MapPin },
    { title: "Ethical Practices", desc: "Dignified customer engagement protecting client reputation", icon: HeartHandshake }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Positioning Text */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              badge="About Grow More Solution"
              title="Built for Better Debt Resolution"
              subtitle="Specializing in comprehensive debt recovery solutions for banks and financial institutions through technology, analytics, and strategic legal interventions."
            />

            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
              <p className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 font-medium text-slate-800">
                <span className="text-[#0057A8] font-bold">Grow More Solution</span> is a brand owned by <strong className="text-[#0B1F33]">{companyInfo.owner}</strong>, an asset resolution company dedicated to providing institutional-grade debt resolution services.
              </p>
              
              <p>
                Operating at the intersection of technology, analytics, field operations, and strategic legal frameworks, we help institutional lenders mitigate Non-Performing Assets (NPA) while upholding the highest ethical standards.
              </p>
              
              <p>
                Our operational philosophy ensures that every customer contact—whether via digital communication, tele-calling, or physical field visit—is managed with speed, dignity, and absolute compliance with statutory standards.
              </p>
            </div>

            {/* Quick Highlight Cards */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                <div className="text-2xl font-extrabold text-[#0057A8]">30+ Yrs</div>
                <div className="text-xs font-bold text-slate-600">Combined Leadership Depth</div>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80">
                <div className="text-2xl font-extrabold text-[#15803D]">100% Ethical</div>
                <div className="text-xs font-bold text-slate-700">Fair Collection Standards</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Pillars Grid */}
          <div className="lg:col-span-6">
            <div className="bg-[#0B1F33] p-6 sm:p-8 lg:p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden">
              
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0057A8]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              <h3 className="text-xl sm:text-2xl font-extrabold mb-6 flex items-center gap-2">
                <span className="w-2 h-6 bg-[#16A34A] rounded-full" />
                Foundational Operational Pillars
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                {pillars.map((pillar, idx) => {
                  const IconComponent = pillar.icon;
                  return (
                    <motion.div
                      key={pillar.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#0057A8] hover:bg-white/10 transition-all group"
                    >
                      <div className="flex items-center gap-3 mb-1.5">
                        <div className="w-8 h-8 rounded-xl bg-[#0057A8]/40 text-[#60A5FA] group-hover:bg-[#0057A8] group-hover:text-white transition-colors flex items-center justify-center">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <h4 className="font-bold text-white text-sm">{pillar.title}</h4>
                      </div>
                      <p className="text-xs text-slate-300 pl-11">{pillar.desc}</p>
                    </motion.div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
