import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import CompanyStory from "@/components/about/CompanyStory";
import OfficeLocations from "@/components/about/OfficeLocations";
import WhyChooseUs from "@/components/about/WhyChooseUs";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Travel Unbounded is India's most trusted experiential travel expert, headquartered in Bangalore with offices in Kerala and Nairobi.",
};

export default function AboutPage() {
  return (
    <main>
      <CompanyStory />
      <WhyChooseUs />
      <OfficeLocations />

      <section className="bg-(--primary) py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Ready to experience India differently?
            </h2>

            <p className="mt-5 text-base leading-7 text-white/80">
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
