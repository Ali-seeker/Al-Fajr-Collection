import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");

    if (type === "faq") {
      const faqs = await prisma.wholesaleFAQ.findMany({
        where: { isActive: true },
        orderBy: { sortOrder: "asc" },
      });
      return NextResponse.json(faqs);
    }

    if (type === "benefits") {
      const benefits = await prisma.wholesaleBenefit.findMany({
        where: { isActive: true },
        orderBy: { sortOrder: "asc" },
      });
      return NextResponse.json(benefits);
    }

    if (type === "process") {
      const steps = await prisma.wholesaleProcessStep.findMany({
        where: { isActive: true },
        orderBy: { sortOrder: "asc" },
      });
      return NextResponse.json(steps);
    }

    if (type === "hero") {
      const hero = await prisma.heroSettings.findUnique({ where: { id: "main" } });
      return NextResponse.json(hero);
    }

    if (type === "site") {
      const site = await prisma.siteSettings.findUnique({ where: { id: "main" } });
      return NextResponse.json(site);
    }

    if (type === "stats") {
      const stats = await prisma.statsSettings.findUnique({ where: { id: "main" } });
      return NextResponse.json(stats);
    }

    // Return all
    const [faqs, benefits, process, hero, site, stats] = await Promise.all([
      prisma.wholesaleFAQ.findMany({ where: { isActive: true }, orderBy: { sortOrder: "asc" } }),
      prisma.wholesaleBenefit.findMany({ where: { isActive: true }, orderBy: { sortOrder: "asc" } }),
      prisma.wholesaleProcessStep.findMany({ where: { isActive: true }, orderBy: { sortOrder: "asc" } }),
      prisma.heroSettings.findUnique({ where: { id: "main" } }),
      prisma.siteSettings.findUnique({ where: { id: "main" } }),
      prisma.statsSettings.findUnique({ where: { id: "main" } }),
    ]);

    return NextResponse.json({ faqs, benefits, process, hero, site, stats });
  } catch (error) {
    console.error("Error fetching wholesale data:", error);
    return NextResponse.json({ error: "Failed to fetch wholesale data" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, ...data } = body;

    let result;
    switch (type) {
      case "faq":
        result = await prisma.wholesaleFAQ.create({ data: { ...data, sortOrder: data.sortOrder || 0 } });
        break;
      case "benefits":
        result = await prisma.wholesaleBenefit.create({ data: { ...data, sortOrder: data.sortOrder || 0 } });
        break;
      case "process":
        result = await prisma.wholesaleProcessStep.create({ data: { ...data, sortOrder: data.sortOrder || 0 } });
        break;
      case "hero":
        result = await prisma.heroSettings.upsert({
          where: { id: "main" },
          update: { ...data },
          create: { id: "main", ...data },
        });
        break;
      case "site":
        result = await prisma.siteSettings.upsert({
          where: { id: "main" },
          update: { ...data },
          create: { id: "main", ...data },
        });
        break;
      case "stats":
        result = await prisma.statsSettings.upsert({
          where: { id: "main" },
          update: { stats: data.stats },
          create: { id: "main", stats: data.stats },
        });
        break;
      default:
        return NextResponse.json({ error: "Invalid type" }, { status: 400 });
    }

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error("Error creating wholesale data:", error);
    return NextResponse.json({ error: "Failed to create" }, { status: 500 });
  }
}