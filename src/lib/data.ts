import { prisma } from "./prisma";

// Helper to convert Decimal to number
function convertDecimal(obj: any): any {
  if (!obj) return obj;
  if (Array.isArray(obj)) return obj.map(convertDecimal);
  if (typeof obj === 'object' && obj !== null) {
    const result: any = {};
    for (const [key, value] of Object.entries(obj)) {
      if (value && typeof value === 'object' && 'toNumber' in value) {
        // Prisma Decimal object
        result[key] = Number(value);
      } else if (typeof value === 'object' && value !== null) {
        result[key] = convertDecimal(value);
      } else {
        result[key] = value;
      }
    }
    return result;
  }
  return obj;
}

export async function getCollections(activeOnly = true) {
  const collections = await prisma.collection.findMany({
    where: activeOnly ? { isActive: true } : {},
    orderBy: { sortOrder: "asc" },
    include: {
      _count: { select: { products: true } },
    },
  });
  return convertDecimal(collections);
}

export async function getCollectionBySlug(slug: string, includeProducts = false) {
  const collection = await prisma.collection.findUnique({
    where: { slug },
    include: {
      products: includeProducts
        ? {
            where: { isActive: true },
            orderBy: { sortOrder: "asc" },
          }
        : false,
    },
  });
  return convertDecimal(collection);
}

export async function getProducts(params?: {
  collectionSlug?: string;
  featured?: boolean;
  activeOnly?: boolean;
  limit?: number;
  page?: number;
}) {
  const where: any = {};
  if (params?.activeOnly !== false) where.isActive = true;
  if (params?.featured) where.isFeatured = true;
  if (params?.collectionSlug) where.collection = { slug: params.collectionSlug };

  const skip = params?.page && params?.limit ? (params.page - 1) * params.limit : 0;

  const [products, total] = await Promise.all([
    prisma.product.findMany({
      where,
      include: { collection: true },
      orderBy: { sortOrder: "asc" },
      skip,
      take: params?.limit,
    }),
    prisma.product.count({ where }),
  ]);

  return { products: convertDecimal(products), total };
}

export async function getProductBySlug(slug: string) {
  const product = await prisma.product.findUnique({
    where: { slug },
    include: {
      collection: true,
      variants: true,
    },
  });
  return convertDecimal(product);
}

export async function getLookbookItems(activeOnly = true) {
  const items = await prisma.lookbookItem.findMany({
    where: activeOnly ? { isActive: true } : {},
    orderBy: { sortOrder: "asc" },
  });
  return convertDecimal(items);
}

export async function getWholesaleFAQs() {
  return prisma.wholesaleFAQ.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
  });
}

export async function getWholesaleBenefits() {
  return prisma.wholesaleBenefit.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
  });
}

export async function getWholesaleProcess() {
  return prisma.wholesaleProcessStep.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
  });
}

export async function getHeroSettings() {
  return prisma.heroSettings.findUnique({ where: { id: "main" } });
}

export async function getSiteSettings() {
  return prisma.siteSettings.findUnique({ where: { id: "main" } });
}

export async function getStatsSettings() {
  return prisma.statsSettings.findUnique({ where: { id: "main" } });
}