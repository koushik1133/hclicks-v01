"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type MoodTheme = "obsidian" | "blue-hour" | "amber-film" | "chrome-mono";

export interface MoodConfig {
  id: MoodTheme;
  code: string;
  name: string;
  tagline: string;
  clientType: string;
  accent: string;
  accentSecondary: string;
  bgDark: string;
  cardBg: string;
  glow: string;
  lutFilter: string;
  vibeText: string;
  audioFreqs: number[];
}

export const MOODS: Record<MoodTheme, MoodConfig> = {
  obsidian: {
    id: "obsidian",
    code: "01",
    name: "OBSIDIAN",
    tagline: "Default HClicks signature grade. Minimal, modern & cool precision.",
    clientType: "Minimalist Cinema & Pure Narrative",
    accent: "#2997FF",
    accentSecondary: "#5E5CE6",
    bgDark: "#050505",
    cardBg: "#111113",
    glow: "rgba(41, 151, 255, 0.15)",
    lutFilter: "contrast(1.04) saturate(1.02) brightness(1.0)",
    vibeText: "OBSIDIAN",
    audioFreqs: [65.41, 130.81, 196.0, 261.63], // Deep minimal drone
  },
  "blue-hour": {
    id: "blue-hour",
    code: "02",
    name: "CHICAGO BLUE HOUR",
    tagline: "Urban, editorial twilight. Deep navy, indigo shadows & silver.",
    clientType: "Metropolitan Ballrooms & Skyline Stories",
    accent: "#64B5F6",
    accentSecondary: "#5E5CE6",
    bgDark: "#040711",
    cardBg: "#0B1120",
    glow: "rgba(100, 181, 246, 0.18)",
    lutFilter: "contrast(1.1) saturate(1.05) hue-rotate(-8deg) brightness(0.98)",
    vibeText: "BLUE HOUR",
    audioFreqs: [82.41, 123.47, 164.81, 246.94], // Atmospheric blue texture
  },
  "amber-film": {
    id: "amber-film",
    code: "03",
    name: "CINEMATIC AMBER",
    tagline: "Subtle 35mm film print for media only. Clean monochrome UI.",
    clientType: "Nostalgic Sunlit Estates & Prairie Romance",
    accent: "#E5E5EA",
    accentSecondary: "#A1A1A6",
    bgDark: "#050505", // UI remains monochrome
    cardBg: "#111113", // UI remains monochrome
    glow: "rgba(229, 229, 234, 0.12)",
    lutFilter: "contrast(1.08) saturate(1.12) sepia(0.14)", // Media color grade only
    vibeText: "FILM",
    audioFreqs: [110.0, 164.81, 220.0, 329.63], // Warm analog ambience
  },
  "chrome-mono": {
    id: "chrome-mono",
    code: "04",
    name: "CHROME MONO",
    tagline: "High-contrast editorial silver, razor focus & fashion brutalism.",
    clientType: "Haute Couture, Editorial & Fashion Campaigns",
    accent: "#F5F5F7",
    accentSecondary: "#A1A1A6",
    bgDark: "#050505",
    cardBg: "#0D0D0F",
    glow: "rgba(245, 245, 247, 0.15)",
    lutFilter: "contrast(1.22) saturate(0.0) brightness(1.02)",
    vibeText: "CHROME",
    audioFreqs: [55.0, 110.0, 165.0, 220.0], // Minimal tonal ambience
  },
};

interface MoodContextType {
  currentMood: MoodTheme;
  setMood: (mood: MoodTheme) => void;
  config: MoodConfig;
  soundEnabled: boolean;
  toggleSound: () => void;
  playShutterSound: () => void;
}

const MoodContext = createContext<MoodContextType | undefined>(undefined);

export function MoodProvider({ children }: { children: React.ReactNode }) {
  const [currentMood, setCurrentMood] = useState<MoodTheme>("blue-hour");
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);

  useEffect(() => {
    try {
      const savedSound = localStorage.getItem("hclicks_sound_enabled");
      if (savedSound !== null) {
        setSoundEnabled(savedSound === "true");
      }
    } catch (e) {
      // LocalStorage fallback
    }
  }, []);

  const config = MOODS[currentMood] || MOODS["blue-hour"];

  // Apply CSS variables on root when mood changes
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--accent-primary", config.accent);
    root.style.setProperty("--accent-secondary", config.accentSecondary);
    root.style.setProperty("--bg-theme", config.bgDark);
    root.style.setProperty("--card-theme", config.cardBg);
    root.style.setProperty("--theme-glow", config.glow);
    root.style.setProperty("--theme-filter", config.lutFilter);
  }, [config]);

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    try {
      localStorage.setItem("hclicks_sound_enabled", String(nextState));
    } catch (e) {
      // Ignore
    }
  };

  // Synthetic camera shutter mechanical click (OFF by default, plays only if soundEnabled)
  const playShutterSound = () => {
    if (!soundEnabled) return;

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();

      // Mirror click
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(380, ctx.currentTime);
      osc1.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.035);
      gain1.gain.setValueAtTime(0.12, ctx.currentTime);
      gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.035);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start();
      osc1.stop(ctx.currentTime + 0.035);

      // Shutter curtain click
      setTimeout(() => {
        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.type = "triangle";
        osc2.frequency.setValueAtTime(280, ctx.currentTime);
        osc2.frequency.exponentialRampToValueAtTime(35, ctx.currentTime + 0.04);
        gain2.gain.setValueAtTime(0.15, ctx.currentTime);
        gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
        osc2.connect(gain2);
        gain2.connect(ctx.destination);
        osc2.start();
        osc2.stop(ctx.currentTime + 0.04);
      }, 35);
    } catch (e) {
      // Ignore audio error
    }
  };

  const handleSetMood = (mood: MoodTheme) => {
    playShutterSound();
    setCurrentMood(mood);
  };

  return (
    <MoodContext.Provider
      value={{
        currentMood,
        setMood: handleSetMood,
        config,
        soundEnabled,
        toggleSound,
        playShutterSound,
      }}
    >
      {children}
    </MoodContext.Provider>
  );
}

export function useMood() {
  const context = useContext(MoodContext);
  if (!context) {
    throw new Error("useMood must be used within a MoodProvider");
  }
  return context;
}
