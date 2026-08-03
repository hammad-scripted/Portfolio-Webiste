"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Star, ShieldCheck } from "lucide-react";
import { site, whatsappLink } from "@/config/site";
import { WhatsAppIcon } from "./icons";

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function Hero() {
  return (
    <section
      id="home"
      className="paper-grain relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* Decorative animated blobs — soft, refined */}
      <motion.div
        aria-hidden
        className="absolute -left-40 top-16 h-[30rem] w-[30rem] rounded-full bg-brand-200/45 blur-3xl"
        animate={{ scale: [1, 1.12, 1], x: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-40 bottom-0 h-[32rem] w-[32rem] rounded-full bg-gold-200/50 blur-3xl"
        animate={{ scale: [1, 1.18, 1], y: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        {/* Left — text */}
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div variants={item}>
            <span className="eyebrow">
              {site.credentials} · Est. {2024 - site.yearsExperience}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-7 font-serif text-5xl font-light leading-[1.02] tracking-tight text-brand-950 sm:text-6xl lg:text-7xl"
          >
            Healing,
            <br />
            <span className="text-gradient italic">reimagined.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-brand-700"
          >
            <ShieldCheck className="h-4 w-4 text-gold-500" />
            {site.title}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 max-w-lg text-base leading-relaxed text-brand-800/70 sm:text-lg"
          >
            {site.tagline} For over {site.yearsExperience} years,{" "}
            {site.doctorName} has blended authentic Ayurvedic wisdom with modern
            medicine — helping you live a healthier, more balanced life.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-700 px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-ivory shadow-xl shadow-brand-900/15 transition-all hover:bg-brand-800"
            >
              <Mail className="h-4 w-4" />
              Send a Message
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-brand-300 px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-brand-700 transition-all hover:border-brand-600 hover:bg-white/50"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </motion.div>

          {/* Mini rating */}
          <motion.div
            variants={item}
            className="mt-10 flex items-center gap-4 border-t border-brand-200/70 pt-7"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <p className="text-sm text-brand-800/70">
              <span className="font-semibold text-brand-900">4.9 / 5</span> —
              from {site.patientsTreated} patients
            </p>
          </motion.div>
        </motion.div>

        {/* Right — portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* Thin gold frame offset behind the portrait */}
          <div className="absolute -inset-3 rounded-[2.2rem] border border-gold-400/50" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-brand-900/25 ring-1 ring-brand-900/5">
            <Image
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80"
              alt={`Portrait of ${site.doctorName}`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 400px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/25 to-transparent" />
          </div>

          {/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="glass absolute -bottom-6 -left-6 rounded-2xl px-5 py-4 shadow-xl"
          >
            <p className="font-serif text-4xl font-light text-brand-700">
              {site.yearsExperience}+
            </p>
            <p className="mt-1 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-brand-800/60">
              Years of Care
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -right-4 top-8 rounded-2xl px-5 py-4 shadow-xl"
          >
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-brand-800/60">
              Patients
            </p>
            <p className="font-serif text-2xl font-light text-brand-700">
              {site.patientsTreated}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
