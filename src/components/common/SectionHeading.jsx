import React from 'react';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = false,
  dark = false,
  className = ''
}) {
  return (
    <div className={`space-y-4 max-w-3xl ${centered ? 'mx-auto text-center' : ''} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
          dark
            ? 'bg-[#0057A8]/25 text-[#60A5FA] border border-[#0057A8]/50'
            : 'bg-emerald-50 text-[#15803D] border border-emerald-200/80'
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${dark ? 'bg-[#60A5FA]' : 'bg-[#16A34A]'}`}></span>
          {badge}
        </div>
      )}
      {title && (
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${
          dark ? 'text-white' : 'text-[#0B1F33]'
        }`}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed ${
          dark ? 'text-slate-300' : 'text-[#475569]'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
