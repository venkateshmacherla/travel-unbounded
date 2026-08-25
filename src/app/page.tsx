import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import DestinationSection from "@/components/home/DestinationSection";
import { getDestinationsByCategory } from "@/data/destinations";

export const metadata: Metadata = {
  title: "Travel Unbounded | Experiential Travel Experts",
  description:
    "Discover personalised experiential journeys across India and around the world with Travel Unbounded.",
};

export default function Home() {
  const indiaDestinations = getDestinationsByCategory("india");
  const internationalDestinations =
    getDestinationsByCategory("international");

  return (
    <>
      <Hero />

      <DestinationSection
        title="India Destinations"
        subtitle="Explore India"
        destinations={indiaDestinations}
        tint="white"
      />

      <DestinationSection
        title="International Destinations"
        subtitle="Go Further"
        destinations={internationalDestinations}
        tint="light"
      />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl rounded-3xl bg-[#0d3b2e] px-6 py-16 text-center sm:px-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#d06d3c]">
            Start Your Journey
          </p>

          <h2 className="mx-auto max-w-3xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Your Next Great Adventure Starts Here
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
            Tell us where you want to go, and we&apos;ll design an unforgettable
            experience around you.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-[#d06d3c] px-7 py-3.5 font-semibold text-white transition hover:opacity-90"
          >
            Plan Your Trip
          </a>
        </div>
      </section>
    </>
  );
}