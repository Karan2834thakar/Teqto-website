import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "../../three/Scene";
import { gsap, prefersReducedMotion } from "../../animations/gsap";

/**
 * Fixed, full-viewport atmosphere shared by the page:
 *   - large blurred pink/purple gradient blobs (slow drift)
 *   - a Three.js particle field + ghostly crystal
 *   - a cursor-following radial glow
 *   - floating CSS sparkles
 * Sits behind all content (z-0). Grain is applied separately via .grain.
 */
export default function Atmosphere() {
  const glowRef = useRef(null);

  // Cursor-reactive glow w.
  useEffect(() => {
    if (prefersReducedMotion) return;
    const el = glowRef.current;
    if (!el) return;
    const xTo = gsap.quickTo(el, "x", { duration: 0.9, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.9, ease: "power3.out" });
    const onMove = (e) => {
      xTo(e.clientX - window.innerWidth / 2);
      yTo(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const sparkles = Array.from({ length: 32 });

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Blurred gradient blobs */}
      <div className="absolute -left-40 top-[-10%] h-[55vw] w-[55vw] rounded-full bg-brand-purple/25 blur-[160px] animate-[float_18s_ease-in-out_infinite]" />
      <div className="absolute right-[-15%] top-[20%] h-[45vw] w-[45vw] rounded-full bg-brand-fuchsia/20 blur-[150px] animate-[float_22s_ease-in-out_infinite_reverse]" />
      <div className="absolute bottom-[-20%] left-1/3 h-[40vw] w-[40vw] rounded-full bg-brand-blue/15 blur-[150px] animate-[float_26s_ease-in-out_infinite]" />

      {/* Cursor-following glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          ref={glowRef}
          className="h-[40vw] w-[40vw] rounded-full bg-brand-pink/10 blur-[120px]"
        />
      </div>

      {/* Three.js particle field */}
      <Canvas
        className="!absolute inset-0"
        camera={{ position: [0, 0, 12], fov: 60 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Scene />
      </Canvas>

      {/* Floating sparkles */}
      {sparkles.map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: `${Math.random() * 2.5 + 0.5}px`,
            height: `${Math.random() * 2.5 + 0.5}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.6 + 0.1,
            animation: `twinkle ${Math.random() * 4 + 3}s ease-in-out ${Math.random() * 3}s infinite`,
          }}
        />
      ))}

      {/* Vignette to anchor content */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(5,3,8,0.85)_100%)]" />
    </div>
  );
}
