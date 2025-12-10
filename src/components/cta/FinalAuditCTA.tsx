"use client";

import React from "react";

export default function FinalAuditCTA() {
  return (
    <section className="w-full py-20 bg-[#000000] border-t border-white/10 text-white">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-4xl font-semibold tracking-tight">
          Ready for Your Final Visibility Audit?
        </h2>

        <p className="text-lg text-white/70 max-w-2xl mx-auto">
          Take the last step toward dominating your market. Our team will break
          down your visibility gaps and map out how Search Rivals gets you from
          stuck to unstoppable.
        </p>

        <a
          href="#audit"
          className="inline-block mt-6 px-10 py-4 rounded-xl bg-blue-600
                     hover:bg-blue-700 transition-all font-medium text-lg"
        >
          Get Your Free Visibility Audit
        </a>
      </div>
    </section>
  );
}
