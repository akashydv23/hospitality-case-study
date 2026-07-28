import React from 'react';

export default function JharokhaFrame() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 text-heritage-burgundy" preserveAspectRatio="none">
      <rect x="8" y="8" width="calc(100% - 16px)" height="calc(100% - 16px)" fill="none" stroke="currentColor" strokeWidth="1" />
      <rect x="12" y="12" width="calc(100% - 24px)" height="calc(100% - 24px)" fill="none" stroke="currentColor" strokeWidth="0.5" />
      
      {/* Corner accents */}
      <circle cx="10" cy="10" r="2" fill="currentColor" />
      <circle cx="calc(100% - 10px)" cy="10" r="2" fill="currentColor" />
      <circle cx="10" cy="calc(100% - 10px)" r="2" fill="currentColor" />
      <circle cx="calc(100% - 10px)" cy="calc(100% - 10px)" r="2" fill="currentColor" />
    </svg>
  );
}
