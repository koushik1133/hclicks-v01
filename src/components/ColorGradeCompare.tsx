"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Sliders, Layers } from "lucide-react";
import { useMood } from "@/context/MoodContext";

export function ColorGradeCompare() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { config } = useMood();

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(pos);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="py-24 md:py-36 bg-[#050505] text-[#F5F5F7] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#111113] px-4 py-1 text-[10px] tracking-[0.3em] text-[#A1A1A6] uppercase font-mono">
            <Layers className="w-3.5 h-3.5 text-[#2997FF]" />
            <span>COLOR SCIENCE & MASTER GRADING</span>
          </div>
          <h2 className="font-editorial-title text-3xl sm:text-5xl md:text-6xl uppercase tracking-[0.05em] leading-tight">
            THE ANATOMY OF <br />
            <span className="font-serif-luxury italic font-light text-[#F5F5F7] normal-case">
              Cinematic Light.
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#A1A1A6] font-light leading-relaxed max-w-xl mx-auto">
            Drag the interactive slider below to reveal the raw flat log sensor capture versus our bespoke post-production master color profile.
          </p>
        </div>

        {/* Interactive Comparison Slider */}
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative aspect-[16/9] sm:aspect-[21/9] w-full max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/15 cursor-ew-resize select-none bg-[#050505] shadow-2xl"
        >
          {/* Base Layer: Final Master Color Grade */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2000&q=90"
              alt="HClicks Master Color Grade"
              fill
              className="object-cover"
              style={{ filter: config.lutFilter }}
            />
            {/* Master Grade Tag */}
            <div className="absolute top-6 right-6 rounded-full border border-white/20 bg-[#050505]/85 px-4 py-1.5 text-[10px] font-mono tracking-widest text-[#F5F5F7] uppercase backdrop-blur-md">
              HCLICKS MASTER GRADE ({config.vibeText})
            </div>
          </div>

          {/* Top Clipped Layer: Raw Flat Log Sensor */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image
              src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2000&q=90"
              alt="Raw Cinema Log Flat Sensor"
              fill
              className="object-cover"
              style={{ filter: "saturate(0.4) contrast(0.7) brightness(1.15)" }}
            />
            {/* Raw Log Tag */}
            <div className="absolute top-6 left-6 rounded-full border border-white/15 bg-[#050505]/85 px-4 py-1.5 text-[10px] font-mono tracking-widest text-[#A1A1A6] uppercase backdrop-blur-md">
              LOG / FLAT SENSOR CAPTURE
            </div>
          </div>

          {/* Slider Dividing Bar */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-[#F5F5F7] shadow-[0_0_20px_rgba(255,255,255,0.4)]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#050505] border-2 border-[#F5F5F7] flex items-center justify-center text-[#F5F5F7] shadow-2xl">
              <Sliders className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Bottom Specs Annotation */}
        <div className="max-w-5xl mx-auto mt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#6E6E73] gap-3">
          <span>● RAW SENSOR LOG CAPTURE</span>
          <span>● BESPOKE HCLICKS COLOR PROFILE</span>
          <span>● PRESERVED HIGHLIGHT ROLL-OFF</span>
        </div>
      </div>
    </section>
  );
}
