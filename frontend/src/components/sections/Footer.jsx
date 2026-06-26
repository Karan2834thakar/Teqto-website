import { Link } from "react-router-dom";
import Logo from "../ui/Logo";
import { brand } from "../../config/brand";

/** Internal route columns (real pages — no dead `#` links). */
const columns = [
  {
    heading: "Explore",
    links: [
      { label: "Home", to: "/" },
      { label: "About", to: "/about" },
      { label: "Services", to: "/services" },
      { label: "Portfolio", to: "/portfolio" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Careers", to: "/careers" },
      { label: "Contact", to: "/contact" },
      { label: "Services", to: "/services" },
      { label: "About", to: "/about" },
    ],
  },
];

/** External social links. */
const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
];

/** Site footer with a big wordmark, link columns and contact CTA. */
export default function Footer() {
  return (
    <footer id="footer" className="relative border-t border-white/10 pb-12 pt-24">
      <div className="shell">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" data-cursor="hover" className="inline-block">
              <Logo imgClassName="w-10" className="mb-6" />
            </Link>
            <p className="max-w-xs text-sm font-light leading-relaxed text-white/50">
              {brand.tagline}. Software, AI and cloud engineering for ambitious teams.
            </p>
            <a
              href="mailto:info@teqtoinfotech.com"
              data-cursor="hover"
              className="mt-6 inline-block text-lg font-medium text-white transition-colors hover:text-brand-fuchsia"
            >
              info@teqtoinfotech.com
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-white/40">
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      data-cursor="hover"
                      className="text-sm font-light text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-white/40">
              Connect
            </h4>
            <ul className="space-y-3">
              {socials.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="text-sm font-light text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Oversized wordmark — coloured to match the brand logo gradient */}
        <div className="mt-20 select-none">
          <h2 className="text-gradient font-display text-[18vw] font-bold leading-none tracking-tighter pb-[0.08em] opacity-90">
            {brand.name.toUpperCase()}
          </h2>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row">
          <span>
            © {new Date().getFullYear()} {brand.name} {brand.suffix}. All rights reserved.
          </span>
          <span className="flex gap-6">
            <Link to="/contact" data-cursor="hover" className="transition-colors hover:text-white">
              Privacy
            </Link>
            <Link to="/contact" data-cursor="hover" className="transition-colors hover:text-white">
              Terms
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
