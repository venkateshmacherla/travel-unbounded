"use client";

import { FormEvent, useState } from "react";
import Container from "@/components/ui/Container";

const countryCodes = [
  { label: "India (+91)", value: "+91" },
  { label: "United States (+1)", value: "+1" },
  { label: "United Kingdom (+44)", value: "+44" },
  { label: "United Arab Emirates (+971)", value: "+971" },
  { label: "Australia (+61)", value: "+61" },
];

const hotelCategories = ["Standard", "Deluxe", "Luxury"];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setMessage("");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const fullName = String(formData.get("fullName") || "").trim();
    const countryCode = String(formData.get("countryCode") || "");
    const contactNumber = String(formData.get("contactNumber") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const travelDate = String(formData.get("travelDate") || "");
    const people = Number(formData.get("people"));
    const hotelCategory = String(formData.get("hotelCategory") || "");
    const children = Number(formData.get("children") || 0);

    if (!fullName || !email || !contactNumber || !travelDate) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!/^\d{7,15}$/.test(contactNumber)) {
      setError("Please enter a valid contact number.");
      return;
    }

    const selectedDate = new Date(`${travelDate}T00:00:00`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate <= today) {
      setError("Please select a future travel date.");
      return;
    }

    if (people < 1) {
      setError("Number of people must be at least 1.");
      return;
    }

    if (children < 0) {
      setError("Number of children cannot be negative.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          countryCode,
          contactNumber,
          email,
          travelDate,
          people,
          hotelCategory,
          children,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setMessage(
        "Thank you! Our travel expert will contact you within 24 hours.",
      );

      form.reset();
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Unable to submit your enquiry. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <section className="border-b border-[#dfe5df] bg-[#f8f6f0] py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c96d3d]">
              Start Planning
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#0d3b2e] md:text-6xl">
              Tell us about your journey
            </h1>

            <p className="mt-6 text-lg leading-8 text-[#5d6b67]">
              Share a few details about your trip and our travel experts will
              help you create an experience that fits you.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c96d3d]">
                Let&apos;s Talk
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0d3b2e]">
                Your next adventure starts here.
              </h2>

              <p className="mt-5 leading-8 text-[#5d6b67]">
                Whether you already know where you want to go or need some
                inspiration, tell us what you have in mind.
              </p>

              <div className="mt-8 space-y-5">
                <div>
                  <p className="text-sm font-semibold text-[#0d3b2e]">
                    Bengaluru Headquarters
                  </p>
                  <p className="mt-1 leading-7 text-[#5d6b67]">
                    541, 7th Main Rd, HAL 2nd Stage
                    <br />
                    Indiranagar, Bengaluru – 560008
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#0d3b2e]">
                    Kochi — Kerala Office
                  </p>
                  <p className="mt-1 leading-7 text-[#5d6b67]">
                    LR Towers, S Janatha Road
                    <br />
                    Palavivatton, Kochi – 682025
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#0d3b2e]">
                    Nairobi — Kenya Office
                  </p>
                  <p className="mt-1 leading-7 text-[#5d6b67]">
                    Westpark Towers, Muthithi Road
                    <br />
                    Nairobi, Postal Code 00100
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-[#dfe5df] bg-[#f8f6f0] p-6 md:p-8">
              <h2 className="text-2xl font-bold text-[#0d3b2e]">
                Booking Enquiry
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#5d6b67]">
                Fields marked with an asterisk are required.
              </p>

              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-medium text-[#315247]"
                  >
                    Full Name *
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-[#dfe5df] bg-white px-4 py-3 outline-none transition focus:border-[#c96d3d]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contactNumber"
                    className="mb-2 block text-sm font-medium text-[#315247]"
                  >
                    Contact Number *
                  </label>

                  <div className="flex gap-2">
                    <select
                      name="countryCode"
                      defaultValue="+91"
                      className="w-[42%] rounded-xl border border-[#dfe5df] bg-white px-3 py-3 outline-none focus:border-[#c96d3d] sm:w-[35%]"
                    >
                      {countryCodes.map((country) => (
                        <option key={country.value} value={country.value}>
                          {country.label}
                        </option>
                      ))}
                    </select>

                    <input
                      id="contactNumber"
                      name="contactNumber"
                      type="tel"
                      required
                      inputMode="numeric"
                      placeholder="9876543210"
                      className="min-w-0 flex-1 rounded-xl border border-[#dfe5df] bg-white px-4 py-3 outline-none transition focus:border-[#c96d3d]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-[#315247]"
                  >
                    Email *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-[#dfe5df] bg-white px-4 py-3 outline-none transition focus:border-[#c96d3d]"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="travelDate"
                      className="mb-2 block text-sm font-medium text-[#315247]"
                    >
                      Date of Travel *
                    </label>

                    <input
                      id="travelDate"
                      name="travelDate"
                      type="date"
                      required
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full rounded-xl border border-[#dfe5df] bg-white px-4 py-3 outline-none focus:border-[#c96d3d]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="people"
                      className="mb-2 block text-sm font-medium text-[#315247]"
                    >
                      Number of People *
                    </label>

                    <input
                      id="people"
                      name="people"
                      type="number"
                      required
                      min="1"
                      defaultValue="1"
                      className="w-full rounded-xl border border-[#dfe5df] bg-white px-4 py-3 outline-none focus:border-[#c96d3d]"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="hotelCategory"
                      className="mb-2 block text-sm font-medium text-[#315247]"
                    >
                      Hotel Category *
                    </label>

                    <select
                      id="hotelCategory"
                      name="hotelCategory"
                      required
                      defaultValue=""
                      className="w-full rounded-xl border border-[#dfe5df] bg-white px-4 py-3 outline-none focus:border-[#c96d3d]"
                    >
                      <option value="" disabled>
                        Select category
                      </option>

                      {hotelCategories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="children"
                      className="mb-2 block text-sm font-medium text-[#315247]"
                    >
                      Number of Children
                    </label>

                    <input
                      id="children"
                      name="children"
                      type="number"
                      min="0"
                      defaultValue="0"
                      className="w-full rounded-xl border border-[#dfe5df] bg-white px-4 py-3 outline-none focus:border-[#c96d3d]"
                    />
                  </div>
                </div>

                {message && (
                  <div className="rounded-xl border border-[#b9d8c6] bg-[#edf8f0] px-4 py-3 text-sm leading-6 text-[#245c3c]">
                    {message}
                  </div>
                )}

                {error && (
                  <div className="rounded-xl border border-[#e7bdb2] bg-[#fff3ef] px-4 py-3 text-sm leading-6 text-[#9b4329]">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-[#c96d3d] px-6 py-3.5 font-semibold text-white transition hover:bg-[#b85e32] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Sending Enquiry..." : "Send Enquiry"}
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}