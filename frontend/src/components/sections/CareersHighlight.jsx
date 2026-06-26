import SplitReveal from "../ui/SplitReveal";
import Reveal from "../ui/Reveal";
import PageCTA from "../ui/PageCTA";

const perks = [
  { title: "Flexible Hours", desc: "Output over clock-in times." },
  { title: "Growth Culture", desc: "Mentorship & clear career paths." },
  { title: "Modern Stack", desc: "Latest tech, real production work." },
  { title: "Great Team", desc: "16+ specialists who love to build." },
];

/** Compact careers teaser band — links to the full Careers page. */
export default function CareersHighlight() {
  return (
    <section className="shell py-20 md:py-28">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] px-6 py-16 md:px-16 md:py-20">
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-purple/20 blur-[120px]" />

        <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-brand-fuchsia/80">
              <span className="h-px w-8 bg-brand-fuchsia/60" />
              Join Our Team
            </span>
            <SplitReveal
              as="h2"
              className="mt-4 font-display text-[clamp(2rem,5vw,4rem)] font-bold leading-[0.95] tracking-tight text-white"
            >
              Build the future with us
            </SplitReveal>
            <p className="mt-5 max-w-md text-sm font-light leading-relaxed text-white/55">
              We're always looking for talented people passionate about technology.
              Explore open roles in Rajkot &amp; remote.
            </p>
            <div className="mt-8">
              <PageCTA to="/careers">See open positions</PageCTA>
            </div>
          </div>

          <Reveal stagger={0.1} as="div" className="grid grid-cols-2 gap-4">
            {perks.map((p) => (
              <div key={p.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <div className="mb-3 h-1 w-8 rounded-full bg-gradient-to-r from-brand-purple to-brand-fuchsia" />
                <h3 className="text-sm font-medium text-white">{p.title}</h3>
                <p className="mt-1 text-xs font-light leading-relaxed text-white/50">{p.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
