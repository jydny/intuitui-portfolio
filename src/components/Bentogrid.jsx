import { cn } from "../lib/utils";

/**
 * BentoGrid / BentoCard — a lean masonry-style grid card.
 * Adapted from a shadcn/magic-ui component (originally TypeScript/Next.js)
 * for plain Vite + React (JS). Stripped down to just what this project
 * actually uses: name, description, background, className.
 *
 * Requires: npm install clsx
 */

export function BentoGrid({ children, className, ...props }) {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className
      )}
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
      <div>{background}</div>
    </div>
  );
}