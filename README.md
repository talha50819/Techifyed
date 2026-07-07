# Techifyed

Marketing website for Techifyed, a digital agency — built with Next.js
(App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Copy `.env.example` to `.env.local` and set `GEMINI_API_KEY` to enable
the AI bar on the homepage (`/api/ask`).

## Building for production

```bash
npm run build
npm start
```

`npm start` runs `server.js`, a small custom Next.js server used so the
app can be deployed as a plain Node.js app (see below).

## Deployment

This site is deployed manually to Hostinger (Node.js hosting). See
[DEPLOYMENT.md](./DEPLOYMENT.md) for the hPanel setup and the
pull/build steps to run after each push.
