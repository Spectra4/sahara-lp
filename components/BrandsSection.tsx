"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = [
  "/logos/1.jpg",
  "/logos/2.jpg",
  "/logos/3.jpg",
  "/logos/4.jpg",
  "/logos/5.jpg",
  "/logos/6.jpg",
];

export default function BrandsSection() {
  return (
    <section className="w-full py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Header (unchanged) */}
        {/* <p className="mx-auto text-[11px] sm:text-xs font-semibold tracking-widest text-blue-700 uppercase mb-3 px-3 py-1 border border-blue-300 rounded-xl inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-blue-50 shadow-md">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          Our Partners
        </p> */}

        <h2 className="relative flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-6 md:mb-8">
          <span className="hidden sm:inline-block w-30 h-1 bg-gradient-to-l from-blue-500 to-transparent mr-6"></span>
          Trusted by Leading Brands
          <span className="hidden sm:inline-block w-30 h-1 bg-gradient-to-r from-blue-500 to-transparent ml-6"></span>
        </h2>

        {/* Swiper Marquee */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          slidesPerView="auto"
          spaceBetween={40}
          allowTouchMove={false}
          speed={6000}              // ⬅ controls smoothness
          autoplay={{
            delay: 0,               // ⬅ continuous
            disableOnInteraction: false,
          }}
          className="brands-swiper"
        >
          {[...logos, ...logos].map((logo, index) => (
            <SwiperSlide
              key={index}
              className="!w-auto flex items-center justify-center"
            >
              <img
                src={logo}
                alt="Brand Logo"
                className="h-14 sm:h-16 w-auto object-contain opacity-80 hover:opacity-100 transition"
              />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
