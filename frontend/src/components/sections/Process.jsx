import { process } from "../../data/siteData";
import SplitReveal from "../ui/SplitReveal";
import Reveal from "../ui/Reveal";

/** How-we-work timeline with staggered, scroll-revealed steps. */
export default function Process() {
  return (
    <section id="process" className="shell relative py-20 md:py-28">
      <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SplitReveal
          as="h2"
          className="font-display text-[clamp(2.4rem,7vw,6rem)] font-bold leading-none tracking-tight text-white"
        >
          How we work
        </SplitReveal>
        <p className="max-w-sm text-sm font-light leading-relaxed text-white/50">
          A focused, transparent process that turns ambiguity into momentum — and
          momentum into shipped product.
        </p>
      </div>

      <Reveal
        as="div"
        stagger={0.15}
        className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] sm:grid-cols-2 lg:grid-cols-4"
      >
        {process.map((step) => (
          <div
            key={step.step}
            className="group relative flex flex-col gap-4 bg-ink/40 p-8 transition-colors duration-500 hover:bg-white/[0.03] md:p-10"
          >
            <span className="font-display text-5xl font-bold text-white/10 transition-colors duration-500 group-hover:text-brand-fuchsia/40">
              {step.step}
            </span>
            <h3 className="text-xl font-medium text-white">{step.title}</h3>
            <p className="text-sm font-light leading-relaxed text-white/50">
              {step.description}
            </p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
