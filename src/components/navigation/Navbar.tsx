"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    if (open) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => window.removeEventListener("keydown", handleEscape);
  }, [open, closeMenu]);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${scrolled
        ? "border-b border-white/10 bg-[#0a0d0b]/85 backdrop-blur-xl"
        : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex h-[82px] max-w-[1500px] items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center border border-[#c9a66b]/50 rounded-full text-[#c9a66b]">
            ✦
          </div>

          <div>
            <div className="font-display text-[20px] tracking-wide text-[#f4eee3]">
              Al-Fajr Collection
            </div>

            <div className="text-[8px] tracking-[0.32em] text-[#c9a66b]">
              B2B FASHION
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-[11px] uppercase tracking-[0.08em] text-white/80 transition-colors duration-300 hover:text-[#e2c58f]"
            >
              {item.label}

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#c9a66b] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/login"
            className="rounded border border-white/15 px-4 py-3 text-[10px] uppercase tracking-wider text-white/80 transition hover:border-[#c9a66b]/50 hover:text-white"
          >
            Login / Register
          </Link>

          <Link
            href="/wholesale"
            className="flex items-center gap-2 rounded bg-[#e4cca6] px-5 py-3 text-[10px] font-semibold uppercase tracking-wider text-[#15130f] transition hover:bg-[#f0dbb9]"
          >
            Become a Partner
            <ArrowUpRight size={13} />
          </Link>
        </div>

        {/* Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={closeMenu}
          />

          {/* Menu Panel */}
          <div className="absolute inset-y-0 right-0 w-full bg-[#0a0d0b] animate-in slide-in-from-right duration-500">
            {/* Close button */}
            <div className="flex justify-end px-6 pt-5">
              <button
                onClick={closeMenu}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            {/* Menu Content */}
            <nav className="flex flex-col px-8 pt-12">
              {siteConfig.navigation.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="group border-b border-white/8 py-5 text-[13px] uppercase tracking-[0.15em] text-white/70 transition-colors duration-300 hover:text-[#c9a66b]"
                  style={{
                    animationDelay: `${index * 60}ms`,
                  }}
                >
                  <span className="inline-flex items-center gap-4">
                    <span className="text-[9px] text-[#c9a66b]/50 font-display">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Primary CTA */}
            <div className="px-8 pt-10">
              <Link
                href="/become-a-partner"
                onClick={closeMenu}
                className="flex items-center justify-center gap-3 rounded bg-[#e4cca6] px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#15130f] transition hover:bg-[#f0dbb9]"
              >
                Become a Partner
                <ArrowUpRight size={14} />
              </Link>
            </div>

            {/* Bottom decorative line */}
            <div className="absolute bottom-12 left-8 right-8 border-t border-white/8 pt-6">
              <p className="text-[9px] uppercase tracking-[0.3em] text-[#c9a66b]/60">
                Al-Fajr Collection
              </p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/25">
                Premium B2B Fashion
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}