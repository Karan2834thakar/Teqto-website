import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../animations/gsap";

/**
 * Magnetic hover: the element (and an optional inner label) eases toward the
 * cursor while hovered, then springs back on leave. Returns a ref to attach.
 *
 * @param {object} opts
 * @param {number} opts.strength  How far the element follows the cursor (px-ish).
 * @param {string} opts.innerSelector  Optional child that moves further for depth.
 */
export default function useMagnetic({ strength = 0.4, innerSelector } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion) return;

    const inner = innerSelector ? el.querySelector(innerSelector) : null;
    const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "power3.out" });
    const ixTo = inner && gsap.quickTo(inner, "x", { duration: 0.8, ease: "power3.out" });
    const iyTo = inner && gsap.quickTo(inner, "y", { duration: 0.8, ease: "power3.out" });

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      xTo(relX * strength);
      yTo(relY * strength);
      if (ixTo) {
        ixTo(relX * strength * 0.6);
        iyTo(relY * strength * 0.6);
      }
    };

    const onLeave = () => {
      xTo(0);
      yTo(0);
      if (ixTo) {
        ixTo(0);
        iyTo(0);
      }
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength, innerSelector]);

  return ref;
}
