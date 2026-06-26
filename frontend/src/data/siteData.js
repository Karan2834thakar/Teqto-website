/** Primary navigation links (anchor to in-page sections). */
export const navLinks = [
  { label: "Services", href: "#services", hasMega: true },
  { label: "Solutions", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Company", href: "#footer" },
];

/** Mega-menu columns surfaced under "Services". */
export const megaMenu = [
  {
    heading: "Engineering",
    items: [
      { title: "Custom Software", desc: "Bespoke platforms & products" },
      { title: "Web Applications", desc: "Scalable, modern front-ends" },
      { title: "Mobile Apps", desc: "iOS, Android & cross-platform" },
    ],
  },
  {
    heading: "Intelligence",
    items: [
      { title: "AI Solutions", desc: "LLMs, agents & automation" },
      { title: "Data & ML", desc: "Pipelines, models & insight" },
      { title: "Computer Vision", desc: "Detection & recognition" },
    ],
  },
  {
    heading: "Enterprise",
    items: [
      { title: "ERP & CRM", desc: "Operations that scale" },
      { title: "Cloud & DevOps", desc: "AWS · Azure · GCP" },
      { title: "Integrations", desc: "APIs & legacy systems" },
    ],
  },
];

/** Core capability areas shown in the Services section. */
export const services = [
  {
    number: "01",
    title: "Software Development",
    description:
      "End-to-end product engineering — from architecture to deployment — built on modern, maintainable foundations.",
    tags: ["Web", "Mobile", "APIs", "Platforms"],
    points: [
      "End-to-end product engineering",
      "Modern, maintainable architecture",
      "Web, mobile & API platforms",
      "Quality, security & performance baked in",
    ],
  },
  {
    number: "02",
    title: "AI Solutions",
    description:
      "Intelligent automation, LLM-powered agents and data systems that turn information into competitive advantage.",
    tags: ["LLMs", "Agents", "ML", "Vision"],
    points: [
      "LLM-powered agents & automation",
      "Custom ML models & pipelines",
      "Computer vision & detection",
      "Data systems that drive decisions",
    ],
  },
  {
    number: "03",
    title: "Enterprise Platforms",
    description:
      "ERP, CRM and internal tools engineered for reliability, security and scale across your entire organisation.",
    tags: ["ERP", "CRM", "Internal Tools"],
    points: [
      "Tailored ERP & CRM systems",
      "Internal tools & dashboards",
      "Reliable, secure & scalable",
      "Org-wide process automation",
    ],
  },
  {
    number: "04",
    title: "Cloud Technologies",
    description:
      "Resilient cloud-native infrastructure and DevOps pipelines that ship faster and stay up.",
    tags: ["AWS", "Azure", "DevOps", "K8s"],
    points: [
      "Cloud-native infrastructure",
      "CI/CD & DevOps pipelines",
      "AWS · Azure · GCP",
      "High availability & monitoring",
    ],
  },
  {
    number: "05",
    title: "Digital Transformation",
    description:
      "Strategy, design and modernisation that move legacy operations into a future-ready digital core.",
    tags: ["Strategy", "UX", "Modernisation"],
    points: [
      "Legacy system modernisation",
      "Product & UX strategy",
      "Process digitisation",
      "A future-ready digital core",
    ],
  },
];

/** Headline numbers. `value`/`suffix` drive the count-up animation. */
export const stats = [
  { value: 150, suffix: "+", title: "Projects Delivered" },
  { value: 40, suffix: "+", title: "Global Clients" },
  { value: 8, suffix: "+", title: "Years Engineering" },
  { value: 16, suffix: "+", title: "Specialists" },
];

/** How we work — process timeline. */
export const process = [
  {
    step: "01",
    title: "Discover",
    description:
      "We immerse in your goals, users and constraints to define the problem worth solving.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Architecture, experience and interface come together into a clear, validated blueprint.",
  },
  {
    step: "03",
    title: "Engineer",
    description:
      "Senior teams build in tight iterations with quality, security and performance baked in.",
  },
  {
    step: "04",
    title: "Evolve",
    description:
      "We launch, measure and continuously refine — your product compounds in value over time.",
  },
];
