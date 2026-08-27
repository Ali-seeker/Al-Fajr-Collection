"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#30251a] px-6 py-16 lg:px-12 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_40%,rgba(211,171,103,.2),transparent_35%)]" />

      <div className="relative z-10 mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-12">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#d4b273] lg:text-[10px]">
            LET&apos;S GROW TOGETHER
          </p>

          <h2 className="mt-4 max-w-[650px] font-display text-4xl leading-[0.88] text-[#f3e8d8] lg:mt-5 lg:text-5xl xl:text-7xl">
            Looking for a Reliable
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Wholesale Fashion
            <br />
            Partner?
          </h2>

          <p className="mt-6 max-w-[530px] text-sm leading-7 text-white/50 lg:mt-7">
            Join retailers who trust us for quality, price and long-term
            business growth.
          </p>

          <Link
            href="/wholesale"
            className="luxury-button mt-7 lg:mt-8"
          >
            Become a Wholesale Partner
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="relative mx-auto h-[220px] w-full max-w-[520px] lg:h-[280px]">
          <div className="absolute inset-0 rounded-full bg-[#c69b5a]/10 blur-[70px]" />

          <div className="absolute left-1/2 top-1/2 h-[180px] w-[90%] -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] rounded-[50%] bg-[#9d7548]/20 blur-[2px] lg:h-[220px]" />

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="font-display text-5xl text-[#d1ae73]/70 lg:text-6xl">
              SW
            </div>

            <div className="mt-2 text-[8px] uppercase tracking-[0.35em] text-white/30 lg:text-[9px]">
              B2B FASHION
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}