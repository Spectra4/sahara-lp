"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

/* ---------------- Data ---------------- */

const reviews = [
  {
    name: "Shrinivas Pachapule",
    rating: 5,
    text: "I booked Sahara for deep home cleaning services in Pune for my new flat that was closed for months. Their professional team arrived on time with proper equipment. Every corner was cleaned perfectly - the house looked brand new. Highly recommend Sahara for reliable house cleaning services in Pune.",
  },
  {
    name: "Linju Thomas",
    rating: 5,
    text: "Fantastic deep cleaning service in Pune. The team brought all their materials and cleaned every corner thoroughly. Very professional, trustworthy & exactly as promised. If you’re searching for home cleaners near me, Sahara is the right choice.",
  },
  {
    name: "kunal katyarmal",
    rating: 5,
    text: "Great work by Mahesh and team. They did an excellent job with our home deep cleaning in Pune. Very hardworking staff and impressive results. Highly recommended.",
  },
  {
    name: "Ankur Shah",
    rating: 5,
    text: "Sikandar and team cleaned our 3BHK completely - not a single corner was missed. Truly professional house cleaning services in Pune. The home looked spotless after their visit. Definitely recommended.",
  },
  {
    name: "Ashish Wani",
    rating: 5,
    text: "Booked Sahara for deep cleaning services near me including wall wiping. Nazmul, Hassan, Ganesh & team did a brilliant job. They were polite, accepted feedback, & ensured everything was done properly. One of the best home cleaning services in Pune.",
  },
  {
    name: "Nehal Vanjara",
    rating: 5,
    text: "Excellent service by Ganesh, Hasanali and Washim. Our home feels fresh & hygienic after their deep cleaning service in Pune. Very happy with the results.",
  },
  {
    name: "Aman Gupta",
    rating: 5,
    text: "Used Sahara for sofa & recliner cleaning. The team arrived with all equipment and did a great job. Very polite staff and affordable pricing. If you’re looking for professional cleaning services near you, contact Sahara directly.",
  },
];

/* ---------------- Responsive Count ---------------- */

function useVisibleCount() {
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisible(1);
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(3);
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
  const containerRef = useRef<HTMLDivElement>(null);

  const maxIndex = Math.max(reviews.length - VISIBLE, 0);

  const handleDragEnd = (_: any, info: any) => {
    const threshold = 80;

    if (info.offset.x < -threshold && index < maxIndex) {
      setIndex(index + 1);
    } else if (info.offset.x > threshold && index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="py-8" id="reviews">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-6 sm:mb-8 px-4">
          {/* <p className="mx-auto text-[11px] sm:text-xs font-semibold tracking-widest text-blue-700 uppercase mb-3 px-3 py-1 border border-blue-300 rounded-xl inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-blue-50 shadow-md">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Reviews
          </p> */}

          <h2 className="relative flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <span className="hidden sm:inline-block w-30 h-1 bg-gradient-to-l from-blue-500 to-transparent mr-6"></span>
            Our Customer Reviews
            <span className="hidden sm:inline-block w-30 h-1 bg-gradient-to-r from-blue-500 to-transparent ml-6"></span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-3 flex flex-col items-center text-center">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl text-black font-bold leading-tight mb-1">
              Excellent
            </h2>

            {/* Stars */}
            <div className="flex gap-1 text-yellow-400 text-2xl mb-1">
              ★ ★ ★ ★ ★
            </div>

            {/* Review Count */}
            <div className="text-sm text-black">
              Based on <b className="font-extrabold">1600+</b> Reviews
            </div>

            {/* Google Logo */}
            <img
              src="/sahara/google.webp"   // 🔁 replace with your actual path
              alt="Google Reviews"
              className="h-15 object-contain mt-2"
            />
          </div>

          {/* RIGHT CAROUSEL */}
          <div className="lg:col-span-9">
            <div className="overflow-hidden" ref={containerRef}>
              <motion.div
                drag="x"
                dragConstraints={containerRef}
                onDragEnd={handleDragEnd}
                animate={{ x: `-${index * (100 / VISIBLE)}%` }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                className="flex cursor-grab active:cursor-grabbing"
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

            {/* DOTS */}
            <div className="mt-6 flex justify-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === i
                      ? "w-6 bg-blue-600"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Card ---------------- */

function ReviewCard({ review }: { review: any }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="
        min-h-[190px]
        rounded-xl bg-white border shadow-sm
        p-5 flex flex-col gap-3
        overflow-hidden
      "
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Rating */}
      <div className="flex items-center gap-2 text-sm">
        <div className="flex gap-1 text-yellow-400">
          {Array.from({ length: review.rating }).map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>
        <img src="/sahara/verified.png" alt="Verified" className="w-4 h-4" />
      </div>

      {/* Name */}
      <span className="font-semibold text-slate-900">
        {review.name}
      </span>

      {/* Review Text */}
      <motion.p
        layout
        className={`text-sm text-slate-600 leading-relaxed ${
          expanded ? "" : "line-clamp-4"
        }`}
      >
        {review.text}
      </motion.p>

      {/* Read more */}
      {review.text.length > 120 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-auto text-xs font-semibold text-blue-600 hover:underline self-start"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
    </motion.div>
  );
}
