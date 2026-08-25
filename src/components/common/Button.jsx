import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Button({
  children,
  variant = 'primary', // 'primary', 'green', 'outline', 'dark', 'ghost'
  size = 'md', // 'sm', 'md', 'lg'
  icon = true,
  onClick,
  href,
  className = '',
  type = 'button'
}) {
  const baseStyle = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 active:scale-98 cursor-pointer shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  
  const variants = {
    primary: "bg-[#0057A8] hover:bg-[#004687] text-white shadow-blue-900/15 hover:shadow-md hover:shadow-[#0057A8]/20 focus-visible:ring-[#0057A8]",
    green: "bg-[#16A34A] hover:bg-[#15803D] text-white shadow-emerald-900/15 hover:shadow-md hover:shadow-[#16A34A]/20 focus-visible:ring-[#16A34A]",
    outline: "bg-white border-2 border-[#0057A8] text-[#0057A8] hover:bg-[#0057A8] hover:text-white focus-visible:ring-[#0057A8]",
    dark: "bg-[#0B1F33] border border-slate-700 hover:border-[#0057A8] text-white hover:bg-[#112942] focus-visible:ring-slate-500",
    ghost: "bg-transparent text-slate-700 hover:bg-slate-100 hover:text-[#0057A8] focus-visible:ring-slate-300"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-2.5"
  };

  const combinedClasses = `${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`group ${combinedClasses}`}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`group ${combinedClasses}`}>
      {content}
    </button>
  );
}
