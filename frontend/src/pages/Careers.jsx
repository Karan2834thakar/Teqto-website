import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "../animations/gsap";
import PageLayout from "../components/PageLayout";
import SplitReveal from "../components/ui/SplitReveal";
import Reveal from "../components/ui/Reveal";

const perks = [
  { title: "Flexible Hours", desc: "Work when you are most productive. We care about output, not clock-in times." },
  { title: "Growth Culture", desc: "Mentorship programs, learning allowances, and clear career paths." },
  { title: "Modern Stack", desc: "Work with the latest technologies in real-world production environments." },
  { title: "Great Team", desc: "Join a vibrant team of 16+ specialists who love what they build." },
];

export default function Careers() {
  const cardsRef = useRef(null);

  useGSAP(() => {
    if (prefersReducedMotion) return;
    gsap.from(".perk-item", {
      y: 40, autoAlpha: 0, duration: 1, stagger: 0.1, ease: "power4.out",
      scrollTrigger: { trigger: ".perks-grid", start: "top 80%" },
    });
  }, { scope: cardsRef });

  return (
    <PageLayout>
      <section className="shell py-20">
        <Reveal className="mb-6">
          <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-brand-fuchsia/80">
            <span className="h-px w-8 bg-brand-fuchsia/60" />
            Join Our Team
          </span>
        </Reveal>
        <SplitReveal
          as="h1"
          className="font-display text-[clamp(2.4rem,7vw,6.5rem)] font-bold leading-none tracking-tight text-white max-w-4xl"
        >
          Build the Future With Us
        </SplitReveal>
        <Reveal className="mt-8 max-w-xl">
          <p className="text-lg font-light leading-relaxed text-white/55">
            We are always looking for talented people who are passionate about technology and building great products. Join our growing team in Rajkot.
          </p>
        </Reveal>
      </section>

      {/* Perks */}
      <section ref={cardsRef} className="shell pb-32">
        <div className="perks-grid grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map(p => (
            <div key={p.title} className="perk-item rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="mb-3 h-1 w-8 rounded-full bg-gradient-to-r from-brand-purple to-brand-fuchsia" />
              <h3 className="mb-2 font-medium text-white">{p.title}</h3>
              <p className="text-sm font-light leading-relaxed text-white/50">{p.desc}</p>
            </div>
          ))}
        </div>
        <Reveal className="mt-16 text-center">
          <p className="text-white/40 text-sm">
            Want to work with us? Send your portfolio &amp; CV to{" "}
            <a href="mailto:info@teqtoinfotech.com" className="text-brand-fuchsia hover:underline">
              info@teqtoinfotech.com
            </a>
          </p>
        </Reveal>
      </section>
    </PageLayout>
  );
}