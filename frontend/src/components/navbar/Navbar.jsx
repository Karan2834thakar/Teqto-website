import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { gsap } from "../../animations/gsap";
import Logo from "../ui/Logo";
import MegaMenu from "./MegaMenu";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const barRef = useRef(null);
  const headerRef = useRef(null);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  // Close the mega menu when clicking anywhere outside it (or pressing Escape).
  useEffect(() => {
    if (!megaOpen) return;
    const onPointerDown = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setMegaOpen(false);
      }
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMegaOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [megaOpen]);

  return (
    <header
      ref={headerRef}
      className="fixed left-1/2 top-4 z-50 w-[min(92vw,1200px)] -translate-x-1/2 overflow-visible"
    >
      <nav
        ref={barRef}
        className="flex items-center justify-between rounded-full border px-5 md:px-7"
        style={{ borderColor: "rgba(255,255,255,0)", backgroundColor: "rgba(10,6,16,0)" }}
      >
        {/* Logo — always goes to home */}
        <Link to="/" data-cursor="hover">
          <Logo imgClassName="w-12 md:w-14" wordClassName="text-xl md:text-2xl" />
        </Link>

        <div className="flex items-center gap-3">
          {/* Let's talk button */}
          <Link
            to="/contact"
            data-cursor="hover"
            className="hidden rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:inline-block"
          >
            Let's talk
          </Link>

          {/* Desktop Menu button */}
          <button
            onClick={() => setMegaOpen((open) => !open)}
            data-cursor="hover"
            aria-label="Open mega menu"
            aria-expanded={megaOpen}
            className="hidden rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10 sm:inline-flex"
          >
            Menu
          </button>

          {/* Mobile hamburger toggle */}
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
        {megaOpen && <MegaMenu onClose={() => setMegaOpen(false)} />}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="mt-3 overflow-hidden rounded-3xl border border-white/10 bg-ink-soft/85 p-6 backdrop-blur-2xl lg:hidden">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const active = location.pathname === link.href;
                return (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block rounded-xl px-4 py-3 text-lg font-medium transition-colors hover:bg-white/5 hover:text-white ${
                        active ? "bg-white/5 text-brand-fuchsia" : "text-white/80"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 block rounded-xl bg-[linear-gradient(110deg,#863bff,#d946ef,#ec4899)] px-4 py-3 text-center text-lg font-medium text-white"
                >
                  Let's talk
                </Link>
              </li>
            </ul>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}