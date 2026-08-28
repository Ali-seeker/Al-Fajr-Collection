"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { getCollections } from "@/lib/data";

interface NewCollectionProps {
  collections: Awaited<ReturnType<typeof getCollections>>;
}

export default function NewCollection({ collections }: NewCollectionProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    if (trackRef.current) {
      const cardWidth = 350 + 20; // card width + gap
      trackRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      const cardWidth = 350 + 20; // card width + gap
      trackRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (trackRef.current) {
      setScrollPosition(trackRef.current.scrollLeft);
    }
  };

  const canScrollLeft = scrollPosition > 10;
  const canScrollRight = trackRef.current
    ? trackRef.current.scrollLeft + trackRef.current.clientWidth < trackRef.current.scrollWidth - 10
    : false;

  return (
    <section className="relative overflow-hidden bg-[#101a15] py-16 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(110,91,58,.16),transparent_30%)]" />

      <div className="relative z-10">
        <div className="mx-auto max-w-[1500px] px-6">
          {/* Header */}
          <div className="mb-8 lg:mb-12">
            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.35em] text-[#c9a66b] lg:text-[10px]">
              NEW COLLECTION
            </p>

            <h2 className="font-display text-4xl leading-[0.9] text-[#f1e9dc] lg:text-5xl xl:text-6xl">
              Summer
              <br />
              <em className="text-[#c9a66b]">'26</em>
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/45 lg:mt-6">
              Discover our latest wholesale collection crafted for elegance
              and made for business.
            </p>

            <Link
              href="/collections"
              className="luxury-button luxury-button-outline mt-6 lg:mt-7 inline-flex"
            >
              View Collection
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Cards */}
          <div className="relative">
            <div
              ref={trackRef}
              onScroll={handleScroll}
              className="flex gap-4 lg:gap-5 pb-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {collections.map((collection: any) => (
                <Link
                  key={collection.id}
                  href={`/collections/${collection.slug}`}
                  className="group relative block h-[380px] w-[260px] flex-none shrink-0 overflow-hidden rounded-[8px] border border-white/10 bg-[#18221d] lg:h-[540px] lg:w-[350px] snap-center"
                  style={{ scrollSnapAlign: "center" }}
                >
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    className="object-cover transition duration-1000 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 350px"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                  <div className="absolute bottom-0 left-0 w-full p-7">
                    <h3 className="font-display text-3xl text-white">
                      {collection.title}
                    </h3>

<p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/50">
  {collection._count?.products || collection.designsCount} Designs
</p>

                    <div className="mt-5 flex items-center gap-2 text-[10px] uppercase tracking-wider text-[#d8b578]">
                      Explore Collection
                      <ArrowRight size={13} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Scroll indicators */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-2 pointer-events-none lg:pointer-events-auto">
              <button
                onClick={scrollLeft}
                disabled={!canScrollLeft}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white/70 opacity-0 lg:opacity-100 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity duration-300"
                aria-label="Scroll left"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={scrollRight}
                disabled={!canScrollRight}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white/70 opacity-0 lg:opacity-100 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity duration-300"
                aria-label="Scroll right"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Scroll progress indicator */}
            <div className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#c9a66b] transition-all duration-300"
                style={{ width: `${(scrollPosition / (trackRef.current?.scrollWidth || 1)) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}