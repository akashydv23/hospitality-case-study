"use client";

import React, { useState } from 'react';
import SceneContainer from '../ui/SceneContainer';
import { DASHBOARDS } from '@/lib/data';
import ImageModal from '../ui/ImageModal';

export default function Ch7_Terrace() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <SceneContainer 
        id="ch-7" 
        bgImage="/assets/scenes/terrace.jpg" 
        locationTag="THE TERRACE"
        align="center"
      >
        <div className="w-full flex flex-col items-center">
          <div className="text-center mb-10 max-w-2xl bg-heritage-charcoal/80 p-6 backdrop-blur-sm rounded-sm border border-heritage-stone/30">
            <h2 className="font-editorial text-4xl text-heritage-ivory mb-2 uppercase">
              The Evidence
            </h2>
            <p className="font-body text-heritage-sandstone">
              All 9 dashboards from the final submission, recreated in a clean, accessible format.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {DASHBOARDS.map((db) => (
              <button 
                onClick={() => setSelectedImage(`/${db.file}`)}
                key={db.id}
                className="relative aspect-video bg-black rounded-sm overflow-hidden group cursor-pointer border border-heritage-stone/30 shadow-lg block text-left"
              >
                {/* Fallback image style since actual images might be in the assets folder */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  style={{ backgroundImage: `url('/${db.file}')` }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <span className="font-editorial text-xl text-heritage-ivory mb-1">
                    {db.title}
                  </span>
                  <span className="font-data text-xs tracking-widest text-heritage-gold uppercase opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                    → View Dashboard
                  </span>
                </div>
              </button>
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
