import mongoose, { Schema, Document, Model } from "mongoose";

export interface IEnquiry extends Document {
  fullName: string;
  email: string;
  countryCode: string;
  contactNumber: string;
  travelDate: Date;
  people: number;
  children: number;
  hotelCategory: string;
  status: "new" | "contacted" | "closed";
  createdAt: Date;
  updatedAt: Date;
}

const enquirySchema = new Schema<IEnquiry>(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    countryCode: { type: String, required: true, trim: true },
    contactNumber: { type: String, required: true, trim: true },
    travelDate: { type: Date, required: true },
    people: { type: Number, required: true, min: 1 },
    children: { type: Number, default: 0, min: 0 },
    hotelCategory: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: ["new", "contacted", "closed"],
      default: "new",
    },
  },
  { timestamps: true }
);

const Enquiry: Model<IEnquiry> =
  mongoose.models.Enquiry || mongoose.model<IEnquiry>("Enquiry", enquirySchema);

export default Enquiry;