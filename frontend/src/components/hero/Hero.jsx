import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "../../animations/gsap";
import { heroIntro } from "../../animations/timelines";
import MagneticButton from "../ui/MagneticButton";

/**
 * Fullscreen, centred hero. The animated "spear" (wireframe crystal) and
 * particle field live in the shared background canvas; here we focus on the
 * headline + CTAs. Generous top padding keeps the content clear of the navbar.
 * Text/CTAs animate once `ready` (handed off from the intro overlay).
 */
export default function Hero({ ready }) {
  const scope = useRef(null);
  const lineRefs = useRef([]);
  const copyRef = useRef(null);
  const ctaRef = useRef(null);
  const metaRef = useRef(null);

  lineRefs.current = [];
  const addLine = (el) => el && lineRefs.current.push(el);

  useGSAP(
    () => {
      if (!ready) return;

      const targets = [...lineRefs.current, copyRef.current, ctaRef.current, metaRef.current];

      if (prefersReducedMotion) {
        gsap.set(targets, { autoAlpha: 1, y: 0 });
        return;
      }

      // Reveal the (FOUC-guarded) targets, then animate them in.
      gsap.set(targets, { autoAlpha: 1 });
      heroIntro({
        logo: null,
        lines: lineRefs.current,
        copy: copyRef.current,
        cta: ctaRef.current,
        meta: metaRef.current,
      });
    },
    { scope, dependencies: [ready] }
  );

  const headingLines = ["Engineering", "Future-Ready", "Digital Products"];

  return (
    <section
      id="top"
      ref={scope}
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-40 text-center md:pt-44"
    >
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">
        {/* Eyebrow */}
        <div
          ref={metaRef}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/60 backdrop-blur-md"
          style={{ visibility: "hidden" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-fuchsia" />
          Teqto Infotech
        </div>

        {/* Massive heading */}
        <h1 className="font-display font-bold uppercase leading-[0.95] tracking-tight text-[clamp(2.4rem,7.5vw,7.5rem)]">
          {headingLines.map((line, i) => (
            <span key={line} className="reveal-line">
              <span
                ref={addLine}
                className={`inline-block ${i === 1 ? "text-gradient" : "text-white"}`}
                style={{ visibility: "hidden" }}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>

        {/* Supporting copy */}
        <p
          ref={copyRef}
          className="mt-8 max-w-xl text-base font-light leading-relaxed text-white/55 md:text-lg"
          style={{ visibility: "hidden" }}
        >
          Teqto Infotech engineers software, AI solutions, enterprise platforms and
          cloud systems — turning ambitious ideas into future-ready digital products.
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          style={{ visibility: "hidden" }}
        >
          <MagneticButton variant="primary" href="#footer">
            Start a project
          </MagneticButton>
          <MagneticButton variant="ghost" href="#services">
            Explore services
          </MagneticButton>
        </div>
      </div>

      {/* Scroll indicator (absolute — does not affect centring) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[10px] uppercase tracking-[0.35em] text-white/40">Scroll</span>
        <span className="block h-14 w-px bg-gradient-to-b from-brand-fuchsia to-transparent" />
      </div>
    </section>
  );
}
