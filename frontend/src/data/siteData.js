/** Primary navigation links (anchor to in-page sections). */
export const navLinks = [
  { label: "Services", href: "#services", hasMega: true },
  { label: "Solutions", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Company", href: "#footer" },
];

/** Mega-menu columns surfaced under "Services". Mirrors the Services page —
 *  the first column holds our two flagship services and is highlighted. */
export const megaMenu = [
  {
    heading: "Core Services",
    highlight: true,
    items: [
      { title: "AI, ML & Automation", desc: "Chatbots, ML & n8n / GHL automation" },
      { title: "Full Stack Development", desc: "Front-end to back-end, end to end" },
    ],
  },
  {
    heading: "Engineering & Apps",
    items: [
      { title: "Frontend Development", desc: "React, Vue & modern UIs" },
      { title: "Backend Development", desc: "APIs, servers & databases" },
      { title: "Mobile App Development", desc: "iOS, Android & cross-platform" },
      { title: "Custom Software", desc: "ERP, CRM & SaaS platforms" },
    ],
  },
  {
    heading: "Web, Commerce & Growth",
    items: [
      { title: "Web Design & Development", desc: "Sites that convert" },
      { title: "E-Commerce Solutions", desc: "Stores built to scale" },
      { title: "Website Performance", desc: "Speed, SEO & uptime" },
      { title: "Social Media Marketing", desc: "Reach & engagement" },
      { title: "SEO Optimisation", desc: "Rank higher, win leads" },
      { title: "Pay Per Click", desc: "Google & Meta ads" },
    ],
  },
];

/** Core capability areas shown in the Services section. */
export const services = [
  {
    number: "01",
    title: "AI, ML & Automation",
    highlight: true,
    description:
      "Intelligent AI chatbots, machine-learning systems and end-to-end workflow automation that put your operations on autopilot.",
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
    description:
      "End-to-end product engineering — modern front-ends and robust back-ends — built, shipped and scaled by one senior team.",
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
