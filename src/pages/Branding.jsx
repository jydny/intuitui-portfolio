import CaseStudyHeader from "../components/CaseStudyHeader";
import ProjectCard from "../components/ProjectCard";
import { BentoGrid, BentoCard } from "../components/Bentogrid";
import { getProject, projects } from "../data/projects";

const bannerImage = new URL("../assets/branding/Banner - Financial Wellness.png", import.meta.url).href;
const checkboxImage = new URL("../assets/branding/Checkbox Background.png", import.meta.url).href;
const helloImage = new URL("../assets/branding/Hello.png", import.meta.url).href;
const labImage = new URL("../assets/branding/Member Innovation Lab.png", import.meta.url).href;
const confirmImage = new URL("../assets/branding/Opt Out Confirmation.png", import.meta.url).href;

function BrandingBackground({ image, alt }) {
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

const brandingItems = [
  {
    name: "Financial Wellness Banner",
    description: "Promotional banner designed to highlight financial wellness initiatives and brand messaging.",
    className: "lg:col-span-2",
    background: <BrandingBackground image={bannerImage} alt="Financial wellness banner" />,
  },
  {
    name: "Checkbox Design",
    description: "Custom checkbox component with branded styling and visual hierarchy.",
    className: "lg:col-span-1",
    background: <BrandingBackground image={checkboxImage} alt="Checkbox background" />,
  },
  {
    name: "Hello Screen",
    description: "Welcoming onboarding screen with brand identity and user guidance.",
    className: "lg:col-span-1",
    background: <BrandingBackground image={helloImage} alt="Hello screen" />,
  },
  {
    name: "Innovation Lab",
    description: "Member Innovation Lab branding and visual communication system.",
    className: "lg:col-span-2",
    background: <BrandingBackground image={labImage} alt="Member innovation lab" />,
  },
  {
    name: "Opt Out Confirmation",
    description: "Clear and branded confirmation screen for user opt-out flows.",
    className: "lg:col-span-1",
    background: <BrandingBackground image={confirmImage} alt="Opt out confirmation" />,
  },
];

export default function Branding() {
  const project = getProject("branding");
  const otherProject = projects.find((p) => p.slug !== "branding");

  return (
    <div>
      <CaseStudyHeader
        title={project.title}
        summary={project.summary}
        category={project.category}
      />

      <section className="max-w-page mx-auto px-5 sm:px-8 py-14">
        <BentoGrid>
          {brandingItems.map((item) => (
            <BentoCard key={item.name} {...item} />
          ))}
        </BentoGrid>
      </section>

      <section className="max-w-page mx-auto px-5 sm:px-8 py-24">
        <h2 className="text-3xl font-semibold mb-4">Other Projects</h2>
        <ProjectCard
          project={otherProject}
          preview={
            <div className="bg-hairline/50 w-full h-full flex items-center justify-center">
              <div className="bg-paper border border-hairline rounded-sm w-40 h-24" />
            </div>
          }
        />
      </section>
    </div>
  );
}
