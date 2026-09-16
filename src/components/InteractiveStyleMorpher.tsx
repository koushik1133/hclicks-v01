"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, Film, BookOpen, Columns, Sparkles } from "lucide-react";
import { useMood } from "@/context/MoodContext";

export type LayoutMode = "magazine-spread" | "cinema-reel" | "minimal-duo" | "editorial-masonry";

const demoWorks = [
  {
    id: "work-1",
    title: "The Falaknuma Palace Archways",
    subtitle: "Hyderabad Royal Wedding",
    location: "Hyderabad, India",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape",
  },
  {
    id: "work-2",
    title: "Lake Michigan Blue Hour",
    subtitle: "Chicago Urban Celebration",
    location: "Chicago, IL",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape",
  },
  {
    id: "work-3",
    title: "Bridal Zari & Heirlooms",
    subtitle: "Intimate Bridal Preparation",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
    aspect: "portrait",
  },
  {
    id: "work-4",
    title: "Illinois Prairie Golden Hour",
    subtitle: "Sunset Pre-Wedding Story",
    location: "Normal, IL",
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=80",
    aspect: "portrait",
  },
  {
    id: "work-5",
    title: "The Midnight Sangeet Dance",
    subtitle: "High-Energy Revelry",
    location: "Chicago Ballroom",
    image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape",
  },
  {
    id: "work-6",
    title: "The Sacred Agni Rituals",
    subtitle: "Heritage Vows & Mantras",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape",
  },
];

