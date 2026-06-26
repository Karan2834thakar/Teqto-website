import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "../animations/gsap";
import PageLayout from "../components/PageLayout";
import SplitReveal from "../components/ui/SplitReveal";
import Reveal from "../components/ui/Reveal";
import ServiceModal from "../components/ui/ServiceModal";

const services = [
  {
    number: "01",
    title: "AI, ML & Automation",
    highlight: true,
    description: "Intelligent AI chatbots, machine-learning systems and end-to-end workflow automation that put your operations on autopilot.",
    tags: ["AI Chatbots", "AI/ML", "n8n", "GoHighLevel", "Automation"],
    points: [
      "Custom AI chatbots & virtual assistants",
      "Machine learning models & data pipelines",
      "Workflow automation with n8n & GoHighLevel",
      "LLM agents & smart integrations",
    ],
  },
  {
    number: "02",
    title: "Full Stack Development",
    highlight: true,
    description: "End-to-end product engineering — modern front-ends and robust back-ends — built, shipped and scaled by one senior team.",
    tags: ["React", "Node.js", "APIs", "Databases", "Cloud"],
    points: [
      "Modern, responsive front-ends",
      "Scalable APIs & server architecture",
      "Database design & integrations",
      "Deployment, DevOps & scaling",
    ],
  },
  {
    number: "03",
    title: "Frontend Development",
    description: "Building complex, innovative, responsive, and user-centric solutions with years of expertise in front-end technologies.",
    tags: ["React", "Vue", "Angular", "TypeScript"],
    points: [
      "Pixel-perfect, fully responsive interfaces",
      "Reusable component systems & design tokens",
      "Performance-first rendering & accessibility",
      "Fluid animations & micro-interactions",
    ],
  },
  {
    number: "04",
    title: "Backend Development",
    description: "Robust backend services that power your website or application — the invisible engine that makes great products possible.",
    tags: ["Node.js", "PHP", "Python", "APIs"],
    points: [
      "Scalable REST & GraphQL APIs",
      "Secure authentication & authorization",
      "Database design & query optimisation",
      "Reliable integrations & business logic",
    ],
  },
  {
    number: "05",
    title: "Web Design & Development",
    description: "Your website's design is the first step in developing a strong online presence. We craft experiences that convert.",
    tags: ["UI/UX", "Figma", "Webflow", "WordPress"],
    points: [
      "Conversion-focused UI/UX design",
      "Brand-aligned visual systems",
      "CMS, no-code & low-code builds",
      "SEO-ready, fast-loading pages",
    ],
  },
  {
    number: "06",
    title: "Mobile App Development",
    description: "Mobile applications of any complexity for B2C and B2B use cases, across many different industries.",
    tags: ["iOS", "Android", "React Native", "Flutter"],
    points: [
      "Native iOS & Android apps",
      "Cross-platform with React Native / Flutter",
      "Offline-first sync & push notifications",
      "App Store & Play Store deployment",
    ],
  },
  {
    number: "07",
    title: "Custom Software Development",
    description: "Enterprise-level solutions tailored for your needs. Our experienced team creates and executes software that reacts to market demands.",
    tags: ["ERP", "CRM", "SaaS", "Enterprise"],
    points: [
      "Tailored ERP, CRM & SaaS platforms",
      "Workflow automation that saves hours",
      "Third-party & legacy integrations",
      "Architected to scale with your business",
    ],
  },
  {
    number: "08",
    title: "E-Commerce Solutions",
    description: "End-to-end online store development — from design to payment integration — built to sell and scale.",
    tags: ["Shopify", "WooCommerce", "Custom", "Payments"],
    points: [
      "Storefront design & development",
      "Secure payment gateway integration",
      "Inventory & order management",
      "Checkout & conversion optimisation",
    ],
  },
  {
    number: "09",
    title: "Social Media Marketing",
    description: "Build brand awareness across the web and create meaningful connections with your customers through strategic social media marketing.",
    tags: ["Strategy", "Content", "Ads", "Analytics"],
    points: [
      "Channel strategy & content calendars",
      "Creative & copy production",
      "Paid social campaigns",
      "Analytics, insight & reporting",
    ],
  },
  {
    number: "10",
    title: "SEO Optimisation",
    description: "Improve your online presence, beat out competitors, and acquire more leads with expert search engine optimisation.",
    tags: ["On-page", "Technical", "Content", "Backlinks"],
    points: [
      "Technical SEO audits & fixes",
      "On-page & content optimisation",
      "Authority & link building",
      "Rank tracking & monthly reporting",
    ],
  },
  {
    number: "11",
    title: "Pay Per Click",
    description: "Custom PPC campaigns crafted to fit a variety of budgets, demands and goals — managed by certified professionals.",
    tags: ["Google Ads", "Meta Ads", "ROI", "Campaigns"],
    points: [
      "Google & Meta ad campaigns",
      "Keyword & audience research",
      "Budget & bid management",
      "ROI tracking & optimisation",
    ],
  },
  {
    number: "12",
    title: "Website Performance",
    description: "A great-performing website means better SEO and users that actually stay. We audit, optimise, and monitor.",
    tags: ["Core Web Vitals", "Speed", "Uptime", "CDN"],
    points: [
      "Core Web Vitals optimisation",
      "Speed, caching & asset tuning",
      "Uptime & performance monitoring",
      "CDN & infrastructure improvements",
    ],
  },
];

