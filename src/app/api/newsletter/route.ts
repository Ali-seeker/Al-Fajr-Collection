import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { mobile, name, source } = body;

    if (!mobile) {
      return NextResponse.json({ error: "Mobile number is required" }, { status: 400 });
    }

    const mobileRegex = /^\d{11}$/;
    if (!mobileRegex.test(mobile)) {
      return NextResponse.json({ error: "Invalid mobile number. Must be 11 digits." }, { status: 400 });
    }

    const existing = await prisma.newsletterSubscriber.findUnique({ where: { mobile } });

    if (existing) {
      if (!existing.isActive) {
        await prisma.newsletterSubscriber.update({
          where: { mobile },
          data: { isActive: true, unsubscribedAt: null, name: name || existing.name },
        });
        return NextResponse.json({ message: "Resubscribed successfully" });
      }
      return NextResponse.json({ message: "Already subscribed" });
    }

    const subscriber = await prisma.newsletterSubscriber.create({
      data: { mobile, name, source: source || "footer" },
    });

    return NextResponse.json(subscriber, { status: 201 });
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const activeOnly = searchParams.get("activeOnly") !== "false";
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "50");
    const skip = (page - 1) * limit;

    const where = activeOnly ? { isActive: true } : {};

    const [subscribers, total] = await Promise.all([
      prisma.newsletterSubscriber.findMany({
        where,
        orderBy: { subscribedAt: "desc" },
        skip,
        take: limit,
      }),
      prisma.newsletterSubscriber.count({ where }),
    ]);

    return NextResponse.json({
      subscribers,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    });
  } catch (error) {
    console.error("Error fetching subscribers:", error);
    return NextResponse.json({ error: "Failed to fetch subscribers" }, { status: 500 });
  }
}