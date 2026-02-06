import { Phone, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";


export default function CtaSecond() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-blue-500 via-blue-400 to-indigo-500">

      {/* TOP CURVE */}
      <svg
        className="absolute top-0 left-0 w-full"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="siteBgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(235,245,255,1)" />
            <stop offset="50%" stopColor="rgba(230,248,255,1)" />
            <stop offset="100%" stopColor="rgba(225,252,255,1)" />
          </linearGradient>
        </defs>

        <path
          d="M0,60 C240,90 480,30 720,30 960,30 1200,90 1440,60 L1440,0 L0,0 Z"
          fill="url(#siteBgGradient)"
        />
      </svg>


      {/* BOTTOM CURVE */}
      {/* <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
      >
        <path
          d="M0,30 C240,0 480,60 720,60 960,60 1200,0 1440,30 L1440,90 L0,90 Z"
          fill="#ffffff"
        />
      </svg> */}

      {/* CONTENT */}
      <div className="relative pt-28 pb-20">
        <div className="relative max-w-5xl mx-auto px-4 text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-1.5 mb-5
            rounded-full bg-white/20 backdrop-blur-md
            text-white text-sm font-semibold border border-white/30">
            ✨ Transform Your Space Today
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Book Your Cleaning Today
          </h2>

          {/* Sub text */}
          <p className="text-white/85 max-w-2xl mx-auto mb-10">
            Fast response. Same-day service. Professional results.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            {/* Call */}
            <a
              href="tel:+918956567130"
              className="inline-flex items-center justify-center gap-2
                px-7 py-3 rounded-xl bg-white text-blue-700 font-semibold
                shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all"
            >
              <Phone size={18} />
              Call Now
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918956567130"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2
                px-7 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500
                text-white font-semibold shadow-lg hover:shadow-2xl
                hover:-translate-y-0.5 transition-all"
            >
              <FaWhatsapp className="text-lg" />
              WhatsApp Us
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
