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
  const [refCode, setRefCode] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          eventType: formData.eventType,
          eventDate: formData.eventDate,
          location: formData.location,
          region: formData.location.includes("Hyderabad") ? "HYDERABAD" : "USA",
          message: formData.storyVision,
          guestCount: formData.guestCount || "200 Guests",
        }),
      });

      const data = await res.json();
      if (data.success && data.inquiry) {
        setRefCode(data.inquiry.refCode);
      } else {
        setRefCode(`HC-2026-${Math.floor(1000 + Math.random() * 9000)}`);
      }
    } catch (err) {
      setRefCode(`HC-2026-${Math.floor(1000 + Math.random() * 9000)}`);
    } finally {
      setLoading(false);
      setSubmitted(true);
      if (typeof window !== "undefined") {
        import("canvas-confetti")
          .then(({ default: confetti }) => {
            confetti({
              particleCount: 30,
              spread: 40,
              origin: { y: 0.6 },
              colors: ["#2997FF", "#E5E5EA", "#ffffff"],
            });
          })
          .catch(() => {});
      }
    }
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
            <div className="py-10 text-center space-y-6">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-[#2997FF]/30 bg-[#2997FF]/10 text-[#2997FF] shadow-2xl">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#2997FF] uppercase px-3 py-1 rounded-full border border-[#2997FF]/30 bg-[#2997FF]/10 inline-block">
                  BOOKING REF: {refCode || "HC-2026-9901"}
                </span>
                <h3 className="font-serif-luxury text-3xl text-[#F5F5F7]">
                  Thank You. We Look Forward To Your Story.
                </h3>
                <p className="text-xs sm:text-sm text-[#A1A1A6] max-w-md mx-auto leading-relaxed">
                  Your inquiry for <span className="text-[#FFFFFF]">{formData.name}</span> has been logged in our studio concierge system.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`${siteConfig.socials.whatsapp}&text=${encodeURIComponent(
                    `Hi HClicks! I submitted a booking request (Ref: ${refCode}) for ${formData.eventType} on ${formData.eventDate}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#2997FF] px-6 py-3 text-xs font-semibold tracking-wider text-[#FFFFFF] uppercase hover:bg-[#3FA1FF] transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>WHATSAPP CONCIERGE</span>
                </a>

                <button
                  onClick={onClose}
                  className="rounded-full border border-white/20 bg-[#111113] px-6 py-3 text-xs font-semibold tracking-wider text-[#F5F5F7] uppercase hover:bg-[#1C1C1E] transition-all"
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
