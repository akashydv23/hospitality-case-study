// ─── DATA.JS — Complete project data from Final_Report_CAC ──────────────────
// Source of Truth: Summer Consulting Program 2025, CAC IIT Guwahati
// Team Adhirith | Team Leader: Akash Yadav

export const CHAPTERS = [
  'ARRIVAL', 'THE SYSTEM', 'ROOMS AS DATA', 'LEAKAGE', 'THE QUESTION',
  'KPI BENCHMARKS', 'INVESTIGATION', 'DASHBOARDS', 'STRATEGY', 'ROI LAB', 'IMPACT'
];

export const PROJECT = {
  title: 'Optimising Revenue Leakage & Profitability in the Hospitality Sector',
  author: 'Akash Yadav',
  institute: 'Bundelkhand Institute of Engineering & Technology, Jhansi',
  club: 'Consulting & Analytics Club, IIT Guwahati',
  program: 'Summer Consulting Program 2025',
  bookings: 230000,
  cities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad'],
  properties: ['Atliq Exotica', 'Atliq Palace', 'Atliq Blu', 'Atliq Bay', 'Atliq Grands', 'Atliq City', 'Atliq Seasons'],
  datasets: ['fact_bookings', 'fact_aggregated_bookings', 'dim_hotels', 'dim_rooms', 'dim_date'],
  totalUplift: 98.0,
  pivotCount: 20
};

// ── KPI BENCHMARKS (from report Section 7) ──────────────────────────────────

export const REVPAR = {
  Mumbai:    { RT1: 366.64, RT2: 329.48, RT3: 793.13, RT4: 2393.31, overall: 691.60 },
  Delhi:     { RT1: 281.81, RT2: 348.54, RT3: 864.99, RT4: 2721.70, overall: 681.16 },
  Bangalore: { RT1: 281.10, RT2: 311.50, RT3: 623.47, RT4: 2734.95, overall: 602.19 },
  Hyderabad: { RT1: 185.02, RT2: 218.10, RT3: 426.61, RT4: 1020.39, overall: 379.64 }
};

export const ADR = {
  Mumbai:    { RT1: 638.04,  RT2: 571.83,  RT3: 1372.13, RT4: 4054.99, overall: 1187.86 },
  Delhi:     { RT1: 462.45,  RT2: 574.07,  RT3: 1415.79, RT4: 4319.59, overall: 1102.33 },
  Bangalore: { RT1: 495.15,  RT2: 510.76,  RT3: 1144.91, RT4: 4308.71, overall: 1055.25 },
  Hyderabad: { RT1: 319.90,  RT2: 373.46,  RT3: 1009.02, RT4: 3046.89, overall: 806.12  }
};

export const OCCUPANCY = {
  Mumbai:    { RT1: 62.57, RT2: 61.68, RT3: 61.02, RT4: 63.24, overall: 61.95 },
  Delhi:     { RT1: 63.81, RT2: 63.26, RT3: 64.18, RT4: 66.96, overall: 64.02 },
  Bangalore: { RT1: 56.98, RT2: 60.98, RT3: 54.45, RT4: 63.48, overall: 58.89 },
  Hyderabad: { RT1: 57.28, RT2: 58.01, RT3: 56.37, RT4: 58.70, overall: 57.63 }
};

export const LEAKAGE = [
  { category: 'RT1', name: 'Standard',           realized: 309.6, leakage: 53.96,  pct: 18.06 },
  { category: 'RT2', name: 'Elite',               realized: 560.3, leakage: 98.67,  pct: 33.03 },
  { category: 'RT3', name: 'Premium',             realized: 462.2, leakage: 81.43,  pct: 27.26 },
  { category: 'RT4', name: 'Presidential Suite',  realized: 376.8, leakage: 64.70,  pct: 21.66 }
];

// ── ROOT CAUSES (Section 10) ─────────────────────────────────────────────────

