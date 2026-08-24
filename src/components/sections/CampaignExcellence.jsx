import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { UserCheck, Sliders, Target, MessageSquare, PhoneCall, PhoneIncoming, PhoneOutgoing, User } from 'lucide-react';

export default function CampaignExcellence() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Precision Targeting"
          title="Every Campaign. Precisely Targeted."
          subtitle="Dynamic campaign routing matching specific loan products, customer behavioral profiles, and validated contractability scores."
          centered
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Personalization Vectors */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xl font-extrabold text-[#0B1F33] mb-4 flex items-center gap-2">
              <Sliders className="w-5 h-5 text-[#0057A8]" />
              Personalization Inputs
            </h3>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="text-xs font-bold text-[#0057A8] uppercase tracking-wider">Vector 01</div>
              <h4 className="font-extrabold text-[#0B1F33] text-base">Product Category</h4>
              <p className="text-xs text-slate-600">Personal loans, credit cards, auto loans, micro-finance, BNPL.</p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="text-xs font-bold text-[#42A51F] uppercase tracking-wider">Vector 02</div>
              <h4 className="font-extrabold text-[#0B1F33] text-base">Customer Profile</h4>
              <p className="text-xs text-slate-600">Bureau score, repayment history, dispute status, hardship criteria.</p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="text-xs font-bold text-sky-600 uppercase tracking-wider">Vector 03</div>
              <h4 className="font-extrabold text-[#0B1F33] text-base">Contractability Index</h4>
              <p className="text-xs text-slate-600">Verified phone activity, location geo-tagging, skip-trace probability.</p>
            </div>
          </div>

          {/* Center Column: Central Customer Profile Node Visualizer */}
          <div className="lg:col-span-4 text-center">
            <div className="relative p-8 rounded-3xl bg-white border-2 border-[#0057A8] shadow-xl shadow-blue-900/10 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-3xl bg-[#0057A8] text-white flex items-center justify-center shadow-lg shadow-[#0057A8]/30">
                <User className="w-8 h-8" />
              </div>
              <h4 className="font-extrabold text-[#0B1F33] text-lg">Central Customer Profile Engine</h4>
              <p className="text-xs text-slate-500">Real-time Campaign Orchestration</p>

              <div className="pt-3 border-t border-slate-100 flex justify-center gap-2 text-xs font-bold text-[#42A51F]">
                <Target className="w-4 h-4" />
                <span>Optimal Channel Selection</span>
              </div>
            </div>
          </div>

          {/* Right Column: Execution Channels */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xl font-extrabold text-[#0B1F33] mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-[#42A51F]" />
              Triggered Execution
            </h3>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-3 text-slate-700 font-bold text-sm">
              <MessageSquare className="w-5 h-5 text-[#0057A8] shrink-0" />
              <span>SMS & Payment Links</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-3 text-slate-700 font-bold text-sm">
              <PhoneCall className="w-5 h-5 text-[#42A51F] shrink-0" />
              <span>Interactive Voice Response (IVR)</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-3 text-slate-700 font-bold text-sm">
              <PhoneIncoming className="w-5 h-5 text-indigo-600 shrink-0" />
              <span>Inbound Calling Desk</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-3 text-slate-700 font-bold text-sm">
              <PhoneOutgoing className="w-5 h-5 text-sky-600 shrink-0" />
              <span>Outbound Native Calling</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-3 text-slate-700 font-bold text-sm">
              <UserCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Field Agent Visit Dispatch</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
