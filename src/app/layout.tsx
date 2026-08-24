import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Travel Unbounded | Experiential Travel Experts",
    template: "%s | Travel Unbounded",
  },
  description:
    "Travel Unbounded creates personalised experiential journeys across India and the world, blending comfort, culture, and raw nature.",
  keywords: [
    "Travel Unbounded",
    "experiential travel",
    "India travel",
    "international travel",
    "custom travel packages",
    "luxury travel",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}