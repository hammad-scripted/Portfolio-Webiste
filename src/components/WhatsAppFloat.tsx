"use client";

import { motion } from "framer-motion";
import { whatsappLink } from "@/config/site";
import { WhatsAppIcon } from "./icons";

export function WhatsAppFloat() {
  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-600/30"
    >
      {/* Pulsing ring */}
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-40" />
      <WhatsAppIcon className="relative h-7 w-7" />
    </motion.a>
  );
}
