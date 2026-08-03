"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";
import { site } from "@/config/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#journey", label: "Journey" },
  { href: "#business", label: "Business" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-brand-900/5" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-gold-400/60 text-brand-600 transition-all group-hover:border-gold-500 group-hover:text-brand-700">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="font-serif text-xl font-medium tracking-tight text-brand-950">
            {site.doctorName}
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-2 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative px-3 py-2 text-[0.8rem] font-medium uppercase tracking-widest text-brand-900/80 transition-colors hover:text-brand-700"
              >
                {l.label}
                <span className="absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-gold-500 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="ml-3 rounded-full border border-brand-600 bg-brand-600 px-6 py-2.5 text-[0.8rem] font-semibold uppercase tracking-widest text-ivory shadow-lg shadow-brand-900/10 transition-all hover:bg-transparent hover:text-brand-700"
            >
              Book Now
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-brand-900 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden glass lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 pb-6 pt-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm font-medium uppercase tracking-widest text-brand-900 hover:bg-brand-100"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 block rounded-full bg-brand-600 px-5 py-3 text-center text-sm font-semibold uppercase tracking-widest text-ivory"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
