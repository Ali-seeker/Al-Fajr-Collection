"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Check, Diamond, ShieldCheck, Truck, Package, Users, TrendingUp } from "lucide-react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function BecomeAPartnerPage() {
  const heroRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    whatsapp: "",
    email: "",
    city: "",
    businessType: "",
    orderVolume: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".partner-hero-content",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.4, ease: "power3.out", delay: 0.2 }
      );

      gsap.fromTo(
        ".partner-benefit",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".partner-benefits-section",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.to(".partner-parallax", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: ".partner-parallax",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.business.trim()) newErrors.business = "Business name is required";
    if (!formData.whatsapp.trim()) newErrors.whatsapp = "WhatsApp is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.businessType.trim()) newErrors.businessType = "Business type is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 8000);
      setFormData({ name: "", business: "", whatsapp: "", email: "", city: "", businessType: "", orderVolume: "", message: "" });
    }
  };

  return (
    <main className="overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section
        ref={heroRef}
        className="grain relative min-h-[70vh] overflow-hidden bg-[#090B09] px-6 pt-32 pb-20 lg:min-h-[80vh] lg:px-12 lg:pt-40 lg:pb-28"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(110,91,58,.12),transparent_40%)]" />

        <div className="partner-hero-content relative z-10 mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.38em] text-[#c9a66b]">
              PARTNERSHIP OPPORTUNITY
            </p>

            <h1 className="max-w-[700px] font-display text-[clamp(2.5rem,5.5vw,6rem)] font-medium leading-[0.82] tracking-[-0.04em] text-[#f3ede3]">
              Become a
              <br />
              <em className="text-[#c9a66b]">Wholesale Partner</em>
            </h1>

            <p className="mt-8 max-w-[500px] text-base leading-8 text-white/50">
              Join our exclusive network of retailers and boutiques. Get access to
              premium collections, competitive pricing, and dedicated business
              support.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#partner-form" className="luxury-button">
                Apply Now
                <ArrowRight size={14} />
              </a>

              <Link href="/wholesale" className="luxury-button luxury-button-outline">
                Learn About Wholesale
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative mx-auto h-[480px] w-full max-w-[480px] overflow-hidden rounded-[6px]">
              <Image
                src="/images/collections/lawn.webp"
                alt="Become a wholesale partner"
                fill
                className="object-cover"
                sizes="40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#c9a66b]">
                  Exclusive Network
                </p>
                <p className="mt-1 font-display text-2xl text-white">
                  Premium Partnership
                </p>
              </div>
            </div>
            {/* Decorative thin line */}
            <div className="absolute -right-4 top-1/4 hidden h-[40%] w-px bg-gradient-to-b from-transparent via-[#c9a66b]/30 to-transparent lg:block" />
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="partner-benefits-section bg-[#0E1712] px-6 py-16 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center">
            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.35em] text-[#c9a66b] lg:text-[10px]">
              WHY PARTNER WITH US
            </p>

            <h2 className="font-display text-3xl leading-[0.9] text-[#f3ede3] lg:text-4xl xl:text-5xl">
              Partnership <em className="text-[#c9a66b]">Benefits</em>
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:gap-6 lg:grid-cols-3">
            {[
              { icon: Diamond, title: "Premium Quality", description: "Access to our finest fabrics and exclusive designs that your customers will love." },
              { icon: TrendingUp, title: "Competitive Pricing", description: "Tiered wholesale pricing that maximizes your profit margins from day one." },
              { icon: Package, title: "Flexible MOQ", description: "Start with as few as 5 pieces and scale as your business grows." },
              { icon: Truck, title: "Fast Delivery", description: "Nationwide delivery within 3-7 business days with order tracking." },
              { icon: ShieldCheck, title: "Quality Guarantee", description: "Every piece is quality-inspected before dispatch. Defect-free guaranteed." },
              { icon: Users, title: "Dedicated Support", description: "Personal account manager to help with orders, sizing, and collections." },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="partner-benefit border border-white/10 bg-[#101A15] p-8 transition duration-500 hover:border-[#c9a66b]/30"
              >
                <benefit.icon size={28} className="text-[#c9a66b]" strokeWidth={1.2} />

                <h3 className="mt-6 font-display text-2xl text-[#f3ede3]">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/45">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Apply */}
      <section className="bg-[#090B09] px-6 py-16 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="relative h-[350px] overflow-hidden rounded-[6px] lg:h-[550px]">
            <Image
              src="/images/lookbook/look-04.webp"
              alt="Who can apply"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#c9a66b]">
                WHO CAN APPLY
              </p>
              <p className="mt-2 font-display text-3xl text-white">
                Your Business, Our Partnership
              </p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c9a66b]">
              WHO CAN APPLY
            </p>

            <h2 className="font-display text-4xl leading-[0.9] text-[#f3ede3] lg:text-5xl">
              Built for <em className="text-[#c9a66b]">Your Business</em>
            </h2>

            <div className="mt-8 space-y-5 text-sm leading-7 text-white/50">
              <p>
                We welcome partnerships with businesses that share our commitment to
                quality and customer satisfaction. Our wholesale program is designed
                for:
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {[
                "Fashion boutiques and retail stores",
                "Online fashion sellers and resellers",
                "Multi-brand retailers",
                "Fashion distributors",
                "Market stall owners",
                "Home-based fashion businesses",
              ].map((item, index) => (
                <div key={item} className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <span className="font-display text-lg text-[#c9a66b]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-white/60">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale Expectations */}
      <section className="bg-[#101A15] px-6 py-16 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center">
            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.35em] text-[#c9a66b] lg:text-[10px]">
              WHAT TO EXPECT
            </p>

            <h2 className="font-display text-3xl leading-[0.9] text-[#f3ede3] lg:text-4xl xl:text-5xl">
              Wholesale <em className="text-[#c9a66b]">Expectations</em>
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 lg:mt-16 lg:grid-cols-2 lg:gap-8">
            <div className="border border-white/10 bg-[#0E1712] p-10">
              <h3 className="font-display text-2xl text-[#f3ede3]">
                Minimum Order Requirements
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/50">
                Our MOQ starts from just 5 pieces per design. We believe in growing
                with our partners, so you can start small and increase your orders
                as your business expands.
              </p>
            </div>

            <div className="border border-white/10 bg-[#0E1712] p-10">
              <h3 className="font-display text-2xl text-[#f3ede3]">
                Pricing Structure
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/50">
                Competitive tiered pricing that rewards volume. The more you order,
                the better your rates. Contact us for current wholesale pricing sheets.
              </p>
            </div>

            <div className="border border-white/10 bg-[#0E1712] p-10">
              <h3 className="font-display text-2xl text-[#f3ede3]">
                Quality Assurance
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/50">
                Every piece undergoes rigorous quality inspection. We stand behind
                our products with a satisfaction guarantee for all wholesale partners.
              </p>
            </div>

            <div className="border border-white/10 bg-[#0E1712] p-10">
              <h3 className="font-display text-2xl text-[#f3ede3]">
                Business Support
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/50">
                Dedicated account managers, marketing materials, product photography,
                and seasonal trend insights to help your business thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Parallax */}
      <section className="relative h-[50vh] overflow-hidden bg-[#090B09] lg:h-[60vh]">
        <div className="partner-parallax absolute inset-[-20%]">
          <Image
            src="/images/collections/digital.jpg"
            alt="Fashion partnership"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#c9a66b]">
              LIMITED SPOTS AVAILABLE
            </p>
            <p className="mt-4 font-display text-4xl text-white lg:text-6xl">
              Your Success Starts Here
            </p>
          </div>
        </div>
      </section>

      {/* Partner Inquiry Form */}
      <section id="partner-form" className="bg-[#0E1712] px-6 py-16 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[900px]">
          <div className="text-center">
            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.35em] text-[#c9a66b] lg:text-[10px]">
              PARTNER INQUIRY
            </p>

            <h2 className="font-display text-3xl leading-[0.9] text-[#f3ede3] lg:text-4xl xl:text-5xl">
              Apply for <em className="text-[#c9a66b]">Partnership</em>
            </h2>

            <p className="mt-4 mx-auto max-w-[500px] text-sm text-white/45">
              Fill out the form below and our partnerships team will review your
              application within 48 hours.
            </p>
          </div>

          {submitted ? (
            <div className="mt-10 rounded border border-[#c9a66b]/30 bg-[#c9a66b]/10 p-8 text-center lg:mt-14 lg:p-12">
              <p className="font-display text-3xl text-[#c9a66b]">
                Application Received!
              </p>
              <p className="mt-4 mx-auto max-w-[400px] text-sm text-white/50">
                Thank you for your interest in partnering with Al-Fajr Collection.
                Our team will review your application and get back to you within 48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 space-y-5 lg:mt-14 lg:space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-wider text-white/40">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-white/15 bg-transparent px-4 py-3 text-sm text-white outline-none transition focus:border-[#c9a66b]/50"
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                </div>

                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-wider text-white/40">
                    Business / Shop Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.business}
                    onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                    className="w-full border border-white/15 bg-transparent px-4 py-3 text-sm text-white outline-none transition focus:border-[#c9a66b]/50"
                    placeholder="Your business name"
                  />
                  {errors.business && <p className="mt-1 text-xs text-red-400">{errors.business}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
                    Business Type *
                  </label>
                  <select
                    required
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full border border-white/15 bg-[#101A15] px-4 py-3 text-sm text-white outline-none transition focus:border-[#c9a66b]/50"
                  >
                    <option value="">Select business type</option>
                    <option value="boutique">Boutique</option>
                    <option value="retail-store">Retail Store</option>
                    <option value="online-seller">Online Seller</option>
                    <option value="reseller">Reseller</option>
                    <option value="distributor">Distributor</option>
                    <option value="multi-brand">Multi-Brand Store</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.businessType && <p className="mt-1 text-xs text-red-400">{errors.businessType}</p>}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-[10px] uppercase tracking-wider text-white/40">
                  Estimated Order Volume
                </label>
                <select
                  value={formData.orderVolume}
                  onChange={(e) => setFormData({ ...formData, orderVolume: e.target.value })}
                  className="w-full border border-white/15 bg-[#101A15] px-4 py-3 text-sm text-white outline-none transition focus:border-[#c9a66b]/50"
                >
                  <option value="">Select estimated volume</option>
                  <option value="5-20">5 - 20 pieces</option>
                  <option value="20-50">20 - 50 pieces</option>
                  <option value="50-100">50 - 100 pieces</option>
                  <option value="100-500">100 - 500 pieces</option>
                  <option value="500+">500+ pieces</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-[10px] uppercase tracking-wider text-white/40">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full resize-none border border-white/15 bg-transparent px-4 py-3 text-sm text-white outline-none transition focus:border-[#c9a66b]/50"
                  placeholder="Tell us about your business and what you're looking for..."
                />
              </div>

              <button type="submit" className="luxury-button w-full justify-center">
                Submit Application
                <ArrowRight size={14} />
              </button>

              <p className="text-center text-xs text-white/30">
                By submitting, you agree to be contacted by our partnerships team.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-[#30251a] px-6 py-16 lg:px-12 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_40%,rgba(211,171,103,.15),transparent_35%)]" />

        <div className="relative z-10 mx-auto max-w-[900px] text-center">
          <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.35em] text-[#d4b273] lg:text-[10px]">
            QUESTIONS?
          </p>

          <h2 className="font-display text-3xl leading-[0.9] text-[#f3e8d8] lg:text-4xl xl:text-5xl">
            Let&apos;s Talk
          </h2>

          <p className="mt-6 mx-auto max-w-[450px] text-sm leading-7 text-white/50">
            Have questions about our wholesale program? Reach out to our team
            and we&apos;ll be happy to help.
          </p>

          <Link href="/contact" className="luxury-button mt-10">
            Contact Us
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
