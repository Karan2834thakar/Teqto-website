import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { gsap } from "../../animations/gsap";
import Logo from "../ui/Logo";
import MegaMenu from "./MegaMenu";

/**
 * Transparent navbar that morphs into a glass bar on scroll (GSAP), with a
 * hover-revealed mega menu and a mobile drawer. Anchor clicks use Lenis for
 * smooth scrolling.
 */
export default function Navbar() {
  const barRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Toggle glass state on scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Animate the glass morph with GSAP whenever `scrolled` changes.
  useEffect(() => {
    if (!barRef.current) return;
    gsap.to(barRef.current, {
      backgroundColor: scrolled ? "rgba(10,6,16,0.6)" : "rgba(10,6,16,0)",
      borderColor: scrolled ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0)",
      backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
      paddingTop: scrolled ? 12 : 18,
      paddingBottom: scrolled ? 12 : 18,
      duration: 0.5,
      ease: "power3.out",
    });
  }, [scrolled]);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    setMegaOpen(false);
    const target = document.querySelector(href);
    if (!target) return;
    if (window.__lenis) window.__lenis.scrollTo(target, { offset: -40 });
    else target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed left-1/2 top-4 z-50 w-[min(94vw,1200px)] -translate-x-1/2 overflow-visible"
    >
      <nav
        ref={barRef}
        className="flex items-center justify-between rounded-full border px-5 md:px-7"
        style={{ borderColor: "rgba(255,255,255,0)", backgroundColor: "rgba(10,6,16,0)" }}
      >
        <a href="#top" onClick={(e) => handleNav(e, "#top")} data-cursor="hover">
          <Logo imgClassName="w-12 md:w-14" wordClassName="text-xl md:text-2xl" />
        </a>

        <div className="flex items-center gap-3">
          <a
            href="#footer"
            onClick={(e) => handleNav(e, "#footer")}
            data-cursor="hover"
            className="hidden rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:inline-block"
          >
            Let's talk
          </a>

          <button
            onClick={() => setMegaOpen((open) => !open)}
            data-cursor="hover"
            aria-label="Open mega menu"
            aria-expanded={megaOpen}
            className="hidden rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10 sm:inline-flex"
          >
            Menu
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            data-cursor="hover"
            aria-label="Toggle menu"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`h-px w-6 bg-white transition-transform duration-300 ${
                mobileOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-white transition-transform duration-300 ${
                mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Desktop mega menu */}
      <AnimatePresence>
        {megaOpen && <MegaMenu onNavigate={(e, href) => handleNav(e, href)} />}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="mt-3 overflow-hidden rounded-3xl border border-white/10 bg-ink-soft/85 p-6 backdrop-blur-2xl lg:hidden">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className="block rounded-xl px-4 py-3 text-lg font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#footer"
                  onClick={(e) => handleNav(e, "#footer")}
                  className="mt-2 block rounded-xl bg-[linear-gradient(110deg,#863bff,#d946ef,#ec4899)] px-4 py-3 text-center text-lg font-medium text-white"
                >
                  Let's talk
                </a>
              </li>
            </ul>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
