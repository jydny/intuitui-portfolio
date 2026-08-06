import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function GenericPreview({ accent }) {
  return (
    <div
      className={`w-full h-full flex items-center justify-center ${
        accent === "olive" ? "bg-olive/80" : "bg-hairline/50"
      }`}
    >
      <div className="bg-paper rounded-md w-40 h-24 shadow-sm" />
    </div>
  );
}

export default function Work() {
  return (
    <div className="max-w-page mx-auto px-5 sm:px-8 pt-14 pb-24">
      <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight mb-2">Work</h1>
      <p className="text-muted max-w-lg mb-6">
        A selection of product design and UX projects.
      </p>
      <div>
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            preview={<GenericPreview accent={project.accent} />}
          />
        ))}
      </div>
    </div>
  );
}
