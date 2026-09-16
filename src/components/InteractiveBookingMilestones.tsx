"use client";

import { useState } from "react";
import { Calendar, FileText, Camera, Sparkles, Box, CheckCircle2, ArrowRight } from "lucide-react";
import { useMood } from "@/context/MoodContext";

interface InteractiveBookingMilestonesProps {
  onOpenInquiry: () => void;
}

const milestones = [
  {
    step: "01",
    phase: "01 DISCOVER",
    title: "Aligning On Your Story & Date",
    icon: Calendar,
    timeline: "Initial Consultation • 24h Response",
    description: "We review your multi-day itinerary across the USA or Hyderabad, discuss aesthetic preferences, and reserve your date with an exclusive single-commission lock.",
    deliverables: ["Direct Creative Director Video Call", "Custom Destination Proposal", "Secure Digital Agreement"],
  },
  {
    step: "02",
    phase: "02 CONNECT",
    title: "Vision & Creative Direction",
    icon: FileText,
    timeline: "Pre-Production Alignment",
    description: "We connect with your event planning team to understand family traditions, lighting preferences, and specific heirloom moments.",
    deliverables: ["Creative Aesthetic Direction", "Shot List & Family Protocol", "Venue Technical Survey"],
  },
  {
    step: "03",
    phase: "03 PLAN",
    title: "Lighting Design & Timeline Mapping",
    icon: Sparkles,
    timeline: "2–4 Months Before Wedding",
    description: "We craft a detailed storyboard mapping golden hour windows, drone flight clearances, and multi-camera positioning.",
    deliverables: ["Bespoke Visual Storyboard", "Comprehensive Master Timeline", "Drone Flight Clearance & Permits"],
  },
  {
    step: "04",
    phase: "04 CREATE",
    title: "Seamless Multi-Camera Master Capture",
    icon: Camera,
    timeline: "Celebration Weekend",
    description: "Our dual-continent directors deploy RED 8K cinema packages and Cooke anamorphic glass with discreet tracking on your wedding day.",
    deliverables: ["Discreet Multi-Angle Cinema Rigs", "Lossless Multi-Track Audio", "Same-Week Teaser Social Reel"],
  },
  {
    step: "05",
    phase: "05 DELIVER",
    title: "Master Color Science & Heirloom Vault",
    icon: Box,
    timeline: "Permanent Lifetime Access",
    description: "Your master photographs and feature-length cinema film pass through DaVinci Resolve grading and are delivered in an Italian leather album box and cloud vault.",
    deliverables: ["Handcrafted Flush-Mount Album", "Lossless 8K Digital Vault", "Engraved Keepsake Archive"],
  },
];

export function InteractiveBookingMilestones({ onOpenInquiry }: InteractiveBookingMilestonesProps) {
  const [activeStep, setActiveStep] = useState(0);
  const currentMilestone = milestones[activeStep];
  const { config } = useMood();

  return (
    <section className="py-24 md:py-36 bg-[#050505] text-[#F5F5F7] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#111113] px-4 py-1 text-[10px] tracking-[0.3em] text-[#A1A1A6] uppercase font-mono">
              <Sparkles className="w-3.5 h-3.5 text-[#2997FF]" />
              <span>THE HCLICKS EXPERIENCE</span>
            </div>
            <h2 className="font-editorial-title text-3xl sm:text-5xl md:text-6xl uppercase tracking-[0.05em] leading-tight">
              FROM FIRST INQUIRY TO <br />
              <span className="font-serif-luxury italic font-light text-[#F5F5F7] normal-case">
                Heirloom Masterpiece.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#A1A1A6] font-light leading-relaxed">
            Every celebration is managed with white-glove precision, ensuring your wedding preparation is effortless and your final films are breathtaking.
          </p>
        </div>

        {/* 5 Stages Timeline Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {milestones.map((m, idx) => {
            const Icon = m.icon;
            const isActive = activeStep === idx;

            return (
              <button
                key={m.step}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between min-h-[110px] ${
                  isActive
                    ? "border-white/40 bg-[#111113] shadow-[0_0_25px_rgba(255,255,255,0.1)]"
                    : "border-white/10 bg-[#0B0B0D] hover:border-white/20 hover:bg-[#111113]"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="font-mono text-xs font-bold text-[#2997FF]">
                    STAGE {m.step}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? "text-[#F5F5F7]" : "text-[#6E6E73]"}`} />
                </div>
                <span className="text-[11px] font-semibold text-[#F5F5F7] uppercase tracking-wider line-clamp-1">
                  {m.phase}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Milestone Card */}
        <div className="rounded-3xl border border-white/10 bg-[#0B0B0D] p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-4xl sm:text-5xl font-editorial-title font-bold text-[#F5F5F7]">
                  {currentMilestone.step}
                </span>
                <div className="h-6 w-[1px] bg-white/20" />
                <span className="text-xs font-mono tracking-widest text-[#2997FF] uppercase">
                  {currentMilestone.timeline}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif-luxury text-2xl sm:text-4xl text-[#F5F5F7]">
                  {currentMilestone.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A1A1A6] leading-relaxed font-light">
                  {currentMilestone.description}
                </p>
              </div>

              {/* Deliverable Checkpoints */}
              <div className="space-y-2.5 pt-2">
                <span className="text-[10px] font-mono tracking-wider text-[#A1A1A6] uppercase block">
                  KEY DELIVERABLE MILESTONES
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#F5F5F7]">
                  {currentMilestone.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2997FF] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end space-y-4 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-8">
              <p className="text-xs text-[#6E6E73] lg:text-right">
                Ready to secure your dates with our lead creative directors?
              </p>
              <button
                onClick={onOpenInquiry}
                className="w-full sm:w-auto rounded-full bg-[#F5F5F7] px-8 py-3.5 text-xs font-semibold tracking-widest text-[#050505] uppercase hover:bg-[#FFFFFF] transition-all flex items-center justify-center gap-2"
              >
                <span>COMMISSION YOUR FILM</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