export const ROOT_CAUSES = [
  { area: 'Revenue Leakage',         cause: 'High no-shows & cancellations in RT2/RT3; gap between ADR and RevPAR across all cities.' },
  { area: 'Low Occupancy',           cause: 'Price mismatch — RT2 weekday ADR is high in Mumbai/Delhi but demand stimulation is absent.' },
  { area: 'Uneven Platform ROI',     cause: 'Certain OTAs bring high booking volume but lower-rated guests — rating-wise underperformers.' },
  { area: 'Service Underutilisation',cause: 'Spa and room service are unused due to poor promotion or irrelevant bundling packaging.' },
  { area: 'Booking Failures',        cause: 'RT4 shows manual failures and system drop-offs; 12–18% of all bookings cancel or no-show.' },
  { area: 'Weak Properties',         cause: 'Atliq Grands & Atliq Seasons underperforming across all room classes — leakage hotspots.' },
  { area: 'Zero Cross-Sell',         cause: 'No bundling strategy exists for mid-premium segments (RT2/RT3) — unrealized ancillary revenue.' },
  { area: 'Static Staffing',         cause: 'Cost structure is fixed despite sharp occupancy variation between weekdays and weekends.' }
];

// ── DASHBOARDS (Section 9 + Annexure B) ─────────────────────────────────────

export const DASHBOARDS = [
  {
    id: 'kpi-trends',
    title: 'KPI Trends',
    file: 'assets/kpi-trends.png',
    question: 'How do RevPAR, ADR, and Occupancy Rate trend across cities and time?',
    insight: 'ADR consistently exceeds RevPAR across all room categories and cities — a systemic underperformance in revenue capture. The gap is widest in RT2 (Elite), where high ADR potential is being eroded by cancellations and weekday underutilisation.',
    decision: 'Benchmark-level KPI monitoring must be embedded into property manager workflows to flag performance deviations in real time.'
  },
  {
    id: 'weekday-weekend',
    title: 'Weekday vs Weekend Booking & Revenue',
    file: 'assets/weekday-weekend.png',
    question: 'How do booking volumes and revenue differ between weekdays and weekends?',
    insight: 'Weekends outperform weekdays in bookings across all cities. Mumbai shows the highest weekday revenue leakage. Weekday supply significantly outweighs weekend demand — creating a structural occupancy gap that pricing alone cannot solve.',
    decision: 'Introduce targeted weekday promotions for RT1 (10% price drop) and experience bundles for RT2/RT3 to redistribute demand.'
  },
  {
    id: 'platform-performance',
    title: 'Platform-wise Performance',
    file: 'assets/platform-performance.png',
    question: 'Which booking platforms drive volume, revenue, and quality?',
    insight: 'OTA platforms drive high booking volume but generate more leakages compared to direct bookings. Platforms like GoIbibo and Agoda show better guest rating performance. One OTA accounts for high volume but disproportionate cancellations.',
    decision: 'Shift marketing budget toward high-rated OTA partners and direct booking channels. Deprioritise low-rating, high-cancellation platforms.'
  },
  {
    id: 'capacity-utilization',
    title: 'Capacity Utilisation',
    file: 'assets/capacity-utilization.png',
    question: 'How efficiently is available room inventory being converted into revenue?',
    insight: 'Delhi leads with ~61.5% average capacity utilisation; Bangalore lags at ~56.3%. Mumbai has the highest total capacity, especially in RT2. Properties like Atliq Seasons showed extremely low utilisation across all room categories — a candidate for repurposing.',
    decision: 'Target Bangalore properties first for weekday pricing interventions. Evaluate Atliq Seasons for operational restructuring.'
  },
  {
    id: 'service-bundling',
    title: 'Service Utilisation & Bundling Impact',
    file: 'assets/service-bundling.png',
    question: 'Which ancillary services are underutilised, and what is the bundling opportunity?',
    insight: 'Spa and event hosting are underused in all cities except Mumbai. Spa usage was highest among RT3 guests in Atliq Blu (Mumbai) and Atliq Exotica (Delhi). No systematic bundling strategy exists for mid-premium segments — leaving significant ancillary revenue uncaptured.',
    decision: 'Bundle spa + breakfast + late checkout for RT2 and RT3. Bundle revenue uplift per booking: ₹350 (RT2) and ₹550 (RT3).'
  },
  {
    id: 'property-kpi',
    title: 'Property KPI Dashboard',
    file: 'assets/property-kpi.png',
    question: 'Which specific properties are driving performance — and which are lagging?',
    insight: 'Atliq Exotica and Atliq Palace are top revenue contributors. Atliq Grands and Atliq Seasons consistently underperform across all room classes. Some properties show below 50% utilisation despite significant room capacity.',
    decision: 'Property-specific strategies: prioritise Grands for weekday discounts in RT1; avoid high-cost bundles where service infrastructure is weak.'
  },
  {
    id: 'customer-behaviour',
    title: 'Customer Behaviour',
    file: 'assets/customer-behaviour.png',
    question: 'What does booking behaviour tell us about guest intent and retention risk?',
    insight: '12–18% of all bookings either cancel or result in no-shows — the primary driver of revenue leakage. RT4 Presidential Suite shows manual failures and system drop-offs. Higher guest count does not always correlate with higher revenue per booking.',
    decision: 'Introduce non-refundable rate tiers for RT1 and RT2. Conduct system audit for RT4 booking failures. Build cancellation prediction model.'
  },
  {
    id: 'room-category',
    title: 'Room Category Performance',
    file: 'assets/room-category.png',
    question: 'Which room categories are capturing their ADR potential vs leaking revenue?',
    insight: 'RT2 (Elite) has the highest revenue leakage at 33.03% despite mid-to-high ADR. RT3 (Premium) has consistently high ADR and occupancy — making it the strongest bundling candidate. RT4 shows 91% revenue realization, supporting a no-discount positioning strategy.',
    decision: 'Protect RT3 ADR at all costs. Bundle RT2. Discount RT1. Never discount RT4.'
  },
  {
    id: 'cancellation-analysis',
    title: 'Cancellation & Stay Duration',
    file: 'assets/cancellation-analysis.png',
    question: 'When and where are cancellations concentrated — and what is the revenue impact?',
    insight: 'RT2 and RT3 bear the brunt of cancellations. Delhi and Mumbai show high booking volumes but also higher leakage due to cancellations and unrealised check-ins. Stay duration analysis helps identify long-stay vs short-stay patterns for targeted bundling.',
    decision: 'Introduce minimum stay requirements for weekday RT2 bookings. Segment long-stay guests for tailored loyalty offers.'
  }
];

