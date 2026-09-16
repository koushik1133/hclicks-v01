"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { weddingExperienceSteps } from "@/data/portfolioData";

interface WeddingExperienceProps {
  onOpenInquiry: () => void;
}

export function WeddingExperience({ onOpenInquiry }: WeddingExperienceProps) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = weddingExperienceSteps[activeStepIndex];

  return (
    <section id="experience" className="py-24 md:py-36 bg-[#0a0a0a] text-[#f4efea] relative border-t border-[#ffffff]/06">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#ffffff]/10 gap-6">
          <div className="space-y-3">
            <span className="text-[11px] tracking-[0.35em] text-[#c8a97e] uppercase font-sans font-medium">
              THE WEDDING JOURNEY
            </span>
            <h2 className="font-editorial-title text-3xl sm:text-5xl md:text-6xl uppercase tracking-[0.04em]">
              THE CINEMATIC <span className="font-serif-luxury italic font-light normal-case text-gold-gradient">Timeline</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#888888] font-light leading-relaxed">
            How we translate a multi-day celebration of sacred traditions, spontaneous laughter, and family legacy into an archival visual masterpiece.
          </p>
        </div>

        {/* Step Navigation Rail */}
        <div className="flex items-center gap-3 overflow-x-auto pb-6 mb-12 no-scrollbar">
          {weddingExperienceSteps.map((step, idx) => (
            <button
              key={step.step}
              onClick={() => setActiveStepIndex(idx)}
              className={`group flex items-center gap-3 rounded-full px-5 py-2.5 text-xs tracking-wider uppercase transition-all duration-300 flex-shrink-0 ${
                idx === activeStepIndex
                  ? "bg-[#c8a97e] text-[#080808] font-semibold shadow-[0_0_25px_rgba(200,169,126,0.3)]"
                  : "border border-[#ffffff]/10 bg-[#121212] text-[#888888] hover:border-[#c8a97e]/40 hover:text-[#f4efea]"
              }`}
            >
              <span className="font-mono font-bold text-[10px]">{step.step}</span>
              <span>{step.phase}</span>
            </button>
          ))}
        </div>

        {/* Interactive Step Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center rounded-3xl border border-[#ffffff]/08 bg-[#0e0e0e] p-6 sm:p-10 lg:p-14">
          {/* Left Column: Story Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-4xl sm:text-5xl font-editorial-title font-bold text-[#c8a97e]">
                {currentStep.step}
              </span>
              <div className="h-6 w-[1px] bg-[#ffffff]/20" />
              <span className="text-xs font-mono tracking-[0.25em] text-[#c8a97e] uppercase">
                {currentStep.phase}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif-luxury text-2xl sm:text-4xl text-[#f4efea] leading-tight">
                {currentStep.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#c8a97e] italic font-serif-luxury">
                {currentStep.tagline}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#999999] leading-relaxed font-light">
              {currentStep.description}
            </p>

            <div className="rounded-xl border border-[#c8a97e]/20 bg-[#141414] p-4 text-xs text-[#dcd2c3] space-y-1">
              <span className="text-[10px] tracking-wider text-[#c8a97e] uppercase font-mono block">
                CINEMATOGRAPHY EMPHASIS
              </span>
              <p className="text-[#888888] font-light">{currentStep.focus}</p>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center gap-2 rounded-full bg-[#c8a97e] px-7 py-3 text-xs font-semibold tracking-[0.2em] text-[#080808] uppercase hover:bg-[#e2c99b] transition-all"
              >
                <span>RESERVE FOR YOUR DATES</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {activeStepIndex < weddingExperienceSteps.length - 1 ? (
                <button
                  onClick={() => setActiveStepIndex((prev) => prev + 1)}
                  className="text-xs font-medium tracking-wider text-[#aaaaaa] hover:text-[#c8a97e] uppercase transition-colors"
                >
                  NEXT CHAPTER →
                </button>
              ) : (
                <button
                  onClick={() => setActiveStepIndex(0)}
                  className="text-xs font-medium tracking-wider text-[#aaaaaa] hover:text-[#c8a97e] uppercase transition-colors"
                >
                  REPLAY FROM PRELUDE ↺
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Visual Frame with Smooth Crossfade */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-2xl bg-[#080808] border border-[#ffffff]/10 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep.step}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={currentStep.image}
                    alt={currentStep.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent opacity-60" />
                </motion.div>
              </AnimatePresence>

              {/* Chapter Tag Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="rounded-full bg-[#080808]/80 backdrop-blur-md px-3 py-1 text-[10px] font-mono tracking-widest text-[#c8a97e] uppercase border border-[#ffffff]/10">
                  ACT {currentStep.step} • {currentStep.phase}
                </span>
                <span className="text-[10px] font-mono text-[#ffffff]/60 bg-[#080808]/70 px-2 py-0.5 rounded">
                  4K REC ●
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
