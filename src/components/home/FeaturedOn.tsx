"use client";

import React from "react";
import { motion } from "framer-motion";
import LineDraw from "./LineDraw";

// Logo Array (you can keep adding more)
const logos = [
  "/assets/brands/featured/monochrome/abc.webp",
  "/assets/brands/featured/monochrome/affinity-group-publishing.webp",
  "/assets/brands/featured/monochrome/bing.webp",
  "/assets/brands/featured/monochrome/cbs.webp",
  "/assets/brands/featured/monochrome/cw.webp",
  "/assets/brands/featured/monochrome/einpresswire.webp",
  "/assets/brands/featured/monochrome/fox.webp",
  "/assets/brands/featured/monochrome/google.webp",
  "/assets/brands/featured/monochrome/google-news.webp",
  "/assets/brands/featured/monochrome/muck-rack.webp",
  "/assets/brands/featured/monochrome/naviga.webp",
  "/assets/brands/featured/monochrome/yahoo.webp",
];

export default function FeaturedOn() {
  return (
    <section className="relative bg-[#0A0A0A] py-16 border-t border-[#1A73E8]/20 overflow-hidden w-full">
      {/* Soft Gradient Glow Behind */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1A73E8]/8 to-[#7E3FF2]/8 blur-3xl opacity-30 pointer-events-none" />

      {/* Decorative Line */}
      <LineDraw
        className="absolute top-0 left-1/2 w-[calc(100%-2rem)] max-w-[1400px] -translate-x-1/2 opacity-20"
        path="M 20 100 C 150 0, 650 200, 780 100"
        width={2}
        delay={0.1}
      />

      {/* Full-Width Logo Marquee */}
      <div className="relative w-full max-w-full overflow-hidden">
        <motion.div
          className="flex items-center gap-16 sm:gap-20 px-[10vw] will-change-transform"
          style={{ minWidth: "200%" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 75, ease: "linear", repeat: Infinity }}
        >
          {/* FIRST PASS */}
          {logos.map((src, i) => (
            <motion.div
              key={`logo1-${i}`}
              className="shrink-0 flex justify-center items-center"
              initial={{ opacity: 0.7 }}
              whileHover={{ scale: 1.08, opacity: 1 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
            >
              <img
                src={src}
                alt="Featured Logo"
                className="h-14 sm:h-16 md:h-20 lg:h-[5.5rem] object-contain grayscale hover:grayscale-0 transition-all duration-500 brightness-95 hover:brightness-110"
              />
            </motion.div>
          ))}

          {/* SECOND PASS (duplicated for seamless loop) */}
          {logos.map((src, i) => (
            <motion.div
              key={`logo2-${i}`}
              className="shrink-0 flex justify-center items-center"
              initial={{ opacity: 0.7 }}
              whileHover={{ scale: 1.08, opacity: 1 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
            >
              <img
                src={src}
                alt="Featured Logo"
                className="h-14 sm:h-16 md:h-20 lg:h-[5.5rem] object-contain grayscale hover:grayscale-0 transition-all duration-500 brightness-95 hover:brightness-110"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
