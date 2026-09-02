import FeaturedWork from "../components/FeaturedWork";
import FeatureHighlight from "../components/FeatureHighlight";
import labImage from "../assets/lab_450w.png";
import SlideInText from "../components/SlideInText";
import RevealText from "../components/RevealText";

export default function Home() {
  return (
    <div>
      <section className="max-w-page mx-auto px-5 sm:px-8 pt-14 pb-16 sm:pt-24 sm:pb-24 flex flex-col gap-6">
        <SlideInText
          as="h1"
          text="Design that explains itself"
          className="text-[76px] leading-[76px] tracking-[-3px] text-black font-bold"
        />

        <RevealText
          as="p"
          text="Users instinctively know how to use it."
          className="text-[32px] leading-[38.4px] tracking-[-1px] font-normal text-black"
        />
      </section>

      <FeaturedWork />

      <FeatureHighlight
        image={labImage}
        headingRest="Branding"
        body="Created a logo and the entire suite of marketing efforts."
        linkText="Learn more"
        href="#"
        gradientFrom="#8FA89B"
        gradientTo="#B08968"
      />

      <FeatureHighlight
        image={labImage}
        headingRest="Infographics"
        body="From Web Applications to Dashboard"
        linkText="Learn more"
        href="#"
        gradientFrom="#5C1A3B"
        gradientTo="#E8B400"
        reverse
      />
    </div>
  );
}
