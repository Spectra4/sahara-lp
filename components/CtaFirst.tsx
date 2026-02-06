"use client";

import { useState } from "react";
import { Phone, Calendar } from "lucide-react";
import LeadPopup from "@/components/LeadPopup";

export default function CtaFirst() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="w-full px-4 py-8">
        <div
          className="
            relative mx-auto max-w-5xl
            rounded-2xl
            bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-500
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

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              
              {/* Call Now */}
              <a
                href="tel:+918956567130"
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
              <button
                onClick={() => setOpen(true)}
                className="
                  inline-flex items-center justify-center gap-2
                  rounded-full
                  bg-gradient-to-r from-green-500 to-emerald-500
                  hover:from-green-600 hover:to-emerald-600
                  px-8 py-3
                  text-sm md:text-base font-semibold text-white
                  transition-all duration-300
                  shadow-lg hover:shadow-green-500/40
                "
              >
                <Calendar size={18} />
                Book Your Slot
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* Popup */}
      <LeadPopup open={open} onClose={() => setOpen(false)} />
    </>
  );
}
