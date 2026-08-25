import React from 'react';
import Logo from '../common/Logo';
import { Mail, Phone, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';
import { companyInfo } from '../../data/companyData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1F33] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Descriptor */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white/95 p-4 rounded-2xl shadow-lg border border-slate-700/50 inline-block hover:bg-white transition-all">
              <Logo className="h-18 sm:h-22" />
            </div>
            <p className="text-sm font-bold text-[#42A51F] tracking-wider uppercase font-heading">
              Technology • Analytics • Collections • Recovery
            </p>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {companyInfo.description}
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900/60 p-3 rounded-xl border border-slate-800 max-w-sm">
              <ShieldCheck className="w-4 h-4 text-[#42A51F] shrink-0" />
              <span>Compliant with all RBI, Judicial, Statutory & Legal Recovery Frameworks.</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white tracking-wide">Solutions & Tech</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#solutions" className="hover:text-[#60A5FA] transition-colors">Debt Recovery</a></li>
              <li><a href="#solutions" className="hover:text-[#60A5FA] transition-colors">Tele-calling Engine</a></li>
              <li><a href="#solutions" className="hover:text-[#60A5FA] transition-colors">Field Operations</a></li>
              <li><a href="#technology" className="hover:text-[#60A5FA] transition-colors">ACS Management System</a></li>
              <li><a href="#operations" className="hover:text-[#60A5FA] transition-colors">Skip Tracing Module</a></li>
              <li><a href="#coverage" className="hover:text-[#60A5FA] transition-colors">Planned India Reach</a></li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white tracking-wide">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#home" className="hover:text-[#60A5FA] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#60A5FA] transition-colors">About Us</a></li>
              <li><a href="#why-us" className="hover:text-[#60A5FA] transition-colors">Why Grow More</a></li>
              <li><a href="#clients" className="hover:text-[#60A5FA] transition-colors">Our Clients</a></li>
              <li><a href="#team" className="hover:text-[#60A5FA] transition-colors">Operational Structure</a></li>
              <li><a href="#contact" className="hover:text-[#60A5FA] transition-colors">Partner With Us</a></li>
            </ul>
          </div>

          {/* Col 4: Official Contact */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white tracking-wide">Headquarters</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-[#0057A8] shrink-0 mt-0.5" />
                <span>{companyInfo.location}</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Mail className="w-5 h-5 text-[#0057A8] shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition-colors">{companyInfo.email}</a>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Phone className="w-5 h-5 text-[#42A51F] shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="hover:text-white transition-colors">{companyInfo.phone}</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Grow More Solution. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span>Owned by {companyInfo.owner}</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-[#0057A8] text-white transition-colors flex items-center gap-1 focus:outline-none"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
