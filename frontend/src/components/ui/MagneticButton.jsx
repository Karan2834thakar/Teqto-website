import useMagnetic from "../../hooks/useMagnetic";

/**
 * Magnetic CTA. `variant` controls the look:
 *  - "primary"  filled gradient
 *  - "ghost"    glass outline
 */
export default function MagneticButton({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
}) {
  const ref = useMagnetic({ strength: 0.45, innerSelector: ".mag-label" });

  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-medium tracking-wide overflow-hidden transition-colors duration-300 will-change-transform";

  const variants = {
    primary:
      "text-white shadow-[0_10px_40px_-10px_rgba(217,70,239,0.6)] bg-[linear-gradient(110deg,#863bff,#d946ef,#ec4899)] bg-[length:200%_100%] hover:bg-[position:100%_0]",
    ghost:
      "text-white/90 border border-white/15 backdrop-blur-md hover:border-white/40 hover:bg-white/5",
  };

  const inner = (
    <span className="mag-label relative z-10 inline-flex items-center gap-2">
      {children}
    </span>
  );

  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a ref={ref} href={href} onClick={onClick} className={cls} data-cursor="hover">
        {inner}
      </a>
    );
  }

  return (
    <button ref={ref} onClick={onClick} className={cls} data-cursor="hover">
      {inner}
    </button>
  );
}
