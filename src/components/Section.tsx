import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/** A page section with a centered, animated editorial heading + eyebrow label. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Reveal>
        <span className="eyebrow eyebrow--center justify-center">{eyebrow}</span>
      </Reveal>
      <Reveal delay={1}>
        <h2
          className={`mt-6 font-serif text-4xl font-light leading-[1.08] tracking-tight sm:text-5xl md:text-6xl ${
            light ? "text-ivory" : "text-brand-950"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={2}>
          <p
            className={`mx-auto mt-6 max-w-xl text-base leading-relaxed sm:text-lg ${
              light ? "text-brand-100/70" : "text-brand-800/70"
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
