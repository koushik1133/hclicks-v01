"use client";

import Link from "next/link";
import { ArrowUpRight, Heart, MapPin, Mail, Phone, MessageSquare } from "lucide-react";
import { InstagramIcon, YoutubeIcon, FacebookIcon } from "./SocialIcons";
import { siteConfig } from "@/data/siteConfig";

interface FooterProps {
  onOpenInquiry: () => void;
}

export function Footer({ onOpenInquiry }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-[#f4efea] border-t border-[#ffffff]/10 pt-24 pb-12 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#c8a97e]/04 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 space-y-20">
        {/* Large Editorial Final Callout */}
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <span className="text-[11px] tracking-[0.35em] text-[#c8a97e] uppercase font-sans font-medium">
            THE FINAL FRAME
          </span>
          <h2 className="font-editorial-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.03em] uppercase leading-[0.95]">
            LET’S CREATE <br />
            <span className="font-serif-luxury italic font-light text-gold-gradient normal-case">
              Something Worth Remembering.
            </span>
          </h2>
          <div className="pt-4">
            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center gap-2 rounded-full bg-[#c8a97e] px-10 py-4 text-xs font-semibold tracking-[0.25em] text-[#080808] uppercase transition-all duration-300 hover:bg-[#e2c99b] hover:shadow-[0_0_40px_rgba(200,169,126,0.35)]"
            >
              <span>INQUIRE YOUR DATE</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Studio Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pt-16 border-t border-[#ffffff]/08 text-xs text-[#888888]">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col">
              <span className="font-editorial-title text-2xl tracking-[0.2em] text-[#f4efea] font-semibold">
                HCLICKS
              </span>
              <span className="text-[9px] tracking-[0.35em] text-[#c8a97e] uppercase -mt-0.5">
                Photography & Films
              </span>
            </div>
            <p className="font-light leading-relaxed max-w-sm">
              Luxury wedding visual narratives, royal celebratory cinema, and high-fashion editorial portraiture. Crafting timeless archives across North America and India.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full border border-[#ffffff]/15 flex items-center justify-center text-[#dcd2c3] hover:border-[#c8a97e] hover:text-[#c8a97e] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full border border-[#ffffff]/15 flex items-center justify-center text-[#dcd2c3] hover:border-[#c8a97e] hover:text-[#c8a97e] transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full border border-[#ffffff]/15 flex items-center justify-center text-[#dcd2c3] hover:border-[#c8a97e] hover:text-[#c8a97e] transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full border border-[#ffffff]/15 flex items-center justify-center text-[#dcd2c3] hover:border-[#c8a97e] hover:text-[#c8a97e] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[10px] font-mono tracking-widest text-[#c8a97e] uppercase block font-semibold">
              EXPLORE ARCHIVE
            </span>
            <ul className="space-y-2.5 font-light">
              <li>
                <a href="#stories" className="hover:text-[#c8a97e] transition-colors">
                  Featured Stories
                </a>
              </li>
              <li>
                <a href="#films" className="hover:text-[#c8a97e] transition-colors">
                  Cinema & Master Films
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#c8a97e] transition-colors">
                  The Wedding Journey
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#c8a97e] transition-colors">
                  Curated Editorial Gallery
                </a>
              </li>
              <li>
                <a href="#commercial" className="hover:text-[#c8a97e] transition-colors">
                  Commercial & Couture
                </a>
              </li>
              <li>
                <a href="#craft" className="hover:text-[#c8a97e] transition-colors">
                  Cinema Standards & RED Gear
                </a>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[10px] font-mono tracking-widest text-[#c8a97e] uppercase block font-semibold">
              DUAL STUDIOS
            </span>
            <div className="space-y-3 font-light">
              <div>
                <p className="text-[#f4efea] font-medium">United States</p>
                <p className="text-[11px] text-[#777777]">Chicago & Normal, IL • Available Nationwide</p>
                <a href={`tel:${siteConfig.contact.phoneUSA}`} className="text-[#c8a97e] hover:underline block mt-0.5">
                  {siteConfig.contact.phoneUSA}
                </a>
              </div>
              <div>
                <p className="text-[#f4efea] font-medium">Hyderabad, India</p>
                <p className="text-[11px] text-[#777777]">Bespoke Palaces & Luxury Destination Resorts</p>
                <a href={`tel:${siteConfig.contact.phoneIndia}`} className="text-[#c8a97e] hover:underline block mt-0.5">
                  {siteConfig.contact.phoneIndia}
                </a>
              </div>
            </div>
          </div>

          {/* Verified Profiles */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[10px] font-mono tracking-widest text-[#c8a97e] uppercase block font-semibold">
              VERIFIED PRESENCE
            </span>
            <ul className="space-y-2 font-light">
              <li>
                <a href={siteConfig.socials.pixieset} target="_blank" rel="noopener noreferrer" className="hover:text-[#c8a97e] transition-colors flex items-center gap-1">
                  <span>Pixieset Client Vault</span>
                  <ArrowUpRight className="w-3 h-3 text-[#555555]" />
                </a>
              </li>
              <li>
                <a href={siteConfig.socials.pinterest} target="_blank" rel="noopener noreferrer" className="hover:text-[#c8a97e] transition-colors flex items-center gap-1">
                  <span>Pinterest Moodboards</span>
                  <ArrowUpRight className="w-3 h-3 text-[#555555]" />
                </a>
              </li>
              <li>
                <a href={siteConfig.socials.sulekha} target="_blank" rel="noopener noreferrer" className="hover:text-[#c8a97e] transition-colors flex items-center gap-1">
                  <span>Sulekha Top Photographers</span>
                  <ArrowUpRight className="w-3 h-3 text-[#555555]" />
                </a>
              </li>
              <li>
                <a href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[#c8a97e] transition-colors flex items-center gap-1">
                  <span>Facebook Community</span>
                  <ArrowUpRight className="w-3 h-3 text-[#555555]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-[#ffffff]/08 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#555555]">
          <p>© {currentYear} HClicks Photography & Films. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span>USA & HYDERABAD</span>
            <span>•</span>
            <span className="text-[#c8a97e]">CINEMATIC STORYTELLING</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
