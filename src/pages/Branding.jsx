import CaseStudyHeader from "../components/CaseStudyHeader";
import ProjectCard from "../components/ProjectCard";
import PageGlow from "../components/PageGlow";
import CardImage from "../components/CardImage";
import { BentoGrid, BentoCard } from "../components/Bentogrid";
import { getProject, projects } from "../data/projects";

const bannerImage = new URL("../assets/branding/Banner - Financial Wellness.png", import.meta.url).href;
const checkboxImage = new URL("../assets/branding/Checkbox Background.png", import.meta.url).href;
const helloImage = new URL("../assets/branding/Hello.png", import.meta.url).href;
const labImage = new URL("../assets/branding/Member Innovation Lab.png", import.meta.url).href;
const confirmImage = new URL("../assets/branding/Opt Out Confirmation.png", import.meta.url).href;

// Layout: a single centered column. Every card is full page-width so its image
// (rendered at intrinsic size via `natural`) sits centered in the page. Row
// spans just give each card enough height for its image.
const brandingItems = [
  {
    name: "Innovation Lab",
    className: "lg:row-span-1",
    background: <CardImage src={labImage} alt="Member innovation lab" natural position="center" />,
  },
  {
    name: "Hello Screen",
    className: "lg:row-span-2",
    background: <CardImage src={helloImage} alt="Hello screen" natural position="center" />,
  },
  {
    name: "Checkbox Design",
    className: "lg:row-span-2",
    background: <CardImage src={checkboxImage} alt="Checkbox background" natural position="center" />,
  },
  {
    name: "Opt Out Confirmation",
    // Portrait screen capped at 500px wide; row-span-3 gives it the height.
    className: "lg:row-span-3",
    background: <CardImage src={confirmImage} alt="Opt out confirmation" natural position="center" maxWidth="500px" />,
  },
];

export default function Branding() {
  const project = getProject("branding");
  const otherProject = projects.find((p) => p.slug !== "branding");

  return (
    <PageGlow gradient="radial-gradient(circle at 60% 30%, rgba(187, 221, 230, 0.7) 20%, rgba(255,255,255,0.2) 80%, transparent 100%)">
      <CaseStudyHeader
        title={project.title}
        summary={project.summary}
        category={project.category}
      />

      <section className="max-w-[1000px] mx-auto px-5 sm:px-8 py-14">
        <BentoGrid rows="18rem" cols="">
          {brandingItems.map((item) => (
            <BentoCard key={item.name} className={item.className} background={item.background} />
          ))}
        </BentoGrid>
      </section>

      <section className="max-w-[1000px] mx-auto px-5 sm:px-8 py-24">
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
