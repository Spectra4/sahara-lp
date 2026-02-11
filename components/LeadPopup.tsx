"use client";

import { X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import { User, Phone } from "lucide-react";

type LeadPopupProps = {
  open: boolean;
  onClose: () => void;
};

export default function LeadPopup({ open, onClose }: LeadPopupProps) {
  const router = useRouter();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name,
          phone,
          propertyType,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      // reset
      setName("");
      setPhone("");
      setPropertyType("");

      onClose();

      // redirect to thank-you page
      router.push("/thank-you");
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>

        <h3 className="text-xl text-center font-bold text-gray-900 mb-2">
          Book Your Cleaning
        </h3>
        <p className="text-sm text-center text-gray-600 mb-6">
          Enter your details and we’ll call you shortly.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500 w-5 h-5" />
            <input
              type="text"
              required
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border pl-12 pr-4 py-3 text-sm text-gray-700
               focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500 w-5 h-5" />
            <input
              type="tel"
              required
              placeholder="Phone No"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-lg border pl-12 pr-4 py-3 text-sm text-gray-700
               focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <select
            required
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="w-full rounded-lg border px-4 py-3 text-sm text-gray-700"
          >
            <option value="">Select Property Type</option>
            <option value="1BHK">1BHK</option>
            <option value="2BHK">2BHK</option>
            <option value="3BHK">3BHK</option>
            <option value="Commercial">Commercial Space</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg py-3 font-semibold text-white
            bg-linear-to-r from-blue-600 to-cyan-500
            hover:opacity-90 transition"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
