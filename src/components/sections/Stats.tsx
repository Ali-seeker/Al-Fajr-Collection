"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { siteConfig } from "@/config/data";

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  return (
    <section className="bg-[#0e1712] px-6 py-10 lg:px-12">
      <div
        ref={ref}
        className="mx-auto grid max-w-[1400px] grid-cols-1 divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0"
      >
        {siteConfig.stats.map((stat, index) => (
          <div
            key={stat.label}
            className="px-6 py-5 text-center transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible
                ? "translateY(0)"
                : "translateY(20px)",
              transitionDelay: `${index * 100}ms`,
            }}
          >
            <div className="font-display text-3xl text-[#d5b477]">
              {stat.value}
            </div>

            <div className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/40">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}