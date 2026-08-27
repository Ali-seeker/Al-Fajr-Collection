export const siteConfig = {
  name: "SUIT WHOLESALE",
  tagline: "B2B FASHION",

  navigation: [
    { label: "Home", href: "/" },
    { label: "Collections", href: "/collections" },
    { label: "About Us", href: "/about" },
    { label: "Wholesale", href: "/wholesale" },
    { label: "Lookbook", href: "/lookbook" },
    { label: "Contact", href: "/contact" },
  ],

  hero: {
    eyebrow: "WHOLESALE FASHION",
    title: "Wholesale Fashion,",
    accentTitle: "Made to Move.",
    description:
      "Premium quality ladies suits at wholesale prices. Trusted by businesses. Loved by thousands.",

    primaryCta: {
      label: "Explore Collections",
      href: "/collections",
    },

    secondaryCta: {
      label: "Become a Partner",
      href: "/wholesale",
    },

    image: "/images/hero/hero-suit.png",
    backImage: null as string | null,
  },

  stats: [
    {
      value: "1000+",
      label: "Happy Retailers",
    },
    {
      value: "500+",
      label: "Unique Designs",
    },
    {
      value: "24/7",
      label: "Wholesale Support",
    },
  ],

  aboutStats: [
    { value: "10+", label: "Years of Excellence" },
    { value: "1000+", label: "Trusted Retailers" },
    { value: "500+", label: "Unique Designs" },
    { value: "50+", label: "Cities Covered" },
  ],

  collections: [
    {
      id: 1,
      slug: "premium-lawn",
      title: "Premium Lawn",
      designs: "25+ Designs",
      description: "Breathable, elegant lawn suits designed for everyday luxury and seasonal freshness.",
      image: "/images/collections/lawn.webp",
    },
    {
      id: 2,
      slug: "embroidered-suits",
      title: "Embroidered Suits",
      designs: "30+ Designs",
      description: "Intricately embroidered pieces that blend traditional craftsmanship with modern silhouettes.",
      image: "/images/collections/embroidered.webp",
    },
    {
      id: 3,
      slug: "luxury-collection",
      title: "Luxury Collection",
      designs: "20+ Designs",
      description: "Our finest premium fabrics and exclusive designs for discerning retailers.",
      image: "/images/collections/luxury.webp",
    },
    {
      id: 4,
      slug: "digital-prints",
      title: "Digital Prints",
      designs: "40+ Designs",
      description: "Vibrant digital prints that capture contemporary trends with lasting quality.",
      image: "/images/collections/digital.jpg",
    },
  ],

  products: [
    {
      id: 1,
      slug: "embroidered-lawn-suit-01",
      name: "Embroidered Lawn Suit",
      collection: "Premium Lawn",
      collectionSlug: "premium-lawn",
      price: "2,450",
      image: "/images/collections/lawn.webp",
      fabric: "Premium Lawn",
      description: "Exquisite embroidered lawn suit featuring delicate threadwork and modern silhouette. Perfect for retailers seeking elegance and quality.",
      colors: ["Ivory", "Dusty Rose", "Sage Green"],
      moq: "10 pieces",
      available: true,
    },
    {
      id: 2,
      slug: "luxury-embroidered-suit-02",
      name: "Luxury Embroidered Suit",
      collection: "Embroidered Suits",
      collectionSlug: "embroidered-suits",
      price: "3,200",
      image: "/images/collections/embroidered.webp",
      fabric: "Chiffon & Net",
      description: "Luxurious chiffon suit with intricate hand-finished embroidery. A statement piece for premium boutiques.",
      colors: ["Midnight Blue", "Burgundy", "Champagne"],
      moq: "8 pieces",
      available: true,
    },
    {
      id: 3,
      slug: "premium-silk-collection-03",
      name: "Premium Silk Collection",
      collection: "Luxury Collection",
      collectionSlug: "luxury-collection",
      price: "4,800",
      image: "/images/collections/luxury.webp",
      fabric: "Pure Silk",
      description: "Our signature silk collection featuring premium fabric and exclusive designs for the luxury market.",
      colors: ["Emerald", "Ruby", "Gold"],
      moq: "5 pieces",
      available: true,
    },
    {
      id: 4,
      slug: "digital-print-suit-04",
      name: "Digital Print Suit",
      collection: "Digital Prints",
      collectionSlug: "digital-prints",
      price: "1,950",
      image: "/images/collections/digital.jpg",
      fabric: "Lawn Cotton",
      description: "Contemporary digital print design with vibrant colors and lasting quality. Ideal for seasonal collections.",
      colors: ["Teal", "Coral", "Lavender"],
      moq: "15 pieces",
      available: true,
    },
    {
      id: 5,
      slug: "embroidered chiffon-suit-05",
      name: "Embroidered Chiffon Suit",
      collection: "Embroidered Suits",
      collectionSlug: "embroidered-suits",
      price: "3,600",
      image: "/images/collections/embroidered.webp",
      fabric: "Pure Chiffon",
      description: "Elegant chiffon suit with detailed embroidery, perfect for formal occasions and premium retail.",
      colors: ["Pearl White", "Rose Gold", "Navy"],
      moq: "6 pieces",
      available: true,
    },
    {
      id: 6,
      slug: "lawn-pret-suit-06",
      name: "Lawn Pret Collection",
      collection: "Premium Lawn",
      collectionSlug: "premium-lawn",
      price: "1,800",
      image: "/images/collections/lawn.webp",
      fabric: "Premium Lawn",
      description: "Ready-to-wear lawn collection designed for modern women. Easy to style and comfortable to wear.",
      colors: ["Mint", "Peach", "Sky Blue"],
      moq: "20 pieces",
      available: true,
    },
  ],

  benefits: [
    {
      number: "01",
      title: "Premium Quality",
      description:
        "Finest fabrics and stitching that your customers will love.",
      icon: "diamond",
    },
    {
      number: "02",
      title: "Wholesale Pricing",
      description:
        "Best wholesale prices to help grow your business.",
      icon: "price",
    },
    {
      number: "03",
      title: "Bulk Orders",
      description:
        "Flexible ordering designed for retailers and resellers.",
      icon: "box",
    },
    {
      number: "04",
      title: "Reliable Supply",
      description:
        "Consistent availability and dependable delivery.",
      icon: "truck",
    },
  ],

  wholesaleProcess: [
    { step: "01", title: "Choose Collection", description: "Browse our curated wholesale collections." },
    { step: "02", title: "Select Products", description: "Pick the designs that suit your market." },
    { step: "03", title: "Confirm Quantity", description: "Set your order volume and preferences." },
    { step: "04", title: "Place Order", description: "Confirm and place your wholesale order." },
    { step: "05", title: "We Prepare & Dispatch", description: "We pack and ship directly to you." },
  ],

  lookbook: [
    {
      id: 1,
      image: "/images/lookbook/look-01.webp",
      alt: "Premium ladies fashion",
      title: "Summer Essentials",
    },
    {
      id: 2,
      image: "/images/lookbook/look-02.webp",
      alt: "Elegant embroidered suit",
      title: "Embroidered Elegance",
    },
    {
      id: 3,
      image: "/images/lookbook/look-03.webp",
      alt: "Luxury ladies suit",
      title: "Luxury Redefined",
    },
    {
      id: 4,
      image: "/images/lookbook/look-04.webp",
      alt: "Wholesale fashion collection",
      title: "Timeless Tradition",
    },
  ],

  wholesaleBenefits: [
    { title: "Premium Quality Fabrics", description: "Every piece is crafted with the finest materials." },
    { title: "Competitive Wholesale Pricing", description: "Maximize your margins with our pricing." },
    { title: "Flexible MOQ", description: "Start small, scale as your business grows." },
    { title: "Reliable Supply Chain", description: "Consistent stock and timely deliveries." },
    { title: "Exclusive Designs", description: "Stand out with unique, trend-forward collections." },
    { title: "Dedicated Support", description: "Personal account manager for your business." },
  ],

  whyRetailers: [
    "Consistent quality that builds customer loyalty",
    "Seasonal collections that keep your store fresh",
    "Competitive pricing for better profit margins",
    "Fast and reliable nationwide delivery",
    "Dedicated wholesale support team",
    "Marketing materials and product photography",
  ],
};

export type Product = typeof siteConfig.products[number];
export type Collection = typeof siteConfig.collections[number];
