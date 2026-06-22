import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "../../animations/gsap";

/**
 * Lightweight scroll-reveal wrapper for any block of content. Children fade +
 * rise into view once. Use `stagger` with multiple direct children.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  y = 60,
  stagger = 0,
  start = "top 88%",
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

      const targets = stagger ? el.children : el;
      gsap.set(el, { autoAlpha: 1 });
      gsap.from(targets, {
        y,
        autoAlpha: 0,
        duration: 1.1,
        delay,
        ease: "power4.out",
        stagger,
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} className={className} style={{ visibility: "hidden" }}>
      {children}
    </Tag>
  );
}
