# Travel Unbounded

A travel company website for **Travel Unbounded**, built with Next.js (App
Router). It showcases India and international destination packages, tells
the company story, and captures travel enquiries through a booking form
backed by MongoDB.

## Tech Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS v4
- **Database:** MongoDB (via Mongoose)
- **Icons:** lucide-react
- **Deployment target:** Vercel

## Project Structure

```
src/
  app/                 Routes (Home, About, Contact, Destinations, API)
  components/
    home/              Hero, DestinationCard, DestinationSection
    about/             CompanyStory, WhyChooseUs, OfficeLocations
    contact/           BookingForm (enquiry form)
    layout/             Navbar, Footer
    ui/                Button, Container, SectionHeading
  data/destinations.ts  Static dummy destination data (Home page cards)
  models/               Mongoose schemas (Destination, Enquiry)
  lib/                  DB connection, server-side validation
```

## Setup / Installation

1. Clone the repo and install dependencies:
   ```bash
   npm install
   ```
2. Copy the environment template and fill in your own MongoDB connection
   string:
   ```bash
   cp .env.example .env.local
   ```
3. Run the dev server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable          | Required | Description                                              |
|--------------------|----------|------------------------------------------------------------|
| `MONGODB_URI`       | Yes      | MongoDB Atlas (or local) connection string                |
| `MONGODB_DB_NAME`   | No       | Database name, defaults to `travel-unbounded`              |

## API Routes

- `POST /api/enquiry` — validates and stores a booking enquiry.
- `GET /api/destinations`, `GET /api/destinations/[slug]` — read destinations
  from MongoDB (used by the `/destinations` listing/detail pages).
- `POST /api/seed` — dev-only helper that seeds the `Destination` collection
  from `src/data/destinations.ts`. Disabled when `NODE_ENV=production`.

## Assumptions & Notes

- **Home page destination data** is dummy/static (`src/data/destinations.ts`)
  per the assignment brief, rather than pulled from MongoDB — this keeps the
  landing page fast and matches "no real inventory required."
- The separate `/destinations` page (with detail pages at
  `/destinations/[slug]`) is DB-backed via `/api/destinations`, to
  demonstrate the full Mongo read path as well.
- **Images** use `picsum.photos` with a fixed seed per destination so every
  image is guaranteed to load reliably in the deployed build. Swap these for
  real Unsplash photos (see the assignment's suggested search terms, e.g.
  "Kerala backwaters", "Ha Long Bay") before a real launch.
- Pricing shown ("Starting from ₹XX,XXX") is entirely dummy data, as
  permitted by the brief.
- No admin page was built to view stored enquiries (optional bonus); a
  `GET /api/enquiry` route was likewise skipped as out of scope for Phase 1.

## Deployment

1. Push to GitHub.
2. Import the repo into Vercel.
3. Add `MONGODB_URI` (and `MONGODB_DB_NAME` if used) as Environment
   Variables in the Vercel project settings.
4. Deploy — the enquiry form on the live site writes directly to MongoDB
   Atlas.
