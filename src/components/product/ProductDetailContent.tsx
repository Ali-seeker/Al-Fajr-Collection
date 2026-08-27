"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, MessageCircle, Package, Ruler, Palette, CheckCircle2 } from "lucide-react";

interface ProductDetailContentProps {
  product: any;
  relatedProducts: any[];
}

export function ProductDetailContent({ product, relatedProducts }: ProductDetailContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!contentRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".product-detail-content",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
      );

      gsap.fromTo(
        ".product-detail-image",
        { opacity: 0, scale: 1.05 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out", delay: 0.1 }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={contentRef} className="product-detail-content lg:sticky lg:top-32">
      <Link
        href="/collections"
        className="mb-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-wider text-white/40 transition hover:text-[#c9a66b]"
      >
        ← Back to Collections
      </Link>

      <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c9a66b]">
        {product.collection?.title || product.collection}
      </p>

      <h1 className="font-display text-3xl leading-[0.9] text-[#f3ede3] lg:text-4xl xl:text-5xl">
        {product.name}
      </h1>

      <div className="mt-5 border-t border-b border-white/10 py-4 lg:mt-6 lg:py-5">
        <p className="text-[10px] uppercase tracking-wider text-white/40">
          Wholesale Price
        </p>
        <p className="mt-1 font-display text-2xl text-[#c9a66b] lg:text-3xl">
          PKR {product.price}
        </p>
        <p className="mt-1 text-[10px] text-white/30">per piece</p>
      </div>

      <p className="mt-5 text-sm leading-7 text-white/55 lg:mt-6">
        {product.description}
      </p>

      {/* Details Grid */}
      <div className="mt-6 grid grid-cols-2 gap-3 lg:mt-8 lg:gap-4">
        <div className="border border-white/10 bg-[#101A15] p-4 lg:p-5">
          <div className="flex items-center gap-3">
            <Package size={16} className="text-[#c9a66b]" />
            <span className="text-[10px] uppercase tracking-wider text-white/50">
              Fabric
            </span>
          </div>
          <p className="mt-2 font-display text-lg text-[#f3ede3]">
            {product.fabric}
          </p>
        </div>

        <div className="border border-white/10 bg-[#101A15] p-4 lg:p-5">
          <div className="flex items-center gap-3">
            <Ruler size={16} className="text-[#c9a66b]" />
            <span className="text-[10px] uppercase tracking-wider text-white/50">
              MOQ
            </span>
          </div>
          <p className="mt-2 font-display text-lg text-[#f3ede3]">
            {product.moq}
          </p>
        </div>
      </div>

      {/* Colors */}
      <div className="mt-5 lg:mt-6">
        <div className="flex items-center gap-3 mb-3">
          <Palette size={16} className="text-[#c9a66b]" />
          <span className="text-[10px] uppercase tracking-wider text-white/50">
            Available Colors
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {product.colors.map((color: string) => (
            <span
              key={color}
              className="border border-white/15 px-3 py-1.5 text-[10px] uppercase tracking-wider text-white/60 lg:px-4 lg:py-2"
            >
              {color}
            </span>
          ))}
        </div>
      </div>

      {/* Wholesale Info */}
      <div className="mt-5 space-y-3 lg:mt-6">
        <div className="flex items-center gap-3 text-sm text-white/50">
          <CheckCircle2 size={14} className="text-[#c9a66b]" />
          Minimum order: {product.moq}
        </div>
        <div className="flex items-center gap-3 text-sm text-white/50">
          <CheckCircle2 size={14} className="text-[#c9a66b]" />
          Wholesale pricing for retailers
        </div>
        <div className="flex items-center gap-3 text-sm text-white/50">
          <CheckCircle2 size={14} className="text-[#c9a66b]" />
          Bulk discount available
        </div>
      </div>

      {/* CTAs */}
      <div className="mt-8 space-y-3 lg:mt-10">
        <Link
          href={`/order?product=${product.slug}`}
          className="luxury-button w-full justify-center"
        >
          Place Order
          <ArrowRight size={14} />
        </Link>

        <a
          href={`https://wa.me/923000000000?text=Hi, I'm interested in ${encodeURIComponent(product.name)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="luxury-button luxury-button-outline w-full justify-center"
        >
          <MessageCircle size={14} />
          Inquire on WhatsApp
        </a>
      </div>
    </div>
  );
}