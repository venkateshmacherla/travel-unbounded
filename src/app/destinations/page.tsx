import type { Metadata } from "next";
import DestinationsClient from "./DestinationsClient";

export const metadata: Metadata = {
  title: "Explore Destinations | Travel Unbounded",
  description:
    "Explore curated travel destinations across India and beyond. Discover peaceful backwaters, mountain escapes, beaches, wildlife, and unforgettable journeys with Travel Unbounded.",
  keywords: [
    "Travel Unbounded",
    "travel destinations",
    "India travel destinations",
    "international travel",
    "India tour packages",
    "travel packages",
    "Kerala",
    "Himachal Pradesh",
    "Ladakh",
    "Goa",
    "Andaman",
    "Kenya",
    "Vietnam",
    "Tanzania",
    "Iceland",
    "Sri Lanka",
  ],
  alternates: {
    canonical: "/destinations",
  },
  openGraph: {
    title: "Explore Destinations | Travel Unbounded",
    description:
      "Discover thoughtfully curated destinations across India and around the world with Travel Unbounded.",
    url: "/destinations",
    siteName: "Travel Unbounded",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore Destinations | Travel Unbounded",
    description:
      "Discover thoughtfully curated destinations across India and around the world.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DestinationsPage() {
  return <DestinationsClient />;
}