export function InteractiveStyleMorpher() {
  const [layoutMode, setLayoutMode] = useState<LayoutMode>("magazine-spread");
  const { config } = useMood();

  const layoutButtons: { id: LayoutMode; label: string; icon: React.ElementType }[] = [
    { id: "magazine-spread", label: "01 EDITORIAL SPREAD", icon: BookOpen },
    { id: "cinema-reel", label: "02 CINEMA SCOPE", icon: Film },
    { id: "minimal-duo", label: "03 MINIMAL DUO", icon: Columns },
    { id: "editorial-masonry", label: "04 CURATED GRID", icon: LayoutGrid },
  ];

  return (
    <section className="py-24 md:py-36 bg-[#050505] text-[#F5F5F7] relative border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header with Interactive Layout Controller */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#111113] px-4 py-1 text-[10px] tracking-[0.3em] text-[#A1A1A6] uppercase font-mono">
              <Sparkles className="w-3.5 h-3.5 text-[#2997FF]" />
              <span>DYNAMIC PORTFOLIO MORPHER</span>
            </div>
            <h2 className="font-editorial-title text-3xl sm:text-5xl md:text-6xl uppercase tracking-[0.05em] leading-tight">
              YOUR STORY IN <br />
              <span className="font-serif-luxury italic font-light text-[#F5F5F7] normal-case">
                Multiple Perspectives.
              </span>
            </h2>
            <p className="max-w-md text-xs sm:text-sm text-[#A1A1A6] font-light leading-relaxed">
              Experience how our visual stories seamlessly adapt across distinct editorial layouts, responsive grids, and cinematic film structures.
            </p>
          </div>

          {/* Layout Mode Selector Pills */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-[#111113]/90 border border-white/10 flex-wrap sm:flex-nowrap backdrop-blur-xl">
            {layoutButtons.map((btn) => {
              const Icon = btn.icon;
              const isActive = layoutMode === btn.id;

              return (
                <button
                  key={btn.id}
                  onClick={() => setLayoutMode(btn.id)}
                  className="relative flex items-center gap-2 rounded-full px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2997FF]"
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-morpher-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-[#F5F5F7] shadow-[0_0_20px_rgba(255,255,255,0.25)]"
                    />
                  )}
                  <span
                    className={`relative z-10 flex items-center gap-2 transition-colors duration-200 ${
                      isActive ? "text-[#050505] font-bold" : "text-[#A1A1A6] hover:text-[#F5F5F7]"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{btn.label}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Morphing Canvas */}
        <motion.div layout className="relative min-h-[500px]">
          {/* Mode 1: Editorial Spread (Asymmetric Large + Side Stacks) */}
          {layoutMode === "magazine-spread" && (
            <motion.div
              key="magazine"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
            >
              {/* Giant Left Hero Frame */}
              <div className="lg:col-span-7 relative group rounded-3xl overflow-hidden bg-[#0B0B0D] border border-white/10 min-h-[480px]">
                <Image
                  src={demoWorks[0].image}
                  alt={demoWorks[0].title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ filter: config.lutFilter }}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-8 left-8 right-8 space-y-2">
                  <span className="text-[10px] font-mono tracking-widest text-[#2997FF] uppercase">
                    FEATURED SPREAD • {demoWorks[0].location}
                  </span>
                  <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#F5F5F7]">
                    {demoWorks[0].title}
                  </h3>
                  <p className="text-xs text-[#A1A1A6] font-light">
                    {demoWorks[0].subtitle}
                  </p>
                </div>
              </div>

              {/* Right Stack (2 Cards) */}
              <div className="lg:col-span-5 flex flex-col gap-8">
                {demoWorks.slice(1, 3).map((item) => (
                  <div
                    key={item.id}
                    className="relative group rounded-3xl overflow-hidden bg-[#0B0B0D] border border-white/10 flex-1 min-h-[220px]"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{ filter: config.lutFilter }}
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-6 left-6 right-6 space-y-1">
                      <span className="text-[9px] font-mono tracking-widest text-[#A1A1A6] uppercase">
                        {item.location}
                      </span>
                      <h4 className="font-serif-luxury text-xl text-[#F5F5F7]">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Mode 2: Cinema Scope (2.39:1 Anamorphic Frames) */}
          {layoutMode === "cinema-reel" && (
            <motion.div
              key="cinema"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {demoWorks.slice(0, 3).map((item, idx) => (
                <div
                  key={item.id}
                  className="relative group aspect-cinemascope rounded-3xl overflow-hidden bg-[#050505] border border-white/10 shadow-2xl"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ filter: config.lutFilter }}
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent opacity-80" />
                  
                  {/* Top & Bottom Cinema Letterbox Borders */}
                  <div className="absolute top-0 inset-x-0 h-4 bg-[#050505]" />
                  <div className="absolute bottom-0 inset-x-0 h-4 bg-[#050505]" />

                  <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono tracking-widest text-[#2997FF] uppercase">
                        CINEMA FRAME 0{idx + 1} • {item.location}
                      </span>
                      <h3 className="font-serif-luxury text-2xl sm:text-4xl text-[#F5F5F7]">
                        {item.title}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-[#A1A1A6] bg-[#050505]/80 px-3 py-1 rounded-full border border-white/10">
                      2.39:1 ANAMORPHIC
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Mode 3: Minimalist Duo (50/50 Symmetrical Split) */}
          {layoutMode === "minimal-duo" && (
            <motion.div
              key="minimal"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {demoWorks.slice(0, 4).map((item) => (
                <div
                  key={item.id}
                  className="relative group aspect-[4/5] rounded-3xl overflow-hidden bg-[#0B0B0D] border border-white/10"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ filter: config.lutFilter }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-85" />
                  <div className="absolute bottom-8 left-8 right-8 space-y-1.5">
                    <span className="text-[10px] font-mono tracking-widest text-[#A1A1A6] uppercase">
                      {item.location}
                    </span>
                    <h3 className="font-serif-luxury text-2xl text-[#F5F5F7]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#6E6E73] font-light">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Mode 4: Curated Editorial Masonry Grid */}
          {layoutMode === "editorial-masonry" && (
            <motion.div
              key="masonry"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {demoWorks.map((item, idx) => (
                <div
                  key={item.id}
                  className={`relative group rounded-3xl overflow-hidden bg-[#0B0B0D] border border-white/10 ${
                    idx % 2 === 0 ? "aspect-[3/4]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ filter: config.lutFilter }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-6 left-6 right-6 space-y-1">
                    <span className="text-[9px] font-mono tracking-widest text-[#A1A1A6] uppercase">
                      {item.location}
                    </span>
                    <h4 className="font-serif-luxury text-xl text-[#F5F5F7]">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
