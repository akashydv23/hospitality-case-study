import React from 'react';
import { motion } from 'framer-motion';
import SceneContainer from '../ui/SceneContainer';
import FloatingCard from '../ui/FloatingCard';
import StatNumber from '../ui/StatNumber';
import { PROJECT } from '@/lib/data';

export default function Ch1_Courtyard() {
  return (
    <SceneContainer 
      id="ch-1" 
      bgImage="/assets/scenes/courtyard.jpg" 
      locationTag="THE COURTYARD"
      align="center"
    >
      <FloatingCard className="w-full max-w-4xl flex flex-col md:flex-row gap-8 justify-between items-center bg-heritage-ivory-card/90 backdrop-blur-md">
        
        {/* Left side - The System */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="font-editorial text-4xl text-heritage-burgundy mb-2">THE SYSTEM</h2>
          <p className="font-body text-heritage-stone mb-6">
            A nationwide footprint of {PROJECT.properties.length} luxury and business properties across {PROJECT.cities.length} major Indian cities.
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {PROJECT.cities.map((city, i) => (
              <motion.span 
                key={city}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="px-4 py-1 border border-heritage-teal/30 rounded-full font-data text-xs text-heritage-teal uppercase tracking-widest bg-heritage-teal/5"
              >
                {city}
              </motion.span>
            ))}
          </div>
        </div>
        
        {/* Vertical divider on desktop */}
        <div className="hidden md:block w-px h-32 bg-heritage-sandstone" />
        
        {/* Right side - The Scale */}
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <span className="font-data text-sm text-heritage-stone tracking-widest uppercase mb-2">
            Historical Records
          </span>
          <div className="font-editorial text-6xl text-heritage-charcoal flex items-baseline gap-1">
            <StatNumber value={PROJECT.bookings} suffix="+" duration={1.5} />
          </div>
          <span className="font-body text-sm text-heritage-stone mt-2">
            across {PROJECT.datasets.length} operational datasets
          </span>
        </div>
        
      </FloatingCard>
    </SceneContainer>
  );
}
