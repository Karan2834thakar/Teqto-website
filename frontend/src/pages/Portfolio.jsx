import { useMemo, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "../animations/gsap";
import PageLayout from "../components/PageLayout";
import SplitReveal from "../components/ui/SplitReveal";
import Reveal from "../components/ui/Reveal";
import MagneticButton from "../components/ui/MagneticButton";

const projects = [
  { title: "ERP Management Platform", category: "Enterprise", tags: ["React", "Node.js", "MySQL"], year: "2024" },
  { title: "E-Commerce Marketplace", category: "E-Commerce", tags: ["Shopify", "Custom APIs"], year: "2024" },
  { title: "Social Media Platform", category: "Web App", tags: ["Vue.js", "PHP", "MongoDB"], year: "2023" },
  { title: "CRM Dashboard", category: "Enterprise", tags: ["React", "Python", "PostgreSQL"], year: "2023" },
  { title: "Mobile Banking App", category: "Mobile", tags: ["React Native", "Node.js"], year: "2023" },
  { title: "Healthcare Portal", category: "Web App", tags: ["Angular", "AWS", "MySQL"], year: "2022" },
  { title: "Restaurant Ordering System", category: "E-Commerce", tags: ["WordPress", "WooCommerce"], year: "2022" },
  { title: "Real Estate Platform", category: "Web App", tags: ["React", "Node.js", "MongoDB"], year: "2022" },
  { title: "Logistics Tracking Suite", category: "Enterprise", tags: ["React", "Go", "Redis"], year: "2024" },
  { title: "Fitness Coaching App", category: "Mobile", tags: ["Flutter", "Firebase"], year: "2023" },
];

const categories = ["All", "Enterprise", "E-Commerce", "Web App", "Mobile"];

export default function Portfolio() {
  const gridRef = useRef(null);
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  // Re-run the reveal whenever the filtered set changes so newly shown cards
  // never stay stuck hidden.
  useGSAP(
    () => {
      if (prefersReducedMotion) {
        gsap.set(".proj-card", { autoAlpha: 1, y: 0 });
        return;
      }
      gsap.set(".proj-card", { autoAlpha: 0, y: 40 });
      gsap.to(".proj-card", {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power4.out",
        stagger: 0.08,
        scrollTrigger: { trigger: gridRef.current, start: "top 85%" },
      });
      ScrollTrigger.refresh();
    },
    { scope: gridRef, dependencies: [active] }
  );

  return (
    <PageLayout>
      <section className="shell py-20">
        <Reveal className="mb-6">
          <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-brand-fuchsia/80">
            <span className="h-px w-8 bg-brand-fuchsia/60" />
            Our Work
          </span>
        </Reveal>
        <SplitReveal
          as="h1"
          className="font-display text-[clamp(2.4rem,7vw,6.5rem)] font-bold leading-none tracking-tight text-white max-w-4xl"
        >
          Portfolio
        </SplitReveal>
        <Reveal className="mt-8 max-w-xl">
          <p className="text-lg font-light leading-relaxed text-white/55">
            150+ projects delivered across industries. Here's a glimpse of what we've
            built for businesses worldwide.
          </p>
        </Reveal>

        {/* Stat strip */}
        <Reveal stagger={0.1} as="div" className="mt-14 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-4">
          {[
            { n: "150+", l: "Projects" },
            { n: "40+", l: "Clients" },
            { n: "12+", l: "Industries" },
            { n: "8+", l: "Years" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-4xl font-bold text-gradient md:text-5xl">{s.n}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/45">{s.l}</div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Filter + grid */}
      <section className="shell pb-32">
        {/* Category filter */}
        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                data-cursor="hover"
                className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "border-brand-fuchsia/50 bg-brand-fuchsia/15 text-white"
                    : "border-white/10 text-white/55 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div ref={gridRef} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <div
              key={p.title}
              className="proj-card group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-500 hover:border-brand-fuchsia/30 hover:bg-white/[0.04]"
            >
              {/* Glow on hover */}
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
            </div>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="mt-24 overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(140deg,rgba(134,59,255,0.16),rgba(217,70,239,0.1),transparent)] px-6 py-16 text-center md:px-16">
          <h2 className="mx-auto max-w-2xl font-display text-[clamp(1.8rem,4vw,3.2rem)] font-bold leading-tight tracking-tight text-white">
            Have a project we should build next?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm font-light leading-relaxed text-white/55">
            Tell us what you're planning — we'll get back to you within 24 hours.
          </p>
          <div className="mt-8 flex justify-center">
            <MagneticButton variant="primary" to="/contact">
              Start a project
            </MagneticButton>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
