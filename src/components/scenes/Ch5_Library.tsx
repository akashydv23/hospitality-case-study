"use client";

import React, { useState } from 'react';
import SceneContainer from '../ui/SceneContainer';
import FloatingCard from '../ui/FloatingCard';
import { REVPAR, ADR, OCCUPANCY, LEAKAGE, PROJECT } from '@/lib/data';
import { cn } from '../ui/FloatingCard';

type CityName = "Mumbai" | "Delhi" | "Bangalore" | "Hyderabad";
type RoomType = "RT1" | "RT2" | "RT3" | "RT4";

const kpiInsights: Record<CityName, string> = {
  Mumbai: 'Mumbai has the highest total capacity (especially RT2) and the highest ADR for RT3. However, it also shows the highest weekday revenue leakage — concentrated in Elite rooms.',
  Delhi: 'Delhi leads in occupancy (64.02% average) and shows the strongest RevPAR for RT3 and RT4. Atliq Grands and Palace are the priority targets for RT1 weekday pricing.',
  Bangalore: 'Bangalore has the lowest utilisation rate (58.89% overall). RT3 Premium rooms are significantly underperforming relative to their ADR — a bundling opportunity worth ₹8.4L.',
  Hyderabad: 'Hyderabad shows the lowest RevPAR and ADR across all categories — indicative of a price-sensitive market. Operational fixes at Atliq Grands and Palace are the highest leverage actions.'
};

export default function Ch5_Library() {
  const [activeCity, setActiveCity] = useState<CityName>("Mumbai");

  return (
    <SceneContainer 
      id="ch-5" 
      bgImage="/assets/scenes/library.jpg" 
      locationTag="THE LIBRARY"
      align="center"
    >
      <FloatingCard className="w-full max-w-4xl px-4 md:px-12 bg-heritage-ivory-card/95">
        <h2 className="font-editorial text-3xl text-heritage-burgundy mb-6 text-center uppercase">
          KPI Benchmarks by City
        </h2>

        {/* City Tabs */}
        <div className="flex justify-center border-b border-heritage-sandstone mb-8">
          {PROJECT.cities.map((city) => (
            <button
              key={city}
              onClick={() => setActiveCity(city as CityName)}
              className={cn(
                "px-6 py-3 font-data text-xs tracking-widest uppercase transition-colors relative",
                activeCity === city ? "text-heritage-burgundy font-medium" : "text-heritage-stone hover:text-heritage-charcoal"
              )}
            >
              {city}
              {activeCity === city && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-heritage-burgundy" />
              )}
            </button>
          ))}
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left font-data text-sm">
            <thead>
              <tr className="border-b-2 border-heritage-sandstone text-heritage-charcoal">
                <th className="py-4 font-normal tracking-wider">CATEGORY</th>
                <th className="py-4 font-normal tracking-wider">RevPAR</th>
                <th className="py-4 font-normal tracking-wider">ADR</th>
                <th className="py-4 font-normal tracking-wider">OCCUPANCY</th>
                <th className="py-4 font-normal tracking-wider">LEAKAGE</th>
              </tr>
            </thead>
            <tbody>
              {(["RT1", "RT2", "RT3", "RT4"] as RoomType[]).map((rt) => {
                const roomInfo = LEAKAGE.find(l => l.category === rt);
                const revpar = REVPAR[activeCity][rt];
                const adr = ADR[activeCity][rt];
                const occ = OCCUPANCY[activeCity][rt];
                const leak = roomInfo?.pct || 0;

                return (
                  <tr key={rt} className="border-b border-heritage-sandstone/50 hover:bg-heritage-sandstone/10 transition-colors">
                    <td className="py-4">
                      <span className="font-editorial text-lg text-heritage-burgundy">{rt}</span><br />
                      <span className="text-xs text-heritage-charcoal">{roomInfo?.name}</span>
                    </td>
                    <td className="py-4 text-heritage-charcoal">₹{revpar.toFixed(0)}</td>
                    <td className="py-4 text-heritage-charcoal">₹{adr.toFixed(0)}</td>
                    <td className="py-4 text-heritage-charcoal">{occ.toFixed(1)}%</td>
                    <td className="py-4 font-medium text-heritage-leakage">{leak}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Insight Box */}
        <div className="mt-8 p-4 bg-heritage-sandstone/20 border-l-2 border-heritage-teal">
          <p className="font-body text-sm text-heritage-charcoal italic">
            "{kpiInsights[activeCity]}"
          </p>
        </div>

      </FloatingCard>
    </SceneContainer>
  );
}
