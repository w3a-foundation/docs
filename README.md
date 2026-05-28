# w3a-docs

Documentation site for the Web3 Alliance (W3A) at `docs.w3a.foundation`.

Built on the Hanzo Docs framework (Fumadocs / Next.js 16) with the same
build idiom as `docs.lux.financial`.

## Dev

```sh
pnpm install
pnpm dev          # http://localhost:3000
```

Edit MDX under `content/docs/`. Sidebar order lives in
`content/docs/meta.json`. Routes are generated automatically from the
filesystem.

## Build

```sh
pnpm build
```

Produces a Next.js standalone build at `.next/standalone/` (with static
assets in `.next/static/` and the public/ tree). Suitable for the
`ghcr.io/hanzoai/spa`-class container image.

## Lint and types

```sh
pnpm lint
pnpm types:check
```

Both run `hanzo-docs-mdx` first to regenerate the MDX type definitions
under `.docs/`.

## Environment variables

| Variable | Required | Default | Notes |
|---|---|---|---|
| `PORT` | no | `3000` | runtime port for the standalone server |
| `HOSTNAME` | no | `0.0.0.0` | bind host |
| `NODE_ENV` | no | `production` | next standard |

Brand identity lives in product code (`app/page.tsx`, `app/layout.tsx`,
`app/docs/layout.tsx`) and is overridable by editing those files; no
runtime brand override is currently wired.

## Container image

The included `Dockerfile` produces a multi-stage Node 24 alpine build
with the Next.js standalone server.

```sh
docker build -t ghcr.io/hanzoai/w3a-docs:dev .
docker run --rm -p 3000:3000 ghcr.io/hanzoai/w3a-docs:dev
```

CI/CD builds produce both `linux/amd64` and `linux/arm64` on native
runners (no QEMU).

## Deploy

Production deploys to `docs.w3a.foundation` through the Hanzo PaaS
(`platform.hanzo.ai`). The hostname is fronted by `hanzoai/ingress` with
the `hanzoai/static` plugin; no nginx, no caddy.

## Repository layout

```
.
├── app/                          # Next.js App Router
│   ├── api/search/route.ts       # Fumadocs search API
│   ├── docs/[[...slug]]/page.tsx # Docs renderer
│   ├── docs/layout.tsx           # Docs chrome
│   ├── global.css                # Tailwind + Hanzo Docs theme
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Marketing-class landing page
├── content/docs/                 # Authored MDX
│   ├── index.mdx                 # Overview
│   ├── membership.mdx            # Member rights + obligations
│   ├── governance.mdx            # Coordination layer scope
│   ├── substrate.mdx             # Quasar + PQ + FHE + LX DEX + AIVM
│   ├── ip-licensing.mdx          # LEL / LRL-PR / SCLA + luxcpp/ + Hanzo
│   ├── capital-pool.mdx          # Three-layer capital architecture
│   ├── decentralization-resilience.mdx
│   ├── bank-for-ai.mdx
│   ├── unified-liquidity.mdx
│   ├── onboarding-guide.mdx
│   └── meta.json                 # Sidebar order
├── lib/source.ts                 # Fumadocs source loader
├── mdx-components.tsx            # MDX component registry
├── next.config.ts                # Next + MDX config
├── source.config.ts              # MDX config + rehype plugins
├── tsconfig.json
├── package.json
├── postcss.config.mjs
├── Dockerfile
└── README.md
```
