# Suit Wholesale | B2B Fashion Website

Premium AI-Powered B2B fashion wholesale website built for ladies' suits retailers and boutiques.

## Tech Stack
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: GSAP, Framer Motion
- **3D / WebGL**: Three.js, React Three Fiber (Prepared for advanced elements)
- **Database Architecture**: Prisma ORM (Prepared for PostgreSQL)

## Features (Initial Release)
- Premium cinematic Home Page
- Scroll-driven GSAP animations and parallax effects
- Responsive layout across desktop and mobile devices
- Setup for a centralized configuration/data structure

## Setup & Installation
See [SETUP.md](./SETUP.md) for detailed local development and setup instructions.

## Future Architecture
The project architecture is prepared for the following routes to be built in future phases:
- `/collections` and `/collections/[slug]`
- `/product/[slug]`
- `/wholesale`
- `/lookbook`
- `/about`, `/contact`, `/order`
- Full Authentication (`/login`, `/register`)

## Database
The project has been initialized with Prisma. See `prisma/schema.prisma` to configure models. Ensure you setup a PostgreSQL database (e.g., Supabase) before running migrations.
