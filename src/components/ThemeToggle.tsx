"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

/**
 * Dark / light theme toggle.
 * Reads & writes `localStorage.theme` and toggles the `.dark` class on <html>.
 * The initial class is set by an inline script in layout.tsx (no flash).
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    const root = document.documentElement;
    root.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* ignore */
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle theme"
      className={`relative grid h-10 w-10 place-items-center rounded-full border border-brand-300 text-brand-700 transition-colors hover:border-gold-500 hover:text-gold-600 dark:border-brand-700 dark:text-gold-300 dark:hover:border-gold-400 ${className}`}
    >
      {/* Avoid rendering an icon until mounted so SSR & client agree */}
      <AnimatePresence mode="wait" initial={false}>
        {mounted && (
          <motion.span
            key={isDark ? "moon" : "sun"}
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.25 }}
            className="absolute"
          >
            {isDark ? (
              <Moon className="h-5 w-5" strokeWidth={1.75} />
            ) : (
              <Sun className="h-5 w-5" strokeWidth={1.75} />
            )}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
