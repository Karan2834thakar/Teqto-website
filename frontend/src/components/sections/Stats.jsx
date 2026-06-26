import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "../../animations/gsap";
import { countUp } from "../../animations/timelines";
import { stats } from "../../data/siteData";

/** Headline numbers that count up as they enter the viewport. */
export default function Stats() {
  const scope = useRef(null);

  useGSAP(
    () => {
      const nums = gsap.utils.toArray(".stat-num");
      nums.forEach((el, i) => {
        const { value, suffix } = stats[i];
        if (prefersReducedMotion) {
          el.textContent = `${value}${suffix}`;
        } else {
          countUp(el, value, { suffix, duration: 2 });
        }
      });
    },
    { scope }
  );

  return (
    <section ref={scope} className="shell relative py-20 md:py-28">
      <div className="grid grid-cols-2 gap-y-12 rounded-3xl border border-white/10 bg-white/[0.02] px-6 py-14 backdrop-blur-sm md:grid-cols-4 md:px-12">
        {stats.map((stat) => (
          <div key={stat.title} className="text-center">
            <div className="stat-num font-display text-5xl font-bold text-gradient md:text-7xl">
              0
            </div>
            <div className="mt-3 text-xs uppercase tracking-[0.2em] text-white/45 md:text-sm">
              {stat.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
