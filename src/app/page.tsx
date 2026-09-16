"use client";

import { useState } from "react";
import { MoodProvider } from "@/context/MoodContext";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { CustomCursor } from "@/components/CustomCursor";
import { LightFollower } from "@/components/LightFollower";
import { CinematicMoodDirector } from "@/components/CinematicMoodDirector";
import { AppleNavbar } from "@/components/AppleNavbar";
import { AppleHero } from "@/components/AppleHero";
import { MotionMarquee } from "@/components/MotionMarquee";
import { AppleStatement } from "@/components/AppleStatement";
import { PinnedStorytelling } from "@/components/PinnedStorytelling";
import { ExpandingFilmTheater } from "@/components/ExpandingFilmTheater";
import { RallyMovingReel } from "@/components/RallyMovingReel";
import { InteractiveStyleMorpher } from "@/components/InteractiveStyleMorpher";
import { WeddingStoryExperience } from "@/components/WeddingStoryExperience";
import { ColorGradeCompare } from "@/components/ColorGradeCompare";
import { InteractiveClientVault } from "@/components/InteractiveClientVault";
import { InteractiveBookingMilestones } from "@/components/InteractiveBookingMilestones";
import { DualContinentCinematography } from "@/components/DualContinentCinematography";
import { CommercialEditorial } from "@/components/CommercialEditorial";
import { StudioTeamCraft } from "@/components/StudioTeamCraft";
import { InstagramReels } from "@/components/InstagramReels";
import { AppleInquirySuite } from "@/components/AppleInquirySuite";
import { AppleFooter } from "@/components/AppleFooter";
import { StoryDetailModal } from "@/components/StoryDetailModal";
import { InquiryModal } from "@/components/InquiryModal";
import { StoryItem } from "@/data/portfolioData";
import { AnimatePresence, motion } from "framer-motion";
import { X, Play } from "lucide-react";

export default function Home() {
  const [selectedStory, setSelectedStory] = useState<StoryItem | null>(null);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [isTrailerModalOpen, setIsTrailerModalOpen] = useState(false);

  return (
    <MoodProvider>
      <SmoothScrollProvider>
        <main className="min-h-screen bg-[#050505] text-[#F5F5F7] selection:bg-[#2997FF]/30 selection:text-[#FFFFFF]">
          {/* Desktop Custom Precision Cursor */}
          <CustomCursor />

          {/* Dynamic Lens Flare Light Follower */}
          <LightFollower />

          {/* Minimal Bottom-Right LUT Switcher */}
          <CinematicMoodDirector />

          {/* Apple-Style Minimal Translucent Navigation */}
          <AppleNavbar onOpenInquiry={() => setIsInquiryModalOpen(true)} />

          {/* Hero Opening Section: Full Viewport Choreographed Entrance & Scroll Scale */}
          <AppleHero
            onOpenInquiry={() => setIsInquiryModalOpen(true)}
            onOpenCinemaTrailer={() => setIsTrailerModalOpen(true)}
          />

          {/* Kinetic Motion Editorial Marquee */}
          <MotionMarquee />

          {/* The Quiet Statement: "THE MOMENTS that become memories." */}
          <AppleStatement />

          {/* Pinned Cinematic Stories */}
          <PinnedStorytelling onSelectStory={(story) => setSelectedStory(story)} />

          {/* 2.39:1 Expanding Cinema Theater */}
          <ExpandingFilmTheater onOpenInquiry={() => setIsInquiryModalOpen(true)} />

          {/* Rally Moving Film Contact Sheet: 5 Depth-Staggered Rails */}
          <RallyMovingReel />

          {/* Portfolio Interactive Style Morpher */}
          <InteractiveStyleMorpher />

          {/* 7-Act Interactive Wedding Story Sequence */}
          <WeddingStoryExperience onOpenInquiry={() => setIsInquiryModalOpen(true)} />

          {/* Interactive Before/After Cinema Color Grade Slider */}
          <ColorGradeCompare />

          {/* VIP Client Proofing Vault & Gallery Simulator */}
          <InteractiveClientVault />

          {/* 5-Stage Client Experience Roadmap */}
          <InteractiveBookingMilestones onOpenInquiry={() => setIsInquiryModalOpen(true)} />

          {/* Dual Geographic Storytelling: Hyderabad & USA */}
          <DualContinentCinematography />

          {/* Structured Commercial, Brand Stories & Couture */}
          <CommercialEditorial onOpenInquiry={() => setIsInquiryModalOpen(true)} />

          {/* The Studio Behind The Lens & Cinema Standards */}
          <StudioTeamCraft />

          {/* Live Social Dispatch from @hclicks.official */}
          <InstagramReels />

          {/* Apple 5-Step Concierge Inquiry Suite */}
          <AppleInquirySuite />

          {/* The Final Frame / Footer */}
          <AppleFooter onOpenInquiry={() => setIsInquiryModalOpen(true)} />

          {/* Story Viewer Modal */}
          <StoryDetailModal
            story={selectedStory}
            onClose={() => setSelectedStory(null)}
            onOpenInquiry={() => setIsInquiryModalOpen(true)}
          />

          {/* Pop-up Reservation Modal */}
          <InquiryModal
            isOpen={isInquiryModalOpen}
            onClose={() => setIsInquiryModalOpen(false)}
          />

          {/* Hero Cinema Trailer Modal */}
          <AnimatePresence>
            {isTrailerModalOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]/98 backdrop-blur-2xl p-4 sm:p-8"
              >
                <div className="relative w-full max-w-5xl rounded-3xl border border-white/15 bg-[#0B0B0D] overflow-hidden shadow-2xl">
                  {/* Header */}
                  <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#050505]">
                    <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#F5F5F7] uppercase">
                      <Play className="w-3.5 h-3.5 fill-[#2997FF] text-[#2997FF]" />
                      <span>HCLICKS SIGNATURE SHOWREEL • USA & HYDERABAD</span>
                    </div>
                    <button
                      onClick={() => setIsTrailerModalOpen(false)}
                      className="rounded-full border border-white/20 p-2 text-[#A1A1A6] hover:text-[#FFFFFF] transition-colors"
                      aria-label="Close Showreel"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Video Player */}
                  <div className="relative aspect-video w-full bg-black">
                    <video
                      src="https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-posing-for-wedding-photos-41712-large.mp4"
                      controls
                      autoPlay
                      playsInline
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Footer */}
                  <div className="p-6 bg-[#0B0B0D] flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
                    <p className="text-xs text-[#A1A1A6] font-light">
                      Direct inquiries for upcoming wedding seasons in the United States and India.
                    </p>
                    <button
                      onClick={() => {
                        setIsTrailerModalOpen(false);
                        setIsInquiryModalOpen(true);
                      }}
                      className="rounded-full bg-[#F5F5F7] px-6 py-2.5 text-xs font-semibold tracking-wider text-[#050505] uppercase hover:bg-[#FFFFFF] transition-all"
                    >
                      INQUIRE CINEMA DATES
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </SmoothScrollProvider>
    </MoodProvider>
  );
}
