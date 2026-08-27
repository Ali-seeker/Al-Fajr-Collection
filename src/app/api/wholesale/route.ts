import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type"); // faq, benefits, process

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

    // Return all
    const [faqs, benefits, process] = await Promise.all([
      prisma.wholesaleFAQ.findMany({ where: { isActive: true }, orderBy: { sortOrder: "asc" } }),
      prisma.wholesaleBenefit.findMany({ where: { isActive: true }, orderBy: { sortOrder: "asc" } }),
      prisma.wholesaleProcessStep.findMany({ where: { isActive: true }, orderBy: { sortOrder: "asc" } }),
    ]);

    return NextResponse.json({ faqs, benefits, process });
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
      default:
        return NextResponse.json({ error: "Invalid type" }, { status: 400 });
    }

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error("Error creating wholesale data:", error);
    return NextResponse.json({ error: "Failed to create" }, { status: 500 });
  }
}