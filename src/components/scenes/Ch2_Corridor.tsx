"use client";

import React, { useState, useEffect } from 'react';
import SceneContainer from '../ui/SceneContainer';
import { motion } from 'framer-motion';

function RoomGrid() {
  const [cells, setCells] = useState<string[]>([]);

  useEffect(() => {
    const grid = Array(100).fill('available');
    
    for (let i = 0; i < 68; i++) {
      grid[i] = 'occupied';
    }
    for (let i = 68; i < 93; i++) {
      grid[i] = 'leaked';
    }
    
    // Shuffle the grid to make it look organic
    for (let i = grid.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [grid[i], grid[j]] = [grid[j], grid[i]];
    }
    
    setCells(grid);
  }, []);

  if (cells.length === 0) {
    // Render a skeleton grid for SSR to match the client before useEffect fires
    return (
      <div className="grid grid-cols-10 gap-1 sm:gap-2 max-w-2xl mx-auto my-8">
        {Array(100).fill(0).map((_, i) => (
          <div key={i} className="aspect-square rounded-sm bg-white/10 opacity-80" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-10 gap-1 sm:gap-2 max-w-2xl mx-auto my-8">
      {cells.map((status, i) => {
        let bgColor = "bg-white/10";
        if (status === 'occupied') bgColor = "bg-heritage-gold";
        if (status === 'leaked') bgColor = "bg-heritage-leakage";

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.4, 
              delay: i * 0.015,
              ease: "easeOut"
            }}
            className={`aspect-square rounded-sm ${bgColor} opacity-80`}
          />
        );
      })}
    </div>
  );
}

export default function Ch2_Corridor() {
  return (
    <SceneContainer 
      id="ch-2" 
      bgImage="/assets/scenes/corridor.jpg" 
      locationTag="THE GUEST CORRIDOR"
    >
      <div className="w-full flex flex-col items-center">
        <div className="text-center mb-6">
          <h2 className="font-editorial text-4xl text-heritage-ivory mb-2 tracking-wide uppercase shadow-black drop-shadow-md">
            Rooms as Data
          </h2>
          <p className="font-data text-xs tracking-widest text-heritage-sandstone uppercase bg-black/40 px-4 py-1 rounded-full">
            230,765 booking records · 100 representative room nights
          </p>
        </div>

        <div className="w-full max-w-5xl bg-heritage-charcoal/80 p-6 md:p-10 rounded-md border border-heritage-stone/30 backdrop-blur-md">
          
          <RoomGrid />

          <div className="flex flex-wrap justify-center gap-6 mb-10 font-body text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-heritage-ivory">
              <span className="w-3 h-3 rounded-full bg-heritage-gold shadow-[0_0_8px_rgba(181,138,69,0.5)]" /> OCCUPIED (68%)
            </div>
            <div className="flex items-center gap-2 text-heritage-stone">
              <span className="w-3 h-3 rounded-full bg-white/20" /> AVAILABLE (7%)
            </div>
            <div className="flex items-center gap-2 text-heritage-ivory">
              <span className="w-3 h-3 rounded-full bg-heritage-leakage shadow-[0_0_8px_rgba(192,54,78,0.5)]" /> LEAKED (25%)
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-t border-heritage-stone/30 pt-8">
            <div className="flex flex-col">
              <span className="font-editorial text-4xl text-heritage-ivory">68.2%</span>
              <span className="font-data text-xs text-heritage-stone mt-2 tracking-widest">AVG OCCUPANCY</span>
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-4xl text-heritage-leakage">24.7%</span>
              <span className="font-data text-xs text-heritage-stone mt-2 tracking-widest">REVENUE LEAKAGE</span>
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-4xl text-heritage-ivory">₹13.7L</span>
              <span className="font-data text-xs text-heritage-stone mt-2 tracking-widest">MONTHLY LEAKAGE</span>
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-4xl text-heritage-ivory">57K+</span>
              <span className="font-data text-xs text-heritage-stone mt-2 tracking-widest">LOST ROOM NIGHTS</span>
            </div>
          </div>
        </div>
      </div>
    </SceneContainer>
  );
}
