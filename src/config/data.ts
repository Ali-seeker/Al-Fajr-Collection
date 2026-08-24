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

    // Replace this later with the image selected from your admin dashboard.
    image: "/images/hero/hero-suit.png",

    // Optional future back image.
    // If null, the front image is mirrored on the back.
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

  collections: [
    {
      id: 1,
      title: "Premium Lawn",
      designs: "25+ Designs",
      image: "/images/collections/lawn.webp",
    },
    {
      id: 2,
      title: "Embroidered Suits",
      designs: "30+ Designs",
      image: "/images/collections/embroidered.webp",
    },
    {
      id: 3,
      title: "Luxury Collection",
      designs: "20+ Designs",
      image: "/images/collections/luxury.webp",
    },
    {
      id: 4,
      title: "Digital Prints",
      designs: "40+ Designs",
      image: "/images/collections/digital.jpg",
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

  lookbook: [
    {
      id: 1,
      image: "/images/lookbook/look-01.webp",
      alt: "Premium ladies fashion",
    },
    {
      id: 2,
      image: "/images/lookbook/look-02.webp",
      alt: "Elegant embroidered suit",
    },
    {
      id: 3,
      image: "/images/lookbook/look-03.webp",
      alt: "Luxury ladies suit",
    },
    {
      id: 4,
      image: "/images/lookbook/look-04.webp",
      alt: "Wholesale fashion collection",
    },
  ],
};