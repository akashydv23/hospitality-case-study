import React from 'react';
import SceneContainer from '../ui/SceneContainer';
import FloatingCard from '../ui/FloatingCard';
import { PROJECT } from '@/lib/data';

export default function Ch0_Foyer() {
  return (
    <SceneContainer 
      id="ch-0" 
      bgImage="/assets/scenes/foyer.jpg" 
      locationTag="THE FOYER"
      align="center"
    >
      <FloatingCard className="max-w-2xl text-center items-center">
        <h1 className="font-editorial text-4xl text-heritage-burgundy mb-2 uppercase">
          {PROJECT.title}
        </h1>
        <div className="w-16 h-[1px] bg-heritage-gold my-4" />
        <p className="font-body text-heritage-stone mb-6">
          A data-driven investigation into revenue leakage, occupancy gaps, and platform ROI across 7 properties and {PROJECT.bookings.toLocaleString()} bookings.
        </p>
        
        <div className="flex flex-col gap-1 items-center">
          <span className="font-data text-xs text-heritage-charcoal uppercase tracking-widest">
            Prepared By
          </span>
          <span className="font-body text-sm font-medium">
            {PROJECT.author}
          </span>
        </div>
      </FloatingCard>
    </SceneContainer>
  );
}
