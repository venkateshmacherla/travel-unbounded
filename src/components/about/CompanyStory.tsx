import Container from "@/components/ui/Container";

export default function CompanyStory() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-(--accent)">
            Our Story
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-(--primary) md:text-6xl">
            India&apos;s Most Trusted Experiential Travel Experts
          </h1>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-6 text-base leading-8 text-(--muted)">
          <p>
            Travel Unbounded was born from a simple belief — that the best
            journeys aren&apos;t sold from a catalogue. They&apos;re built
            around the people taking them.
          </p>

          <p>
            Headquartered in Bangalore with offices in Kerala and Nairobi, we
            design trips that blend comfort, culture, and raw nature. Every
            destination, resort, and activity we recommend has been
            personally experienced by our team.
          </p>

          <p>
            From spotting the Big Five at dawn in the Masai Mara to cruising
            Ha Long Bay at sunset — we go where real stories are written, and
            we bring you along.
          </p>
        </div>
      </Container>
    </section>
  );
}
