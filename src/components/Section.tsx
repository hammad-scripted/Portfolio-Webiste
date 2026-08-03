import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/** A page section with a centered, animated heading + eyebrow label. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Reveal>
        <span className="inline-block rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-700">
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={1}>
        <h2 className="mt-5 font-serif text-3xl font-bold text-brand-950 sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={2}>
          <p className="mt-4 text-base leading-relaxed text-brand-800/70 sm:text-lg">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
