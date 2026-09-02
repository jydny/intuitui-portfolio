import { Link } from "react-router-dom";
import SkillsSection from "../components/Skillssection";
import SlideInText from "../components/SlideInText";
import RevealText from "../components/RevealText";

export default function About() {
  return (
    <div className="max-w-page mx-auto px-5 sm:px-8 pt-14 pb-24">
      <section className="max-w-page mx-auto px-5 sm:px-8 pb-16 sm:pt-24 sm:pb-24 flex flex-col gap-6">
        <SlideInText
          as="h1"
          text="UI Designer and Front-End Developer"
          className="font-bold leading-snug tracking-tight text-slate-800 my-6 w-full text-3xl lg:text-6xl"
        />

        <RevealText
          as="p"
          text="with 10+ years designing and building accessible, WCAG-compliant design systems and large-scale consumer-facing web and mobile applications. Proven ability to lead the full design-to-development lifecycle — from wireframes and prototypes to production-ready code. Skilled at cross-functional collaboration across engineering, marketing, and stakeholder teams, in both consulting and in-house environments."
          className="text-[32px] leading-[38.4px] tracking-[-1px] font-normal text-black"
        />
      </section>

      <SkillsSection />
    </div>
  );
}