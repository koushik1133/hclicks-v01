"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMood } from "@/context/MoodContext";

export function LightFollower() {
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });
  const { config } = useMood();

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || isReduced) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden hidden md:block">
      {/* Soft Radial Ambient Glow */}
      <motion.div
        className="absolute rounded-full blur-[120px] opacity-15 mix-blend-screen"
        animate={{
          x: mousePos.x - 175,
          y: mousePos.y - 175,
        }}
        transition={{ type: "spring", damping: 40, stiffness: 200 }}
        style={{
          width: 350,
          height: 350,
          backgroundColor: config.accent,
        }}
      />

      {/* Subtle Anamorphic Horizontal Streak */}
      <motion.div
        className="absolute blur-[60px] opacity-10 mix-blend-screen"
        animate={{
          x: mousePos.x - 300,
          y: mousePos.y - 10,
        }}
        transition={{ type: "spring", damping: 50, stiffness: 150 }}
        style={{
          width: 600,
          height: 20,
          backgroundColor: config.accentSecondary,
        }}
      />
    </div>
  );
}
