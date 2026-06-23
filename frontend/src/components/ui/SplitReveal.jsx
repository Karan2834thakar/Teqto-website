import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { gsap, ScrollTrigger, prefersReducedMotion } from "../../animations/gsap";

/**
 * Splits its text content into lines + words and reveals them on scroll with a
 * masked, rising stagger. Renders any heading/paragraph tag via `as`.
 *
 * <SplitReveal as="h2" className="...">Big headline</SplitReveal>
 */
export default function SplitReveal({
  as: Tag = "div",
  children,
  className = "",
  stagger = 0.08,
  duration = 1,
  start = "top 85%",
  delay = 0,
}) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      if (prefersReducedMotion) {
        gsap.set(el, { autoAlpha: 1 });
        return;
      }

      let split;
      let animation;
      let cancelled = false;

      const build = () => {
        if (cancelled) return;

        split?.revert();
        animation?.scrollTrigger?.kill();
        animation?.kill();

        split = new SplitType(el, {
          types: "lines,words",
          lineClass: "reveal-line",
        });

        gsap.set(el, { autoAlpha: 1 });
        animation = gsap.fromTo(
          split.words,
          { yPercent: 115 },
          {
            yPercent: 0,
            duration,
            delay,
            ease: "power4.out",
            stagger,
            scrollTrigger: {
              trigger: el,
              start,
              toggleActions: "play reverse play reverse",
              invalidateOnRefresh: true,
            },
          }
        );
      };

      Promise.resolve(document.fonts?.ready).then(build);

      // Re-split on resize so line breaks stay correct.
      const onResize = () => {
        split?.split();
        ScrollTrigger.refresh();
      };
      window.addEventListener("resize", onResize);
      return () => {
        cancelled = true;
        window.removeEventListener("resize", onResize);
        animation?.scrollTrigger?.kill();
        animation?.kill();
        split?.revert();
      };
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} className={className} style={{ visibility: "hidden" }}>
      {children}
    </Tag>
  );
}
