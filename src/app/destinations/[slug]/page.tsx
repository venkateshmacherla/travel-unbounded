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
      {/* Hero Section */}
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

      {/* Destination Details */}
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

              {/* Best Time */}
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
                  ₹{destination.averageBudget.toLocaleString("en-IN")}
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="rounded-2xl border border-(--border) bg-(--surface) p-6">
              <h3 className="text-lg font-bold text-(--primary)">
                Highlights
              </h3>

              {destination.tags && destination.tags.length > 0 ? (
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