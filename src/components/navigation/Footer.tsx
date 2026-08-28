"use client";

import Link from "next/link";
import { useState } from "react";
import { MessageCircle, AlertCircle, CheckCircle } from "lucide-react";
import { siteConfig } from "@/config/data";

export default function Footer() {
  const [mobile, setMobile] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    if (!/^\d{11}$/.test(mobile)) {
      setStatus("error");
      setMessage("Please enter a valid 11-digit mobile number");
      return;
    }

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile, source: "footer" }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "Failed to subscribe");
        return;
      }

      setStatus("success");
      setMessage(data.message || "Subscribed successfully!");
      setMobile("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <footer className="bg-[#080a08] px-6 pt-14 text-white lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:pt-16">
          {/* Brand */}
          <div>
            <Link href="/" className="font-display text-xl lg:text-2xl">
              SUIT WHOLESALE
            </Link>

            <p className="mt-2 text-[8px] uppercase tracking-[0.3em] text-[#c9a66b] lg:text-[9px]">
              B2B FASHION
            </p>

            <p className="mt-5 max-w-[260px] text-xs leading-6 text-white/35 lg:mt-6">
              Premium ladies fashion for retailers, boutiques and wholesale
              businesses.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[9px] uppercase tracking-[0.25em] text-[#c9a66b] lg:text-[10px]">
              Navigation
            </h3>

            <div className="mt-5 flex flex-col gap-2.5 lg:mt-6 lg:gap-3">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs text-white/45 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Business */}
          <div>
            <h3 className="text-[9px] uppercase tracking-[0.25em] text-[#c9a66b] lg:text-[10px]">
              Wholesale
            </h3>

            <div className="mt-5 space-y-2.5 text-xs leading-6 text-white/45 lg:mt-6 lg:space-y-3">
              <p>Premium Quality</p>
              <p>Wholesale Pricing</p>
              <p>Bulk Orders</p>
              <p>Reliable Supply</p>
            </div>
          </div>

          {/* Newsletter - Mobile Number */}
          <div>
            <h3 className="text-[9px] uppercase tracking-[0.25em] text-[#c9a66b] lg:text-[10px]">
              Stay Connected
            </h3>

            <p className="mt-5 text-xs leading-6 text-white/35 lg:mt-6">
              Subscribe for new collections and wholesale updates.
            </p>

            <form onSubmit={handleSubmit} className="mt-4 flex border-b border-white/15 pb-3 lg:mt-6">
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 11))}
                placeholder="11-digit mobile number"
                maxLength={11}
                className="min-w-0 flex-1 bg-transparent text-xs outline-none placeholder:text-white/25"
                inputMode="numeric"
                pattern="[0-9]*"
                required
                disabled={status === "loading"}
              />

              <button
                type="submit"
                className="text-[10px] uppercase tracking-wider text-[#d2b274] disabled:opacity-50"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </button>
            </form>

            {status === "error" && (
              <p className="mt-2 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle size={12} />
                {message}
              </p>
            )}
            {status === "success" && (
              <p className="mt-2 text-xs text-green-400 flex items-center gap-1">
                <CheckCircle size={12} />
                {message}
              </p>
            )}

            <div className="mt-5 flex gap-3 lg:mt-6">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition hover:text-white"
              >
                <MessageCircle size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 py-5 text-[8px] uppercase tracking-wider text-white/25 sm:flex-row lg:py-6 lg:text-[9px]">
          <span>© 2026 Suit Wholesale. All rights reserved.</span>

          <div className="flex gap-5">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}