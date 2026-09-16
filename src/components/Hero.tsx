"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, ArrowDown, Sparkles, MapPin } from "lucide-react";

interface HeroProps {
  onOpenInquiry: () => void;
  onOpenCinemaTrailer: () => void;
}

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2400&q=90",
    caption: "The Royal Nizam Heritage Celebration",
    location: "Hyderabad, India",
    type: "WEDDING CINEMA",
  },
  {
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2400&q=90",
    caption: "Twilight Vows on Lake Michigan",
    location: "Chicago, Illinois",
    type: "LUXURY DESTINATION",
  },
  {
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=2400&q=90",
    caption: "Autumn Equinox Fashion Narrative",
    location: "Normal & Central IL",
    type: "EDITORIAL PORTRAITURE",
  },
];

export function Hero({ onOpenInquiry, onOpenCinemaTrailer }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden bg-[#060606] flex items-end pb-14 md:pb-20">
      {/* Background Slides / Visual Canvas */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, idx) => (
          <motion.div
            key={slide.caption}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{
              opacity: idx === currentSlide ? 1 : 0,
              scale: idx === currentSlide ? 1.0 : 1.08,
            }}
            transition={{
              opacity: { duration: 1.8, ease: [0.25, 1, 0.5, 1] },
              scale: { duration: 8, ease: "linear" },
            }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.caption}
              fill
              priority={idx === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
        ))}

        {/* Master Dark Film & Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/50 to-[#080808]/70" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#080808]/20 to-[#080808]/90" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080808] to-transparent" />
      </div>

      {/* Hero Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Main Title & Editorial Headline */}
          <div className="lg:col-span-8 space-y-6">
            {/* Top Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <div className="flex items-center gap-2 rounded-full border border-[#c8a97e]/30 bg-[#0c0c0c]/80 px-3.5 py-1 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8a97e] animate-ping" />
                <span className="text-[10px] md:text-xs font-semibold tracking-[0.25em] text-[#c8a97e] uppercase">
                  USA • HYDERABAD
                </span>
              </div>
              <span className="text-[10px] md:text-xs tracking-[0.2em] text-[#dcd2c3]/70 uppercase hidden sm:inline">
                CINEMATIC WEDDING & EDITORIAL STUDIO
              </span>
            </motion.div>

            {/* Main Editorial Statement */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="space-y-1"
            >
              <h1 className="font-editorial-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.04em] text-[#f4efea] leading-[0.95] uppercase font-bold">
                <span className="block overflow-hidden">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="block"
                  >
                    YOUR STORY.
                  </motion.span>
                </span>
                <span className="block overflow-hidden">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="block font-serif-luxury italic font-light text-gold-gradient normal-case tracking-normal"
                  >
                    Framed Like Cinema.
                  </motion.span>
                </span>
              </h1>
            </motion.div>

            {/* Sub-description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="max-w-xl text-sm sm:text-base text-[#dcd2c3]/85 leading-relaxed font-light"
            >
              We craft timeless heirloom photographs and immersive 8K master films for royal celebrations, fusion ceremonies, and intimate love stories across the United States and India.
            </motion.p>

            {/* Actions: View Work, Inquire & Watch Reel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#stories"
                data-cursor="view"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#c8a97e] px-8 py-3.5 text-xs font-semibold tracking-[0.25em] text-[#080808] uppercase transition-all duration-300 hover:bg-[#e2c99b] hover:shadow-[0_0_30px_rgba(200,169,126,0.35)]"
              >
                VIEW OUR WORK
              </a>

              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center justify-center rounded-full border border-[#ffffff]/20 bg-[#121212]/70 px-7 py-3.5 text-xs font-medium tracking-[0.22em] text-[#f4efea] uppercase backdrop-blur-md transition-all duration-300 hover:border-[#c8a97e] hover:text-[#c8a97e]"
              >
                INQUIRE DATES
              </button>

              <button
                onClick={onOpenCinemaTrailer}
                data-cursor="play"
                className="group flex items-center gap-3 rounded-full border border-[#c8a97e]/30 bg-[#080808]/60 pl-2 pr-4 py-1.5 backdrop-blur-md transition-all duration-300 hover:border-[#c8a97e] hover:bg-[#151515]"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c8a97e] text-[#080808] transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-3.5 w-3.5 fill-current ml-0.5" />
                </div>
                <span className="text-[11px] font-medium tracking-[0.2em] text-[#f4efea] uppercase">
                  PLAY REEL
                </span>
              </button>
            </motion.div>
          </div>

          {/* Right Slide Status & Location Card */}
          <div className="lg:col-span-4 flex flex-col justify-end lg:items-end space-y-4">
            {/* Live Featured Still Meta Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="rounded-xl border border-[#ffffff]/10 bg-[#0c0c0c]/80 p-4 backdrop-blur-md max-w-sm w-full space-y-2.5"
            >
              <div className="flex items-center justify-between text-[10px] tracking-[0.2em] text-[#c8a97e] uppercase">
                <span>{heroSlides[currentSlide].type}</span>
                <span className="text-[#777777]">0{currentSlide + 1} / 0{heroSlides.length}</span>
              </div>
              <p className="font-serif-luxury text-lg text-[#f4efea] leading-tight">
                {heroSlides[currentSlide].caption}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-[#999999]">
                <MapPin className="w-3.5 h-3.5 text-[#c8a97e]" />
                <span>{heroSlides[currentSlide].location}</span>
              </div>

              {/* Progress Line */}
              <div className="h-0.5 w-full bg-[#222222] rounded-full overflow-hidden mt-2">
                <motion.div
                  key={currentSlide}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 7, ease: "linear" }}
                  className="h-full bg-[#c8a97e]"
                />
              </div>
            </motion.div>

            {/* Slide Selectors */}
            <div className="flex items-center gap-2 pt-1">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 transition-all duration-500 rounded-full ${
                    idx === currentSlide ? "w-8 bg-[#c8a97e]" : "w-2 bg-[#ffffff]/30 hover:bg-[#ffffff]/60"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-1 text-[#777777] hover:text-[#c8a97e] transition-colors">
        <a href="#prologue" className="flex flex-col items-center gap-1.5 text-[9px] tracking-[0.3em] uppercase">
          <span>SCROLL</span>
          <ArrowDown className="w-3 h-3 animate-bounce text-[#c8a97e]" />
        </a>
      </div>
    </section>
  );
}
