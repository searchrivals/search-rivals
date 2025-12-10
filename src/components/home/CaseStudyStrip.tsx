"use client";

import React from "react";
import { motion } from "framer-motion";

const industries = [
  { title: "Legal", stats: "+647% SERP Features · +13.8M Impressions" },
  { title: "Cybersecurity", stats: "+605% AI Features · +340% Traffic" },
  { title: "SaaS", stats: "+1.4M Impressions · +1,475% Traffic" },
  { title: "MSP / IT", stats: "+312 AI Features · +575% Traffic" },
  { title: "Property Development", stats: "+219% Conversions · +883% Visibility" },
  { title: "Industrial", stats: "+412% Visibility · +1,200% Buyer Clicks" },
  { title: "Physical Therapy", stats: "+918% Local Discovery · +233% Leads" },
  { title: "eCommerce", stats: "+310% ROAS Lift · +1.1M Impressions" },
  { title: "Cannabis", stats: "+842% Visibility · +6,200% Map Pack Wins" },
  { title: "Financial Accounting", stats: "+362% Leads · +744% Authority Growth" },
];

// ======================================================
//  SEARCH RIVALS SIGNATURE STYLING LAYER
// ======================================================
export default function CaseStudyStrip() {
  const marquee = [...industries, ...industries];

  return (
    <section className="relative py-20 bg-[#050509] border-t border-white/10 overflow-hidden">

      {/* ======= SUBTLE NEON BACKGLOW ======= */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A73E8]/5 to-transparent pointer-events-none" />

      {/* ======= NEON SCROLL RAIL (bottom) ======= */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#1A73E8]/40 via-[#7E3FF2]/40 to-[#1A73E8]/40 blur-sm opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <h2 className="text-center text-xl md:text-2xl font-semibold text-white tracking-tight mb-12">
          Proven Wins Across High-Competition Industries
        </h2>

        <div className="relative overflow-hidden">
          {/* ======= MARQUEE TRACK ======= */}
          <motion.div
            className="flex gap-6"
            animate={{ x: ["-50%", "0%"] }} 
            transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
          >
            {marquee.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 0 32px rgba(122, 68, 255, 0.25)",
                  borderColor: "rgba(122, 68, 255, 0.35)",
                }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                className="
                  min-w-[260px] md:min-w-[300px]
                  p-5 rounded-2xl 
                  bg-white/[0.03]
                  border border-white/10 
                  backdrop-blur-[3px]
                  shadow-[0_0_18px_rgba(0,0,0,0.6)]
                  hover:bg-white/[0.06]
                  transition-all
                "
              >
                {/* ======= TITLE ======= */}
                <p className="text-white font-semibold text-sm mb-2">
                  {item.title}
                </p>

                {/* ======= STATS ======= */}
                <p className="text-gray-300 text-xs tracking-wide leading-relaxed">
                  {item.stats}
                </p>

                {/* ======= NEON EDGE GLOW ======= */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-px rounded-2xl bg-gradient-to-br from-[#1A73E8]/20 to-[#7E3FF2]/25 blur-[2px]" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
