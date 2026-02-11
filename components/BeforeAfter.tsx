"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Item = {
  label: string;
  image: string;
};

const items: Item[] = [
  { label: "Basin Cleaning", image: "/Before-After/basin-cleaning.webp" },
  { label: "kitchen Basin Cleaning", image: "/Before-After/kitchen-basin-cleaning.webp" },
  { label: "Kitechen Cleaning", image: "/Before-After/kitchen-cleaning.webp" },
  { label: "Washroom Cleaning", image: "/Before-After/washroom-cleaning.webp" },
];

function useVisibleCount() {
  const [visible, setVisible] = useState(4);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisible(1);
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(4);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return visible;
}

export default function BeforeAfterCarousel() {
  const VISIBLE = useVisibleCount();
  const [index, setIndex] = useState(0);

  const maxIndex = Math.max(items.length - VISIBLE, 0);
  const dotsCount = maxIndex + 1;

  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  return (
    <section className="py-8" id="before-after">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 px-4">
          {/* Main Heading with gradient lines */}
          <h2 className="relative flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-2 md:mb-2">
            {/* Left line */}
            <span className="hidden sm:inline-block w-30 h-1 bg-gradient-to-l from-blue-500 to-transparent mr-6"></span>

            {/* Text */}
            See the Difference We Create

            {/* Right line */}
            <span className="hidden sm:inline-block w-30 h-1 bg-gradient-to-r from-blue-500 to-transparent ml-6"></span>
          </h2>
          <p className="text-sm text-slate-600 font-bold max-w-2xl mx-auto">
            From Dusty to Dazzling - Real Results from Pune Homes.
          </p>

        </div>


        {/* Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={prev}
            disabled={index === 0}
            className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-10
              h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white shadow-lg
              flex items-center justify-center
              hover:scale-110 transition
              disabled:opacity-40"
          >
            <ChevronLeft />
          </button>

          {/* Right Arrow */}
          <button
            onClick={next}
            disabled={index === maxIndex}
            className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-10
              h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white shadow-lg
              flex items-center justify-center
              hover:scale-110 transition
              disabled:opacity-40"
          >
            <ChevronRight />
          </button>

          {/* Viewport */}
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${index * (100 / VISIBLE)}%` }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex"
            >
              {items.map((item, i) => (
                <div
                  key={i}
                  className="shrink-0 px-3"
                  style={{ width: `${100 / VISIBLE}%` }}
                >
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl"
                  >
                    <div className="relative h-[260px]">
                      <img
                        src={item.image}
                        alt={item.label}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute top-0 left-1/2 h-full w-[2px] bg-white/80" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>

                    <div className="absolute bottom-4 left-4">
                      <span className="rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white">
                        {item.label}
                      </span>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots */}
          {/* <div className="flex justify-center gap-3 mt-8">
            {Array.from({ length: dotsCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all ${
                  index === i
                    ? "w-8 bg-blue-600"
                    : "w-2.5 bg-blue-200"
                }`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
