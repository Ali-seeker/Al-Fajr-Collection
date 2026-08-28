"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowRight, MessageCircle, Mail, MapPin, Clock, Phone, AlertCircle, CheckCircle } from "lucide-react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

export default function ContactPage() {
  const heroRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-hero-content",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.4, ease: "power3.out", delay: 0.2 }
      );

      gsap.fromTo(
        ".contact-form-section",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-form-section",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type: "GENERAL" }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to submit inquiry");
        return;
      }

      setSuccess(true);
      setSubmitted(true);
      setFormData({ name: "", business: "", email: "", phone: "", city: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section
        ref={heroRef}
        className="grain relative min-h-[65vh] overflow-hidden bg-[#090B09] px-6 pt-32 pb-16 lg:min-h-[75vh] lg:px-12 lg:pt-40 lg:pb-24"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(110,91,58,.1),transparent_40%)]" />

        <div className="contact-hero-content relative z-10 mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Left - Text */}
          <div>
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.38em] text-[#c9a66b]">
              GET IN TOUCH
            </p>

            <h1 className="max-w-[800px] font-display text-[clamp(2.5rem,5.5vw,6rem)] font-medium leading-[0.82] tracking-[-0.04em] text-[#f3ede3]">
              Let&apos;s Start a
              <br />
              <em className="text-[#c9a66b]">Conversation</em>
            </h1>

            <p className="mt-8 max-w-[500px] text-base leading-8 text-white/50">
              Whether you&apos;re interested in wholesale partnership, have questions about
              our collections, or need support — we&apos;re here to help.
            </p>
          </div>

          {/* Right - Editorial Image */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto h-[480px] w-full max-w-[440px] overflow-hidden rounded-[6px]">
              <Image
                src="/images/lookbook/look-01.webp"
                alt="Contact Al-Fajr Collection"
                fill
                className="object-cover"
                sizes="40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#c9a66b]">
                  We&apos;re Here
                </p>
                <p className="mt-1 font-display text-2xl text-white">
                  Let&apos;s Connect
                </p>
              </div>
            </div>
            {/* Decorative thin line */}
            <div className="absolute -right-4 top-1/4 hidden h-[40%] w-px bg-gradient-to-b from-transparent via-[#c9a66b]/30 to-transparent lg:block" />
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="contact-form-section bg-[#0E1712] px-6 py-16 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Contact Information */}
          <div>
            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.35em] text-[#c9a66b] lg:text-[10px]">
              CONTACT INFORMATION
            </p>

            <h2 className="font-display text-3xl leading-[0.9] text-[#f3ede3] lg:text-4xl xl:text-5xl">
              Reach Out
              <br />
              <em className="text-[#c9a66b]">Directly</em>
            </h2>

            <div className="mt-8 space-y-6 lg:mt-12 lg:space-y-8">
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#c9a66b]/30 text-[#c9a66b]">
                  <MessageCircle size={20} strokeWidth={1.2} />
                </div>
                <div>
                  <h4 className="font-display text-xl text-[#f3ede3]">
                    WhatsApp
                  </h4>
                  <p className="mt-1 text-sm text-white/45">
                    +92 300 000 0000
                  </p>
                  <p className="mt-1 text-xs text-white/30">
                    Available 9am - 9pm, Monday to Saturday
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#c9a66b]/30 text-[#c9a66b]">
                  <Mail size={20} strokeWidth={1.2} />
                </div>
                <div>
                  <h4 className="font-display text-xl text-[#f3ede3]">
                    Email
                  </h4>
                  <p className="mt-1 text-sm text-white/45">
                    wholesale@alfajrcollection.com
                  </p>
                  <p className="mt-1 text-xs text-white/30">
                    We respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#c9a66b]/30 text-[#c9a66b]">
                  <MapPin size={20} strokeWidth={1.2} />
                </div>
                <div>
                  <h4 className="font-display text-xl text-[#f3ede3]">
                    Location
                  </h4>
                  <p className="mt-1 text-sm text-white/45">
                    Lahore, Punjab, Pakistan
                  </p>
                  <p className="mt-1 text-xs text-white/30">
                    Nationwide delivery available
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#c9a66b]/30 text-[#c9a66b]">
                  <Clock size={20} strokeWidth={1.2} />
                </div>
                <div>
                  <h4 className="font-display text-xl text-[#f3ede3]">
                    Business Hours
                  </h4>
                  <p className="mt-1 text-sm text-white/45">
                    Monday - Saturday: 9:00 AM - 9:00 PM
                  </p>
                  <p className="mt-1 text-xs text-white/30">
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="border border-white/10 bg-[#101A15] p-6 lg:p-10">
            <h3 className="font-display text-2xl text-[#f3ede3]">
              Send Us a Message
            </h3>

            <p className="mt-2 text-sm text-white/45">
              Fill out the form below and our team will get back to you.
            </p>

            {submitted ? (
              <div className="mt-12 rounded border border-[#c9a66b]/30 bg-[#c9a66b]/10 p-8 text-center">
                <p className="font-display text-2xl text-[#c9a66b]">
                  Thank You!
                </p>
                <p className="mt-2 text-sm text-white/50">
                  Your message has been received. We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {error && (
                  <div className="flex items-center gap-2 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded p-3">
                    <AlertCircle size={16} />
                    <span>{error}</span>
                  </div>
                )}
                {success && (
                  <div className="flex items-center gap-2 text-sm text-green-400 bg-green-400/10 border border-green-400/20 rounded p-3">
                    <CheckCircle size={16} />
                    <span>Message sent successfully!</span>
                  </div>
                )}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[10px] uppercase tracking-wider text-white/40">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-white/15 bg-transparent px-4 py-3 text-sm text-white outline-none transition focus:border-[#c9a66b]/50"
                      placeholder="Full name"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[10px] uppercase tracking-wider text-white/40">
                      Business Name
                    </label>
                    <input
                      type="text"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      className="w-full border border-white/15 bg-transparent px-4 py-3 text-sm text-white outline-none transition focus:border-[#c9a66b]/50"
                      placeholder="Your business name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[10px] uppercase tracking-wider text-white/40">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-white/15 bg-transparent px-4 py-3 text-sm text-white outline-none transition focus:border-[#c9a66b]/50"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[10px] uppercase tracking-wider text-white/40">
                      WhatsApp / Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-white/15 bg-transparent px-4 py-3 text-sm text-white outline-none transition focus:border-[#c9a66b]/50"
                      placeholder="+92 300 000 0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-wider text-white/40">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full border border-white/15 bg-transparent px-4 py-3 text-sm text-white outline-none transition focus:border-[#c9a66b]/50"
                    placeholder="Your city"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-wider text-white/40">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full resize-none border border-white/15 bg-transparent px-4 py-3 text-sm text-white outline-none transition focus:border-[#c9a66b]/50"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                <button type="submit" className="luxury-button w-full justify-center">
                  Start a Conversation
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map / Location Section */}
      <section className="relative h-[40vh] overflow-hidden bg-[#090B09] lg:h-[50vh]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <Phone size={40} className="mx-auto text-[#c9a66b]/30" strokeWidth={1} />
            <p className="mt-6 font-display text-3xl text-white/80">
              Lahore, Pakistan
            </p>
            <p className="mt-3 text-sm text-white/40">
              Serving retailers nationwide
            </p>

            <a
              href="https://wa.me/923000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="luxury-button mt-8"
            >
              <MessageCircle size={14} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
