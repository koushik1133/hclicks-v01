"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useVelocity, useSpring } from "framer-motion";
import { useMood } from "@/context/MoodContext";

const rowStills1 = [
  { title: "Hyderabad Heritage Archways", url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80" },
  { title: "Lake Michigan Blue Hour", url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80" },
  { title: "Bridal Henna Nuances", url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80" },
  { title: "The Sacred Fire Mantras", url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80" },
];

const rowStills2 = [
  { title: "Falaknuma Palace Courtyard", url: "https://images.unsplash.com/photo-1545232979-fbf68fe9ec47?auto=format&fit=crop&w=1200&q=80" },
  { title: "Chicago Ballroom First Dance", url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80" },
  { title: "Illinois Prairie Golden Flare", url: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=80" },
  { title: "Sangeet Midnight Revelry", url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=80" },
];

const rowStills3 = [
  { title: "Editorial Bridal Silhouette", url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80" },
  { title: "Drone Sunset Over Hyderabad", url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80" },
  { title: "Quiet Pre-Wedding Intimacy", url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80" },
  { title: "Groom Squad Arrival", url: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=800&q=80" },
];

export function RallyMovingReel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { config } = useMood();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scrollVelocity = useVelocity(scrollYProgress);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });

  // 5 Rows depth-staggered:
  // TOP: slow ←
  const topRowX = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  // UPPER: medium →
  const upperRowX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  // CENTER: FAST ← (closer, larger scale)
  const centerRowX = useTransform(scrollYProgress, [0, 1], ["5%", "-30%"]);
  // LOWER: medium →
  const lowerRowX = useTransform(scrollYProgress, [0, 1], ["-15%", "12%"]);
  // BOTTOM: slow ←
  const bottomRowX = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-36 bg-[#050505] text-[#F5F5F7] relative border-b border-white/10 overflow-hidden select-none"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-3">
          <span className="text-[11px] font-mono tracking-[0.3em] text-[#A1A1A6] uppercase">
            RALLY GALLERY • 35MM FILM CONTACT SHEET
          </span>
          <h2 className="font-editorial-title text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#FFFFFF]">
            THE MOVING <span className="font-serif-luxury italic font-light text-[#F5F5F7] normal-case">Contact Sheet.</span>
          </h2>
        </div>
        <p className="max-w-sm text-xs sm:text-sm text-[#A1A1A6] font-light leading-relaxed">
          Depth-staggered 5-tier film sequences reacting dynamically to scroll velocity across space.
        </p>
      </div>

      {/* 5-Tier Moving Rally Contact Sheet */}
      <div className="space-y-4">
        {/* Row 1: TOP (Slow ←, Muted blur) */}
        <motion.div style={{ x: topRowX }} className="flex gap-4 w-max pl-6 opacity-40 blur-[0.5px]">
          {[...rowStills1, ...rowStills1].map((item, idx) => (
            <div
              key={idx}
              className="relative w-[180px] sm:w-[220px] h-[120px] sm:h-[140px] rounded-xl overflow-hidden bg-[#111113] border border-white/10 flex-shrink-0"
            >
              <Image src={item.url} alt={item.title} fill className="object-cover" style={{ filter: config.lutFilter }} sizes="220px" />
            </div>
          ))}
        </motion.div>

        {/* Row 2: UPPER (Medium →) */}
        <motion.div style={{ x: upperRowX }} className="flex gap-4 w-max pl-6 opacity-70">
          {[...rowStills3, ...rowStills3].map((item, idx) => (
            <div
              key={idx}
              className="relative w-[220px] sm:w-[280px] h-[150px] sm:h-[180px] rounded-2xl overflow-hidden bg-[#111113] border border-white/10 flex-shrink-0"
            >
              <Image src={item.url} alt={item.title} fill className="object-cover" style={{ filter: config.lutFilter }} sizes="280px" />
            </div>
          ))}
        </motion.div>

        {/* Row 3: CENTER (FAST ←, Closer, Crisp focus, Scale 1.05, Highest Z-Index) */}
        <motion.div style={{ x: centerRowX }} className="flex gap-6 w-max pl-6 z-20 relative">
          {[...rowStills2, ...rowStills2].map((item, idx) => (
            <div
              key={idx}
              className="relative w-[340px] sm:w-[460px] h-[220px] sm:h-[300px] rounded-3xl overflow-hidden bg-[#111113] border border-white/20 flex-shrink-0 shadow-2xl group transition-all duration-500 hover:scale-[1.02]"
            >
              <Image
                src={item.url}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ filter: config.lutFilter }}
                sizes="460px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-[#A1A1A6]">
                <span className="text-[#FFFFFF] font-serif-luxury text-base sm:text-lg">{item.title}</span>
                <span className="text-[#2997FF] text-[10px]">35MM FILM</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Row 4: LOWER (Medium →) */}
        <motion.div style={{ x: lowerRowX }} className="flex gap-4 w-max pl-6 opacity-70">
          {[...rowStills1, ...rowStills1].map((item, idx) => (
            <div
              key={idx}
              className="relative w-[220px] sm:w-[280px] h-[150px] sm:h-[180px] rounded-2xl overflow-hidden bg-[#111113] border border-white/10 flex-shrink-0"
            >
              <Image src={item.url} alt={item.title} fill className="object-cover" style={{ filter: config.lutFilter }} sizes="280px" />
            </div>
          ))}
        </motion.div>

        {/* Row 5: BOTTOM (Slow ←, Muted blur) */}
        <motion.div style={{ x: bottomRowX }} className="flex gap-4 w-max pl-6 opacity-40 blur-[0.5px]">
          {[...rowStills3, ...rowStills3].map((item, idx) => (
            <div
              key={idx}
              className="relative w-[180px] sm:w-[220px] h-[120px] sm:h-[140px] rounded-xl overflow-hidden bg-[#111113] border border-white/10 flex-shrink-0"
            >
              <Image src={item.url} alt={item.title} fill className="object-cover" style={{ filter: config.lutFilter }} sizes="220px" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
