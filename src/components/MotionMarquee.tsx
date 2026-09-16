"use client";

import { motion } from "framer-motion";
import { Sparkles, Film, Award, MapPin, Camera } from "lucide-react";

export function MotionMarquee() {
  const tickerItems = [
    "RED 8K V-RAPTOR CINEMA",
    "HYDERABAD ROYAL PALACES",
    "CHICAGO LAKEFRONT DESTINATIONS",
    "ANAMORPHIC OPTICS & FLARES",
    "DA VINCI MASTER COLOR SCIENCE",
    "UNOBTRUSIVE STORYTELLING",
    "NATIONWIDE USA & INDIA",
    "LOSSLESS MASTER VAULT",
    "DJI INSPIRE 3 8K AERIALS",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#060606] py-6 border-y border-[#ffffff]/08 select-none">
      <div className="flex w-max space-x-8 animate-marquee">
        {[...tickerItems, ...tickerItems].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center space-x-6 text-xs font-mono tracking-[0.3em] uppercase text-[#aaaaaa]/70"
          >
            <span className="hover:text-[var(--accent-primary)] transition-colors cursor-default">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]/50" />
          </div>
        ))}
      </div>
    </div>
  );
}
