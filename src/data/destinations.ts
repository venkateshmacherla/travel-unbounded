import type { Destination } from "@/types/destination";

// NOTE ON IMAGES: These use picsum.photos with a fixed seed per
// destination so every image is guaranteed to resolve reliably in
// the deployed build (no broken links, no rate limits). Swap the
// `image` values for real Unsplash photo URLs (see README) before
// a production launch if photo-accurate destination imagery matters.

export const destinations: Destination[] = [
  // ---------------- India ----------------
  {
    id: "in-kerala",
    slug: "kerala",
    name: "Kerala",
    country: "India",
    location: "South India",
    description:
      "Slow down among backwaters, misty hills, local flavours, and quiet coastal escapes.",
    image: "https://picsum.photos/seed/kerala-backwaters/800/600",
    price: 24999,
    category: "india",
    highlights: ["Backwater houseboats", "Munnar tea hills", "Local Kerala cuisine"],
  },
  {
    id: "in-himachal",
    slug: "himachal-pradesh",
    name: "Himachal Pradesh",
    country: "India",
    location: "North India",
    description:
      "Trade busy city life for mountain trails, peaceful valleys, and refreshing Himalayan air.",
    image: "https://picsum.photos/seed/himachal-mountains/800/600",
    price: 21999,
    category: "india",
    highlights: ["Mountain escapes", "Scenic valleys", "Adventure treks"],
  },
  {
    id: "in-ladakh",
    slug: "ladakh",
    name: "Ladakh",
    country: "India",
    location: "North India",
    description:
      "High-altitude deserts, turquoise lakes, and monasteries perched above the clouds.",
    image: "https://picsum.photos/seed/ladakh-landscape/800/600",
    price: 32999,
    category: "india",
    highlights: ["Pangong Lake", "Monastery visits", "Himalayan road trips"],
  },
  {
    id: "in-andaman",
    slug: "andaman",
    name: "Andaman",
    country: "India",
    location: "Bay of Bengal",
    description:
      "Turquoise water, coral reefs, and quiet islands made for slowing all the way down.",
    image: "https://picsum.photos/seed/andaman-beach/800/600",
    price: 28999,
    category: "india",
    highlights: ["Scuba diving", "Radhanagar Beach", "Island hopping"],
  },
  {
    id: "in-goa",
    slug: "goa",
    name: "Goa",
    country: "India",
    location: "West India",
    description:
      "A relaxed coastal escape combining beaches, Portuguese heritage, food, and slow evenings.",
    image: "https://picsum.photos/seed/goa-beach/800/600",
    price: 15999,
    category: "india",
    highlights: ["Beach shacks", "Portuguese heritage", "Coastal cuisine"],
  },

  // ------------- International -------------
  {
    id: "intl-kenya",
    slug: "kenya",
    name: "Kenya",
    country: "Kenya",
    location: "East Africa",
    description:
      "Spot the Big Five at dawn in the Masai Mara and experience raw, unscripted wilderness.",
    image: "https://picsum.photos/seed/kenya-safari/800/600",
    price: 89999,
    category: "international",
    highlights: ["Masai Mara safari", "Big Five sightings", "Great Migration"],
  },
  {
    id: "intl-vietnam",
    slug: "vietnam",
    name: "Vietnam",
    country: "Vietnam",
    location: "Southeast Asia",
    description:
      "Cruise Ha Long Bay at sunset and explore a country layered with culture and cuisine.",
    image: "https://picsum.photos/seed/halong-bay/800/600",
    price: 54999,
    category: "international",
    highlights: ["Ha Long Bay cruise", "Street food trails", "Old town Hanoi"],
  },
  {
    id: "intl-tanzania",
    slug: "tanzania",
    name: "Tanzania",
    country: "Tanzania",
    location: "East Africa",
    description:
      "Endless Serengeti plains, dramatic wildlife, and some of Africa's most iconic landscapes.",
    image: "https://picsum.photos/seed/serengeti-tanzania/800/600",
    price: 94999,
    category: "international",
    highlights: ["Serengeti plains", "Wildlife safaris", "Ngorongoro Crater"],
  },
  {
    id: "intl-iceland",
    slug: "iceland",
    name: "Iceland",
    country: "Iceland",
    location: "Northern Europe",
    description:
      "Glaciers, waterfalls, and otherworldly landscapes made for slow, deliberate exploring.",
    image: "https://picsum.photos/seed/iceland-waterfall/800/600",
    price: 149999,
    category: "international",
    highlights: ["Golden Circle", "Glacier hikes", "Northern Lights"],
  },
  {
    id: "intl-srilanka",
    slug: "sri-lanka",
    name: "Sri Lanka",
    country: "Sri Lanka",
    location: "South Asia",
    description:
      "Tea plantations, ancient cities, and coastlines packed into a compact, unforgettable island.",
    image: "https://picsum.photos/seed/srilanka-tea/800/600",
    price: 42999,
    category: "international",
    highlights: ["Tea plantation trails", "Ancient cities", "Coastal towns"],
  },
];

export function getDestinationsByCategory(category: "india" | "international") {
  return destinations.filter((d) => d.category === category);
}
