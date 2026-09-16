"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, Maximize2, MapPin, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryItems, GalleryItem } from "@/data/portfolioData";

export function EditorialGallery() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const tabs = [
    { id: "all", label: "All Stills" },
    { id: "royal-weddings", label: "Royal Weddings" },
    { id: "usa-weddings", label: "USA Celebrations" },
    { id: "pre-wedding", label: "Pre-Wedding" },
    { id: "portraits", label: "Fine Portraits" },
    { id: "cinema-drone", label: "Drone & Aerials" },
  ];

  const filteredItems =
    activeTab === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 md:py-36 bg-[#080808] text-[#f4efea] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Gallery Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-[#ffffff]/10 gap-6">
          <div className="space-y-3">
            <span className="text-[11px] tracking-[0.35em] text-[#c8a97e] uppercase font-sans font-medium">
              CURATED ARCHIVE
            </span>
            <h2 className="font-editorial-title text-3xl sm:text-5xl md:text-6xl uppercase tracking-[0.05em]">
              THE EDITORIAL <span className="font-serif-luxury italic font-light normal-case text-gold-gradient">Gallery</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#888888] font-light leading-relaxed">
            Every frame is a preserved moment in time — rich in nuance, bathed in organic color science, and captured with medium-format precision.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-6 mb-12 no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-5 py-2 text-xs font-medium tracking-wider uppercase transition-all duration-300 flex-shrink-0 ${
                activeTab === tab.id
                  ? "bg-[#c8a97e] text-[#080808] font-semibold shadow-[0_0_20px_rgba(200,169,126,0.3)]"
                  : "border border-[#ffffff]/10 bg-[#111111] text-[#999999] hover:border-[#c8a97e]/40 hover:text-[#f4efea]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => setLightboxIndex(idx)}
              data-cursor="view"
              className={`group relative overflow-hidden rounded-2xl bg-[#121212] border border-[#ffffff]/08 cursor-pointer ${
                item.aspectRatio === "portrait"
                  ? "aspect-[3/4]"
                  : item.aspectRatio === "square"
                  ? "aspect-square"
                  : "aspect-[4/3]"
              }`}
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Hover Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-[#080808]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Meta information on hover */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-[#c8a97e]/40 bg-[#080808]/80 px-3 py-1 text-[9px] tracking-widest text-[#c8a97e] uppercase font-mono backdrop-blur-md">
                    {item.categoryLabel}
                  </span>
                  <div className="h-8 w-8 rounded-full bg-[#080808]/80 border border-[#ffffff]/20 flex items-center justify-center text-[#f4efea]">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#c8a97e]">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="font-serif-luxury text-xl text-[#f4efea] leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[10px] font-mono text-[#aaaaaa] line-clamp-1">
                    {item.craftNote}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#060606]/98 backdrop-blur-2xl p-4 md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 z-50 rounded-full border border-[#ffffff]/20 bg-[#121212] p-3 text-[#f4efea] hover:border-[#c8a97e] hover:text-[#c8a97e] transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 z-50 rounded-full border border-[#ffffff]/20 bg-[#121212]/80 p-3 text-[#f4efea] hover:border-[#c8a97e] hover:text-[#c8a97e] transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 z-50 rounded-full border border-[#ffffff]/20 bg-[#121212]/80 p-3 text-[#f4efea] hover:border-[#c8a97e] hover:text-[#c8a97e] transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image & Detail Container */}
            <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
              <div className="relative w-full h-[65vh] sm:h-[72vh]">
                <Image
                  src={filteredItems[lightboxIndex].imageUrl}
                  alt={filteredItems[lightboxIndex].title}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>

              {/* Lightbox Caption */}
              <div className="w-full max-w-2xl bg-[#0c0c0c] border border-[#ffffff]/10 rounded-xl p-4 mt-4 text-center space-y-1">
                <div className="flex items-center justify-center gap-2 text-xs text-[#c8a97e] uppercase font-mono">
                  <span>{filteredItems[lightboxIndex].categoryLabel}</span>
                  <span>•</span>
                  <span>{filteredItems[lightboxIndex].location}</span>
                </div>
                <h4 className="font-serif-luxury text-xl text-[#f4efea]">
                  {filteredItems[lightboxIndex].title}
                </h4>
                <div className="flex items-center justify-center gap-1 text-[11px] text-[#777777] font-mono">
                  <Camera className="w-3.5 h-3.5 text-[#c8a97e]" />
                  <span>{filteredItems[lightboxIndex].craftNote}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
