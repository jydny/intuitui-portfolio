import { cn } from "../lib/utils";

export function BentoGrid({ children, className, ...props }) {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-1 md:grid-cols-2 gap-8",
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
        "relative mx-auto w-[375px] max-w-full aspect-[9/16] overflow-hidden rounded-xl bg-[#f6f3ee]",
        className
      )}
      {...props}
    >
      <div className="h-full w-full">{background}</div>
    </div>
  );
}
