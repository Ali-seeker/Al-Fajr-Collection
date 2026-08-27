import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

export const metadata = {
  title: "Terms & Conditions | Al-Fajr Collection",
};

export default function TermsPage() {
  return (
    <main className="overflow-hidden">
      <Navbar />

      <section className="grain relative bg-[#090B09] px-6 pt-28 pb-12 lg:px-12 lg:pt-40 lg:pb-24">
        <div className="relative z-10 mx-auto max-w-[900px]">
          <p className="mb-6 text-[9px] font-semibold uppercase tracking-[0.38em] text-[#c9a66b] lg:text-[10px]">
            LEGAL
          </p>

          <h1 className="font-display text-3xl text-[#f3ede3] lg:text-4xl xl:text-5xl">
            Terms & <em className="text-[#c9a66b]">Conditions</em>
          </h1>

          <p className="mt-4 text-sm text-white/40">
            Last updated: August 2026
          </p>
        </div>
      </section>

      <section className="bg-[#0E1712] px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[900px] space-y-12 text-sm leading-7 text-white/55">
          <div>
            <h2 className="mb-4 font-display text-2xl text-[#f3ede3]">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the Al-Fajr Collection website and services,
              you agree to be bound by these Terms & Conditions. If you do not
              agree to these terms, please do not use our services.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-display text-2xl text-[#f3ede3]">
              2. Wholesale Accounts
            </h2>
            <p>
              Wholesale accounts are available to verified retailers, boutiques,
              and fashion businesses. We reserve the right to approve or decline
              wholesale applications at our discretion.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-display text-2xl text-[#f3ede3]">
              3. Orders & Pricing
            </h2>
            <p>
              All wholesale prices are provided upon account approval. Prices may
              change without notice. Orders are subject to availability and
              minimum order quantities as specified for each collection.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-display text-2xl text-[#f3ede3]">
              4. Payment Terms
            </h2>
            <p>
              Payment terms are established on a per-account basis. Standard
              orders require payment before dispatch unless otherwise agreed.
              We accept bank transfers and other approved payment methods.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-display text-2xl text-[#f3ede3]">
              5. Shipping & Delivery
            </h2>
            <p>
              We ship nationwide across Pakistan. Delivery times are estimates
              and not guaranteed. We are not responsible for delays caused by
              shipping carriers or circumstances beyond our control.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-display text-2xl text-[#f3ede3]">
              6. Returns & Exchanges
            </h2>
            <p>
              Wholesale returns are accepted only for defective items and must
              be reported within 7 days of delivery. Items must be unused and
              in original packaging. Custom orders are non-returnable.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-display text-2xl text-[#f3ede3]">
              7. Intellectual Property
            </h2>
            <p>
              All designs, images, and content on this website are the property
              of Al-Fajr Collection. Unauthorized use, reproduction, or
              distribution is prohibited.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-display text-2xl text-[#f3ede3]">
              8. Limitation of Liability
            </h2>
            <p>
              Al-Fajr Collection shall not be liable for any indirect,
              incidental, or consequential damages arising from the use of
              our products or services.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-display text-2xl text-[#f3ede3]">
              9. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these terms at any time. Changes
              will be effective immediately upon posting. Continued use of our
              services constitutes acceptance of modified terms.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-display text-2xl text-[#f3ede3]">
              10. Contact
            </h2>
            <p>
              For questions about these Terms & Conditions, contact us at
              wholesale@alfajrcollection.com or via WhatsApp at +92 300 000 0000.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#090B09] px-6 py-16 text-center lg:px-12">
        <Link href="/" className="text-[10px] uppercase tracking-wider text-[#c9a66b]">
          ← Back to Home
        </Link>
      </section>

      <Footer />
    </main>
  );
}
