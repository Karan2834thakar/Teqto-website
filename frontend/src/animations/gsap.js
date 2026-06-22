/**
 * Single place to register GSAP plugins so every module shares one instance.
 * Import { gsap, ScrollTrigger } from here instead of from "gsap" directly.
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Respect the user's reduced-motion preference globally. */
export const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export { gsap, ScrollTrigger };
