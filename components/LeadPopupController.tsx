"use client";

import { useEffect, useState } from "react";
import LeadPopup from "@/components/LeadPopup";

const POPUP_DELAY = 25000; // 25 seconds
const STORAGE_KEY = "lead-popup-shown";

export default function LeadPopupController() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const alreadyShown = localStorage.getItem(STORAGE_KEY);
    if (alreadyShown === "true") return;

    const timer = setTimeout(() => {
      setOpen(true);
      localStorage.setItem(STORAGE_KEY, "true");
    }, POPUP_DELAY);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem(STORAGE_KEY, "true");
  };

  return (
    <LeadPopup
      open={open}
      onClose={handleClose}
    />
  );
}
