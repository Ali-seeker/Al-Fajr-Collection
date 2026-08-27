"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/data";

gsap.registerPlugin(ScrollTrigger);

export default function NewCollection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const getDistance = () =>
        Math.max(0, track.scrollWidth - window.innerWidth + 100);

      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getDistance() + 600}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#101a15] py-16 lg:h-screen lg:py-0"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(110,91,58,.16),transparent_30%)]" />

      <div className="relative z-10 flex h-full items-center">
        <div className="w-full">
          {/* Header */}
          <div className="mb-8 px-6 lg:absolute lg:left-12 lg:top-1/2 lg:z-20 lg:mb-0 lg:w-[310px] lg:-translate-y-1/2 lg:px-0">
            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.35em] text-[#c9a66b] lg:text-[10px]">
              NEW COLLECTION
            </p>

            <h2 className="font-display text-4xl leading-[0.9] text-[#f1e9dc] lg:text-5xl xl:text-6xl">
              Summer
              <br />
              <em className="text-[#c9a66b]">'26</em>
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/45 lg:mt-6">
              Discover our latest wholesale collection crafted for elegance
              and made for business.
            </p>

            <Link
              href="/collections"
              className="luxury-button luxury-button-outline mt-6 lg:mt-7"
            >
              View Collection
              <ArrowRight size={14} />
            </Link>

            <div className="mt-10 flex items-center gap-5 lg:mt-12">
              <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70">
                <ChevronLeft size={15} />
              </button>

              <span className="text-[10px] text-white/50">
                01 <span className="mx-3 text-white/20">—</span> 04
              </span>

              <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70">
                <ChevronRight size={15} />
              </button>
            </div>
          </div>

          {/* Cards */}
          <div
            ref={trackRef}
            className="flex gap-4 pl-6 lg:ml-[390px] lg:gap-5 lg:pl-0"
          >
            {siteConfig.collections.map((collection) => (
              <Link
                key={collection.id}
                href={`/collections/${collection.slug}`}
                className="group relative block h-[380px] w-[260px] flex-none overflow-hidden rounded-[8px] border border-white/10 bg-[#18221d] lg:h-[540px] lg:w-[350px]"
              >
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover transition duration-1000 group-hover:scale-105"
                  sizes="350px"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-7">
                  <h3 className="font-display text-3xl text-white">
                    {collection.title}
                  </h3>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/50">
                    {collection.designs}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-[10px] uppercase tracking-wider text-[#d8b578]">
                    Explore Collection
                    <ArrowRight size={13} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}