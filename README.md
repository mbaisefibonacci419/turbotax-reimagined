# Nimbus: Re-imagined TurboTax

Re-imagined TTO tax prep based on (not entirely) the [IRS drect file](https://github.com/IRS-Public/direct-file) open-source engine. This is a browser-based tax engine written in Typescript with Claude and wrapped around our TTO shell to explore a new tax prep flow from Navigation to Search to the Agentic experience.

## Prerequisites

- Node.js >= 20.19

## Setup

```bash
# 1. Install dependencies (installs all workspaces)
npm install

# 2. Configure environment variables
cp packages/server/.env.example packages/server/.env
cp packages/client/.env.example app/.env
# then edit the .env files (e.g. ANTHROPIC_API_KEY, VITE_SYNCFUSION_LICENSE_KEY)
```

## Run (development)

```bash
# Front end + back end together
npm run dev:all

# Or run them separately
npm run dev          # front end (Vite) — http://localhost:5173
npm run dev:server   # back end (Express) — http://localhost:3001
```

## Build (production)

```bash
npm run build          # build shared packages + front end
npm run build -w packages/server   # build the server
npm run start -w packages/server   # run the built server
```

## Other commands

```bash
npm run lint                    # lint the repo
npm run test -w packages/server # run server tests
```

## Deploy to Railway

This repo deploys as a **single Railway service**: the Express server (`packages/server`)
serves both the `/api` routes and the built Vite frontend (`app/dist`) from the same origin.

Config files (already in the repo):

- `railway.json` — Nixpacks builder, start command, and `/api/health` health check
- `nixpacks.toml` — pins Node 20 and the native toolchain `better-sqlite3` needs
- `.nvmrc` — Node version for local parity

### Notes

- The SQLite DB is used only for rate-limiting and is **ephemeral** (reset on redeploy). No
  volume is required. Tax data stays client-side in the browser.
- For a **split deploy** (separate frontend + backend services), set `VITE_API_BASE` to the
  backend URL at build time and add the frontend origin to `ALLOWED_ORIGINS` on the backend.

### Author

Ugo Ibecheozor