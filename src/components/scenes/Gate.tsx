"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface GateProps {
  onEnter: () => void;
}

export default function Gate({ onEnter }: GateProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleEnter = () => {
    setIsOpen(true);
    setTimeout(() => {
      onEnter();
    }, 2000); // Wait for doors to open before changing state
  };

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden perspective-[1200px]">
      
      {/* Background image behind the doors (the hotel reveal) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/scenes/foyer.jpg')" }}
      />
      
      {/* Dark overlay that fades out when doors open */}
      <motion.div 
        className="absolute inset-0 bg-black/80"
        initial={{ opacity: 1 }}
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 2 }}
      />

      {/* Left Door */}
      <motion.div
        className="absolute top-0 left-0 w-1/2 h-full bg-heritage-charcoal border-r border-heritage-gold/30 shadow-[inset_-20px_0_50px_rgba(0,0,0,0.8)] origin-left flex items-center justify-end pr-8"
        initial={{ rotateY: 0 }}
        animate={{ rotateY: isOpen ? -105 : 0 }}
        transition={{ duration: 2.5, ease: [0.25, 1, 0.5, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Door details */}
        <div className="w-3/4 h-[80%] border-2 border-heritage-gold/20 rounded-t-full opacity-50" />
      </motion.div>

      {/* Right Door */}
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full bg-heritage-charcoal border-l border-heritage-gold/30 shadow-[inset_20px_0_50px_rgba(0,0,0,0.8)] origin-right flex items-center justify-start pl-8"
        initial={{ rotateY: 0 }}
        animate={{ rotateY: isOpen ? 105 : 0 }}
        transition={{ duration: 2.5, ease: [0.25, 1, 0.5, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Door details */}
        <div className="w-3/4 h-[80%] border-2 border-heritage-gold/20 rounded-t-full opacity-50" />
      </motion.div>

      {/* Center UI */}
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center"
        animate={{ opacity: isOpen ? 0 : 1, scale: isOpen ? 0.9 : 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="font-editorial text-5xl md:text-7xl text-heritage-ivory mb-4 tracking-wider text-center">
          The Grand Resort
        </h1>
        <p className="font-body text-heritage-sandstone text-lg tracking-widest mb-12 uppercase">
          A Journey into Hospitality Data
        </p>
        
        <button 
          onClick={handleEnter}
          disabled={isOpen}
          className="group relative px-8 py-3 bg-transparent border border-heritage-gold text-heritage-gold font-body tracking-[0.2em] uppercase text-sm transition-all hover:bg-heritage-gold/10 hover:shadow-[0_0_20px_rgba(181,138,69,0.3)] disabled:opacity-0"
        >
          Enter the Property
        </button>
      </motion.div>

    </div>
  );
}
