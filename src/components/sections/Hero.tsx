"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/data";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const platformRef = useRef<HTMLDivElement>(null);
  const platformRotationRef = useRef<HTMLDivElement>(null);
  const mannequinRef = useRef<HTMLDivElement>(null);
  const mannequinRotationRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      /* Initial entrance */
      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          x: -40,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.4,
          ease: "power3.out",
          delay: 0.2,
        }
      );

      /* Hero depth movement */
      gsap.to(backgroundRef.current, {
        yPercent: 12,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(platformRef.current, {
        y: "-10vh",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(mannequinRef.current, {
        y: "-10vh",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      /* Infinite 3D rotation for mannequin */
      gsap.to(mannequinRotationRef.current, {
        rotationY: 360,
        duration: 18,
        repeat: -1,
        ease: "none",
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="grain relative min-h-[100svh] overflow-hidden bg-[#090b09]"
    >
      {/* Background */}
      <div
        ref={backgroundRef}
        className="absolute inset-[-8%] bg-[radial-gradient(circle_at_70%_50%,rgba(62,74,58,.35),transparent_36%),radial-gradient(circle_at_20%_20%,rgba(137,103,58,.15),transparent_35%)]"
      />

      {/* Architectural glow */}
      <div className="absolute right-[8%] top-[16%] h-[450px] w-[450px] rounded-full bg-[#b99052]/10 blur-[130px]" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-20 mx-auto flex min-h-[100svh] max-w-[1500px] flex-col justify-start pt-[12vh] md:flex-row md:items-center md:pt-32 px-6 pb-20 lg:px-12"
      >
        <div className="w-full md:w-[60%] lg:w-[53%]">
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.38em] text-[#c9a66b]">
            {siteConfig.hero.eyebrow}
          </p>

          <h1 className="max-w-[700px] font-display text-[clamp(4rem,7.2vw,7.6rem)] font-medium leading-[0.78] tracking-[-0.045em] text-[#f3ede3]">
            {siteConfig.hero.title}
            <br />

            <em className="text-[#c9a66b]">
              {siteConfig.hero.accentTitle}
            </em>
          </h1>

          <p className="mt-9 max-w-[450px] text-sm leading-7 text-white/55">
            {siteConfig.hero.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href={siteConfig.hero.primaryCta.href} className="luxury-button">
              {siteConfig.hero.primaryCta.label}
              <ArrowRight size={15} />
            </Link>

            <Link
              href={siteConfig.hero.secondaryCta.href}
              className="luxury-button luxury-button-outline"
            >
              {siteConfig.hero.secondaryCta.label}
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-14 flex gap-8 border-t border-white/10 pt-7">
            {siteConfig.stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl text-[#e5c994]">
                  {stat.value}
                </div>

                <div className="mt-1 text-[9px] uppercase tracking-[0.14em] text-white/40">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Stage */}
      <div className="pointer-events-none absolute right-0 bottom-[5%] top-auto z-10 h-[45%] w-full md:bottom-auto md:right-[-4%] md:top-[12%] md:h-[80%] md:w-[58%] lg:right-[0%] lg:w-[58%]">
        {/* Back glow */}
        <div className="absolute left-1/2 top-1/2 h-[58%] w-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c7a56e]/10 blur-[90px]" />

        {/* Rotating wooden platform */}
        <div
          ref={platformRef}
          className="absolute left-1/2 top-[74%] h-[90px] w-[72%] -translate-x-1/2 -translate-y-1/2"
          style={{ perspective: "1000px" }}
        >
          <div ref={platformRotationRef} className="absolute inset-0 h-full w-full">
            <div
              className="absolute inset-0 rounded-[50%] border border-[#d6b477]/40 bg-[radial-gradient(ellipse_at_center,#65513a_0%,#33281c_55%,#17130e_100%)] shadow-[0_25px_80px_rgba(0,0,0,.65)]"
            />
  
            <div className="absolute left-1/2 top-1/2 h-[15px] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[#d9b46f]/60 blur-[3px]" />
  
            <div className="absolute -bottom-1 left-1/2 h-5 w-[68%] -translate-x-1/2 rounded-[50%] bg-[#d8b26c]/20 blur-[8px]" />
          </div>
        </div>

        {/* Mannequin / Suit */}
        <div
          ref={mannequinRef}
          className="absolute left-1/2 top-[46%] h-[70%] w-[54%] -translate-x-1/2 -translate-y-1/2"
          style={{
            transformStyle: "preserve-3d",
            perspective: "1200px",
          }}
        >
          <div ref={mannequinRotationRef} className="absolute inset-0 h-full w-full" style={{ transformStyle: "preserve-3d" }}>
            {/* Dummy / Mannequin Image */}
            <div className="absolute left-1/2 top-0 h-[100%] w-[100%] -translate-x-1/2">
              <Image 
                src="/images/hero/hero-suit.png"
                alt="Luxury Suit"
                fill
                className="object-contain object-bottom drop-shadow-2xl"
                style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)' }}
                priority
                unoptimized
              />
            </div>
            
            {/* Future back image support */}
            {siteConfig.hero.backImage && (
              <div
                className="absolute left-1/2 top-[3%] h-[96%] w-[90%] -translate-x-1/2"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <Image
                  src={siteConfig.hero.backImage}
                  alt="Featured wholesale suit back"
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Hero side indicator */}
      <div className="absolute right-8 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex">
        <span className="font-display text-sm text-[#d8b578]">01</span>

        <div className="h-28 w-px bg-gradient-to-b from-[#c9a66b] via-white/20 to-transparent" />

        <span className="text-[10px] text-white/40">05</span>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-7 right-8 z-30 flex items-center gap-3 text-[9px] uppercase tracking-[0.25em] text-white/50">
        <span>Scroll Down</span>

        <ChevronDown size={14} className="animate-bounce" />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-28 bg-gradient-to-t from-[#0d1712] to-transparent" />
    </section>
  );
}