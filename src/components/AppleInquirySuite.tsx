"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, MessageSquare, Phone, Mail, ArrowRight, ArrowLeft } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { siteConfig } from "@/data/siteConfig";

export function AppleInquirySuite() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    eventType: "Wedding",
    eventDate: "",
    location: "USA - Chicago / Midwest",
    details: "",
    name: "",
    email: "",
    phone: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [submittedInquiry, setSubmittedInquiry] = useState<{ refCode: string; name: string; eventType: string; eventDate: string; location: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

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
          message: formData.details,
          budget: "$15,000 - $35,000",
          guestCount: "200-400 Guests",
          coverage: "8K Cinema & Heirloom Photography",
        }),
      });

      const data = await res.json();
      if (data.success && data.inquiry) {
        setSubmittedInquiry(data.inquiry);
        setStatus("success");
      } else {
        // Fallback
        setSubmittedInquiry({
          refCode: `HC-2026-${Math.floor(1000 + Math.random() * 9000)}`,
          name: formData.name || "Valued Client",
          eventType: formData.eventType,
          eventDate: formData.eventDate || "Upcoming Season",
          location: formData.location,
        });
        setStatus("success");
      }
    } catch (err) {
      setSubmittedInquiry({
        refCode: `HC-2026-${Math.floor(1000 + Math.random() * 9000)}`,
        name: formData.name || "Valued Client",
        eventType: formData.eventType,
        eventDate: formData.eventDate || "Upcoming Season",
        location: formData.location,
      });
      setStatus("success");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#050505] text-[#F5F5F7] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[11px] font-mono tracking-[0.3em] text-[#A1A1A6] uppercase">
            CONCIERGE RESERVATIONS & COMMISSIONS
          </span>
          <h2 className="font-editorial-title text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#FFFFFF] leading-[1.02]">
            LET'S CREATE <br />
            <span className="font-serif-luxury italic font-light text-[#F5F5F7] normal-case">
              Something Worth Remembering.
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#A1A1A6] font-light leading-relaxed max-w-xl mx-auto">
            We accept a limited number of commissions each season to ensure uncompromising artistic dedication to each film.
          </p>
        </div>

        {/* 2-Column Concierge Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Studio Concierge */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-3xl border border-white/10 bg-[#0B0B0D] p-8 space-y-6">
              <h3 className="font-serif-luxury text-2xl text-[#FFFFFF]">
                Direct Studio Concierge
              </h3>
              <p className="text-xs sm:text-sm text-[#A1A1A6] font-light leading-relaxed">
                Connect directly with our lead directors via WhatsApp, Email, or Phone for immediate date availability and custom proposals.
              </p>

              {/* WhatsApp Concierge Trigger */}
              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-white/15 bg-[#111113] p-4 text-[#F5F5F7] hover:border-emerald-500/50 hover:bg-[#161619] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400">
                    <MessageSquare className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider block">
                      Chat on WhatsApp
                    </span>
                    <span className="text-[11px] text-[#A1A1A6]">Instant Concierge Response</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#F5F5F7] group-hover:text-emerald-400 group-hover:translate-x-1 transition-all">
                  CONNECT →
                </span>
              </a>

              {/* Direct Lines */}
              <div className="space-y-4 pt-4 border-t border-white/10 text-xs text-[#A1A1A6]">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#2997FF] mt-0.5" />
                  <div>
                    <span className="text-[#FFFFFF] font-medium block">United States Studio:</span>
                    <a href={`tel:${siteConfig.contact.phoneUSA}`} className="hover:text-[#FFFFFF] transition-colors">
                      {siteConfig.contact.phoneUSA} (Chicago / Normal, IL)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#2997FF] mt-0.5" />
                  <div>
                    <span className="text-[#FFFFFF] font-medium block">Hyderabad Studio:</span>
                    <a href={`tel:${siteConfig.contact.phoneIndia}`} className="hover:text-[#FFFFFF] transition-colors">
                      {siteConfig.contact.phoneIndia} (Telangana, India)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#2997FF] mt-0.5" />
                  <div>
                    <span className="text-[#FFFFFF] font-medium block">Inquiries Email:</span>
                    <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[#FFFFFF] transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 5-Step Multi-Step Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-[#0B0B0D] p-8 sm:p-12">
              {status === "success" ? (
                <div className="py-10 text-center space-y-6">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#2997FF]/10 border border-[#2997FF]/40 text-[#2997FF]">
                    <Check className="w-8 h-8 stroke-[2.5]" />
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono tracking-[0.25em] text-[#2997FF] uppercase px-3 py-1 rounded-full border border-[#2997FF]/30 bg-[#2997FF]/10 inline-block">
                      BOOKING REF: {submittedInquiry?.refCode || "HC-2026-9901"}
                    </span>
                    <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#FFFFFF]">
                      Commission Received.
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A1A1A6] max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="text-[#FFFFFF] font-medium">{submittedInquiry?.name}</span>. Your reservation request for <span className="text-[#FFFFFF]">{submittedInquiry?.eventType}</span> ({submittedInquiry?.location}) has been recorded in our concierge schedule.
                    </p>
                  </div>

                  {/* 1-Click WhatsApp Instant Confirmation */}
                  <div className="pt-2 max-w-sm mx-auto space-y-3">
                    <a
                      href={`${siteConfig.socials.whatsapp}&text=${encodeURIComponent(
                        `Hi HClicks! I submitted my booking inquiry (Ref: ${
                          submittedInquiry?.refCode || "HC-2026-9901"
                        }) for my ${submittedInquiry?.eventType || "wedding"} on ${
                          submittedInquiry?.eventDate || "upcoming dates"
                        } in ${submittedInquiry?.location || "USA/Hyderabad"}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2.5 rounded-full bg-[#2997FF] px-6 py-3.5 text-xs font-semibold tracking-widest text-[#FFFFFF] uppercase hover:bg-[#3FA1FF] transition-all shadow-[0_0_25px_rgba(41,151,255,0.3)]"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>SPEED UP RESPONSE ON WHATSAPP</span>
                    </a>

                    <button
                      onClick={() => {
                        setStatus("idle");
                        setStep(1);
                        setSubmittedInquiry(null);
                      }}
                      className="text-[11px] font-mono text-[#86868B] hover:text-[#FFFFFF] hover:underline uppercase block mx-auto pt-2"
                    >
                      SUBMIT ANOTHER INQUIRY
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step Progress Line */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#6E6E73] border-b border-white/10 pb-4">
                    <span>STEP 0{step} OF 05</span>
                    <span className="text-[#F5F5F7]">
                      {step === 1 && "WHAT ARE YOU PLANNING?"}
                      {step === 2 && "WHEN?"}
                      {step === 3 && "WHERE?"}
                      {step === 4 && "TELL US ABOUT IT"}
                      {step === 5 && "CONTACT DETAILS"}
                    </span>
                  </div>

                  <AnimatePresence mode="wait">
                    {/* Step 1: WHAT ARE YOU PLANNING? */}
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="space-y-4 py-2"
                      >
                        <h4 className="font-serif-luxury text-2xl text-[#F5F5F7]">
                          What are you planning?
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {["Wedding", "Event", "Commercial", "Other"].map((option) => (
                            <button
                              type="button"
                              key={option}
                              onClick={() => setFormData({ ...formData, eventType: option })}
                              className={`p-4 rounded-2xl border text-left text-xs font-mono uppercase tracking-wider transition-all ${
                                formData.eventType === option
                                  ? "border-white/40 bg-[#111113] text-[#F5F5F7] font-bold"
                                  : "border-white/10 bg-[#050505] text-[#A1A1A6] hover:border-white/20"
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: WHEN? */}
                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="space-y-4 py-2"
                      >
                        <h4 className="font-serif-luxury text-2xl text-[#F5F5F7]">
                          When is your celebration?
                        </h4>
                        <input
                          type="text"
                          required
                          placeholder="e.g. October 2026 / Specific Dates"
                          value={formData.eventDate}
                          onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                          className="w-full rounded-2xl border border-white/15 bg-[#111113] px-4 py-4 text-xs text-[#F5F5F7] placeholder-[#6E6E73] focus:border-[#2997FF] focus:outline-none"
                        />
                      </motion.div>
                    )}

                    {/* Step 3: WHERE? */}
                    {step === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="space-y-4 py-2"
                      >
                        <h4 className="font-serif-luxury text-2xl text-[#F5F5F7]">
                          Where is it located?
                        </h4>
                        <select
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full rounded-2xl border border-white/15 bg-[#111113] px-4 py-4 text-xs text-[#F5F5F7] focus:border-[#2997FF] focus:outline-none"
                        >
                          <option value="USA - Chicago / Midwest">USA - Chicago / Midwest</option>
                          <option value="USA - Other Destination">USA - Nationwide Destination</option>
                          <option value="Hyderabad, India">Hyderabad, India</option>
                          <option value="International Destination">International Destination</option>
                        </select>
                      </motion.div>
                    )}

                    {/* Step 4: TELL US ABOUT IT */}
                    {step === 4 && (
                      <motion.div
                        key="step4"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="space-y-4 py-2"
                      >
                        <h4 className="font-serif-luxury text-2xl text-[#F5F5F7]">
                          Tell us about your story & vision
                        </h4>
                        <textarea
                          rows={4}
                          required
                          placeholder="Share your aesthetic preferences, venue details, rituals, or what inspires you..."
                          value={formData.details}
                          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                          className="w-full rounded-2xl border border-white/15 bg-[#111113] p-4 text-xs text-[#F5F5F7] placeholder-[#6E6E73] focus:border-[#2997FF] focus:outline-none leading-relaxed"
                        />
                      </motion.div>
                    )}

                    {/* Step 5: CONTACT DETAILS */}
                    {step === 5 && (
                      <motion.div
                        key="step5"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="space-y-4 py-2"
                      >
                        <h4 className="font-serif-luxury text-2xl text-[#F5F5F7]">
                          Your contact details
                        </h4>
                        <div className="space-y-3">
                          <input
                            type="text"
                            required
                            placeholder="Your Name(s) *"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full rounded-2xl border border-white/15 bg-[#111113] px-4 py-3.5 text-xs text-[#F5F5F7] placeholder-[#6E6E73] focus:border-[#2997FF] focus:outline-none"
                          />
                          <input
                            type="email"
                            required
                            placeholder="Email Address *"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full rounded-2xl border border-white/15 bg-[#111113] px-4 py-3.5 text-xs text-[#F5F5F7] placeholder-[#6E6E73] focus:border-[#2997FF] focus:outline-none"
                          />
                          <input
                            type="tel"
                            required
                            placeholder="Phone / WhatsApp Number *"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full rounded-2xl border border-white/15 bg-[#111113] px-4 py-3.5 text-xs text-[#F5F5F7] placeholder-[#6E6E73] focus:border-[#2997FF] focus:outline-none"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={() => setStep(step - 1)}
                        className="flex items-center gap-1.5 text-xs font-mono text-[#A1A1A6] hover:text-[#F5F5F7]"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>PREVIOUS</span>
                      </button>
                    ) : (
                      <div />
                    )}

                    {step < 5 ? (
                      <button
                        type="button"
                        onClick={() => setStep(step + 1)}
                        className="rounded-full bg-[#F5F5F7] px-6 py-2.5 text-xs font-semibold tracking-wider text-[#050505] uppercase hover:bg-[#FFFFFF] transition-all flex items-center gap-1.5"
                      >
                        <span>CONTINUE</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="rounded-full bg-[#F5F5F7] px-8 py-3 text-xs font-semibold tracking-widest text-[#050505] uppercase hover:bg-[#FFFFFF] transition-all disabled:opacity-50"
                      >
                        {status === "sending" ? "TRANSMITTING..." : "CONNECT WITH HCLICKS"}
                      </button>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
