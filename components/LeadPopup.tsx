"use client";

import { X } from "lucide-react";
import { useState } from "react";

type LeadPopupProps = {
  open: boolean;
  onClose: () => void;
};

export default function LeadPopup({ open, onClose }: LeadPopupProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone }),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      setName("");
      setPhone("");
      setTimeout(onClose, 2000);
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

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg py-3 font-semibold text-white
        bg-gradient-to-r from-blue-600 to-cyan-500
        hover:opacity-90 transition"
              >
                {loading ? "Sending..." : "Request Callback"}
              </button>
            </form>
          </>
        ) : (
          /* ✅ SUCCESS / THANK YOU STATE */
          <div className="flex flex-col items-center text-center py-6">
            {/* Success Icon */}
            <div
              className="mb-4 flex h-16 w-16 items-center justify-center
      rounded-full bg-green-100 text-green-600 text-2xl"
            >
              ✓
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>

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
