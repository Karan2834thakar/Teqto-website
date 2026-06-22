import SplitReveal from "../ui/SplitReveal";
import Reveal from "../ui/Reveal";

/**
 * Brand statement — a large, masked split-text reveal that sets the tone and
 * names the core focus areas.
 */
export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-32 md:py-48">
      <Reveal className="mb-10">
        <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-brand-fuchsia/80">
          <span className="h-px w-8 bg-brand-fuchsia/60" />
          Who we are
        </span>
      </Reveal>

      <SplitReveal
        as="h2"
        className="font-display text-[clamp(1.9rem,4.6vw,4rem)] font-light leading-[1.15] tracking-tight text-white"
      >
        Teqto Infotech is Web and App Solution Provider and also Providing Customized ERP-CRM Software and also Providing E-Commerce Solutions, and Social Media Platform Development – to small & mid-sized practices. Our goal is to be apprehended as the most reliable company of integrated process management solutions.
      </SplitReveal>

      <Reveal
        as="div"
        stagger={0.12}
        className="mt-16 grid grid-cols-1 gap-10 border-t border-white/10 pt-12 md:grid-cols-3"
      >
        {[
          {
            t: "Engineering-led",
            d: "Senior teams who own the problem end-to-end, from architecture to launch.",
          },
          {
            t: "Design-obsessed",
            d: "Interfaces and experiences that feel as good as they perform.",
          },
          {
            t: "Built to scale",
            d: "Cloud-native foundations engineered for security, speed and growth.",
          },
        ].map((item) => (
          <div key={item.t}>
            <h3 className="mb-2 text-lg font-medium text-white">{item.t}</h3>
            <p className="text-sm font-light leading-relaxed text-white/50">{item.d}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
