"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Diamond, Eye, Heart, Shield } from "lucide-react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { siteConfig } from "@/config/data";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const heroRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLElement>(null);
  const philosophyRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.fromTo(
        ".about-hero-content",
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.4, ease: "power3.out", delay: 0.2 }
      );

      // Story section reveal
      gsap.fromTo(
        ".story-reveal",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top 70%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Philosophy items
      gsap.fromTo(
        ".philosophy-item",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: philosophyRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Stats counter
      gsap.fromTo(
        ".stat-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // CTA reveal
      gsap.fromTo(
        ".cta-reveal",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Parallax on large image
      gsap.to(".about-parallax-img", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-parallax-img",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section
        ref={heroRef}
        className="grain relative min-h-[70vh] overflow-hidden bg-[#090B09] px-6 pt-32 pb-20 lg:min-h-[80vh] lg:px-12 lg:pt-40 lg:pb-28"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(110,91,58,.12),transparent_40%)]" />

        <div className="about-hero-content relative z-10 mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Left - Text */}
          <div>
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.38em] text-[#c9a66b]">
              OUR STORY
            </p>

            <h1 className="max-w-[900px] font-display text-[clamp(2.5rem,6vw,6.5rem)] font-medium leading-[0.82] tracking-[-0.04em] text-[#f3ede3]">
              Crafted with
              <br />
              <em className="text-[#c9a66b]">Purpose & Passion</em>
            </h1>

            <p className="mt-8 max-w-[550px] text-base leading-8 text-white/50">
              For over a decade, Al-Fajr Collection has been the trusted wholesale
              partner for retailers and boutiques across Pakistan, delivering premium
              ladies fashion with unwavering quality.
            </p>
          </div>

          {/* Right - Editorial Image */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto h-[520px] w-full max-w-[480px] overflow-hidden rounded-[6px]">
              <Image
                src="/images/collections/embroidered.webp"
                alt="Al-Fajr craftsmanship"
                fill
                className="object-cover"
                sizes="40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#c9a66b]">
                  Heritage & Craft
                </p>
                <p className="mt-1 font-display text-2xl text-white">
                  Every Stitch Tells a Story
                </p>
              </div>
            </div>
            {/* Decorative thin line */}
            <div className="absolute -right-4 top-1/4 hidden h-[40%] w-px bg-gradient-to-b from-transparent via-[#c9a66b]/30 to-transparent lg:block" />
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section ref={storyRef} className="bg-[#0E1712] px-6 py-16 lg:px-12 lg:py-32">
        <div className="story-reveal mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.35em] text-[#c9a66b] lg:text-[10px]">
              BRAND STORY
            </p>

            <h2 className="font-display text-3xl leading-[0.9] text-[#f3ede3] lg:text-4xl xl:text-5xl">
              Where Tradition
              <br />
              Meets <em className="text-[#c9a66b]">Innovation</em>
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-7 text-white/50 lg:mt-8 lg:space-y-5">
              <p>
                Al-Fajr Collection was founded with a singular vision: to bridge the gap
                between premium Pakistani fashion and the wholesale market. We believed that
                retailers deserved access to exceptional quality without compromise.
              </p>
              <p>
                Today, we serve over 1,000 retailers and boutiques nationwide, offering
                curated collections that blend timeless craftsmanship with contemporary design.
                Every piece we create is a testament to our commitment to excellence.
              </p>
              <p>
                Our name, Al-Fajr, means &ldquo;the dawn&rdquo; &mdash; symbolizing new beginnings
                and the fresh perspective we bring to wholesale fashion. We don&apos;t just supply
                clothes; we empower businesses to thrive.
              </p>
            </div>
          </div>

          <div className="relative h-[400px] overflow-hidden rounded-[6px] lg:h-[650px]">
            <Image
              src="/images/collections/embroidered.webp"
              alt="Al-Fajr Collection craftsmanship"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* Large Fashion Image - Parallax */}
      <section className="relative h-[60vh] overflow-hidden bg-[#090B09] lg:h-[80vh]">
        <div className="about-parallax-img absolute inset-[-20%]">
          <Image
            src="/images/collections/luxury.webp"
            alt="Premium luxury fashion"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-display text-4xl text-white/80 lg:text-6xl">
            &ldquo;Elegance in Every Stitch&rdquo;
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section ref={philosophyRef} className="bg-[#090B09] px-6 py-16 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center">
            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.35em] text-[#c9a66b] lg:text-[10px]">
              OUR PHILOSOPHY
            </p>

            <h2 className="font-display text-3xl leading-[0.9] text-[#f3ede3] lg:text-4xl xl:text-5xl">
              Built on <em className="text-[#c9a66b]">Values</em>
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:gap-6 lg:grid-cols-4">
            {[
              { icon: Diamond, title: "Quality First", description: "Every fabric, every stitch, every detail is held to the highest standard." },
              { icon: Heart, title: "Crafted with Care", description: "Traditional artistry meets modern design in every piece we create." },
              { icon: Shield, title: "Trusted Partnership", description: "We don't just sell — we build lasting relationships with our retailers." },
              { icon: Eye, title: "Fashion Forward", description: "Trend-aware collections that keep your store ahead of the curve." },
            ].map((item, index) => (
              <div
                key={item.title}
                className="philosophy-item border border-white/10 bg-[#101A15] p-8 transition duration-500 hover:border-[#c9a66b]/30"
              >
                <div className="flex h-14 w-14 items-center justify-center border border-[#c9a66b]/30 text-[#c9a66b]">
                  <item.icon size={24} strokeWidth={1.2} />
                </div>

                <h3 className="mt-7 font-display text-2xl text-[#f3ede3]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/45">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Craftsmanship */}
      <section className="bg-[#101A15] px-6 py-16 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="relative h-[350px] overflow-hidden rounded-[6px] lg:h-[600px]">
            <Image
              src="/images/lookbook/look-01.webp"
              alt="Quality craftsmanship"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#c9a66b]">
                QUALITY ASSURANCE
              </p>
              <p className="mt-2 text-sm text-white/60">
                Every piece passes our rigorous quality inspection before dispatch.
              </p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.35em] text-[#c9a66b] lg:text-[10px]">
              CRAFTSMANSHIP
            </p>

            <h2 className="font-display text-3xl leading-[0.9] text-[#f3ede3] lg:text-4xl xl:text-5xl">
              Quality You Can
              <br />
              <em className="text-[#c9a66b]">Trust</em>
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-7 text-white/50 lg:mt-8 lg:space-y-5">
              <p>
                At Al-Fajr Collection, quality isn&apos;t just a promise — it&apos;s our foundation.
                From sourcing the finest fabrics to the final stitch, every step is meticulously
                overseen.
              </p>
              <p>
                Our state-of-the-art production facility combines traditional Pakistani
                craftsmanship with modern technology, ensuring consistency across every
                piece in every order.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              {[
                { number: "100%", label: "Quality Inspected" },
                { number: "72hr", label: "Average Dispatch" },
              ].map((item) => (
                <div key={item.label} className="border-t border-white/10 pt-5">
                  <div className="font-display text-3xl text-[#c9a66b]">
                    {item.number}
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/40">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section ref={statsRef} className="bg-[#0E1712] px-6 py-20 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-8 lg:grid-cols-4">
          {siteConfig.aboutStats.map((stat) => (
            <div key={stat.label} className="stat-item text-center">
              <div className="font-display text-4xl text-[#c9a66b] lg:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/40">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Retailers */}
      <section className="bg-[#090B09] px-6 py-16 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] items-start gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.35em] text-[#c9a66b] lg:text-[10px]">
              WHY RETAILERS CHOOSE US
            </p>

            <h2 className="font-display text-3xl leading-[0.9] text-[#f3ede3] lg:text-4xl xl:text-5xl">
              Your Success,
              <br />
              <em className="text-[#c9a66b]">Our Priority</em>
            </h2>

            <p className="mt-5 max-w-[420px] text-sm leading-7 text-white/50 lg:mt-6">
              We understand the challenges retailers face. That&apos;s why we&apos;ve built
              everything around making your business easier, more profitable, and more
              successful.
            </p>
          </div>

          <div className="space-y-3 lg:space-y-4">
            {siteConfig.whyRetailers.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-5 border border-white/10 bg-[#101A15] p-6 transition duration-500 hover:border-[#c9a66b]/30"
              >
                <span className="font-display text-2xl text-[#c9a66b]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-white/60">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="relative overflow-hidden bg-[#30251a] px-6 py-16 lg:px-12 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_40%,rgba(211,171,103,.15),transparent_35%)]" />

        <div className="cta-reveal relative z-10 mx-auto max-w-[900px] text-center">
          <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.35em] text-[#d4b273] lg:text-[10px]">
            PARTNER WITH US
          </p>

          <h2 className="font-display text-3xl leading-[0.9] text-[#f3e8d8] lg:text-4xl xl:text-6xl">
            Ready to Grow
            <br />
            Your Business?
          </h2>

          <p className="mt-6 mx-auto max-w-[500px] text-sm leading-7 text-white/50">
            Join over 1,000 retailers who trust Al-Fajr Collection for quality,
            value, and reliable partnership.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/become-a-partner" className="luxury-button">
              Become a Partner
              <ArrowRight size={14} />
            </Link>

            <Link href="/wholesale" className="luxury-button luxury-button-outline">
              Wholesale Info
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
