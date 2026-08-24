import mongoose, {
  Schema,
  Document,
  Model,
} from "mongoose";

export interface IDestination extends Document {
  name: string;
  slug: string;
  country: string;
  city: string;
  description: string;
  image: string;
  bestTimeToVisit: string;
  averageBudget: number;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

const destinationSchema = new Schema<IDestination>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    country: {
      type: String,
      required: true,
      trim: true,
    },

    city: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    bestTimeToVisit: {
      type: String,
      required: true,
    },

    averageBudget: {
      type: Number,
      required: true,
    },

    tags: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Destination: Model<IDestination> =
  mongoose.models.Destination ||
  mongoose.model<IDestination>("Destination", destinationSchema);

export default Destination;