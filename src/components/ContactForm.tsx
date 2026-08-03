"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-2xl bg-brand-50 p-10 text-center dark:bg-night/50"
      >
        <CheckCircle2
          className="h-16 w-16 text-brand-600 dark:text-gold-300"
          strokeWidth={1.25}
        />
        <h3 className="mt-5 font-serif text-3xl font-light text-brand-950 dark:text-ivory">
          Message Sent
        </h3>
        <p className="mt-3 text-brand-800/70 dark:text-brand-100/60">
          Thank you for reaching out. The doctor's team will get back to you
          shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-7 rounded-full border border-brand-300 px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-brand-700 hover:border-brand-600 hover:bg-white dark:border-brand-700 dark:text-brand-100 dark:hover:border-gold-400 dark:hover:bg-ink-soft"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  const field =
    "w-full rounded-xl border border-brand-200 bg-cream/60 px-4 py-3 text-brand-950 placeholder:text-brand-800/40 outline-none transition-all focus:border-gold-400 focus:bg-ivory focus:ring-4 focus:ring-gold-400/15 dark:border-brand-700 dark:bg-night/50 dark:text-ivory dark:placeholder:text-brand-100/30 dark:focus:bg-night";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-brand-800 dark:text-brand-100/70">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            required
            placeholder="Your name"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-brand-800 dark:text-brand-100/70">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Your phone number"
            className={field}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-brand-800 dark:text-brand-100/70">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className={field}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-brand-800 dark:text-brand-100/70">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="How can the doctor help you?"
          className={`${field} resize-none`}
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-950/40 dark:text-red-300">
          <AlertCircle className="h-5 w-5 shrink-0" />
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-700 px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-ivory shadow-lg shadow-brand-900/15 transition-all hover:bg-brand-800 disabled:opacity-60 dark:bg-gold-500 dark:text-night dark:hover:bg-gold-400 sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
