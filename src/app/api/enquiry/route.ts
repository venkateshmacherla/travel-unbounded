import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";
import { validateEnquiryInput } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { valid, errors } = validateEnquiryInput(body);

    if (!valid) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid enquiry data",
          errors,
        },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const enquiry = await Enquiry.create({
      name: body.name.trim(),
      email: body.email.trim(),
      phone: body.phone.trim(),
      destination: body.destination?.trim(),
      travelDate: body.travelDate ? new Date(body.travelDate) : undefined,
      travelers: body.travelers ?? 1,
      message: body.message?.trim(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry received",
        data: { id: enquiry._id },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST enquiry error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit enquiry",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
