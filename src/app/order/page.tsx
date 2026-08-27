"use client";

import Image from "next/image";
import Link from "next/link";
import { use, useLayoutEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import gsap from "gsap";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { siteConfig } from "@/config/data";

export default function OrderPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const { product: productSlug } = use(searchParams);
  const product = siteConfig.products.find((p) => p.slug === productSlug);

  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    phone: "",
    whatsapp: "",
    email: "",
    city: "",
    address: "",
    quantity: product ? "10" : "",
    notes: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!contentRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".order-content",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
      );
    });

    return () => ctx.revert();
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.businessName.trim()) newErrors.businessName = "Business name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.whatsapp.trim()) newErrors.whatsapp = "WhatsApp is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.quantity || Number(formData.quantity) < 1) newErrors.quantity = "Valid quantity is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (submitted) {
    return (
      <main className="overflow-hidden">
        <Navbar />
        <section className="min-h-screen bg-[#090B09] px-6 pt-40 lg:px-12">
          <div className="mx-auto max-w-[700px] text-center">
            <CheckCircle2 size={60} className="mx-auto text-[#c9a66b]" strokeWidth={1} />

            <h1 className="mt-8 font-display text-5xl text-[#f3ede3]">
              Order Submitted
            </h1>

            <p className="mt-4 text-sm leading-7 text-white/50">
              Thank you for your order, {formData.fullName}. Our team will review
              your order and contact you within 24 hours to confirm details and
              pricing.
            </p>

            <div className="mt-8 rounded border border-white/10 bg-[#101A15] p-6 text-left">
              <h3 className="font-display text-xl text-[#f3ede3]">
                Order Summary
              </h3>

              <div className="mt-4 space-y-2 text-sm text-white/50">
                {product && (
                  <>
                    <p>Product: {product.name}</p>
                    <p>Collection: {product.collection}</p>
                    <p>Quantity: {formData.quantity} pieces</p>
                  </>
                )}
                <p>Business: {formData.businessName}</p>
                <p>City: {formData.city}</p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/collections" className="luxury-button">
                Continue Shopping
                <ArrowRight size={14} />
              </Link>

              <Link href="/" className="luxury-button luxury-button-outline">
                Back to Home
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="grain relative bg-[#090B09] px-6 pt-28 pb-6 lg:px-12 lg:pt-40 lg:pb-10">
        <div className="relative z-10 mx-auto max-w-[1400px]">
          <Link
            href={product ? `/collections/${product.slug}` : "/collections"}
            className="mb-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-wider text-white/40 transition hover:text-[#c9a66b]"
          >
            <ArrowLeft size={12} />
            Back to Product
          </Link>

          <h1 className="font-display text-3xl leading-[0.9] text-[#f3ede3] lg:text-4xl xl:text-5xl">
            Place Your <em className="text-[#c9a66b]">Order</em>
          </h1>
        </div>
      </section>

      {/* Order Form */}
      <section className="bg-[#090B09] px-6 py-10 lg:px-12 lg:py-20">
        <div ref={contentRef} className="order-content mx-auto grid max-w-[1400px] items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* Left - Product Info */}
          <div className="order-content">
            {product ? (
              <div className="sticky top-32">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[6px] bg-[#101A15]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                <div className="mt-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#c9a66b]">
                    {product.collection}
                  </p>
                  <h2 className="mt-2 font-display text-3xl text-[#f3ede3]">
                    {product.name}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/50">
                    {product.description}
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-[10px] uppercase tracking-wider text-white/40">
                        Wholesale Price
                      </p>
                      <p className="mt-1 font-display text-2xl text-[#c9a66b]">
                        PKR {product.price}
                      </p>
                    </div>

                    <div className="border-t border-white/10 pt-4">
                      <p className="text-[10px] uppercase tracking-wider text-white/40">
                        MOQ
                      </p>
                      <p className="mt-1 font-display text-2xl text-[#f3ede3]">
                        {product.moq}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-[10px] uppercase tracking-wider text-white/40">
                      Available Colors
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {product.colors.map((color) => (
                        <span
                          key={color}
                          className="border border-white/15 px-3 py-1 text-[10px] uppercase tracking-wider text-white/50"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded border border-white/10 bg-[#101A15] p-8 text-center">
                <p className="text-sm text-white/50">
                  No product selected.{" "}
                  <Link href="/collections" className="text-[#c9a66b]">
                    Browse collections
                  </Link>{" "}
                  to choose a product first.
                </p>
              </div>
            )}
          </div>

          {/* Right - Customer Form */}
          <div className="border border-white/10 bg-[#101A15] p-8 lg:p-10">
            <h3 className="font-display text-2xl text-[#f3ede3]">
              Your Information
            </h3>

            <p className="mt-2 text-sm text-white/45">
              Fill out the details below to place your order.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-wider text-white/40">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full border border-white/15 bg-transparent px-4 py-3 text-sm text-white outline-none transition focus:border-[#c9a66b]/50"
                    placeholder="Your full name"
                  />
                  {errors.fullName && <p className="mt-1 text-xs text-red-400">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-wider text-white/40">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full border border-white/15 bg-transparent px-4 py-3 text-sm text-white outline-none transition focus:border-[#c9a66b]/50"
                    placeholder="Your business name"
                  />
                  {errors.businessName && <p className="mt-1 text-xs text-red-400">{errors.businessName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-wider text-white/40">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border border-white/15 bg-transparent px-4 py-3 text-sm text-white outline-none transition focus:border-[#c9a66b]/50"
                    placeholder="+92 300 000 0000"
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
                </div>

                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-wider text-white/40">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full border border-white/15 bg-transparent px-4 py-3 text-sm text-white outline-none transition focus:border-[#c9a66b]/50"
                    placeholder="+92 300 000 0000"
                  />
                  {errors.whatsapp && <p className="mt-1 text-xs text-red-400">{errors.whatsapp}</p>}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-[10px] uppercase tracking-wider text-white/40">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-white/15 bg-transparent px-4 py-3 text-sm text-white outline-none transition focus:border-[#c9a66b]/50"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
              </div>

              <div>
                <label className="mb-2 block text-[10px] uppercase tracking-wider text-white/40">
                  City *
                </label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full border border-white/15 bg-transparent px-4 py-3 text-sm text-white outline-none transition focus:border-[#c9a66b]/50"
                  placeholder="Your city"
                />
                {errors.city && <p className="mt-1 text-xs text-red-400">{errors.city}</p>}
              </div>

              <div>
                <label className="mb-2 block text-[10px] uppercase tracking-wider text-white/40">
                  Complete Address *
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full resize-none border border-white/15 bg-transparent px-4 py-3 text-sm text-white outline-none transition focus:border-[#c9a66b]/50"
                  placeholder="Full delivery address"
                />
                {errors.address && <p className="mt-1 text-xs text-red-400">{errors.address}</p>}
              </div>

              <div>
                <label className="mb-2 block text-[10px] uppercase tracking-wider text-white/40">
                  Quantity (pieces) *
                </label>
                <input
                  type="number"
                  required
                  min={product ? undefined : "1"}
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full border border-white/15 bg-transparent px-4 py-3 text-sm text-white outline-none transition focus:border-[#c9a66b]/50"
                  placeholder="Number of pieces"
                />
                {errors.quantity && <p className="mt-1 text-xs text-red-400">{errors.quantity}</p>}
                {product && (
                  <p className="mt-1 text-[10px] text-white/30">
                    Minimum: {product.moq}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-[10px] uppercase tracking-wider text-white/40">
                  Notes
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full resize-none border border-white/15 bg-transparent px-4 py-3 text-sm text-white outline-none transition focus:border-[#c9a66b]/50"
                  placeholder="Any special requests or notes..."
                />
              </div>

              {/* Order Summary */}
              {product && (
                <div className="rounded border border-white/10 bg-[#0E1712] p-6">
                  <h4 className="text-[10px] uppercase tracking-wider text-white/40">
                    Order Summary
                  </h4>

                  <div className="mt-4 space-y-2 text-sm">
                    <div className="flex justify-between text-white/60">
                      <span>{product.name}</span>
                      <span>PKR {product.price}</span>
                    </div>

                    {formData.quantity && (
                      <div className="flex justify-between border-t border-white/10 pt-2 text-white/60">
                        <span>Quantity</span>
                        <span>{formData.quantity} pieces</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <button type="submit" className="luxury-button w-full justify-center">
                Submit Order
                <ArrowRight size={14} />
              </button>

              <p className="text-center text-xs text-white/30">
                Our team will contact you to confirm pricing and delivery details.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
