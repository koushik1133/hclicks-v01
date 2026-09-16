"use client";

import { motion } from "framer-motion";
import { Film, Eye, Sparkles, Compass } from "lucide-react";

export function EditorialStatement() {
  const pillars = [
    {
      icon: Film,
      title: "CINEMATIC NARRATIVE",
      desc: "Every wedding is approached as an unscripted feature film, paced with intentional composition, natural light, and authentic soundscapes.",
    },
    {
      icon: Eye,
      title: "UNOBTRUSIVE VISION",
      desc: "We immerse ourselves in your celebration with quiet reverence, capturing intimate unscripted emotions without orchestrating artificial moments.",
    },
    {
      icon: Compass,
      title: "DUAL GLOBAL ROOTS",
      desc: "Deeply rooted in the cultural majesty of Hyderabad and the cosmopolitan energy of the USA, we understand the soul of both worlds.",
    },
  ];

  return (
    <section id="prologue" className="relative py-28 md:py-40 bg-[#080808] border-b border-[#ffffff]/06 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c8a97e]/03 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-[1px] w-12 bg-[#c8a97e]/40" />
          <span className="text-[11px] tracking-[0.35em] text-[#c8a97e] uppercase font-sans font-medium">
            THE STUDIO PHILOSOPHY
          </span>
          <div className="h-[1px] w-12 bg-[#c8a97e]/40" />
        </div>

        {/* Large Editorial Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-[#f4efea] font-light leading-[1.15]">
            “Some moments are remembered.
            <br />
            <span className="italic font-normal text-gold-gradient">
              Others are relived.”
            </span>
          </h2>
          <p className="pt-6 text-sm sm:text-base md:text-lg text-[#dcd2c3]/80 leading-relaxed max-w-2xl mx-auto font-light">
            Your celebration happens only once. Our purpose at HClicks is to preserve the cadence, the tears, the laughter, and the sacred majesty in a visual form that grows more precious with every passing decade.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 pt-20 mt-16 border-t border-[#ffffff]/08">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="space-y-4 text-center md:text-left group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#c8a97e]/25 bg-[#121212] text-[#c8a97e] transition-all duration-300 group-hover:border-[#c8a97e] group-hover:bg-[#c8a97e]/10">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-semibold tracking-[0.25em] text-[#f4efea] uppercase">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#888888] leading-relaxed font-light group-hover:text-[#aaaaaa] transition-colors">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
