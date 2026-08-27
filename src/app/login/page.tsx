"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="overflow-hidden">
      <Navbar />

      <section className="grain relative min-h-[80vh] bg-[#090B09] px-6 pt-28 pb-16 lg:px-12 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(110,91,58,.08),transparent_40%)]" />

        <div className="relative z-10 mx-auto max-w-[450px]">
          <div className="text-center">
            <p className="mb-6 text-[9px] font-semibold uppercase tracking-[0.38em] text-[#c9a66b] lg:text-[10px]">
              WELCOME BACK
            </p>

            <h1 className="font-display text-3xl text-[#f3ede3] lg:text-4xl xl:text-5xl">
              Sign <em className="text-[#c9a66b]">In</em>
            </h1>

            <p className="mt-3 text-sm text-white/45 lg:mt-4">
              Access your wholesale account
            </p>
          </div>

          <form className="mt-10 space-y-5 lg:mt-12" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="mb-2 block text-[10px] uppercase tracking-wider text-white/40">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-white/15 bg-transparent px-4 py-3 text-sm text-white outline-none transition focus:border-[#c9a66b]/50"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-[10px] uppercase tracking-wider text-white/40">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-white/15 bg-transparent px-4 py-3 text-sm text-white outline-none transition focus:border-[#c9a66b]/50"
                placeholder="Your password"
              />
            </div>

            <button type="submit" className="luxury-button w-full justify-center">
              Sign In
              <ArrowRight size={14} />
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-white/40">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-[#c9a66b] hover:underline">
              Register here
            </Link>
          </p>

          <div className="mt-8 text-center">
            <Link href="/become-a-partner" className="text-xs text-white/30 hover:text-[#c9a66b]">
              Want to become a wholesale partner? Apply here
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
