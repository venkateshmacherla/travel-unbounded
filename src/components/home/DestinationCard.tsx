import Link from "next/link";
import type { Destination } from "@/types/destination";

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-(--border) bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-56 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={destination.image}
          alt={destination.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-(--accent)">
          {destination.location}
        </p>

        <h3 className="mt-2 text-xl font-bold text-(--primary)">
          {destination.name}
        </h3>

        <p className="mt-3 text-sm leading-6 text-(--muted)">
          {destination.description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <p className="text-sm font-semibold text-(--primary)">
            Starting from{" "}
            <span className="text-base">
              ₹{destination.price.toLocaleString("en-IN")}
            </span>
          </p>
        </div>

        <Link
          href={`/contact?destination=${encodeURIComponent(destination.name)}`}
          className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-(--primary) px-5 py-2.5 text-sm font-semibold text-(--primary) transition hover:bg-(--primary) hover:text-white"
        >
          Enquire Now
        </Link>
      </div>
    </article>
  );
}
