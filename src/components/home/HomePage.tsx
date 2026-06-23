"use client";

import React from "react";

// ---------------------------------------------
// SECTION IMPORTS — HOMEPAGE MODULES
// ---------------------------------------------

import HeroSection from "./HeroSection";
import FeaturedOn from "./FeaturedOn";
import SquintTestv0 from "./SquintTestv0";
import MaximizeVisibility from "./VisibilityPainBlock";
import EcosystemDashboard from "./EcosystemDashboard";
import ServicesGrid from "./ServicesGrid";
import SearchWars from "./SearchWars";
import WhyBrandsLoseVisibility from "./WhyBrandsLoseVisibility";
import WhyFastGrowingChoose from "./WhyFastGrowingChoose";
import ToughMarketsStrip from "./ToughMarketsStrip";
import NinetyDayDominoCTA from "./NinetyDayDominoCTA";
import WhyChooseUs from "./WhyChooseUs";
import ConclusionCTA from "./ConclusionCTA";

// ---------------------------------------------
// HOMEPAGE COMPONENT
// ---------------------------------------------

export default function HomePage() {
  return (
    <main className="w-full min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. FEATURED LOGO STRIP */}
      <FeaturedOn />

      {/* 3. 6-SECOND SQUINT TEST */}
      <SquintTestv0 />

      {/* 4. VISIBILITY PAIN BLOCK */}
      <MaximizeVisibility />

      {/* 5. ECOSYSTEM DASHBOARD */}
      <EcosystemDashboard />

      {/* 6. SERVICES GRID */}
      <ServicesGrid />

      {/* 7. CINEMATIC SEARCH WARS */}
      <SearchWars />

      {/* 8. WHY BRANDS LOSE VISIBILITY */}
      <WhyBrandsLoseVisibility />

      {/* 9. WHY FAST-GROWING BRANDS CHOOSE SR */}
      <WhyFastGrowingChoose />

      {/* 10. TOUGH MARKETS STRIP */}
      <ToughMarketsStrip />

      {/* 11. 90-DAY MOMENTUM CTA */}
      <NinetyDayDominoCTA />

      {/* 12. WHY CHOOSE US (CEO Contact Form) */}
      <WhyChooseUs />

      {/* 13. HOMEPAGE CONCLUSION CTA */}
      <ConclusionCTA />
    </main>
  );
}
