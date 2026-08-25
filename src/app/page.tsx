import Hero from "@/components/home/Hero";
import DestinationSection from "@/components/home/DestinationSection";
import { getDestinationsByCategory } from "@/data/destinations";

export default function Home() {
  const indiaDestinations = getDestinationsByCategory("india");
  const internationalDestinations = getDestinationsByCategory("international");

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
    </>
  );
}