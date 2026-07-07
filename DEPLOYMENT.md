# Deploying to Hostinger (Node.js hosting)

This is a manual deploy process — push your changes to GitHub, then pull
and rebuild on the server yourself.

## 1. Create the Node.js app in hPanel

In hPanel → **Websites → [your site] → Node.js**:

- Node.js version: 18.18 or newer (Next.js 16 requires it)
- Application root: the folder where you'll clone this repo (e.g. `techifyed`) — **not** `public_html`
- Application startup file: `server.js` (this repo includes a custom
  server at the project root specifically for this — see below)
- Application URL: your domain
- Environment variables: add `GEMINI_API_KEY` with your real key here.
  It is **not** committed to the repo (`.env.local` is gitignored) —
  production only gets the key from this hPanel setting.

Why `server.js` instead of `next start`: Hostinger's Node.js panel runs
a JS file directly rather than an npm script, so this repo ships a
minimal custom Next.js server (`server.js`) as the entry point. Locally,
`npm start` runs the same file, so behavior matches.

## 2. Clone and build on the server

Business/Cloud Hostinger plans that support Node.js hosting include SSH
access (hPanel → **Advanced → SSH Access**). Connect and set up the app
in its application root:

```bash
ssh -p <port> <username>@<host>
cd <application root>
git clone https://github.com/<you>/<repo>.git .
npm ci
npm run build
```

Then start/restart the app from hPanel's Node.js panel.

## 3. Redeploying after changes

Whenever you push new commits to GitHub, SSH back in and repeat:

```bash
cd <application root>
git pull origin main
npm ci
npm run build
```

Then restart the app from hPanel's Node.js panel (or, if it's
Passenger-based, `mkdir -p tmp && touch tmp/restart.txt` from the app
directory often triggers a restart — check hPanel if the app doesn't
pick up changes).
