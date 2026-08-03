"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./Section";
import { services } from "@/config/content";

export function Services() {
  return (
    <section
      id="services"
      className="relative bg-gradient-to-b from-brand-50 to-cream py-24 sm:py-32"
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
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-brand-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-brand-900/10"
            >
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-gold-400 transition-transform duration-300 group-hover:scale-x-100" />
              <span className="grid h-14 w-14 place-items-center rounded-xl bg-brand-100 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <s.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-serif text-lg font-bold text-brand-950">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-800/70">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
