"use client";

import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";


export default function FloatingContactButtons() {
  return (
    <>
      {/* WhatsApp Button (Left) */}
      <motion.a
        href="https://wa.me/918956567130"
        target="_blank"
        rel="noopener noreferrer"
        className="
          fixed bottom-6 left-4 z-50
          flex items-center justify-center
          h-14 w-14 rounded-full
          bg-[#25D366] text-white
          shadow-lg
          md:h-16 md:w-16
        "
        aria-label="Chat on WhatsApp"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="flex items-center justify-center"
          whileHover={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 0.3 }}
        >
          <FaWhatsapp className="text-white text-3xl md:text-4xl" />
        </motion.div>
      </motion.a>


      {/* Call Button (Right) */}
      <motion.a
        href="tel:+918956567130"
        className="
          fixed bottom-6 right-4 z-50
          flex items-center justify-center
          h-14 w-14 rounded-full
          bg-[#E11D48] text-white
          shadow-lg
          md:h-16 md:w-16
        "
        aria-label="Call Us"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="flex items-center justify-center"
          whileHover={{ rotate: [0, 10, -10, 0], color: "#ffffff" }}
          transition={{ duration: 0.3 }}
        >
          <Phone size={26} className="text-white hover:text-yellow-300 transition-colors duration-300" />
        </motion.div>
      </motion.a>
    </>
  );
}
