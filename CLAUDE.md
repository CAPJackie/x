# X clone

Architecture, routes and conventions are shared with Copilot — keep them in one place:

@.github/copilot-instructions.md

## Claude-specific notes

- `npm run validate` (build → eslint → tsc → prettier --check) runs automatically in the husky
  **pre-push** hook — don't run lint/format yourself.
- Styling: Tailwind 3 (`tailwind.config.ts`) + `clsx`/`tailwind-merge` — not Tailwind v4, no shadcn.
- `.agents/skills/` holds skills for other agents (installed via `skills-lock.json`); Claude
  doesn't load them — ignore unless asked.
- All data is mock (`src/lib/mock-data/`); don't add API routes or a DB without asking.
