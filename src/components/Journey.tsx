"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./Section";
import { timeline } from "@/config/content";

export function Journey() {
  return (
    <section id="journey" className="mx-auto max-w-5xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="The Journey"
        title={<>A Life Dedicated to <span className="text-gradient">Healing</span></>}
        subtitle="From medical school to building a wellness enterprise — a timeline of growth, service, and impact."
      />

      <div className="relative mt-16">
        {/* Center line */}
        <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-brand-300 via-brand-400 to-gold-400 md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-10">
          {timeline.map((t, i) => {
            const left = i % 2 === 0;
            return (
              <div
                key={t.year}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  left ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot + icon */}
                <div className="absolute left-4 top-1 z-10 -translate-x-1/2 md:left-1/2">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="grid h-9 w-9 place-items-center rounded-full border-4 border-cream bg-brand-600 text-white shadow-lg"
                  >
                    <t.icon className="h-4 w-4" />
                  </motion.span>
                </div>

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, x: left ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5 }}
                  className={`ml-12 w-full rounded-2xl border border-brand-100 bg-white p-6 shadow-sm md:ml-0 md:w-[calc(50%-2.5rem)] ${
                    left ? "md:mr-auto md:text-right" : "md:ml-auto"
                  }`}
                >
                  <span className="inline-block rounded-full bg-gold-400/20 px-3 py-1 text-xs font-bold text-gold-600">
                    {t.year}
                  </span>
                  <h3 className="mt-3 font-serif text-xl font-bold text-brand-950">
                    {t.title}
                  </h3>
                  <p className="text-sm font-semibold text-brand-600">
                    {t.org}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-brand-800/70">
                    {t.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
