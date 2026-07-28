import React from 'react';
import { motion } from 'framer-motion';
import SceneContainer from '../ui/SceneContainer';
import FloatingCard from '../ui/FloatingCard';

export default function Ch3_Watchtower() {
  return (
    <SceneContainer 
      id="ch-3" 
      bgImage="/assets/scenes/watchtower.jpg" 
      locationTag="THE WATCHTOWER"
      align="center"
    >
      <FloatingCard className="w-full max-w-2xl text-center">
        <h2 className="font-data tracking-[0.2em] text-xs text-heritage-burgundy uppercase mb-6">
          WHAT WE SAW FROM ABOVE
        </h2>
        
        <p className="font-editorial text-3xl text-heritage-charcoal mb-8">
          Not every booking becomes realized revenue.
        </p>

        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {["CANCELLATIONS", "NO-SHOWS", "FAILED REALIZATION"].map((tag, i) => (
            <motion.div 
              key={tag}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="px-4 py-2 border border-heritage-teal/40 text-heritage-teal font-body text-sm rounded-sm bg-heritage-teal/5"
            >
              {tag}
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-8 border-t border-heritage-sandstone pt-8 text-left max-w-md mx-auto">
          <div>
            <span className="block font-editorial text-4xl text-heritage-charcoal font-medium">109,796</span>
            <span className="font-data text-xs text-heritage-stone uppercase tracking-wider">SUCCESSFUL STAYS</span>
          </div>
          <div>
            <span className="block font-editorial text-4xl text-heritage-leakage font-medium">57,204</span>
            <span className="font-data text-xs text-heritage-stone uppercase tracking-wider">LOST BOOKINGS</span>
          </div>
        </div>
      </FloatingCard>
    </SceneContainer>
  );
}
