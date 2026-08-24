import Link from "next/link";
import Container from "@/components/ui/Container";
import { destinations } from "@/data/destinations";

export default function DestinationsPage() {
  return (
    <main>
      <section className="border-b border-[#dfe5df] bg-[#f8f6f0] py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#c96d3d]">
              Explore India
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-[#0d3b2e] md:text-6xl">
              Places worth slowing down for
            </h1>

            <p className="mt-6 text-base leading-7 text-[#5d6b67] md:text-lg md:leading-8">
              Discover thoughtful journeys across India, from peaceful
              backwaters and mountain valleys to colourful cities and coastlines.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[#f8f6f0] py-12 md:py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {destinations.map((destination) => (
              <article
                key={destination.slug}
                className="group overflow-hidden rounded-3xl border border-[#dfe5df] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-56 items-center justify-center overflow-hidden bg-[#e6ece6] md:h-64">
                  <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#5d6b67] transition-transform duration-300 group-hover:scale-105">
                    {destination.name}
                  </span>
                </div>

                <div className="p-6 md:p-7">
                  <p className="text-sm font-medium uppercase tracking-[0.15em] text-[#c96d3d]">
                    {destination.location}
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-[#0d3b2e]">
                    {destination.name}
                  </h2>

                  <p className="mt-4 leading-7 text-[#5d6b67]">
                    {destination.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {destination.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full bg-[#eef2ed] px-3 py-1.5 text-sm text-[#315247]"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Destination action */}
                  <Link
                    href={`/destinations/${destination.slug}`}
                    className="mt-7 inline-flex rounded-full bg-[#c96d3d] px-6 py-3 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#b85e32] hover:shadow-md"
                  >
                    Explore Destination
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}