"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Camera, Film, MapPin, Sparkles } from "lucide-react";
import { featuredStories, StoryItem } from "@/data/portfolioData";

interface FeaturedStoriesProps {
  onSelectStory: (story: StoryItem) => void;
}

export function FeaturedStories({ onSelectStory }: FeaturedStoriesProps) {
  return (
    <section id="stories" className="py-24 md:py-36 bg-[#080808] text-[#f4efea] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 pb-8 border-b border-[#ffffff]/10 gap-6">
          <div className="space-y-3">
            <span className="text-[11px] tracking-[0.35em] text-[#c8a97e] uppercase font-sans font-medium">
              SIGNATURE WORK
            </span>
            <h2 className="font-editorial-title text-3xl sm:text-5xl md:text-6xl uppercase tracking-[0.06em]">
              FEATURED <span className="font-serif-luxury italic font-light normal-case text-gold-gradient">Stories</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#888888] font-light leading-relaxed">
            Curated visual archives where bespoke traditions, authentic intimacy, and motion picture craft converge.
          </p>
        </div>

        {/* Stories List with Varied Editorial Layouts */}
        <div className="space-y-28 md:space-y-40">
          {featuredStories.map((story, index) => {
            const isEven = index % 2 === 0;

            if (story.layoutType === "split") {
              return (
                <div
                  key={story.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
                >
                  {/* Image side */}
                  <div className="lg:col-span-7 order-1 lg:order-1">
                    <div
                      onClick={() => onSelectStory(story)}
                      data-cursor="view"
                      className="group relative overflow-hidden rounded-2xl bg-[#121212] aspect-[4/3] sm:aspect-[16/10] cursor-pointer"
                    >
                      <Image
                        src={story.coverImage}
                        alt={story.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                      
                      {/* Floating Badge */}
                      <div className="absolute top-6 left-6 flex items-center gap-2 rounded-full border border-[#ffffff]/20 bg-[#080808]/70 px-4 py-1.5 backdrop-blur-md">
                        <span className="text-[10px] tracking-[0.25em] text-[#c8a97e] uppercase font-semibold">
                          {story.number} • {story.category}
                        </span>
                      </div>

                      {/* Click overlay hint */}
                      <div className="absolute bottom-6 right-6 flex items-center gap-2 rounded-full bg-[#c8a97e] px-4 py-2 text-xs font-semibold text-[#080808] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <span>EXPLORE STORY</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* Content side */}
                  <div className="lg:col-span-5 order-2 lg:order-2 space-y-6">
                    <div className="flex items-center gap-2 text-xs text-[#c8a97e] tracking-[0.2em] uppercase font-medium">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{story.location}</span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#f4efea] leading-tight">
                        {story.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#c8a97e]/90 font-light tracking-wide">
                        {story.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#888888] leading-relaxed font-light">
                      {story.overview}
                    </p>

                    {/* Camera Specs Tag */}
                    <div className="rounded-xl border border-[#ffffff]/08 bg-[#101010] p-4 text-[11px] text-[#999999] space-y-1.5">
                      <div className="flex items-center gap-2 text-[#c8a97e]">
                        <Camera className="w-3.5 h-3.5" />
                        <span className="font-medium tracking-wider uppercase">CRAFT SIGNATURE</span>
                      </div>
                      <p className="text-[#666666] font-mono text-[10px]">
                        {story.specs.cameras} • {story.specs.optics}
                      </p>
                    </div>

                    <button
                      onClick={() => onSelectStory(story)}
                      className="group inline-flex items-center gap-2 text-xs font-medium tracking-[0.22em] text-[#c8a97e] uppercase hover:text-[#f4efea] transition-colors"
                    >
                      <span>VIEW FULL STORY & GALLERY</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>
                  </div>
                </div>
              );
            }

            if (story.layoutType === "wide") {
              return (
                <div key={story.id} className="space-y-8">
                  <div
                    onClick={() => onSelectStory(story)}
                    data-cursor="view"
                    className="group relative overflow-hidden rounded-2xl bg-[#121212] aspect-[16/9] md:aspect-[21/9] cursor-pointer"
                  >
                    <Image
                      src={story.coverImage}
                      alt={story.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Story overlay content */}
                    <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="rounded-full border border-[#ffffff]/20 bg-[#080808]/70 px-4 py-1.5 text-[10px] tracking-[0.25em] text-[#c8a97e] uppercase font-semibold backdrop-blur-md">
                          {story.number} • {story.category}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-[#dcd2c3] bg-[#080808]/70 px-3 py-1 rounded-full backdrop-blur-md">
                          <MapPin className="w-3 h-3 text-[#c8a97e]" />
                          {story.location}
                        </span>
                      </div>

                      <div className="max-w-2xl space-y-2">
                        <h3 className="font-serif-luxury text-2xl sm:text-4xl md:text-5xl text-[#f4efea] leading-tight">
                          {story.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#dcd2c3]/80 font-light line-clamp-2">
                          {story.narrative}
                        </p>
                        <div className="pt-2">
                          <span className="inline-flex items-center gap-1.5 text-xs tracking-[0.2em] text-[#c8a97e] uppercase font-medium group-hover:underline">
                            VIEW ARCHIVE →
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // Default Editorial Frame
            return (
              <div
                key={story.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
              >
                {/* Content side */}
                <div className={`lg:col-span-5 ${isEven ? "order-2 lg:order-1" : "order-2 lg:order-2"} space-y-6`}>
                  <div className="flex items-center gap-2 text-xs text-[#c8a97e] tracking-[0.2em] uppercase font-medium">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{story.location}</span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[11px] tracking-[0.3em] text-[#777777] uppercase font-mono">
                      STORY {story.number}
                    </span>
                    <h3 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#f4efea] leading-tight">
                      {story.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#c8a97e]/90 font-light tracking-wide">
                      {story.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#888888] leading-relaxed font-light">
                    {story.overview}
                  </p>

                  <button
                    onClick={() => onSelectStory(story)}
                    className="group inline-flex items-center gap-2 text-xs font-medium tracking-[0.22em] text-[#c8a97e] uppercase hover:text-[#f4efea] transition-colors"
                  >
                    <span>EXPLORE VISUAL ARCHIVE</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </div>

                {/* Image side */}
                <div className={`lg:col-span-7 ${isEven ? "order-1 lg:order-2" : "order-1 lg:order-1"}`}>
                  <div
                    onClick={() => onSelectStory(story)}
                    data-cursor="view"
                    className="group relative overflow-hidden rounded-2xl bg-[#121212] aspect-[4/3] sm:aspect-[16/10] cursor-pointer"
                  >
                    <Image
                      src={story.coverImage}
                      alt={story.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    <div className="absolute top-6 left-6 flex items-center gap-2 rounded-full border border-[#ffffff]/20 bg-[#080808]/70 px-4 py-1.5 backdrop-blur-md">
                      <span className="text-[10px] tracking-[0.25em] text-[#c8a97e] uppercase font-semibold">
                        {story.number} • {story.category}
                      </span>
                    </div>

                    <div className="absolute bottom-6 right-6 flex items-center gap-2 rounded-full bg-[#c8a97e] px-4 py-2 text-xs font-semibold text-[#080808] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <span>VIEW STORY</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
