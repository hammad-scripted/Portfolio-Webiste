"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { site } from "@/config/site";

const highlights = [
  "Personalised, patient-first treatment plans",
  "Integrative approach — Ayurveda meets modern medicine",
  "Transparent guidance and honest advice",
  "Care for the whole family, all ages",
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        {/* Images */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] shadow-2xl shadow-brand-900/15 ring-1 ring-brand-900/5"
          >
            <Image
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80"
              alt="Doctor consulting with a patient"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 500px"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute -bottom-8 -right-4 hidden aspect-square w-44 overflow-hidden rounded-2xl border-4 border-ivory shadow-xl ring-1 ring-gold-400/40 dark:border-ink sm:block"
          >
            <Image
              src="https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=400&q=80"
              alt="Ayurvedic herbs and medicine"
              fill
              className="object-cover"
              sizes="176px"
            />
          </motion.div>
        </div>

        {/* Text */}
        <div>
          <Reveal>
            <span className="eyebrow">About the Doctor</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-6 font-serif text-4xl font-light leading-[1.1] tracking-tight text-brand-950 dark:text-ivory sm:text-5xl">
              A healer, a mentor,
              <br />
              <span className="italic text-gradient">an entrepreneur.</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-5 text-base leading-relaxed text-brand-800/75 dark:text-brand-100/65">
              {site.doctorName} is a {site.credentials}-qualified general
              physician with more than {site.yearsExperience} years of dedicated
              practice. Rooted in the timeless principles of Ayurveda and
              equipped with modern clinical expertise, the doctor has helped over{" "}
              {site.patientsTreated} patients reclaim their health and vitality.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <p className="mt-4 text-base leading-relaxed text-brand-800/75 dark:text-brand-100/65">
              Beyond the clinic, the doctor is a passionate healthcare
              entrepreneur — founding {site.clinicsFounded} wellness centers and
              building ventures that make quality, holistic care accessible to
              everyone.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((h, i) => (
              <Reveal key={h} delay={4 + i}>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-gold-400 text-gold-600">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-medium text-brand-900 dark:text-brand-100">
                    {h}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
