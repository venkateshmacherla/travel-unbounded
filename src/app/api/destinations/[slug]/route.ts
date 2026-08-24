import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Destination from "@/models/Destination";
import { validateDestinationUpdate } from "@/lib/validations";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    await connectToDatabase();

    const destination = await Destination.findOne({ slug }).lean();

    if (!destination) {
      return NextResponse.json(
        { success: false, message: "Destination not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: destination,
    });
  } catch (error) {
    console.error("GET destination error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch destination",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const body = await request.json();

    const { valid, errors } = validateDestinationUpdate(body);

    if (!valid) {
      return NextResponse.json(
        { success: false, message: "Invalid destination data", errors },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const destination = await Destination.findOneAndUpdate(
      { slug },
      { $set: body },
      { new: true, runValidators: true }
    );

    if (!destination) {
      return NextResponse.json(
        { success: false, message: "Destination not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: destination,
    });
  } catch (error) {
    console.error("PUT destination error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update destination",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    await connectToDatabase();

    const destination = await Destination.findOneAndDelete({ slug });

    if (!destination) {
      return NextResponse.json(
        { success: false, message: "Destination not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Destination deleted",
      data: { slug: destination.slug },
    });
  } catch (error) {
    console.error("DELETE destination error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete destination",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}