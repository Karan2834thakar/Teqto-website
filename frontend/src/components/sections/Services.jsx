import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "../../animations/gsap";
import { services } from "../../data/siteData";
import SplitReveal from "../ui/SplitReveal";
import PageCTA from "../ui/PageCTA";
import ServiceModal from "../ui/ServiceModal";

/**
 * Capability list with a per-row reveal and a sliding hover treatment. Each row
 * shifts right and brightens on hover for a tactile, editorial feel.
 */
export default function Services() {
  const listRef = useRef(null);
  const [active, setActive] = useState(null);

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
    <section id="services" className="shell relative py-20 md:py-28">
      <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SplitReveal
          as="h2"
          className="font-display block w-full max-w-none text-[clamp(1.8rem,4.8vw,4.5rem)] font-bold leading-none tracking-tight text-white md:text-[clamp(2rem,4vw,5rem)]"
        >
          What we do
        </SplitReveal>
        <p className="max-w-md text-sm font-light leading-relaxed text-white/50">
          Five disciplines, one team. From first line of code to enterprise-scale
          rollout, we engineer the full journey.
        </p>
      </div>

      <div ref={listRef} className="border-t border-white/10">
        {services.map((service) => (
          <button
            type="button"
            key={service.number}
            onClick={() => setActive(service)}
            data-cursor="hover"
            className="service-row group relative grid w-full cursor-pointer grid-cols-1 items-start gap-5 border-b border-white/10 py-8 text-left transition-colors duration-500 hover:bg-white/[0.02] md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-start md:gap-8 md:py-10"
            style={{ visibility: "hidden" }}
          >
            <span className="font-display text-sm text-brand-fuchsia/70">
              {service.number}
            </span>

            <div className="min-w-0 md:transition-transform md:duration-500 md:group-hover:translate-x-3">
              <h3 className="font-display text-2xl font-medium text-white md:text-4xl">
                {service.title}
              </h3>
              <p className="mt-3 max-w-none text-sm font-light leading-relaxed text-white/50 md:text-base">
                {service.description}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-brand-fuchsia/80 transition-colors group-hover:text-brand-fuchsia">
                View details
                <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
              </span>
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
          </button>
        ))}
      </div>

      <div className="mt-12">
        <PageCTA to="/services">View all services</PageCTA>
      </div>

      <ServiceModal active={active} onClose={() => setActive(null)} />
    </section>
  );
}
