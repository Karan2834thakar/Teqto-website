import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Glassmorphism detail card for a single service. Pass the active service
 * object (or `null` when closed) and an `onClose` handler. Shared by the
 * Services page and the home Services section so they stay in sync.
 */
export default function ServiceModal({ active, onClose }) {
  useEffect(() => {
    if (!active) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [active, onClose]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" />

          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[88vh] w-full max-w-[640px] overflow-y-auto rounded-3xl border border-white/10 bg-ink-soft/90 p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] backdrop-blur-2xl sm:p-8 md:p-10"
          >
            {/* Soft brand glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand-fuchsia/20 blur-[90px]" />

            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              data-cursor="hover"
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              ✕
            </button>

            <div className="relative">
              <span className="font-display text-sm text-brand-fuchsia/70">{active.number}</span>
              <h3 className="mt-2 max-w-[calc(100%-2.5rem)] font-display text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
                {active.title}
              </h3>
              <p className="mt-4 text-sm font-light leading-relaxed text-white/55 md:text-base">
                {active.description}
              </p>

              {active.points?.length > 0 && (
                <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {active.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-white/70">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-r from-brand-purple to-brand-fuchsia" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-7 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                {active.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                to="/contact"
                onClick={onClose}
                data-cursor="hover"
                className="mt-8 inline-flex rounded-full bg-[linear-gradient(110deg,#863bff,#d946ef,#ec4899)] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Start a project
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
