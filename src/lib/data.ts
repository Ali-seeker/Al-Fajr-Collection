import { prisma } from "./prisma";

export async function getCollections(activeOnly = true) {
  return prisma.collection.findMany({
    where: activeOnly ? { isActive: true } : {},
    orderBy: { sortOrder: "asc" },
    include: {
      _count: { select: { products: true } },
    },
  });
}

export async function getCollectionBySlug(slug: string, includeProducts = false) {
  return prisma.collection.findUnique({
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

  return { products, total };
}

export async function getProductBySlug(slug: string) {
  return prisma.product.findUnique({
    where: { slug },
    include: {
      collection: true,
      variants: true,
    },
  });
}

export async function getLookbookItems(activeOnly = true) {
  return prisma.lookbookItem.findMany({
    where: activeOnly ? { isActive: true } : {},
    orderBy: { sortOrder: "asc" },
  });
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