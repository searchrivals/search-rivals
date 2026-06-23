"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CEOContactCTA from "../forms/CEOContactCTA";

export default function ConclusionCTA() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.2, once: true });

  return (
    <motion.section
      ref={ref}
      id="audit"
      className="relative w-full py-20 bg-[#0B0B0B] text-white border-t border-white/10 overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative max-w-6xl mx-auto px-6">
        {/* KEY FIX: items-start keeps both columns aligned at the top */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT COPY */}
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              <span className="text-[#1A73E8]">Win More Customers</span>
              <br />
              <span className="text-[#7E3FF2]">Across Every Search</span>
            </h2>

            <p className="mt-5 text-white/70 text-sm md:text-base leading-relaxed">
              Buyers move fast across AI answers, search results, reviews, maps, and social.
              You win when your brand shows up first and looks like the obvious best choice.
              Search Rivals makes that happen.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-[#1A73E8] font-semibold">
                  Real-Time Search Intelligence
                </h3>
                <p className="mt-2 text-white/60 text-sm leading-relaxed">
                  We track how buyers find you across search, AI answers, maps, and reviews
                  and act before shifts reduce visibility or revenue.
                </p>
              </div>

              <div>
                <h3 className="text-[#1A73E8] font-semibold">
                  Turn Your Website Into Your Strongest Asset
                </h3>
                <p className="mt-2 text-white/60 text-sm leading-relaxed">
                  World-class design optimized for search so your site earns trust,
                  ranks with authority, and converts demand immediately.
                </p>
              </div>

              <div>
                <h3 className="text-[#1A73E8] font-semibold">
                  Senior Operators on Every Account
                </h3>
                <p className="mt-2 text-white/60 text-sm leading-relaxed">
                  No juniors. No outsourcing. You work directly with the experts who
                  built the system and understand high-stakes growth.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM — NOW PERFECTLY ALIGNED */}
          <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
            <div className="w-full max-w-[460px]">
              <CEOContactCTA />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
