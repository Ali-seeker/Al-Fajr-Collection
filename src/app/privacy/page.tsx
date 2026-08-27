import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

export const metadata = {
  title: "Privacy Policy | Al-Fajr Collection",
};

export default function PrivacyPage() {
  return (
    <main className="overflow-hidden">
      <Navbar />

      <section className="grain relative bg-[#090B09] px-6 pt-28 pb-12 lg:px-12 lg:pt-40 lg:pb-24">
        <div className="relative z-10 mx-auto max-w-[900px]">
          <p className="mb-6 text-[9px] font-semibold uppercase tracking-[0.38em] text-[#c9a66b] lg:text-[10px]">
            LEGAL
          </p>

          <h1 className="font-display text-3xl text-[#f3ede3] lg:text-4xl xl:text-5xl">
            Privacy <em className="text-[#c9a66b]">Policy</em>
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
              1. Information We Collect
            </h2>
            <p>
              We collect information you provide directly to us, such as when you
              create an account, place an order, or contact us. This may include
              your name, business name, email address, phone number, WhatsApp
              number, delivery address, and payment information.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-display text-2xl text-[#f3ede3]">
              2. How We Use Your Information
            </h2>
            <p>
              We use the information we collect to process transactions, send
              order confirmations, provide customer service, send marketing
              communications (with your consent), and improve our services.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-display text-2xl text-[#f3ede3]">
              3. Information Sharing
            </h2>
            <p>
              We do not sell or rent your personal information to third parties.
              We may share your information with trusted service providers who
              assist us in operating our business, such as payment processors
              and delivery services.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-display text-2xl text-[#f3ede3]">
              4. Data Security
            </h2>
            <p>
              We implement appropriate security measures to protect your personal
              information. However, no method of transmission over the Internet
              is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-display text-2xl text-[#f3ede3]">
              5. Cookies
            </h2>
            <p>
              Our website uses cookies to enhance your experience. You can choose
              to disable cookies through your browser settings, though some
              features of the site may not function properly.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-display text-2xl text-[#f3ede3]">
              6. Your Rights
            </h2>
            <p>
              You have the right to access, correct, or delete your personal
              information. You may also opt out of marketing communications at
              any time by contacting us.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-display text-2xl text-[#f3ede3]">
              7. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, please contact us
              at wholesale@alfajrcollection.com or via WhatsApp at +92 300 000 0000.
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
