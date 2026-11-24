# Copilot Instructions

This is a Twitter/X clone built with Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # Run ESLint (next lint)
```

There is no test suite configured.

## Architecture

**Routing:** App Router with these routes:

- `/` → permanently redirects to `/home` (configured in `next.config.mjs`)
- `/home` — feed (async server component)
- `/explore`, `/grok`, `/notifications`, `/messages` — section pages
- `/[username]` — dynamic profile page

**Layout hierarchy:**

```
layout.tsx (Server) → sets metadata, fonts
  └── clientLayout.tsx (Client) → wraps app with context providers + Header/Footer
        ├── Sidebar (tablet+)
        ├── <main> Header + {children} (600px column on tablet+)
        ├── RightSidebar (desktop)
        └── Footer (mobile tab bar)
```

**State management:** Two React contexts in `src/context/`:

- `TopBarMenuContext` — tracks the active navigation tab (`TopBarMenuItems` enum)
- `ProfileContext` — holds the current viewed user's profile data

Pages that change global state (e.g., `[username]/page.tsx`) do so via `useEffect` on mount, calling context setters.

**Data:** All data is mock/static, defined in `src/lib/mock-data/` (`users.ts` holds shared authors and `currentUser`; feed = `post.ts` + `more-posts.ts`). No API routes or database.

## Key Conventions

**`cn()` utility** — always use `cn()` from `@/lib/utils` for conditional Tailwind classes. It combines `clsx` and `tailwind-merge`. Do not use raw template literals for class merging.

**`"use client"` boundary** — add the directive to any component that uses hooks, event handlers, or context. Server components are the default; client components are only used when necessary.

**Path aliases** — use `@/` for all imports from `src/`. Example: `import { cn } from "@/lib/utils"`.

**Barrel exports** — `src/components/index.ts`, `src/context/index.ts`, `src/lib/index.ts`, and `src/types/index.ts` re-export their contents. Import from the barrel, not the individual file.

**Custom Tailwind colors** — use `twitter-gray` (`#71767b`) and `twitter-dark-gray` (`#2f3336`) for Twitter-like UI elements. The app uses a black background (`bg-black`) and white text by default.

**Responsive layout** — mobile-first with three layouts. Breakpoints live in `src/lib/breakpoints.ts` and are the only Tailwind screens (`tablet:` ≥768px, `desktop:` ≥1280px; default `sm`/`md`/`lg`/`xl` are disabled):

- mobile (unprefixed): sticky top bar + fixed bottom tab bar (`Footer`), full-width column.
- `tablet:` icon-only left `Sidebar` + 600px center column.
- `desktop:` labeled `Sidebar` + center column + `RightSidebar` (search, trends, who to follow).
  In client code use `isAtLeast("tablet")` / `mediaQueries` from `@/lib` instead of hardcoded widths.

**Types** — all shared interfaces live in `src/types/`. Use the `TopBarMenuItems` enum (not raw strings) for navigation state.
