import React from 'react';
import SceneContainer from '../ui/SceneContainer';
import { PROJECT } from '@/lib/data';
import StatNumber from '../ui/StatNumber';

export default function Ch10_Ballroom() {
  return (
    <SceneContainer 
      id="ch-10" 
      bgImage="/assets/scenes/ballroom.jpg" 
      locationTag="THE BALLROOM"
      align="center"
    >
      <div className="w-full flex flex-col items-center text-center max-w-3xl px-6">
        <h2 className="font-data tracking-widest text-sm text-heritage-gold uppercase mb-6 drop-shadow-md">
          The Final Impact
        </h2>
        
        <div className="flex items-baseline justify-center gap-2 mb-8 drop-shadow-lg">
          <span className="font-editorial text-7xl md:text-9xl text-heritage-ivory">₹</span>
          <span className="font-editorial text-7xl md:text-9xl text-heritage-ivory">
            <StatNumber value={PROJECT.totalUplift} duration={2.5} />
          </span>
          <span className="font-editorial text-5xl md:text-7xl text-heritage-ivory">L</span>
        </div>

        <p className="font-body text-xl text-heritage-sandstone mb-12 drop-shadow-md">
          Projected net monthly revenue uplift across the {PROJECT.properties.length} core properties.
        </p>

        <div className="w-24 h-[1px] bg-heritage-gold/50 mb-12" />

        <div className="flex flex-col items-center gap-2">
          <span className="font-data text-xs tracking-widest text-heritage-sandstone uppercase">
            A Case Study By
          </span>
          <span className="font-editorial text-2xl text-heritage-ivory">
            {PROJECT.author}
          </span>
        </div>
      </div>
    </SceneContainer>
  );
}
