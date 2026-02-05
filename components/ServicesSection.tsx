"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const services = [
  {
    title: "Home Deep Cleaning",
    text:
      "Complete top-to-bottom cleaning for bedrooms, living areas, kitchens, and bathrooms - removing dust, grease, and germs for a healthier home.",
    image: "/demo.png",
  },
  {
    title: "Housekeeping Services",
    text:
      "Regular or one-time housekeeping to keep your home or office consistently clean, organized, and fresh.",
    image: "/demo.png",
  },
  {
    title: "Bathroom & Kitchen Cleaning",
    text:
      "Powerful stain removal, descaling, and sanitization for hygienic, sparkling bathrooms and grease-free kitchens.",
    image: "/demo.png",
  },
  {
    title: "Sofa & Mattress Cleaning",
    text:
      "Professional shampooing and vacuum cleaning to eliminate dust mites, odors, and stains - bringing your furniture back to life.",
    image: "/demo.png",
  },
  {
    title: "Window & Balcony Cleaning",
    text:
      "Crystal-clear glass and spotless balconies using safe tools and professional techniques.",
    image: "/demo.png",
  },
  {
    title: "Move-In / Move-Out Cleaning",
    text:
      "Deep cleaning before you move in or after you move out - perfect for tenants, landlords, and property managers.",
    image: "/demo.png",
  },
  {
    title: "Residential Apartment Cleaning",
    text:
      "Our Residential Apartment Cleaning Service is the easiest way to get a super clean home altogether.",
    image: "/demo.png",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-10 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14 px-4">
          {/* Subtitle */}
          <p className="mx-auto text-center text-[11px] sm:text-xs font-semibold tracking-widest text-indigo-700 uppercase mb-3 px-3 py-1 border border-indigo-300 rounded-xl inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-indigo-50 shadow-md">
            {/* Decorative Dot */}
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>

            {/* Text */}
            Services
          </p>

          {/* Main Heading with gradient lines */}
          <h2 className="relative flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-4 md:mb-6">
            {/* Left line */}
            <span className="hidden sm:inline-block w-16 h-1 bg-gradient-to-l from-indigo-500 to-transparent mr-4"></span>

            {/* Text */}
            Our Home Cleaning Services in Pune

            {/* Right line */}
            <span className="hidden sm:inline-block w-16 h-1 bg-gradient-to-r from-indigo-500 to-transparent ml-4"></span>
          </h2>

        </div>

        {/* Carousel */}
        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          grabCursor={true}
          pagination={{ clickable: true }}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="services-swiper"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div
                className="
                h-full flex flex-col
                bg-white rounded-2xl
                shadow-md hover:shadow-2xl
                transition-all duration-300
                overflow-hidden group
                hover:-translate-y-2
                min-h-[370px] mx-auto
              "
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="
                    w-full h-48 object-cover
                    transition-transform duration-500
                    group-hover:scale-110
                  "
                  />
                  <div
                    className="
                    absolute inset-0
                    bg-gradient-to-t from-black/40 to-transparent
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                  "
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                    {service.text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
