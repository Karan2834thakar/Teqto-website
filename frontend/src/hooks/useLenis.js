import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "../animations/gsap";

/**
 * Drives Lenis smooth scrolling on GSAP's ticker and keeps ScrollTrigger in
 * sync, so scroll-triggered reveals stay perfectly aligned with the eased
 * scroll position. Exposes the instance on window for nav/anchor scrolling.
 */
export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      smoothWheel: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    window.__lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Recompute trigger positions once fonts + lazy canvas have settled, so
    // scroll-reveal sections never get stuck hidden (wrong start positions).
    const refresh = () => ScrollTrigger.refresh();
    const raf = requestAnimationFrame(refresh);
    const timer = setTimeout(refresh, 600);
    document.fonts?.ready.then(refresh).catch(() => {});

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      gsap.ticker.remove(tick);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);
}
