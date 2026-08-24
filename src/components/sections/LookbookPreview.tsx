"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/data";

export default function LookbookPreview() {
  return (
    <section className="overflow-hidden bg-[#0b0f0c] px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1450px]">
        <div className="grid items-end gap-12 lg:grid-cols-[320px_1fr]">
          {/* Intro */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c9a66b]">
              LOOKBOOK
            </p>

            <h2 className="mt-5 font-display text-5xl leading-[0.88] text-white lg:text-6xl">
              Timeless
              <br />
              Elegance
              <br />
              <em className="text-[#c9a66b]">In Every Detail</em>
            </h2>

            <p className="mt-6 text-sm leading-7 text-white/45">
              Explore how our designs bring beauty, tradition and style
              together.
            </p>

            <Link
              href="/lookbook"
              className="luxury-button luxury-button-outline mt-7"
            >
              Explore Lookbook
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {siteConfig.lookbook.map((item, index) => (
              <Link
                href="/lookbook"
                key={item.id}
                className={`group relative overflow-hidden rounded-[5px] ${index === 0
                    ? "aspect-[3/4]"
                    : index === 1
                      ? "mt-10 aspect-[3/4]"
                      : index === 2
                        ? "aspect-[3/4]"
                        : "mt-10 aspect-[3/4]"
                  }`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-1000 group-hover:scale-105"
                  sizes="25vw"
                />

                <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/0" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-14 h-px w-full bg-white/10" />
      </div>
    </section>
  );
}