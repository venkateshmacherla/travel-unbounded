import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

type Destination = {
  _id: string;
  name: string;
  slug: string;
  country: string;
  city: string;
  description: string;
  image: string;
  bestTimeToVisit: string;
  averageBudget: number;
  tags?: string[];
};

type DestinationPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

async function getDestination(
  slug: string
): Promise<Destination | null> {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const response = await fetch(
      `${baseUrl}/api/destinations/${slug}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return null;
    }

    const result = await response.json();

    if (!result.success || !result.data) {
      return null;
    }

    return result.data;
  } catch (error) {
    console.error("Failed to fetch destination:", error);
    return null;
  }
}

// Dynamic SEO metadata
export async function generateMetadata({
  params,
}: DestinationPageProps): Promise<Metadata> {
  const { slug } = await params;

  const destination = await getDestination(slug);

  if (!destination) {
    return {
      title: "Destination Not Found | Travel Unbounded",
      description:
        "The destination you are looking for could not be found.",
    };
  }

  const title = `${destination.name}, ${destination.country} | Travel Unbounded`;

  const description =
    destination.description ||
    `Explore ${destination.name}, ${destination.country} with Travel Unbounded. Discover the best time to visit, travel highlights, and estimated budget.`;

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const canonicalUrl = `${baseUrl}/destinations/${destination.slug}`;

  return {
    title,
    description,

    keywords: [
      destination.name,
      destination.country,
      `${destination.name} travel`,
      `${destination.name} tourism`,
      `${destination.name} travel packages`,
      `${destination.name} holidays`,
      "Travel Unbounded",
    ],

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Travel Unbounded",
      type: "website",
      images: destination.image
        ? [
            {
              url: destination.image,
              width: 800,
              height: 600,
              alt: `${destination.name} - Travel Unbounded`,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: destination.image
        ? [destination.image]
        : [],
    },
  };
}

export default async function DestinationPage({
  params,
}: DestinationPageProps) {
  const { slug } = await params;

  const destination = await getDestination(slug);

  if (!destination) {
    notFound();
  }

  return (
    <main>
      {/* Hero */}
      <section className="border-b border-(--border) bg-(--surface)">
        <Container>
          <div className="py-16 md:py-24">
            <Link
              href="/destinations"
              className="text-sm font-medium text-(--accent) hover:underline"
            >
              ← Back to Destinations
            </Link>

            <div className="mt-8 max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-(--accent)">
                {destination.city}, {destination.country}
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight text-(--primary) md:text-6xl">
                {destination.name}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-(--muted) md:text-xl">
                {destination.description}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Destination image */}
      {destination.image && (
        <section className="bg-(--background) py-8 md:py-12">
          <Container>
            <div className="overflow-hidden rounded-3xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={destination.image}
                alt={`${destination.name}, ${destination.country}`}
                className="h-72 w-full object-cover md:h-105 lg:h-125"
              />
            </div>
          </Container>
        </section>
      )}

      {/* Destination details */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr]">
            {/* Experience */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-(--accent)">
                Experience
              </p>

              <h2 className="mt-3 text-3xl font-bold text-(--primary)">
                What makes {destination.name} special?
              </h2>

              <p className="mt-5 text-base leading-8 text-(--muted)">
                {destination.description}
              </p>

              {/* Best time */}
              <div className="mt-8">
                <h3 className="text-lg font-bold text-(--primary)">
                  Best Time to Visit
                </h3>

                <p className="mt-2 text-(--muted)">
                  {destination.bestTimeToVisit}
                </p>
              </div>

              {/* Budget */}
              <div className="mt-6">
                <h3 className="text-lg font-bold text-(--primary)">
                  Average Budget
                </h3>

                <p className="mt-2 text-(--muted)">
                  ₹
                  {destination.averageBudget.toLocaleString(
                    "en-IN"
                  )}
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="rounded-2xl border border-(--border) bg-(--surface) p-6">
              <h3 className="text-lg font-bold text-(--primary)">
                Highlights
              </h3>

              {destination.tags &&
              destination.tags.length > 0 ? (
                <div className="mt-5 flex flex-wrap gap-3">
                  {destination.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-(--background) px-4 py-2 text-sm text-(--foreground)"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="mt-4 text-sm text-(--muted)">
                  No highlights available.
                </p>
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12">
            <Button href="/contact" variant="secondary">
              Plan Your Trip
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}