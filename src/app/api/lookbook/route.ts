import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const activeOnly = searchParams.get("activeOnly") !== "false";

    const where = activeOnly ? { isActive: true } : {};

    const items = await prisma.lookbookItem.findMany({
      where,
      orderBy: { sortOrder: "asc" },
    });

    return NextResponse.json(items);
  } catch (error) {
    console.error("Error fetching lookbook:", error);
    return NextResponse.json({ error: "Failed to fetch lookbook" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, image, alt, collectionId, sortOrder } = body;

    if (!title || !image) {
      return NextResponse.json({ error: "Title and image are required" }, { status: 400 });
    }

    const item = await prisma.lookbookItem.create({
      data: { title, image, alt, collectionId, sortOrder: sortOrder || 0 },
    });

    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    console.error("Error creating lookbook item:", error);
    return NextResponse.json({ error: "Failed to create lookbook item" }, { status: 500 });
  }
}