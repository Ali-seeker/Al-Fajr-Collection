"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { siteConfig } from "@/config/data";

gsap.registerPlugin(ScrollTrigger);

export default function LookbookPage() {
  const heroRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".lookbook-hero-content",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.4, ease: "power3.out", delay: 0.2 }
      );

      // Reveal images on scroll
      gsap.fromTo(
        ".lookbook-reveal",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".lookbook-grid",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Parallax on full-width images
      gsap.to(".lookbook-parallax", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: ".lookbook-parallax",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Hover movement on images
      const images = document.querySelectorAll(".lookbook-hover-img");
      images.forEach((img) => {
        const el = img as HTMLElement;
        el.addEventListener("mousemove", (e: Event) => {
          const mouseEvent = e as MouseEvent;
          const rect = el.getBoundingClientRect();
          const x = (mouseEvent.clientX - rect.left) / rect.width - 0.5;
          const y = (mouseEvent.clientY - rect.top) / rect.height - 0.5;

          gsap.to(el, {
            x: x * 15,
            y: y * 15,
            duration: 0.6,
            ease: "power2.out",
          });
        });

        el.addEventListener("mouseleave", () => {
          gsap.to(el, {
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          });
        });
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
        className="grain relative min-h-[70vh] overflow-hidden bg-[#090B09] px-6 pt-32 pb-16 lg:min-h-[80vh] lg:px-12 lg:pt-40 lg:pb-24"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(110,91,58,.1),transparent_40%)]" />

        <div className="lookbook-hero-content relative z-10 mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Left - Text */}
          <div>
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.38em] text-[#c9a66b]">
              LOOKBOOK
            </p>

            <h1 className="max-w-[800px] font-display text-[clamp(2.5rem,5.5vw,6rem)] font-medium leading-[0.82] tracking-[-0.04em] text-[#f3ede3]">
              Timeless
              <br />
              <em className="text-[#c9a66b]">Elegance</em>
            </h1>

            <p className="mt-8 max-w-[500px] text-base leading-8 text-white/50">
              A visual journey through our latest collections. Discover the artistry,
              craftsmanship, and beauty behind every piece.
            </p>
          </div>

          {/* Right - Editorial Image */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto h-[520px] w-full max-w-[480px] overflow-hidden rounded-[6px]">
              <Image
                src="/images/lookbook/look-02.webp"
                alt="Fashion lookbook editorial"
                fill
                className="object-cover"
                sizes="40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#c9a66b]">
                  Editorial
                </p>
                <p className="mt-1 font-display text-2xl text-white">
                  Where Art Meets Fashion
                </p>
              </div>
            </div>
            {/* Decorative thin line */}
            <div className="absolute -right-4 top-1/4 hidden h-[40%] w-px bg-gradient-to-b from-transparent via-[#c9a66b]/30 to-transparent lg:block" />
          </div>
        </div>
      </section>

      {/* Asymmetric Image Grid */}
      <section className="lookbook-grid bg-[#090B09] px-6 py-12 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          {/* Row 1: Large + Small */}
          <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-[1.5fr_1fr]">
            <div className="lookbook-reveal lookbook-hover-img group relative h-[350px] overflow-hidden rounded-[6px] sm:h-[450px] lg:h-[650px]">
              <Image
                src="/images/lookbook/look-01.webp"
                alt="Premium ladies fashion collection"
                fill
                className="object-cover transition duration-1000 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/0" />
              <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#c9a66b]">
                  Summer Essentials
                </p>
              </div>
            </div>

            <div className="lookbook-reveal lookbook-hover-img group relative h-[350px] overflow-hidden rounded-[6px] sm:h-[450px] lg:h-[650px]">
              <Image
                src="/images/lookbook/look-02.webp"
                alt="Embroidered elegance"
                fill
                className="object-cover transition duration-1000 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/0" />
              <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#c9a66b]">
                  Embroidered Elegance
                </p>
              </div>
            </div>
          </div>

          {/* Full Width Image */}
          <div className="lookbook-reveal lookbook-hover-img group relative mb-4 h-[300px] overflow-hidden rounded-[6px] sm:h-[400px] lg:h-[550px]">
            <Image
              src="/images/lookbook/look-03.webp"
              alt="Luxury fashion collection"
              fill
              className="object-cover transition duration-1000 group-hover:scale-105"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/0" />
            <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#c9a66b]">
                Luxury Redefined
              </p>
            </div>
          </div>

          {/* Row 3: Small + Large */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1.5fr]">
            <div className="lookbook-reveal lookbook-hover-img group relative h-[350px] overflow-hidden rounded-[6px] sm:h-[450px] lg:h-[600px]">
              <Image
                src="/images/lookbook/look-04.webp"
                alt="Timeless tradition"
                fill
                className="object-cover transition duration-1000 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/0" />
              <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#c9a66b]">
                  Timeless Tradition
                </p>
              </div>
            </div>

            <div className="lookbook-reveal lookbook-hover-img group relative h-[350px] overflow-hidden rounded-[6px] sm:h-[450px] lg:h-[600px]">
              <Image
                src="/images/collections/embroidered.webp"
                alt="Wholesale fashion"
                fill
                className="object-cover transition duration-1000 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/0" />
              <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#c9a66b]">
                  Wholesale Fashion
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Parallax */}
      <section className="relative h-[60vh] overflow-hidden bg-[#0E1712] lg:h-[80vh]">
        <div className="lookbook-parallax absolute inset-[-20%]">
          <Image
            src="/images/collections/luxury.webp"
            alt="Premium luxury collection"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#c9a66b]">
              OUR VISION
            </p>
            <p className="mt-4 font-display text-4xl text-white lg:text-6xl">
              &ldquo;Where Art Meets Fashion&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Second Grid */}
      <section className="bg-[#090B09] px-6 py-12 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {siteConfig.lookbook.map((item, index) => (
              <div
                key={item.id}
                className={`lookbook-reveal lookbook-hover-img group relative overflow-hidden rounded-[6px] ${
                  index === 0
                    ? "aspect-[3/4]"
                    : index === 1
                    ? "mt-0 aspect-[3/4] sm:mt-10"
                    : index === 2
                    ? "aspect-[3/4]"
                    : "mt-0 aspect-[3/4] sm:mt-10"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-1000 group-hover:scale-105"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/0" />

                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <p className="text-[8px] uppercase tracking-[0.2em] text-[#c9a66b] opacity-0 transition duration-500 group-hover:opacity-100 sm:text-[9px]">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#30251a] px-6 py-16 lg:px-12 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_40%,rgba(211,171,103,.15),transparent_35%)]" />

        <div className="relative z-10 mx-auto max-w-[900px] text-center">
          <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.35em] text-[#d4b273] lg:text-[10px]">
            EXPLORE OUR COLLECTIONS
          </p>

          <h2 className="font-display text-3xl leading-[0.9] text-[#f3e8d8] lg:text-4xl xl:text-5xl">
            Ready to Stock
            <br />
            These Designs?
          </h2>

          <p className="mt-6 mx-auto max-w-[450px] text-sm leading-7 text-white/50">
            Browse our wholesale collections and bring these premium designs
            to your retail store.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/collections" className="luxury-button">
              Explore Collections
              <ArrowRight size={14} />
            </Link>

            <Link href="/become-a-partner" className="luxury-button luxury-button-outline">
              Become a Partner
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
