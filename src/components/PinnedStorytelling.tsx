"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Camera, ArrowUpRight } from "lucide-react";
import { featuredStories, StoryItem } from "@/data/portfolioData";
import { useMood } from "@/context/MoodContext";

interface PinnedStorytellingProps {
  onSelectStory: (story: StoryItem) => void;
}

export function PinnedStorytelling({ onSelectStory }: PinnedStorytellingProps) {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const currentStory = featuredStories[activeStoryIndex];
  const { config } = useMood();

  return (
    <section id="weddings" className="py-24 md:py-36 bg-[#050505] text-[#F5F5F7] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div className="space-y-3">
            <span className="text-[11px] font-mono tracking-[0.3em] text-[#A1A1A6] uppercase">
              FEATURED COMMISSIONS
            </span>
            <h2 className="font-editorial-title text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#FFFFFF]">
              CINEMATIC <span className="font-serif-luxury italic font-light text-[#F5F5F7] normal-case">Stories.</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#A1A1A6] font-light leading-relaxed">
            Case studies of royal South Asian celebrations, urban lakefront nuptials, and sun-drenched editorial narratives.
          </p>
        </div>

        {/* Story Step Selectors */}
        <div className="flex items-center gap-3 overflow-x-auto pb-6 mb-12 no-scrollbar">
          {featuredStories.map((story, idx) => (
            <button
              key={story.id}
              onClick={() => setActiveStoryIndex(idx)}
              className={`rounded-full px-5 py-2.5 text-xs font-mono uppercase tracking-wider transition-all duration-300 flex-shrink-0 flex items-center gap-2.5 ${
                idx === activeStoryIndex
                  ? "bg-[#F5F5F7] text-[#050505] font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                  : "border border-white/15 bg-[#111113] text-[#A1A1A6] hover:text-[#FFFFFF] hover:border-white/30"
              }`}
            >
              <span>{story.number}</span>
              <span>•</span>
              <span>{story.title}</span>
            </button>
          ))}
        </div>

        {/* Pinned Cinematic Frame Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center rounded-3xl border border-white/10 bg-[#0B0B0D] p-6 sm:p-10 lg:p-14">
          {/* Left Column: Story Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-4xl sm:text-5xl font-editorial-title font-bold text-[#F5F5F7]">
                {currentStory.number}
              </span>
              <div className="h-6 w-[1px] bg-white/20" />
              <div className="flex items-center gap-1.5 text-xs text-[#A1A1A6] font-mono uppercase">
                <MapPin className="w-3.5 h-3.5 text-[#2997FF]" />
                <span>{currentStory.location}</span>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#FFFFFF] leading-tight">
                {currentStory.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A1A1A6] font-serif-luxury italic">
                {currentStory.subtitle}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#A1A1A6] leading-relaxed font-light">
              {currentStory.narrative}
            </p>

            {/* Technical Specs Pill */}
            <div className="rounded-2xl border border-white/10 bg-[#111113] p-4 text-xs space-y-1.5 font-mono">
              <div className="flex items-center gap-2 text-[#2997FF]">
                <Camera className="w-3.5 h-3.5" />
                <span className="text-[10px] tracking-wider uppercase font-bold">PRODUCTION SPECIFICATIONS</span>
              </div>
              <p className="text-[11px] text-[#6E6E73]">
                {currentStory.specs.cameras} • {currentStory.specs.optics}
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onSelectStory(currentStory)}
                className="group inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-[#FFFFFF] uppercase hover:text-[#2997FF] transition-colors"
              >
                <span>EXPLORE COMPLETE STORY ARCHIVE</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Frame */}
          <div className="lg:col-span-7">
            <div
              onClick={() => onSelectStory(currentStory)}
              className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-2xl bg-[#050505] border border-white/10 shadow-2xl cursor-pointer group"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStory.id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={currentStory.coverImage}
                    alt={currentStory.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: config.lutFilter }}
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-60" />
                </motion.div>
              </AnimatePresence>

              {/* Tag in Frame */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <span className="rounded-full bg-[#050505]/80 backdrop-blur-md px-3.5 py-1 text-[10px] font-mono tracking-widest text-[#F5F5F7] uppercase border border-white/10">
                  {currentStory.category} • {currentStory.year}
                </span>
                <span className="text-xs font-mono text-[#FFFFFF] bg-[#050505]/80 px-3 py-1 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                  VIEW ARCHIVE →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
