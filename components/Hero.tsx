export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">

      {/* DESKTOP BACKGROUND */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/banner/sahara-desktop-banner.webp')",
        }}
      />

      {/* MOBILE BACKGROUND */}
      <div
        className="block md:hidden absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/banner/sahara-mobile-viewbanner.webp')",
        }}
      />

      {/* Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r
        from-white/80 via-white/55 to-white/25
        md:from-white/75 md:via-white/60 md:to-white/20
      " />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl text-center md:text-left">

          {/* Badge */}
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold rounded-full
            bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
            Welcome to Yash Cleaning Service
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
            Professional Home <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Deep Cleaning
            </span>{" "}
            Services in Pune
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-slate-800">
            Keep your home clean, spotless, and hygienic at an affordable cost.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <button className="px-8 py-4 rounded-xl font-semibold text-white
              bg-gradient-to-r from-blue-600 to-cyan-500
              hover:opacity-90 transition">
              Book Your Cleaning Today
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
