import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Destination from "@/models/Destination";
import { destinations as staticDestinations } from "@/data/destinations";

// Dev-only helper to populate the Destination collection from the
// static data file. Not meant for production use.
export async function POST() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json(
      { success: false, message: "Seeding is disabled in production" },
      { status: 403 }
    );
  }

  try {
    await connectToDatabase();

    const results = [];

    for (const d of staticDestinations) {
      const doc = await Destination.findOneAndUpdate(
        { slug: d.slug },
        {
          $set: {
            name: d.name,
            slug: d.slug,
            country: d.country,
            city: d.name,
            description: d.description,
            image: d.image,
            bestTimeToVisit: "Year-round",
            averageBudget: d.price,
            tags: d.highlights,
          },
        },
        { upsert: true, new: true }
      );

      results.push(doc.slug);
    }

    return NextResponse.json({
      success: true,
      message: `Seeded ${results.length} destinations`,
      slugs: results,
    });
  } catch (error) {
    console.error("Seed error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to seed destinations",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
