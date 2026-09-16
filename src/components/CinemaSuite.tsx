"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Volume2, Maximize2, Sparkles, Film as FilmIcon, Clock, MapPin } from "lucide-react";
import { cinemaReels, FilmItem } from "@/data/portfolioData";

interface CinemaSuiteProps {
  onOpenInquiry: () => void;
}

export function CinemaSuite({ onOpenInquiry }: CinemaSuiteProps) {
  const [activeFilm, setActiveFilm] = useState<FilmItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Wedding Cinema", "Destination Highlight", "Pre-Wedding Film", "Commercial Film"];

  const filteredFilms =
    selectedCategory === "All"
      ? cinemaReels
      : cinemaReels.filter((film) => film.category === selectedCategory);

  return (
    <section id="films" className="py-24 md:py-36 bg-[#0a0a0a] text-[#f4efea] relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-[#c8a97e]/05 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#ffffff]/10 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[10px] tracking-[0.35em] text-[#2997FF] uppercase font-sans font-medium">
              <FilmIcon className="w-3.5 h-3.5" />
              <span>CINEMATOGRAPHY SUITE</span>
            </div>
            <h2 className="font-editorial-title text-3xl sm:text-5xl md:text-6xl uppercase tracking-[0.04em] leading-[1.05]">
              THE MOMENTS <br />
              <span className="font-serif-luxury italic text-gold-gradient normal-case">
                Between The Moments.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#888888] font-light leading-relaxed">
            Filmed on RED Cinema sensors and anamorphic glass, our master films capture audio textures, vows, and heartbeats with Hollywood-caliber dynamic range.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-6 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-5 py-2 text-xs font-medium tracking-wider uppercase transition-all duration-300 flex-shrink-0 ${
                selectedCategory === cat
                  ? "bg-[#c8a97e] text-[#080808] shadow-[0_0_20px_rgba(200,169,126,0.3)] font-semibold"
                  : "border border-[#ffffff]/10 bg-[#121212] text-[#aaaaaa] hover:border-[#c8a97e]/40 hover:text-[#f4efea]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Cinema Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredFilms.map((film, idx) => (
            <motion.div
              key={film.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative flex flex-col rounded-2xl border border-[#ffffff]/08 bg-[#121212] overflow-hidden transition-all duration-500 hover:border-[#c8a97e]/40 hover:shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
            >
              {/* Cinema Frame Thumbnail */}
              <div
                onClick={() => setActiveFilm(film)}
                data-cursor="play"
                className="relative aspect-video w-full overflow-hidden bg-[#000000] cursor-pointer"
              >
                <Image
                  src={film.thumbnail}
                  alt={film.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                {/* Duration & Location Badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="rounded-full border border-[#ffffff]/20 bg-[#080808]/80 px-3 py-1 text-[10px] tracking-wider text-[#2997FF] uppercase font-mono backdrop-blur-md">
                    {film.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-[#080808]/80 px-2.5 py-1 text-[10px] text-[#dcd2c3] font-mono backdrop-blur-md">
                  <Clock className="w-3 h-3 text-[#2997FF]" />
                  <span>{film.duration}</span>
                </div>

                {/* Custom Cinema Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#c8a97e]/50 bg-[#080808]/80 text-[#2997FF] backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#c8a97e] group-hover:text-[#080808] shadow-2xl">
                    <Play className="h-6 w-6 fill-current ml-1" />
                  </div>
                </div>

                {/* Cinematic Letterbox Bars */}
                <div className="absolute top-0 inset-x-0 h-2 bg-[#080808]" />
                <div className="absolute bottom-0 inset-x-0 h-2 bg-[#080808]" />
              </div>

              {/* Info Block */}
              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-[#999999]">
                    <MapPin className="w-3.5 h-3.5 text-[#2997FF]" />
                    <span>{film.location}</span>
                  </div>
                  <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#f4efea] group-hover:text-[#2997FF] transition-colors leading-snug">
                    {film.title}
                  </h3>
                  <p className="text-xs text-[#888888] font-light leading-relaxed line-clamp-2">
                    {film.description}
                  </p>
                </div>

                {/* Tags & Action */}
                <div className="pt-4 border-t border-[#ffffff]/08 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {film.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-mono tracking-wider text-[#666666] bg-[#1a1a1a] px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveFilm(film)}
                    className="text-xs font-semibold tracking-[0.2em] text-[#2997FF] uppercase hover:underline"
                  >
                    WATCH FILM
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cinema Theater Modal */}
      <AnimatePresence>
        {activeFilm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#060606]/96 backdrop-blur-2xl p-4 sm:p-8"
          >
            <div className="relative w-full max-w-5xl rounded-2xl border border-[#c8a97e]/30 bg-[#0c0c0c] overflow-hidden shadow-2xl">
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#ffffff]/10 bg-[#080808]">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
                  <span className="text-xs font-mono tracking-widest text-[#2997FF] uppercase">
                    HCLICKS CINEMA THEATER • 4K MASTER PREVIEW
                  </span>
                </div>
                <button
                  onClick={() => setActiveFilm(null)}
                  className="rounded-full border border-[#ffffff]/20 p-2 text-[#cccccc] hover:border-[#c8a97e] hover:text-[#2997FF] transition-colors"
                  aria-label="Close Theater"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player */}
              <div className="relative aspect-video w-full bg-black">
                {activeFilm.previewVideoUrl ? (
                  <video
                    src={activeFilm.previewVideoUrl}
                    controls
                    autoPlay
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
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 p-6 text-center">
                      <FilmIcon className="w-12 h-12 text-[#2997FF] mb-3 animate-pulse" />
                      <p className="font-serif-luxury text-2xl text-[#f4efea]">
                        Private Cinema Screening
                      </p>
                      <p className="text-xs text-[#aaaaaa] max-w-md mt-2">
                        This full-length wedding film is hosted on our private client screening server. Contact our studio for direct screening credentials.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Bottom Metadata */}
              <div className="p-6 md:p-8 bg-[#0c0c0c] flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#ffffff]/10">
                <div className="space-y-1">
                  <span className="text-[10px] tracking-[0.2em] text-[#2997FF] uppercase font-mono">
                    {activeFilm.location} • {activeFilm.duration}
                  </span>
                  <h4 className="font-serif-luxury text-xl md:text-2xl text-[#f4efea]">
                    {activeFilm.title}
                  </h4>
                  <p className="text-xs text-[#888888] font-light max-w-xl">
                    {activeFilm.description}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setActiveFilm(null);
                    onOpenInquiry();
                  }}
                  className="rounded-full bg-[#c8a97e] px-6 py-3 text-xs font-semibold tracking-[0.2em] text-[#080808] uppercase hover:bg-[#e2c99b] transition-all flex-shrink-0"
                >
                  INQUIRE CINEMA COVERAGE
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
