import logo from "../../assets/favicon.png";
import { brand } from "../../config/brand";

/**
 * Brand lockup: network-globe mark + wordmark. `glow` adds the signature
 * pink/purple halo behind the mark (used in hero/intro).
 */
export default function Logo({
  showWord = true,
  glow = false,
  imgClassName = "w-9",
  className = "",
}) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className="relative inline-flex">
        {glow && (
          <span className="absolute inset-0 -z-10 scale-150 rounded-full bg-brand-fuchsia/40 blur-2xl" />
        )}
        <img src={logo} alt={`${brand.name} ${brand.suffix} logo`} className={imgClassName} />
      </span>
      {showWord && (
        <span className="font-display text-lg font-semibold leading-none tracking-tight text-white">
          {brand.name}
          <span className="text-brand-fuchsia">.</span>
        </span>
      )}
    </span>
  );
}
