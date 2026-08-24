"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#0a0d0b]/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${open ? "max-h-[500px]" : "max-h-0"
          }`}
      >
        <nav className="flex flex-col px-6 py-6">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-4 text-sm uppercase tracking-wider text-white/80"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/wholesale"
            onClick={() => setOpen(false)}
            className="mt-5 bg-[#e4cca6] px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-[#15130f]"
          >
            Become a Partner
          </Link>
        </nav>
      </div>
    </header>
  );
}