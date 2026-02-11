"use client";

import { useEffect, useRef, useState } from "react";
import LeadPopup from "@/components/LeadPopup";

const POPUP_DELAY = 25000; // 25 seconds
const STORAGE_KEY = "lead-popup-shown";

export default function LeadPopupController() {
  const [open, setOpen] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // show only once ever
    const alreadyShown = localStorage.getItem(STORAGE_KEY);
    if (alreadyShown === "true") return;

    timerRef.current = setTimeout(() => {
      setOpen(true);
    }, POPUP_DELAY);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem(STORAGE_KEY, "true");
  };

  return <LeadPopup open={open} onClose={handleClose} />;
}