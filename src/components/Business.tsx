"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./Section";
import { ventures } from "@/config/content";

export function Business() {
  return (
    <section
      id="business"
      className="relative overflow-hidden bg-brand-950 py-24 sm:py-32"
    >
      {/* Decorative glow */}
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow eyebrow--center justify-center">
            The Entrepreneur
          </span>
          <h2 className="mt-6 font-serif text-4xl font-light leading-[1.08] tracking-tight text-ivory sm:text-5xl md:text-6xl">
            Building a healthier{" "}
            <span className="text-gradient italic">tomorrow.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-brand-100/70 sm:text-lg">
            Beyond medicine, a portfolio of ventures making holistic wellness
            accessible, affordable, and trusted across communities.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {ventures.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group relative rounded-2xl border border-brand-800 bg-brand-900/50 p-8 backdrop-blur transition-colors hover:border-gold-400/50"
            >
              <ArrowUpRight className="absolute right-6 top-6 h-5 w-5 text-brand-500 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold-400" />
              <span className="grid h-14 w-14 place-items-center rounded-full border border-gold-400/40 text-gold-300">
                <v.icon className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <h3 className="mt-6 font-serif text-xl font-normal text-ivory">
                {v.name}
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-gold-400">
                {v.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-brand-100/60">
                {v.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
