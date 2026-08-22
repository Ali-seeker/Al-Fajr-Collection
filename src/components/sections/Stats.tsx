"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Stats() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".stat-item", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      },
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-20 bg-luxury-cream text-luxury-black border-b border-black/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-luxury-black/10">
          <div className="stat-item flex flex-col pt-8 md:pt-0">
            <span className="font-serif text-5xl md:text-6xl text-luxury-green mb-2">1000+</span>
            <span className="font-sans uppercase tracking-widest text-sm font-semibold">Happy Retailers</span>
          </div>
          <div className="stat-item flex flex-col pt-8 md:pt-0">
            <span className="font-serif text-5xl md:text-6xl text-luxury-green mb-2">500+</span>
            <span className="font-sans uppercase tracking-widest text-sm font-semibold">Unique Designs</span>
          </div>
          <div className="stat-item flex flex-col pt-8 md:pt-0">
            <span className="font-serif text-5xl md:text-6xl text-luxury-green mb-2">24/7</span>
            <span className="font-sans uppercase tracking-widest text-sm font-semibold">Wholesale Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
