import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Destination from "@/models/Destination";

function createSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// GET ALL DESTINATIONS
export async function GET() {
  try {
    await connectToDatabase();

    const destinations = await Destination.find()
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({
      success: true,
      count: destinations.length,
      data: destinations,
    });
  } catch (error) {
    console.error("GET destinations error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch destinations",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}

// CREATE DESTINATION
export async function POST(request: Request) {
  try {
    await connectToDatabase();

    const body = await request.json();

    const {
      name,
      slug,
      country,
      city,
      description,
      image,
      bestTimeToVisit,
      averageBudget,
      tags,
    } = body;

    if (
      !name ||
      !country ||
      !city ||
      !description ||
      !image ||
      !bestTimeToVisit ||
      averageBudget === undefined
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "All required fields are required",
        },
        { status: 400 }
      );
    }

    const finalSlug = createSlug(slug || name);

    const existingDestination = await Destination.findOne({
      slug: finalSlug,
    });

    if (existingDestination) {
      return NextResponse.json(
        {
          success: false,
          message: "Destination with this slug already exists",
        },
        { status: 409 }
      );
    }

    const destination = await Destination.create({
      name: name.trim(),
      slug: finalSlug,
      country: country.trim(),
      city: city.trim(),
      description: description.trim(),
      image: image.trim(),
      bestTimeToVisit: bestTimeToVisit.trim(),
      averageBudget: Number(averageBudget),
      tags: Array.isArray(tags) ? tags : [],
    });

    return NextResponse.json(
      {
        success: true,
        message: "Destination created successfully",
        data: destination,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST destination error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create destination",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}