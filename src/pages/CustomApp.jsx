import CaseStudyHeader from "../components/CaseStudyHeader";
import PhoneMock from "../components/PhoneMock";
import ProjectCard from "../components/ProjectCard";
import PageGlow from "../components/PageGlow";
import { BentoGrid, BentoCard } from "../components/Bentogrid";
import { getProject, projects } from "../data/projects";

const continueApplicationImage = new URL("../assets/custom_app/Continue Application.png", import.meta.url).href;
const introImage = new URL("../assets/custom_app/Intro.png", import.meta.url).href;
const startImage = new URL("../assets/custom_app/Start.png", import.meta.url).href;
const step26Image = new URL("../assets/custom_app/Step 26.png", import.meta.url).href;
const step26_2Image = new URL("../assets/custom_app/Step 26_2.png", import.meta.url).href;
const step28Image = new URL("../assets/custom_app/Step 28.png", import.meta.url).href;
const step7Image = new URL("../assets/custom_app/Step 7.png", import.meta.url).href;
const step8Image = new URL("../assets/custom_app/Step 8.png", import.meta.url).href;

const Field = ({ label, value }) => (
  <div className="mb-3">
    <p className="text-[10px] text-muted mb-1">{label}</p>
    <div className="border border-hairline rounded px-2 py-1.5 text-[11px] bg-paper">
      {value}
    </div>
  </div>
);

const NextBtn = ({ label = "Next" }) => (
  <div className="h-7 rounded-full bg-wine text-paper text-[11px] font-medium flex items-center justify-center gap-1">
    {label} <span aria-hidden>→</span>
  </div>
);

const BackBtn = () => (
  <div className="h-7 rounded-full border border-wine text-wine text-[11px] font-medium flex items-center justify-center mt-2">
    Go Back
  </div>
);

const StepBadge = ({ step }) => (
  <p className="text-[10px] font-medium text-muted mb-3">Step {step} of 3</p>
);

/** Wraps a screenshot preview so it fills a BentoCard's background area */
function StepBackground({ children, tint = "", image, alt = "Application preview" }) {
  return (
    <div className={`absolute inset-0 ${tint} flex items-start justify-center p-3 bg-transparent`}>
      <div className="h-full w-full overflow-hidden rounded-xl">
        {image ? (
          <img
            src={image}
            alt={alt}
            className="h-full w-full object-contain object-top bg-transparent"
          />
        ) : (
          <div className="h-full w-full scale-[0.85] origin-center">
            <PhoneMock>{children}</PhoneMock>
          </div>
        )}
      </div>
    </div>
  );
}

const steps = [
  {
    name: "Get started",
    description: "A friendly landing step that sets expectations before the application begins.",
    className: "lg:col-span-1 ",
    background: <StepBackground image={introImage} alt="Intro screen" />,
  },
  {
    name: "Choose account type",
    description: "Members pick the product that fits their goals before any personal details are collected.",
    className: "lg:col-span-1 ",
    background: <StepBackground image={startImage} alt="Start screen" />,
  },
  {
    name: "Legal name",
    description: "Identity verification begins with the applicant's legal first and last name.",
    className: "lg:col-span-1",
    background: <StepBackground image={step7Image} alt="Step 7 screen" />,
  },
  {
    name: "Date of birth",
    description: "A single, focused field keeps identity verification quick and low-friction.",
    className: "lg:col-span-1",
    background: <StepBackground image={step8Image} alt="Step 8 screen" />,
  },
  {
    name: "Contact details",
    description: "Phone and email are collected together, since both are needed for verification and account notifications going forward.",
    className: "lg:col-span-1",
    background: <StepBackground image={step26Image} alt="Step 26 screen" />,
  },
  {
    name: "Verification code",
    description: "A one-time code confirms ownership of the email address before proceeding.",
    className: "lg:col-span-1",
    background: <StepBackground image={step26_2Image} alt="Step 26 alternate screen" />,
  },
  {
    name: "Citizenship status",
    description: "A required compliance question, framed as a simple binary choice.",
    className: "lg:col-span-1",
    background: <StepBackground image={step28Image} alt="Step 28 screen" />,
  },
  {
    name: "Under review",
    description: "A clear closing state that sets expectations for what happens next.",
    className: "lg:col-span-1",
    background: <StepBackground image={continueApplicationImage} alt="Continue application screen" />,
  },
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
        <BentoGrid>
          {steps.map((step) => (
            <BentoCard key={step.name} {...step} />
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