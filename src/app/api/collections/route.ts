import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");
    const includeProducts = searchParams.get("includeProducts") === "true";
    const activeOnly = searchParams.get("activeOnly") !== "false";

    if (slug) {
      const collection = await prisma.collection.findUnique({
        where: { slug },
        include: {
          products: includeProducts
            ? {
                where: activeOnly ? { isActive: true } : {},
                orderBy: { sortOrder: "asc" },
              }
            : false,
        },
      });

      if (!collection) {
        return NextResponse.json({ error: "Collection not found" }, { status: 404 });
      }

      return NextResponse.json(collection);
    }

    const collections = await prisma.collection.findMany({
      where: activeOnly ? { isActive: true } : {},
      orderBy: { sortOrder: "asc" },
      include: {
        _count: {
          select: { products: true },
        },
      },
    });

    return NextResponse.json(collections);
  } catch (error) {
    console.error("Error fetching collections:", error);
    return NextResponse.json({ error: "Failed to fetch collections" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { slug, title, description, image, designsCount, sortOrder } = body;

    if (!slug || !title || !image) {
      return NextResponse.json(
        { error: "Slug, title, and image are required" },
        { status: 400 }
      );
    }

    const collection = await prisma.collection.create({
      data: {
        slug,
        title,
        description,
        image,
        designsCount: designsCount || 0,
        sortOrder: sortOrder || 0,
      },
    });

    return NextResponse.json(collection, { status: 201 });
  } catch (error) {
    console.error("Error creating collection:", error);
    return NextResponse.json({ error: "Failed to create collection" }, { status: 500 });
  }
}