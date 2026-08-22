import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { mockData } from "@/config/data";

export function LookbookPreview() {
  return (
    <section className="py-24 bg-luxury-black text-luxury-cream overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/3 flex flex-col items-start justify-center">
          <span className="text-[0.65rem] tracking-[0.2em] uppercase text-luxury-gold font-semibold mb-4 block">
            Lookbook
          </span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6 text-luxury-cream leading-tight">
            Timeless Elegance<br />In Every Detail
          </h2>
          <p className="font-sans text-white/70 max-w-sm font-light text-sm md:text-base mb-10 leading-relaxed">
            Explore how our designs bring beauty, tradition and style together.
          </p>
          
          <Link 
            href="/lookbook"
            className="inline-flex items-center space-x-3 border border-white/20 hover:border-white/50 hover:bg-white/5 px-8 py-3.5 text-xs font-semibold tracking-wider transition-all rounded-sm lg:mb-16"
          >
            <span>Explore Lookbook</span>
            <ArrowRight size={16} strokeWidth={1.5} />
          </Link>
        </div>

        {/* Right Content - 4 Images & Custom Scrollbar */}
        <div className="w-full lg:w-2/3 flex flex-col mt-8 lg:mt-0">
          {/* Images Row */}
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {mockData.lookbook.map((item) => (
              <div 
                key={item.id} 
                className="relative shrink-0 w-[240px] md:w-[260px] h-[350px] md:h-[400px] snap-center rounded-2xl overflow-hidden group"
              >
                <Image
                  src={item.image}
                  alt="Lookbook Detail"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
          
          {/* Custom Scrollbar Indicator */}
          <div className="flex items-center justify-between mt-4">
            <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-white/50 hover:bg-white/5 transition-colors text-white/50 hover:text-white">
              <ChevronLeft size={14} />
            </button>
            <div className="flex-1 mx-4 h-[1px] bg-white/10 relative">
              <div className="absolute left-0 top-0 w-1/4 h-full bg-luxury-gold"></div>
            </div>
            <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-white/50 hover:bg-white/5 transition-colors text-white/50 hover:text-white">
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
}
