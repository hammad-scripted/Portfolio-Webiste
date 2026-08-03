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
        className="flex flex-col items-center justify-center rounded-3xl bg-brand-50 p-10 text-center"
      >
        <CheckCircle2 className="h-16 w-16 text-brand-600" />
        <h3 className="mt-4 font-serif text-2xl font-bold text-brand-950">
          Message Sent!
        </h3>
        <p className="mt-2 text-brand-800/70">
          Thank you for reaching out. The doctor's team will get back to you
          shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full border-2 border-brand-600 px-6 py-2.5 text-sm font-semibold text-brand-700 hover:bg-brand-50"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  const field =
    "w-full rounded-xl border border-brand-200 bg-white px-4 py-3 text-brand-950 placeholder:text-brand-800/40 outline-none transition-all focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-brand-900">
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
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-brand-900">
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
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-brand-900">
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
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-brand-900">
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
        <div className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="h-5 w-5 shrink-0" />
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 disabled:opacity-60 sm:w-auto"
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
