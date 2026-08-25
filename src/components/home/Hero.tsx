import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[70vh] items-center justify-center bg-cover bg-center py-24 text-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(13,59,46,0.72), rgba(13,59,46,0.72)), url('https://picsum.photos/seed/travel-unbounded-hero/1600/900')",
      }}
    >
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-(--accent)">
            Travel Unbounded
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            India&apos;s Most Trusted Experiential Travel Experts
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            Journeys designed around you, blending comfort, culture, and raw
            nature into experiences worth remembering.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" variant="secondary">
              Plan Your Trip
            </Button>

            <Button href="/about" variant="outline" className="border-white text-white hover:bg-white hover:text-(--primary)">
              Discover Our Story
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
