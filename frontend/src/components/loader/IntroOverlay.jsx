import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "../../animations/gsap";
import logo from "../../assets/favicon.png";

export default function IntroOverlay({ onComplete }) {
  const overlayRef = useRef();
  const titleRef = useRef();
  const logoRef = useRef();
  const subRef = useRef();

  useGSAP(() => {
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    const letters = titleRef.current.querySelectorAll(".intro-letter");

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete,
    });

    tl
      // Logo gently scales + fades in (no harsh spin / overshoot)
      .from(logoRef.current, {
        scale: 0.6,
        opacity: 0,
        duration: 0.65,
      })
      // Letters rise smoothly out of their masks
      .from(
        letters,
        {
          yPercent: 120,
          opacity: 0,
          duration: 0.6,
          stagger: 0.05,
        },
        "-=0.4"
      )
      .from(
        subRef.current,
        {
          opacity: 0,
          y: 14,
          duration: 0.4,
        },
        "-=0.3"
      )
      // Soft breathing pulse on the logo
      .to(logoRef.current, { scale: 1.05, duration: 0.3, ease: "sine.inOut" }, "+=0.05")
      .to(logoRef.current, { scale: 1, duration: 0.3, ease: "sine.inOut" })
      // Cinematic zoom-out, then slide the overlay away
      .to(
        titleRef.current,
        { scale: 11, opacity: 0, duration: 0.9, ease: "power3.inOut" },
        "+=0.1"
      )
      .to(
        [logoRef.current, subRef.current],
        { opacity: 0, duration: 0.45, ease: "power2.in" },
        "<"
      )
      .to(
        overlayRef.current,
        { yPercent: -100, duration: 0.8, ease: "power4.inOut" },
        "-=0.55"
      );
  });

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-black z-[99999] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-fuchsia-500/20 blur-[150px]" />

      {/* Logo */}
      <img
        ref={logoRef}
        src={logo}
        alt="logo"
        className="w-28 md:w-40 z-10 mb-10"
      />

      {/* Title — each letter rises out of its own mask */}
      <div
        ref={titleRef}
        className="flex text-white font-display font-extrabold text-[80px] md:text-[180px] leading-none tracking-tight z-10"
      >
        {"TEQTO".split("").map((letter, index) => (
          <span key={index} className="inline-block overflow-hidden pb-[0.12em]">
            <span className="intro-letter inline-block">{letter}</span>
          </span>
        ))}
      </div>

      <div
        ref={subRef}
        className="text-fuchsia-400 tracking-[10px] mt-4 text-sm md:text-lg"
      >
        INFOTECH
      </div>
    </div>
  );
}
