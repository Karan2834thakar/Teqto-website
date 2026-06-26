import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "../animations/gsap";
import PageLayout from "../components/PageLayout";
import SplitReveal from "../components/ui/SplitReveal";
import Reveal from "../components/ui/Reveal";

const contactInfo = [
  { label: "Visit our office", value: "619 - RK Prime, 6th Floor, 150ft Ring Road, Nana Mava Circle, Rajkot - 360005, Gujarat, India." },
  { label: "Email us", value: "info@teqtoinfotech.com" },
  { label: "Working hours", value: "Mon – Fri: 10 AM to 7:30 PM" },
];

export default function Contact() {
  const formRef = useRef(null);
  const [sent, setSent] = useState(false);

  useGSAP(() => {
    if (prefersReducedMotion) return;
    gsap.from(".contact-info-item", {
      x: -40, autoAlpha: 0, duration: 1, stagger: 0.15, ease: "power4.out",
      scrollTrigger: { trigger: formRef.current, start: "top 80%" },
    });
  }, { scope: formRef });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <PageLayout>
      <section className="shell py-20">
        <Reveal className="mb-6">
          <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-brand-fuchsia/80">
            <span className="h-px w-8 bg-brand-fuchsia/60" />
            Contact Us
          </span>
        </Reveal>
        <SplitReveal
          as="h1"
          className="font-display text-[clamp(2.4rem,7vw,6.5rem)] font-bold leading-none tracking-tight text-white max-w-4xl"
        >
          Get In Touch
        </SplitReveal>
        <Reveal className="mt-6 max-w-lg">
          <p className="text-lg font-light leading-relaxed text-white/55">
            We're here to help. Tell us how we can assist and we'll be in touch within 24 hours.
          </p>
        </Reveal>
      </section>

      <section ref={formRef} className="shell pb-24 md:pb-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.5fr]">
          {/* Info */}
          <div className="space-y-10">
            {contactInfo.map((item) => (
              <div key={item.label} className="contact-info-item" style={{ visibility: "hidden" }}>
                <div className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-brand-fuchsia/80">{item.label}</div>
                <p className="text-base font-light leading-relaxed text-white/70">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Form */}
          <Reveal>
            {sent ? (
              <div className="flex h-full items-center justify-center rounded-2xl border border-brand-fuchsia/30 bg-brand-fuchsia/5 p-16 text-center">
                <div>
                  <div className="mb-4 text-4xl">✓</div>
                  <h3 className="text-2xl font-medium text-white">Message sent!</h3>
                  <p className="mt-2 text-white/50">We'll get back to you within 24 hours.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
                {[
                  { name: "name", label: "Full Name", type: "text" },
                  { name: "email", label: "Email Address", type: "email" },
                  { name: "phone", label: "Phone Number", type: "tel" },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-white/50">{f.label}</label>
                    <input
                      type={f.type}
                      required={f.name !== "phone"}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-colors focus:border-brand-fuchsia/50"
                      placeholder={f.label}
                    />
                  </div>
                ))}
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-white/50">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-colors focus:border-brand-fuchsia/50 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-[linear-gradient(110deg,#863bff,#d946ef,#ec4899)] py-4 text-sm font-medium text-white shadow-[0_10px_40px_-10px_rgba(217,70,239,0.6)] transition-opacity hover:opacity-90"
                >
                  Send Message
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}