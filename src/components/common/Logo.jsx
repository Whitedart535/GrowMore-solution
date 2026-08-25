import React from 'react';

/**
 * Official Logo Component for Grow More Solution.
 * Renders the official brand logo with prominent sizing, subtle hover glows, 
 * and drop-shadow depth while preserving the original logo graphic.
 */
export default function Logo({ 
  className, 
  size = "md", 
  variant = "light",
  style
}) {
  // Pre-configured prominent size maps if specific size prop is provided
  const sizeClasses = {
    sm: "h-16 sm:h-18",
    md: "h-20 sm:h-24 lg:h-28",  // Extra large & prominent for headers
    lg: "h-28 sm:h-34 lg:h-40",  // Bold showcase size
    xl: "h-36 sm:h-44 lg:h-56",  // Banner size
  };

  const activeSize = className || sizeClasses[size] || sizeClasses.md;

  return (
    <div 
      className={`inline-flex items-center select-none shrink-0 ${activeSize}`}
      style={style}
    >
      <img
        src="/logo.png"
        alt="Grow More Solution Logo"
        className="h-full w-auto object-contain transition-all duration-300 transform group-hover:scale-105"
        style={{
          imageRendering: 'high-quality',
          WebkitFontSmoothing: 'antialiased',
        }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/src/assets/logo.png";
        }}
      />
    </div>
  );
}
