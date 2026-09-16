"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useMood } from "@/context/MoodContext";

export function AmbientAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { config, soundEnabled, toggleSound } = useMood();
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);

  const stopAudio = () => {
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.4);
      setTimeout(() => {
        oscillatorsRef.current.forEach((osc) => {
          try {
            osc.stop();
            osc.disconnect();
          } catch (e) {
            // Ignore
          }
        });
        oscillatorsRef.current = [];
        setIsPlaying(false);
      }, 400);
    }
  };

  const startAudio = () => {
    try {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0, ctx.currentTime);
      masterGain.gain.setTargetAtTime(0.035, ctx.currentTime, 1.0);
      gainNodeRef.current = masterGain;

      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(300, ctx.currentTime);

      masterGain.connect(filter);
      filter.connect(ctx.destination);

      const frequencies = config.audioFreqs || [65.41, 130.81, 196.0, 261.63];
      const newOscillators: OscillatorNode[] = [];

      frequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        osc.type = idx % 2 === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        const lfo = ctx.createOscillator();
        lfo.frequency.setValueAtTime(0.08 + idx * 0.04, ctx.currentTime);
        const lfoGain = ctx.createGain();
        lfoGain.gain.setValueAtTime(1.0, ctx.currentTime);
        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);
        lfo.start();

        osc.connect(masterGain);
        osc.start();
        newOscillators.push(osc);
      });

      oscillatorsRef.current = newOscillators;
      setIsPlaying(true);
    } catch (err) {
      console.error("Audio initialization error:", err);
    }
  };

  const handleToggle = () => {
    toggleSound();
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio();
    }
  };

  // If mood changes while playing, smooth retune
  useEffect(() => {
    if (isPlaying && audioCtxRef.current) {
      oscillatorsRef.current.forEach((osc, idx) => {
        if (config.audioFreqs[idx] && audioCtxRef.current) {
          osc.frequency.setTargetAtTime(config.audioFreqs[idx], audioCtxRef.current.currentTime, 0.8);
        }
      });
    }
  }, [config, isPlaying]);

  useEffect(() => {
    return () => {
      oscillatorsRef.current.forEach((osc) => {
        try {
          osc.stop();
          osc.disconnect();
        } catch (e) {
          // Ignore
        }
      });
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <button
      onClick={handleToggle}
      className="group relative flex items-center gap-2 rounded-full border border-white/10 bg-[#0B0B0D] px-3 py-1.5 text-xs text-[#A1A1A6] backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:text-[#F5F5F7]"
      title={soundEnabled ? "Sound ON (Click to Mute)" : "Sound OFF (Click to Enable)"}
      aria-label={soundEnabled ? "Mute audio" : "Enable audio"}
    >
      <div className="flex items-center gap-0.5 h-3">
        {soundEnabled && isPlaying ? (
          <>
            <span className="w-[2px] h-3 bg-[#2997FF] animate-pulse" style={{ animationDelay: "0ms" }} />
            <span className="w-[2px] h-2 bg-[#2997FF] animate-pulse" style={{ animationDelay: "150ms" }} />
            <span className="w-[2px] h-4 bg-[#2997FF] animate-pulse" style={{ animationDelay: "300ms" }} />
            <span className="w-[2px] h-2.5 bg-[#2997FF] animate-pulse" style={{ animationDelay: "450ms" }} />
          </>
        ) : (
          <VolumeX className="w-3.5 h-3.5 text-[#6E6E73] group-hover:text-[#A1A1A6] transition-colors" />
        )}
      </div>
      <span className="text-[10px] tracking-[0.2em] font-mono uppercase">
        {soundEnabled ? "SOUND: ON" : "SOUND: OFF"}
      </span>
    </button>
  );
}
