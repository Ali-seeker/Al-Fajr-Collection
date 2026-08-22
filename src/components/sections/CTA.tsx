import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { mockData } from "@/config/data";

export function CTA() {
  return (
    <section className="relative py-32 bg-luxury-black text-luxury-cream overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={mockData.cta.image}
          alt="Wholesale Partner"
          fill
          className="object-cover opacity-60 mix-blend-overlay"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/95 via-luxury-black/70 to-transparent" />
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-1/2">
          <span className="text-[0.65rem] tracking-[0.2em] uppercase text-luxury-gold font-semibold mb-4 block">
            Let's Grow Together
          </span>
          <h2 className="font-serif text-5xl md:text-6xl mb-6 leading-tight max-w-lg">
            Looking for a Reliable Wholesale Fashion Partner?
          </h2>
          <p className="font-sans text-white/80 max-w-md font-light text-sm md:text-base leading-relaxed">
            Join hundreds of retailers who trust us for quality, price and long-term business growth.
          </p>
        </div>
        
        <div className="w-full md:w-1/3 flex flex-col items-start md:items-end space-y-6">
          <Link 
            href="/wholesale"
            className="inline-flex items-center space-x-3 bg-luxury-gold text-luxury-charcoal px-8 py-4 text-xs font-semibold tracking-wider hover:bg-white transition-colors rounded-sm w-full md:w-auto justify-center"
          >
            <span>Become a Wholesale Partner</span>
            <ArrowRight size={16} strokeWidth={1.5} />
          </Link>
          <Link 
            href="/contact"
            className="inline-flex items-center space-x-3 text-white/70 hover:text-white transition-colors text-xs tracking-wider"
          >
            <MessageCircle size={18} strokeWidth={1.5} />
            <span>Or Contact Us</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
