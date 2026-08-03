"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Star, ShieldCheck } from "lucide-react";
import { site, whatsappLink } from "@/config/site";
import { WhatsAppIcon } from "./icons";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* Decorative animated blobs */}
      <motion.div
        aria-hidden
        className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-brand-300/40 blur-3xl"
        animate={{ scale: [1, 1.15, 1], x: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-32 bottom-10 h-[28rem] w-[28rem] rounded-full bg-gold-300/40 blur-3xl"
        animate={{ scale: [1, 1.2, 1], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        {/* Left — text */}
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-2 text-sm font-medium text-brand-700 shadow-sm"
          >
            <ShieldCheck className="h-4 w-4" />
            {site.credentials} • Trusted since {2024 - site.yearsExperience}
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-serif text-4xl font-bold leading-[1.1] text-brand-950 sm:text-5xl lg:text-6xl"
          >
            Meet <span className="text-gradient">{site.doctorName}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-lg font-medium text-brand-800"
          >
            {site.title}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 max-w-xl text-base leading-relaxed text-brand-800/70 sm:text-lg"
          >
            {site.tagline} With over {site.yearsExperience} years of experience,
            I blend authentic Ayurvedic wisdom with modern medicine to help you
            live a healthier, more balanced life.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 font-semibold text-white shadow-xl shadow-brand-600/25 transition-all hover:bg-brand-700 hover:shadow-brand-600/40"
            >
              <Mail className="h-5 w-5" />
              Send a Message
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand-600 bg-white px-7 py-3.5 font-semibold text-brand-700 transition-all hover:bg-brand-50"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp
            </a>
          </motion.div>

          {/* Mini rating */}
          <motion.div variants={item} className="mt-8 flex items-center gap-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-gold-400 text-gold-400"
                />
              ))}
            </div>
            <p className="text-sm text-brand-800/70">
              <span className="font-semibold text-brand-900">4.9/5</span> from{" "}
              {site.patientsTreated} happy patients
            </p>
          </motion.div>
        </motion.div>

        {/* Right — portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-brand-900/20 ring-1 ring-brand-900/5">
            <Image
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80"
              alt={`Portrait of ${site.doctorName}`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 400px"
            />
          </div>

          {/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="glass absolute -bottom-6 -left-6 rounded-2xl p-4 shadow-xl"
          >
            <p className="font-serif text-3xl font-bold text-brand-700">
              {site.yearsExperience}+
            </p>
            <p className="text-xs font-medium text-brand-800/70">
              Years of Care
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -right-4 top-8 rounded-2xl px-4 py-3 shadow-xl"
          >
            <p className="text-xs font-medium text-brand-800/70">Patients</p>
            <p className="font-serif text-xl font-bold text-brand-700">
              {site.patientsTreated}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
