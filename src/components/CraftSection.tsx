"use client";

import { motion } from "framer-motion";
import { Camera, Film, Disc, Radio, Eye, Award } from "lucide-react";
import { craftEquipmentList } from "@/data/portfolioData";

export function CraftSection() {
  return (
    <section id="craft" className="py-24 md:py-36 bg-[#080808] text-[#f4efea] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#c8a97e]/30 bg-[#121212] px-4 py-1 text-[10px] tracking-[0.3em] text-[#c8a97e] uppercase font-mono">
            <Camera className="w-3.5 h-3.5" />
            <span>CINEMA PRODUCTION STANDARDS</span>
          </div>
          <h2 className="font-editorial-title text-3xl sm:text-5xl md:text-6xl uppercase tracking-[0.05em] leading-tight">
            THE CRAFT & <br />
            <span className="font-serif-luxury italic font-light text-gold-gradient normal-case">
              Motion Technology.
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#888888] font-light leading-relaxed max-w-xl mx-auto">
            Equipment is never the story — but world-class cinema sensors, Cooke anamorphic optics, and 8K aerial platforms ensure your once-in-a-lifetime moments are captured with uncompromising fidelity.
          </p>
        </div>

        {/* 4 Craft Focus Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {craftEquipmentList.map((item, idx) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl border border-[#ffffff]/08 bg-[#0f0f0f] p-6 sm:p-8 space-y-5 flex flex-col justify-between hover:border-[#c8a97e]/30 transition-all duration-300"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#c8a97e] uppercase font-bold block">
                  0{idx + 1} • {item.category}
                </span>

                <div className="space-y-2">
                  {item.items.map((it) => (
                    <div key={it} className="flex items-start gap-2 text-xs font-medium text-[#f4efea]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c8a97e] mt-1.5 flex-shrink-0" />
                      <span>{it}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-[11px] sm:text-xs text-[#777777] font-light leading-relaxed pt-4 border-t border-[#ffffff]/06">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Studio Trust & Delivery Promise */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-xl border border-[#ffffff]/06 bg-[#0c0c0c] space-y-2">
            <h4 className="font-editorial-title text-sm tracking-wider uppercase text-[#c8a97e]">
              Lossless 8K Masters
            </h4>
            <p className="text-xs text-[#777777]">
              Delivered on secure private cloud archives & custom heirloom USB presentation boxes.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-[#ffffff]/06 bg-[#0c0c0c] space-y-2">
            <h4 className="font-editorial-title text-sm tracking-wider uppercase text-[#c8a97e]">
              Dual Continent Crews
            </h4>
            <p className="text-xs text-[#777777]">
              Fully insured and equipped production teams ready in both the United States and India.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-[#ffffff]/06 bg-[#0c0c0c] space-y-2">
            <h4 className="font-editorial-title text-sm tracking-wider uppercase text-[#c8a97e]">
              Fine-Art Post Production
            </h4>
            <p className="text-xs text-[#777777]">
              In-house colorists and sound designers dedicated to bespoke Hollywood pacing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
