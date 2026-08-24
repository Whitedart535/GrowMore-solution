import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { segmentationTabs } from '../../data/companyData';
import { Layers, CheckCircle, Info } from 'lucide-react';

export default function CustomerSegmentation() {
  const [activeTab, setActiveTab] = useState(segmentationTabs[0].id);

  const currentTabData = segmentationTabs.find(t => t.id === activeTab) || segmentationTabs[0];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Portfolio Intelligence"
          title="Segmented Strategies. Targeted Outcomes."
          subtitle="Precision account categorizations ensuring custom resolution pathways for every borrower profile rather than generic blast campaigns."
          centered
          className="mb-12"
        />

        {/* Tab Selection Bar */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {segmentationTabs.map((tab) => {
            const isSelected = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#0057A8] text-white shadow-md shadow-[#0057A8]/30 scale-102'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* Active Tab Content Card */}
        <div className="bg-[#F8FAFC] border-2 border-slate-200 rounded-3xl p-8 sm:p-10 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#EAF5E5] text-[#42A51F] flex items-center justify-center font-bold">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-[#0B1F33]">{currentTabData.name} Criteria</h3>
              <p className="text-xs text-slate-500">Structured Segmentation Vector</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {currentTabData.items.map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-[#42A51F] shrink-0 mt-0.5" />
                <span className="text-sm font-bold text-slate-800">{item}</span>
              </motion.div>
            ))}
          </div>

          {/* Source Target Disclosure Callout */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-sm font-bold text-[#0B1F33]">Tailored sample campaigns for specific client requirements</div>
              <p className="text-xs text-slate-500">Includes specialized early resolution protocols aimed at first-month recovery.</p>
            </div>

            <div className="flex items-center gap-2 bg-[#EAF5E5] px-4 py-2 rounded-xl text-xs font-bold text-[#42A51F] shrink-0">
              <Info className="w-4 h-4 text-[#42A51F]" />
              <span>3% Resolution Target (First Month - Source Reported)</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
