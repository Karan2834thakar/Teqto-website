import { Link } from "react-router-dom";

/**
 * Pill link used at the foot of each home highlight section to route to the
 * full dedicated page (no `#` anchors).
 */
export default function PageCTA({ to, children, className = "" }) {
  return (
    <Link
      to={to}
      data-cursor="hover"
      className={`group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/90 transition-colors hover:border-brand-fuchsia/50 hover:bg-white/5 hover:text-white ${className}`}
    >
      {children}
      <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
    </Link>
  );
}
