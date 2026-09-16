"use client";

import { motion } from "framer-motion";

export function AppleStatement() {
  const pillars = [
    {
      number: "01",
      title: "CINEMATIC PACING",
      desc: "Every wedding is composed as an unscripted feature film, paced with intentional light, subtle camera movement, and natural soundscapes.",
    },
    {
      number: "02",
      title: "UNOBTRUSIVE VISION",
      desc: "We observe your day with quiet reverence, capturing authentic unprompted glances without interrupting the sanctity of the moment.",
    },
    {
      number: "03",
      title: "DUAL GLOBAL ROOTS",
      desc: "Based in the United States with roots in Hyderabad, we understand the grandeur of royal Indian traditions and modern Western elegance.",
    },
  ];

  return (
    <section className="py-28 md:py-40 bg-[#050505] text-[#F5F5F7] border-b border-white/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Eyebrow */}
        <div className="text-center mb-8">
          <span className="text-[11px] font-mono tracking-[0.3em] text-[#A1A1A6] uppercase">
            PHILOSOPHY & CRAFT
          </span>
        </div>

        {/* Large High-Contrast Editorial Statement */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h2 className="font-editorial-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-[#FFFFFF] leading-[1.05]">
            THE MOMENTS <br />
            <span className="font-serif-luxury italic font-light text-[#F5F5F7] normal-case">
              that become memories.
            </span>
          </h2>

          <p className="pt-4 text-base sm:text-xl text-[#A1A1A6] font-light leading-relaxed max-w-2xl mx-auto">
            Your celebration happens only once. Our purpose is to preserve the cadence, the tears, the laughter, and the sacred majesty in a visual form that grows more precious with every passing decade.
          </p>
        </div>

        {/* 3 Pillars in Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-20 mt-16 border-t border-white/10">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="space-y-3"
            >
              <span className="font-mono text-xs text-[#2997FF] font-bold block">
                {pillar.number}
              </span>
              <h3 className="text-xs font-semibold tracking-[0.2em] text-[#FFFFFF] uppercase">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A1A1A6] leading-relaxed font-light">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