// ── STRATEGIES BY ROOM CATEGORY (Section 11) ────────────────────────────────

export const ROOM_STRATEGIES = [
  {
    category: 'RT1', name: 'Standard',
    headline: '10% Weekday Price Drop',
    rationale: 'RT1 guests are highly price-sensitive. Small pricing tweaks lift occupancy. Bundling showed limited ROI for this segment.',
    avgROI: '~41%', payback: '3–4 months',
    totalUplift: 24.6,
    cityData: [
      { city: 'Mumbai',    uplift: 6.46,  roi: 41.55, occ_before: 57.48, occ_after: 63.23, adr_before: 574.23, adr_after: 516.80, extra_bookings: 1250, property_focus: 'Atliq Blu and Palace (lowest weekday utilisation)' },
      { city: 'Bangalore', uplift: 5.15,  roi: 39.8,  occ_before: 56.04, occ_after: 61.64, adr_before: 501.98, adr_after: 451.78, extra_bookings: 1140, property_focus: 'Atliq Grands — implement first. Bay — avoid (already 60%+).' },
      { city: 'Hyderabad', uplift: 3.52,  roi: 41.9,  occ_before: 54.37, occ_after: 59.81, adr_before: 338.95, adr_after: 305.06, extra_bookings: 1150, property_focus: 'Atliq Grands and Palace — primary targets.' },
      { city: 'Delhi',     uplift: 5.18,  roi: 41.55, occ_before: 60.98, occ_after: 67.08, adr_before: 462.22, adr_after: 416.00, extra_bookings: 1100, property_focus: 'Atliq Blu and Grands — low weekday occupancy.' }
    ]
  },
  {
    category: 'RT2', name: 'Elite',
    headline: 'Bundle: Spa + Breakfast + Room Service',
    rationale: 'RT2 ADR is moderate but leakage is 33% — the highest of any room category. Bundling raises realized revenue without price cuts, and ROI far exceeds discounting.',
    avgROI: '~58%', payback: '2–3 months',
    totalUplift: 38.4,
    cityData: [
      { city: 'Mumbai',    uplift: 10.88, roi: 62.3, bundle_per_booking: 350, target_bookings: 3200, scenarios: {best:'₹13.2L', likely:'₹10.88L', worst:'₹6.9L'}, property_focus: 'Atliq Bay and Exotica. Avoid Grands (low spa ratings).' },
      { city: 'Bangalore', uplift: 10.32, roi: 61.9, bundle_per_booking: 350, target_bookings: 2950, scenarios: {best:'₹12.6L', likely:'₹10.32L', worst:'₹6.4L'}, property_focus: 'Palace and Blu (strong spa usage). Avoid Grands.' },
      { city: 'Hyderabad', uplift: 10.15, roi: 58.7, bundle_per_booking: 350, target_bookings: 2900, scenarios: {best:'₹12.4L', likely:'₹10.1L',  worst:'₹6.4L'}, property_focus: 'Palace and Blu. Grands — skip (low guest satisfaction).' },
      { city: 'Delhi',     uplift: 10.88, roi: 48.14,bundle_per_booking: 350, target_bookings: 2800, scenarios: {best:'₹13.1L', likely:'₹10.8L',  worst:'₹6.6L'}, property_focus: 'Blu and Palace. Avoid Grands (lower spa ratings).' }
    ]
  },
  {
    category: 'RT3', name: 'Premium',
    headline: 'Premium Bundle: Spa + Breakfast + Late Checkout',
    rationale: 'Premium rooms must preserve ADR at all costs. Bundling boosts perceived value and closes the leakage gap — 30% higher RevPAR vs baseline.',
    avgROI: '~48%', payback: '~3 months',
    totalUplift: 28.1,
    cityData: [
      { city: 'Mumbai',    uplift: 8.97, roi: 50.3, bundle_per_booking: 550, target_bookings: 1800, scenarios: {best:'₹11.6L', likely:'₹8.97L', worst:'₹4.6L'}, property_focus: 'Atliq Blu (excellent spa usage). Exotica — trial run. Bay — skip.' },
      { city: 'Bangalore', uplift: 8.43, roi: 53.4, bundle_per_booking: 550, target_bookings: 1625, scenarios: {best:'₹11.1L', likely:'₹8.4L',  worst:'₹4.3L'}, property_focus: 'Bay and Blu. Grands — avoid (low spa trend). Palace — partial bundle.' },
      { city: 'Hyderabad', uplift: 7.40, roi: 49.2, bundle_per_booking: 500, target_bookings: 1700, scenarios: {best:'₹9.1L',  likely:'₹7.4L',  worst:'₹3.6L'}, property_focus: 'Atliq Blu and City. Palace — phased launch. Grands — avoid.' },
      { city: 'Delhi',     uplift: 8.97, roi: 40.45,bundle_per_booking: 550, target_bookings: 1600, scenarios: {best:'₹11.5L', likely:'₹8.9L',  worst:'₹4.6L'}, property_focus: 'Blu and Palace. Grands — moderate occupancy, pilot on limited rooms.' }
    ]
  },
  {
    category: 'RT4', name: 'Presidential Suite',
    headline: 'Luxury Bundle: Butler + Spa + Gourmet Breakfast',
    rationale: 'Never discount ultra-luxury rooms — it destroys positioning. Focus on elite experiences to drive profitability from a low-volume, high-margin segment.',
    avgROI: '~25%', payback: '4–5 months',
    totalUplift: 6.9,
    cityData: [
      { city: 'Mumbai',    uplift: 2.32, roi: 24.6, bundle_per_booking: 850, target_bookings: 'select', scenarios: {best:'₹3.4L',  likely:'₹2.32L', worst:'₹1.3L'}, property_focus: 'Exotica and Blu. Bay — weak demand; do not implement.' },
      { city: 'Bangalore', uplift: 2.16, roi: 27.4, bundle_per_booking: 850, target_bookings: 'select', scenarios: {best:'₹3.1L',  likely:'₹2.16L', worst:'₹1.1L'}, property_focus: 'Atliq Blu and Bay. Grands — avoid (low occupancy & demand).' },
      { city: 'Hyderabad', uplift: 2.00, roi: 21.8, bundle_per_booking: 850, target_bookings: 700,    scenarios: {best:'₹2.9L',  likely:'₹2.0L',  worst:'₹1.2L'}, property_focus: 'Atliq City and Palace. Grands — avoid.' },
      { city: 'Delhi',     uplift: 2.32, roi: 26.1, bundle_per_booking: 850, target_bookings: 700,    scenarios: {best:'₹3.2L',  likely:'₹2.3L',  worst:'₹1.4L'}, property_focus: 'Blu and Palace. Grands — skip (weak suite demand).' }
    ]
  }
];

