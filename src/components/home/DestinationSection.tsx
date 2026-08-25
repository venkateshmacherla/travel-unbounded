import type { Destination } from "@/types/destination";
import Container from "@/components/ui/Container";
import DestinationCard from "@/components/home/DestinationCard";

interface DestinationSectionProps {
  title: string;
  subtitle: string;
  destinations: Destination[];
  tint?: "light" | "white";
}

export default function DestinationSection({
  title,
  subtitle,
  destinations,
  tint = "white",
}: DestinationSectionProps) {
  return (
    <section
      className={`py-16 md:py-20 ${
        tint === "light" ? "bg-(--background)" : "bg-white"
      }`}
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-(--accent)">
            {subtitle}
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-(--primary) md:text-4xl">
            {title}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </Container>
    </section>
  );
}
