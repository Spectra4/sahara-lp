"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Cog,
  Move,
  Timer,
} from "lucide-react";
import React from "react";

const items = [
  {
    title: "Tailor-Made Crusher Plants",
    desc: "Fully customized plants engineered for specific materials, production needs, and site conditions.",
    icon: Cog,
  },
  {
    title: "Zero Civil Work Required",
    desc: "Nut–bolt structure eliminates foundation work, drastically reduces cost, and enables quick installation.",
    icon: CheckCircle,
  },
  {
    title: "Ultra-Fast 15-Day Setup",
    desc: "Modular engineering ensures complete installation and commissioning in just 15 days.",
    icon: Timer,
  },
  {
    title: "100% Movable & Wheel-Mounted",
    desc: "Maximum flexibility with a fully wheel-mounted design for easy relocation.",
    icon: Move,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-10 relative overflow-hidden">

      <div className=" text-center max-w-7xl mx-auto px-6 relative">
        {/* Subtitle */}
        <p className="mx-auto text-center text-[11px] sm:text-xs font-semibold tracking-widest text-indigo-700 uppercase mb-3 px-3 py-1 border border-indigo-300 rounded-xl inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-indigo-50 shadow-md">
          {/* Decorative Dot */}
          <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>

          {/* Text */}
          Why Choose Us
        </p>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <h2 className="relative flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-8 md:mb-12">
            {/* Left line */}
            <span className="hidden sm:inline-block w-16 h-1 bg-gradient-to-l from-indigo-500 to-transparent mr-4"></span>

            {/* Text */}
            See the Difference We Create

            {/* Right line */}
            <span className="hidden sm:inline-block w-16 h-1 bg-gradient-to-r from-indigo-500 to-transparent ml-4"></span>
          </h2>
        </motion.div>


        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
      className="group relative rounded-2xl p-8 shadow-sm
      ring-1 ring-slate-200
      transition-all duration-300
      hover:shadow-xl hover:ring-indigo-200"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0
        bg-gradient-to-br from-indigo-500/10 to-cyan-400/10
        transition-opacity duration-300 group-hover:opacity-100" />

      {/* Icon */}
      <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center
        rounded-full bg-indigo-50 text-indigo-600
        ring-8 ring-white shadow-md
        transition-transform duration-300
        group-hover:scale-110">
        <Icon size={26} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-lg font-bold text-slate-900 mb-3">
          {item.title}
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed">
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}
