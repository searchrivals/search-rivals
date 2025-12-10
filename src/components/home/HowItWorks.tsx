"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DashboardAutoShowcase from "../HowItWorksDemo/DashboardAutoShowcase";

type Step = {
  step: string;
  title: string;
  desc: string;
};

const steps: Step[] = [
  {
    step: "01",
    title: "Connect Your Search Ecosystem",
    desc: "We plug into GSC, GA4, GBP, reviews, and key analytics so every signal and metric lives in one operating view.",
  },
  {
    step: "02",
    title: "AI Maps Your Weak Points",
    desc: "Our AI surfaces technical gaps, content holes, and competitive blind spots that silently cost you traffic and revenue.",
  },
  {
    step: "03",
    title: "Engineer Your Visibility Playbook",
    desc: "We translate insights into a roadmap for SEO, local, content, and CRO designed to outpace your rivals.",
  },
  {
    step: "04",
    title: "Turn Visibility Into Revenue",
    desc: "We launch, iterate, and optimize weekly—expanding rankings and revenue while your rivals are still reacting.",
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [isHoveringSteps, setIsHoveringSteps] = useState(false);

  // Auto-rotate steps when not hovering
  useEffect(() => {
    if (isHoveringSteps) return;

    const interval: ReturnType<typeof setInterval> = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3200);

    return () => clearInterval(interval);
  }, [isHoveringSteps]);

  return (
    <section className="relative py-28 bg-[#0A0A0A] text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A73E8]/5 to-transparent pointer-events-none" />

      {/* Header */}
      <div className="relative max-w-5xl mx-auto text-center mb-16 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1A73E8] to-[#7E3FF2]">
          How Search Rivals Works
        </h2>
      </div>

      {/* Connector Line (centered on card height) */}
      <div className="relative w-full max-w-6xl mx-auto mb-10 px-4 -mt-4">
        {/* Base line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 h-[3px] w-[78%] 
                        bg-gradient-to-r from-[#1A73E8]/40 to-[#7E3FF2]/40 rounded-full" />

        {/* Electric pulse */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-1/2 h-[3px] w-[78%] 
                      bg-gradient-to-r from-transparent via-[#7E3FF2] to-transparent blur-lg"
          animate={{ x: ["-40%", "40%"] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Steps Grid */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">

        {steps.map((step, i) => {
          const isActive = i === activeStep;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              onMouseEnter={() => {
                setActiveStep(i);
                setIsHoveringSteps(true);
              }}
              onMouseLeave={() => {
                setIsHoveringSteps(false);
              }}
              animate={{
                boxShadow: isActive
                  ? "0 0 45px rgba(124, 77, 255, 0.55)"
                  : "0 0 0 rgba(0,0,0,0)",
                borderColor: isActive ? "#7E3FF2" : "rgba(26,115,232,0.2)",
                scale: isActive ? 1.04 : 1,
              }}
              className="relative bg-[#111] border rounded-2xl 
                         p-8 text-center transition-all duration-400 group overflow-hidden"
            >
              {/* Ambient glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-[#1A73E8] to-[#7E3FF2] blur-2xl pointer-events-none transition-opacity duration-500 ${
                  isActive ? "opacity-25" : "opacity-0 group-hover:opacity-20"
                }`}
              />

              {/* Step Number */}
              <div className="relative text-4xl font-extrabold text-[#1A73E8] mb-4 tracking-tight">
                {step.step}
              </div>

              {/* Title */}
              <h3
                className={`relative text-xl font-semibold mb-4 transition-colors ${
                  isActive ? "text-[#7E3FF2]" : "text-white group-hover:text-[#1A73E8]"
                }`}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p className="relative text-gray-300 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Central dashboard card, synced to active step */}
      <DashboardAutoShowcase activeStep={activeStep} />
    </section>
  );
}
