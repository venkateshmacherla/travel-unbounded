import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Home() {
  return (
    <section className="min-h-[70vh] py-20">
      <Container>
        <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
            Travel Unbounded
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-[var(--primary)] sm:text-5xl lg:text-6xl">
            India&apos;s Most Trusted Experiential Travel Experts
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            Journeys designed around you, blending comfort, culture, and raw
            nature into experiences worth remembering.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" variant="secondary">
              Plan Your Trip
            </Button>

            <Button href="/about" variant="outline">
              Discover Our Story
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}