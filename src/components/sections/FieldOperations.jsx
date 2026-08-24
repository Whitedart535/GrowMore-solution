import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { Smartphone, MapPin, CheckCircle2, Navigation, DollarSign, RefreshCcw, ShieldCheck, UserCheck, FileText } from 'lucide-react';

export default function FieldOperations() {
  const [activeScreen, setActiveScreen] = useState('case');

  const steps = [
    "DATA", "SEGMENTATION", "CAMPAIGN", "CUSTOMER RESPONSE",
    "FIELD ALLOCATION", "MOBILE APP", "STATUS UPDATE", "PAYMENT", "RECONCILIATION"
  ];

  return (
    <section id="operations" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="On-Ground Action"
          title="From Digital Intelligence to Ground-Level Action"
          subtitle="Empowering 50+ field agents with mobile-native collection apps, geo-verification, and instant digital payment receipts."
          centered
          className="mb-16"
        />

        {/* Operational Step Flow Pills */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-6 mb-16 no-scrollbar">
          {steps.map((step, idx) => (
            <React.Fragment key={step}>
              <div className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-extrabold whitespace-nowrap shadow-sm hover:border-[#0057A8] transition-all cursor-default">
                <span className="text-[#0057A8] mr-1.5">{idx + 1}.</span>
                {step}
              </div>
              {idx < steps.length - 1 && (
                <span className="text-slate-300 font-bold shrink-0">→</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile App Interactive Device Simulator & Capability Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Interactive Mobile App Simulator */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Screen Selector Buttons */}
            <div className="flex items-center gap-1.5 p-1.5 bg-slate-200/70 rounded-full mb-6 text-xs font-bold text-slate-700">
              <button
                onClick={() => setActiveScreen('case')}
                className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                  activeScreen === 'case' ? 'bg-[#0057A8] text-white shadow-sm' : 'hover:bg-slate-300/50'
                }`}
              >
                1. Case ID
              </button>
              <button
                onClick={() => setActiveScreen('gps')}
                className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                  activeScreen === 'gps' ? 'bg-[#0057A8] text-white shadow-sm' : 'hover:bg-slate-300/50'
                }`}
              >
                2. GPS Verification
              </button>
              <button
                onClick={() => setActiveScreen('receipt')}
                className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                  activeScreen === 'receipt' ? 'bg-[#42A51F] text-white shadow-sm' : 'hover:bg-slate-300/50'
                }`}
              >
                3. Instant Receipt
              </button>
            </div>

            {/* Mobile Device Container */}
            <div className="relative w-full max-w-[320px] bg-slate-900 rounded-[42px] p-4 shadow-2xl border-4 border-slate-800">
              
              {/* Top Speaker notch */}
              <div className="w-32 h-4 bg-slate-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-10 h-1 bg-slate-700 rounded-full" />
              </div>

              {/* Dynamic App Screen Content */}
              <div className="bg-[#F8FAFC] rounded-[28px] p-4 text-slate-800 space-y-4 min-h-[380px] flex flex-col justify-between">
                
                <div>
                  {/* App Header */}
                  <div className="flex items-center justify-between bg-[#0057A8] text-white p-3 rounded-2xl mb-3 shadow-sm">
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-4 h-4" />
                      <span className="font-extrabold text-xs">Grow More Field Agent</span>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-[#42A51F] animate-ping" />
                  </div>

                  <AnimatePresence mode="wait">
                    {activeScreen === 'case' && (
                      <motion.div
                        key="case"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-3"
                      >
                        <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                          <div className="flex justify-between items-center text-xs">
                            <span className="font-bold text-slate-500">Case ID: #GMS-8842</span>
                            <span className="px-2 py-0.5 rounded-md bg-[#EAF5E5] text-[#42A51F] font-bold text-[10px]">
                              Visit Allocated
                            </span>
                          </div>
                          <div className="font-extrabold text-slate-800 text-sm">Retail Personal Loan</div>
                          <div className="text-xs text-slate-500 flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-[#0057A8]" />
                            <span>Bangalore Urban Zone</span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-100 rounded-2xl text-xs space-y-1">
                          <div className="font-bold text-slate-700">Scheduled Time Slot:</div>
                          <div className="text-slate-600">Today, 2:30 PM - 3:00 PM IST</div>
                        </div>
                      </motion.div>
                    )}

                    {activeScreen === 'gps' && (
                      <motion.div
                        key="gps"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-3"
                      >
                        <div className="bg-blue-50 p-4 rounded-2xl border border-blue-200 text-center space-y-2">
                          <Navigation className="w-8 h-8 text-[#0057A8] mx-auto animate-bounce" />
                          <div className="font-extrabold text-xs text-[#0057A8]">GPS Location Geo-Fenced</div>
                          <div className="text-[11px] text-slate-600">Agent checked in at borrower site. Coordinates logged to ACS.</div>
                        </div>

                        <div className="bg-white p-3 rounded-2xl border border-slate-200 text-xs font-bold text-slate-700 flex items-center justify-between">
                          <span>Accuracy:</span>
                          <span className="text-[#42A51F]">± 2.5 meters</span>
                        </div>
                      </motion.div>
                    )}

                    {activeScreen === 'receipt' && (
                      <motion.div
                        key="receipt"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-3"
                      >
                        <div className="bg-[#EAF5E5] p-4 rounded-2xl border border-[#42A51F]/40 text-center space-y-2">
                          <CheckCircle2 className="w-8 h-8 text-[#42A51F] mx-auto" />
                          <div className="font-extrabold text-xs text-[#42A51F]">Digital Receipt Issued</div>
                          <div className="text-[11px] text-slate-700 font-mono">Txn ID: #REC-994102</div>
                        </div>

                        <div className="bg-white p-3 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-1">
                          <div className="flex justify-between font-bold">
                            <span>SMS Sent:</span>
                            <span className="text-emerald-600">Delivered</span>
                          </div>
                          <div className="flex justify-between font-bold">
                            <span>Bank Sync:</span>
                            <span className="text-[#0057A8]">Instant</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom Home Indicator */}
                <div className="w-24 h-1 bg-slate-400 rounded-full mx-auto mt-2" />
              </div>

            </div>
          </div>

          {/* Right: Operational Capabilities List */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33]">
              Ground Operations Backed by Digital Rigor
            </h3>

            <p className="text-base text-slate-600 leading-relaxed">
              Our 50+ field executives operate with real-time mobile application integration, ensuring complete auditability, geo-verified door visits, and compliant customer interactions.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-4 hover:border-[#0057A8] transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#0057A8]/10 text-[#0057A8] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[#0B1F33] text-base">Geo-Fenced Doorstep Visits</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Every agent visit is time-stamped and location-verified via GPS mobile tracking.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-4 hover:border-[#42A51F] transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#EAF5E5] text-[#42A51F] flex items-center justify-center shrink-0">
                  <DollarSign className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[#0B1F33] text-base">Instant Digital Payment Receipts</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Immediate SMS/Email collection receipt issued directly to borrower upon payment.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-4 hover:border-slate-400 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <RefreshCcw className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[#0B1F33] text-base">Real-time ACS Ledger Reconciliation</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Field collections reflect instantly on institution dashboards without manual delays.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
