"use client";

import { craftEquipmentList } from "@/data/portfolioData";
import { useMood } from "@/context/MoodContext";

export function StudioTeamCraft() {
  const { config } = useMood();

  return (
    <section id="about" className="py-24 md:py-36 bg-[#050505] text-[#F5F5F7] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-[11px] font-mono tracking-[0.3em] text-[#A1A1A6] uppercase">
            THE STUDIO BEHIND THE LENS
          </span>
          <h2 className="font-editorial-title text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#FFFFFF]">
            CRAFT, LIGHT & <br />
            <span className="font-serif-luxury italic font-light text-[#F5F5F7] normal-case">
              Human Pacing.
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#A1A1A6] font-light leading-relaxed max-w-xl mx-auto">
            We are filmmakers, directors, and artists dedicated to turning weddings and events into enduring visual poetry.
          </p>
        </div>

        {/* 4 Cinema Standard Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {craftEquipmentList.map((item, idx) => (
            <div
              key={item.category}
              className="rounded-3xl border border-white/10 bg-[#0B0B0D] p-6 sm:p-8 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-mono tracking-widest text-[#2997FF] uppercase font-bold block">
                  0{idx + 1} • {item.category}
                </span>
                <div className="space-y-2">
                  {item.items.map((it) => (
                    <div key={it} className="flex items-center gap-2 text-xs font-medium text-[#FFFFFF]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2997FF]" />
                      <span>{it}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xs text-[#A1A1A6] font-light leading-relaxed pt-4 border-t border-white/10">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Studio Guarantees */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-2xl border border-white/10 bg-[#0B0B0D] space-y-1.5">
            <h4 className="font-mono text-xs tracking-wider uppercase text-[#FFFFFF]">
              Lossless 8K Masters
            </h4>
            <p className="text-xs text-[#A1A1A6] font-light">
              Delivered on secure private cloud vaults and handcrafted presentation drives.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-[#0B0B0D] space-y-1.5">
            <h4 className="font-mono text-xs tracking-wider uppercase text-[#FFFFFF]">
              Dual Continent Teams
            </h4>
            <p className="text-xs text-[#A1A1A6] font-light">
              Insured and equipped master crews available across the USA and India.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-[#0B0B0D] space-y-1.5">
            <h4 className="font-mono text-xs tracking-wider uppercase text-[#FFFFFF]">
              Heirloom Color Grading
            </h4>
            <p className="text-xs text-[#A1A1A6] font-light">
              In-house colorists applying customized film print profiles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
