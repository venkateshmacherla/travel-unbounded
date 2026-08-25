export type DestinationCategory = "india" | "international";

export type Destination = {
  id: string;
  slug: string;
  name: string;
  country: string;
  location: string;
  description: string;
  image: string;
  price: number;
  category: DestinationCategory;
  highlights: string[];
};
