import Link from "next/link";
import Container from "@/components/ui/Container";

const quickLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Destinations",
    href: "/destinations",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Footer() {
  return (
    <footer className="bg-(--primary) text-white">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold">
              Travel Unbounded
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-white/70">
              Experiential journeys designed around people, places, culture,
              comfort, and unforgettable stories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-(--secondary)">
              Explore
            </h3>

            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-(--secondary)">
              Headquarters
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/70">
              541, 7th Main Rd, HAL 2nd Stage
              <br />
              Indiranagar, Bengaluru – 560008
              <br />
              India
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Travel Unbounded. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}