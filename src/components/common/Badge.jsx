import React from 'react';

export default function Badge({ children, variant = 'green', className = '' }) {
  const variants = {
    green: "bg-[#EAF5E5] text-[#42A51F] border-[#42A51F]/30",
    blue: "bg-blue-50 text-[#0057A8] border-[#0057A8]/30",
    navy: "bg-[#0B1F33] text-slate-200 border-slate-700",
    gray: "bg-slate-100 text-slate-700 border-slate-200"
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
