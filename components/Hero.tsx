export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-cleaning.jpg')",
        }}
      />

      {/* Premium Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40" /> */}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          {/* Small Badge */}
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
            Welcome to Yash Cleaning Service
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
            Expert Sanitizing & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Deep Cleaning
            </span>{" "}
            Solutions
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-slate-600">
            Professional cleaning services delivering hygiene, safety, and a
            spotless environment for homes and businesses.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <button className="px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 transition">
              Call Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
