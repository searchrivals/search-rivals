"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-[#1A73E8]/20 text-white shadow-lg transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-white text-2xl font-bold tracking-tight">
          Search <span className="text-[#1A73E8]">Rivals</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex gap-8 text-gray-300 text-sm">
          <Link href="#services" className="hover:text-[#1A73E8] transition-colors">
            Services
          </Link>
          <Link href="#about" className="hover:text-[#1A73E8] transition-colors">
            About
          </Link>
          <Link href="#results" className="hover:text-[#1A73E8] transition-colors">
            Results
          </Link>
          <Link href="#contact" className="hover:text-[#1A73E8] transition-colors">
            Contact
          </Link>
        </div>

        {/* CTA */}
        <Link
          href="#contact"
          className="bg-gradient-to-r from-[#1A73E8] to-[#7E3FF2] text-white px-5 py-2 rounded-xl text-sm font-medium hover:opacity-90 transition-all"
        >
          Get Free Audit
        </Link>
      </div>
    </motion.nav>
  );
}
