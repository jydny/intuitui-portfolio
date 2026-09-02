import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import app from "../assets/proj_app_576w.png";
import ds from "../assets/proj_ds_576w.png";
import lab from "../assets/proj_lab_576w.png";
import modules from "../assets/proj_modules_576w.png";

const projectImages = {
  "jovia-custom-app": app,
  "design-system": ds,  
  "modules": modules,
  "branding": lab,
};

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
      {/* <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight mb-2"> */}
      <h1 class="font-bold leading-snug tracking-tight text-slate-800 my-6 w-full text-2xl lg:max-w-3xl lg:text-5xl">
        Work
      </h1>
      <h2 class="font-light leading-snug tracking-normal text-slate-800 my-6 w-full text-sm max-w-xs lg:max-w-md lg:text-lg"
>        A selection of product design and UX projects.
      </h2>
      <div>
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            preview={
              projectImages[project.slug] ? (
                <img src={projectImages[project.slug]} alt={project.title} className="w-full h-full object-cover" />
              ) : (
                <GenericPreview accent={project.accent} />
              )
            }
          />
        ))}
      </div>
    </div>
  );
}
