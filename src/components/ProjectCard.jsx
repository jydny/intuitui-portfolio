import { Link } from "react-router-dom";

export default function ProjectCard({ project, preview }) {
  return (
    <div className="grid sm:grid-cols-[1.1fr_0.9fr] gap-8 sm:gap-12 items-start py-10 border-t border-hairline">
      <Link
        to={`/work/${project.slug}`}
        className="block bg-hairline/40 rounded-sm overflow-hidden aspect-[16/10] hover:opacity-90 transition-opacity"
      >
        {preview}
      </Link>

      <div>
        <p className="text-xs tracking-widest text-muted mb-1">PROJECT</p>
        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
        <p className="text-sm text-muted mb-4">{project.category}</p>
        <p className="text-[15px] leading-relaxed text-ink/80 mb-4 max-w-md">
          {project.summary}
        </p>
        <Link
          to={`/work/${project.slug}`}
          className="text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
        >
          See Project <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
