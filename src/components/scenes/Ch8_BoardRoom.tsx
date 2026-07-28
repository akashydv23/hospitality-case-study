"use client";

import React from 'react';
import SceneContainer from '../ui/SceneContainer';
import FloatingCard from '../ui/FloatingCard';
import { ROOM_STRATEGIES } from '@/lib/data';

export default function Ch8_BoardRoom() {
  return (
    <SceneContainer 
      id="ch-8" 
      bgImage="/assets/scenes/board-room.jpg" 
      locationTag="THE BOARD ROOM"
      align="center"
    >
      <div className="w-full max-w-5xl flex flex-col items-center">
        <h2 className="font-editorial text-4xl text-heritage-ivory mb-8 uppercase text-center shadow-black drop-shadow-md">
          Strategic Interventions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {ROOM_STRATEGIES.map((strat) => (
            <FloatingCard key={strat.category} className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="font-editorial text-2xl text-heritage-burgundy block">{strat.category}</span>
                  <span className="font-data text-xs text-heritage-stone uppercase tracking-wider">{strat.name}</span>
                </div>
                <span className="font-body text-xs md:text-sm font-medium bg-heritage-burgundy/10 text-heritage-burgundy px-3 py-1 rounded-sm text-right">
                  {strat.headline}
                </span>
              </div>
              
              <div className="font-body text-sm text-heritage-charcoal border-t border-heritage-sandstone pt-4 mb-4">
                <p className="italic text-heritage-stone mb-2">Rationale:</p>
                <p>{strat.rationale}</p>
              </div>

              <div className="grid grid-cols-3 gap-2 border-t border-heritage-sandstone/50 pt-4 mt-auto">
                <div>
                  <span className="block font-editorial text-xl text-heritage-teal">{strat.avgROI}</span>
                  <span className="font-data text-[10px] text-heritage-stone uppercase tracking-widest">Avg ROI</span>
                </div>
                <div>
                  <span className="block font-editorial text-xl text-heritage-teal">{strat.payback}</span>
                  <span className="font-data text-[10px] text-heritage-stone uppercase tracking-widest">Payback</span>
                </div>
                <div>
                  <span className="block font-editorial text-xl text-heritage-teal">+₹{strat.totalUplift}L</span>
                  <span className="font-data text-[10px] text-heritage-stone uppercase tracking-widest">Est. Uplift</span>
                </div>
              </div>
            </FloatingCard>
          ))}
        </div>
      </div>
    </SceneContainer>
  );
}
