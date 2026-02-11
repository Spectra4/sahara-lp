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
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 items-center text-center sm:text-left">

        {/* Company Info */}
        <div>
          {/* Logo */}
          <div className="flex justify-center sm:justify-start mb-4">
            <img
              src="/logo.png"   // put logo in /public folder
              alt="Sahara Cleaning Logo"
              width={140}
              height={60}
              className="object-contain"
            />
          </div>

          <p className="text-gray-200 leading-relaxed">
            Sahara Cleaning is a premier provider of industrial cleaning solutions,
            dedicated to delivering top-notch services that ensure safety,
            efficiency, and environmental compliance for businesses worldwide.
          </p>
        </div>


        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
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

        {/* Contact Info number email */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-gray-200">
            <li className="flex items-center justify-center sm:justify-start gap-3">
              <MapPin className="w-5 h-5 text-white" />
              <span>Pune, Maharashtra, India</span>
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-3">
              <Phone className="w-5 h-5 text-white" />
              <span>+91 89565 67130</span>
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-3">
              <Mail className="w-5 h-5 text-white" />
              <span>sahara.marketing26@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Map */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Location Map</h3>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-white/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4568399155733!2d73.9298453!3d18.508246600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea0728111bc5%3A0x78a3192231b37d82!2sSahara%20Cleaning%20Services!5e0!3m2!1sen!2sin!4v1770450094877!5m2!1sen!2sin"
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
