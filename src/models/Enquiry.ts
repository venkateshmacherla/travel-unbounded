import mongoose, { Document, Model, Schema } from "mongoose";

export interface IEnquiry extends Document {
  fullName: string;
  countryCode: string;
  contactNumber: string;
  email: string;
  travelDate: Date;
  people: number;
  hotelCategory: "Standard" | "Deluxe" | "Luxury";
  children: number;
  createdAt: Date;
  updatedAt: Date;
}

const enquirySchema = new Schema<IEnquiry>(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    countryCode: {
      type: String,
      required: true,
      trim: true,
    },

    contactNumber: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    travelDate: {
      type: Date,
      required: true,
    },

    people: {
      type: Number,
      required: true,
      min: 1,
    },

    hotelCategory: {
      type: String,
      required: true,
      enum: ["Standard", "Deluxe", "Luxury"],
    },

    children: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Enquiry: Model<IEnquiry> =
  mongoose.models.Enquiry ||
  mongoose.model<IEnquiry>("Enquiry", enquirySchema);

export default Enquiry;