# Strongman Archives

Mock React frontend for a strongman athletes, news, and results archive. The athletes directory is modeled on [Strongman Archives](https://strongmanarchives.com): searchable roster, country filter, sortable contest stats, and profile files.

Visual language follows the [Modern Minimal](https://shadcnstudio.com/r/themes/modern-minimal.json) shadcn theme: white canvas, blue primary, Poppins as the primary face, and Inter as the secondary body face.

## Stack

- React 19 + Vite + TypeScript
- Tailwind CSS v4
- shadcn/ui (Radix Vega)
- React Router
- pnpm

## Pages

| Route | What it is |
| --- | --- |
| `/` | Home: hero, featured athletes, recent results |
| `/athletes` | Directory table with All / Men / Women / World Champions tabs, name search, country filter, sortable columns, and pagination |
| `/athletes/:slug` | Athlete file: portrait header, bio, personal bests, filed results, related news |
| `/news`, `/news/:slug` | Dispatch list and article |
| `/results`, `/results/:slug` | Championship files by year, plus standings and event winners |

## Data

Mock data lives in `src/data/`. Athlete portraits and country flags are loaded from `strongmanarchives.com` via helpers in `src/lib/archive.ts`. A subset of the live directory is filed locally (men and women, plus richer extras for featured names). Directory hero stats (`4,000+` athletes) describe the real archive, not the local subset.

News copy and 2025–2026 meet results are fictional. News and results photography is from Unsplash.

## Scripts

```bash
pnpm install
pnpm dev
pnpm build
pnpm lint
pnpm preview
```
