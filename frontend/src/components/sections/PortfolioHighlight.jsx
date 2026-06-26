import { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "../../animations/gsap";
import SplitReveal from "../ui/SplitReveal";
import PageCTA from "../ui/PageCTA";

/** A few featured projects — full set lives on the Portfolio page. */
const featured = [
  { title: "ERP Management Platform", category: "Enterprise", tags: ["React", "Node.js", "MySQL"], year: "2024" },
  { title: "E-Commerce Marketplace", category: "E-Commerce", tags: ["Shopify", "Custom APIs"], year: "2024" },
  { title: "Social Media Platform", category: "Web App", tags: ["Vue.js", "PHP", "MongoDB"], year: "2023" },
];

export default function PortfolioHighlight() {
  const scope = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion) {
        gsap.set(".pf-card", { autoAlpha: 1, y: 0 });
        return;
      }
      gsap.set(".pf-card", { autoAlpha: 0, y: 50 });
      gsap.to(".pf-card", {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.12,
        scrollTrigger: { trigger: ".pf-grid", start: "top 80%" },
      });
      ScrollTrigger.refresh();
    },
    { scope }
  );

  return (
    <section ref={scope} className="shell py-20 md:py-28">
      <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-brand-fuchsia/80">
            <span className="h-px w-8 bg-brand-fuchsia/60" />
            Our Work
          </span>
          <SplitReveal
            as="h2"
            className="mt-4 font-display text-[clamp(2rem,5vw,4.5rem)] font-bold leading-none tracking-tight text-white"
          >
            Selected projects
          </SplitReveal>
        </div>
        <p className="max-w-md text-sm font-light leading-relaxed text-white/50">
          150+ products delivered across industries. Here's a small, recent slice of
          what we've shipped.
        </p>
      </div>

      <div className="pf-grid grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((p) => (
          <Link
            key={p.title}
            to="/portfolio"
            data-cursor="hover"
            className="pf-card group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-500 hover:border-brand-fuchsia/30 hover:bg-white/[0.04]"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-fuchsia/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full border border-brand-fuchsia/30 bg-brand-fuchsia/10 px-3 py-1 text-xs text-brand-fuchsia">
                  {p.category}
                </span>
                <span className="text-xs text-white/30">{p.year}</span>
              </div>
              <h3 className="mb-4 text-xl font-medium text-white transition-colors group-hover:text-brand-fuchsia/90">
                {p.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12">
        <PageCTA to="/portfolio">View full portfolio</PageCTA>
      </div>
    </section>
  );
}
