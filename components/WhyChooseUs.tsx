"use client";

import { motion } from "framer-motion";
import {
  Clock,
  IndianRupee,
  SprayCan,
  ShieldCheck,
} from "lucide-react";
import React from "react";

const items = [
  {
    title: "Same-Day Service Available",
    desc: "Book today, get your home cleaned the same day - fast, reliable service across Pune.",
    icon: Clock,
  },
  {
    title: "Affordable & Transparent Pricing",
    desc: "No hidden charges. Honest pricing with quality service.",
    icon: IndianRupee,
  },
  {
    title: "Deep Cleaning Specialists",
    desc: "Every corner. Every surface. No shortcuts - just thorough cleaning for stress-free living.",
    icon: SprayCan,
  },
  {
    title: "100% Satisfaction Guaranteed",
    desc: "We clean until you’re happy - that’s our promise.",
    icon: ShieldCheck,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-8 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8 px-4"
        >
          <h2 className="relative flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-6 md:mb-8">
            {/* Left line */}
            <span className="hidden sm:inline-block w-30 h-1 bg-gradient-to-l from-blue-500 to-transparent mr-6"></span>

            {/* Text */}
            Why Choose Sahara Cleaning Services in Pune

            {/* Right line */}
            <span className="hidden sm:inline-block w-30 h-1 bg-gradient-to-r from-blue-500 to-transparent ml-6"></span>
          </h2>
        </motion.div>


        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <FeatureCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Card -------------------------------- */

function FeatureCard({
  item,
  index,
}: {
  item: any;
  index: number;
}) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="group relative rounded-2xl p-6 shadow-sm
      ring-1 ring-slate-200 
      transition-all duration-300
      hover:shadow-xl hover:ring-blue-200
      bg-gradient-to-br from-blue-600/40 to-cyan-300/10"
    >
      {/* Glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0
        transition-opacity duration-300 group-hover:opacity-100 bg-cyan-100"
      />

      {/* Icon + Heading (FIXED) */}
      <div className="relative z-10 mb-4 flex items-center gap-4">
        {/* Icon */}
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center
          rounded-full bg-blue-50 text-blue-600
          ring-8 ring-white shadow-md
          transition-transform duration-300
          group-hover:scale-110"
        >
          <Icon size={26} />
        </div>

        {/* Heading */}
        <h3 className="text-lg font-bold text-slate-900">
          {item.title}
        </h3>
      </div>

      {/* Description */}
      <p className="relative z-10 text-sm text-slate-600 leading-relaxed">
        {item.desc}
      </p>
    </motion.div>
  );
}

