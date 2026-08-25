import Container from "@/components/ui/Container";

const offices = [
  {
    title: "Bengaluru — Headquarters",
    lines: [
      "541, 7th Main Rd, HAL 2nd Stage",
      "Indiranagar, Bengaluru – 560008",
      "India",
    ],
  },
  {
    title: "Kochi — Kerala Office",
    lines: ["LR Towers, S Janatha Road", "Palavivatton, Kochi – 682025", "India"],
  },
  {
    title: "Nairobi — Kenya Office",
    lines: [
      "Westpark Towers, Muthithi Road",
      "Nairobi, P.O. Box 6950",
      "Postal Code 00100, Kenya",
    ],
  },
];

export default function OfficeLocations() {
  return (
    <section className="bg-(--background) py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-(--accent)">
            Where We Are
          </p>

          <h2 className="mt-3 text-3xl font-bold text-(--primary) md:text-4xl">
            Our Offices
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {offices.map((office) => (
            <div
              key={office.title}
              className="rounded-2xl border border-(--border) bg-white p-6"
            >
              <h3 className="text-lg font-bold text-(--primary)">
                {office.title}
              </h3>

              <p className="mt-3 leading-7 text-(--muted)">
                {office.lines.map((line, index) => (
                  <span key={line}>
                    {line}
                    {index < office.lines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
