# Development Setup Guide

## 1. Prerequisites
Ensure you have the following installed:
- Node.js (v20+ recommended)
- npm (v10+ recommended)

## 2. Installation
Run the following command to install all dependencies:
```bash
npm install
```

## 3. Environment Variables
Copy `.env.example` to `.env` (or `.env.local`):
```bash
cp .env.example .env
```
Edit `.env` to include your actual database URL and other credentials (see MANUAL_TASKS.md).

## 4. Database Setup (Optional for now)
If you are ready to configure the database:
1. Set `DATABASE_URL` in `.env`.
2. Push the schema to the database:
```bash
npx prisma db push
```

## 5. Running the Development Server
Start the Next.js dev server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## 6. Build for Production
To test the production build locally:
```bash
npm run build
npm run start
```
