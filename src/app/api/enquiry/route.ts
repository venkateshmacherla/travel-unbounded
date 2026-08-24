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
      fullName: body.fullName.trim(),
      countryCode: body.countryCode.trim(),
      contactNumber: body.contactNumber.trim(),
      email: body.email.trim().toLowerCase(),
      travelDate: new Date(`${body.travelDate}T00:00:00`),
      people: body.people,
      hotelCategory: body.hotelCategory,
      children: body.children ?? 0,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry received successfully",
        data: {
          id: enquiry._id,
        },
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