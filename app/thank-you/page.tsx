"use client";

import { useEffect } from "react";

export default function ThankYouPage() {
  useEffect(() => {
    (window as any).dataLayer?.push({ event: "thank_you" });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md w-full rounded-2xl bg-white p-8 shadow-xl text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 text-2xl">
          ✓
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Thank You!
        </h1>

        <p className="text-sm text-gray-600 mb-6">
          Your request has been received. Our team will contact you shortly to
          confirm your cleaning.
        </p>

        <a
          href="/"
          className="inline-block rounded-lg px-6 py-3 text-sm font-semibold
          text-white bg-gradient-to-r from-blue-600 to-cyan-500"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
