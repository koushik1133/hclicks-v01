---
name: ui-skills
description: Design engineering skills for UI motion, progressive blur, container lines, spring dynamics, glassmorphism, accessibility, and zero-slop UI craft inspired by ui-skills.com.
---

# UI Skills — Design Engineering Standards

Master rules for frontend craft, motion, and visual design inspired by `ui-skills.com`.

## 1. Motion & Micro-Interactions (Emil Kowalski & Raphael Salaja)
- **Spring Dynamics**: Default to Framer Motion spring physics (`type: "spring", stiffness: 300, damping: 30`) instead of harsh linear transitions.
- **60fps GPU Acceleration**: Animate `transform` (`x`, `y`, `scale`, `rotate`) and `opacity` only. Avoid animating `width`, `height`, or `margin` directly.
- **Active State Physics**: Use micro scale compression (`active:scale-[0.98]` or `whileTap={{ scale: 0.97 }}`) for immediate tactile feedback.
- **Magnetic Controls**: Apply bounded magnetic pull (`max distance 6-10px`) for high-importance CTA nodes.

## 2. Layout & Container Architecture (Meng To & Ibelick)
- **Container Lines**: Use crisp 1px hairline border lines (`border-[#ffffff]/10` or `divide-[#ffffff]/10`) to structure grid sections with visual clarity.
- **Progressive Blur**: Apply multi-stop backdrop blurs (`backdrop-blur-xl`) with subtle linear gradient opacity masks (`mask-image: linear-gradient(...)`).
- **Container Queries & Grid Reflow**: Leverage `repeat(auto-fit, minmax(280px, 1fr))` for responsive component adaptation.

## 3. Glassmorphism & Depth Layers (Iart AI)
- **Frosted Dark Glass**: Stack semi-transparent surfaces (`bg-[#0B0B0D]/80 backdrop-blur-2xl border border-white/10`).
- **Specular Rim Highlights**: Add subtle top highlights (`border-t border-white/20`) to imitate physical glass bevels under light.
- **Ambient Illumination**: Use radial background glows with `pointer-events-none` for dynamic depth without affecting clicks.

## 4. Typographic Hierarchy & Precision Metadata (Pedro Bakaus & Addy Osmani)
- **Monospaced Technical Badges**: Use `font-mono text-[10px] tracking-[0.2em] uppercase text-[#86868B]` for precise metadata labels.
- **Zero-Slop Typography**: Maintain tight line heights (`leading-[0.95]` for display headlines, `leading-relaxed` for editorial copy).
- **Subtle Glow Effects**: Subtle hover glow effects for interactive typography without color distortion.

## 5. Accessibility & Keyboard Navigation (AccessLint & WCAG)
- **Focus Rings**: Implement visible, clean focus boundaries (`focus-visible:ring-2 focus-visible:ring-[#2997FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]`).
- **Touch Target Safety**: Ensure interactive hit areas are at least 44x44px.
- **Reduced Motion**: Honor `prefers-reduced-motion` settings.
