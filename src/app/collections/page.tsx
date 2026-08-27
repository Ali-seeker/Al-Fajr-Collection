import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { getCollections, getProducts } from "@/lib/data";
import { CollectionsFilter } from "@/components/collections/CollectionsFilter";

export const metadata: Metadata = {
  title: "Collections | Al-Fajr Collection",
  description: "Explore our curated wholesale collections of premium ladies fashion. Quality designs at competitive wholesale prices.",
};

export default async function CollectionsPage() {
  const [collections, productsResult] = await Promise.all([
    getCollections(),
    getProducts({ activeOnly: true }),
  ]);

  const products = productsResult.products;

  return (
    <main className="overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="grain relative min-h-[70vh] overflow-hidden bg-[#090B09] px-6 pt-32 pb-16 lg:min-h-[80vh] lg:px-12 lg:pt-40 lg:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(110,91,58,.12),transparent_40%)]" />

        <div className="collections-hero-content relative z-10 mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Left - Text */}
          <div>
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.38em] text-[#c9a66b]">
              OUR COLLECTIONS
            </p>

            <h1 className="max-w-[800px] font-display text-[clamp(2.5rem,5.5vw,6rem)] font-medium leading-[0.82] tracking-[-0.04em] text-[#f3ede3]">
              Curated
              <br />
              <em className="text-[#c9a66b]">Collections</em>
            </h1>

            <p className="mt-8 max-w-[500px] text-base leading-8 text-white/50">
              Explore our thoughtfully designed wholesale collections, each crafted to
              bring elegance and quality to your retail store.
            </p>
          </div>

          {/* Right - Editorial Image */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto h-[520px] w-full max-w-[480px] overflow-hidden rounded-[6px]">
              <Image
                src="/images/collections/lawn.webp"
                alt="Premium fashion collection"
                fill
                className="object-cover"
                sizes="40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#c9a66b]">
                  Summer &apos;26
                </p>
                <p className="mt-1 font-display text-2xl text-white">
                  Fresh Arrivals
                </p>
              </div>
            </div>
            {/* Decorative thin line */}
            <div className="absolute -right-4 top-1/4 hidden h-[40%] w-px bg-gradient-to-b from-transparent via-[#c9a66b]/30 to-transparent lg:block" />
          </div>
        </div>
      </section>

      {/* Category Navigation & Product Grid - Client Component */}
      <CollectionsFilter collections={collections} products={products} />

      {/* Collections Overview */}
      <section className="bg-[#0E1712] px-6 py-16 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center">
            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.35em] text-[#c9a66b] lg:text-[10px]">
              BROWSE BY COLLECTION
            </p>

            <h2 className="font-display text-3xl leading-[0.9] text-[#f3ede3] lg:text-4xl xl:text-5xl">
              Our <em className="text-[#c9a66b]">Ranges</em>
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {collections.map((collection: any) => (
              <Link
                key={collection.id}
                href={`/collections/${collection.slug}`}
                className="group relative h-[280px] overflow-hidden rounded-[6px] sm:h-[320px] lg:h-[350px]"
              >
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover transition duration-1000 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-6 lg:p-7">
                  <h3 className="font-display text-2xl text-white lg:text-3xl">
                    {collection.title}
                  </h3>

                  <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-white/50 lg:text-[10px]">
                    {collection._count.products} Designs
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-wider text-[#d8b578]">
                    Explore
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#30251a] px-6 py-16 lg:px-12 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_40%,rgba(211,171,103,.15),transparent_35%)]" />

        <div className="relative z-10 mx-auto max-w-[900px] text-center">
          <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.35em] text-[#d4b273] lg:text-[10px]">
            WHOLESALE INQUIRIES
          </p>

          <h2 className="font-display text-3xl leading-[0.9] text-[#f3e8d8] lg:text-4xl xl:text-5xl">
            Interested in Bulk Orders?
          </h2>

          <p className="mt-6 mx-auto max-w-[450px] text-sm leading-7 text-white/50">
            Contact us for wholesale pricing, custom orders, and partnership
            opportunities.
          </p>

          <Link href="/become-a-partner" className="luxury-button mt-10">
            Become a Partner
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}