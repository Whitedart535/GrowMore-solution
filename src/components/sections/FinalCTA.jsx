import React from 'react';
import Button from '../common/Button';
import { ShieldCheck } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-[#0B1F33] text-white relative overflow-hidden">
      
      {/* Background Accent Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#0057A8_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#0057A8]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAF5E5]/20 border border-[#42A51F]/50 text-[#55C42B] text-xs font-extrabold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-[#55C42B]" />
          <span>Partner With Grow More Solution</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Let's Build Better Recovery Outcomes Together.
        </h2>

        <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Looking for a technology-enabled partner for collection and debt resolution? Let's discuss your portfolio requirements with our senior team.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button href="#contact" variant="green" size="lg" className="w-full sm:w-auto">
            Talk to Our Team
          </Button>
          <Button href="#contact" variant="outline" size="lg" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-[#0B1F33]">
            Send an Enquiry
          </Button>
        </div>

      </div>
    </section>
  );
}
