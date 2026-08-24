import React from 'react';

/**
 * Official Logo Component for Grow More Solution.
 * Renders the official brand logo with prominent sizing, subtle hover glows, 
 * and drop-shadow depth while preserving the original logo graphic.
 */
export default function Logo({ 
  className, 
  size = "md", 
  variant = "light" 
}) {
  // Pre-configured prominent size maps if specific size prop is provided
  const sizeClasses = {
    sm: "h-10 sm:h-12",
    md: "h-14 sm:h-16 lg:h-20",  // Increased, attractive size for navbar & headers
    lg: "h-18 sm:h-22 lg:h-28",  // Extra bold for hero or showcase banners
    xl: "h-24 sm:h-32 lg:h-40",  // Display banner size
  };

  const activeSize = className || sizeClasses[size] || sizeClasses.md;

  return (
    <div className={`inline-flex items-center select-none logo-glow-wrapper ${activeSize}`}>
      <img
        src="/logo.svg"
        alt="Grow More Solution Logo"
        className="h-full w-auto object-contain filter drop-shadow-md transition-all duration-300 transform"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/src/assets/logo.svg";
        }}
      />
    </div>
  );
}
