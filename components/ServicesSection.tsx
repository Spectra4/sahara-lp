"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const services = [
  {
    title: "Home Deep Cleaning",
    text: "Complete top-to-bottom cleaning for bedrooms, living areas, kitchens, and bathrooms - removing dust, grease, and germs for a healthier home.",
    image: "/sahara/Services/Deep-cleaning.jpeg",
  },
  {
    title: "Housekeeping Services",
    text: "Regular or one-time housekeeping to keep your home or office consistently clean, organized, and fresh.",
    image: "/sahara/Services/Housekeeping-Services.jpeg",
  },
  {
    title: "Bathroom & Kitchen Cleaning",
    text: "Powerful stain removal, descaling, and sanitization for hygienic, sparkling bathrooms and grease-free kitchens.",
    image: "/sahara/Services/bathroom.jpeg",
  },
  {
    title: "Sofa & Mattress Cleaning",
    text: "Professional shampooing and vacuum cleaning to eliminate dust mites, odors, and stains - bringing your furniture back to life.",
    image: "/sahara/Services/Sofa-Mattress-Cleaning.jpeg",
  },
  {
    title: "Window & Balcony Cleaning",
    text: "Crystal-clear glass and spotless balconies using safe tools and professional techniques.",
    image: "/sahara/Services/balcony.jpeg",
  },
  {
    title: "Move-In / Move-Out Cleaning",
    text: "Deep cleaning before you move in or after you move out - perfect for tenants, landlords, and property managers.",
    image: "/sahara/Services/move-in-cleaning.jpeg",
  },
  {
    title: "Residential Apartment Cleaning",
    text:  "Our Residential Apartment Cleaning Service is the easiest way to get a super clean home altogether.",
    image: "/sahara/Services/apartment.jpeg",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-8 px-4" id="services">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-6 px-4">
          {/* Subtitle */}
          {/* <p className="mx-auto text-center text-[11px] sm:text-xs font-semibold tracking-widest text-blue-500 uppercase mb-3 px-3 py-1 border border-blue-300 rounded-xl inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-blue-50 shadow-md">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Services
          </p> */}

          {/* Main Heading with gradient lines */}
          <h2 className="relative flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-6 md:mb-8">
            {/* Left line */}
            <span className="hidden sm:inline-block w-30 h-1 bg-gradient-to-l from-blue-500 to-transparent mr-6"></span>

            {/* Text */}
            Our Home Cleaning Services in Pune

            {/* Right line */}
            <span className="hidden sm:inline-block w-30 h-1 bg-gradient-to-r from-blue-500 to-transparent ml-6"></span>
          </h2>

        </div>

        {/* Carousel */}
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={false}
          spaceBetween={24}
          grabCursor={true}
          slidesPerView={1}
          autoplay={{
            delay: 3000,        // ⏱ wait 3 seconds
            disableOnInteraction: false, // keep autoplay after swipe
            pauseOnMouseEnter: true,     // pause on hover (nice UX)
          }}
          speed={800} // smooth slide animation
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
