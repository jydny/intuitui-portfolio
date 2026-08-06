import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import PhoneMock from "../components/PhoneMock";

function JoviaPreview() {
  return (
    <PhoneMock>
      <p className="text-[15px] font-semibold mb-1">Let's get started!</p>
      <p className="text-[10px] text-muted mb-3">
        You're only a few minutes away from brighter banking.
      </p>
      <div className="h-16 rounded bg-olive-soft mb-3" />
      <div className="h-2 w-3/4 rounded bg-hairline mb-1.5" />
      <div className="h-2 w-1/2 rounded bg-hairline mb-4" />
      <div className="h-7 rounded-full bg-wine" />
    </PhoneMock>
  );
}

function DesignSystemPreview() {
  return (
    <div className="bg-hairline/50 p-5 sm:p-6 h-full flex items-center">
      <div className="bg-paper border border-hairline rounded-sm p-4 w-full">
        <p className="text-sm font-semibold mb-3">Typography</p>
        <div className="space-y-2">
          <div className="h-4 w-2/3 bg-ink/80 rounded" />
          <div className="h-2.5 w-full bg-hairline rounded" />
          <div className="h-2.5 w-5/6 bg-hairline rounded" />
          <div className="h-2.5 w-3/4 bg-hairline rounded" />
        </div>
        <div className="flex gap-2 mt-4">
          <div className="h-6 w-16 rounded-full bg-wine" />
          <div className="h-6 w-16 rounded-full bg-navy" />
          <div className="h-6 w-16 rounded-full bg-crimson" />
          <div className="h-6 w-16 rounded-full bg-gold" />
        </div>
      </div>
    </div>
  );
}

const previews = {
  "jovia-deposit-loan": <JoviaPreview />,
  "design-system": <DesignSystemPreview />,
};

export default function Home() {
  return (
    <div>
      <section className="max-w-page mx-auto px-5 sm:px-8 pt-14 pb-16 sm:pt-20 sm:pb-24">
        <h1 className="text-[38px] leading-[1.1] sm:text-6xl sm:leading-[1.05] font-semibold tracking-tight max-w-3xl">
          Design that explains itself; users instinctively know how to use it.
        </h1>
      </section>

      <section className="max-w-page mx-auto px-5 sm:px-8 pb-24">
        <p className="text-sm text-muted mb-2">Featured Work</p>
        <div>
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              preview={previews[project.slug]}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
