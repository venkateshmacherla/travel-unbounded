import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Travel & Tours",
  description:
    "Get in touch with us to plan your next trip. Send us your travel enquiry and our team will help create an unforgettable experience.",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}