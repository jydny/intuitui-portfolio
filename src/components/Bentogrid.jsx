import { cn } from "../lib/utils";

/**
 * BentoGrid / BentoCard — a lean masonry-style grid card.
 * Adapted from a shadcn/magic-ui component (originally TypeScript/Next.js)
 * for plain Vite + React (JS). Stripped down to just what this project
 * actually uses: background, className, plus per-card col/row spans.
 *
 * Each case-study page drives its own layout by passing `rows` / `cols` /
 * `gap` to <BentoGrid>, and `lg:col-span-*` / `lg:row-span-*` on each card's
 * `className`.
 *
 * Requires: npm install clsx
 */

export function BentoGrid({
  children,
  className,
  rows = "22rem",
  cols = "md:grid-cols-2 lg:grid-cols-3",
  gap = "gap-4",
  ...props
}) {
  return (
    <div
      className={cn("grid w-full grid-cols-1", cols, gap, className)}
      style={{ gridAutoRows: rows }}
      {...props}
    >
      {children}
    </div>
  );
}

export function BentoCard({ className, background, ...props }) {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-xl",
        "transform-gpu",
        className
      )}
      {...props}
    >
      {background}
    </div>
  );
}
