"use client";

import React from "react";
import { motion } from "framer-motion";

// Reduced + balanced list for smoother marquee looping
const industries = [
  { id: "cyber", label: "Cybersecurity", pill: "High-ticket B2B • Complex sales" },
  { id: "legal", label: "Injury & Employment Law", pill: "Ultra-competitive local search" },
  { id: "saas", label: "AI SaaS", pill: "PLG + enterprise demand" },
  { id: "msp", label: "IT & MSP", pill: "Retainer-based growth" },
  { id: "hvac", label: "HVAC & Home Services", pill: "Seasonal, competitive lead gen" },
  { id: "ecom", label: "eCommerce", pill: "High-competition retail markets" },
];

// Magnify animation wrapper
function Magnify({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.055 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="cursor-pointer"
    >
      {children}
    </motion.div>
  );
}

// Industry tile
function IndustryCard({ label, pill }: { label: string; pill: string }) {
  return (
    <Magnify>
      <div className="relative group w-[300px] sm:w-[330px] lg:w-[360px] h-[220px] bg-gradient-to-b from-[#050816] via-[#050509] to-[#050509] rounded-3xl border border-white/10 overflow-hidden shadow-[0_22px_65px_rgba(0,0,0,0.85)]">

        {/* Glow frame */}
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-px rounded-[1.45rem] bg-gradient-to-br from-[#1A73E8]/40 via-transparent to-[#7E3FF2]/45" />
        </div>

        {/* Fake “mini homepage” chrome */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 pt-3 pb-2 text-[11px] text-gray-300/80">
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/90" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400/80" />
              <span className="h-1.5 w-1.5 rounded-full bg-rose-400/80" />
            </div>
            <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] tracking-[0.18em] uppercase">
              Live view
            </span>
          </div>

          {/* Hero band */}
          <div className="px-4 pb-2">
            <div className="h-8 rounded-2xl bg-gradient-to-r from-[#1A73E8] via-[#7E3FF2] to-[#1A73E8] opacity-80 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_30px_rgba(122,68,255,0.85)]" />
          </div>

          {/* Body grid */}
          <div className="flex-1 px-4 pb-4">
            <div className="grid grid-cols-[1.1fr,0.9fr] gap-4 h-full">

              {/* Faux content */}
              <div className="flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="h-3 rounded-full bg-white/12 w-5/6" />
                  <div className="h-2 rounded-full bg-white/8 w-4/5" />
                  <div className="h-2 rounded-full bg-white/5 w-3/5" />
                </div>
                <div className="space-y-1.5">
                  <div className="h-[2px] rounded-full bg-gradient-to-r from-[#1A73E8]/70 to-transparent" />
                  <div className="h-[2px] rounded-full bg-gradient-to-r from-[#7E3FF2]/75 to-transparent w-4/5" />
                  <div className="h-[2px] rounded-full bg-gradient-to-r from-[#1A73E8]/50 to-transparent w-3/5" />
                </div>
              </div>

              {/* Faux metrics */}
              <div className="flex flex-col justify-between">
                <div className="h-20 rounded-2xl bg-gradient-to-t from-[#020617] via-[#020617] to-[#1A73E8]/25 overflow-hidden">
                  <div className="flex items-end gap-[3px] h-full px-2 pb-1.5">
                    {Array.from({ length: 14 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-full bg-gradient-to-t from-[#1A73E8]/65 via-[#7E3FF2]/75 to-white/90"
                        style={{
                          height: `${38 + ((i * 17) % 50)}%`,
                          opacity: 0.6 + ((i % 3) * 0.12),
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[10px] text-gray-300/85">
                    <span>Search volume</span>
                    <span className="text-[#1A73E8]">↑ strong</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/7 overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-[#1A73E8] to-[#7E3FF2]" />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Hover label overlay */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-5 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <div className="mx-3 mb-3 rounded-2xl bg-black/70 border border-white/12 px-3 py-3 backdrop-blur-md">
            <p className="text-[13px] font-semibold text-white">{label}</p>
            <p className="mt-0.5 text-[11px] text-gray-300/90">{pill}</p>
          </div>
        </div>
      </div>
    </Magnify>
  );
}

export default function ToughMarketsStrip() {
  const marqueeItems = [...industries, ...industries];

  return (
    <section className="relative py-20 bg-[#050509] border-t border-[#1A73E8]/15 overflow-hidden">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#090B1A] via-transparent to-[#050509]" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-[11px] tracking-[0.18em] uppercase text-[#60A5FA] mb-3">
            Tough Markets • Proven Wins
          </p>

          {/* ⭐ BRAND-COLORED H2 */}
          <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-[#1A73E8] via-[#7E3FF2] to-[#1A73E8] text-transparent bg-clip-text mb-3">
            Brands in Tough Markets Choose Search Rivals
          </h2>

          <p className="text-sm md:text-base text-gray-300">
            Experiencing flat or declining traffic? Win back high-value rankings, 
            break into emerging search and AI results, and redirect your competitor's 
            visibility back into customer growth for you.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative mt-6">
          <motion.div
            className="flex gap-6 lg:gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
          >
            {marqueeItems.map((industry, i) => (
              <IndustryCard key={`${industry.id}-${i}`} label={industry.label} pill={industry.pill} />
            ))}
          </motion.div>
        </div>

        {/* Drag hint for mobile */}
        <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-gray-400">
          <span className="h-[1px] w-6 bg-gray-500/70" />
          <span>Drag or swipe to explore the industries we help win.</span>
        </div>
      </div>
    </section>
  );
}
