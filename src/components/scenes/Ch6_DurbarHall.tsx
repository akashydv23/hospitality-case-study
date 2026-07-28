"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SceneContainer from '../ui/SceneContainer';
import { PIVOT_THEMES } from '@/lib/data';
import ImageModal from '../ui/ImageModal';

export default function Ch6_DurbarHall() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <SceneContainer 
        id="ch-6" 
        bgImage="/assets/scenes/durbar-hall.jpg" 
        locationTag="THE DURBAR HALL"
        align="center"
      >
        <div className="w-full flex flex-col items-center max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="font-editorial text-4xl text-heritage-ivory mb-2 tracking-wide uppercase shadow-black drop-shadow-md">
              The Investigation Paths
            </h2>
            <p className="font-body text-heritage-sandstone">
              20 distinct pivot tables were constructed across 4 core themes to isolate the variables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {PIVOT_THEMES.map((theme, i) => (
              <motion.div
                key={theme.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-heritage-charcoal/80 border border-heritage-stone/30 p-6 flex flex-col backdrop-blur-sm group hover:border-heritage-gold/50 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="font-data text-2xl text-heritage-gold font-light">{theme.code}</span>
                  <span className="font-data text-xs px-2 py-1 bg-heritage-ivory/10 text-heritage-ivory rounded-full tracking-widest">
                    {theme.stat}
                  </span>
                </div>
                <h3 className="font-editorial text-2xl text-heritage-ivory mb-2 uppercase group-hover:text-heritage-gold transition-colors">
                  {theme.title}
                </h3>
                <p className="font-body text-sm text-heritage-sandstone mb-4 flex-grow">
                  {theme.desc}
                </p>
                <div className="flex justify-between items-center text-xs font-data tracking-widest text-heritage-stone mt-4 pt-4 border-t border-heritage-stone/20">
                  <span>DASHBOARD LINK</span>
                  <button 
                    onClick={() => setSelectedImage(`/assets/${theme.dashboard}.png`)}
                    className="text-heritage-teal hover:text-heritage-gold transition-colors uppercase"
                  >
                    → {theme.dashboard}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SceneContainer>
      
      <ImageModal 
        imageUrl={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
    </>
  );
}
