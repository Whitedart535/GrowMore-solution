import React, { useState, useEffect } from 'react';
import Logo from '../common/Logo';
import Button from '../common/Button';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Technology', href: '#technology' },
    { name: 'Operations', href: '#operations' },
    { name: 'Security', href: '#security' },
    { name: 'Clients', href: '#clients' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-nav py-2.5 border-b border-slate-200/80 shadow-md backdrop-blur-xl'
          : 'bg-white/75 backdrop-blur-md py-3.5 border-b border-slate-100/60 shadow-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo - Enlarged & Attractive */}
          <a href="#home" className="flex items-center focus:outline-none group py-0.5">
            <Logo className="h-12 sm:h-14 lg:h-16 xl:h-18" />
          </a>

          {/* Desktop Navigation with Enhanced Font & Styling */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-[15px] font-semibold text-slate-700 hover:text-[#0057A8] transition-all rounded-lg hover:bg-slate-100/80 hover:shadow-xs"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button href="#contact" variant="primary" size="sm">
              Partner With Us
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-[#0057A8] hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav border-b border-slate-200 animate-in fade-in slide-in-from-top-4 duration-200 px-4 pt-4 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-slate-700 hover:text-[#0057A8] hover:bg-slate-100/80 rounded-xl"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-200">
            <Button
              href="#contact"
              variant="primary"
              size="md"
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Partner With Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
