"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Camera, MapPin } from "lucide-react";
import { StoryItem } from "@/data/portfolioData";
import { useMood } from "@/context/MoodContext";

interface StoryDetailModalProps {
  story: StoryItem | null;
  onClose: () => void;
  onOpenInquiry: () => void;
}

export function StoryDetailModal({ story, onClose, onOpenInquiry }: StoryDetailModalProps) {
  const { config } = useMood();
  if (!story) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex justify-end bg-[#050505]/95 backdrop-blur-2xl overflow-y-auto"
      >
        {/* Backdrop Click */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* Modal Container */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 250 }}
          className="relative z-10 w-full max-w-4xl bg-[#0B0B0D] border-l border-white/10 min-h-screen p-6 sm:p-10 md:p-16 flex flex-col justify-between shadow-2xl text-[#F5F5F7]"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <span className="rounded-full border border-white/15 bg-[#111113] px-3.5 py-1 text-[10px] font-mono tracking-widest text-[#F5F5F7] uppercase">
                {story.number} • {story.category}
              </span>
              <span className="text-xs text-[#A1A1A6] font-mono flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#2997FF]" />
                {story.location}
              </span>
            </div>

            <button
              onClick={onClose}
              className="rounded-full border border-white/20 bg-[#111113] p-2.5 text-[#A1A1A6] hover:border-white/40 hover:text-[#F5F5F7] transition-colors"
              aria-label="Close Story"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Story Content */}
          <div className="space-y-12 flex-1">
            {/* Title & Subtitle */}
            <div className="space-y-3">
              <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-[#F5F5F7] leading-tight">
                {story.title}
              </h2>
              <p className="text-base sm:text-lg text-[#A1A1A6] font-serif-luxury italic">
                {story.subtitle}
              </p>
            </div>

            {/* Hero Cover Frame */}
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#050505] border border-white/10 shadow-2xl">
              <Image
                src={story.coverImage}
                alt={story.title}
                fill
                className="object-cover"
                style={{ filter: config.lutFilter }}
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>

            {/* Narrative & Quote */}
            <div className="space-y-6">
              <p className="text-sm sm:text-base text-[#F5F5F7] leading-relaxed font-light">
                {story.overview}
              </p>
              <p className="text-sm sm:text-base text-[#A1A1A6] leading-relaxed font-light">
                {story.narrative}
              </p>

              {story.quote && (
                <div className="border-l-2 border-[#2997FF] pl-6 py-2 my-6 bg-[#111113] rounded-r-xl">
                  <p className="font-serif-luxury text-lg sm:text-xl text-[#F5F5F7] italic">
                    “{story.quote}”
                  </p>
                  <span className="text-[10px] font-mono tracking-widest text-[#2997FF] uppercase block mt-2">
                    — CLIENT REFLECTION
                  </span>
                </div>
              )}
            </div>

            {/* Gallery Stills inside Story */}
            <div className="space-y-6">
              <h3 className="text-xs font-semibold tracking-[0.3em] text-[#A1A1A6] uppercase font-mono">
                ARCHIVE PHOTOSET
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {story.gallery.map((g, idx) => (
                  <div
                    key={idx}
                    className={`relative rounded-xl overflow-hidden bg-[#050505] border border-white/10 ${
                      g.aspect === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={g.url}
                      alt={g.caption}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      style={{ filter: config.lutFilter }}
                      sizes="(max-width: 640px) 100vw, 400px"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050505] to-transparent p-3">
                      <p className="text-[11px] text-[#A1A1A6] font-light">{g.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Craft Specifications */}
            <div className="rounded-2xl border border-white/15 bg-[#111113] p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs text-[#2997FF] font-semibold tracking-widest uppercase">
                <Camera className="w-4 h-4" />
                <span>TECHNICAL & CINEMA SPECIFICATIONS</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[10px] text-[#6E6E73] uppercase font-mono block">Primary Systems</span>
                  <p className="text-[#F5F5F7] font-medium">{story.specs.cameras}</p>
                </div>
                <div>
                  <span className="text-[10px] text-[#6E6E73] uppercase font-mono block">Optics & Glass</span>
                  <p className="text-[#F5F5F7] font-medium">{story.specs.optics}</p>
                </div>
                <div>
                  <span className="text-[10px] text-[#6E6E73] uppercase font-mono block">Aerial Platform</span>
                  <p className="text-[#F5F5F7] font-medium">{story.specs.drone}</p>
                </div>
                <div>
                  <span className="text-[10px] text-[#6E6E73] uppercase font-mono block">Master Color Profile</span>
                  <p className="text-[#F5F5F7] font-medium">{story.specs.colorGrade}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Bottom Reservation Bar */}
          <div className="pt-8 mt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs text-[#6E6E73]">Ready to craft your custom visual archive?</p>
              <p className="text-sm font-serif-luxury text-[#F5F5F7]">Reserve coverage in USA or Hyderabad</p>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenInquiry();
              }}
              className="w-full sm:w-auto rounded-full bg-[#F5F5F7] px-8 py-3.5 text-xs font-semibold tracking-[0.25em] text-[#050505] uppercase hover:bg-[#FFFFFF] transition-all"
            >
              INQUIRE FOR YOUR DATES
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
