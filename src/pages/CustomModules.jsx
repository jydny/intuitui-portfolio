import CaseStudyHeader from "../components/CaseStudyHeader";
import ProjectCard from "../components/ProjectCard";
import PageGlow from "../components/PageGlow";
import CardImage from "../components/CardImage";
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

// Layout: a single centered column. Each module's desktop then mobile view,
// every image rendered at its intrinsic size (never cropped or upscaled), only
// shrinking if it is wider than the column.
const modulePairs = [
  
  { name: "Mortgage Calculator", desktop: calMortgage, mobile: calMortgageM },
  { name: "Carousel Module", desktop: moduleCarousel, mobile: moduleCarouselM },  
  { name: "Accordion Module", desktop: moduleAccordion, mobile: moduleAccordionM },
  // { name: "Budget Calculator", desktop: calBudget, mobile: calBudgetM },
  // { name: "Money Market Calculator", desktop: calMm, mobile: calMmM },
  
];

export default function CustomModules() {
  const project = getProject("modules");
  const otherProject = projects.find((p) => p.slug !== "modules");

  return (
    <PageGlow gradient="radial-gradient(circle at 60% 30%, rgba(29, 27, 32, 0.2) 20%, rgba(255,255,255,1) 80%, transparent 100%)">
      <CaseStudyHeader
        title={project.title}
        summary={project.summary}
        category={project.category}
      />

      <section className="max-w-page mx-auto px-4 sm:px-8 py-14">
        <BentoGrid rows="auto" cols="">
          {modulePairs.flatMap((m) => [
            <BentoCard
              key={`${m.name}-desktop`}
              background={<CardImage src={m.desktop} alt={`${m.name}, desktop view`} inFlow natural />}
            />,
            <BentoCard
              key={`${m.name}-mobile`}
              background={<CardImage src={m.mobile} alt={`${m.name}, mobile view`} inFlow natural />}
            />,
          ])}
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
