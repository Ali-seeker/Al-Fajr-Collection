import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/data";

export default function Footer() {
  return (
    <footer className="bg-[#080a08] px-6 pt-16 text-white lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="font-display text-2xl">
              SUIT WHOLESALE
            </Link>

            <p className="mt-2 text-[9px] uppercase tracking-[0.3em] text-[#c9a66b]">
              B2B FASHION
            </p>

            <p className="mt-6 max-w-[260px] text-xs leading-6 text-white/35">
              Premium ladies fashion for retailers, boutiques and wholesale
              businesses.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.25em] text-[#c9a66b]">
              Navigation
            </h3>

            <div className="mt-6 flex flex-col gap-3">
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
            <h3 className="text-[10px] uppercase tracking-[0.25em] text-[#c9a66b]">
              Wholesale
            </h3>

            <div className="mt-6 space-y-3 text-xs leading-6 text-white/45">
              <p>Premium Quality</p>
              <p>Wholesale Pricing</p>
              <p>Bulk Orders</p>
              <p>Reliable Supply</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.25em] text-[#c9a66b]">
              Stay Connected
            </h3>

            <p className="mt-6 text-xs leading-6 text-white/35">
              Subscribe for new collections and wholesale updates.
            </p>

            <div className="mt-5 flex border-b border-white/15 pb-3">
              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 bg-transparent text-xs outline-none placeholder:text-white/25"
              />

              <button className="text-[10px] uppercase tracking-wider text-[#d2b274]">
                Subscribe
              </button>
            </div>

            <div className="mt-6 flex gap-3">
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

        <div className="flex flex-col justify-between gap-4 py-6 text-[9px] uppercase tracking-wider text-white/25 md:flex-row">
          <span>© 2026 Suit Wholesale. All rights reserved.</span>

          <div className="flex gap-6">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}