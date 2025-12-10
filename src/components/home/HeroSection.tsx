"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const PARTICLES = [
  { top: "8%", left: "18%", size: 6 },
  { top: "20%", left: "76%", size: 8 },
  { top: "30%", left: "14%", size: 7 },
  { top: "44%", left: "86%", size: 5 },
  { top: "60%", left: "22%", size: 5 },
  { top: "70%", left: "72%", size: 7 },
  { top: "16%", left: "50%", size: 4 },
  { top: "38%", left: "42%", size: 6 },
  { top: "54%", left: "58%", size: 5 },
  { top: "68%", left: "36%", size: 4 },
];

export default function HeroSection() {
  // Typing animation
  const [searchIndex, setSearchIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  const prompts = [
    "How do I get my business higher on Google?",
    "How do I rank higher in AI search results?",
    "How do I rank higher on Google Maps?",
    "Why am I getting traffic but no leads?",
    "How do I turn search traffic into revenue?",
  ];

  useEffect(() => {
    let charIndex = 0;
    let interval: ReturnType<typeof setInterval> | undefined;

    const typeEffect = () => {
      const currentPrompt = prompts[searchIndex];
      setTypedText(currentPrompt.slice(0, charIndex));
      charIndex++;

      if (charIndex > currentPrompt.length) {
        if (interval) clearInterval(interval);
        setTimeout(() => {
          setSearchIndex((prev) => (prev + 1) % prompts.length);
          setTypedText("");
        }, 2000);
      }
    };

    interval = setInterval(typeEffect, 50);
    return () => interval && clearInterval(interval);
  }, [searchIndex]);

  // In-view trigger
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, amount: 0.4 });

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center py-24 px-6 
                 z-10 w-full max-w-[100vw] overflow-hidden"
    >
      {/* =============================== */}
      {/* HOLOGRAPHIC SWEEP (NON-INTERACTIVE) */}
      {/* =============================== */}
      <motion.div
        className="pointer-events-none absolute top-0 left-0 w-full h-full 
                   bg-gradient-to-br from-[#1A73E8]/25 via-[#7E3FF2]/25 to-transparent 
                   blur-2xl mix-blend-screen"
        style={{ transform: "skewX(-18deg)" }}
        initial={{ x: "-140%", opacity: 0 }}
        animate={isInView ? { x: "140%", opacity: 0.4 } : {}}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* AMBIENT BACKGROUND GLOW */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b 
                   from-[#1A73E8]/12 via-transparent to-[#7E3FF2]/12"
        animate={isInView ? { opacity: [0.65, 1, 0.65] } : {}}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* GRAIN TEXTURE */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-20 mix-blend-soft-light"
        style={{ backgroundImage: "url('/noise.png')", backgroundSize: "300px" }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.22 } : {}}
        transition={{ duration: 1.2, delay: 0.4 }}
      />

      {/* FLOATING PARTICLES */}
      <div className="pointer-events-none absolute inset-0">
        {PARTICLES.map((p, idx) => (
          <motion.span
            key={idx}
            className="absolute rounded-full bg-gradient-to-r from-[#1A73E8] to-[#7E3FF2]"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              boxShadow: "0 0 18px rgba(122, 162, 247, 0.8)",
            }}
            initial={{ y: 0, opacity: 0 }}
            animate={
              isInView
                ? {
                    y: [-12, 12, -12],
                    opacity: [0.15, 0.85, 0.15],
                  }
                : {}
            }
            transition={{
              duration: 6 + idx * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: idx * 0.12,
            }}
          />
        ))}
      </div>

      {/* =============================== */}
      {/* HEADLINE — locked to 2 lines based on max-width */}
      {/* =============================== */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold max-w-6xl leading-tight mx-auto
                   bg-clip-text text-transparent bg-gradient-to-r from-[#1A73E8] to-[#7E3FF2]"
        initial={{ opacity: 0, y: 40, filter: "blur(14px)" }}
        animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        Outrank Rivals With The AI SEO Agency Top Brands Trust
      </motion.h1>

      {/* SUBHEADLINE */}
      <motion.p
        className="text-lg md:text-2xl text-gray-300 max-w-3xl mt-6"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.35, duration: 1.1 }}
      >
        Show up where your customers are searching and turn visibility into
        revenue. Search Rivals is the AI SEO Agency built for the AI-first web.
      </motion.p>

      {/* =============================== */}
      {/* SEARCH BAR */}
      {/* =============================== */}
      <motion.div
        className="relative mt-8 w-[90%] max-w-[680px] mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.9 }}
      >
        {/* Boot-up glow */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-full 
                     bg-gradient-to-r from-[#1A73E8]/30 to-[#7E3FF2]/30 blur-3xl"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={isInView ? { opacity: 0.5, scale: 1.05 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Shimmer sweep */}
        <motion.div
          className="pointer-events-none absolute inset-y-0 w-1/3 bg-white/20 blur-xl rounded-full"
          initial={{ x: "-120%" }}
          animate={isInView ? { x: "120%" } : {}}
          transition={{
            duration: 1.6,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
        />

        {/* Search bar */}
        <div className="relative bg-white/10 backdrop-blur-md border border-[#1A73E8]/30 
                        rounded-full shadow-lg flex items-center px-6 py-4 overflow-hidden">
          <Search className="w-5 h-5 text-[#B0B0B0] mr-4" strokeWidth={2} />

          <motion.span
            className="text-gray-200 text-lg md:text-xl whitespace-nowrap truncate text-left flex-1"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            {typedText}
            <span className="animate-pulse text-[#1A73E8]">|</span>
          </motion.span>
        </div>
      </motion.div>

      {/* =============================== */}
      {/* CTA BUTTONS (NOW CLICKABLE) */}
      {/* =============================== */}
      <motion.div
        className="mt-8 flex flex-col sm:flex-row gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <motion.div
          whileHover={{ scale: 1.08, boxShadow: "0 0 25px #1A73E8" }}
          transition={{ type: "spring", stiffness: 200 }}
          className="cursor-pointer"
        >
          <Button
            size="lg"
            className="cursor-pointer bg-[#1A73E8] hover:bg-[#1559b2] 
                       text-lg px-10 py-6 rounded-2xl shadow-lg"
          >
            Get Your Free Audit
          </Button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.08, boxShadow: "0 0 25px #7E3FF2" }}
          transition={{ type: "spring", stiffness: 200 }}
          className="cursor-pointer"
        >
          <Button
            size="lg"
            variant="outline"
            className="cursor-pointer border-[#7E3FF2] text-[#1A73E8] 
                       text-lg px-10 py-6 rounded-2xl"
          >
            See Our Work
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
