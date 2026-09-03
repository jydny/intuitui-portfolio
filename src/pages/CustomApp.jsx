import CaseStudyHeader from "../components/CaseStudyHeader";
import ProjectCard from "../components/ProjectCard";
import PageGlow from "../components/PageGlow";
import CardImage from "../components/CardImage";
import { BentoGrid, BentoCard } from "../components/Bentogrid";
import { getProject, projects } from "../data/projects";
import { projectThumbs } from "../lib/projectThumbs";

const continueApplicationImage = new URL("../assets/custom_app/Continue Application.png", import.meta.url).href;
const introImage = new URL("../assets/custom_app/Intro.png", import.meta.url).href;
const startImage = new URL("../assets/custom_app/Start.png", import.meta.url).href;
const step26Image = new URL("../assets/custom_app/Step 26.png", import.meta.url).href;
const step26_2Image = new URL("../assets/custom_app/Step 26_2.png", import.meta.url).href;
const step28Image = new URL("../assets/custom_app/Step 28.png", import.meta.url).href;
const step7Image = new URL("../assets/custom_app/Step 7.png", import.meta.url).href;
const step8Image = new URL("../assets/custom_app/Step 8.png", import.meta.url).href;

// Layout: a uniform 4-up gallery of portrait phone screens that reads left to
// right as the application flow. Tall rows, minimal padding, anchored to the top.
const screen = (src, alt) => (
  <CardImage src={src} alt={alt} position="top" padding="p-2" />
);

const steps = [
  { name: "Get started", background: screen(introImage, "Intro screen") },
  { name: "Choose account type", background: screen(startImage, "Start screen") },
  { name: "Legal name", background: screen(step7Image, "Step 7 screen") },
  { name: "Date of birth", background: screen(step8Image, "Step 8 screen") },
  { name: "Contact details", background: screen(step26Image, "Step 26 screen") },
  { name: "Verification code", background: screen(step26_2Image, "Step 26 alternate screen") },
  { name: "Citizenship status", background: screen(step28Image, "Step 28 screen") },
  { name: "Under review", background: screen(continueApplicationImage, "Continue application screen") },
];

export default function CustomApp() {
  const project = getProject("jovia-custom-app");
  const otherProject = projects.find((p) => p.slug !== "jovia-custom-app");

  return (
    <PageGlow gradient="radial-gradient(circle at 60% 30%, rgba(181, 189, 0, 0.7) 20%, rgba(255,255,255,0.2) 80%, transparent 100%)">
      <CaseStudyHeader
        title={project.title}
        summary={project.summary}
        category={project.category}
      />

      <section className="max-w-page mx-auto px-5 sm:px-8 py-14">
        <BentoGrid rows="28rem" cols="md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <BentoCard key={step.name} background={step.background} />
          ))}
        </BentoGrid>
      </section>

      <section className="max-w-page mx-auto px-5 sm:px-8 py-24">
        <h2 className="text-3xl font-semibold mb-4">Other Projects</h2>
        <ProjectCard
          project={otherProject}
          preview={
            <img
              src={projectThumbs[otherProject.slug]}
              alt={otherProject.title}
              className="w-full h-full object-cover"
            />
          }
        />
      </section>
    </PageGlow>
  );
}