// ── STRATEGY DECISION GAME (Section 11) ─────────────────────────────────────

export const STRATEGY_OUTCOMES = {
  discount: {
    correct: false,
    label: 'DISCOUNT',
    reasoning: 'Discounting RT2 Elite rooms trains customers to wait for lower prices, permanently damaging ADR positioning. Our model showed that a 10% ADR cut did not generate sufficient incremental demand to offset the revenue loss. The 33% leakage in RT2 is caused by cancellations — not price sensitivity. Discounting treats the wrong symptom.'
  },
  bundle: {
    correct: true,
    label: 'BUNDLE',
    reasoning: 'Bundling Spa + Breakfast + Room Service raises the realized revenue per booking by ₹350 without touching the listed ADR. Our ROI analysis showed 62.3% returns vs 3–4 months payback — the strongest risk-adjusted recommendation in the portfolio. Crucially, bundled guests have significantly lower cancellation rates, directly addressing the core leakage problem.'
  },
  nothing: {
    correct: false,
    label: 'DO NOTHING',
    reasoning: 'Passive observation would allow the 33% leakage rate to compound. Our pivot analysis showed that RT2 Elite\'s performance gap is structural — created by high ADR, moderate occupancy, and no cross-sell mechanism. Without intervention, this room category continues to underperform relative to its capacity and pricing tier.'
  }
};

