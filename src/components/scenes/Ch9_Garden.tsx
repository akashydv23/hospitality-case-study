"use client";

import React, { useState } from 'react';
import SceneContainer from '../ui/SceneContainer';
import FloatingCard from '../ui/FloatingCard';
import { ROI_SCENARIOS } from '@/lib/data';
import { motion } from 'framer-motion';

export default function Ch9_Garden() {
  const [rt1Occ, setRt1Occ] = useState<'5' | '10' | '15'>('10');
  const [rt2Bundle, setRt2Bundle] = useState<'25' | '40' | '60'>('40');
  const [rt3Bundle, setRt3Bundle] = useState<'0' | '1' | '2'>('1');

  // Calculate totals based on selection
  const rt1Gain = ROI_SCENARIOS.rt1_occ[rt1Occ].uplift;
  const rt2Gain = ROI_SCENARIOS.rt2_bundle[rt2Bundle].uplift;
  const rt3Gain = ROI_SCENARIOS.rt3_bundle[rt3Bundle].uplift;

  const totalGain = rt1Gain + rt2Gain + rt3Gain;

  return (
    <SceneContainer 
      id="ch-9" 
      bgImage="/assets/scenes/garden.jpg" 
      locationTag="THE GARDEN"
      align="center"
    >
      <FloatingCard className="w-full max-w-4xl p-8 bg-heritage-ivory-card/95">
        <div className="text-center mb-8">
          <h2 className="font-editorial text-3xl text-heritage-burgundy mb-2 uppercase">
            ROI Laboratory
          </h2>
          <p className="font-body text-heritage-charcoal text-sm">
            Adjust the strategy implementation targets to see the projected monthly revenue impact.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Controls */}
          <div className="flex-1 space-y-6 border-r border-heritage-sandstone pr-8">
            
            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <label className="font-data text-xs tracking-widest text-heritage-stone uppercase">RT1 Occupancy Uplift</label>
                <span className="font-editorial text-lg text-heritage-burgundy">+{rt1Occ}%</span>
              </div>
              <input 
                type="range" min="5" max="15" step="5" 
                value={rt1Occ} onChange={(e) => setRt1Occ(e.target.value as '5'|'10'|'15')}
                className="w-full accent-heritage-burgundy"
              />
              <div className="flex justify-between text-xs font-data text-heritage-stone/70">
                <span>Worst (5%)</span>
                <span>Best (15%)</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <label className="font-data text-xs tracking-widest text-heritage-stone uppercase">RT2 Bundle Adoption</label>
                <span className="font-editorial text-lg text-heritage-burgundy">{rt2Bundle}%</span>
              </div>
              <input 
                type="range" min="0" max="2" step="1" 
                value={['25', '40', '60'].indexOf(rt2Bundle)} 
                onChange={(e) => setRt2Bundle(['25', '40', '60'][Number(e.target.value)] as '25'|'40'|'60')}
                className="w-full accent-heritage-burgundy"
              />
              <div className="flex justify-between text-xs font-data text-heritage-stone/70">
                <span>Worst (25%)</span>
                <span>Best (60%)</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <label className="font-data text-xs tracking-widest text-heritage-stone uppercase">RT3 Upsell Tiers</label>
                <span className="font-editorial text-lg text-heritage-burgundy">{rt3Bundle} Added</span>
              </div>
              <input 
                type="range" min="0" max="2" step="1" 
                value={rt3Bundle} onChange={(e) => setRt3Bundle(e.target.value as '0'|'1'|'2')}
                className="w-full accent-heritage-burgundy"
              />
              <div className="flex justify-between text-xs font-data text-heritage-stone/70">
                <span>Conservative (0)</span>
                <span>Aggressive (2)</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="flex-1 flex flex-col justify-center gap-6">
            <div className="flex justify-between items-center bg-heritage-sandstone/20 p-4 rounded-sm">
              <span className="font-data text-xs tracking-widest text-heritage-stone uppercase">RT1 Pricing Strategy</span>
              <span className="font-editorial text-2xl text-heritage-teal">+₹{rt1Gain.toFixed(1)}L</span>
            </div>
            
            <div className="flex justify-between items-center bg-heritage-sandstone/20 p-4 rounded-sm">
              <span className="font-data text-xs tracking-widest text-heritage-stone uppercase">RT2/RT3 Bundling</span>
              <span className="font-editorial text-2xl text-heritage-teal">+₹{(rt2Gain + rt3Gain).toFixed(1)}L</span>
            </div>
            
            <div className="border-t-2 border-heritage-charcoal pt-6 mt-2 text-center">
              <span className="font-data text-xs tracking-widest text-heritage-stone uppercase block mb-1">Projected Net Monthly Uplift</span>
              <motion.div 
                key={totalGain}
                initial={{ scale: 1.1, color: '#174C4F' }}
                animate={{ scale: 1, color: '#252321' }}
                className="font-editorial text-6xl text-heritage-charcoal"
              >
                ₹{totalGain.toFixed(1)}L
              </motion.div>
            </div>
          </div>
        </div>
      </FloatingCard>
    </SceneContainer>
  );
}
