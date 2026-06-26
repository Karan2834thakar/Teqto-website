import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "../../animations/gsap";
import MagneticButton from "../ui/MagneticButton";

/**
 * Fullscreen, centred hero. The animated background lives in the shared canvas;
 * here we focus on the headline + CTAs.
 *
 * The entrance runs on EVERY mount (so returning to the home page always
 * re-reveals + animates the text). On the very first load `ready` stays false
 * until the intro overlay lifts, so we don't animate behind the overlay.
 */
export default function Hero({ ready }) {
  const scope = useRef(null);
  const copyRef = useRef(null);
  const ctaRef = useRef(null);
  const metaRef = useRef(null);

  useGSAP(
    () => {
      const meta = metaRef.current;
      const lines = gsap.utils.toArray(scope.current.querySelectorAll(".hero-line"));
      const copy = copyRef.current;
      const cta = ctaRef.current;
      const all = [meta, ...lines, copy, cta].filter(Boolean);

      // Reduced motion → just show everything, no animation.
      if (prefersReducedMotion) {
        gsap.set(all, { clearProps: "all", autoAlpha: 1, yPercent: 0, y: 0 });
        return;
      }

      // Keep everything hidden until we're allowed to play (avoids a flash
      // behind the intro overlay on first load).
      gsap.set(all, { autoAlpha: 0 });
      gsap.set(lines, { yPercent: 120 });
      gsap.set(meta, { y: 20 });
      gsap.set(copy, { y: 30 });
      gsap.set(cta, { y: 24 });

      if (!ready) return;

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.to(meta, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.1)
        .to(
          lines,
          {
            autoAlpha: 1,
            yPercent: 0,
            duration: 1.2,
            stagger: 0.12,
            clearProps: "transform",
          },
          0.2
        )
        .to(copy, { autoAlpha: 1, y: 0, duration: 1 }, "-=0.7")
        .to(cta, { autoAlpha: 1, y: 0, duration: 0.8 }, "-=0.6");
    },
    { scope, dependencies: [ready] }
  );

  const headingLines = ["Engineering", "Future-Ready", "Digital Products"];

  return (
    <section
      id="top"
      ref={scope}
      className="relative flex min-h-[100svh] flex-col overflow-hidden px-6 pt-40 text-center md:pt-44"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          {/* Eyebrow */}
          <div
            ref={metaRef}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/60 backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-fuchsia" />
            Teqto Infotech
          </div>

          {/* Massive heading */}
          <h1 className="font-display font-bold uppercase leading-[0.95] tracking-tight text-[clamp(2.4rem,7.5vw,7.5rem)]">
            {headingLines.map((line, i) => (
              <span key={line} className="reveal-line">
                <span
                  className={`hero-line inline-block ${i === 1 ? "text-gradient" : "text-white"}`}
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
          >
            Teqto Infotech engineers software, AI solutions, enterprise platforms and
            cloud systems — turning ambitious ideas into future-ready digital products.
          </p>

          {/* CTAs — internal routes (no # anchors) */}
          <div
            ref={ctaRef}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <MagneticButton variant="primary" to="/contact">
              Start a project
            </MagneticButton>
            <MagneticButton variant="ghost" to="/services">
              Explore services
            </MagneticButton>
          </div>

          {/* Scroll indicator */}
          <div className="pointer-events-none mt-14 flex flex-col items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.35em] text-white/40">
              Scroll
            </span>
            <span className="block h-14 w-px bg-gradient-to-b from-brand-fuchsia to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
