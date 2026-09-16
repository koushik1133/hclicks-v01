"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, Plane, MapPin, Sparkles } from "lucide-react";
import { useMood } from "@/context/MoodContext";

export function DualLocations() {
  const { config } = useMood();

  return (
    <section id="locations" className="py-24 md:py-36 bg-[#050505] text-[#F5F5F7] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#111113] px-4 py-1 text-[10px] tracking-[0.3em] text-[#A1A1A6] uppercase font-mono">
            <Globe className="w-3.5 h-3.5 text-[#2997FF]" />
            <span>GLOBAL HERITAGE & DESTINATION COVERAGE</span>
          </div>
          <h2 className="font-editorial-title text-3xl sm:text-5xl md:text-6xl uppercase tracking-[0.05em] leading-tight">
            TWO PLACES. <br />
            <span className="font-serif-luxury italic font-light text-[#F5F5F7] normal-case">
              One Visual Language.
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#A1A1A6] font-light leading-relaxed max-w-xl mx-auto">
            From the grand heritage architecture of the Deccan to the modern skylines of North America, we bring a unified signature of timeless light, intimacy, and cinema.
          </p>
        </div>

        {/* Dual City Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: HYDERABAD, INDIA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0B0B0D] overflow-hidden p-8 sm:p-10 transition-all duration-500 hover:border-white/30"
          >
            {/* Background Image Container */}
            <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden mb-8 bg-[#050505]">
              <Image
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80"
                alt="Hyderabad Royal Weddings"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ filter: config.lutFilter }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/20 to-transparent" />
              
              <div className="absolute top-4 left-4 rounded-full border border-white/20 bg-[#050505]/80 px-3.5 py-1 text-[10px] tracking-widest text-[#F5F5F7] uppercase font-mono backdrop-blur-md">
                INDIA PRESENCE
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-editorial-title text-2xl sm:text-3xl text-[#F5F5F7] tracking-wider uppercase">
                  HYDERABAD
                </h3>
                <span className="text-xs font-mono text-[#2997FF]">TELANGANA, INDIA</span>
              </div>

              <p className="text-xs sm:text-sm text-[#A1A1A6] font-light leading-relaxed">
                Home to opulent Nizami palaces, heritage courtyards, and deep cultural roots. Our Hyderabad team specializes in multi-day royal wedding visual production and grand celebratory films.
              </p>

              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4 text-xs text-[#A1A1A6]">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#2997FF]" />
                  <span>Falaknuma, Chowmahalla, Destination Resorts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#2997FF]" />
                  <span>Heirloom 8K Multi-Camera Production</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: USA (Chicago & Normal, IL) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0B0B0D] overflow-hidden p-8 sm:p-10 transition-all duration-500 hover:border-white/30"
          >
            {/* Background Image Container */}
            <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden mb-8 bg-[#050505]">
              <Image
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80"
                alt="USA & Chicago Weddings"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ filter: config.lutFilter }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/20 to-transparent" />
              
              <div className="absolute top-4 left-4 rounded-full border border-white/20 bg-[#050505]/80 px-3.5 py-1 text-[10px] tracking-widest text-[#F5F5F7] uppercase font-mono backdrop-blur-md">
                UNITED STATES PRESENCE
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-editorial-title text-2xl sm:text-3xl text-[#F5F5F7] tracking-wider uppercase">
                  USA / MIDWEST
                </h3>
                <span className="text-xs font-mono text-[#2997FF]">CHICAGO & NORMAL, IL</span>
              </div>

              <p className="text-xs sm:text-sm text-[#A1A1A6] font-light leading-relaxed">
                Operating out of Illinois with nationwide travel coverage across North America. Capturing luxury South Asian weddings, fusion celebrations, and romantic countryside editorial portraits.
              </p>

              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4 text-xs text-[#A1A1A6]">
                <div className="flex items-center gap-1.5">
                  <Plane className="w-3.5 h-3.5 text-[#2997FF]" />
                  <span>Nationwide USA Destination Travel</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#2997FF]" />
                  <span>Licensed 4K/8K Drone Flight Operations</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