// ── PIVOT THEMES (Section 8) ─────────────────────────────────────────────────

export const PIVOT_THEMES = [
  {
    code: '01',
    title: 'BOOKING & REVENUE',
    desc: 'Weekday vs weekend patterns, monthly seasonality, city-wise revenue distribution',
    stat: 'May is the strongest revenue month',
    dashboard: 'weekday-weekend',
    icon: '📊'
  },
  {
    code: '02',
    title: 'ROOM CATEGORY',
    desc: 'RT1–RT4 performance, ADR vs RevPAR gaps, leakage by category',
    stat: 'RT2 Elite — 33.03% leakage rate',
    dashboard: 'room-category',
    icon: '🏨'
  },
  {
    code: '03',
    title: 'CAPACITY',
    desc: 'Supply vs demand, city-wise utilisation, property-level inventory gaps',
    stat: 'Delhi leads at 64.02% occupancy',
    dashboard: 'capacity-utilization',
    icon: '📐'
  },
  {
    code: '04',
    title: 'PLATFORM & OTA',
    desc: 'Channel performance, booking volume vs revenue quality, rating analysis',
    stat: 'OTA volume ≠ OTA quality',
    dashboard: 'platform-performance',
    icon: '🌐'
  },
  {
    code: '05',
    title: 'PROPERTY LEVEL',
    desc: 'Atliq portfolio analysis — top contributors vs leakage hotspots',
    stat: 'Atliq Seasons — lowest utilisation',
    dashboard: 'property-kpi',
    icon: '🏛️'
  },
  {
    code: '06',
    title: 'SERVICES',
    desc: 'Spa, event hosting, room service utilisation — bundling opportunity sizing',
    stat: 'Spa uptake <50% in 3 cities',
    dashboard: 'service-bundling',
    icon: '✨'
  }
];

// ── ROI SCENARIOS (for ROI Lab sliders) ─────────────────────────────────────

export const ROI_SCENARIOS = {
  rt1_occ: {
    '5':  { uplift: 17.4, label: 'Worst'  },  // ~avg of city worsts
    '10': { uplift: 24.6, label: 'Likely' },
    '15': { uplift: 34.1, label: 'Best'   }
  },
  rt2_bundle: {
    '25': { uplift: 26.8, label: 'Worst'  },
    '40': { uplift: 38.4, label: 'Likely' },
    '60': { uplift: 51.3, label: 'Best'   }
  },
  rt3_bundle: {
    '0':  { uplift: 18.0, label: 'Conservative' },
    '1':  { uplift: 28.1, label: 'Moderate'      },
    '2':  { uplift: 35.5, label: 'Aggressive'    }
  }
};
