"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Check, Diamond, ShieldCheck, Truck, Package, Clock, Users } from "lucide-react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { siteConfig } from "@/config/data";

gsap.registerPlugin(ScrollTrigger);

export default function WholesalePage() {
  const heroRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLElement>(null);
  const benefitsRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".wholesale-hero-content",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.4, ease: "power3.out", delay: 0.2 }
      );

      // Process steps
      gsap.fromTo(
        ".process-step",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: processRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Benefits
      gsap.fromTo(
        ".benefit-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: benefitsRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Parallax image
      gsap.to(".wholesale-parallax", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: ".wholesale-parallax",
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
        className="grain relative min-h-[70vh] overflow-hidden bg-[#090B09] px-6 pt-32 pb-20 lg:min-h-[85vh] lg:px-12 lg:pt-40 lg:pb-28"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(110,91,58,.12),transparent_40%)]" />

        <div className="wholesale-hero-content relative z-10 mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.38em] text-[#c9a66b]">
              WHOLESALE PARTNERSHIP
            </p>

            <h1 className="max-w-[700px] font-display text-[clamp(2.5rem,5.5vw,6rem)] font-medium leading-[0.82] tracking-[-0.04em] text-[#f3ede3]">
              Grow Your
              <br />
              Business with
              <br />
              <em className="text-[#c9a66b]">Premium Fashion</em>
            </h1>

            <p className="mt-8 max-w-[500px] text-base leading-8 text-white/50">
              Partner with Al-Fajr Collection and access premium ladies fashion
              at competitive wholesale prices. Built for retailers, boutiques, and
              fashion businesses.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/become-a-partner" className="luxury-button">
                Become a Wholesale Partner
                <ArrowRight size={14} />
              </Link>

              <Link href="/contact" className="luxury-button luxury-button-outline">
                Contact Sales
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative mx-auto h-[500px] w-full max-w-[500px] overflow-hidden rounded-[6px]">
              <Image
                src="/images/collections/luxury.webp"
                alt="Wholesale fashion partnership"
                fill
                className="object-cover"
                sizes="40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#c9a66b]">
                  Premium Wholesale
                </p>
                <p className="mt-1 font-display text-2xl text-white">
                  Your Business, Our Partnership
                </p>
              </div>
            </div>
            {/* Decorative thin line */}
            <div className="absolute -right-4 top-1/4 hidden h-[40%] w-px bg-gradient-to-b from-transparent via-[#c9a66b]/30 to-transparent lg:block" />
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-[#0E1712] px-6 py-16 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center">
            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.35em] text-[#c9a66b] lg:text-[10px]">
              WHO WE SERVE
            </p>

            <h2 className="font-display text-3xl leading-[0.9] text-[#f3ede3] lg:text-4xl xl:text-5xl">
              Built for <em className="text-[#c9a66b]">Your Business</em>
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:gap-6 lg:grid-cols-3">
            {[
              { icon: Users, title: "Retailers", description: "Independent store owners looking for quality inventory at competitive prices." },
              { icon: Diamond, title: "Boutiques", description: "Fashion-forward boutiques seeking unique, premium designs for their clientele." },
              { icon: Package, title: "Resellers", description: "Online and offline resellers building fashion brands with trusted suppliers." },
              { icon: ShieldCheck, title: "Fashion Houses", description: "Established fashion houses seeking reliable wholesale partnerships." },
              { icon: Truck, title: "Distributors", description: "Regional distributors looking for consistent supply and quality assurance." },
              { icon: Clock, title: "Seasonal Buyers", description: "Businesses planning seasonal collections with trend-aware wholesale options." },
            ].map((item, index) => (
              <div
                key={item.title}
                className="border border-white/10 bg-[#101A15] p-8 transition duration-500 hover:border-[#c9a66b]/30"
              >
                <item.icon size={28} className="text-[#c9a66b]" strokeWidth={1.2} />

                <h3 className="mt-6 font-display text-2xl text-[#f3ede3]">
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

      {/* Wholesale Benefits */}
      <section ref={benefitsRef} className="bg-[#090B09] px-6 py-16 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="relative h-[350px] overflow-hidden rounded-[6px] lg:h-[600px]">
            <Image
              src="/images/lookbook/look-02.webp"
              alt="Wholesale benefits"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#c9a66b]">
                WHY PARTNER WITH US
              </p>
              <p className="mt-2 font-display text-3xl text-white">
                Quality Meets Value
              </p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.35em] text-[#c9a66b] lg:text-[10px]">
              WHOLESALE BENEFITS
            </p>

            <h2 className="font-display text-3xl leading-[0.9] text-[#f3ede3] lg:text-4xl xl:text-5xl">
              Everything You
              <br />
              Need to <em className="text-[#c9a66b]">Succeed</em>
            </h2>

            <div className="mt-8 space-y-4 lg:mt-10 lg:space-y-5">
              {siteConfig.wholesaleBenefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="benefit-item flex items-start gap-4 border-b border-white/10 pb-5"
                >
                  <Check size={18} className="mt-1 shrink-0 text-[#c9a66b]" />
                  <div>
                    <h4 className="font-display text-xl text-[#f3ede3]">
                      {benefit.title}
                    </h4>
                    <p className="mt-1 text-sm text-white/45">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="relative h-[50vh] overflow-hidden bg-[#0E1712] lg:h-[60vh]">
        <div className="wholesale-parallax absolute inset-[-20%]">
          <Image
            src="/images/collections/embroidered.webp"
            alt="Quality assurance"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#c9a66b]">
              QUALITY ASSURANCE
            </p>
            <p className="mt-4 font-display text-4xl text-white lg:text-6xl">
              Every Piece Inspected
            </p>
            <p className="mt-4 mx-auto max-w-[450px] text-sm text-white/50">
              Our rigorous quality control ensures every item meets the highest
              standards before dispatch.
            </p>
          </div>
        </div>
      </section>

      {/* How Wholesale Works - Process */}
      <section ref={processRef} className="bg-[#090B09] px-6 py-16 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center">
            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.35em] text-[#c9a66b] lg:text-[10px]">
              HOW IT WORKS
            </p>

            <h2 className="font-display text-3xl leading-[0.9] text-[#f3ede3] lg:text-4xl xl:text-5xl">
              Wholesale Made <em className="text-[#c9a66b]">Simple</em>
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:gap-6 lg:grid-cols-5">
            {siteConfig.wholesaleProcess.map((step, index) => (
              <div
                key={step.step}
                className="process-step relative border border-white/10 bg-[#101A15] p-7 transition duration-500 hover:border-[#c9a66b]/30"
              >
                <span className="font-display text-5xl text-[#c9a66b]/20">
                  {step.step}
                </span>

                <h3 className="mt-4 font-display text-xl text-[#f3ede3]">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-white/45">
                  {step.description}
                </p>

                {index < siteConfig.wholesaleProcess.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-[#c9a66b]/30 lg:block">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOQ / Pricing Philosophy */}
      <section className="bg-[#101A15] px-6 py-16 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.35em] text-[#c9a66b] lg:text-[10px]">
              FLEXIBLE ORDERING
            </p>

            <h2 className="font-display text-3xl leading-[0.9] text-[#f3ede3] lg:text-4xl xl:text-5xl">
              Designed for
              <br />
              <em className="text-[#c9a66b]">Every Business</em>
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-7 text-white/50 lg:mt-8 lg:space-y-5">
              <p>
                We understand that every retailer has different needs. That&apos;s why we offer
                flexible minimum order quantities and competitive pricing tiers that grow
                with your business.
              </p>
              <p>
                Whether you&apos;re a boutique starting with 10 pieces or a distributor ordering
                in hundreds, our pricing structure ensures you get the best value at every
                volume.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="border-t border-white/10 pt-5">
                <div className="font-display text-3xl text-[#c9a66b]">
                  5+ Pieces
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/40">
                  Minimum Order
                </div>
              </div>

              <div className="border-t border-white/10 pt-5">
                <div className="font-display text-3xl text-[#c9a66b]">
                  Tiered
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/40">
                  Volume Discounts
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[350px] overflow-hidden rounded-[6px] lg:h-[550px]">
            <Image
              src="/images/lookbook/look-03.webp"
              alt="Flexible wholesale ordering"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* Bulk Ordering & Supply */}
      <section className="bg-[#0E1712] px-6 py-16 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            <div className="border border-white/10 bg-[#101A15] p-10">
              <Package size={32} className="text-[#c9a66b]" strokeWidth={1.2} />

              <h3 className="mt-6 font-display text-3xl text-[#f3ede3]">
                Bulk Ordering
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Streamlined bulk ordering process designed for efficiency. Choose your
                collection, select products, confirm quantities, and we handle the rest.
                Our logistics team ensures timely preparation and dispatch of every order.
              </p>

              <ul className="mt-6 space-y-3">
                {["Easy online ordering", "Flexible quantities", "Fast processing", "Quality packaging"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/50">
                    <Check size={14} className="text-[#c9a66b]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-white/10 bg-[#101A15] p-10">
              <Truck size={32} className="text-[#c9a66b]" strokeWidth={1.2} />

              <h3 className="mt-6 font-display text-3xl text-[#f3ede3]">
                Supply Reliability
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Consistent availability and dependable delivery form the backbone of our
                wholesale service. We maintain strategic inventory levels to ensure your
                business never faces stock disruptions.
              </p>

              <ul className="mt-6 space-y-3">
                {["Year-round availability", "Strategic inventory", "Nationwide delivery", "Order tracking"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/50">
                    <Check size={14} className="text-[#c9a66b]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#090B09] px-6 py-16 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[900px]">
          <div className="text-center">
            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.35em] text-[#c9a66b] lg:text-[10px]">
              COMMON QUESTIONS
            </p>

            <h2 className="font-display text-3xl leading-[0.9] text-[#f3ede3] lg:text-4xl xl:text-5xl">
              Frequently <em className="text-[#c9a66b]">Asked</em>
            </h2>
          </div>

          <div className="mt-10 space-y-3 lg:mt-14 lg:space-y-4">
            {[
              {
                q: "What is the minimum order quantity?",
                a: "Our MOQ starts from as low as 5 pieces per design, depending on the collection. Contact us for specific requirements.",
              },
              {
                q: "Do you offer bulk discounts?",
                a: "Yes, we offer tiered pricing with increasing discounts as your order volume grows. Contact our sales team for current pricing tiers.",
              },
              {
                q: "How long does delivery take?",
                a: "Standard delivery within Pakistan takes 3-7 business days depending on your location. Express options are available.",
              },
              {
                q: "Can I request custom designs?",
                a: "Yes, we offer custom design services for large volume orders. Reach out to discuss your specific requirements.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept bank transfers, jazzcash, and other standard payment methods. Payment terms can be discussed for established partners.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="border border-white/10 bg-[#101A15] p-7"
              >
                <h4 className="font-display text-xl text-[#f3ede3]">
                  {faq.q}
                </h4>
                <p className="mt-3 text-sm leading-6 text-white/45">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-[#30251a] px-6 py-16 lg:px-12 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_40%,rgba(211,171,103,.15),transparent_35%)]" />

        <div className="relative z-10 mx-auto max-w-[900px] text-center">
          <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.35em] text-[#d4b273] lg:text-[10px]">
            START TODAY
          </p>

          <h2 className="font-display text-3xl leading-[0.9] text-[#f3e8d8] lg:text-4xl xl:text-6xl">
            Become a
            <br />
            Wholesale Partner
          </h2>

          <p className="mt-6 mx-auto max-w-[500px] text-sm leading-7 text-white/50">
            Join over 1,000 retailers who trust Al-Fajr Collection. Fill out
            the partnership form and our team will be in touch within 24 hours.
          </p>

          <Link href="/become-a-partner" className="luxury-button mt-10">
            Become a Wholesale Partner
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
