# Nimbo TT

Re-imagined TTO tax prep based on (but not entirely On) the [IRS drect file](https://github.com/IRS-Public/direct-file)  open-source engine. This is a  browser-based tax engine re-written in Typescript with Claude an wrapped around our TTO shell to explore a new tax prep flow from Navigation to Search to the Agentic experience. Tax data never leaves your browser — all calculations happen client-side using my `@nimbus/engine` library (adapted from the IRS Driect-file), encrypted at rest with AES-256-GCM.

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

