"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { SectionHeading } from "./Section";
import { testimonials } from "@/config/content";

export function Testimonials() {
  // Duplicate for a seamless marquee
  const row = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Kind Words"
          title={<>Loved by <span className="text-gradient">Patients</span></>}
          subtitle="Real stories from the people whose lives have been touched by compassionate, holistic care."
        />
      </div>

      {/* Marquee */}
      <div className="group relative mt-16 overflow-hidden">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-cream to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-cream to-transparent" />

        <div className="flex w-max gap-6 animate-marquee group-hover:[animation-play-state:paused]">
          {row.map((t, i) => (
            <figure
              key={i}
              className="w-80 shrink-0 rounded-2xl border border-brand-200/70 bg-ivory p-8 shadow-sm"
            >
              <Quote className="h-9 w-9 fill-gold-300/50 text-gold-300/50" />
              <blockquote className="mt-4 font-serif text-lg font-light italic leading-relaxed text-brand-900">
                “{t.quote}”
              </blockquote>
              <div className="mt-5 flex gap-0.5">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-brand-200/70 pt-5">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-gold-400/50 font-serif text-lg font-light text-brand-700">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-brand-950">
                    {t.name}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-brand-800/60">
                    {t.role}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
