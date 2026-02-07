"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingContactButtons() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("home"); // Hero section ID
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // If Hero is NOT visible, show buttons
        setShow(!entry.isIntersecting);
      },
      { threshold: 0 } // Trigger when any part of Hero leaves viewport
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  if (!show) return null; // Hide buttons while Hero is visible

  return (
    <>
      {/* WhatsApp Button (Left) */}
      <div className="group fixed bottom-6 left-4 z-50">
        {/* Waves */}
        <span className="absolute inset-0 rounded-full bg-green-400/30 animate-[ping_2.8s_ease-in-out_infinite] group-hover:animate-none" />
        <span className="absolute inset-0 rounded-full bg-green-500/20 animate-[ping_2.8s_ease-in-out_infinite] [animation-delay:0.9s] group-hover:animate-none" />
        <span className="absolute inset-0 rounded-full bg-emerald-500/15 animate-[ping_2.8s_ease-in-out_infinite] [animation-delay:1.8s] group-hover:animate-none" />

        <motion.a
          href="https://wa.me/918956567130"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center h-14 w-14 md:h-16 md:w-16 rounded-full bg-[#25D366] text-white shadow-lg"
          aria-label="Chat on WhatsApp"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div whileHover={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 0.3 }}>
            <FaWhatsapp className="text-3xl md:text-4xl" />
          </motion.div>
        </motion.a>
      </div>

      {/* Call Button (Right) */}
      <div className="group fixed bottom-6 right-4 z-50">
        {/* Waves */}
        <span className="absolute inset-0 rounded-full bg-rose-400/30 animate-[ping_2.8s_ease-in-out_infinite] group-hover:animate-none" />
        <span className="absolute inset-0 rounded-full bg-red-500/20 animate-[ping_2.8s_ease-in-out_infinite] [animation-delay:0.9s] group-hover:animate-none" />
        <span className="absolute inset-0 rounded-full bg-pink-500/15 animate-[ping_2.8s_ease-in-out_infinite] [animation-delay:1.8s] group-hover:animate-none" />

        <motion.a
          href="tel:+918956567130"
          className="relative flex items-center justify-center h-14 w-14 md:h-16 md:w-16 rounded-full bg-[#E11D48] text-white shadow-lg"
          aria-label="Call Us"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div whileHover={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 0.3 }}>
            <Phone size={26} />
          </motion.div>
        </motion.a>
      </div>
    </>
  );
}
