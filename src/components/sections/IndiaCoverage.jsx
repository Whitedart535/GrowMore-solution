import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { MapPin, Building2, Users, AlertCircle } from 'lucide-react';

export default function IndiaCoverage() {
  const hubs = [
    { city: "Bangalore", type: "Operational Headquarters", top: "72%", left: "42%" },
    { city: "Mumbai", type: "Urban Centre Hub", top: "52%", left: "28%" },
    { city: "Delhi NCR", type: "Urban Centre Hub", top: "28%", left: "38%" },
    { city: "Chennai", type: "Regional Centre", top: "76%", left: "48%" },
    { city: "Hyderabad", type: "Urban Centre Hub", top: "60%", left: "45%" },
    { city: "Kochi", type: "Regional Centre", top: "84%", left: "40%" }
  ];

  return (
    <section id="coverage" className="py-20 lg:py-32 bg-[#0B1F33] text-white relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0057A8]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#42A51F]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Footprint Strategy"
          title="Expanding Our Reach Across India"
          subtitle="Targeting systematic coverage across key metro corridors and Tier 2/3 urban centers to support financial institutions."
          centered
          dark
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Expansion Metrics */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#0057A8] text-white flex items-center justify-center font-extrabold text-2xl shadow-lg">
                  600+
                </div>
                <div>
                  <div className="text-xl font-extrabold text-white">PIN Codes Planned</div>
                  <div className="text-xs font-semibold text-[#60A5FA]">Target Expansion Network</div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#42A51F] text-white flex items-center justify-center font-extrabold text-2xl shadow-lg">
                  78
                </div>
                <div>
                  <div className="text-xl font-extrabold text-white">Urban Centres Planned</div>
                  <div className="text-xs font-semibold text-[#55C42B]">Target Key Metro Hubs</div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/10 text-white flex items-center justify-center font-extrabold text-2xl">
                  50+
                </div>
                <div>
                  <div className="text-xl font-extrabold text-white">Field Operations Staff</div>
                  <div className="text-xs font-semibold text-slate-300">Active Ground Agents</div>
                </div>
              </div>
            </div>

            {/* Disclaimer Callout */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-3 text-xs text-amber-200">
              <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />
              <span>Note: 600+ PIN codes and 78 urban centres represent planned expansion goals. We do not claim completed nationwide coverage.</span>
            </div>

          </div>

          {/* Right Column: Stylized India Vector Node Map */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] bg-slate-900/60 rounded-3xl border border-slate-800 p-6 flex items-center justify-center overflow-hidden shadow-2xl">
              
              {/* India Map Outline SVG */}
              <svg viewBox="0 0 400 500" className="w-full h-full opacity-40">
                <path
                  d="M 170 30 C 200 40 230 60 250 90 C 280 120 290 160 270 200 C 290 230 320 250 310 280 C 290 320 250 360 220 400 C 190 440 170 470 160 480 C 150 470 130 420 110 380 C 80 330 60 280 70 240 C 60 200 100 150 120 110 C 140 70 150 40 170 30 Z"
                  fill="none"
                  stroke="#0057A8"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                />
              </svg>

              {/* Animated Map Pins */}
              {hubs.map((hub) => (
                <div
                  key={hub.city}
                  className="absolute flex items-center gap-2 group cursor-pointer"
                  style={{ top: hub.top, left: hub.left }}
                >
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-6 h-6 rounded-full bg-[#42A51F]/40 animate-ping" />
                    <span className="relative w-3.5 h-3.5 rounded-full bg-[#42A51F] border-2 border-white" />
                  </div>
                  <div className="bg-slate-900/90 border border-slate-700 px-2.5 py-1 rounded-lg text-[10px] font-bold text-white shadow-md">
                    {hub.city}
                  </div>
                </div>
              ))}

              <div className="absolute bottom-4 left-4 text-[11px] font-bold text-slate-400">
                ★ Headquarters: Bangalore, India
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
