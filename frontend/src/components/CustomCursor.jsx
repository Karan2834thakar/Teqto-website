import { useEffect, useRef } from "react";
import { gsap } from "../animations/gsap";

/**
 * Premium two-part cursor: a precise dot and a trailing ring that eases behind
 * it. The ring expands and inverts over any [data-cursor="hover"] element.
 * Pointer-fine devices only — hidden on touch.
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;

    const dot = dotRef.current;
    const ring = ringRef.current;

    const dotX = gsap.quickTo(dot, "x", { duration: 0.15, ease: "power3.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.15, ease: "power3.out" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.5, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.5, ease: "power3.out" });

    const onMove = (e) => {
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const enter = () =>
      gsap.to(ring, { scale: 2.2, borderColor: "rgba(236,72,153,0.9)", backgroundColor: "rgba(236,72,153,0.08)", duration: 0.3 });
    const leave = () =>
      gsap.to(ring, { scale: 1, borderColor: "rgba(255,255,255,0.4)", backgroundColor: "rgba(236,72,153,0)", duration: 0.3 });

    window.addEventListener("mousemove", onMove);

    // Delegate hover state to interactive elements.
    const hoverables = () => document.querySelectorAll('[data-cursor="hover"]');
    const bind = () =>
      hoverables().forEach((el) => {
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
      });
    bind();

    // Re-bind when DOM updates (mega menu, mobile drawer, etc.).
    const observer = new MutationObserver(() => bind());
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 md:block"
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-fuchsia md:block"
      />
    </>
  );
}
