"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import TiltCard from "@/components/ui/TiltCard";
import { Icon } from "@iconify/react";

const services = [
  {
    icon: "mdi:robot-outline",
    title: "Performance Automation",
    desc: "Automate site health, speed, uptime, Core Web Vitals, and technical performance so your website stays optimized 24/7.",
  },
  {
    icon: "mdi:map-marker-radius-outline",
    title: "Local SEO",
    desc: "Dominate local map packs, reviews, and service-area rankings to capture high-intent nearby buyers ready to convert.",
  },
  {
    icon: "mdi:brain",
    title: "AI / LLM Optimization",
    desc: "Engineer schemas, entities, and brand signals that help ChatGPT, Gemini, Claude, Grok, and Perplexity pick YOUR brand first.",
  },
  {
    icon: "mdi:file-tree-outline",
    title: "Content Marketing",
    desc: "Publish high-authority content that ranks across AI, search, and social and guides buyers toward choosing you.",
  },
  {
    icon: "mdi:palette-outline",
    title: "Branding & Strategy",
    desc: "Clarify your positioning, messaging, and identity so your brand becomes the obvious choice in a crowded market.",
  },
  {
    icon: "mdi:web",
    title: "AI-Powered Web Design",
    desc: "Lightning-fast websites built with performance, ranking power, and conversion psychology at the core.",
  },
  {
    icon: "mdi:link-variant",
    title: "Conversion Optimization",
    desc: "Remove friction, improve buyer journeys, and turn underperforming pages into revenue-driving assets.",
  },
  {
    icon: "mdi:chart-timeline-variant",
    title: "Marketing Automation",
    desc: "AI agents that manage outreach, follow-ups, reviews, CRM tasks, and pipeline actions with precision.",
  },
  {
    icon: "mdi:chart-areaspline",
    title: "Digital Marketing",
    desc: "Unify SEO, content, social, ads, and reporting into one operating system built for ROI and scale.",
  },
];

// ======================
// FIXED VARIANTS (TYPED)
// ======================
const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    y: 60,
    filter: "blur(12px)",
  },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.15,
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // <-- FIX
    },
  }),
  exit: {
    opacity: 0,
    scale: 0.7,
    y: -40,
    filter: "blur(10px)",
    transition: { duration: 0.5 },
  },
};

export default function ServicesGrid() {
  return (
    <section className="relative py-28 bg-[#101010] overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-[#1A73E8]/10 via-transparent to-[#7E3FF2]/10 blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-8 text-center">

        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#1A73E8] to-[#7E3FF2]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          How We Help Brands Win The Search
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((s, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: false, amount: 0.35 }}
              className="relative"
            >

              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1A73E8]/40 to-[#7E3FF2]/40 blur-2xl opacity-0"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{
                  opacity: [0, 0.35, 0],
                  scale: [0.6, 1.2, 1.4],
                }}
                transition={{
                  duration: 1.1,
                  delay: i * 0.15 + 0.2,
                }}
                viewport={{ once: false }}
              />

              <TiltCard className="group bg-[#181818]/80 border border-[#1A73E8]/10 p-10 rounded-2xl shadow-xl backdrop-blur-sm relative overflow-hidden text-center flex flex-col items-center">

                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br from-[#1A73E8] to-[#7E3FF2] blur-2xl" />

                <Icon
                  icon={s.icon}
                  className="text-[#1A73E8] mb-6 w-14 h-14 transition-transform duration-300 group-hover:scale-110"
                />

                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-[#1A73E8] transition-colors">
                  {s.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {s.desc}
                </p>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
