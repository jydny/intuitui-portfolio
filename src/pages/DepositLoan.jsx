import CaseStudyHeader from "../components/CaseStudyHeader";
import PhoneMock from "../components/PhoneMock";
import ProjectCard from "../components/ProjectCard";
import { getProject, projects } from "../data/projects";

function Step({ children }) {
  return <PhoneMock>{children}</PhoneMock>;
}

const Field = ({ label, value }) => (
  <div className="mb-3">
    <p className="text-[10px] text-muted mb-1">{label}</p>
    <div className="border border-hairline rounded px-2 py-1.5 text-[11px]">{value}</div>
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

export default function DepositLoan() {
  const project = getProject("jovia-deposit-loan");
  const otherProject = projects.find((p) => p.slug !== "jovia-deposit-loan");

  return (
    <div>
      <CaseStudyHeader
        title={project.title}
        summary={project.summary}
        category={project.category}
      />

      <section className="bg-olive/80 py-14">
        <div className="max-w-page mx-auto px-5 sm:px-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          <Step>
            <p className="text-[15px] font-semibold mb-1">Let's get started!</p>
            <p className="text-[10px] text-muted mb-4">
              You're only a few minutes away from brighter banking.
            </p>
            <p className="text-[11px] font-medium mb-2">You will be asked to provide:</p>
            <p className="text-[10px] text-muted mb-4">
              Personal information and a valid form of identification.
            </p>
            <NextBtn label="Get Started" />
          </Step>

          <Step>
            <p className="text-[15px] font-semibold mb-3">
              What account would you like to apply for?
            </p>
            <div className="space-y-2 mb-2">
              {["Checking", "Savings", "Money Market", "Certificates"].map((opt) => (
                <div
                  key={opt}
                  className="border border-hairline rounded px-2 py-1.5 text-[11px] flex items-center justify-between"
                >
                  {opt} <span aria-hidden className="text-wine">→</span>
                </div>
              ))}
            </div>
          </Step>

          <Step>
            <StepBadge step={1} />
            <p className="text-[15px] font-semibold mb-1">What's your name?</p>
            <p className="text-[10px] text-muted mb-4">
              Please use your legal name, not your nickname.
            </p>
            <Field label="First Name" value="Sarah" />
            <Field label="Last Name" value="Mitchell" />
            <NextBtn />
          </Step>

          <Step>
            <StepBadge step={1} />
            <p className="text-[15px] font-semibold mb-1">What's your date of birth?</p>
            <p className="text-[10px] text-muted mb-4">
              We ask for this to verify your identity.
            </p>
            <Field label="Date of Birth" value="3/21/1990" />
            <NextBtn />
            <BackBtn />
          </Step>

          <Step>
            <StepBadge step={1} />
            <p className="text-[15px] font-semibold mb-1">Where can we contact you?</p>
            <Field label="Mobile Phone Number" value="" />
            <Field label="Email" value="" />
            <NextBtn />
            <BackBtn />
          </Step>

          <Step>
            <StepBadge step={1} />
            <p className="text-[15px] font-semibold mb-1">
              We're setting up your account now.
            </p>
            <p className="text-[10px] text-muted mb-4">
              We've sent a verification code to your email.
            </p>
            <Field label="Verification Code" value="" />
            <NextBtn />
          </Step>

          <Step>
            <StepBadge step={2} />
            <p className="text-[15px] font-semibold mb-3">
              Are you a citizen of the United States?
            </p>
            <div className="space-y-2">
              <div className="border border-hairline rounded px-2 py-1.5 text-[11px]">
                Yes, I'm a U.S. Citizen
              </div>
              <div className="border border-hairline rounded px-2 py-1.5 text-[11px]">
                No, I'm a Permanent Resident
              </div>
            </div>
            <BackBtn />
          </Step>

          <Step>
            <p className="text-[15px] font-semibold mb-2">Your application is under review.</p>
            <p className="text-[10px] text-muted">
              We're currently reviewing your application and will get back to you soon.
            </p>
          </Step>
        </div>
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
