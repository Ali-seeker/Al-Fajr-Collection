import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/sections/Hero";
import { NewCollection } from "@/components/sections/NewCollection";
import { WhyWholesale } from "@/components/sections/WhyWholesale";
import { LookbookPreview } from "@/components/sections/LookbookPreview";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/navigation/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col w-full overflow-hidden">
        <Hero />
        <NewCollection />
        <WhyWholesale />
        <LookbookPreview />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
