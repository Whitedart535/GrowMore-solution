import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { ShieldCheck, Lock, Key, FileText, CheckCircle2, Server, EyeOff, Award } from 'lucide-react';

export default function SecurityCompliance() {
  const securityPillars = [
    {
      icon: Lock,
      title: "Bank-Grade Encryption",
      desc: "All portfolio data and borrower communications are encrypted with AES-256 at rest and TLS 1.3 in transit via secure institutional API gateways.",
      tag: "Data Security"
    },
    {
      icon: ShieldCheck,
      title: "RBI Statutory Alignment",
      desc: "Strict compliance with RBI Fair Practice Codes, judicial guidelines, and recovery agent codes of conduct to safeguard institutional reputation.",
      tag: "Regulatory Standards"
    },
    {
      icon: Key,
      title: "Role-Based Access Control",
      desc: "Granular RBAC ensures field agents, native callers, and supervisors access only assigned portfolio cases with zero unauthorized data exposure.",
      tag: "Access Management"
    },
    {
      icon: FileText,
      title: "Auditability & Logging",
      desc: "Complete event logs for every call, IVR touchpoint, GPS visit check-in, and payment receipt, ready for institution audit teams.",
      tag: "Audit Trail"
    }
  ];

  const complianceBadges = [
    "RBI Fair Practice Code Compliant",
    "Statutory & Legal Adherence",
    "AES-256 Encrypted Storage",
    "ISO 27001 Prepared Infrastructure",
    "Zero Non-Compliant Contact Guarantee",
    "Strict Non-Disclosure (NDA) Protected"
  ];

  return (
    <section id="security" className="py-20 lg:py-28 bg-[#0B1F33] text-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0057A8]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Enterprise Security & Governance"
          title="Bank-Grade Trust, Security & Compliance"
          subtitle="Engineered to meet the stringent data privacy, auditability, and statutory compliance standards required by leading financial institutions."
          centered
          dark
          className="mb-16"
        />

        {/* 4 Security Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {securityPillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-3xl p-6 hover:border-[#0057A8] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#0057A8]/30 border border-[#0057A8]/50 text-[#60A5FA] flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-[#0057A8] group-hover:text-white transition-all">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-2">
                    {pillar.tag}
                  </span>

                  <h3 className="text-lg font-bold text-white mb-2 font-heading">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-1.5 text-[11px] text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Institutional Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Compliance Badges Strip */}
        <div className="bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-800">
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 text-center">
            Institutional Trust & Compliance Guarantees
          </h4>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {complianceBadges.map((badge) => (
              <div
                key={badge}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-200"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
