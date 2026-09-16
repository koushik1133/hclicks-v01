"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "./SocialIcons";
import { AmbientAudio } from "./AmbientAudio";
import { MagneticButton } from "./MagneticButton";
import { siteConfig } from "@/data/siteConfig";

interface AppleNavbarProps {
  onOpenInquiry: () => void;
}

export function AppleNavbar({ onOpenInquiry }: AppleNavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [chicagoTime, setChicagoTime] = useState("");
  const [hyderabadTime, setHyderabadTime] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);

    const updateClocks = () => {
      const now = new Date();
      setChicagoTime(
        new Intl.DateTimeFormat("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
          timeZone: "America/Chicago",
        }).format(now)
      );
      setHyderabadTime(
        new Intl.DateTimeFormat("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
          timeZone: "Asia/Kolkata",
        }).format(now)
      );
    };

    updateClocks();
    const interval = setInterval(updateClocks, 10000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: "Weddings", href: "#weddings" },
    { label: "Films", href: "#films" },
    { label: "Stories", href: "#stories" },
    { label: "Commercial", href: "#commercial" },
    { label: "Two Worlds", href: "#locations" },
    { label: "About", href: "#about" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#000000]/80 backdrop-blur-xl border-b border-[#ffffff]/10 py-3.5"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link href="/" className="group flex items-center gap-2.5 focus:outline-none">
            <span className="font-editorial-title text-lg md:text-xl tracking-[0.25em] text-[#F5F5F7] font-semibold transition-colors duration-300 group-hover:text-[#FFFFFF]">
              HCLICKS
            </span>
            <span className="w-1 h-1 rounded-full bg-[#2997FF]" />
            <span className="text-[10px] tracking-[0.2em] text-[#86868B] uppercase hidden sm:inline font-sans">
              USA • HYDERABAD
            </span>
          </Link>

          {/* Minimalist Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs tracking-[0.14em] text-[#86868B] hover:text-[#FFFFFF] transition-colors duration-200 font-medium whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Header Area: Live Clocks, Ambient Audio & Apple-Style Magnetic CTA */}
          <div className="hidden sm:flex items-center gap-4 xl:gap-5">
            {/* Live Dual Time Clocks */}
            <div className="hidden xl:flex items-center gap-3 text-[11px] font-mono text-[#86868B] border-l border-[#ffffff]/10 pl-5 ml-2">
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2997FF] animate-pulse" />
                CHI {chicagoTime || "11:36 AM"}
              </span>
              <span className="text-[#333333]">/</span>
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                HYD {hyderabadTime || "10:06 PM"}
              </span>
            </div>

            {/* Ambient Soundscape Controller */}
            <AmbientAudio />

            {/* Apple-Style Magnetic CTA Button */}
            <MagneticButton strength={0.3}>
              <button
                onClick={onOpenInquiry}
                className="relative rounded-full bg-[#FFFFFF] text-[#000000] px-5 py-2 text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#F5F5F7] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] whitespace-nowrap"
              >
                INQUIRE
              </button>
            </MagneticButton>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-3 lg:hidden">
            <AmbientAudio />
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-[#F5F5F7] hover:text-[#FFFFFF] transition-colors"
              aria-label="Open Navigation"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Minimal Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-[#000000]/98 backdrop-blur-2xl px-8 py-10 text-[#F5F5F7]"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-[#ffffff]/10 pb-6">
              <div className="flex items-center gap-2">
                <span className="font-editorial-title text-xl tracking-[0.2em] text-[#FFFFFF]">HCLICKS</span>
                <span className="w-1 h-1 rounded-full bg-[#2997FF]" />
                <span className="text-[10px] tracking-widest text-[#86868B] uppercase">Films</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full border border-[#ffffff]/15 p-2 text-[#86868B] hover:text-[#FFFFFF] transition-colors"
                aria-label="Close Navigation"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col space-y-6 my-auto">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1, duration: 0.3 }}
                  className="font-serif-luxury text-3xl sm:text-4xl text-[#F5F5F7] hover:text-[#FFFFFF] transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#86868B]" />
                </motion.a>
              ))}
            </div>

            {/* Footer Area inside Mobile Menu */}
            <div className="space-y-4 pt-6 border-t border-[#ffffff]/10">
              <div className="flex items-center justify-between text-xs text-[#86868B]">
                <span>USA & Hyderabad</span>
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#F5F5F7] hover:text-[#2997FF] hover:underline transition-colors"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  @hclicks.official
                </a>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full rounded-full bg-[#FFFFFF] py-3.5 text-center text-xs font-semibold tracking-[0.2em] text-[#000000] uppercase transition-all active:scale-[0.98]"
              >
                RESERVE YOUR DATE / INQUIRE
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
