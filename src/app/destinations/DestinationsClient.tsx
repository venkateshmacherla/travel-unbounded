"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";

interface Destination {
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
}

interface DestinationsResponse {
  success: boolean;
  count: number;
  data: Destination[];
}

export default function DestinationsClient() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchDestinations() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("/api/destinations");

        if (!response.ok) {
          throw new Error("Failed to fetch destinations");
        }

        const result: DestinationsResponse = await response.json();

        if (!result.success) {
          throw new Error("Failed to load destinations");
        }

        setDestinations(result.data);
      } catch (error) {
        console.error("Fetch destinations error:", error);
        setError("Unable to load destinations. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchDestinations();
  }, []);

  return (
    <main>
      {/* Hero */}
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
              backwaters and mountain valleys to colourful cities and
              coastlines.
            </p>
          </div>
        </Container>
      </section>

      {/* Destinations */}
      <section className="bg-[#f8f6f0] py-12 md:py-16">
        <Container>
          {/* Loading */}
          {loading && (
            <div className="flex min-h-75 items-center justify-center">
              <p className="text-base font-medium text-[#5d6b67]">
                Loading destinations...
              </p>
            </div>
          )}

          {/* Error */}
          {!loading && error && (
            <div className="mx-auto max-w-xl rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
              <p className="font-medium text-red-700">{error}</p>

              <button
                type="button"
                onClick={() => window.location.reload()}
                className="mt-4 rounded-full bg-[#c96d3d] px-5 py-2.5 font-semibold text-white transition hover:bg-[#b85e32]"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Empty state */}
          {!loading && !error && destinations.length === 0 && (
            <div className="flex min-h-75 items-center justify-center">
              <p className="text-base font-medium text-[#5d6b67]">
                No destinations available at the moment.
              </p>
            </div>
          )}

          {/* Destination cards */}
          {!loading && !error && destinations.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              {destinations.map((destination) => (
                <article
                  key={destination._id}
                  className="group overflow-hidden rounded-3xl border border-[#dfe5df] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Image */}
                  <div className="relative flex h-56 items-center justify-center overflow-hidden bg-[#e6ece6] md:h-64">
                    {destination.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={destination.image}
                        alt={`${destination.name} travel destination`}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#5d6b67]">
                        {destination.name}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-7">
                    <p className="text-sm font-medium uppercase tracking-[0.15em] text-[#c96d3d]">
                      {destination.city}, {destination.country}
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-[#0d3b2e]">
                      {destination.name}
                    </h2>

                    <p className="mt-4 leading-7 text-[#5d6b67]">
                      {destination.description}
                    </p>

                    {/* Tags */}
                    {destination.tags && destination.tags.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {destination.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-[#eef2ed] px-3 py-1.5 text-sm text-[#315247]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Extra information */}
                    <div className="mt-5 space-y-1 text-sm text-[#5d6b67]">
                      <p>
                        <span className="font-semibold text-[#315247]">
                          Best time:
                        </span>{" "}
                        {destination.bestTimeToVisit}
                      </p>

                      <p>
                        <span className="font-semibold text-[#315247]">
                          Average budget:
                        </span>{" "}
                        ₹{destination.averageBudget.toLocaleString("en-IN")}
                      </p>
                    </div>

                    {/* Action */}
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
          )}
        </Container>
      </section>
    </main>
  );
}