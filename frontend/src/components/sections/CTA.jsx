import SplitReveal from "../ui/SplitReveal";
import Reveal from "../ui/Reveal";
import MagneticButton from "../ui/MagneticButton";

/** Closing call-to-action with a strong gradient statement. */
export default function CTA() {
  return (
    <section className="shell relative py-20 md:py-28 text-center">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] px-6 py-24 backdrop-blur-sm md:px-16">
        {/* Internal glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-fuchsia/20 blur-[120px]" />

        <Reveal className="relative mb-6">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-brand-fuchsia/80">
            Let's build something
          </span>
        </Reveal>

        <SplitReveal
          as="h2"
          className="relative mx-auto max-w-3xl font-display text-[clamp(2.2rem,6vw,5rem)] font-bold leading-[1.02] tracking-tight text-white"
        >
          Ready to engineer your future-ready product ?
        </SplitReveal>

        <Reveal className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton variant="primary" to="/contact">
            Start a project
          </MagneticButton>
          <MagneticButton variant="ghost" to="/services">
            See our services
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
