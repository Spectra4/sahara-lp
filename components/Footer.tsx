"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="
      bg-[#182950] text-white
      pt-16 pb-10
      rounded-t-[40px]
      overflow-hidden
    "
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Sahara Cleaning</h2>
          <p className="text-gray-200 leading-relaxed">
            Sahara Cleaning is a premier provider of industrial cleaning solutions,
            dedicated to delivering top-notch services that ensure safety,
            efficiency, and environmental compliance for businesses worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          {/* add links later */}
          <ul className="space-y-3 text-gray-200">
            <li>
              <Link href="#home" className="hover:text-blue-400 transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-blue-400 transition-colors duration-300">
                Services
              </Link>
            </li>
            <li>
              <Link href="#reviews" className="hover:text-blue-400 transition-colors duration-300">
                Reviews
              </Link>
            </li>
            <li>
              <Link href="#faq" className="hover:text-blue-400 transition-colors duration-300">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-gray-200">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-white mt-1" />
              <span>Pune, Maharashtra, India</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-white mt-1" />
              <span>+91 96587 43210</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-white mt-1" />
              <span>info@saharacleaning.in</span>
            </li>
          </ul>
        </div>

        {/* Map */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Location Map</h3>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-white/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.298231842842!2d73.85674397496377!3d18.515009982578307!"
              width="100%"
              height="180"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/30 mt-12 pt-6 text-center text-sm text-gray-200">
        © {year} <span className="font-semibold">Sahara Cleaning</span>. All Rights Reserved.
      </div>
    </footer>
  );
}
