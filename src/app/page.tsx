import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

import Hero from "@/components/sections/Hero";
import NewCollection from "@/components/sections/NewCollection";
import WhyWholesale from "@/components/sections/WhyWholesale";
import LookbookPreview from "@/components/sections/LookbookPreview";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Navbar />

      <Hero />

      <NewCollection />

      <WhyWholesale />

      <LookbookPreview />

      <CTA />

      <Footer />
    </main>
  );
}