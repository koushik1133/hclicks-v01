"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, MessageSquare } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "Luxury Wedding",
    eventDate: "",
    location: "USA - Chicago / Midwest",
    guestCount: "",
    storyVision: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (typeof window !== "undefined") {
        import("canvas-confetti").then(({ default: confetti }) => {
          confetti({
            particleCount: 30,
            spread: 40,
            origin: { y: 0.6 },
            colors: ["#2997FF", "#E5E5EA", "#ffffff"],
          });
        }).catch(() => {});
      }
    }, 700);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]/95 backdrop-blur-2xl p-4 sm:p-6 overflow-y-auto"
      >
        <div className="absolute inset-0" onClick={onClose} />

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative z-10 w-full max-w-2xl rounded-3xl border border-white/15 bg-[#0B0B0D] p-6 sm:p-10 text-[#F5F5F7] shadow-2xl max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 rounded-full border border-white/20 bg-[#111113] p-2.5 text-[#A1A1A6] hover:border-white/40 hover:text-[#F5F5F7] transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="py-12 text-center space-y-6">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-[#111113] text-[#F5F5F7] shadow-2xl">
                <CheckCircle2 className="w-10 h-10 text-[#2997FF]" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif-luxury text-3xl text-[#F5F5F7]">
                  Thank You. We Look Forward To Your Story.
                </h3>
                <p className="text-xs sm:text-sm text-[#A1A1A6] max-w-md mx-auto leading-relaxed">
                  Your inquiry has been received. Our directors in the USA and Hyderabad will connect with you shortly.
                </p>
              </div>

              <div className="pt-4 flex justify-center gap-4">
                <button
                  onClick={onClose}
                  className="rounded-full bg-[#F5F5F7] px-8 py-3 text-xs font-semibold tracking-wider text-[#050505] uppercase hover:bg-[#FFFFFF] transition-all"
                >
                  RETURN TO PORTFOLIO
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] font-mono tracking-widest text-[#2997FF] uppercase">
                  HCLICKS STUDIO RESERVATIONS
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#F5F5F7]">
                  Inquire For Your Celebration
                </h3>
                <p className="text-xs text-[#A1A1A6]">
                  Available across the USA, Hyderabad, and Destination locations worldwide.
                </p>
              </div>

              {/* Quick WhatsApp Banner */}
              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-white/15 bg-[#111113] px-4 py-3 text-xs text-[#F5F5F7] hover:border-emerald-500/50 hover:bg-[#161619] transition-all"
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Immediate Question? Chat on WhatsApp Concierge</span>
                </div>
                <span className="text-emerald-400 font-mono">OPEN →</span>
              </a>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-mono text-[#6E6E73] uppercase block mb-1">
                      Your Names *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya & Rohan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-[#111113] px-3.5 py-3 text-xs text-[#F5F5F7] placeholder-[#6E6E73] focus:border-[#2997FF] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-[#6E6E73] uppercase block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-[#111113] px-3.5 py-3 text-xs text-[#F5F5F7] placeholder-[#6E6E73] focus:border-[#2997FF] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-mono text-[#6E6E73] uppercase block mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-[#111113] px-3.5 py-3 text-xs text-[#F5F5F7] placeholder-[#6E6E73] focus:border-[#2997FF] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-[#6E6E73] uppercase block mb-1">
                      Event Type *
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-[#111113] px-3.5 py-3 text-xs text-[#F5F5F7] focus:border-[#2997FF] focus:outline-none"
                    >
                      <option value="Luxury Wedding">Luxury Wedding & Cinema</option>
                      <option value="Destination Celebration">Destination Celebration</option>
                      <option value="Pre-Wedding & Editorial">Pre-Wedding & Editorial</option>
                      <option value="Commercial Campaign">Commercial & Brand Work</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-mono text-[#6E6E73] uppercase block mb-1">
                      Date(s) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Nov 2026"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-[#111113] px-3.5 py-3 text-xs text-[#F5F5F7] placeholder-[#6E6E73] focus:border-[#2997FF] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-[#6E6E73] uppercase block mb-1">
                      Location *
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-[#111113] px-3.5 py-3 text-xs text-[#F5F5F7] focus:border-[#2997FF] focus:outline-none"
                    >
                      <option value="USA - Chicago / Midwest">USA - Chicago / Midwest</option>
                      <option value="USA - Other Destination">USA - Nationwide</option>
                      <option value="Hyderabad, India">Hyderabad, India</option>
                      <option value="International Destination">International Destination</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-mono text-[#6E6E73] uppercase block mb-1">
                    Your Story & Aesthetic Vision *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us about the moments and feelings you wish to preserve..."
                    value={formData.storyVision}
                    onChange={(e) => setFormData({ ...formData, storyVision: e.target.value })}
                    className="w-full rounded-xl border border-white/15 bg-[#111113] p-3 text-xs text-[#F5F5F7] placeholder-[#6E6E73] focus:border-[#2997FF] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-[#F5F5F7] py-3.5 text-center text-xs font-semibold tracking-widest text-[#050505] uppercase hover:bg-[#FFFFFF] transition-all disabled:opacity-50"
                >
                  {loading ? "TRANSMITTING..." : "SUBMIT INQUIRY"}
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
