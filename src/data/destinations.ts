import type { Destination } from "@/types/destination";

export const destinations: Destination[] = [
  {
    slug: "kerala",
    name: "Kerala",
    location: "South India",
    description:
      "Slow down among backwaters, misty hills, local flavours, and quiet coastal escapes.",
    image: "/images/destinations/kerala.jpg",
    highlights: [
      "Backwater experiences",
      "Munnar hills",
      "Local Kerala cuisine",
    ],
  },
  {
    slug: "rajasthan",
    name: "Rajasthan",
    location: "Northwest India",
    description:
      "Experience royal cities, desert landscapes, colourful markets, and timeless heritage.",
    image: "/images/destinations/rajasthan.jpg",
    highlights: [
      "Jaipur heritage",
      "Jaisalmer desert",
      "Udaipur lakes",
    ],
  },
  {
    slug: "himachal-pradesh",
    name: "Himachal Pradesh",
    location: "North India",
    description:
      "Trade busy city life for mountain trails, peaceful valleys, and refreshing Himalayan air.",
    image: "/images/destinations/himachal-pradesh.jpg",
    highlights: [
      "Mountain escapes",
      "Scenic valleys",
      "Adventure experiences",
    ],
  },
  {
    slug: "goa",
    name: "Goa",
    location: "West India",
    description:
      "A relaxed coastal escape combining beaches, Portuguese heritage, food, and slow evenings.",
    image: "/images/destinations/goa.jpg",
    highlights: [
      "Beach experiences",
      "Portuguese heritage",
      "Coastal cuisine",
    ],
  },
];