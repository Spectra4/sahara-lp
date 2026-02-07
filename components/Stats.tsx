"use client";

import { useEffect, useRef, useState } from "react";
import {
  Users,
  HeartHandshake,
  Home,
  Sparkles,
} from "lucide-react";

/* -------------------------------- Types -------------------------------- */

type ColorKey = "orange" | "blue" | "emerald" | "rose";

type Stat = {
  label: string;
  value: number;
  suffix?: string;
  icon: React.ReactNode;
  color: ColorKey;
};

/* --------------------------- Tailwind-safe colors ------------------------ */

const colorClasses = {
  orange: {
    iconBg: "bg-orange-100",
    iconText: "text-orange-600",
    glow: "bg-orange-200",
    line: "bg-orange-500",
  },
  blue: {
    iconBg: "bg-blue-100",
    iconText: "text-blue-600",
    glow: "bg-blue-200",
    line: "bg-blue-500",
  },
  emerald: {
    iconBg: "bg-emerald-100",
    iconText: "text-emerald-600",
    glow: "bg-emerald-200",
    line: "bg-emerald-500",
  },
  rose: {
    iconBg: "bg-rose-100",
    iconText: "text-rose-600",
    glow: "bg-rose-200",
    line: "bg-rose-500",
  },
} as const;

/* ------------------------------- Data ----------------------------------- */

const stats: Stat[] = [
  {
    label: "Years Experience",
    value: 16,
    icon: <Sparkles className="h-6 w-6" />,
    color: "orange",
  },
  {
    label: "Trained Cleaning Expert",
    value: 50,
    suffix: "+",
    icon: <Users className="h-6 w-6" />,
    color: "blue",
  },
  {
    label: "Happy Customers",
    value: 900,
    suffix: "+",
    icon: <Home className="h-6 w-6" />,
    color: "emerald",
  },
  {
    label: "Successful Completed Projects",
    value: 2000,
    suffix: "+",
    icon: <HeartHandshake className="h-6 w-6" />,
    color: "rose",
  },
];

/* ---------------------------- Count-up hook ------------------------------ */

function useCountUp(target: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    const duration = 1400;

    function animate(time: number) {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      setCount(Math.floor(progress * target));

      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [start, target]);

  return count;
}

/* ------------------------------- Component -------------------------------- */

export default function Stats() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-10 pt-12"
    >

      <div className="text-center max-w-7xl mx-auto px-6">
        
        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const count = useCountUp(stat.value, visible);
            const colors = colorClasses[stat.color];

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white p-8
                  shadow-lg transition-all duration-300
                  hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Glow */}
                <div
                  className={`pointer-events-none absolute inset-0 opacity-0 blur-2xl
                  transition-opacity duration-300 group-hover:opacity-30
                  ${colors.glow}`}
                />

                {/* Icon (circular + floating) */}
                <div
                  className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center
                  rounded-full ${colors.iconBg} ${colors.iconText}
                  ring-8 ring-white shadow-md
                  transition-all duration-300
                  group-hover:scale-110 group-hover:-rotate-6`}
                >
                  {stat.icon}
                </div>

                {/* Number */}
                <div className="text-4xl font-bold text-slate-900">
                  {count}
                  {stat.suffix}
                </div>

                {/* Label */}
                <p className="mt-2 text-sm font-bold text-slate-600">
                  {stat.label}
                </p>

                {/* Bottom accent line */}
                <span
                  className={`absolute bottom-0 left-0 h-1 w-0
                  ${colors.line}
                  transition-all duration-300 group-hover:w-full`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
