import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

import HeroWrapper from "@/components/sections/HeroWrapper";
import NewCollection from "@/components/sections/NewCollection";
import WhyWholesale from "@/components/sections/WhyWholesale";
import LookbookPreview from "@/components/sections/LookbookPreview";
import CTA from "@/components/sections/CTA";
import { getCollections } from "@/lib/data";

export default async function HomePage() {
  const collections = await getCollections();

  return (
    <main className="overflow-hidden">
      <Navbar />

      <HeroWrapper />

      <NewCollection collections={collections} />

      <WhyWholesale />

      <LookbookPreview />

      <CTA />

      <Footer />
    </main>
  );
}