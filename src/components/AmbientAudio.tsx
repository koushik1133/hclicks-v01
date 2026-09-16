"use client";

import { useEffect, useRef, useState } from "react";
import { VolumeX, Music } from "lucide-react";
import { useMood } from "@/context/MoodContext";

// Smooth, pleasant cinematic ambient soundtrack (Piano & Strings)
const CINEMATIC_AUDIO_URL =
  "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=cinematic-piano-ambient-112185.mp3";

export function AmbientAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { soundEnabled, toggleSound } = useMood();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(CINEMATIC_AUDIO_URL);
    audio.loop = true;
    audio.volume = 0.25; // Smooth ambient volume level
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, []);

  const handleToggle = () => {
    toggleSound();
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.error("Audio playback error:", err);
        });
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="group relative flex items-center gap-2.5 rounded-full border border-white/10 bg-[#0B0B0D]/90 px-3.5 py-1.5 text-xs text-[#A1A1A6] backdrop-blur-md transition-all duration-300 hover:border-[#2997FF]/50 hover:text-[#F5F5F7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2997FF]"
      title={isPlaying ? "Mute Ambient Soundtrack" : "Play Pleasant Ambient Cinema Track"}
      aria-label={isPlaying ? "Mute soundtrack" : "Play soundtrack"}
    >
      <div className="flex items-center gap-1 h-3">
        {isPlaying ? (
          <div className="flex items-end gap-[2px] h-3">
            <span className="w-[2px] h-3 bg-[#2997FF] animate-pulse" style={{ animationDelay: "0ms" }} />
            <span className="w-[2px] h-2 bg-[#2997FF] animate-pulse" style={{ animationDelay: "150ms" }} />
            <span className="w-[2px] h-3.5 bg-[#2997FF] animate-pulse" style={{ animationDelay: "300ms" }} />
            <span className="w-[2px] h-2 bg-[#2997FF] animate-pulse" style={{ animationDelay: "450ms" }} />
          </div>
        ) : (
          <VolumeX className="w-3.5 h-3.5 text-[#6E6E73] group-hover:text-[#A1A1A6] transition-colors" />
        )}
      </div>
      <span className="text-[10px] tracking-[0.2em] font-mono uppercase flex items-center gap-1.5">
        <Music className={`w-3 h-3 ${isPlaying ? "text-[#2997FF]" : "text-[#6E6E73]"}`} />
        <span>{isPlaying ? "CINEMA SOUNDTRACK" : "SOUNDTRACK: OFF"}</span>
      </span>
    </button>
  );
}
