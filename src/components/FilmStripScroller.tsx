"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Film } from "lucide-react";
import { useMood } from "@/context/MoodContext";

const stripItems = [
  {
    title: "Palace Procession",
    location: "Hyderabad",
    url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80",
    ratio: "landscape",
  },
  {
    title: "Bridal Gaze & Jhumka",
    location: "USA",
    url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    ratio: "portrait",
  },
  {
    title: "Chicago Skyline Twilight",
    location: "Chicago, IL",
    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80",
    ratio: "landscape",
  },
  {
    title: "Sacred Agni Rituals",
    location: "Hyderabad",
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
    ratio: "landscape",
  },
  {
    title: "Prairie Golden Glow",
    location: "Normal, IL",
    url: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80",
    ratio: "portrait",
  },
  {
    title: "Sangeet Midnight Revelry",
    location: "Chicago, IL",
    url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1000&q=80",
    ratio: "landscape",
  },
  {
    title: "The Regal Veil",
    location: "Hyderabad",
    url: "https://images.unsplash.com/photo-1545232979-fbf68fe9ec47?auto=format&fit=crop&w=800&q=80",
    ratio: "portrait",
  },
];

export function FilmStripScroller() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { config } = useMood();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const xTransform1 = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-36 bg-[#050505] overflow-hidden border-y border-white/10 select-none"
    >
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-[10px] tracking-[0.3em] text-[#A1A1A6] uppercase font-mono">
            <Film className="w-3.5 h-3.5 text-[#2997FF]" />
            <span>35MM CINEMATIC REEL</span>
          </div>
          <h3 className="font-editorial-title text-2xl sm:text-4xl text-[#F5F5F7] tracking-[0.04em] uppercase">
            THE UNBROKEN <span className="font-serif-luxury italic text-[#F5F5F7] normal-case">Timeline</span>
          </h3>
        </div>
        <p className="text-xs text-[#A1A1A6] font-light max-w-sm">
          A continuous sequence of authentic light, spontaneous intimacy, and heirloom memories across both continents.
        </p>
      </div>

      {/* Film Strip Rail 1 */}
      <div className="relative w-full overflow-hidden">
        {/* Cinema Sprocket Holes */}
        <div className="flex justify-around py-1.5 opacity-20 border-y border-white/20 bg-[#0B0B0D] mb-3">
          {Array.from({ length: 28 }).map((_, i) => (
            <span key={i} className="w-2.5 h-1.5 rounded-sm bg-white/40" />
          ))}
        </div>

        <motion.div style={{ x: xTransform1 }} className="flex gap-6 w-max pl-6">
          {stripItems.map((item, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden rounded-xl bg-[#0B0B0D] border border-white/10 flex-shrink-0 group ${
                item.ratio === "portrait"
                  ? "w-[240px] sm:w-[300px] h-[340px] sm:h-[420px]"
                  : "w-[360px] sm:w-[480px] h-[340px] sm:h-[420px]"
              }`}
            >
              <Image
                src={item.url}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ filter: config.lutFilter }}
                sizes="(max-width: 768px) 300px, 480px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="text-[9px] tracking-[0.2em] text-[#2997FF] uppercase font-mono block">
                    {item.location}
                  </span>
                  <p className="font-serif-luxury text-base sm:text-lg text-[#F5F5F7] leading-tight">
                    {item.title}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-[#6E6E73]">FR-0{idx + 1}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Cinema Sprocket Holes */}
        <div className="flex justify-around py-1.5 opacity-20 border-y border-white/20 bg-[#0B0B0D] mt-3">
          {Array.from({ length: 28 }).map((_, i) => (
            <span key={i} className="w-2.5 h-1.5 rounded-sm bg-white/40" />
          ))}
        </div>
      </div>
    </section>
  );
}
