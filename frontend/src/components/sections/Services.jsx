import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "../../animations/gsap";
import { services } from "../../data/siteData";
import SplitReveal from "../ui/SplitReveal";

/**
 * Capability list with a per-row reveal and a sliding hover treatment. Each row
 * shifts right and brightens on hover for a tactile, editorial feel.
 */
export default function Services() {
  const listRef = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion) {
        gsap.set(".service-row", { autoAlpha: 1 });
        return;
      }
      gsap.from(".service-row", {
        y: 60,
        autoAlpha: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.12,
        scrollTrigger: { trigger: listRef.current, start: "top 80%" },
      });
    },
    { scope: listRef }
  );

  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
      <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SplitReveal
          as="h2"
          className="font-display text-[clamp(2.4rem,7vw,6rem)] font-bold leading-none tracking-tight text-white"
        >
          What we do
        </SplitReveal>
        <p className="max-w-sm text-sm font-light leading-relaxed text-white/50">
          Five disciplines, one team. From first line of code to enterprise-scale
          rollout, we engineer the full journey.
        </p>
      </div>

      <div ref={listRef} className="border-t border-white/10">
        {services.map((service) => (
          <div
            key={service.number}
            data-cursor="hover"
            className="service-row group relative grid cursor-pointer grid-cols-1 items-start gap-4 border-b border-white/10 py-8 transition-colors duration-500 hover:bg-white/[0.02] md:grid-cols-[auto_1fr_auto] md:items-center md:gap-10 md:py-10"
            style={{ visibility: "hidden" }}
          >
            <span className="font-display text-sm text-brand-fuchsia/70">
              {service.number}
            </span>

            <div className="md:flex md:items-center md:gap-8 md:transition-transform md:duration-500 md:group-hover:translate-x-4">
              <h3 className="font-display text-3xl font-medium text-white md:text-5xl">
                {service.title}
              </h3>
              <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-white/50 md:mt-0">
                {service.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 md:justify-end">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
