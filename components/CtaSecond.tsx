export default function CtaSecond() {
  return (
    <section className="w-full py-10 bg-blue-200">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 mb-4 rounded-full bg-white text-blue-600 text-sm font-medium">
          ✨ Transform Your Space Today
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Book Your Cleaning Today
        </h2>

        {/* Sub text */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Fast response. Same-day service. Professional results.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+919999999999"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition"
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-500 text-white font-semibold shadow-md hover:bg-green-600 transition"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
