import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { getProductBySlug, getProducts } from "@/lib/data";
import { ProductDetailContent } from "@/components/product/ProductDetailContent";

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.name} | Al-Fajr Collection`,
    description: product.description || `Premium ${product.fabric} wholesale product`,
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProductsResult = await getProducts({ limit: 3 });
  const relatedProducts = relatedProductsResult.products.filter((p: any) => p.slug !== slug);

  return (
    <main className="overflow-hidden">
      <Navbar />

      {/* Product Detail */}
      <section className="bg-[#090B09] px-6 pt-28 pb-16 lg:px-12 lg:pt-40 lg:pb-28">
        <div className="mx-auto grid max-w-[1400px] items-start gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          {/* Product Image */}
          <div className="product-detail-image relative aspect-[3/4] overflow-hidden rounded-[6px] bg-[#101A15]">
            <Image
              src={product.primaryImage}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Product Info - Client Component */}
          <ProductDetailContent product={product} relatedProducts={relatedProducts} />
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-[#0E1712] px-6 py-16 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1400px]">
            <div className="text-center">
              <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.35em] text-[#c9a66b] lg:text-[10px]">
                YOU MAY ALSO LIKE
              </p>

              <h2 className="font-display text-3xl leading-[0.9] text-[#f3ede3] lg:text-4xl xl:text-5xl">
                Related <em className="text-[#c9a66b]">Products</em>
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:gap-6 lg:grid-cols-3">
              {relatedProducts.map((relProduct: any) => (
                <Link
                  key={relProduct.id}
                  href={`/collections/${relProduct.slug}`}
                  className="group relative overflow-hidden rounded-[6px] border border-white/10 bg-[#101A15]"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={relProduct.primaryImage}
                      alt={relProduct.name}
                      fill
                      className="object-cover transition duration-1000 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  </div>

                  <div className="absolute bottom-0 left-0 w-full p-5 lg:p-6">
                    <p className="text-[8px] uppercase tracking-[0.2em] text-[#c9a66b] sm:text-[9px]">
                      {relProduct.collection?.title || relProduct.collection}
                    </p>
                    <h3 className="mt-2 font-display text-xl text-white lg:text-2xl">
                      {relProduct.name}
                    </h3>
                    <p className="mt-2 text-xs text-white/40">
                      PKR {relProduct.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}