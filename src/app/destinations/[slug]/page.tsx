import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { destinations } from "@/data/destinations";

type DestinationPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function DestinationPage({
  params,
}: DestinationPageProps) {
  const { slug } = await params;

  const destination = destinations.find((item) => item.slug === slug);

  if (!destination) {
    notFound();
  }

  return (
    <main>
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
                {destination.location}
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

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-(--accent)">
                Experience
              </p>

              <h2 className="mt-3 text-3xl font-bold text-(--primary)">
                What makes {destination.name} special?
              </h2>

              <p className="mt-5 text-base leading-8 text-(--muted)">
                Discover meaningful places, local culture, memorable food,
                and experiences designed around the way you want to travel.
              </p>
            </div>

            <div className="rounded-2xl border border-(--border) bg-(--surface) p-6">
              <h3 className="text-lg font-bold text-(--primary)">
                Highlights
              </h3>

              <div className="mt-5 flex flex-wrap gap-3">
                {destination.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full bg-(--background) px-4 py-2 text-sm text-(--foreground)"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </div>

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