"use client";

import Image from "next/image";
import { MagneticButton } from "./MagneticButton";
import { useMood } from "@/context/MoodContext";

interface CommercialEditorialProps {
  onOpenInquiry: () => void;
}

const commercialItems = [
  {
    client: "Royal Zari Bridal Couture",
    category: "Couture Campaign",
    year: "2025",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
    desc: "Macro cinematography highlighting hand-embroidered raw silk, emerald jewelry, and bridal couture styling.",
  },
  {
    client: "Heritage Polki Jewels",
    category: "Fine Jewelry Editorial",
    year: "2024",
    image: "https://images.unsplash.com/photo-1545232979-fbf68fe9ec47?auto=format&fit=crop&w=1200&q=80",
    desc: "Precision sculpted lighting focusing on uncut diamonds, antique polki sets, and high-fashion portraiture.",
  },
  {
    client: "Architectural Living",
    category: "Brand & Spatial Story",
    year: "2024",
    image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
    desc: "Clean spatial lines, natural daylight diffusion, and contemporary wardrobe styling for luxury lookbooks.",
  },
];

export function CommercialEditorial({ onOpenInquiry }: CommercialEditorialProps) {
  const { config } = useMood();

  return (
    <section id="commercial" className="py-24 md:py-36 bg-[#050505] text-[#F5F5F7] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div className="space-y-3">
            <span className="text-[11px] font-mono tracking-[0.3em] text-[#A1A1A6] uppercase">
              COMMERCIAL & BRAND FILMS
            </span>
            <h2 className="font-editorial-title text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#FFFFFF]">
              COUTURE & <span className="font-serif-luxury italic font-light text-[#F5F5F7] normal-case">Campaigns.</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#A1A1A6] font-light leading-relaxed">
            Applying the same cinema framing, color science, and lighting mastery to luxury fashion houses and brand narratives.
          </p>
        </div>

        {/* 3 Structured Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {commercialItems.map((item) => (
            <div
              key={item.client}
              className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0B0B0D] p-6 space-y-6"
            >
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#050505]">
                <Image
                  src={item.image}
                  alt={item.client}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: config.lutFilter }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute top-3 left-3 rounded-full bg-[#050505]/80 px-3 py-0.5 text-[9px] font-mono tracking-widest text-[#2997FF] uppercase border border-white/10">
                  {item.category}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#6E6E73]">
                  <span>{item.client}</span>
                  <span>{item.year}</span>
                </div>
                <h3 className="font-serif-luxury text-xl text-[#FFFFFF] leading-snug">
                  {item.desc}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Commercial Action Bar */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-[#0B0B0D] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif-luxury text-2xl md:text-3xl text-[#FFFFFF]">
              Commission Commercial or Lookbook Production
            </h4>
            <p className="text-xs sm:text-sm text-[#A1A1A6] font-light">
              Available for designer lookbooks, jewelry debuts, and brand films across the USA and India.
            </p>
          </div>
          <MagneticButton strength={0.25}>
            <button
              onClick={onOpenInquiry}
              className="rounded-full bg-[#F5F5F7] px-8 py-3.5 text-xs font-semibold tracking-wider text-[#050505] uppercase hover:bg-[#FFFFFF] transition-all flex-shrink-0"
            >
              INQUIRE COMMERCIAL
            </button>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
