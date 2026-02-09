"use client";

import { useState } from "react";
import LeadPopup from "@/components/LeadPopup";
import { Star, CheckCircle, IndianRupee } from "lucide-react";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        className="relative min-h-[100vh] md:min-h-[80vh] flex items-start md:items-center overflow-hidden"
        id="home"
      >
        {/* DESKTOP BACKGROUND */}
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/sahara/banner/sahara-desktop-banner-white.webp')",
          }}
        />

        {/* MOBILE BACKGROUND */}
        <div
          className="block md:hidden absolute inset-0 bg-cover bg-top min-h-[100vh]"
          style={{
            backgroundImage: "url('/sahara/banner/sahara-mobile-viewbanner.webp')",
          }}
        />

        {/* Overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-b from-black/15 via-black/6 to-black/2
            md:bg-gradient-to-r md:from-black/15 md:via-black/6 md:to-black/2
          "
        />

        {/* Mobile Logo */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 md:hidden z-20">
          <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-18 md:mt-0">
          <div className="max-w-2xl text-center md:text-left">
            {/* Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900 mt-2 md:mt-0 text-shadow-sm">
              Professional <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Home Cleaning Services
              </span>{" "}
              Near You
            </h1>

            {/* Price */}
            <p className="mt-4 text-2xl font-extrabold text-blue-600">
              Starts at <span className="text-blue-600">₹ 2999</span>
            </p>

            {/* Trust Highlights */}
            <ul className="mt-6 space-y-3 text-base font-semibold text-slate-900 flex flex-col items-center lg:items-start">
              <li className="flex items-center gap-3 justify-center lg:justify-start">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span>16+ Years Experience</span>
              </li>

              <li className="flex items-center gap-3 justify-center lg:justify-start">
                <IndianRupee className="w-5 h-5 text-blue-600" />
                <span>Affordable Cost</span>
              </li>

              <li className="flex items-center gap-3 justify-center lg:justify-start">
                <Star className="w-5 h-5 text-blue-600" />
                <span><b>1600+</b> Google Reviews</span>
              </li>
            </ul>

            {/* CTA */}
            <div className="mt-8 relative inline-block">
              {/* Wave 1 */}
              <span
                className="absolute inset-0 rounded-xl bg-cyan-400/25 animate-[ping_2.8s_ease-in-out_infinite]"
              />

              {/* Wave 2 */}
              <span
                className="absolute inset-0 rounded-xl bg-blue-500/20 animate-[ping_2.8s_ease-in-out_infinite] [animation-delay:0.9s]"
              />

              {/* Wave 3 */}
              <span
                className="absolute inset-0 rounded-xl bg-indigo-500/15 animate-[ping_2.8s_ease-in-out_infinite] [animation-delay:1.8s]"
              />

              {/* CTA Button */}
              <a
                href="tel:+918956567130"
                className="relative z-10 inline-block px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 transition"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Popup */}
      <LeadPopup open={open} onClose={() => setOpen(false)} />
    </>
  );
}
