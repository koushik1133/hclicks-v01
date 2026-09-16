"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MagneticButton } from "./MagneticButton";
import { useMood } from "@/context/MoodContext";

interface WeddingStoryExperienceProps {
  onOpenInquiry: () => void;
}

const weddingChapters = [
  {
    step: "01",
    phase: "THE ARRIVAL",
    title: "The Quiet Anticipation",
    desc: "The morning light filtering through heritage arches, family elders offering silent prayers, and the calm before the grand celebrations commence.",
    image: "https://images.unsplash.com/photo-1545232979-fbf68fe9ec47?auto=format&fit=crop&w=1200&q=80",
    meta: "FALAKNUMA PALACE • MORNING SUITE",
  },
  {
    step: "02",
    phase: "THE DETAILS",
    title: "Heirloom Jewels & Sacred Zari",
    desc: "Intricate raw silk embroidery, centuries-old polki diamond necklaces, hand-applied bridal henna, and heirloom keepsakes.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
    meta: "MACRO 90MM CINE GLASS • BESPOKE DETAILS",
  },
  {
    step: "03",
    phase: "THE PEOPLE",
    title: "Tears, Glances & Unprompted Embraces",
    desc: "The emotional Vidaai farewell, warm laughter between lifelong friends, and unscripted generational embraces captured discreetly.",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
    meta: "TELEPHOTO DISCREET CANDID FRAMING",
  },
  {
    step: "04",
    phase: "THE CEREMONY",
    title: "Sacred Hearth & Eternal Vows",
    desc: "The thunderous Baraat procession, the scent of sacred Agni embers, and seven steps taken under floral mandaps.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    meta: "MULTI-CAM RED 8K • LOSSLESS AUDIO RECORDING",
  },
  {
    step: "05",
    phase: "THE CELEBRATION",
    title: "The Grand Reception & Revelry",
    desc: "Opulent ballroom decor, twilight cocktail hours on the water, and grand entrances with celebratory live music.",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    meta: "CHICAGO WATERFRONT • DUSK ILLUMINATION",
  },
  {
    step: "06",
    phase: "THE AFTERMATH",
    title: "Late Night Dhol & Euphoric Dancing",
    desc: "Dhol beats echo through the midnight hour, silver confetti showers the dance floor, and spontaneous after-party energy peak.",
    image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=80",
    meta: "RONIN STEADICAM • 120FPS CINEMATIC HIGH SPEED",
  },
  {
    step: "07",
    phase: "THE TIMELESS FILM",
    title: "The Master Heirloom Cinema",
    desc: "A feature-length master film and handcrafted Italian leather album designed to preserve legacy across generations.",
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=80",
    meta: "DAVINCI RESOLVE MASTER COLOR PROFILE",
  },
];

export function WeddingStoryExperience({ onOpenInquiry }: WeddingStoryExperienceProps) {
  const [activeStep, setActiveStep] = useState(0);
  const currentChapter = weddingChapters[activeStep];
  const { config } = useMood();

  return (
    <section id="stories" className="py-24 md:py-36 bg-[#050505] text-[#F5F5F7] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div className="space-y-3">
            <span className="text-[11px] font-mono tracking-[0.3em] text-[#A1A1A6] uppercase">
              THE 7-ACT WEDDING STORY
            </span>
            <h2 className="font-editorial-title text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#FFFFFF]">
              THE WEDDING <span className="font-serif-luxury italic font-light text-[#F5F5F7] normal-case">Experience.</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#A1A1A6] font-light leading-relaxed">
            How we translate your celebration from morning anticipation to the final midnight dance into a cohesive filmic archive.
          </p>
        </div>

        {/* 7-Step Navigation Rail */}
        <div className="flex items-center gap-2 overflow-x-auto pb-6 mb-12 no-scrollbar">
          {weddingChapters.map((chapter, idx) => (
            <button
              key={chapter.step}
              onClick={() => setActiveStep(idx)}
              className={`rounded-full px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-300 flex-shrink-0 flex items-center gap-2 ${
                idx === activeStep
                  ? "bg-[#F5F5F7] text-[#050505] font-bold shadow-lg"
                  : "border border-white/10 bg-[#111113] text-[#A1A1A6] hover:text-[#FFFFFF] hover:border-white/20"
              }`}
            >
              <span>{chapter.step}</span>
              <span>•</span>
              <span>{chapter.phase}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Chapter Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center rounded-3xl border border-white/10 bg-[#0B0B0D] p-6 sm:p-10 lg:p-14">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-4xl sm:text-5xl font-editorial-title font-bold text-[#F5F5F7]">
                {currentChapter.step}
              </span>
              <div className="h-6 w-[1px] bg-white/20" />
              <span className="text-xs font-mono tracking-widest text-[#2997FF] uppercase">
                {currentChapter.phase}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#FFFFFF] leading-tight">
                {currentChapter.title}
              </h3>
              <span className="text-[11px] font-mono text-[#6E6E73] block tracking-wider">
                {currentChapter.meta}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#A1A1A6] leading-relaxed font-light">
              {currentChapter.desc}
            </p>

            <div className="flex items-center gap-4 pt-4">
              <MagneticButton strength={0.25}>
                <button
                  onClick={onOpenInquiry}
                  className="rounded-full bg-[#F5F5F7] text-[#050505] px-7 py-3 text-xs font-semibold tracking-wider uppercase hover:bg-[#FFFFFF] transition-all"
                >
                  INQUIRE FOR YOUR EVENT
                </button>
              </MagneticButton>

              {activeStep < weddingChapters.length - 1 ? (
                <button
                  onClick={() => setActiveStep((prev) => prev + 1)}
                  className="text-xs font-mono text-[#A1A1A6] hover:text-[#F5F5F7] uppercase transition-colors"
                >
                  NEXT ACT →
                </button>
              ) : (
                <button
                  onClick={() => setActiveStep(0)}
                  className="text-xs font-mono text-[#A1A1A6] hover:text-[#F5F5F7] uppercase transition-colors"
                >
                  REPLAY FROM ACT 01 ↺
                </button>
              )}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-2xl bg-[#050505] border border-white/10 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentChapter.step}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={currentChapter.image}
                    alt={currentChapter.title}
                    fill
                    className="object-cover"
                    style={{ filter: config.lutFilter }}
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-60" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
