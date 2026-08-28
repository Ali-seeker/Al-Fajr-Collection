// seed-api.js - Seed database via API calls
const API_BASE = 'http://localhost:3000';

async function fetchApi(endpoint, data) {
  const res = await fetch(`${API_BASE}/api${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  
  if (!res.ok) {
    const error = await res.json().catch(() => ({ error: 'Request failed' }));
    throw new Error(`${endpoint}: ${error.error || res.statusText}`);
  }
  
  return res.json();
}

async function main() {
  console.log('🌱 Starting database seed via API...');

  // Create collections
  console.log('📦 Creating collections...');
  const collections = [
    { slug: 'premium-lawn', title: 'Premium Lawn', description: 'Breathable, elegant lawn suits designed for everyday luxury and seasonal freshness.', image: '/images/collections/lawn.webp', designsCount: 25, sortOrder: 1 },
    { slug: 'embroidered-suits', title: 'Embroidered Suits', description: 'Intricately embroidered pieces that blend traditional craftsmanship with modern silhouettes.', image: '/images/collections/embroidered.webp', designsCount: 30, sortOrder: 2 },
    { slug: 'luxury-collection', title: 'Luxury Collection', description: 'Our finest premium fabrics and exclusive designs for discerning retailers.', image: '/images/collections/luxury.webp', designsCount: 20, sortOrder: 3 },
    { slug: 'digital-prints', title: 'Digital Prints', description: 'Vibrant digital prints that capture contemporary trends with lasting quality.', image: '/images/collections/digital.jpg', designsCount: 40, sortOrder: 4 },
  ];

  for (const c of collections) {
    try {
      await fetchApi('/collections', c);
      console.log(`  ✅ ${c.title}`);
    } catch (e) {
      console.log(`  ⚠️ ${c.title}: ${e.message}`);
    }
  }

  // Wait a bit for collections to be created
  await new Promise(r => setTimeout(r, 1000));

  // Create products
  console.log('👗 Creating products...');
  const products = [
    { slug: 'embroidered-lawn-suit-01', name: 'Embroidered Lawn Suit', description: 'Exquisite embroidered lawn suit featuring delicate threadwork and modern silhouette. Perfect for retailers seeking elegance and quality.', price: 2450, fabric: 'Premium Lawn', moq: '10 pieces', colors: ['Ivory', 'Dusty Rose', 'Sage Green'], images: ['/images/collections/lawn.webp'], primaryImage: '/images/collections/lawn.webp', collectionSlug: 'premium-lawn', isFeatured: true, sortOrder: 1 },
    { slug: 'luxury-embroidered-suit-02', name: 'Luxury Embroidered Suit', description: 'Luxurious chiffon suit with intricate hand-finished embroidery. A statement piece for premium boutiques.', price: 3200, fabric: 'Chiffon & Net', moq: '8 pieces', colors: ['Midnight Blue', 'Burgundy', 'Champagne'], images: ['/images/collections/embroidered.webp'], primaryImage: '/images/collections/embroidered.webp', collectionSlug: 'embroidered-suits', isFeatured: true, sortOrder: 1 },
    { slug: 'premium-silk-collection-03', name: 'Premium Silk Collection', description: 'Our signature silk collection featuring premium fabric and exclusive designs for the luxury market.', price: 4800, fabric: 'Pure Silk', moq: '5 pieces', colors: ['Emerald', 'Ruby', 'Gold'], images: ['/images/collections/luxury.webp'], primaryImage: '/images/collections/luxury.webp', collectionSlug: 'luxury-collection', isFeatured: true, sortOrder: 1 },
    { slug: 'digital-print-suit-04', name: 'Digital Print Suit', description: 'Contemporary digital print design with vibrant colors and lasting quality. Ideal for seasonal collections.', price: 1950, fabric: 'Lawn Cotton', moq: '15 pieces', colors: ['Teal', 'Coral', 'Lavender'], images: ['/images/collections/digital.jpg'], primaryImage: '/images/collections/digital.jpg', collectionSlug: 'digital-prints', isFeatured: false, sortOrder: 1 },
    { slug: 'embroidered-chiffon-suit-05', name: 'Embroidered Chiffon Suit', description: 'Elegant chiffon suit with detailed embroidery, perfect for formal occasions and premium retail.', price: 3600, fabric: 'Pure Chiffon', moq: '6 pieces', colors: ['Pearl White', 'Rose Gold', 'Navy'], images: ['/images/collections/embroidered.webp'], primaryImage: '/images/collections/embroidered.webp', collectionSlug: 'embroidered-suits', isFeatured: false, sortOrder: 2 },
    { slug: 'lawn-pret-suit-06', name: 'Lawn Pret Collection', description: 'Ready-to-wear lawn collection designed for modern women. Easy to style and comfortable to wear.', price: 1800, fabric: 'Premium Lawn', moq: '20 pieces', colors: ['Mint', 'Peach', 'Sky Blue'], images: ['/images/collections/lawn.webp'], primaryImage: '/images/collections/lawn.webp', collectionSlug: 'premium-lawn', isFeatured: false, sortOrder: 2 },
  ];

  for (const p of products) {
    try {
      await fetchApi('/products', p);
      console.log(`  ✅ ${p.name}`);
    } catch (e) {
      console.log(`  ⚠️ ${p.name}: ${e.message}`);
    }
  }

  // Create wholesale FAQs
  console.log('❓ Creating wholesale FAQs...');
  const faqs = [
    { question: 'What is the minimum order quantity?', answer: 'Our MOQ starts from as low as 5 pieces per design, depending on the collection. Contact us for specific requirements.', sortOrder: 1 },
    { question: 'Do you offer bulk discounts?', answer: 'Yes, we offer tiered pricing with increasing discounts as your order volume grows. Contact our sales team for current pricing tiers.', sortOrder: 2 },
    { question: 'How long does delivery take?', answer: 'Standard delivery within Pakistan takes 3-7 business days depending on your location. Express options are available.', sortOrder: 3 },
    { question: 'Can I request custom designs?', answer: 'Yes, we offer custom design services for large volume orders. Reach out to discuss your specific requirements.', sortOrder: 4 },
    { question: 'What payment methods do you accept?', answer: 'We accept bank transfers, jazzcash, and other standard payment methods. Payment terms can be discussed for established partners.', sortOrder: 5 },
  ];

  for (const f of faqs) {
    try {
      await fetchApi('/wholesale', { type: 'faq', ...f });
      console.log(`  ✅ ${f.question.substring(0, 30)}...`);
    } catch (e) {
      console.log(`  ⚠️ FAQ: ${e.message}`);
    }
  }

  // Create wholesale benefits
  console.log('✨ Creating wholesale benefits...');
  const benefits = [
    { title: 'Premium Quality Fabrics', description: 'Every piece is crafted with the finest materials.', icon: 'Diamond', sortOrder: 1 },
    { title: 'Competitive Wholesale Pricing', description: 'Maximize your margins with our pricing.', icon: 'Price', sortOrder: 2 },
    { title: 'Flexible MOQ', description: 'Start small, scale as your business grows.', icon: 'Box', sortOrder: 3 },
    { title: 'Reliable Supply Chain', description: 'Consistent stock and timely deliveries.', icon: 'Truck', sortOrder: 4 },
    { title: 'Exclusive Designs', description: 'Stand out with unique, trend-forward collections.', icon: 'Sparkles', sortOrder: 5 },
    { title: 'Dedicated Support', description: 'Personal account manager for your business.', icon: 'Users', sortOrder: 6 },
  ];

  for (const b of benefits) {
    try {
      await fetchApi('/wholesale', { type: 'benefits', ...b });
      console.log(`  ✅ ${b.title}`);
    } catch (e) {
      console.log(`  ⚠️ Benefit: ${e.message}`);
    }
  }

  // Create wholesale process steps
  console.log('📋 Creating wholesale process steps...');
  const steps = [
    { step: '01', title: 'Choose Collection', description: 'Browse our curated wholesale collections.', sortOrder: 1 },
    { step: '02', title: 'Select Products', description: 'Pick the designs that suit your market.', sortOrder: 2 },
    { step: '03', title: 'Confirm Quantity', description: 'Set your order volume and preferences.', sortOrder: 3 },
    { step: '04', title: 'Place Order', description: 'Confirm and place your wholesale order.', sortOrder: 4 },
    { step: '05', title: 'We Prepare & Dispatch', description: 'We pack and ship directly to you.', sortOrder: 5 },
  ];

  for (const s of steps) {
    try {
      await fetchApi('/wholesale', { type: 'process', ...s });
      console.log(`  ✅ Step ${s.step}: ${s.title}`);
    } catch (e) {
      console.log(`  ⚠️ Step: ${e.message}`);
    }
  }

  // Create lookbook items
  console.log('📸 Creating lookbook items...');
  const lookbook = [
    { title: 'Summer Essentials', image: '/images/lookbook/look-01.webp', alt: 'Premium ladies fashion', sortOrder: 1 },
    { title: 'Embroidered Elegance', image: '/images/lookbook/look-02.webp', alt: 'Elegant embroidered suit', sortOrder: 2 },
    { title: 'Luxury Redefined', image: '/images/lookbook/look-03.webp', alt: 'Luxury ladies suit', sortOrder: 3 },
    { title: 'Timeless Tradition', image: '/images/lookbook/look-04.webp', alt: 'Wholesale fashion collection', sortOrder: 4 },
  ];

  for (const l of lookbook) {
    try {
      await fetchApi('/lookbook', l);
      console.log(`  ✅ ${l.title}`);
    } catch (e) {
      console.log(`  ⚠️ Lookbook: ${e.message}`);
    }
  }

  // Create hero settings
  console.log('🎨 Creating hero settings...');
  try {
    await fetchApi('/wholesale', {
      type: 'hero',
      eyebrow: 'WHOLESALE FASHION',
      title: 'Wholesale Fashion,',
      accentTitle: 'Made to Move.',
      description: 'Premium quality ladies suits at wholesale prices. Trusted by businesses. Loved by thousands.',
      primaryCtaLabel: 'Explore Collections',
      primaryCtaHref: '/collections',
      secondaryCtaLabel: 'Become a Partner',
      secondaryCtaHref: '/wholesale',
      heroImage: '/images/hero/hero-suit.png',
    });
    console.log('  ✅ Hero settings');
  } catch (e) {
    console.log(`  ⚠️ Hero: ${e.message}`);
  }

  // Create site settings
  console.log('⚙️ Creating site settings...');
  try {
    await fetchApi('/wholesale', {
      type: 'site',
      siteName: 'Al-Fajr Collection',
      siteTagline: 'B2B FASHION',
      contactEmail: 'wholesale@alfajrcollection.com',
      contactPhone: '+92 300 000 0000',
      contactWhatsApp: '+92 300 000 0000',
      contactAddress: 'Lahore, Punjab, Pakistan',
      businessHours: 'Mon-Sat: 9:00 AM - 9:00 PM',
    });
    console.log('  ✅ Site settings');
  } catch (e) {
    console.log(`  ⚠️ Site: ${e.message}`);
  }

  // Create stats settings
  console.log('📊 Creating stats settings...');
  try {
    await fetchApi('/wholesale', {
      type: 'stats',
      stats: [
        { value: '1000+', label: 'Happy Retailers' },
        { value: '500+', label: 'Unique Designs' },
        { value: '24/7', label: 'Wholesale Support' },
      ],
    });
    console.log('  ✅ Stats settings');
  } catch (e) {
    console.log(`  ⚠️ Stats: ${e.message}`);
  }

  console.log('✅ Database seed completed successfully!');
}

main().catch(e => {
  console.error('❌ Seed failed:', e);
  process.exit(1);
});