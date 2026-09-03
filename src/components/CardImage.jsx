import { cn } from "../lib/utils";

/**
 * CardImage — the image treatment used inside a BentoCard's `background` slot.
 * Replaces the near-identical *Background helpers that used to live in each
 * case-study page. Tune per card via props:
 *
 *   fit       "contain" (whole image, letterboxed) | "cover" (fill + crop)
 *   position  object-position: "top" | "center" | "bottom" | "50% 20%" ...
 *   padding   Tailwind padding between the image and the card edge ("p-0"…"p-6")
 *   align     vertical alignment of the image box ("items-start" | "items-center")
 *   natural   render the image at its intrinsic size, centered, only scaling
 *             *down* if it is larger than the card (never stretched or upscaled)
 *   maxWidth  hard cap on the rendered image width, e.g. "500px"
 *   inFlow    render the image as a normal in-flow block (full container width,
 *             capped at maxWidth, centered) so the card grows to the image's
 *             height instead of the image being fit into a fixed-height card
 */
export default function CardImage({
  src,
  alt = "",
  fit = "contain",
  position = "top",
  padding = "p-3",
  align = "items-start",
  natural = false,
  maxWidth,
  inFlow = false,
  className,
}) {
  if (inFlow) {
    return (
      <div className={cn("flex w-full justify-center", padding)}>
        <img
          src={src}
          alt={alt}
          // `natural`: intrinsic size, only shrinking to fit the column.
          // otherwise: always fill the column width.
          className={cn(natural ? "h-auto max-w-full" : "h-auto w-full", className)}
          style={{ maxWidth }}
        />
      </div>
    );
  }

  return (
    <div className={cn("absolute inset-0 flex justify-center", align, padding)}>
      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-xl">
        <img
          src={src}
          alt={alt}
          className={cn(
            natural ? "max-h-full max-w-full" : "h-full w-full",
            fit === "cover" ? "object-cover" : fit === "none" ? "object-none" : "object-contain",
            className
          )}
          style={{ objectPosition: position, maxWidth }}
        />
      </div>
    </div>
  );
}
