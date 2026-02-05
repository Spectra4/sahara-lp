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
      className="py-10"
    >

      <div className="text-center max-w-7xl mx-auto px-6">
        {/* Subtitle */}
        <p className="mx-auto text-center text-[11px] sm:text-xs font-semibold tracking-widest text-indigo-700 uppercase mb-3 px-3 py-1 border border-indigo-300 rounded-xl inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-indigo-50 shadow-md">
          {/* Decorative Dot */}
          <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>

          {/* Text */}
          Visual Proof
        </p>
        {/* Heading */}
        <h2 className="relative flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-8 md:mb-12">
          {/* Left line */}
          <span className="hidden sm:inline-block w-16 h-1 bg-gradient-to-l from-indigo-500 to-transparent mr-4"></span>

          {/* Text */}
          See the Difference We Create

          {/* Right line */}
          <span className="hidden sm:inline-block w-16 h-1 bg-gradient-to-r from-indigo-500 to-transparent ml-4"></span>
        </h2>



        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <p className="mt-2 text-sm text-slate-600">
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
