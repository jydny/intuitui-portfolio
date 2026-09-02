import clsx from "clsx";

/**
 * cn — tiny className-merging helper, same role as the `cn` used in the
 * original shadcn/magic-ui component. This lightweight version just
 * wraps clsx (handles conditional/falsy classes); if you ever need to
 * resolve genuinely conflicting Tailwind classes (e.g. two different
 * padding values on the same element), upgrade to tailwind-merge too.
 *
 * Requires: npm install clsx
 */
export function cn(...inputs) {
  return clsx(inputs);
}