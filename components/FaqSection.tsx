"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What cleaning services do you provide?",
    answer:
      "We offer residential, commercial, deep cleaning, sofa and carpet cleaning, kitchen, bathroom, and post-renovation cleaning services.",
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer:
      "No, it’s not required. Many of our clients provide access instructions so we can clean while they’re away.",
  },
  {
    question: "Do you bring your own cleaning supplies?",
    answer:
      "Yes, our team comes fully equipped with professional-grade tools and eco-friendly cleaning products.",
  },
  {
    question: "How long does a cleaning session take?",
    answer:
      "The duration depends on the size of the space and the type of service. A standard home usually takes 2–4 hours.",
  },
  {
    question: "Are your cleaning staff trained and verified?",
    answer:
      "Absolutely. All our cleaners are background-checked, professionally trained, and supervised for quality assurance.",
  },
  {
    question: "How can I book a cleaning service?",
    answer:
      "You can book directly through our website, WhatsApp, or by calling our support team.",
  },
];

export default function FaqSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-10 relative overflow-hidden">

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Subtitle */}
        <div className="text-center max-w-7xl mx-auto px-4">
          <p className="mx-auto text-center text-[11px] sm:text-xs font-semibold tracking-widest text-blue-700 uppercase mb-3 px-3 py-1 border border-blue-300 rounded-xl inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-blue-50 shadow-md">
          {/* Decorative Dot */}
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>

          {/* Text */}
          FAQ
        </p>
        </div>


        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-8 md:mb-12"
        >
          {/* Left line */}
          <span className="hidden sm:inline-block w-16 h-1 bg-gradient-to-l from-blue-500 to-transparent mr-4"></span>

          {/* Text */}
          Cleaning Service FAQs

          {/* Right line */}
          <span className="hidden sm:inline-block w-16 h-1 bg-gradient-to-r from-blue-500 to-transparent ml-4"></span>
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
