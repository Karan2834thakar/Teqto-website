import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { megaMenu } from "../../data/siteData";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const container = {
  hidden: { opacity: 0, y: -12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.05 },
  },
  exit: { opacity: 0, y: -12, transition: { duration: 0.25, ease: [0.76, 0, 0.24, 1] } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function MegaMenu({ onClose }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      className="absolute left-1/2 top-[calc(100%+0.75rem)] w-[min(96vw,1120px)] -translate-x-1/2 overflow-hidden rounded-3xl border border-white/10 bg-ink-soft/80 p-8 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
    >
      {/* Soft brand glow inside the panel */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand-fuchsia/20 blur-[90px]" />

      <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1fr_1fr_1fr]">
        {/* Nav links column */}
        <div>
          <motion.h4
            variants={item}
            className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-brand-fuchsia/80"
          >
            Explore
          </motion.h4>
          <ul className="space-y-1">
            {navLinks.map((link, index) => (
              <motion.li key={link.label} variants={item}>
                <Link
                  to={link.href}
                  onClick={onClose}
                  data-cursor="hover"
                  className="group flex items-center justify-between rounded-xl px-3 py-2.5 transition-colors hover:bg-white/5"
                >
                  <span className="text-sm font-medium text-white transition-colors group-hover:text-brand-light">
                    {link.label}
                  </span>
                  <span className="text-xs text-white/35">0{index + 1}</span>
                </Link>
              </motion.li>
            ))}
          </ul>

          <motion.div
            variants={item}
            className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
          >
            <p className="text-sm font-medium text-white">Need a tailored build?</p>
            <p className="mt-1 text-xs leading-relaxed text-white/45">
              Let us map the right product, automation, or platform for your team.
            </p>
            <Link
              to="/contact"
              onClick={onClose}
              className="mt-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-white/20"
            >
              Start a project
            </Link>
          </motion.div>
        </div>

        {/* Service columns */}
        {megaMenu.map((col) => (
          <div key={col.heading}>
            <motion.h4
              variants={item}
              className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-brand-fuchsia/80"
            >
              {col.heading}
            </motion.h4>
            <ul className="space-y-1">
              {col.items.map((entry) => (
                <motion.li key={entry.title} variants={item}>
                  <Link
                    to="/services"
                    onClick={onClose}
                    data-cursor="hover"
                    className="group block rounded-xl px-3 py-2.5 transition-colors hover:bg-white/5"
                  >
                    <span className="block text-sm font-medium text-white transition-colors group-hover:text-brand-light">
                      {entry.title}
                    </span>
                    <span className="block text-xs text-white/45">{entry.desc}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}