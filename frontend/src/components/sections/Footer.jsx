import Logo from "../ui/Logo";
import { brand } from "../../config/brand";

const columns = [
  {
    heading: "Services",
    links: ["Software Development", "AI Solutions", "Enterprise Platforms", "Cloud", "Digital Transformation"],
  },
  {
    heading: "Company",
    links: ["About", "Process", "Careers", "Contact"],
  },
  {
    heading: "Connect",
    links: ["LinkedIn", "X / Twitter", "GitHub", "Dribbble"],
  },
];

/** Site footer with a big wordmark, link columns and contact CTA. */
export default function Footer() {
  return (
    <footer id="footer" className="relative border-t border-white/10 px-6 pb-12 pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo imgClassName="w-10" className="mb-6" />
            <p className="max-w-xs text-sm font-light leading-relaxed text-white/50">
              {brand.tagline}. Software, AI and cloud engineering for ambitious teams.
            </p>
            <a
              href="mailto:hello@teqto.com"
              data-cursor="hover"
              className="mt-6 inline-block text-lg font-medium text-white transition-colors hover:text-brand-fuchsia"
            >
              hello@teqto.com
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-white/40">
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      data-cursor="hover"
                      className="text-sm font-light text-white/60 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Oversized wordmark */}
        <div className="mt-20 select-none overflow-hidden">
          <h2 className="font-display text-[18vw] font-bold leading-[0.8] tracking-tighter text-white/[0.04]">
            {brand.name.toUpperCase()}
          </h2>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row">
          <span>
            © {new Date().getFullYear()} {brand.name} {brand.suffix}. All rights reserved.
          </span>
          <span className="flex gap-6">
            <a href="#" data-cursor="hover" className="transition-colors hover:text-white">
              Privacy
            </a>
            <a href="#" data-cursor="hover" className="transition-colors hover:text-white">
              Terms
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
