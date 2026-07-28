"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface SceneContainerProps {
  id: string;
  bgImage: string;
  locationTag: string;
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
}

export default function SceneContainer({
  id,
  bgImage,
  locationTag,
  children,
  align = 'center',
}: SceneContainerProps) {
  // Use scroll position to add a subtle parallax/scale to the background
  const { scrollYProgress } = useScroll();
  
  // This will be overridden by the main orchestrator for opacity fading between scenes,
  // but we can add a subtle scale effect here to simulate "walking into" the room
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const alignClass = 
    align === 'left' ? 'items-start' : 
    align === 'right' ? 'items-end' : 
    'items-center';

  return (
    <section id={id} className="relative w-full min-h-[100svh] overflow-hidden snap-start flex justify-center items-center py-20 px-4 md:px-12">
      <motion.div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('${bgImage}')`, scale }}
      />
      
      {/* Dark veil to make text readable */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Location tag floating at the top */}
      <div className="absolute top-8 left-0 w-full text-center z-20">
        <span className="font-data tracking-[0.2em] text-xs text-heritage-ivory/80 uppercase">
          {locationTag}
        </span>
      </div>

      <div className={`relative z-20 w-full max-w-7xl flex flex-col ${alignClass}`}>
        {children}
      </div>
    </section>
  );
}
