import CaseStudyHeader from "../components/CaseStudyHeader";
import ProjectCard from "../components/ProjectCard";
import PageGlow from "../components/PageGlow";
import CardImage from "../components/CardImage";
import { BentoGrid, BentoCard } from "../components/Bentogrid";
import { getProject, projects } from "../data/projects";
import { projectThumbs } from "../lib/projectThumbs";

const typographyImage = new URL("../assets/design_system/Typography.png", import.meta.url).href;
const buttonImage = new URL("../assets/design_system/Button - Contained.png", import.meta.url).href;
const themeImage = new URL("../assets/design_system/Theme.png", import.meta.url).href;
const switchImage = new URL("../assets/design_system/Switch.png", import.meta.url).href;
const withLabelImage = new URL("../assets/design_system/WithLabel.png", import.meta.url).href;

// Layout: a single centered column. Each image renders in-flow at up to 1000px
// wide, centered in the page, and its card grows to the image's height.
const specs = [
  {
    name: "Typography",
    background: <CardImage src={typographyImage} alt="Typography specification" inFlow maxWidth="1000px" padding="p-0" />,
  },
  {
    name: "Buttons",
    background: <CardImage src={buttonImage} alt="Contained button variants" inFlow maxWidth="1000px" padding="p-0" />,
  },
  {
    name: "Theme",
    background: <CardImage src={themeImage} alt="Theme color tokens" inFlow maxWidth="1000px" padding="p-0" />,
  },
  {
    name: "Toggles",
    background: <CardImage src={switchImage} alt="Switch component" inFlow maxWidth="1000px" padding="p-0" />,
  },
  {
    name: "Labeled fields",
    background: <CardImage src={withLabelImage} alt="Labeled input field" inFlow maxWidth="1000px" padding="p-0" />,
  },
];

export default function DesignSystem() {
  const project = getProject("design-system");
  const otherProject = projects.find((p) => p.slug !== "design-system");

  return (
    <PageGlow gradient="radial-gradient(circle at 60% 30%, rgba(29, 27, 32, 0.2) 20%, rgba(255,255,255,1) 80%, transparent 100%)">
      <CaseStudyHeader
        title={project.title}
        summary={project.summary}
        category={project.category}
      />

      <section className="max-w-[1000px] mx-auto px-4 sm:px-0 py-14">
        <BentoGrid rows="auto" cols="">
          {specs.map((spec) => (
            <BentoCard key={spec.name} background={spec.background} />
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
