"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, AlertCircle } from "lucide-react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    business: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
          business: formData.business,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Registration failed");
        return;
      }

      router.push("/");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="overflow-hidden">
      <Navbar />

      <section className="grain relative min-h-[80vh] bg-[#090B09] px-6 pt-28 pb-16 lg:px-12 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(110,91,58,.08),transparent_40%)]" />

        <div className="relative z-10 mx-auto max-w-[450px]">
          <div className="text-center">
            <p className="mb-6 text-[9px] font-semibold uppercase tracking-[0.38em] text-[#c9a66b] lg:text-[10px]">
              CREATE ACCOUNT
            </p>

            <h1 className="font-display text-3xl text-[#f3ede3] lg:text-4xl xl:text-5xl">
              Register <em className="text-[#c9a66b]">Now</em>
            </h1>

            <p className="mt-3 text-sm text-white/45 lg:mt-4">
              Create your wholesale account
            </p>
          </div>

          <form className="mt-10 space-y-5 lg:mt-12" onSubmit={handleSubmit}>
            {error && (
              <div className="flex items-center gap-2 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded p-3">
                <AlertCircle size={16} />
                <span>{error}</span>
              </div>
            )}

            <div>
              <label className="mb-2 block text-[10px] uppercase tracking-wider text-white/40">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-white/15 bg-transparent px-4 py-3 text-sm text-white outline-none transition focus:border-[#c9a66b]/50"
                placeholder="Your full name"
                required
                disabled={loading}
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
                disabled={loading}
              />
            </div>

            <div>
              <label className="mb-2 block text-[10px] uppercase tracking-wider text-white/40">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-white/15 bg-transparent px-4 py-3 text-sm text-white outline-none transition focus:border-[#c9a66b]/50"
                placeholder="your@email.com"
                required
                disabled={loading}
              />
            </div>

            <div>
              <label className="mb-2 block text-[10px] uppercase tracking-wider text-white/40">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-white/15 bg-transparent px-4 py-3 text-sm text-white outline-none transition focus:border-[#c9a66b]/50"
                placeholder="Create a password"
                required
                minLength={8}
                disabled={loading}
              />
            </div>

            <div>
              <label className="mb-2 block text-[10px] uppercase tracking-wider text-white/40">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border border-white/15 bg-transparent px-4 py-3 text-sm text-white outline-none transition focus:border-[#c9a66b]/50"
                placeholder="Confirm your password"
                required
                disabled={loading}
              />
            </div>

            <button type="submit" className="luxury-button w-full justify-center" disabled={loading}>
              {loading ? "Creating Account..." : "Create Account"}
              <ArrowRight size={14} />
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-white/40">
            Already have an account?{" "}
            <Link href="/login" className="text-[#c9a66b] hover:underline">
              Sign in here
            </Link>
          </p>

          <div className="mt-6 text-center">
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