import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import frame1 from "../assets/frame_1.png";
import frame2 from "../assets/frame_2.png";
import frame3 from "../assets/frame_3.png";
import frame4 from "../assets/frame_4.png";
import "./FeaturedWork.css";

const PROJECTS = [
  {
    id: "custom_app",
    label: "Banking App",
    blurb: "User Experience",
    image: frame1,
    href: "/work/jovia-custom-app",
  },
  {
    id: "design_system",
    label: "Design System",
    blurb: "User Experience",
    image: frame2,
    href: "/work/design-system",
  },
  {
    id: "module",
    label: "Module",
    blurb: "Developement",
    image: frame3,
    href: "#",
  },
  {
    id: "branding",
    label: "Branding",
    blurb: "Branding",
    image: frame4,
    href: "#",
  },
];

const count = PROJECTS.length;
const wrap = (i) => (i + count) % count;

export default function FeaturedWork() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: false,
    skipSnaps: false,
    duration: 45, // higher = slower/smoother glide (embla's internal scroll frames)
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const current = PROJECTS[selectedIndex];
  const prevIdx = wrap(selectedIndex - 1);
  const nextIdx = wrap(selectedIndex + 1);

  return (
    <section className="featured-work-section">
      <h2 className="featured-work-heading tracking-tighterSpacing">
        A Design System to Banking Apps
      </h2>

      <div className="featured-work-viewport" ref={emblaRef}>
        <div className="featured-work-container">
          {PROJECTS.map((project, i) => {
            const isActive = i === selectedIndex;
            const isPrev = i === prevIdx;
            const isNext = i === nextIdx;
            const stateClass = isActive
              ? "is-active"
              : isPrev
              ? "is-prev"
              : isNext
              ? "is-next"
              : "is-hidden";

            return (
              <div
                key={project.id}
                className={`featured-work-slide ${stateClass}`}
                onClick={() => !isActive && emblaApi && emblaApi.scrollTo(i)}
              >
                <img
                  src={project.image}
                  alt={project.label}
                  className="featured-work-image"
                />
                <div className="featured-work-tint" />
                {isActive && (
                  <div className="featured-work-wordmark-wrap">
                    <span className="featured-work-wordmark tracking-tightSpacing">
                      {project.label}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <button
          className="featured-work-arrow left"
          onClick={scrollPrev}
          aria-label="Previous project"
        >
          <ChevronLeft size={20} strokeWidth={2} />
        </button>
        <button
          className="featured-work-arrow right"
          onClick={scrollNext}
          aria-label="Next project"
        >
          <ChevronRight size={20} strokeWidth={2} />
        </button>
      </div>

      <div className="featured-work-caption">
        <p className="featured-work-caption-text">
          <span className="featured-work-caption-label">{current.label}</span>
          {current.blurb}
        </p>
        <Link to={current.href} className="featured-work-caption-link">
          Learn more
        </Link>
      </div>
    </section>
  );
}
