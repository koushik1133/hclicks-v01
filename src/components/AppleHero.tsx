"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, ArrowDown, MapPin } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { useMood } from "@/context/MoodContext";

interface AppleHeroProps {
  onOpenInquiry: () => void;
  onOpenCinemaTrailer: () => void;
}

const cinematicHeroSlides = [
  {
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2400&q=90",
    location: "Hyderabad, India",
    title: "The Falaknuma Heritage Palace",
    type: "ROYAL WEDDING CINEMA",
  },
  {
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2400&q=90",
    location: "Chicago, Illinois",
    title: "Twilight on Lake Michigan",
    type: "LUXURY DESTINATION",
  },
  {
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=2400&q=90",
    location: "Normal & Central IL",
    title: "Autumn Prairie Fashion Story",
    type: "EDITORIAL PORTRAITURE",
  },
];

export function AppleHero({ onOpenInquiry, onOpenCinemaTrailer }: AppleHeroProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { config } = useMood();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Hero scroll transformation: 1.0 -> 1.08 scale forward camera push
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.0, 1.08]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.6], [0, -40]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % cinematicHeroSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[720px] w-full overflow-hidden bg-[#050505] flex items-end pb-16 md:pb-24"
    >
      {/* Background Visual Canvas with Scroll Transformation (Scale 1.0 -> 1.08) */}
      <motion.div style={{ scale: imageScale }} className="absolute inset-0 z-0 origin-center">
        {cinematicHeroSlides.map((slide, idx) => (
          <motion.div
            key={slide.title}
            initial={{ opacity: 0 }}
            animate={{
              opacity: idx === activeSlide ? 1 : 0,
            }}
            transition={{
              opacity: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
            }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={idx === 0}
              className="object-cover object-center"
              style={{ filter: config.lutFilter }}
              sizes="100vw"
            />
          </motion.div>
        ))}

        {/* Monochromatic Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-[#050505]/60" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050505]/30 to-[#050505]/90" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050505] to-transparent" />
      </motion.div>

      {/* Hero Content Layer with Scroll Fade Exit */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Main Title & Editorial Headline */}
          <div className="lg:col-span-8 space-y-6">
            {/* Step 1: Logo & Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex items-center gap-2.5 text-xs text-[#A1A1A6] font-mono tracking-[0.25em] uppercase"
            >
              <span className="text-[#F5F5F7] font-semibold">HCLICKS</span>
              <span className="text-[#333333]">/</span>
              <span>CINEMATIC WEDDINGS & FILMS</span>
              <span className="text-[#333333]">/</span>
              <span className="text-[#2997FF]">USA & HYDERABAD</span>
            </motion.div>

            {/* Step 2: Headline reveal */}
            <div className="space-y-1">
              <h1 className="font-editorial-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#FFFFFF] leading-[0.95] uppercase font-bold">
                <span className="block overflow-hidden">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="block text-accent-gradient"
                  >
                    YOUR STORY.
                  </motion.span>
                </span>
                <span className="block overflow-hidden">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="block font-serif-luxury italic font-light text-[#F5F5F7] normal-case"
                  >
                    In Motion.
                  </motion.span>
                </span>
              </h1>
            </div>

            {/* Step 3: Body text */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-xl text-sm sm:text-base text-[#A1A1A6] leading-relaxed font-light"
            >
              We craft heirloom photography and 8K master films for royal celebrations, fusion ceremonies, and intimate weddings across North America and India.
            </motion.p>

            {/* Step 4: Actions CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex flex-wrap items-center gap-4 pt-3"
            >
              <MagneticButton strength={0.25}>
                <a
                  href="#weddings"
                  className="inline-flex items-center justify-center rounded-full bg-[#F5F5F7] px-8 py-3.5 text-xs font-semibold tracking-[0.18em] text-[#050505] uppercase transition-all duration-300 hover:bg-[#FFFFFF] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                >
                  EXPLORE STORIES
                </a>
              </MagneticButton>

              <MagneticButton strength={0.25}>
                <button
                  onClick={onOpenInquiry}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-[#111113]/80 px-7 py-3.5 text-xs font-medium tracking-[0.18em] text-[#F5F5F7] uppercase backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-[#1C1C1E]"
                >
                  RESERVE DATE
                </button>
              </MagneticButton>

              {/* Magnetic Play Button (max 5-8px movement, subtle hover expand) */}
              <MagneticButton strength={0.15}>
                <button
                  onClick={onOpenCinemaTrailer}
                  className="group flex items-center gap-2.5 rounded-full border border-white/15 bg-[#050505]/70 pl-2 pr-4 py-1.5 backdrop-blur-md transition-all duration-300 hover:border-[#2997FF] hover:bg-[#111113]"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F5F5F7] text-[#050505] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#2997FF] group-hover:text-[#FFFFFF]">
                    <Play className="h-3 w-3 fill-current ml-0.5" />
                  </div>
                  <span className="text-[11px] font-mono tracking-wider text-[#F5F5F7] uppercase">
                    WATCH FILM
                  </span>
                </button>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Live Slide Indicator */}
          <div className="lg:col-span-4 flex flex-col justify-end lg:items-end space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="rounded-2xl border border-white/10 bg-[#111113]/80 p-4 backdrop-blur-xl max-w-sm w-full space-y-2"
            >
              <div className="flex items-center justify-between text-[10px] font-mono uppercase text-[#A1A1A6]">
                <span>{cinematicHeroSlides[activeSlide].type}</span>
                <span className="text-[#6E6E73]">0{activeSlide + 1} / 0{cinematicHeroSlides.length}</span>
              </div>
              <p className="font-serif-luxury text-lg text-[#F5F5F7] leading-tight">
                {cinematicHeroSlides[activeSlide].title}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-[#A1A1A6]">
                <MapPin className="w-3 h-3 text-[#2997FF]" />
                <span>{cinematicHeroSlides[activeSlide].location}</span>
              </div>

              {/* Progress Line */}
              <div className="h-0.5 w-full bg-[#1C1C1E] rounded-full overflow-hidden mt-2">
                <motion.div
                  key={activeSlide}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 8, ease: "linear" }}
                  className="h-full bg-[#F5F5F7]"
                />
              </div>
            </motion.div>

            {/* Slide Indicators */}
            <div className="flex items-center gap-2 pt-1">
              {cinematicHeroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`h-1 transition-all duration-500 rounded-full ${
                    idx === activeSlide ? "w-7 bg-[#F5F5F7]" : "w-2 bg-white/20 hover:bg-white/50"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Prompt */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-1 text-[#6E6E73]">
        <span className="text-[9px] font-mono tracking-[0.3em] uppercase">SCROLL</span>
        <ArrowDown className="w-3 h-3 text-[#A1A1A6] animate-bounce" />
      </div>
    </section>
  );
}
