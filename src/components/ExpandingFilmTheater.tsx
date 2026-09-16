"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Clock, MapPin, Volume2, VolumeX } from "lucide-react";
import { cinemaReels, FilmItem } from "@/data/portfolioData";
import { MagneticButton } from "./MagneticButton";
import { useMood } from "@/context/MoodContext";

interface ExpandingFilmTheaterProps {
  onOpenInquiry: () => void;
}

export function ExpandingFilmTheater({ onOpenInquiry }: ExpandingFilmTheaterProps) {
  const [activeFilm, setActiveFilm] = useState<FilmItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isMuted, setIsMuted] = useState(false);
  const { config } = useMood();

  const categories = ["All", "Wedding Cinema", "Destination Highlight", "Pre-Wedding Film", "Commercial Film"];

  const filteredFilms =
    selectedCategory === "All"
      ? cinemaReels
      : cinemaReels.filter((film) => film.category === selectedCategory);

  return (
    <section id="films" className="py-24 md:py-36 bg-[#050505] text-[#F5F5F7] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div className="space-y-3">
            <span className="text-[11px] font-mono tracking-[0.3em] text-[#A1A1A6] uppercase">
              MASTER CINEMATOGRAPHY • 2.39:1 ANAMORPHIC
            </span>
            <h2 className="font-editorial-title text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#FFFFFF]">
              THE <span className="font-serif-luxury italic font-light text-[#F5F5F7] normal-case">Films.</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#A1A1A6] font-light leading-relaxed">
            Captured on RED Cinema 8K sensors and Cooke anamorphic optics. Paced with original audio mastering and Hollywood color science.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-6 mb-12 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-5 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-300 flex-shrink-0 ${
                selectedCategory === cat
                  ? "bg-[#F5F5F7] text-[#050505] font-semibold shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                  : "border border-white/10 bg-[#111113] text-[#A1A1A6] hover:text-[#FFFFFF] hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Expanding Film Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredFilms.map((film, idx) => (
            <motion.div
              key={film.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative flex flex-col rounded-3xl border border-white/10 bg-[#0B0B0D] overflow-hidden transition-all duration-500 hover:border-white/25"
            >
              {/* Cinema 2.39:1 Letterbox Frame */}
              <div
                onClick={() => setActiveFilm(film)}
                className="relative aspect-cinemascope w-full overflow-hidden bg-[#050505] cursor-pointer"
              >
                <Image
                  src={film.thumbnail}
                  alt={film.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: config.lutFilter }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-[#050505]/80 backdrop-blur-md px-3 py-1 text-[10px] font-mono tracking-widest text-[#F5F5F7] uppercase border border-white/10">
                    {film.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-[#050505]/80 px-3 py-1 text-[10px] text-[#A1A1A6] font-mono backdrop-blur-md border border-white/10">
                  <Clock className="w-3 h-3 text-[#2997FF]" />
                  <span>{film.duration}</span>
                </div>

                {/* Apple-Style Interactive Magnetic Play Control (max 5-8px movement) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <MagneticButton strength={0.2}>
                    <div className="flex items-center gap-2 rounded-full bg-[#F5F5F7] text-[#050505] px-5 py-2.5 shadow-2xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#FFFFFF]">
                      <Play className="h-3.5 w-3.5 fill-current ml-0.5" />
                      <span className="text-xs font-semibold tracking-wider uppercase font-mono">
                        WATCH FILM
                      </span>
                    </div>
                  </MagneticButton>
                </div>
              </div>

              {/* Info Block */}
              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-[#A1A1A6] font-mono">
                    <MapPin className="w-3.5 h-3.5 text-[#2997FF]" />
                    <span>{film.location}</span>
                  </div>
                  <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#FFFFFF] leading-snug">
                    {film.title}
                  </h3>
                  <p className="text-xs text-[#A1A1A6] font-light leading-relaxed line-clamp-2">
                    {film.description}
                  </p>
                </div>

                {/* Tags & Trigger */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <div className="flex flex-wrap gap-1.5">
                    {film.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-mono text-[#6E6E73] bg-[#111113] px-2 py-0.5 rounded border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveFilm(film)}
                    className="text-xs font-mono text-[#F5F5F7] hover:text-[#2997FF] uppercase transition-colors"
                  >
                    PLAY REEL →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 2.39:1 Full-Screen Cinema Theater Modal */}
      <AnimatePresence>
        {activeFilm && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]/98 backdrop-blur-2xl p-4 sm:p-8"
          >
            <div className="relative w-full max-w-5xl rounded-3xl border border-white/15 bg-[#0B0B0D] overflow-hidden shadow-2xl">
              {/* Top Theater Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#050505]">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#2997FF] animate-pulse" />
                  <span className="text-xs font-mono tracking-widest text-[#F5F5F7] uppercase">
                    {activeFilm.title} • 2.39:1 CINEMATIC MASTER
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="rounded-full border border-white/15 p-2 text-[#A1A1A6] hover:text-white transition-colors"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => setActiveFilm(null)}
                    className="rounded-full border border-white/15 p-2 text-[#A1A1A6] hover:text-[#FFFFFF] transition-colors"
                    aria-label="Close Theater"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* 2.39:1 Anamorphic Cinema Viewer */}
              <div className="relative aspect-cinemascope w-full bg-black overflow-hidden flex items-center justify-center">
                {activeFilm.previewVideoUrl ? (
                  <video
                    src={activeFilm.previewVideoUrl}
                    controls
                    autoPlay
                    muted={isMuted}
                    playsInline
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="relative h-full w-full">
                    <Image
                      src={activeFilm.thumbnail}
                      alt={activeFilm.title}
                      fill
                      className="object-cover"
                      style={{ filter: config.lutFilter }}
                    />
                  </div>
                )}
              </div>

              {/* Bottom Cinema Controls */}
              <div className="p-6 md:p-8 bg-[#0B0B0D] flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10">
                <div>
                  <p className="text-xs font-mono text-[#6E6E73]">{activeFilm.location} • {activeFilm.duration}</p>
                  <h4 className="font-serif-luxury text-xl text-[#F5F5F7]">{activeFilm.title}</h4>
                </div>
                <button
                  onClick={() => {
                    setActiveFilm(null);
                    onOpenInquiry();
                  }}
                  className="rounded-full bg-[#F5F5F7] px-6 py-2.5 text-xs font-semibold tracking-wider text-[#050505] uppercase hover:bg-[#FFFFFF] transition-all flex-shrink-0"
                >
                  INQUIRE CINEMA DATES
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
