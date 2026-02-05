"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

/* ---------------- Data ---------------- */

const reviews = [
  {
    name: "Prashant Shinde",
    rating: 5,
    text:
      "Good and experienced professionals who truly understand hair patches and client needs. Highly recommend their services in Pune.",
  },
  {
    name: "Sneha Joshi",
    rating: 5,
    text:
      "I never imagined I’d feel this confident again. The transformation was amazing and completely natural.",
  },
  {
    name: "Imran Shaikh",
    rating: 5,
    text:
      "The team listened carefully and delivered flawless results. Excellent service and very reasonable pricing.",
  },
  {
    name: "Nikhil Jadhav",
    rating: 5,
    text:
      "Everything was explained clearly. Service was quick, hygienic, and professional.",
  },
  {
    name: "Amit Patil",
    rating: 5,
    text:
      "Very polite staff and premium service quality. One of the best experiences I’ve had.",
  },
];

/* ---------------- Hook ---------------- */

function useVisibleCount() {
  const [visible, setVisible] = useState(4);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisible(1);        // mobile
      else if (window.innerWidth < 1024) setVisible(2); // tablet
      else setVisible(4);                               // desktop
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return visible;
}

/* ---------------- Component ---------------- */

export default function ReviewsSection() {
  const VISIBLE = useVisibleCount();
  const [index, setIndex] = useState(0);

  const maxIndex = Math.max(reviews.length - VISIBLE, 0);
  const dotsCount = maxIndex + 1;

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-7xl mx-auto px-4">
          {/* Subtitle */}
          <p className="mx-auto text-[11px] sm:text-xs font-semibold tracking-widest text-indigo-700 uppercase mb-3 px-3 py-1 border border-indigo-300 rounded-xl inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-indigo-50 shadow-md">
            {/* Decorative Dot */}
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>

            {/* Text */}
            Reviews
          </p>
          {/* Header */}
          <h2 className="relative flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-8 md:mb-12">
            {/* Left line */}
            <span className="hidden sm:inline-block w-16 h-1 bg-gradient-to-l from-indigo-500 to-transparent mr-4"></span>

            {/* Text */}
            Our Customer Reviews

            {/* Right line */}
            <span className="hidden sm:inline-block w-16 h-1 bg-gradient-to-r from-indigo-500 to-transparent ml-4"></span>
          </h2>
        </div>


        {/* Carousel */}
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: `-${index * (100 / VISIBLE)}%` }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex"
          >
            {reviews.map((review, i) => (
              <div
                key={i}
                className="shrink-0 px-3"
                style={{ width: `${100 / VISIBLE}%` }}
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: dotsCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === i
                  ? "w-6 bg-blue-600"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Card ---------------- */

function ReviewCard({ review }: { review: any }) {
  return (
    <div
      className="h-[180px] rounded-xl bg-white border shadow-sm
      p-5 flex flex-col gap-2"
    >
      {/* Rating */}
      <div className="flex items-center gap-1 text-sm">
        {/* Rating Stars */}
        <div className="flex gap-1 text-yellow-400">
          {Array.from({ length: review.rating }).map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>

        {/* Verified Blue Icon as Image */}
        <img
          src="/verified.png" // replace with your image path
          alt="Verified"
          className="w-4 h-4"
        />
      </div>


      {/* Name and Source */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium font-extrabold text-slate-900">
          {review.name}
        </span>
      </div>

      {/* Text */}
      <p className="text-sm text-slate-600 leading-relaxed line-clamp-5">
        {review.text}
      </p>
    </div>
  );
}
