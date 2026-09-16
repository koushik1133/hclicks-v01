"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon, YoutubeIcon, FacebookIcon } from "./SocialIcons";
import { MagneticButton } from "./MagneticButton";
import { siteConfig } from "@/data/siteConfig";

interface AppleFooterProps {
  onOpenInquiry: () => void;
}

export function AppleFooter({ onOpenInquiry }: AppleFooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-[#F5F5F7] border-t border-white/10 pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-16">
        {/* Large Final Wordmark & Closing Action */}
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <span className="text-[11px] font-mono tracking-[0.3em] text-[#A1A1A6] uppercase">
            THE FINAL FRAME
          </span>
          <h2 className="font-editorial-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.95] text-[#FFFFFF]">
            HCLICKS <br />
            <span className="font-serif-luxury italic font-light text-[#F5F5F7] normal-case">
              Photography & Films.
            </span>
          </h2>

          <div className="pt-2">
            <MagneticButton strength={0.3}>
              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center gap-2 rounded-full bg-[#F5F5F7] px-9 py-3.5 text-xs font-semibold tracking-[0.2em] text-[#050505] uppercase transition-all duration-300 hover:bg-[#FFFFFF] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                <span>COMMISSION YOUR FILM</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </MagneticButton>
          </div>
        </div>

        {/* 4 Minimal Studio Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pt-16 border-t border-white/10 text-xs text-[#A1A1A6]">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-3">
            <span className="font-editorial-title text-lg tracking-widest text-[#FFFFFF] font-semibold block">
              HCLICKS
            </span>
            <p className="font-light leading-relaxed max-w-sm">
              Luxury wedding visual narratives, royal celebratory cinema, and high-fashion editorial portraiture across North America and India.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-full border border-white/15 flex items-center justify-center text-[#A1A1A6] hover:text-[#FFFFFF] hover:border-[#FFFFFF] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-full border border-white/15 flex items-center justify-center text-[#A1A1A6] hover:text-[#FFFFFF] hover:border-[#FFFFFF] transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-full border border-white/15 flex items-center justify-center text-[#A1A1A6] hover:text-[#FFFFFF] hover:border-[#FFFFFF] transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-[#FFFFFF] uppercase font-semibold block">
              INDEX
            </span>
            <ul className="space-y-2 font-light">
              <li>
                <a href="#weddings" className="hover:text-[#FFFFFF] transition-colors">
                  Weddings & Stories
                </a>
              </li>
              <li>
                <a href="#films" className="hover:text-[#FFFFFF] transition-colors">
                  Cinematography
                </a>
              </li>
              <li>
                <a href="#stories" className="hover:text-[#FFFFFF] transition-colors">
                  The Wedding Journey
                </a>
              </li>
              <li>
                <a href="#commercial" className="hover:text-[#FFFFFF] transition-colors">
                  Commercial & Couture
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FFFFFF] transition-colors">
                  Studio Craft & Standards
                </a>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-[#FFFFFF] uppercase font-semibold block">
              STUDIOS
            </span>
            <div className="space-y-2 font-light">
              <div>
                <p className="text-[#FFFFFF] font-medium">United States</p>
                <p className="text-[11px] text-[#A1A1A6]">Chicago & Normal, IL • Nationwide</p>
              </div>
              <div>
                <p className="text-[#FFFFFF] font-medium">Hyderabad, India</p>
                <p className="text-[11px] text-[#A1A1A6]">Royal Palaces & Destination Resorts</p>
              </div>
            </div>
          </div>

          {/* Verified Channels */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-[#FFFFFF] uppercase font-semibold block">
              CHANNELS
            </span>
            <ul className="space-y-2 font-light">
              <li>
                <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#FFFFFF] transition-colors flex items-center gap-1">
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3 text-[#6E6E73]" />
                </a>
              </li>
              <li>
                <a href={siteConfig.socials.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-[#FFFFFF] transition-colors flex items-center gap-1">
                  <span>YouTube</span>
                  <ArrowUpRight className="w-3 h-3 text-[#6E6E73]" />
                </a>
              </li>
              <li>
                <a href={siteConfig.socials.pixieset} target="_blank" rel="noopener noreferrer" className="hover:text-[#FFFFFF] transition-colors flex items-center gap-1">
                  <span>Pixieset Vault</span>
                  <ArrowUpRight className="w-3 h-3 text-[#6E6E73]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Minimal Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#6E6E73]">
          <p>© {currentYear} HClicks Photography & Films. All Rights Reserved.</p>
          <div className="flex items-center gap-3">
            <span>USA & HYDERABAD</span>
            <span>•</span>
            <span className="text-[#A1A1A6]">CINEMATIC STORYTELLING</span>
            <span>•</span>
            <Link href="/admin" className="text-[#2997FF] hover:underline">
              ADMIN PORTAL
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
