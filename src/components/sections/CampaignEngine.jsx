import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { campaignTimeline } from '../../data/companyData';
import { MessageSquare, PhoneCall, PhoneIncoming, PhoneOutgoing, UserCheck, ShieldAlert } from 'lucide-react';

export default function CampaignEngine() {
  const channels = [
    { name: "SMS", icon: MessageSquare, desc: "Instant digital payment links" },
    { name: "IVR", icon: PhoneCall, desc: "Interactive automated voice response" },
    { name: "Missed Calls", icon: PhoneCall, desc: "Zero-cost borrower call-back trigger" },
    { name: "Inbound Calling", icon: PhoneIncoming, desc: "Dedicated helpline resolution" },
    { name: "Outbound Calling", icon: PhoneOutgoing, desc: "Native caller negotiation" },
    { name: "Field Intervention", icon: UserCheck, desc: "On-ground doorstep resolution" }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Structured Escalation"
          title="Campaign Management Engine"
          subtitle="A timed, multi-channel escalation matrix orchestrating digital notifications, voice contact, and ground intervention from Day T to T+6."
          centered
          className="mb-16"
        />

        {/* Timeline Engine Container */}
        <div className="relative mb-16">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 z-0" />
          <div className="hidden lg:block absolute top-1/2 left-0 w-3/4 h-1 bg-[#0057A8] -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {campaignTimeline.map((item, idx) => (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="bg-[#F8FAFC] border-2 border-slate-200 hover:border-[#0057A8] rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-xl bg-[#0057A8] text-white text-sm font-extrabold shadow-sm">
                      {item.time}
                    </span>
                    <span className="text-xs font-bold text-slate-400">Stage 0{idx + 1}</span>
                  </div>

                  <h3 className="text-lg font-extrabold text-[#0B1F33] mb-2 group-hover:text-[#0057A8] transition-colors">
                    {item.stage}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.details}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-bold text-[#42A51F]">
                  <span>Active Trigger</span>
                  <div className="w-2 h-2 rounded-full bg-[#42A51F] animate-ping" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Multi-Channel Execution Grid */}
        <div className="bg-[#0B1F33] p-8 sm:p-10 rounded-3xl text-white">
          <h3 className="text-xl font-extrabold mb-6 text-center text-white flex items-center justify-center gap-2">
            <ShieldAlert className="w-5 h-5 text-[#42A51F]" />
            Integrated Communication Channels
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {channels.map((chan) => {
              const IconComp = chan.icon;
              return (
                <div key={chan.name} className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 hover:border-[#0057A8] transition-all">
                  <div className="w-10 h-10 mx-auto rounded-xl bg-[#0057A8]/40 text-[#60A5FA] flex items-center justify-center mb-2">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="font-extrabold text-sm text-white mb-1">{chan.name}</div>
                  <div className="text-[11px] text-slate-400 leading-tight">{chan.desc}</div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
