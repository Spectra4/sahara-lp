"use client";

import { X } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

type LeadPopupProps = {
  open: boolean;
  onClose: () => void;
};

export default function LeadPopup({ open, onClose }: LeadPopupProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSuccess(true);
      setName("");
      setPhone("");
      setPropertyType("");
      setTimeout(onClose, 2000);
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

        {!success ? (
          <>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Book Your Cleaning
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Enter your details and we’ll call you shortly.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                required
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border px-4 py-3 text-sm text-gray-700"
              />

              <input
                type="tel"
                required
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-lg border px-4 py-3 text-sm text-gray-700"
              />
              <select
                required
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full rounded-lg border px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                bg-gradient-to-r from-blue-600 to-cyan-500
                hover:opacity-90 transition"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </>
        ) : (
          /* ✅ SUCCESS STATE */
          <div className="flex flex-col items-center text-center py-6">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 text-2xl">
              ✓
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Thank You!
            </h3>

            <p className="text-sm text-gray-600 max-w-xs">
              Your request has been received. Our team will contact you shortly
              to confirm your cleaning.
            </p>

            <button
              onClick={onClose}
              className="mt-6 rounded-lg px-6 py-2 text-sm font-semibold
              text-white bg-green-600 hover:bg-green-700 transition"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
