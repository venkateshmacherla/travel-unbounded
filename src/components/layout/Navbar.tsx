"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Destinations",
    href: "/#destinations",
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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-(--border) bg-(--background)/95 backdrop-blur-md">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={closeMenu}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-(--primary) text-sm font-bold text-white">
              TU
            </span>

            <div className="leading-tight">
              <span className="block text-lg font-bold tracking-tight text-(--primary)">
                Travel Unbounded
              </span>

              <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-(--muted) sm:block">
                Experiential Travel
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-(--foreground) transition-colors hover:text-(--accent)"
              >
                {item.label}
              </Link>
            ))}

            <Button href="/contact" variant="secondary">
              Plan Your Trip
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((previous) => !previous)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-(--border) text-(--primary) md:hidden"
          >
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-(--border) py-5 md:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-white hover:text-(--accent)"
                >
                  {item.label}
                </Link>
              ))}

              <Button
                href="/contact"
                variant="secondary"
                className="mt-3 w-full"
              >
                Plan Your Trip
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}