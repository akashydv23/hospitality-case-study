import React from 'react';
import SceneContainer from '../ui/SceneContainer';
import FloatingCard from '../ui/FloatingCard';

export default function Ch4_DrawingRoom() {
  return (
    <SceneContainer 
      id="ch-4" 
      bgImage="/assets/scenes/drawing-room.jpg" 
      locationTag="THE DRAWING ROOM"
      align="right"
    >
      <FloatingCard className="w-full max-w-md md:mr-12">
        <h2 className="font-editorial text-3xl text-heritage-burgundy mb-6 uppercase">
          Where is the revenue leaking?
        </h2>
        
        <p className="font-body text-heritage-charcoal mb-4">
          To stop a leak, you first have to find it. We couldn't just look at overall occupancy.
        </p>
        <p className="font-body text-heritage-charcoal mb-8">
          We needed to break down the performance across cities and room categories to find exactly where our pricing strategy was failing to capture value.
        </p>

        <div className="border-l-2 border-heritage-gold pl-6 py-2">
          <p className="font-editorial text-xl text-heritage-stone italic">
            "The data holds the map. We just need to read it."
          </p>
        </div>
      </FloatingCard>
    </SceneContainer>
  );
}
