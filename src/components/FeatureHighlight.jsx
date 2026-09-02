import "./FeatureHighlight.css";

export default function FeatureHighlight({
  gradientLead,
  headingRest,
  body,
  linkText,
  href = "#",
  gradientFrom,
  gradientTo,
  reverse = false,
  image,
}) {
  return (
    <section className="w-full bg-[#FAFAF8] py-20 px-6 md:px-12">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {/* Visual — image holder */}
        <div
          className={`asset-container aspect-square rounded-[16px] overflow-hidden relative bg-hairline/40 ${
            reverse ? "md:order-2" : "md:order-1"
          }`}
        >
          <img
            src={image}
            alt={gradientLead || "Feature visual"}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Copy */}
        <div className={reverse ? "md:order-1" : "md:order-2"}>
          <h2 className="text-4xl md:text-5xl font-medium leading-[1.1] text-[#141414] mb-6 pt-8 tracking-tightSpacing">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`,
              }}
            >
              {gradientLead}
            </span>
            {headingRest}
          </h2>

          <p className="text-base md:text-lg text-[#5c5c58] leading-relaxed mb-6 max-w-md">
            {body}
          </p>

          <a
            href={href}
            className="text-sm text-[#141414] underline underline-offset-4 decoration-[#141414]/40 hover:decoration-[#141414] transition-colors"
          >
            {linkText}
          </a>
        </div>
      </div>
    </section>
  );
}