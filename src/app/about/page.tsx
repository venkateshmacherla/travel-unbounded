import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function AboutPage() {
  return (
    <main>
      <section className="border-b border-[#dfe5df] bg-[#f8f6f0] py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c96d3d]">
              Our Story
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#0d3b2e] md:text-6xl">
              Travel should feel personal
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#5d6b67]">
              Travel Unbounded creates thoughtful journeys for people who want
              to experience India beyond the usual itinerary.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c96d3d]">
                Why Travel Unbounded
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0d3b2e] md:text-4xl">
                We design journeys around people, not checklists.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-[#5d6b67]">
              <p>
                Every journey should have a story behind it. That is why we
                focus on experiences that bring together local culture,
                beautiful places, good food, and time to simply enjoy where
                you are.
              </p>

              <p>
                From quiet backwaters and mountain escapes to colourful cities
                and coastal getaways, we help travellers discover India at
                their own pace.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f8f6f0] py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c96d3d]">
              Our Approach
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0d3b2e] md:text-4xl">
              Thoughtful travel, made simple
            </h2>

            <div className="mt-10 grid gap-6 text-left md:grid-cols-3">
              <div className="rounded-2xl border border-[#dfe5df] bg-white p-6">
                <h3 className="text-lg font-bold text-[#0d3b2e]">
                  Local
                </h3>

                <p className="mt-3 leading-7 text-[#5d6b67]">
                  Discover places and experiences that connect you with the
                  local character of every destination.
                </p>
              </div>

              <div className="rounded-2xl border border-[#dfe5df] bg-white p-6">
                <h3 className="text-lg font-bold text-[#0d3b2e]">
                  Personal
                </h3>

                <p className="mt-3 leading-7 text-[#5d6b67]">
                  Your interests, your pace, and your idea of a memorable
                  journey come first.
                </p>
              </div>

              <div className="rounded-2xl border border-[#dfe5df] bg-white p-6">
                <h3 className="text-lg font-bold text-[#0d3b2e]">
                  Meaningful
                </h3>

                <p className="mt-3 leading-7 text-[#5d6b67]">
                  We care about the small moments that turn a trip into a
                  story worth remembering.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#0d3b2e] py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Ready to experience India differently?
            </h2>

            <p className="mt-5 text-base leading-7 text-[#dce5df]">
              Tell us what kind of journey you have in mind and let&apos;s
              start planning something memorable.
            </p>

            <div className="mt-8">
              <Button href="/contact" variant="secondary">
                Plan Your Trip
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}