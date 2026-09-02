import CaseStudyHeader from "../components/CaseStudyHeader";
import ProjectCard from "../components/ProjectCard";
import { BentoGrid, BentoCard } from "../components/Bentogrid";
import { getProject, projects } from "../data/projects";

const typographyImage = new URL("../assets/design_system/Typography.png", import.meta.url).href;
const buttonImage = new URL("../assets/design_system/Button - Contained.png", import.meta.url).href;
const themeImage = new URL("../assets/design_system/Theme.png", import.meta.url).href;
const switchImage = new URL("../assets/design_system/Switch.png", import.meta.url).href;
const withLabelImage = new URL("../assets/design_system/WithLabel.png", import.meta.url).href;

function SpecBackground({ image, alt }) {
  return (
    <div className="absolute inset-0 flex items-start justify-center p-3 bg-transparent">
      <div className="h-full w-full overflow-hidden rounded-xl">
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-contain object-top bg-transparent"
        />
      </div>
    </div>
  );
}

const specs = [
  {
    name: "Typography",
    description: "A defined type scale, from display headings down to body copy, each with consistent weight and size.",
    className: "lg:col-span-2",
    background: <SpecBackground image={typographyImage} alt="Typography specification" />,
  },
  {
    name: "Buttons",
    description: "Contained button variants across semantic colors, in a consistent shape and sizing scale.",
    className: "lg:col-span-1",
    background: <SpecBackground image={buttonImage} alt="Contained button variants" />,
  },
  {
    name: "Theme",
    description: "The core color palette and theming tokens that drive every component in the system.",
    className: "lg:col-span-1",
    background: <SpecBackground image={themeImage} alt="Theme color tokens" />,
  },
  {
    name: "Toggles",
    description: "Switch components across their states, built for clear on/off affordance.",
    className: "lg:col-span-1",
    background: <SpecBackground image={switchImage} alt="Switch component" />,
  },
  {
    name: "Labeled fields",
    description: "Form inputs paired with labels, establishing a consistent pattern for data entry.",
    className: "lg:col-span-1",
    background: <SpecBackground image={withLabelImage} alt="Labeled input field" />,
  },
];

export default function DesignSystem() {
  const project = getProject("design-system");
  const otherProject = projects.find((p) => p.slug !== "design-system");

  return (
    <div className="min-h-screen w-full bg-white relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 40% 30%, rgba(181, 189, 0, 1) 0%, rgba(255,255,255,0.2) 80%, transparent 100%)
          `,
        }}
      />

      <div className="relative z-10">
        <CaseStudyHeader
          title={project.title}
          summary={project.summary}
          category={project.category}
        />

        <section className="max-w-page mx-auto px-5 sm:px-8 py-14">
          <BentoGrid>
            {specs.map((spec) => (
              <BentoCard key={spec.name} {...spec} />
            ))}
          </BentoGrid>
        </section>

        <section className="max-w-page mx-auto px-5 sm:px-8 py-24">
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
    </div>
  );
}