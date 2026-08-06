import { Link } from "react-router-dom";

export default function CaseStudyHeader({ title, summary, category }) {
  return (
    <section className="max-w-page mx-auto px-5 sm:px-8 pt-10 pb-14 sm:pb-20 grid sm:grid-cols-[1.2fr_1fr] gap-8">
      <div>
        <Link
          to="/work"
          className="text-sm underline underline-offset-4 text-muted hover:text-ink"
        >
          Case Study
        </Link>
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight mt-3 max-w-xl">
          {title}
        </h1>
      </div>
      <div className="sm:pt-1">
        <p className="italic text-[15px] leading-relaxed text-ink/80">{summary}</p>
        <p className="text-sm text-muted mt-4">{category}</p>
      </div>
    </section>
  );
}
