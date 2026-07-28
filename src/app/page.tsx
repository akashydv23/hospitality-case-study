"use client";

import { useState } from "react";
import Gate from "@/components/scenes/Gate";
import Ch0_Foyer from "@/components/scenes/Ch0_Foyer";
import Ch1_Courtyard from "@/components/scenes/Ch1_Courtyard";
import Ch2_Corridor from "@/components/scenes/Ch2_Corridor";
import Ch3_Watchtower from "@/components/scenes/Ch3_Watchtower";
import Ch4_DrawingRoom from "@/components/scenes/Ch4_DrawingRoom";
import Ch5_Library from "@/components/scenes/Ch5_Library";
import Ch6_DurbarHall from "@/components/scenes/Ch6_DurbarHall";
import Ch7_Terrace from "@/components/scenes/Ch7_Terrace";
import Ch8_BoardRoom from "@/components/scenes/Ch8_BoardRoom";
import Ch9_Garden from "@/components/scenes/Ch9_Garden";
import Ch10_Ballroom from "@/components/scenes/Ch10_Ballroom";

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <main className="relative w-full bg-[#1C0F06] text-heritage-ivory overflow-x-hidden">
      {!hasEntered && <Gate onEnter={() => setHasEntered(true)} />}

      {/* Main Scroll Container */}
      {/* We use snap-y snap-mandatory to lock scenes into full viewport view */}
      <div 
        className="relative h-screen w-full overflow-y-auto snap-y snap-mandatory"
        style={{ opacity: hasEntered ? 1 : 0, transition: 'opacity 2s ease' }}
      >
        <Ch0_Foyer />
        <Ch1_Courtyard />
        <Ch2_Corridor />
        <Ch3_Watchtower />
        <Ch4_DrawingRoom />
        <Ch5_Library />
        <Ch6_DurbarHall />
        <Ch7_Terrace />
        <Ch8_BoardRoom />
        <Ch9_Garden />
        <Ch10_Ballroom />
      </div>
    </main>
  );
}
