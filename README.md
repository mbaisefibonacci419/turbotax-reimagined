# Nimbus: Re-imagined TurboTax

Re-imagined TTO tax prep based on (not entirely) the [IRS drect file](https://github.com/IRS-Public/direct-file) open-source engine. This is a browser-based tax engine written in Typescript with Claude and wrapped around our TTO shell to explore a new tax prep flow from Navigation to Search to the Agentic experience.

> **This is a reference/showcase repo — please fork it rather than opening pull requests. PRs to this repo will not be merged.**

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

This repo deploys as a **single Railway service** built from a **Dockerfile**: the Express
server (`packages/server`) serves both the `/api` routes and the built Vite frontend
(`app/dist`) from the same origin.

Config files (already in the repo):

- `Dockerfile` — multi-stage build (engine → `app/dist` → server) on Node 22, with the native
  toolchain for `better-sqlite3` and a Node heap bump so the Vite build doesn't OOM
- `railway.toml` — points Railway at the Dockerfile and sets the `/api/health` health check
- `.dockerignore` — keeps `node_modules`, `dist`, `.env`, and `*.tsbuildinfo` out of the image

### Notes

- The SQLite DB is used only for rate-limiting and is **ephemeral** (reset on redeploy). No
  volume is required. Tax data stays client-side in the browser.

### Author

Ugo Ibecheozor