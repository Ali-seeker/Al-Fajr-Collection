"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed w-full z-50 top-0 transition-all duration-300 border-b",
      isScrolled ? "bg-luxury-black/90 backdrop-blur-md py-4 border-white/10" : "bg-luxury-black/50 backdrop-blur-md py-6 border-white/5"
    )}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex flex-col z-10 relative">
          <span className="font-serif text-2xl tracking-widest text-luxury-cream font-semibold uppercase flex items-center gap-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-luxury-gold">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Suit Wholesale
          </span>
          <span className="text-[0.65rem] tracking-[0.25em] uppercase text-luxury-gold ml-9">
            B2B Fashion
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-12 ml-auto">
          <Link href="/" className="text-xs font-semibold tracking-widest uppercase text-luxury-cream border-b border-luxury-gold pb-1">Home</Link>
          <Link href="/collections" className="text-xs font-medium tracking-widest uppercase text-white/70 hover:text-luxury-cream transition-colors">Collections</Link>
          <Link href="/about" className="text-xs font-medium tracking-widest uppercase text-white/70 hover:text-luxury-cream transition-colors">About Us</Link>
          <Link href="/wholesale" className="text-xs font-medium tracking-widest uppercase text-white/70 hover:text-luxury-cream transition-colors">Wholesale</Link>
          <Link href="/lookbook" className="text-xs font-medium tracking-widest uppercase text-white/70 hover:text-luxury-cream transition-colors">Lookbook</Link>
          <Link href="/contact" className="text-xs font-medium tracking-widest uppercase text-white/70 hover:text-luxury-cream transition-colors">Contact</Link>
        </div>
        
      </div>
    </nav>
  );
}
