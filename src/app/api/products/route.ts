import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");
    const collectionSlug = searchParams.get("collectionSlug");
    const activeOnly = searchParams.get("activeOnly") !== "false";
    const featured = searchParams.get("featured") === "true";
    const limit = parseInt(searchParams.get("limit") || "0");
    const page = parseInt(searchParams.get("page") || "1");
    const skip = (page - 1) * limit;

    if (slug) {
      const product = await prisma.product.findUnique({
        where: { slug },
        include: {
          collection: true,
          variants: true,
        },
      });

      if (!product) {
        return NextResponse.json({ error: "Product not found" }, { status: 404 });
      }

      return NextResponse.json(product);
    }

    const where: any = {};
    if (activeOnly) where.isActive = true;
    if (featured) where.isFeatured = true;
    if (collectionSlug) where.collection = { slug: collectionSlug };

    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where,
        include: {
          collection: true,
        },
        orderBy: { sortOrder: "asc" },
        skip: limit > 0 ? skip : 0,
        take: limit > 0 ? limit : undefined,
      }),
      prisma.product.count({ where }),
    ]);

    return NextResponse.json({
      products,
      pagination: limit > 0 ? { page, limit, total, totalPages: Math.ceil(total / limit) } : undefined,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { slug, name, description, price, compareAtPrice, fabric, moq, colors, images, primaryImage, collectionId, isFeatured, sortOrder } = body;

    if (!slug || !name || !price || !primaryImage || !collectionId) {
      return NextResponse.json(
        { error: "Slug, name, price, primaryImage, and collectionId are required" },
        { status: 400 }
      );
    }

    const product = await prisma.product.create({
      data: {
        slug,
        name,
        description,
        price,
        compareAtPrice,
        fabric,
        moq: moq || "10 pieces",
        colors: colors || [],
        images: images || [],
        primaryImage,
        collectionId,
        isFeatured: isFeatured || false,
        sortOrder: sortOrder || 0,
      },
      include: { collection: true },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 });
  }
}