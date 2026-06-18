# AGENTS.md

> Canonical context for AI coding agents (Cursor, Claude Code, etc.) working in this repo.
> Humans should start with `README.md`. `CLAUDE.md` and `.cursor/rules/` both point here.
> Read this first before exploring the tree — it will save you a lot of token-spend.

## What this is

**Nimbus** is a re-imagined TurboTax Online (TTO) tax-prep experience: a **browser-based,
client-side tax engine** written in pure TypeScript, paired with an **agentic, chat-driven
interview** wrapped in a TTO-style UI shell. It is loosely inspired by the
[IRS Direct File](https://github.com/IRS-Public/direct-file) open-source engine.

Two things make it unusual and worth understanding before you change anything:

1. **Tax data stays in the browser.** The tax return is computed and held client-side. The
   server is a thin proxy for LLM calls and document extraction — it does not store returns.
2. **The agent is a state machine, not a free-form chatbot.** A skill registry + orchestrator
   drives a structured tax interview. Skills have phases, prerequisites, and a strict set of
   writable fields.

## Monorepo layout (npm workspaces)

This is an npm-workspaces monorepo. Package names differ from folder names — use this table.

| Folder            | Package name      | Role                                                              |
| ----------------- | ----------------- | ---------------------------------------------------------------- |
| `packages/shared` | `@nimbus/engine`  | The tax calculation engine. Pure TS, **zero runtime deps**. 2025 tax year. |
| `packages/shell`  | `@nimbo-tt/shell` | TTO-style UI shell; bundled into `app` at build time.            |
| `packages/client` | `@tax/client`     | The UI **library** — components, services, stores, the agent.    |
| `packages/server` | `@tax/server`     | Express API: LLM proxy, PDF/OCR extraction, rate limiting.       |
| `app`             | `@nimbo-tt/app`   | The Vite frontend app shell that composes the above.             |

In production the **server serves the built frontend** (`app/dist`) from the same origin, so
the frontend talks to `/api/...` with no separate host.

## Where things live (the high-leverage map)

### The agentic interview — `packages/client/src/services/agent/`
- `AgentOrchestrator.ts` — the state machine. Owns `AgentPhase` (`onboarding → income →
  self_employment → deductions → credits → state → review → finish`), selects the active
  skill, tracks completion, and handles topic detours.
- `SkillRegistry.ts` — the runtime contract for each skill: `phase`, `order`, `prerequisites`,
  `expectedTurns`, `interactionMode`, `allowedActionTypes`, and **`writableFields`** (the exact
  `TaxReturn` fields a skill is allowed to write via `update_field`). Skill *prompt content*
  lives elsewhere; this file is the structural contract.
- `ContextSlicer.ts` — builds the **minimal** LLM context per skill (token discipline).
- `TopicDetector.ts` — detects when the user switches topics mid-interview.

### Chat / LLM transport — `packages/client/src/services/chat/`
- `types.ts` — `ChatTransport` interface. Two modes: `private` and `byok` (bring-your-own-key,
  proxied through the server). All transports support batch + SSE streaming.
- Related top-level services: `chatService.ts`, `chatContextBuilder.ts`, `chatPersistence.ts`,
  `intentExecutor.ts`, `responseValidator.ts`.

### The tax engine — `packages/shared/src/engine/`
- One file per form/credit/schedule (`form1040.ts`, `scheduleC.ts`, `qbi.ts`, `eitc.ts`,
  `capitalGains.ts`, `amt.ts`, etc.). This is the deterministic core — **no LLM, no network**.
  If you change a calculation, there is almost certainly a test for it.

### Document import & extraction — `packages/client/src/services/`
- A large family of parsers: PDF (`pdfImporter.ts`, `pdfService.ts`, `syncfusionExtractor.ts`),
  OCR (`ocrService.ts`), bank/brokerage statements, CSV/TXF/FDX, prior-year imports, and
  transaction categorization. Server-side extraction lives in `packages/server/src/routes/extract.ts`.

### Server — `packages/server/src/`
- `index.ts` — Express entry. `routes/` = `chat.ts`, `batch.ts`, `extract.ts`.
- `services/piiStripper.ts` + `errorSanitizer.ts` — **PII is stripped server-side**; respect this.
- `services/byokApiKey.ts`, `rateLimiter.ts`, `anthropicClient.ts`, `systemPrompt.ts`.
- `db/` — SQLite, used **only** for rate limiting and **ephemeral** (reset on redeploy).

### State — `packages/client/src/store/` (Zustand)
- `taxReturnStore.ts` (the return), `chatStore.ts`, `aiSettingsStore.ts`,
  `deductionFinderStore.ts`, `themeStore.ts`, `undoStore.ts`.

## Running it

Requires **Node >= 20.19** (see `.nvmrc`). The Docker image builds on Node 22.

```bash
npm install                 # installs all workspaces

cp packages/server/.env.example packages/server/.env
cp packages/client/.env.example app/.env
# set ANTHROPIC_API_KEY (server) and VITE_SYNCFUSION_LICENSE_KEY (client) as needed

npm run dev:all             # frontend (Vite :5173) + backend (Express :3001)
npm run dev                 # frontend only
npm run dev:server          # backend only
```

### Build & deploy
```bash
npm run build               # engine + frontend
npm run build:railway       # engine + frontend + server (used by the Docker image)
npm start                   # run the built server (serves app/dist + /api)
```
Deploys as a **single Railway service** from the `Dockerfile` (multi-stage, Node 22). See
`railway.toml`. Health check: `/api/health`.

## Tests, lint, types

- **Test runner is Vitest** across the repo.
  - Server: `npm run test -w packages/server`
  - Client: there is no `test` script in `packages/client`; run client tests with
    `npx vitest run` from `packages/client` (suites live in
    `packages/client/src/__tests__/`, ~40 files). E2E: `npm run test:e2e -w packages/client`
    (Playwright).
- **Lint:** `npm run lint` (ESLint, repo root).
- **Types:** strict TypeScript (`strict: true`), ESM (`"type": "module"`), `moduleResolution:
  bundler`. Packages build with `tsc -b` (project references).

## Conventions & gotchas

- **Import across packages by package name, not relative path** — e.g.
  `import type { TaxReturn } from '@nimbus/engine'`, not `../../shared/...`.
- **`@nimbus/engine` must stay dependency-free and side-effect-free.** No network, no LLM, no
  DOM. It is the trustworthy deterministic core. Keep tax logic here, not in the UI.
- **Respect `writableFields` in `SkillRegistry.ts`.** A skill may only write the fields it
  declares. When adding a skill or a new tax field, update the registry contract and the engine
  together, and add/adjust tests.
- **Token discipline is a design goal.** `ContextSlicer.ts` exists to keep per-skill LLM context
  minimal. Don't shove the whole return into a prompt.
- **PII never leaves the client unscrubbed.** The server strips PII (`piiStripper.ts`) and
  sanitizes errors (`errorSanitizer.ts`). Tax data is not persisted server-side.
- **This is real US tax software (TY2025).** Calculation changes need test coverage — the
  engine has per-form test suites. Don't guess at tax rules; check the engine file and its test.
- **Syncfusion** powers charts/gauges/grids and needs `VITE_SYNCFUSION_LICENSE_KEY`; its bundle
  is heavy (the Docker build bumps the V8 heap to avoid OOM).

## For forkers / first 10 minutes

1. Read this file, then skim `README.md`.
2. To understand the agent: read `AgentOrchestrator.ts` → `SkillRegistry.ts` → `ContextSlicer.ts`.
3. To understand the math: open any `packages/shared/src/engine/*.ts` next to its test.
4. To run locally: `npm install` → set the two `.env` files → `npm run dev:all`.
5. Make a change, then `npm run lint` and the relevant Vitest suite before committing.
