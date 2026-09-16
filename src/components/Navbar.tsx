"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Play } from "lucide-react";
import { InstagramIcon } from "./SocialIcons";
import { AmbientAudio } from "./AmbientAudio";
import { siteConfig } from "@/data/siteConfig";

interface NavbarProps {
  onOpenInquiry: () => void;
}

export function Navbar({ onOpenInquiry }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [chicagoTime, setChicagoTime] = useState("");
  const [hyderabadTime, setHyderabadTime] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
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
    { label: "Stories", href: "#stories" },
    { label: "Films", href: "#films" },
    { label: "Experience", href: "#experience" },
    { label: "Gallery", href: "#gallery" },
    { label: "Two Worlds", href: "#locations" },
    { label: "Commercial", href: "#commercial" },
    { label: "About & Craft", href: "#craft" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#080808]/90 backdrop-blur-md border-b border-[#ffffff]/08 py-3.5 shadow-2xl shadow-black/40"
            : "bg-gradient-to-b from-[#080808]/80 via-[#080808]/30 to-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex flex-col focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c8a97e]">
            <span className="font-editorial-title text-xl md:text-2xl tracking-[0.22em] text-[#f4efea] font-semibold transition-colors duration-300 group-hover:text-[#c8a97e]">
              HCLICKS
            </span>
            <span className="text-[8px] md:text-[9px] tracking-[0.38em] text-[#c8a97e] font-sans uppercase -mt-0.5 opacity-90">
              Photography & Films
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs tracking-[0.18em] uppercase text-[#dcd2c3]/80 hover:text-[#c8a97e] transition-colors duration-300 font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c8a97e] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Header Area: Live Clocks, Audio & Inquire CTA */}
          <div className="hidden sm:flex items-center space-x-4">
            {/* Live Dual Clocks */}
            <div className="hidden xl:flex items-center gap-3 border-r border-[#ffffff]/10 pr-4 text-[10px] tracking-wider text-[#999999] uppercase">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8a97e] animate-pulse" />
                CHI {chicagoTime || "10:54 AM"}
              </span>
              <span className="text-[#444444]">/</span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                HYD {hyderabadTime || "9:24 PM"}
              </span>
            </div>

            {/* Ambient Soundscape */}
            <AmbientAudio />

            {/* Primary CTA */}
            <button
              onClick={onOpenInquiry}
              data-cursor="view"
              className="relative group overflow-hidden rounded-full border border-[#c8a97e] bg-transparent px-5 py-2 text-xs font-medium tracking-[0.2em] text-[#f4efea] uppercase transition-all duration-500 hover:border-[#c8a97e] hover:shadow-[0_0_20px_rgba(200,169,126,0.25)]"
            >
              <span className="relative z-10 flex items-center gap-1.5 group-hover:text-[#080808] transition-colors duration-500">
                INQUIRE
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <div className="absolute inset-0 z-0 bg-[#c8a97e] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-3 lg:hidden">
            <AmbientAudio />
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-[#f4efea] hover:text-[#c8a97e] transition-colors"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile & Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-[#080808]/98 backdrop-blur-2xl px-8 py-10 text-[#f4efea]"
          >
            {/* Top Bar inside Menu */}
            <div className="flex items-center justify-between border-b border-[#ffffff]/10 pb-6">
              <div className="flex flex-col">
                <span className="font-editorial-title text-2xl tracking-[0.2em] text-[#f4efea]">HCLICKS</span>
                <span className="text-[9px] tracking-[0.35em] text-[#c8a97e] uppercase">Photography & Films</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full border border-[#ffffff]/15 p-2.5 text-[#dcd2c3] hover:border-[#c8a97e] hover:text-[#c8a97e] transition-all"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col space-y-5 my-auto">
              <span className="text-[10px] tracking-[0.35em] text-[#c8a97e] uppercase font-sans">
                Curated Navigation
              </span>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.06 + 0.1, duration: 0.4 }}
                  className="font-serif-luxury text-3xl sm:text-4xl text-[#f4efea] hover:text-[#c8a97e] hover:translate-x-2 transition-all flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#c8a97e]/60" />
                </motion.a>
              ))}
            </div>

            {/* Mobile Footer Area */}
            <div className="space-y-6 pt-6 border-t border-[#ffffff]/10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#999999]">
                <div>
                  <p className="text-[#f4efea] font-medium">USA & Hyderabad</p>
                  <p className="text-[11px] text-[#777777]">Chicago • Normal, IL • Hyderabad, India</p>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={siteConfig.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-[#c8a97e] hover:underline"
                  >
                    <InstagramIcon className="w-4 h-4" />
                    @hclicks.official
                  </a>
                </div>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full rounded-full bg-[#c8a97e] py-3.5 text-center text-xs font-semibold tracking-[0.25em] text-[#080808] uppercase transition-transform active:scale-[0.98]"
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
