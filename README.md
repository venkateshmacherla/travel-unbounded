# Travel Unbounded

Travel Unbounded is a modern travel company website built with Next.js. It showcases curated India and international destinations, presents the company's story, and allows users to submit travel enquiries through a booking form connected to MongoDB.

## Tech Stack

- Next.js 16 with App Router
- React 19
- TypeScript
- Tailwind CSS v4
- MongoDB with Mongoose
- Lucide React
- Vercel for deployment

## Features

- Responsive travel website
- India and international destination sections
- Destination listing and detail pages
- Company About page
- Contact and travel enquiry form
- MongoDB-backed enquiry submission
- MongoDB-backed destination API
- SEO metadata for Home and Contact pages
- Reusable React components
- Responsive CTA sections
- Development-only destination seeding API

## Project Structure

```text
src/
├── app/
│   ├── about/
│   ├── api/
│   │   ├── destinations/
│   │   ├── enquiry/
│   │   └── seed/
│   ├── contact/
│   ├── destinations/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── about/
│   ├── contact/
│   ├── home/
│   ├── layout/
│   └── ui/
│
├── data/
│   └── destinations.ts
│
├── lib/
│   ├── mongodb.ts
│   └── validations.ts
│
├── models/
│   ├── Destination.ts
│   └── Enquiry.ts
│
└── types/
    └── destination.ts
```

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd travel-unbounded
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Copy the environment template:

```bash
cp .env.example .env.local
```

Then add your MongoDB connection details to `.env.local`.

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env.local` file with the following variables:

| Variable          | Required | Description                                      |
| ----------------- | -------- | ------------------------------------------------ |
| `MONGODB_URI`     | Yes      | MongoDB Atlas or local MongoDB connection string |
| `MONGODB_DB_NAME` | No       | Database name. Defaults to `travel-unbounded`    |

The `.env.example` file contains the required environment variable template.

## Application Routes

| Page                | Route                  |
| ------------------- | ---------------------- |
| Home                | `/`                    |
| About               | `/about`               |
| Contact             | `/contact`             |
| Destinations        | `/destinations`        |
| Destination Details | `/destinations/[slug]` |

## API Routes

### Enquiry

**POST `/api/enquiry`**

Validates and stores travel enquiries in MongoDB.

### Destinations

**GET `/api/destinations`**

Returns destination data from MongoDB for the destination listing page.

**GET `/api/destinations/[slug]`**

Returns a specific destination from MongoDB using its slug.

### Seed Destinations

**POST `/api/seed`**

Development-only endpoint used to populate the MongoDB `Destination` collection from `src/data/destinations.ts`.

The seed endpoint is disabled when `NODE_ENV=production`.

## Data and Content

The Home page uses static destination data from:

```text
src/data/destinations.ts
```

This is intentional because the assignment does not require real travel inventory. The static data keeps the landing page simple and avoids unnecessary database requests.

The separate `/destinations` section uses MongoDB-backed data to demonstrate the complete database read flow.

## Images

Destination images currently use `picsum.photos` with fixed seeds so the images remain consistent during development and deployment.

For a real production website, these placeholder images can be replaced with properly licensed travel photography.

## Pricing

All destination prices shown on the website are sample prices for demonstration purposes and should not be treated as real travel package pricing.

## Validation and Database

Travel enquiry data is validated before being stored in MongoDB.

The application uses Mongoose models for database operations. MongoDB connection logic is handled in:

```text
src/lib/mongodb.ts
```

Server-side validation logic is handled in:

```text
src/lib/validations.ts
```

## Development Notes

The project includes a development-only seed endpoint for populating destination data.

The Home page intentionally uses static destination data, while the Destinations section demonstrates MongoDB-backed destination retrieval.

No admin dashboard has been added for viewing enquiries because it was outside the required scope of the assignment.

## Deployment

The project can be deployed to Vercel.

### 1. Push the project to GitHub

```bash
git add .
git commit -m "docs: improve README structure and documentation"
git push origin main
```

### 2. Import the repository into Vercel

Connect the GitHub repository to a new Vercel project.

### 3. Add environment variables

Add the following variables in the Vercel project settings:

```text
MONGODB_URI
MONGODB_DB_NAME
```

`MONGODB_DB_NAME` is optional if you want to use the default database name.

### 4. Deploy

After deployment, the travel enquiry form will connect to MongoDB using the configured environment variables.

## Project Status

The project demonstrates:

- Next.js App Router
- Responsive UI development
- Reusable React components
- API route handling
- Form validation
- MongoDB integration
- SEO metadata
- Development-only database seeding
- Production deployment configuration

## Author

**Venkatesh Macharla**  
Full Stack Developer  
📧 macherlavenkatesh5@gmail.com
