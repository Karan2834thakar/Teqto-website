import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "../animations/gsap";
import PageLayout from "../components/PageLayout";
import SplitReveal from "../components/ui/SplitReveal";
import Reveal from "../components/ui/Reveal";

const whyUs = [
  { title: "Variation in Designing", desc: "A vibrant creative team buzzing with ideas and the skills to take them from concept to reality." },
  { title: "Latest Technology", desc: "We guide you through development with quality services incorporating the latest tech for maximum value." },
  { title: "Trusted Hosting", desc: "Partnered with best-in-industry secured hosting providers to protect against phishing and fraud." },
  { title: "Customer Focused", desc: "Every decision is made with your business goals and end-users in mind — always." },
  { title: "Innovative Solutions", desc: "We bring fresh thinking and creative problem-solving to every project we take on." },
  { title: "Scalable Services", desc: "Built to grow with you — our solutions scale seamlessly as your business expands." },
];

const faqs = [
  { q: "How do I get my business online?", a: "Send us your business details and we begin designing a website that reflects your brand. You review it online and we do a final edit if needed." },
  { q: "How long will it take?", a: "Most projects are completed within 30 days. Larger projects may take a few months depending on scope. Rush timelines can be accommodated." },
  { q: "Am I locked in to a long-term contract?", a: "No. Your only commitment is yearly hosting fees to keep your website live. Additional work is quoted separately per project." },
  { q: "What information do you need to build my website?", a: "We need your logo, business overview text, and any images you'd like included. We can also help you develop content if you're unsure where to start." },
  { q: "Can you come and see me?", a: "Yes, with travel expenses. Most clients find it easier to complete our online form and share assets via email — we handle the rest." },
];

export default function About() {
  const heroRef = useRef(null);
  const cardsRef = useRef(null);

  useGSAP(() => {
    if (prefersReducedMotion) return;
    gsap.from(".about-hero-badge", { y: 30, autoAlpha: 0, duration: 1, ease: "power4.out" });
    gsap.from(".why-card", {
      y: 60, autoAlpha: 0, duration: 1, stagger: 0.1, ease: "power4.out",
      scrollTrigger: { trigger: cardsRef.current, start: "top 80%" },
    });
  }, { scope: heroRef });

  return (
    <PageLayout>
      {/* Hero */}
      <section ref={heroRef} className="shell py-20">
        <div className="about-hero-badge mb-8 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-brand-fuchsia/80">
          <span className="h-px w-8 bg-brand-fuchsia/60" />
          Who We Are
        </div>
        <SplitReveal
          as="h1"
          className="font-display text-[clamp(2.4rem,7vw,6.5rem)] font-bold leading-none tracking-tight text-white max-w-4xl"
        >
          8 Years of Engineering Excellence
        </SplitReveal>
        <Reveal className="mt-8 max-w-2xl">
          <p className="text-lg font-light leading-relaxed text-white/55">
            Teqto Infotech is a web and app solution provider delivering customized ERP-CRM software, e-commerce solutions, and social media platform development to small and mid-sized businesses worldwide. Our goal is to be the most reliable company for integrated process management solutions.
          </p>
        </Reveal>

        {/* Stats row */}
        <Reveal stagger={0.12} as="div" className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-12 md:grid-cols-4">
          {[
            { n: "150+", l: "Projects Completed" },
            { n: "40+", l: "Happy Customers" },
            { n: "16+", l: "Team Members" },
            { n: "10+", l: "Services" },
          ].map(s => (
            <div key={s.l}>
              <div className="font-display text-5xl font-bold text-gradient">{s.n}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/45">{s.l}</div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Why Choose Us */}
      <section className="shell py-24">
        <Reveal className="mb-12">
          <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-brand-fuchsia/80">
            <span className="h-px w-8 bg-brand-fuchsia/60" />
            Why Choose Us
          </span>
          <h2 className="mt-4 font-display text-[clamp(2rem,5vw,4.5rem)] font-bold leading-none tracking-tight text-white">
            What sets us apart
          </h2>
        </Reveal>

        <div ref={cardsRef} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item) => (
            <div key={item.title} className="why-card group rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-colors duration-500 hover:border-brand-fuchsia/30 hover:bg-white/[0.04]">
              <div className="mb-4 h-1 w-8 rounded-full bg-gradient-to-r from-brand-purple to-brand-fuchsia transition-all duration-500 group-hover:w-16" />
              <h3 className="mb-3 text-lg font-medium text-white">{item.title}</h3>
              <p className="text-sm font-light leading-relaxed text-white/50">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className="shell py-24 border-t border-white/10">
        <Reveal className="mb-12 text-center">
          <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-brand-fuchsia/80">
            <span className="h-px w-8 bg-brand-fuchsia/60" />
            Tech Stack
          </span>
          <h2 className="mt-4 font-display text-[clamp(1.8rem,4vw,3.5rem)] font-bold leading-none tracking-tight text-white">
            Technologies we work with
          </h2>
        </Reveal>
        <Reveal stagger={0.06} as="div" className="flex flex-wrap justify-center gap-3">
          {["React", "Node.js", "TypeScript", "Vue.js", "Angular", "PHP", "MySQL", "MongoDB", "WordPress", "Shopify", "Android", "iOS", "AWS", "HTML5", "CSS3", "Python", "Drupal", "Webflow"].map(tech => (
            <span key={tech} className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm font-light text-white/60 transition-colors hover:border-brand-fuchsia/40 hover:text-white">
              {tech}
            </span>
          ))}
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="shell py-24">
        <Reveal className="mb-12">
          <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-brand-fuchsia/80">
            <span className="h-px w-8 bg-brand-fuchsia/60" />
            FAQ
          </span>
          <h2 className="mt-4 font-display text-[clamp(2rem,5vw,4rem)] font-bold leading-none tracking-tight text-white">
            Common questions
          </h2>
        </Reveal>
        <Reveal stagger={0.1} as="div" className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="group rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 transition-colors hover:border-white/20">
              <summary className="cursor-pointer list-none text-base font-medium text-white/90 group-open:text-brand-fuchsia">
                {faq.q}
              </summary>
              <p className="mt-4 text-sm font-light leading-relaxed text-white/55">{faq.a}</p>
            </details>
          ))}
        </Reveal>
      </section>
    </PageLayout>
  );
}