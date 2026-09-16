"use client";

import { useEffect } from "react";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenisInstance: { raf: (time: number) => void; destroy: () => void } | null = null;
    let rafId: number | null = null;

    if (typeof window !== "undefined") {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!prefersReducedMotion) {
        import("lenis")
          .then(({ default: Lenis }) => {
            lenisInstance = new Lenis({
              duration: 1.1,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
              orientation: "vertical",
              gestureOrientation: "vertical",
              smoothWheel: true,
              touchMultiplier: 1.5,
            });

            function raf(time: number) {
              if (lenisInstance) {
                lenisInstance.raf(time);
                rafId = requestAnimationFrame(raf);
              }
            }

            rafId = requestAnimationFrame(raf);
          })
          .catch(() => {});
      }
    }

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      if (lenisInstance) lenisInstance.destroy();
    };
  }, []);

  return <>{children}</>;
}
