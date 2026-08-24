import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Destination from "@/models/Destination";

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