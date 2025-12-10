"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import DashboardStep01 from "./DashboardStep01";
import DashboardStep02 from "./DashboardStep02";
import DashboardStep03 from "./DashboardStep03";
import DashboardStep04 from "./DashboardStep04";

const PANELS = [DashboardStep01, DashboardStep02, DashboardStep03, DashboardStep04];

export default function DashboardAutoShowcase({ activeStep }: { activeStep: number }) {
  const ActivePanel = PANELS[activeStep] ?? PANELS[0];

  return (
    <div className="relative max-w-4xl mx-auto mt-12 mb-4 px-6">
      {/* Glow behind card */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(126,63,242,0.35),_transparent_60%)]" />

      <div className="relative rounded-[32px] border border-[#1A73E8]/40 bg-[#05060A]/90 backdrop-blur-xl overflow-hidden shadow-[0_28px_90px_rgba(0,0,0,0.8)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 24, scale: 0.96, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -24, scale: 0.96, filter: "blur(8px)" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <ActivePanel />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
