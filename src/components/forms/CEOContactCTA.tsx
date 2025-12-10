"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function CEOContactCTA() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="relative w-full p-[2px] rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.7)]">

      {/* =============== TRON V2 NEON BORDER ANIMATION =============== */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="absolute inset-0 rounded-3xl border-[3px] border-transparent"
          style={{
            maskImage:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
          }}
          animate={{
            boxShadow: [
              "0 0 12px #1A73E8, 0 0 24px #1A73E8",
              "0 0 12px #7E3FF2, 0 0 24px #7E3FF2",
              "0 0 12px #1A73E8, 0 0 24px #1A73E8",
            ],
            borderColor: ["#1A73E8", "#7E3FF2", "#1A73E8"],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Moving neon beam around the border */}
        <motion.div
          className="absolute w-24 h-1 bg-gradient-to-r from-[#1A73E8] to-[#7E3FF2] rounded-full"
          animate={{
            pathLength: [0, 1],
            offsetDistance: ["0%", "100%"],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            offsetPath: "path('M 12 12 H 98% V 98% H 12 Z')",
          }}
        />
      </motion.div>

      {/* =============== FORM CONTAINER =============== */}
      <div className="relative bg-black/40 border border-white/10 rounded-3xl px-6 py-8 lg:px-8">

        {/* HEADER */}
        <h3
          className="text-2xl font-extrabold text-center bg-clip-text 
                     text-transparent bg-gradient-to-r from-[#1A73E8] to-[#7E3FF2] mb-6"
        >
          Speak Directly With Our CEO!
        </h3>

        {/* FORM */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-[#1A73E8] outline-none"
          />

          <input
            type="text"
            placeholder="Last Name"
            className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-[#1A73E8] outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-[#1A73E8] outline-none"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-[#1A73E8] outline-none"
          />

          <textarea
            placeholder="Tell us more about your goals..."
            rows={4}
            className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-[#1A73E8] outline-none"
          />

          {/* TERMS CHECKBOX */}
          <label className="flex items-start gap-3 text-gray-300 text-xs leading-relaxed mt-2">
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className="mt-1 w-4 h-4 accent-[#1A73E8]"
            />
            <span>
              By clicking submit, I agree to receive communications from Search
              Rivals Strategies, LLC in accordance with the Privacy Policy and Terms
              of Use. I agree to receive email, calls, and text messages regarding
              updates. Reply STOP to stop, HELP for help. Message/data rates may apply.
            </span>
          </label>

          {/* reCAPTCHA placeholder */}
          <div className="w-full bg-black/30 border border-white/10 rounded-xl flex items-center justify-center py-6 mt-2">
            <span className="text-gray-400 text-xs">
              reCAPTCHA will appear here (v2)
            </span>
          </div>

          {/* CTA */}
          <button
            type="submit"
            disabled={!checked}
            className={`w-full rounded-xl py-3.5 text-white font-semibold text-sm transition-all
              ${checked
                ? "bg-[#1A73E8] hover:bg-[#155bc7] cursor-pointer"
                : "bg-gray-700 cursor-not-allowed opacity-60"}`}
          >
            Get Your Free 90-Day Visibility Audit
          </button>
        </form>
      </div>
    </div>
  );
}
