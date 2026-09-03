const DEFAULT_GRADIENT =
  "radial-gradient(circle at 40% 30%, rgba(181, 189, 0, 1) 0%, rgba(255,255,255,0.2) 80%, transparent 100%)";

/**
 * Page shell for the case-study pages: a white base with a radial colour glow
 * behind the content. Pass a CSS `radial-gradient(...)` (or any background-image
 * value) as `gradient` to tune the glow per page.
 */
export default function PageGlow({ gradient = DEFAULT_GRADIENT, children }) {
  return (
    <div className="min-h-screen w-full bg-white relative">
      <div
        className="absolute inset-0 z-0"
        style={{ backgroundImage: gradient }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
