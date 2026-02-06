"use client";

import { useState } from "react";
import LeadPopup from "@/components/LeadPopup";
import { Star, CheckCircle, IndianRupee } from "lucide-react";


export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[80vh] flex items-center overflow-hidden" id="home">

        {/* DESKTOP BACKGROUND */}
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/banner/sahara-desktop-banner.webp')",
          }}
        />

        {/* MOBILE BACKGROUND */}
        <div
          className="block md:hidden absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/banner/sahara-mobile-viewbanner.webp')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r
          from-white/80 via-white/55 to-white/25
          md:from-white/75 md:via-white/60 md:to-white/20
        " />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl text-center md:text-left">

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900">
              Professional <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Home Cleaning Services
              </span>{" "}
              Near You
            </h1>

            {/* Price */}
            <p className="mt-4 text-2xl font-extrabold text-slate-900">
              Starts at <span className="text-blue-600">₹ 2999</span>
            </p>

            {/* Trust Highlights */}
            <ul className="mt-6 space-y-3 text-base font-semibold text-slate-900">

              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span>16+ Years Experience</span>
              </li>

              <li className="flex items-center gap-3">
                <IndianRupee className="w-5 h-5 text-blue-600" />
                <span>Affordable Cost</span>
              </li>

              <li className="flex items-center gap-3">
                <Star className="w-5 h-5 text-blue-600" />
                <span>16k+ Google Reviews</span>
              </li>

            </ul>

            {/* CTA */}
            <div className="mt-8">
              <button
                onClick={() => setOpen(true)}
                className="px-8 py-4 rounded-xl font-semibold text-white
                bg-gradient-to-r from-blue-600 to-cyan-500
                hover:opacity-90 transition"
              >
                Book Your Cleaning Today
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
