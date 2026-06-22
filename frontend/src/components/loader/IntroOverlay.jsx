import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import logo from "../../assets/favicon.png";

export default function IntroOverlay({ onComplete }) {
  const overlayRef = useRef();
  const titleRef = useRef();
  const logoRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    tl.from(titleRef.current.children, {
      y: 200,
      opacity: 0,
      duration: 1,
      stagger: 0.08,
      ease: "power4.out",
    })

      .from(
        logoRef.current,
        {
          scale: 0,
          rotation: 180,
          opacity: 0,
          duration: 1,
          ease: "back.out(2)",
        },
        "-=0.4"
      )

      .to(logoRef.current, {
        scale: 1.2,
        duration: 0.4,
      })

      .to(logoRef.current, {
        scale: 1,
        duration: 0.4,
      })

      .to(titleRef.current, {
        scale: 15,
        opacity: 0,
        duration: 1.5,
        ease: "power4.inOut",
      })

      .to(
        overlayRef.current,
        {
          yPercent: -100,
          duration: 1.2,
          ease: "power4.inOut",
        },
        "-=0.7"
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

      {/* Title */}
      <div
        ref={titleRef}
        className="flex text-white font-mono font-black text-[80px] md:text-[180px] leading-none tracking-tight z-10"
      >
        {"TEQTO".split("").map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </div>

      <div className="text-fuchsia-400 tracking-[10px] mt-4 text-sm md:text-lg">
        INFOTECH
      </div>
    </div>
  );
}