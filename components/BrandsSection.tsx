const logos = [
  "/demo.png",
  "/demo.png",
  "/demo.png",
  "/demo.png",
  "/demo.png",
  "/demo.png",
];

export default function BrandsSection() {
  return (
    <section className="w-full py-10 overflow-hidden">
      <div className="text-center max-w-7xl mx-auto px-4">
        {/* Subtitle */}
        <p className="mx-auto text-center text-[11px] sm:text-xs font-semibold tracking-widest text-blue-700 uppercase mb-3 px-3 py-1 border border-blue-300 rounded-xl inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-blue-50 shadow-md">
          {/* Decorative Dot */}
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>

          {/* Text */}
          Our Partners
        </p>
        {/* Heading */}
        <h2 className="relative flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-8 md:mb-12">
          {/* Left line */}
          <span className="hidden sm:inline-block w-16 h-1 bg-gradient-to-l from-blue-500 to-transparent mr-4"></span>

          {/* Text */}
          Trusted by Leading Brands

          {/* Right line */}
          <span className="hidden sm:inline-block w-16 h-1 bg-gradient-to-r from-blue-500 to-transparent ml-4"></span>
        </h2>


        {/* Marquee */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee gap-12">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[160px]"
              >
                <img
                  src={logo}
                  alt="Brand Logo"
                  className="h-14 w-auto object-contain opacity-80 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
