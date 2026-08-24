import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { Building, Headphones, Users, MapPin, Maximize2, X, ShieldCheck } from 'lucide-react';

export default function InfrastructureGallery() {
  const [activeModal, setActiveModal] = useState(null);

  const galleryItems = [
    {
      id: 1,
      tag: "Bangalore Central Voice Operations Desk",
      title: "30+ Native Language Callers Hub",
      desc: "Equipped with real-time ACS call monitoring, SLA tracking, and multi-lingual voice recording capabilities.",
      type: "voice",
      span: "md:col-span-8 bg-[#0B1F33] text-white",
      icon: Headphones
    },
    {
      id: 2,
      tag: "Field Operations Command",
      title: "50+ Active Field Executives",
      desc: "Synchronized via mobile apps for GPS doorstep verification and instant digital receipt generation.",
      type: "field",
      span: "md:col-span-4 bg-[#F8FAFC] text-slate-800 border-2 border-slate-200",
      icon: Users
    },
    {
      id: 3,
      tag: "Corporate Headquarters",
      title: "Strategic Legal & Accounts Desk",
      desc: "Owned by Najmul Huda, ensuring 100% statutory adherence, judicial compliance, and financial reconciliation.",
      type: "office",
      span: "md:col-span-5 bg-white text-slate-800 border-2 border-slate-200",
      icon: Building
    },
    {
      id: 4,
      tag: "Pan-India Planned Footprint",
      title: "600+ PIN Codes & 78 Urban Centres",
      desc: "Planned expansion structure engineered for rapid deployment across high-density borrower clusters.",
      type: "coverage",
      span: "md:col-span-7 bg-[#EAF5E5] text-slate-900 border border-[#42A51F]/40",
      icon: MapPin
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Infrastructure & Operations"
          title="Built for Scale. Powered by People."
          subtitle="A look into our technology-enabled tele-calling centers, central operational command, and regional field infrastructure."
          centered
          className="mb-16"
        />

        {/* Asymmetric Editorial Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {galleryItems.map((item) => {
            const IconComponent = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                onClick={() => setActiveModal(item)}
                className={`${item.span} rounded-3xl p-8 flex flex-col justify-between min-h-[300px] relative overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              >
                {/* Top Action Icon */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    item.id === 1 ? 'bg-[#0057A8] text-white' : 'bg-slate-200/80 text-slate-800'
                  }`}>
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <span className="p-2 rounded-xl bg-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2 relative z-10">
                  <div className={`text-xs font-bold uppercase tracking-wider ${
                    item.id === 1 ? 'text-[#60A5FA]' : 'text-[#42A51F]'
                  }`}>
                    {item.tag}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold leading-tight">
                    {item.title}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    item.id === 1 ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Lightbox Preview Modal */}
        <AnimatePresence>
          {activeModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl p-8 max-w-xl w-full shadow-2xl relative space-y-6"
              >
                <button
                  onClick={() => setActiveModal(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5E5] text-[#42A51F] text-xs font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  Verified Facility Blueprint
                </div>

                <h3 className="text-2xl font-extrabold text-[#0B1F33]">{activeModal.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{activeModal.desc}</p>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs font-bold text-slate-700">
                  Status: Active Institutional Resolution Hub • Owned by Najmul Huda
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
