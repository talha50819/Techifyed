# Deploying to Hostinger (Node.js hosting)

This repo auto-deploys to Hostinger whenever you push to `main`, via
`.github/workflows/deploy.yml`. That workflow SSHes into your Hostinger
server and runs `git pull`, `npm ci`, `npm run build`, then triggers a
restart. You need to do a one-time setup first — GitHub Actions can't
create the server-side app for you.

## 1. Create the Node.js app in hPanel

In hPanel → **Websites → [your site] → Node.js**:

- Node.js version: 18.18 or newer (Next.js 16 requires it)
- Application root: the folder where you'll clone this repo (e.g. `techifyed`)
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

## 2. Enable SSH and clone the repo once

Business/Cloud Hostinger plans that support Node.js hosting include SSH
access (hPanel → **Advanced → SSH Access**). Generate a key pair, add
the public key in hPanel, and use it to connect once manually:

```bash
ssh -p <port> <username>@<host>
cd <application root>
git clone https://github.com/<you>/<repo>.git .
npm ci
npm run build
```

This first clone/build has to happen manually — the GitHub Action only
pulls updates into an already-cloned app.

## 3. Add GitHub repo secrets

In your GitHub repo → **Settings → Secrets and variables → Actions**,
add:

| Secret | Value |
| --- | --- |
| `HOSTINGER_HOST` | Your server hostname/IP |
| `HOSTINGER_USERNAME` | SSH username |
| `HOSTINGER_SSH_KEY` | The **private** key matching the public key added in hPanel |
| `HOSTINGER_PORT` | SSH port (often `22`, but Hostinger sometimes uses a custom one — check hPanel) |
| `HOSTINGER_APP_PATH` | Absolute path to the app on the server (same as "Application root") |

## 4. Push to deploy

Push to `main` and the **Deploy to Hostinger** workflow (Actions tab)
will pull, install, build, and restart automatically.

## About the restart step

The workflow ends with `touch tmp/restart.txt`, the standard way
Passenger-based Node hosts (which is what Hostinger's Node.js hosting
runs on) pick up a restart. If your app doesn't pick up changes after a
deploy, check hPanel's Node.js panel for a manual **Restart** button as
a fallback, and confirm the exact restart mechanism for your plan —
Hostinger's panel details can vary by plan tier and may have changed
since this was written.
