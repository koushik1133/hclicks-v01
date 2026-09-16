"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "view" | "play">("default");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || isReduced) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("[data-cursor]");
      if (interactive) {
        const type = interactive.getAttribute("data-cursor");
        if (type === "view") {
          setCursorVariant("view");
          setCursorText("VIEW");
        } else if (type === "play") {
          setCursorVariant("play");
          setCursorText("PLAY");
        } else if (type === "drag") {
          setCursorVariant("hover");
          setCursorText("DRAG");
        } else {
          setCursorVariant("hover");
          setCursorText("");
        }
      } else if (target.closest("button, a, input, select, textarea")) {
        setCursorVariant("hover");
        setCursorText("");
      } else {
        setCursorVariant("default");
        setCursorText("");
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision Dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-[#2997FF] mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: cursorVariant === "default" ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 50 }}
        style={{ width: 6, height: 6 }}
      />

      {/* Outer Cinematic Ring & Text Badge */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] flex items-center justify-center rounded-full border border-white/40 bg-[#050505]/80 text-[#F5F5F7] backdrop-blur-sm hidden md:flex"
        animate={{
          x: mousePosition.x - (cursorText ? 36 : 18),
          y: mousePosition.y - (cursorText ? 36 : 18),
          width: cursorText ? 72 : 36,
          height: cursorText ? 72 : 36,
          scale: cursorVariant === "default" ? 1 : cursorText ? 1.15 : 1.3,
          borderColor: cursorText ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.3)",
        }}
        transition={{ type: "spring", stiffness: 450, damping: 35 }}
      >
        {cursorText && (
          <span className="text-[10px] font-mono font-medium tracking-[0.2em] text-[#F5F5F7] uppercase">
            {cursorText}
          </span>
        )}
      </motion.div>
    </>
  );
}
