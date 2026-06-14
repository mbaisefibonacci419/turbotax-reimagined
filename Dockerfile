# syntax=docker/dockerfile:1
# ─────────────────────────────────────────────────────────────
# Nimbus — single-service image (Express API + built Vite frontend)
#
# Repo layout (npm workspaces):
#   packages/shared  → @nimbus/engine  (tax engine, built to dist)
#   packages/shell   → @nimbo-tt/shell (UI shell, bundled into app at build)
#   packages/client  → @tax/client     (UI library, bundled into app at build)
#   packages/server  → @tax/server     (Express API, built to dist)
#   app              → @nimbo-tt/app    (Vite frontend, built to app/dist)
#
# The server serves app/dist in production (../../../app/dist relative to
# packages/server/dist), so the image MUST contain app/dist.
# ─────────────────────────────────────────────────────────────

# ── Stage 1: Build ───────────────────────────────────────────
FROM node:22-slim AS build

# Native toolchain for better-sqlite3 (compiled during npm ci)
RUN apt-get update && \
    apt-get install -y --no-install-recommends python3 make g++ && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy every workspace manifest first so `npm ci` is cached until deps change
COPY package.json package-lock.json ./
COPY packages/shared/package.json  packages/shared/
COPY packages/shell/package.json   packages/shell/
COPY packages/client/package.json  packages/client/
COPY packages/server/package.json  packages/server/
COPY app/package.json              app/

RUN npm ci

# Now copy the full source and build
COPY . .

# Vite inlines VITE_* vars at build time.
#   - VITE_API_BASE="" → frontend talks to its own origin (/api/...)
#   - VITE_SYNCFUSION_LICENSE_KEY → pass via Railway service variable (build arg)
ARG VITE_SYNCFUSION_LICENSE_KEY=""
ENV VITE_SYNCFUSION_LICENSE_KEY=$VITE_SYNCFUSION_LICENSE_KEY
ENV VITE_API_BASE=""

# Raise V8 heap — the Syncfusion-heavy Vite bundle OOMs under the default limit
# on memory-capped build environments.
ENV NODE_OPTIONS="--max-old-space-size=4096"

# Builds engine → app (app/dist) → server (dist + schema.sql copy)
RUN npm run build:railway

# ── Stage 2: Production ──────────────────────────────────────
FROM node:22-slim AS production

# better-sqlite3 is recompiled when prod deps are installed
RUN apt-get update && \
    apt-get install -y --no-install-recommends python3 make g++ && \
    rm -rf /var/lib/apt/lists/*

# OPTIONAL — local Docling PDF extraction. Off by default (heavy: pulls torch +
# models). When false, /api/extract/pdf gracefully falls back to Claude Vision.
# Enable with: --build-arg INSTALL_DOCLING=true  (or set it on Railway).
ARG INSTALL_DOCLING=false
RUN if [ "$INSTALL_DOCLING" = "true" ]; then \
      apt-get update && \
      apt-get install -y --no-install-recommends python3-venv python3-pip && \
      python3 -m venv /app/.docling-venv && \
      /app/.docling-venv/bin/pip install --no-cache-dir docling && \
      rm -rf /var/lib/apt/lists/*; \
    fi

WORKDIR /app

# Manifests for all workspaces (npm needs them to resolve the workspace graph),
# then install ONLY the server + engine production dependencies.
COPY package.json package-lock.json ./
COPY packages/shared/package.json  packages/shared/
COPY packages/shell/package.json   packages/shell/
COPY packages/client/package.json  packages/client/
COPY packages/server/package.json  packages/server/
COPY app/package.json              app/

RUN npm ci --omit=dev \
      --workspace=packages/shared \
      --workspace=packages/server \
      --include-workspace-root

# Built artifacts from the build stage
COPY --from=build /app/packages/shared/dist        packages/shared/dist
COPY --from=build /app/packages/shared/src         packages/shared/src
COPY --from=build /app/packages/server/dist        packages/server/dist
COPY --from=build /app/packages/server/src/db/schema.sql packages/server/dist/db/schema.sql
COPY --from=build /app/app/dist                    app/dist

ENV NODE_ENV=production
ENV TRUST_PROXY=1
# Railway injects PORT at runtime; the server binds 0.0.0.0:$PORT (defaults 3001).
EXPOSE 3001

# Root "start" runs: NODE_ENV=production node packages/server/dist/index.js
CMD ["npm", "start"]
