"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface CollectionsFilterProps {
  collections: any[];
  products: any[];
}

export function CollectionsFilter({ collections, products }: CollectionsFilterProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProducts = activeFilter === "all"
    ? products
    : products.filter((p: any) => p.collectionSlug === activeFilter);

  return (
    <>
      {/* Category Navigation */}
      <section className="bg-[#0E1712] px-6 py-12 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveFilter("all")}
              className={`border px-6 py-3 text-[10px] uppercase tracking-wider transition duration-300 ${
                activeFilter === "all"
                  ? "border-[#c9a66b] bg-[#c9a66b]/10 text-[#c9a66b]"
                  : "border-white/15 text-white/50 hover:border-white/30 hover:text-white/80"
              }`}
            >
              All Collections
            </button>

            {collections.map((collection) => (
              <button
                key={collection.id}
                onClick={() => setActiveFilter(collection.slug)}
                className={`border px-6 py-3 text-[10px] uppercase tracking-wider transition duration-300 ${
                  activeFilter === collection.slug
                    ? "border-[#c9a66b] bg-[#c9a66b]/10 text-[#c9a66b]"
                    : "border-white/15 text-white/50 hover:border-white/30 hover:text-white/80"
                }`}
              >
                {collection.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg-[#090B09] px-6 py-12 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {filteredProducts.map((product: any) => (
              <Link
                key={product.id}
                href={`/collections/${product.slug}`}
                className="product-card group relative overflow-hidden rounded-[6px] border border-white/10 bg-[#101A15]"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={product.primaryImage || product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition duration-1000 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-500 group-hover:bg-black/20">
                    <span className="translate-y-4 text-[10px] uppercase tracking-wider text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      View Details
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-5 lg:p-6">
                  <p className="text-[8px] uppercase tracking-[0.2em] text-[#c9a66b] sm:text-[9px]">
                    {product.collection?.title || product.collection}
                  </p>

                  <h3 className="mt-2 font-display text-xl text-white lg:text-2xl">
                    {product.name}
                  </h3>

                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-xs text-white/40">
                      PKR {product.price}
                    </p>

                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-[#d8b578] opacity-0 transition duration-500 group-hover:opacity-100">
                      Details
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}