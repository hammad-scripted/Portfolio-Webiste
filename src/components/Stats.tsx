"use client";

import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/config/content";

/** Counts up to a numeric target when scrolled into view. */
function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  // Split into leading number + suffix (e.g. "20,000+" -> 20000 + "+")
  const numeric = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9,]/g, "");

  const mv = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, numeric, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v).toLocaleString()),
    });
    return controls.stop;
  }, [inView, numeric, mv]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative z-10 mx-auto -mt-8 max-w-6xl px-5 sm:px-8">
      <div className="grid grid-cols-2 gap-4 rounded-3xl bg-brand-800 p-6 shadow-2xl shadow-brand-900/30 sm:p-10 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <p className="font-serif text-3xl font-bold text-gold-400 sm:text-4xl">
              <Counter value={s.value} />
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-brand-100/80 sm:text-sm">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
