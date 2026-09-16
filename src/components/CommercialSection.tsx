"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Layers, ArrowUpRight } from "lucide-react";

interface CommercialSectionProps {
  onOpenInquiry: () => void;
}

const commercialShowcases = [
  {
    client: "Royal Zari Couture",
    type: "Bridal Campaign",
    year: "2025",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
    description: "Macro textile cinema showcasing hand-embroidered raw silk, emerald jewellery, and ceremonial couture.",
  },
  {
    client: "The Heritage Collection",
    type: "Jewelry Editorial",
    year: "2024",
    image: "https://images.unsplash.com/photo-1545232979-fbf68fe9ec47?auto=format&fit=crop&w=1200&q=80",
    description: "Sculpted lighting focusing on uncut diamonds, antique polki sets, and high-fashion portraiture.",
  },
  {
    client: "Modern Elegance Studio",
    type: "Architectural & Lifestyle",
    year: "2024",
    image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
    description: "Clean spatial lines, natural daylight diffusion, and contemporary wardrobe styling.",
  },
];

export function CommercialSection({ onOpenInquiry }: CommercialSectionProps) {
  return (
    <section id="commercial" className="py-24 md:py-36 bg-[#0a0a0a] text-[#f4efea] relative border-t border-[#ffffff]/06">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#ffffff]/10 gap-6">
          <div className="space-y-3">
            <span className="text-[11px] tracking-[0.35em] text-[#c8a97e] uppercase font-sans font-medium">
              COMMERCIAL & EDITORIAL
            </span>
            <h2 className="font-editorial-title text-3xl sm:text-5xl md:text-6xl uppercase tracking-[0.05em]">
              BRAND STORIES & <span className="font-serif-luxury italic font-light normal-case text-gold-gradient">Couture</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#888888] font-light leading-relaxed">
            Applying the same high-end cinematic framing, custom color grading, and lighting mastery to luxury brands, designers, and editorial publications.
          </p>
        </div>

        {/* Commercial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {commercialShowcases.map((item, idx) => (
            <motion.div
              key={item.client}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="group relative flex flex-col justify-between rounded-2xl border border-[#ffffff]/08 bg-[#101010] overflow-hidden p-6 transition-all duration-500 hover:border-[#c8a97e]/40"
            >
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden mb-6 bg-[#000000]">
                <Image
                  src={item.image}
                  alt={item.client}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-3 left-3 rounded-full border border-[#ffffff]/20 bg-[#080808]/80 px-3 py-0.5 text-[9px] font-mono tracking-wider text-[#c8a97e] uppercase backdrop-blur-md">
                  {item.type}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#888888]">
                  <span>{item.client}</span>
                  <span>{item.year}</span>
                </div>
                <h3 className="font-serif-luxury text-xl text-[#f4efea] leading-snug group-hover:text-[#c8a97e] transition-colors">
                  {item.description}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Commercial Inquiries Callout */}
        <div className="mt-16 rounded-2xl border border-[#c8a97e]/25 bg-[#121212] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif-luxury text-2xl md:text-3xl text-[#f4efea]">
              Commission Commercial or Fashion Production
            </h4>
            <p className="text-xs sm:text-sm text-[#888888] font-light">
              Available for lookbooks, luxury campaigns, designer debuts, and commercial films across the USA and India.
            </p>
          </div>
          <button
            onClick={onOpenInquiry}
            className="rounded-full bg-[#c8a97e] px-8 py-3.5 text-xs font-semibold tracking-[0.2em] text-[#080808] uppercase hover:bg-[#e2c99b] transition-all flex-shrink-0"
          >
            INQUIRE COMMERCIAL
          </button>
        </div>
      </div>
    </section>
  );
}
