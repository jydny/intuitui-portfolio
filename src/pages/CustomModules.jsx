import CaseStudyHeader from "../components/CaseStudyHeader";
import ProjectCard from "../components/ProjectCard";
import PageGlow from "../components/PageGlow";
import { BentoGrid, BentoCard } from "../components/Bentogrid";
import { getProject, projects } from "../data/projects";

const calBudget = new URL("../assets/modules/cal_budget.png", import.meta.url).href;
const calBudgetM = new URL("../assets/modules/cal_budget_m.png", import.meta.url).href;
const calMm = new URL("../assets/modules/cal_mm.png", import.meta.url).href;
const calMmM = new URL("../assets/modules/cal_mm_m.png", import.meta.url).href;
const calMortgage = new URL("../assets/modules/cal_mortgage.png", import.meta.url).href;
const calMortgageM = new URL("../assets/modules/cal_mortgage_m.png", import.meta.url).href;
const moduleAccordion = new URL("../assets/modules/module_arcodion.png", import.meta.url).href;
const moduleAccordionM = new URL("../assets/modules/module_arcodion_m.png", import.meta.url).href;
const moduleCarousel = new URL("../assets/modules/module_carousel.png", import.meta.url).href;
const moduleCarouselM = new URL("../assets/modules/module_carousel_m.png", import.meta.url).href;

function ModuleBackground({ image, alt }) {
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

const modules = [
  {
    name: "Budget Calculator",
    description: "Interactive budget calculation module with both desktop and mobile responsive views.",
    className: "lg:col-span-1",
    background: <ModuleBackground image={calBudget} alt="Budget calculator" />,
  },
  {
    name: "Budget Calculator Mobile",
    description: "Optimized mobile experience for budget calculation with touch-friendly interface.",
    className: "lg:col-span-1",
    background: <ModuleBackground image={calBudgetM} alt="Budget calculator mobile" />,
  },
  {
    name: "Money Market Calculator",
    description: "Comprehensive money market investment calculator for financial planning.",
    className: "lg:col-span-1",
    background: <ModuleBackground image={calMm} alt="Money market calculator" />,
  },
  {
    name: "Money Market Mobile",
    description: "Mobile-optimized money market calculator with simplified input controls.",
    className: "lg:col-span-1",
    background: <ModuleBackground image={calMmM} alt="Money market mobile" />,
  },
  {
    name: "Mortgage Calculator",
    description: "Advanced mortgage calculation tool with detailed financial projections.",
    className: "lg:col-span-1",
    background: <ModuleBackground image={calMortgage} alt="Mortgage calculator" />,
  },
  {
    name: "Mortgage Mobile",
    description: "Touch-friendly mortgage calculator optimized for mobile devices.",
    className: "lg:col-span-1",
    background: <ModuleBackground image={calMortgageM} alt="Mortgage mobile" />,
  },
  {
    name: "Accordion Module",
    description: "Reusable accordion component for organizing complex content hierarchies.",
    className: "lg:col-span-1",
    background: <ModuleBackground image={moduleAccordion} alt="Accordion module" />,
  },
  {
    name: "Accordion Mobile",
    description: "Mobile-responsive accordion with touch optimization and accessibility.",
    className: "lg:col-span-1",
    background: <ModuleBackground image={moduleAccordionM} alt="Accordion mobile" />,
  },
  {
    name: "Carousel Module",
    description: "Flexible carousel component for displaying content galleries and featured items.",
    className: "lg:col-span-1",
    background: <ModuleBackground image={moduleCarousel} alt="Carousel module" />,
  },
  {
    name: "Carousel Mobile",
    description: "Touch-optimized carousel for seamless mobile content browsing.",
    className: "lg:col-span-1",
    background: <ModuleBackground image={moduleCarouselM} alt="Carousel mobile" />,
  },
];

export default function CustomModules() {
  const project = getProject("modules");
  const otherProject = projects.find((p) => p.slug !== "modules");

  return (
    <PageGlow gradient="radial-gradient(circle at 60% 30%, rgba(98, 76, 128, 0.4) 20%, rgba(255,255,255,0.2) 80%, transparent 100%)">
      <CaseStudyHeader
        title={project.title}
        summary={project.summary}
        category={project.category}
      />

      <section className="max-w-page mx-auto px-5 sm:px-8 py-14">
        <BentoGrid>
          {modules.map((module) => (
            <BentoCard key={module.name} {...module} />
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
    </PageGlow>
  );
}
