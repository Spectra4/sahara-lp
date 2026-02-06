"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What areas do you cover for home cleaning services in Pune?",
    answer:
      "We provide professional home cleaning services across Pune, including Kharadi, Hadapsar, Undri, Mohammadwadi, Amanora Park, Magarpatta, and nearby areas.",
  },
  {
    question: "Do you offer same-day deep home cleaning services in Pune?",
    answer:
      "Yes. Based on availability, we provide same-day deep cleaning services in Pune. Call or WhatsApp us to book your slot.",
  },
  {
    question: "What is included in your deep cleaning service?",
    answer:
      "Our deep cleaning service covers floors, kitchen, bathrooms, bedrooms, living areas, windows, sofa, mattress, and hard-to-reach corners using professional equipment.",
  },
  {
    question: "How much does home cleaning cost in Pune?",
    answer:
      "The cost of our home cleaning and deep cleaning services in Pune depends on your home size, service type (regular or deep cleaning), and specific requirements.",
  },
  {
    question: "How long does house cleaning usually take?",
    answer:
      "A standard house cleaning service in Pune takes 3–6 hours depending on home size and service type.",
  },
  {
    question: "Do you bring your own cleaning equipment and materials?",
    answer:
      "Yes. Our professional home cleaners in Pune arrive fully equipped with advanced tools and safe cleaning solutions - you don’t need to arrange anything.",
  },
];

export default function FaqSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="pb-10 relative overflow-hidden" id="faq">

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* <div className="text-center max-w-7xl mx-auto px-4">
          <p className="mx-auto text-center text-[11px] sm:text-xs font-semibold tracking-widest text-blue-700 uppercase mb-3 px-3 py-1 border border-blue-300 rounded-xl inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-blue-50 shadow-md">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>

            FAQ
          </p>
        </div> */}


        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-6 md:mb-8"
        >
          {/* Left line */}
          <span className="hidden sm:inline-block w-30 h-1 bg-gradient-to-l from-blue-500 to-transparent mr-6"></span>

          {/* Text */}
          Cleaning Service FAQs

          {/* Right line */}
          <span className="hidden sm:inline-block w-30 h-1 bg-gradient-to-r from-blue-500 to-transparent ml-6"></span>
        </motion.h2>


        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const open = active === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`rounded-2xl border transition-all duration-300
                  ${
                    open
                      ? "bg-white border-blue-300 shadow-lg"
                      : "bg-[#eef5ff] border-blue-200 shadow-sm"
                  }`}
              >
                {/* Question */}
                <button
                  onClick={() => setActive(open ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-medium text-slate-900">
                    {faq.question}
                  </span>

                  <span
                    className={`flex items-center justify-center h-8 w-8 rounded-full
                      transition-all duration-300
                      ${
                        open
                          ? "bg-blue-600 text-white rotate-45"
                          : "bg-blue-100 text-blue-600"
                      }`}
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                <motion.div
                  initial={false}
                  animate={{
                    height: open ? "auto" : 0,
                    opacity: open ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