export default function Services() {
  const listRef = useRef(null);
  const [active, setActive] = useState(null);

  useGSAP(() => {
    if (prefersReducedMotion) {
      gsap.set(".svc-row", { autoAlpha: 1 });
      return;
    }
    gsap.from(".svc-row", {
      y: 60, autoAlpha: 0, duration: 1, ease: "power4.out", stagger: 0.1,
      scrollTrigger: { trigger: listRef.current, start: "top 80%" },
    });
  }, { scope: listRef });

  return (
    <PageLayout>
      <section className="shell py-20">
        <Reveal className="mb-6">
          <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-brand-fuchsia/80">
            <span className="h-px w-8 bg-brand-fuchsia/60" />
            What We Do
          </span>
        </Reveal>
        <SplitReveal
          as="h1"
          className="font-display text-[clamp(2.4rem,7vw,6.5rem)] font-bold leading-none tracking-tight text-white max-w-4xl"
        >
          Our Services
        </SplitReveal>
        <Reveal className="mt-8 max-w-xl">
          <p className="text-lg font-light leading-relaxed text-white/55">
            Led by AI, ML &amp; automation and full-stack engineering — and backed by a full digital team. From the first line of code to enterprise-scale rollout, we engineer the entire journey.
          </p>
          <p className="mt-3 text-sm text-white/35">Tap any service to see what's included.</p>
        </Reveal>
      </section>

      {/* Services list */}
      <section className="shell pb-24 md:pb-32">
        <div ref={listRef} className="border-t border-white/10">
          {services.map((svc) => (
            <button
              type="button"
              key={svc.number}
              onClick={() => setActive(svc)}
              data-cursor="hover"
              className={`svc-row group relative grid w-full cursor-pointer grid-cols-1 items-start gap-5 border-b border-white/10 py-8 text-left transition-colors duration-500 md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-start md:gap-8 md:py-10 ${
                svc.highlight
                  ? "bg-gradient-to-r from-brand-purple/[0.1] via-brand-fuchsia/[0.05] to-transparent hover:from-brand-purple/[0.16]"
                  : "hover:bg-white/[0.02]"
              }`}
              style={{ visibility: "hidden" }}
            >
              {svc.highlight && (
                <span className="pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-brand-purple via-brand-fuchsia to-brand-pink" />
              )}
              <span
                className={`font-display text-sm ${
                  svc.highlight ? "text-gradient font-semibold" : "text-brand-fuchsia/70"
                }`}
              >
                {svc.number}
              </span>
              <div className="min-w-0 md:transition-transform md:duration-500 md:group-hover:translate-x-3">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-2xl font-medium text-white md:text-4xl">{svc.title}</h3>
                  {svc.highlight && (
                    <span className="rounded-full border border-brand-fuchsia/40 bg-brand-fuchsia/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-fuchsia">
                      Core service
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm font-light leading-relaxed text-white/50 md:text-base">{svc.description}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-brand-fuchsia/80 transition-colors group-hover:text-brand-fuchsia">
                  View details
                  <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                </span>
              </div>
              <div className="flex flex-wrap gap-2 md:justify-end">
                {svc.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">
                    {tag}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Glassmorphism detail card */}
      <ServiceModal active={active} onClose={() => setActive(null)} />
    </PageLayout>
  );
}
