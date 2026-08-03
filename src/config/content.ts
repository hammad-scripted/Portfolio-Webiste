import {
  Stethoscope,
  Leaf,
  HeartPulse,
  Baby,
  Bone,
  Activity,
  Brain,
  ShieldCheck,
  Briefcase,
  Building2,
  GraduationCap,
  Award,
  type LucideIcon,
} from "lucide-react";

/* ── Services offered ──────────────────────────────────────── */
export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Stethoscope,
    title: "General Consultation",
    description:
      "Comprehensive health check-ups, diagnosis, and treatment for everyday illnesses — fever, infections, fatigue, and more.",
  },
  {
    icon: Leaf,
    title: "Ayurvedic Medicine",
    description:
      "Time-tested Ayurvedic therapies and herbal formulations tailored to restore your body's natural balance.",
  },
  {
    icon: HeartPulse,
    title: "Chronic Disease Care",
    description:
      "Long-term management of diabetes, hypertension, thyroid, and lifestyle disorders with a holistic approach.",
  },
  {
    icon: Activity,
    title: "Lifestyle & Diet Planning",
    description:
      "Personalised diet, yoga, and lifestyle guidance rooted in Ayurvedic principles for lasting wellness.",
  },
  {
    icon: Baby,
    title: "Family & Child Health",
    description:
      "Preventive and curative care for the whole family, from children to elders, under one trusted roof.",
  },
  {
    icon: Brain,
    title: "Stress & Wellness",
    description:
      "Panchakarma, meditation, and stress-relief programs designed to calm the mind and rejuvenate the body.",
  },
  {
    icon: Bone,
    title: "Joint & Pain Relief",
    description:
      "Natural, non-invasive treatments for arthritis, back pain, and joint stiffness through Ayurvedic therapy.",
  },
  {
    icon: ShieldCheck,
    title: "Preventive Health",
    description:
      "Immunity-building programs and seasonal detox to keep you healthy before illness ever begins.",
  },
];

/* ── Timeline / journey ────────────────────────────────────── */
export interface TimelineItem {
  year: string;
  title: string;
  org: string;
  description: string;
  icon: LucideIcon;
}

export const timeline: TimelineItem[] = [
  {
    year: "2009",
    title: "BAMS Graduate",
    org: "National Institute of Ayurveda",
    description:
      "Completed Bachelor of Ayurvedic Medicine and Surgery with distinction, blending classical texts with modern clinical training.",
    icon: GraduationCap,
  },
  {
    year: "2012",
    title: "Clinical Practice",
    org: "City General Hospital",
    description:
      "Served thousands of patients as a general physician, building a reputation for compassionate, effective care.",
    icon: Stethoscope,
  },
  {
    year: "2016",
    title: "Founded First Clinic",
    org: "AyurLife Wellness Center",
    description:
      "Opened the first of three wellness centers, integrating Ayurvedic treatment with modern diagnostics.",
    icon: Building2,
  },
  {
    year: "2020",
    title: "Health Entrepreneur",
    org: "AyurLife Group",
    description:
      "Expanded into a wellness enterprise — herbal product lines, telemedicine, and community health programs.",
    icon: Briefcase,
  },
  {
    year: "2024",
    title: "Recognised Leader",
    org: "State Health Council",
    description:
      "Honoured for contributions to accessible, integrative healthcare across the region.",
    icon: Award,
  },
];

/* ── Business ventures ─────────────────────────────────────── */
export interface Venture {
  icon: LucideIcon;
  name: string;
  role: string;
  description: string;
}

export const ventures: Venture[] = [
  {
    icon: Building2,
    name: "AyurLife Wellness Centers",
    role: "Founder & Chief Physician",
    description:
      "A growing network of integrative clinics delivering Ayurvedic and general care to over 20,000 patients.",
  },
  {
    icon: Leaf,
    name: "AyurLife Herbals",
    role: "Founder",
    description:
      "A line of ethically-sourced herbal supplements and wellness products, trusted by families nationwide.",
  },
  {
    icon: Activity,
    name: "WellConnect Telemedicine",
    role: "Co-Founder",
    description:
      "A digital platform bringing affordable, expert consultation to patients in remote and underserved areas.",
  },
];

/* ── Testimonials ──────────────────────────────────────────── */
export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Priya Menon",
    role: "Patient, 3 years",
    quote:
      "After years of struggling with migraines, the doctor's Ayurvedic approach finally gave me relief. Truly life-changing care.",
  },
  {
    name: "Rahul Verma",
    role: "Patient",
    quote:
      "Warm, patient, and incredibly knowledgeable. He treats you like family and never rushes an appointment.",
  },
  {
    name: "Anita Desai",
    role: "Patient's Daughter",
    quote:
      "He managed my father's diabetes with such care and clarity. The whole family now trusts him with our health.",
  },
  {
    name: "Sanjay Gupta",
    role: "Business Partner",
    quote:
      "A rare blend of a healer and a visionary entrepreneur. His wellness centers have transformed our community.",
  },
];

/* ── Stats ─────────────────────────────────────────────────── */
export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: "15+", label: "Years of Experience" },
  { value: "20,000+", label: "Patients Treated" },
  { value: "3", label: "Wellness Centers" },
  { value: "98%", label: "Patient Satisfaction" },
];
