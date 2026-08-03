import { Leaf, Linkedin, Instagram, Twitter, Facebook, Mail } from "lucide-react";
import { site } from "@/config/site";
import { WhatsAppIcon } from "./icons";
import { whatsappLink } from "@/config/site";

const nav = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#journey", label: "Journey" },
  { href: "#business", label: "Business" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const socials = [
    { href: site.social.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: site.social.instagram, icon: Instagram, label: "Instagram" },
    { href: site.social.twitter, icon: Twitter, label: "Twitter" },
    { href: site.social.facebook, icon: Facebook, label: "Facebook" },
  ].filter((s) => s.href);

  return (
    <footer className="bg-brand-950 text-brand-100">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-gold-400/60 text-gold-300">
                <Leaf className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <span className="font-serif text-xl font-medium text-ivory">
                {site.doctorName}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-100/60">
              {site.title}. {site.tagline}
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
              Explore
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-brand-100/60 transition-colors hover:text-gold-400"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + social */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
              Connect
            </h4>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-sm text-brand-100/60 transition-colors hover:text-gold-400"
              >
                <Mail className="h-4 w-4" />
                {site.email}
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-brand-100/60 transition-colors hover:text-gold-400"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
            </div>

            {socials.length > 0 && (
              <div className="mt-5 flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-full bg-brand-800 text-brand-100 transition-colors hover:bg-brand-600 hover:text-white"
                  >
                    <s.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-brand-800 pt-8 sm:flex-row">
          <p className="text-sm text-brand-100/50">
            © {new Date().getFullYear()} {site.doctorName}. All rights reserved.
          </p>
          <p className="text-xs text-brand-100/40">
            Disclaimer: This website is for informational purposes and does not
            replace professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
