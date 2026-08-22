"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { mockData } from "@/config/data";

export function NewCollection() {
  return (
    <section className="py-24 bg-luxury-black text-luxury-cream overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/3 flex flex-col items-start justify-center">
          <span className="text-[0.65rem] tracking-[0.2em] uppercase text-luxury-gold font-semibold mb-4 block">
            New Collection
          </span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6 text-luxury-cream leading-tight">
            Summer '26
          </h2>
          <p className="font-sans text-white/70 max-w-sm font-light text-sm md:text-base mb-10 leading-relaxed">
            Discover our latest wholesale collection crafted for elegance and made for business.
          </p>
          
          <Link 
            href="/collections"
            className="inline-flex items-center space-x-3 border border-white/20 hover:border-white/50 hover:bg-white/5 px-8 py-3.5 text-xs font-semibold tracking-wider transition-all rounded-sm mb-16 lg:mb-24"
          >
            <span>View Collection</span>
            <ArrowRight size={16} strokeWidth={1.5} />
          </Link>

          {/* Pagination */}
          <div className="flex items-center space-x-6">
            <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white/50 hover:bg-white/5 transition-colors">
              <ChevronLeft size={16} />
            </button>
            <div className="flex items-center space-x-4">
              <span className="text-xs font-serif tracking-widest text-white">01</span>
              <div className="w-16 h-[1px] bg-white/20">
                <div className="w-1/4 h-full bg-luxury-gold"></div>
              </div>
              <span className="text-xs font-serif tracking-widest text-white/50">04</span>
            </div>
            <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white/50 hover:bg-white/5 transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Right Content - Horizontal Scrolling Cards */}
        <div 
          className="w-full lg:w-2/3 flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory perspective-[1000px]" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {mockData.collections.map((collection, idx) => (
            <Link 
              href={`/collections/${collection.id}`}
              key={collection.id}
              className={`relative shrink-0 w-[280px] md:w-[320px] h-[450px] md:h-[500px] snap-center rounded-2xl overflow-hidden group transition-all duration-700 ease-out transform-style-3d ${
                idx === 0 ? 'scale-100 opacity-100 z-10 shadow-2xl' : 'scale-95 opacity-60 hover:opacity-100 hover:scale-95 z-0'
              }`}
            >
              <Image
                src={collection.image}
                alt={collection.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center text-center">
                <h3 className="font-serif text-2xl text-luxury-cream mb-2 tracking-wide">{collection.title}</h3>
                <span className="text-xs text-white/60 tracking-widest">{collection.count}+ Designs</span>
              </div>
            </Link>
          ))}
        </div>
        
      </div>
    </section>
  );
}
