"use client";

import Image from "next/image";
import { useMood } from "@/context/MoodContext";

export function DualContinentCinematography() {
  const { config } = useMood();

  return (
    <section id="locations-alt" className="py-24 md:py-36 bg-[#050505] text-[#F5F5F7] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-[11px] font-mono tracking-[0.3em] text-[#A1A1A6] uppercase">
            DUAL GLOBAL PRESENCE
          </span>
          <h2 className="font-editorial-title text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#FFFFFF]">
            TWO PLACES. <br />
            <span className="font-serif-luxury italic font-light text-[#F5F5F7] normal-case">
              One Visual Language.
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#A1A1A6] font-light leading-relaxed max-w-xl mx-auto">
            From the grand heritage architecture of the Deccan to the modern skylines and prairies of North America, we bring a unified signature of timeless light, intimacy, and cinema.
          </p>
        </div>

        {/* 2 Destination Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Hyderabad Card */}
          <div className="group relative rounded-3xl border border-white/10 bg-[#0B0B0D] overflow-hidden p-8 sm:p-10 space-y-6">
            <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden bg-[#050505]">
              <Image
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80"
                alt="Hyderabad Royal Palaces"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ filter: config.lutFilter }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-transparent" />
              <span className="absolute top-4 left-4 rounded-full bg-[#050505]/80 px-3.5 py-1 text-[10px] font-mono tracking-widest text-[#2997FF] uppercase border border-white/10">
                INDIA PRESENCE
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-editorial-title text-2xl sm:text-3xl text-[#FFFFFF] uppercase tracking-wider">
                  HYDERABAD
                </h3>
                <span className="text-xs font-mono text-[#6E6E73]">TELANGANA, INDIA</span>
              </div>
              <p className="text-xs sm:text-sm text-[#A1A1A6] font-light leading-relaxed">
                Home to opulent Nizami heritage palaces and multi-day celebrations. Specialized in grand scale royal wedding visuals and traditional ceremonial nuance.
              </p>
            </div>
          </div>

          {/* USA Card */}
          <div className="group relative rounded-3xl border border-white/10 bg-[#0B0B0D] overflow-hidden p-8 sm:p-10 space-y-6">
            <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden bg-[#050505]">
              <Image
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80"
                alt="Chicago & USA Weddings"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ filter: config.lutFilter }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-transparent" />
              <span className="absolute top-4 left-4 rounded-full bg-[#050505]/80 px-3.5 py-1 text-[10px] font-mono tracking-widest text-[#2997FF] uppercase border border-white/10">
                UNITED STATES PRESENCE
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-editorial-title text-2xl sm:text-3xl text-[#FFFFFF] uppercase tracking-wider">
                  USA / MIDWEST
                </h3>
                <span className="text-xs font-mono text-[#6E6E73]">CHICAGO & NORMAL, IL</span>
              </div>
              <p className="text-xs sm:text-sm text-[#A1A1A6] font-light leading-relaxed">
                Operating nationwide across North America. Capturing luxury South Asian nuptials, architectural ballroom ceremonies, and sunlit countryside estates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
