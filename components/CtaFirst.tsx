"use client";

import { Phone, Calendar } from "lucide-react";
import Link from "next/link";

export default function CtaFirst() {
  return (
    <section className="w-full px-4 py-12">
      <div
        className="
        relative mx-auto max-w-5xl
        rounded-2xl
        bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-900
        shadow-xl overflow-hidden
      "
      >
        {/* Subtle glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-cyan-400/10" />

        <div className="relative flex flex-col items-center text-center px-6 md:px-12 py-10 gap-6">
          
          {/* Text */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Ready for a Cleaner & Healthier Home?
            </h3>
            <p className="mt-2 text-sm md:text-base text-white/80 max-w-2xl mx-auto">
              Same-day service available. Professional cleaning you can trust.
            </p>
          </div>

          {/* Buttons BELOW text */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            
            {/* Call Now */}
            <a
              href="tel:+919999999999"
              className="
              inline-flex items-center justify-center gap-2
              rounded-full bg-red-600 hover:bg-red-700
              px-8 py-3
              text-sm md:text-base font-semibold text-white
              transition-all duration-300
              shadow-lg hover:shadow-red-600/40
            "
            >
              <Phone size={18} />
              Call Now
            </a>

            {/* Book Slot */}
            <Link
              href="/book-slot"
              className="
              inline-flex items-center justify-center gap-2
              rounded-full border border-white/30
              px-8 py-3
              text-sm md:text-base font-semibold text-white
              hover:bg-white/10
              transition-all duration-300
            "
            >
              <Calendar size={18} />
              Book Your Slot
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
