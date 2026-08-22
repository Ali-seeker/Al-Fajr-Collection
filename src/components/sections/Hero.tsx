"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, User, Gem, Clock, Mouse } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const podiumRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!textRef.current || !podiumRef.current) return;
    
    gsap.from(textRef.current.children, {
      y: 40,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power4.out",
      delay: 0.2,
    });

    // Animate the podium rotating horizontally (around Z axis)
    gsap.to(podiumRef.current, {
      rotationZ: 360,
      duration: 20,
      repeat: -1,
      ease: "none",
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-screen min-h-[800px] w-full overflow-hidden bg-luxury-black text-luxury-cream">
      
      {/* 3D Rotating Wooden Podium & Dummy on the Right */}
      <div className="absolute right-0 md:right-[5%] top-1/2 -translate-y-1/2 w-full md:w-[600px] h-[800px] flex flex-col items-center justify-center z-0 pointer-events-none">
        
        {/* Dummy / Mannequin Video (Rotating 360) */}
        {/* NOTE FOR USER: A static 2D image cannot show front and back. 
            To show a 360-degree view of your suit, you need a .mp4 video of it spinning.
            Upload your video to the 'public' folder and replace the 'src' below with '/your-video.mp4'. */}
        <div className="relative w-[250px] md:w-[350px] h-[450px] md:h-[600px] z-10 -mb-16 md:-mb-24 drop-shadow-2xl flex items-center justify-center overflow-hidden">
          {/* Temporary placeholder to simulate a 360 rotating dummy */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover object-center"
            style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
          >
            {/* REPLACE THIS SRC WITH YOUR ACTUAL ROTATING SUIT VIDEO (.MP4) */}
            <source src="https://assets.mixkit.co/videos/preview/mixkit-fashion-model-spinning-in-a-black-dress-44337-large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Horizontal Wooden Podium */}
        <div 
          className="relative w-[300px] md:w-[450px] h-[300px] md:h-[450px] perspective-[1000px] z-0"
        >
          {/* Parent wrapper keeps the 3D tilt (horizontal floor) */}
          <div className="w-full h-full transform-style-3d" style={{ transform: "rotateX(75deg)" }}>
            
            {/* Child actually spins 360 degrees (controlled by GSAP) */}
            <div 
              ref={podiumRef}
              className="w-full h-full rounded-full border-[8px] border-[#4A3018]"
              style={{ 
                background: "radial-gradient(circle, #8B5A2B 0%, #5C3A21 80%, #3E2723 100%)",
                boxShadow: "0 30px 60px rgba(0,0,0,0.9), inset 0 0 50px rgba(0,0,0,0.8)"
              }}
            >
              {/* Wood Grain / Rotating Rings */}
              <div className="absolute inset-4 rounded-full border border-[#3E2723]/40"></div>
              <div className="absolute inset-8 rounded-full border border-[#3E2723]/30"></div>
              <div className="absolute inset-16 rounded-full border border-[#3E2723]/20"></div>
              
              {/* Center mark to show rotation */}
              <div className="absolute top-0 left-1/2 w-2 h-8 bg-[#3E2723]/60 -translate-x-1/2"></div>
              <div className="absolute bottom-0 left-1/2 w-2 h-8 bg-[#3E2723]/60 -translate-x-1/2"></div>
            </div>
          </div>
          
          {/* Podium Thickness (Base) */}
          <div 
            className="absolute bottom-[40px] md:bottom-[60px] left-0 w-full h-[40px] md:h-[60px] bg-[#3E2723] rounded-b-[50%] z-[-1]"
            style={{ boxShadow: "0 20px 40px rgba(0,0,0,0.9)" }}
          ></div>
        </div>

      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 h-full flex flex-col justify-between pt-32 pb-12">
        
        {/* Center Content (Text Left) */}
        <div className="flex-1 flex items-center">
          <div ref={textRef} className="max-w-2xl bg-luxury-black/40 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-6 md:p-0 rounded-xl">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-luxury-gold font-semibold mb-4 block">
              Wholesale Fashion
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-6 drop-shadow-lg">
              Wholesale<br />
              Fashion,<br />
              <em className="italic text-luxury-gold font-serif">Made to Move.</em>
            </h1>
            <p className="text-sm md:text-base font-sans font-light max-w-sm mb-10 text-white/90 leading-relaxed drop-shadow-md">
              Premium quality ladies suits in wholesale prices.<br/>
              Trusted by businesses. Loved by thousands.
            </p>
            
            <Link 
              href="/collections"
              className="inline-flex items-center space-x-3 bg-luxury-gold text-luxury-charcoal px-8 py-3.5 text-xs font-semibold tracking-wider hover:bg-white transition-colors rounded-sm"
            >
              <span>Explore Collections</span>
              <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
          </div>
        </div>

        {/* Bottom Bar: Stats & Scroll Down */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between w-full gap-8 md:gap-0 bg-luxury-black/30 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-6 md:p-0 rounded-xl">
          {/* Stats */}
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-12">
            <div className="flex items-center space-x-3">
              <User className="text-luxury-gold opacity-80" size={28} strokeWidth={1} />
              <div className="flex flex-col">
                <span className="font-serif text-2xl leading-none">1000+</span>
                <span className="text-[0.65rem] text-white/70">Happy Retailers</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Gem className="text-luxury-gold opacity-80" size={28} strokeWidth={1} />
              <div className="flex flex-col">
                <span className="font-serif text-2xl leading-none">500+</span>
                <span className="text-[0.65rem] text-white/70">Designs</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="text-luxury-gold opacity-80" size={28} strokeWidth={1} />
              <div className="flex flex-col">
                <span className="font-serif text-2xl leading-none">24/7</span>
                <span className="text-[0.65rem] text-white/70">Wholesale Support</span>
              </div>
            </div>
          </div>
          
          {/* Scroll Down */}
          <div className="hidden md:flex flex-col items-center space-y-2 opacity-70">
            <span className="text-[0.6rem] uppercase tracking-widest">Scroll Down</span>
            <Mouse size={24} strokeWidth={1} />
          </div>
        </div>
      </div>

      {/* Vertical Pagination (Right side absolute) */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center space-y-6">
        <span className="text-xs font-serif tracking-widest">01</span>
        <div className="w-[1px] h-16 bg-white/20 relative">
          <div className="absolute top-0 w-full h-1/3 bg-luxury-gold" />
        </div>
        <span className="text-xs font-serif tracking-widest text-white/50">05</span>
      </div>
    </section>
  );
}
