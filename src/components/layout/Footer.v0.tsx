"use client";

import Link from "next/link";

export default function FooterV0() {
  return (
    <footer className="w-full bg-black text-white border-t border-white/10 pt-16 pb-10 px-6 md:px-12 lg:px-20">

      {/* --------------------------- */}
      {/* Logo + Mission Statement    */}
      {/* --------------------------- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 pb-12">
        <div>
          <h2 className="text-xl font-semibold mb-3">Search Rivals</h2>
          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            Search Rivals is the AI SEO Agency built for modern search. We help brands
            outperform competitors, strengthen visibility across every surface,
            and turn search activity into revenue that compounds.
          </p>
        </div>

        <div className="flex flex-col md:items-end space-y-2 text-sm text-gray-300">
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
          <Link href="/services" className="hover:text-white transition">Services</Link>
          <Link href="/about" className="hover:text-white transition">About Us</Link>
        </div>
      </div>

      {/* --------------------------- */}
      {/* Location Grid (Punch Style) */}
      {/* --------------------------- */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center pb-12">
        <div>
          <p className="text-lg font-semibold">LV</p>
          <p className="text-sm text-gray-400">Las Vegas, NV</p>
        </div>
        <div>
          <p className="text-lg font-semibold">CO</p>
          <p className="text-sm text-gray-400">Denver, CO</p>
        </div>
        <div>
          <p className="text-lg font-semibold">CHI</p>
          <p className="text-sm text-gray-400">Chicago, IL</p>
        </div>
        <div>
          <p className="text-lg font-semibold">NYC</p>
          <p className="text-sm text-gray-400">NYC Metro</p>
        </div>
      </div>

      {/* --------------------------- */}
      {/* Contact Row                 */}
      {/* --------------------------- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-400 pb-10 border-t border-white/10 pt-10">
        <div>
          Primary Business Address Here<br />
          <Link href="/" className="text-blue-400 hover:underline">Directions</Link>
        </div>
        <div className="md:text-center">
          +1 702-418-XXXX<br />
          <Link href="mailto:info@searchrivals.com" className="text-blue-400 hover:underline">info@searchrivals.com</Link>
        </div>
        <div className="md:text-right">
          <Link href="mailto:support@searchrivals.com" className="text-blue-400 hover:underline">support@searchrivals.com</Link>
        </div>
      </div>

      {/* --------------------------- */}
      {/* Legal + Awards              */}
      {/* --------------------------- */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between text-xs text-gray-500 pt-8 border-t border-white/10">

        <div className="space-x-3 pb-4 md:pb-0">
          <span>© Copyright 2025 Search Rivals Marketing, LLC</span>
          <span>| Founded 2025</span>
        </div>

        <div className="flex space-x-4 pb-4 md:pb-0">
          {/* placeholder for award icons */}
          <div className="w-10 h-10 bg-white/5 rounded"></div>
          <div className="w-10 h-10 bg-white/5 rounded"></div>
          <div className="w-10 h-10 bg-white/5 rounded"></div>
        </div>

        <div className="space-x-3">
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <span>|</span>
          <Link href="/sitemap" className="hover:text-white">Sitemap</Link>
        </div>
      </div>

      {/* --------------------------- */}
      {/* Scrolling Tagline (v1 gets animation) */}
      {/* --------------------------- */}
      <div className="w-full border-t border-white/10 mt-12 pt-6 pb-4 text-center text-lg font-semibold opacity-60">
        Outrank Rivals. Own the Search.
      </div>
    </footer>
  );
}
