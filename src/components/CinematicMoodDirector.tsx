"use client";

import { motion } from "framer-motion";
import { useMood, MoodTheme } from "@/context/MoodContext";

export function CinematicMoodDirector() {
  const { currentMood, setMood } = useMood();

  const options: { id: MoodTheme; label: string }[] = [
    { id: "obsidian", label: "OBSIDIAN" },
    { id: "blue-hour", label: "BLUE HOUR" },
    { id: "amber-film", label: "FILM" },
    { id: "chrome-mono", label: "CHROME" },
  ];

  return (
    <div
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3.5 rounded-full border border-white/10 border-t-white/20 bg-[#0B0B0D]/90 px-4 py-2 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
      role="region"
      aria-label="Color Grade LUT Switcher"
    >
      <span className="text-[9px] font-mono tracking-[0.25em] text-[#6E6E73] uppercase hidden sm:inline border-r border-white/10 pr-3">
        LUT
      </span>

      <div className="flex items-center gap-1">
        {options.map((item) => {
          const isActive = currentMood === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setMood(item.id)}
              className="relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-full font-mono text-[10px] tracking-widest uppercase transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2997FF]"
              aria-label={`Select ${item.label} visual color grade`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-lut-pill"
                  transition={{ type: "spring", stiffness: 400, damping: 33 }}
                  className="absolute inset-0 rounded-full bg-white/10 border border-white/15"
                />
              )}
              <span
                className={`relative z-10 w-1.5 h-1.5 rounded-full transition-all ${
                  isActive
                    ? "bg-[#2997FF] shadow-[0_0_8px_rgba(41,151,255,0.8)] scale-110"
                    : "border border-white/30 bg-transparent"
                }`}
              />
              <span
                className={`relative z-10 transition-colors duration-200 ${
                  isActive ? "text-[#FFFFFF] font-semibold" : "text-[#6E6E73] hover:text-[#A1A1A6]"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
