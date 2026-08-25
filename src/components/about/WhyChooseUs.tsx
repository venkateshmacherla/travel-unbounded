import Container from "@/components/ui/Container";

const reasons = [
  {
    title: "Personally-Vetted Experiences",
    description:
      "Every destination, resort, and activity we recommend has been personally experienced by our own team first.",
  },
  {
    title: "Local Guides",
    description:
      "We work with local guides who know each destination's culture, hidden corners, and best-kept secrets.",
  },
  {
    title: "Custom Itineraries",
    description:
      "No fixed catalogue trips — every itinerary is built around your pace, interests, and budget.",
  },
  {
    title: "24x7 Support",
    description:
      "Our travel experts are reachable around the clock, before and during your trip, wherever you are.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-(--accent)">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-3xl font-bold text-(--primary) md:text-4xl">
            Thoughtful travel, made simple
          </h2>
        </div>

        <div className="mt-10 grid gap-6 text-left sm:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-(--border) bg-(--background) p-6"
            >
              <h3 className="text-lg font-bold text-(--primary)">
                {reason.title}
              </h3>

              <p className="mt-3 leading-7 text-(--muted)">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
