# Dr. Portfolio — Modern Doctor & Entrepreneur Website

A modern, animated, fully responsive portfolio website built with **Next.js 15**,
**Tailwind CSS v4**, and **Framer Motion** — for a BAMS general physician who is
also a healthcare entrepreneur.

## ✨ Features

- Animated hero with floating cards & gradient blobs
- Scroll-reveal animations throughout
- Animated count-up stats
- Services grid, journey timeline, business ventures, testimonial marquee
- **Contact form** (serverless API route) + **email** & **WhatsApp** buttons
- Floating WhatsApp button with pulse effect
- Fully responsive (mobile → desktop) with a mobile nav menu
- SEO metadata, accessible, respects reduced-motion

## 🚀 Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## ✏️ Customising

**Everything you need to edit lives in two files:**

| File | What's inside |
|------|---------------|
| `src/config/site.ts` | Name, credentials, **email**, **WhatsApp number**, phone, address, hours, social links |
| `src/config/content.ts` | Services, timeline, business ventures, testimonials, stats |

> ⚠️ Placeholder values are marked with `// TODO`. Replace the email
> (`doctor@example.com`), WhatsApp number (`910000000000`), and phone before
> going live.

### WhatsApp number format
International format, digits only — no `+` or spaces.
Example (India): `919812345678` (`91` = country code).

### Images
All images are Unsplash placeholders. Swap the `src` URLs in
`Hero.tsx` and `About.tsx`, or drop your own into `/public` and reference
them like `/doctor.jpg`.

### Making the contact form send real emails
The form works out of the box (it validates + logs on the server). To deliver
actual emails, open `src/app/api/contact/route.ts` and follow the numbered
steps at the top (uses [Resend](https://resend.com), free tier).

## 🏗️ Build for production

```bash
npm run build
npm run start
```

Deploy easily on [Vercel](https://vercel.com) — push to GitHub and import.

## 🛠️ Tech

Next.js 15 (App Router) · React 19 · Tailwind CSS v4 · Framer Motion · lucide-react
