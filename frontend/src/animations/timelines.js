/**
 * Reusable GSAP timeline factories. Each returns a paused/standalone timeline
 * (or applies a tween) so components stay declarative and animation logic is
 * testable + shareable.
 */
import { gsap } from "./gsap";

const CINEMATIC = "power4.out";

/**
 * Hero entrance: logo settles, heading lines rise, supporting copy + CTAs fade.
 * @param {object} refs - { logo, lines (array), copy, cta, meta }
 */
export function heroIntro({ logo, lines = [], copy, cta, meta }) {
  const tl = gsap.timeline({ defaults: { ease: CINEMATIC } });

  if (logo) {
    tl.from(logo, {
      scale: 0.6,
      autoAlpha: 0,
      filter: "blur(20px)",
      duration: 1.4,
    });
  }

  if (lines.length) {
    tl.from(
      lines,
      {
        yPercent: 120,
        autoAlpha: 0,
        duration: 1.2,
        stagger: 0.12,
      },
      "-=0.9"
    );
  }

  if (copy) {
    tl.from(copy, { y: 40, autoAlpha: 0, duration: 1 }, "-=0.7");
  }

  if (cta) {
    tl.from(cta, { y: 30, autoAlpha: 0, duration: 0.8 }, "-=0.7");
  }

  if (meta) {
    tl.from(meta, { y: 20, autoAlpha: 0, duration: 0.8 }, "-=0.6");
  }

  return tl;
}

/** Slow, infinite float used for the hero logo. */
export function floatLoop(target, { distance = 18, duration = 4 } = {}) {
  return gsap.to(target, {
    y: -distance,
    duration,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
}

/**
 * Scroll-triggered reveal for a batch of elements.
 * @param {Element|Element[]} targets
 * @param {object} opts - { y, stagger, trigger, start }
 */
export function scrollReveal(targets, opts = {}) {
  const {
    y = 60,
    stagger = 0.12,
    duration = 1.1,
    trigger,
    start = "top 85%",
  } = opts;

  return gsap.from(targets, {
    y,
    autoAlpha: 0,
    duration,
    stagger,
    ease: CINEMATIC,
    scrollTrigger: {
      trigger: trigger || targets,
      start,
      toggleActions: "play none none reverse",
    },
  });
}

/** Counts a number up when it scrolls into view. */
export function countUp(target, end, { suffix = "", duration = 2 } = {}) {
  const obj = { val: 0 };
  return gsap.to(obj, {
    val: end,
    duration,
    ease: "power2.out",
    snap: { val: 1 },
    onUpdate: () => {
      target.textContent = `${Math.round(obj.val)}${suffix}`;
    },
    scrollTrigger: {
      trigger: target,
      start: "top 90%",
      toggleActions: "play none none none",
    },
  });
}
