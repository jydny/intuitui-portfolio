import CaseStudyHeader from "../components/CaseStudyHeader";
import ProjectCard from "../components/ProjectCard";
import { getProject, projects } from "../data/projects";

const typeScale = [
  { name: "h1", weight: "700", size: "48px", sample: "Almost before we knew it, we had..." },
  { name: "h2", weight: "700", size: "36px", sample: "Almost before we knew it, we had left the ground." },
  { name: "h3", weight: "600", size: "28px", sample: "Almost before we knew it, we had left the ground." },
  { name: "h4", weight: "500", size: "22px", sample: "Almost before we knew it, we had left the ground." },
  { name: "Subtitle", weight: "500", size: "16px", sample: "Almost before we knew it, we had left the ground." },
  { name: "Body", weight: "400", size: "15px", sample: "Almost before we knew it, we had left the ground." },
];

const buttonColors = [
  { label: "Primary", className: "bg-wine text-paper" },
  { label: "Secondary", className: "bg-navy text-paper" },
  { label: "Error", className: "bg-crimson text-paper" },
  { label: "Warning", className: "bg-gold text-ink" },
  { label: "Info", className: "bg-graychip text-paper" },
  { label: "Success", className: "bg-teal text-paper" },
];

const swatchColors = ["bg-wine", "bg-navy", "bg-crimson", "bg-gold", "bg-graychip", "bg-teal"];

export default function DesignSystem() {
  const project = getProject("design-system");
  const otherProject = projects.find((p) => p.slug !== "design-system");

  return (
    <div>
      <CaseStudyHeader
        title={project.title}
        summary={project.summary}
        category={project.category}
      />

      <section className="max-w-page mx-auto px-5 sm:px-8 space-y-8 pb-20">
        {/* Typography */}
        <div className="border border-hairline rounded-sm p-6 sm:p-8">
          <h2 className="text-lg font-semibold mb-1">Typography</h2>
          <p className="text-xs text-wine underline underline-offset-2 mb-6">
            Edit component &nbsp;|&nbsp; Documentation
          </p>
          <div className="divide-y divide-hairline">
            <div className="grid grid-cols-[80px_1fr_2fr] text-xs text-muted pb-2">
              <span>Style</span>
              <span>Specs</span>
              <span>Sample</span>
            </div>
            {typeScale.map((row) => (
              <div
                key={row.name}
                className="grid grid-cols-[80px_1fr_2fr] items-center py-3 gap-4"
              >
                <span className="text-sm font-mono text-muted">{row.name}</span>
                <span className="text-xs text-muted">
                  {row.weight} · {row.size}
                </span>
                <span
                  className="truncate"
                  style={{ fontWeight: row.weight, fontSize: `min(${row.size}, 18px)` }}
                >
                  {row.sample}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="border border-hairline rounded-sm p-6 sm:p-8">
          <h2 className="text-2xl font-semibold mb-1">Button</h2>
          <p className="text-xs text-wine underline underline-offset-2 mb-8">
            Edit component &nbsp;|&nbsp; Documentation
          </p>

          <p className="text-xs text-muted mb-4">Variant: Contained · Size: Large</p>
          <div className="flex flex-wrap gap-3">
            {buttonColors.map((btn) => (
              <button
                key={btn.label}
                className={`px-5 py-2.5 rounded-full text-sm font-medium ${btn.className}`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-3">
            {buttonColors.map((btn) => (
              <button
                key={btn.label + "-icon"}
                className={`px-5 py-2.5 rounded-full text-sm font-medium inline-flex items-center gap-2 ${btn.className}`}
              >
                {btn.label} <span aria-hidden>→</span>
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="border border-hairline rounded-sm p-6 sm:p-8">
          <h2 className="text-2xl font-semibold mb-1">Table</h2>
          <p className="text-xs text-wine underline underline-offset-2 mb-6">
            Edit Component &nbsp;|&nbsp; Documentation
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-teal/10 text-left">
                  {["Head", "Head", "Head", "Head"].map((h, i) => (
                    <th key={i} className="py-2 px-3 font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline">
                {[0, 1, 2].map((row) => (
                  <tr key={row}>
                    {[0, 1, 2, 3].map((cell) => (
                      <td key={cell} className="py-2 px-3 text-muted">
                        String value
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Toggles + Data grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="border border-hairline rounded-sm p-6 sm:p-8">
            <h3 className="text-sm font-semibold mb-6">Toggles</h3>
            <div className="grid grid-cols-2 gap-y-4">
              {swatchColors.map((c) => (
                <div key={c} className="flex items-center gap-2">
                  <span className={`w-9 h-5 rounded-full ${c} relative inline-block`}>
                    <span className="absolute right-0.5 top-0.5 w-4 h-4 rounded-full bg-paper" />
                  </span>
                  <span className="text-xs text-muted">Label</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-hairline rounded-sm p-6 sm:p-8">
            <h3 className="text-sm font-semibold mb-6">Data Grid</h3>
            <div className="grid grid-cols-4 gap-1.5">
              {Array.from({ length: 16 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-6 rounded-sm ${
                    i % 5 === 0 ? "bg-olive-soft" : "bg-hairline/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-page mx-auto px-5 sm:px-8 pb-24">
        <h2 className="text-3xl font-semibold mb-4">Other Projects</h2>
        <ProjectCard
          project={otherProject}
          preview={
            <div className="bg-olive/80 w-full h-full flex items-center justify-center">
              <div className="bg-paper rounded-md w-40 h-24 shadow-sm" />
            </div>
          }
        />
      </section>
    </div>
  );
}
