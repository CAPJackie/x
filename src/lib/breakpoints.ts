/**
 * Layout breakpoints (mobile-first). Shared by Tailwind (`tablet:` / `desktop:`
 * variants in tailwind.config.ts) and by client code that needs media queries.
 *
 * - mobile:  < 768px  → top bar + bottom tab bar, full-width column
 * - tablet:  ≥ 768px  → icon-only left sidebar + 600px center column
 * - desktop: ≥ 1280px → labeled left sidebar + center column + right column
 */
export const breakpoints = {
  tablet: 768,
  desktop: 1280,
} as const;

export const mediaQueries = {
  tablet: `(min-width: ${breakpoints.tablet}px)`,
  desktop: `(min-width: ${breakpoints.desktop}px)`,
} as const;

export function isAtLeast(bp: keyof typeof mediaQueries): boolean {
  return window.matchMedia(mediaQueries[bp]).matches;
}
