"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { SectionHeading } from "./Section";
import { ContactForm } from "./ContactForm";
import { WhatsAppIcon } from "./icons";
import { site, whatsappLink } from "@/config/site";

export function Contact() {
  return (
    <section
      id="contact"
      className="paper-grain relative bg-gradient-to-b from-cream to-brand-50 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Get in Touch"
          title={<>Book Your <span className="text-gradient">Consultation</span></>}
          subtitle="Have a question or ready to start your wellness journey? Send a message or reach out on WhatsApp — we'd love to hear from you."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <a
              href={`mailto:${site.email}`}
              className="flex items-start gap-4 rounded-2xl border border-brand-200/70 bg-ivory p-5 transition-all hover:border-gold-400/60 hover:shadow-md"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-brand-200 text-brand-600">
                <Mail className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <div>
                <p className="text-sm font-semibold text-brand-950">Email</p>
                <p className="text-sm text-brand-800/70 break-all">
                  {site.email}
                </p>
              </div>
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-2xl border border-brand-200/70 bg-ivory p-5 transition-all hover:border-gold-400/60 hover:shadow-md"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-green-200 text-green-600">
                <WhatsAppIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-brand-950">WhatsApp</p>
                <p className="text-sm text-brand-800/70">
                  Chat with us instantly
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-2xl border border-brand-200/70 bg-ivory p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-brand-200 text-brand-600">
                <Phone className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <div>
                <p className="text-sm font-semibold text-brand-950">Phone</p>
                <p className="text-sm text-brand-800/70">{site.phoneDisplay}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-brand-200/70 bg-ivory p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-brand-200 text-brand-600">
                <MapPin className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <div>
                <p className="text-sm font-semibold text-brand-950">Clinic</p>
                <p className="text-sm text-brand-800/70">{site.address}</p>
              </div>
            </div>

            {/* Hours */}
            <div className="rounded-2xl border border-brand-200/70 bg-ivory p-5">
              <div className="flex items-center gap-2 text-brand-950">
                <Clock className="h-5 w-5 text-brand-600" />
                <p className="text-sm font-semibold">Clinic Hours</p>
              </div>
              <ul className="mt-3 space-y-1.5">
                {site.hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex justify-between text-sm text-brand-800/70"
                  >
                    <span>{h.day}</span>
                    <span className="font-medium text-brand-900">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 rounded-2xl border border-brand-200/70 bg-ivory p-6 shadow-xl shadow-brand-900/5 sm:p-8"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
