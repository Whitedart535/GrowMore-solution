import React from 'react';

/**
 * Official Brand Logo Component for Grow More Solution.
 * Preserves the exact official brand logo reference asset without redesign,
 * distortion, or artificial CSS effects. Ensures 100% aspect ratio retention
 * and responsive scaling across mobile, tablet, and desktop.
 */
export default function Logo({ 
  className, 
  size = "md", 
  style 
}) {
  // Responsive, balanced header & section height mappings
  const sizeClasses = {
    sm: "h-10 sm:h-12",
    md: "h-12 sm:h-14 lg:h-16",  // Standard navbar display (48px - 64px)
    lg: "h-14 sm:h-16 lg:h-18",  // Footer & highlight sections
    xl: "h-20 sm:h-24 lg:h-28",  // Hero / Banner display
  };

  const activeSize = className || sizeClasses[size] || sizeClasses.md;

  return (
    <div 
      className={`inline-flex items-center justify-center select-none shrink-0 ${activeSize}`}
      style={style}
    >
      <img
        src="/logo.png"
        alt="Grow More Solution Logo"
        className="w-auto h-full max-h-full object-contain block transition-opacity duration-200"
        style={{
          aspectRatio: '480 / 345',
          objectFit: 'contain',
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
