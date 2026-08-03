/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONFIGURATION  —  EDIT EVERYTHING HERE
 * ─────────────────────────────────────────────────────────────
 *  Change the doctor's name, contact details, services, etc. in
 *  this one file. Placeholder values are marked with  // TODO
 *  Replace them with the real information when available.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  // ── Identity ──────────────────────────────────────────────
  doctorName: "Dr. Aarav Sharma", // TODO: real name
  credentials: "BAMS", // Bachelor of Ayurvedic Medicine and Surgery
  title: "General Physician & Ayurvedic Consultant",
  tagline: "Healing rooted in tradition, guided by science.",
  yearsExperience: 15,
  patientsTreated: "20,000+",
  clinicsFounded: 3,

  // ── Contact (PLACEHOLDERS — replace with real values) ─────
  email: "doctor@example.com", // TODO: real email
  // WhatsApp number in international format, digits only, no + or spaces.
  // Example for India: 919812345678  (91 = country code)
  whatsappNumber: "910000000000", // TODO: real WhatsApp number
  phoneDisplay: "+91 00000 00000", // TODO: real phone (display only)
  address: "123 Wellness Avenue, Green Park, New Delhi, India", // TODO
  mapEmbedQuery: "New Delhi, India", // used by the map iframe

  // ── Clinic hours ──────────────────────────────────────────
  hours: [
    { day: "Monday – Friday", time: "9:00 AM – 7:00 PM" },
    { day: "Saturday", time: "10:00 AM – 4:00 PM" },
    { day: "Sunday", time: "Closed (Emergencies only)" },
  ],

  // ── Social links (optional — set to "" to hide) ───────────
  social: {
    linkedin: "https://linkedin.com", // TODO
    instagram: "https://instagram.com", // TODO
    twitter: "", // leave empty to hide
    facebook: "https://facebook.com", // TODO
  },
} as const;

// Prefilled WhatsApp message
export const whatsappMessage = encodeURIComponent(
  `Hello ${site.doctorName}, I found your website and would like to book a consultation.`
);

export const whatsappLink = `https://wa.me/${site.whatsappNumber}?text=${whatsappMessage}`;
