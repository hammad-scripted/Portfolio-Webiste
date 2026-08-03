"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./Section";
import { services } from "@/config/content";

export function Services() {
  return (
    <section
      id="services"
      className="paper-grain relative bg-gradient-to-b from-brand-50 to-cream py-24 dark:from-ink dark:to-night sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What I Offer"
          title={<>Comprehensive Care, <span className="text-gradient">Naturally</span></>}
          subtitle="From everyday ailments to chronic conditions, every treatment is tailored to you — combining Ayurvedic tradition with modern medical insight."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-brand-200/70 bg-ivory p-7 transition-all hover:border-gold-400/60 hover:shadow-xl hover:shadow-brand-900/10 dark:border-brand-800 dark:bg-ink-soft dark:hover:border-gold-400/50"
            >
              <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gold-500 transition-transform duration-300 group-hover:scale-x-100" />
              <span className="grid h-14 w-14 place-items-center rounded-full border border-brand-200 text-brand-600 transition-colors group-hover:border-gold-400 group-hover:text-gold-600 dark:border-brand-700 dark:text-gold-300 dark:group-hover:border-gold-400">
                <s.icon className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <h3 className="mt-6 font-serif text-xl font-normal text-brand-950 dark:text-ivory">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-800/70 dark:text-brand-100/60">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
