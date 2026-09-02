import { cn } from "../lib/utils";

/**
 * BentoGrid / BentoCard — adapted from a shadcn/magic-ui style component
 * for a plain Vite + React (JS, not TS) project. Removed: "use client"
 * (Next.js-only directive), TypeScript types/interfaces, and the
 * @/lib/utils path alias (replaced with a relative import to
 * src/lib/utils.js, which wraps clsx).
 *
 * Requires: npm install clsx
 */

export function BentoGrid({ children, className, ...props }) {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-1 md:grid-cols-3 gap-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  className,
  background,
  ...props
}) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[375px] md:max-w-none aspect-[9/16] overflow-hidden rounded-xl bg-[#f6f3ee]",
        className
      )}
      {...props}
    >
      <div className="h-full w-full">{background}</div>
    </div>
  );
}