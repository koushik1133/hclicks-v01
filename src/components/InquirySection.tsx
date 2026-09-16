"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, MessageSquare, Phone, Mail, MapPin, Calendar, Sparkles, Heart } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function InquirySection() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (typeof window !== "undefined") {
        import("canvas-confetti").then(({ default: confetti }) => {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#c8a97e", "#f0deb4", "#ffffff"],
          });
        }).catch(() => {});
      }
    }, 800);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#080808] text-[#f4efea] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#c8a97e]/03 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#c8a97e]/30 bg-[#121212] px-4 py-1 text-[10px] tracking-[0.3em] text-[#c8a97e] uppercase font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BESPOKE RESERVATIONS & COMMISSIONS</span>
          </div>
          <h2 className="font-editorial-title text-3xl sm:text-5xl md:text-6xl uppercase tracking-[0.05em] leading-tight">
            BEGIN YOUR <br />
            <span className="font-serif-luxury italic font-light text-gold-gradient normal-case">
              Cinematic Narrative.
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#888888] font-light leading-relaxed max-w-xl mx-auto">
            We limit our calendar to a selected number of commissions each season to ensure uncompromising artistic dedication to every couple and film.
          </p>
        </div>

        {/* Form & Direct Concierge Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Concierge & Verified Studio Contacts */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-3xl border border-[#ffffff]/08 bg-[#0e0e0e] p-8 space-y-6">
              <h3 className="font-serif-luxury text-2xl text-[#f4efea]">
                Direct Studio Concierge
              </h3>
              <p className="text-xs sm:text-sm text-[#888888] font-light leading-relaxed">
                Prefer an immediate conversation? Reach out directly via WhatsApp or telephone for date availability and custom proposals.
              </p>

              {/* WhatsApp Instant Trigger */}
              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-[#25D366]/40 bg-[#121f16] p-4 text-[#f4efea] hover:bg-[#1a2c1f] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-[#080808]">
                    <MessageSquare className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider block">
                      Chat on WhatsApp
                    </span>
                    <span className="text-[11px] text-[#999999]">Instant Response Team</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#25D366] group-hover:translate-x-1 transition-transform">
                  CONNECT →
                </span>
              </a>

              {/* Direct Lines */}
              <div className="space-y-4 pt-4 border-t border-[#ffffff]/08 text-xs text-[#aaaaaa]">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#c8a97e] mt-0.5" />
                  <div>
                    <span className="text-[#f4efea] font-medium block">United States Studio:</span>
                    <a href={`tel:${siteConfig.contact.phoneUSA}`} className="hover:text-[#c8a97e] transition-colors">
                      {siteConfig.contact.phoneUSA} (Chicago / Normal, IL)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#c8a97e] mt-0.5" />
                  <div>
                    <span className="text-[#f4efea] font-medium block">Hyderabad Studio:</span>
                    <a href={`tel:${siteConfig.contact.phoneIndia}`} className="hover:text-[#c8a97e] transition-colors">
                      {siteConfig.contact.phoneIndia} (Telangana, India)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#c8a97e] mt-0.5" />
                  <div>
                    <span className="text-[#f4efea] font-medium block">Official Correspondence:</span>
                    <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[#c8a97e] transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Travel Readiness Notice */}
            <div className="rounded-2xl border border-[#c8a97e]/20 bg-[#121212] p-6 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#c8a97e] uppercase">
                <MapPin className="w-3.5 h-3.5" />
                <span>GLOBAL TRAVEL & DESTINATIONS</span>
              </div>
              <p className="text-xs text-[#888888] font-light leading-relaxed">
                Available for travel across North America, India, Europe, Mexico, and global destination sanctuaries.
              </p>
            </div>
          </div>

          {/* Right Column: Luxury Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-[#ffffff]/08 bg-[#0e0e0e] p-8 sm:p-12 relative">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center space-y-6"
                  >
                    <div className="inline-flex h-20 w-20 items-center justify-center rounded-full border border-[#c8a97e]/40 bg-[#141414] text-[#c8a97e] shadow-[0_0_40px_rgba(200,169,126,0.2)]">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#f4efea]">
                        Thank You. We Look Forward To Your Story.
                      </h3>
                      <p className="text-xs sm:text-sm text-[#888888] max-w-md mx-auto leading-relaxed">
                        Your inquiry has been delivered directly to our primary creative directors in the USA and Hyderabad. We will review your dates and reach out within 24 hours.
                      </p>
                    </div>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="rounded-full border border-[#c8a97e]/40 px-6 py-2.5 text-xs font-mono tracking-wider text-[#c8a97e] uppercase hover:bg-[#c8a97e] hover:text-[#080808] transition-all"
                    >
                      SEND ANOTHER INQUIRY
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="text-[11px] font-mono tracking-wider text-[#aaaaaa] uppercase block">
                          Your Names / Client Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Priya & Rohan"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-xl border border-[#ffffff]/10 bg-[#141414] px-4 py-3.5 text-xs text-[#f4efea] placeholder-[#555555] focus:border-[#c8a97e] focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label className="text-[11px] font-mono tracking-wider text-[#aaaaaa] uppercase block">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@domain.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-xl border border-[#ffffff]/10 bg-[#141414] px-4 py-3.5 text-xs text-[#f4efea] placeholder-[#555555] focus:border-[#c8a97e] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Phone */}
                      <div className="space-y-2">
                        <label className="text-[11px] font-mono tracking-wider text-[#aaaaaa] uppercase block">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-xl border border-[#ffffff]/10 bg-[#141414] px-4 py-3.5 text-xs text-[#f4efea] placeholder-[#555555] focus:border-[#c8a97e] focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Event Type */}
                      <div className="space-y-2">
                        <label className="text-[11px] font-mono tracking-wider text-[#aaaaaa] uppercase block">
                          Commission Type *
                        </label>
                        <select
                          value={formData.eventType}
                          onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                          className="w-full rounded-xl border border-[#ffffff]/10 bg-[#141414] px-4 py-3.5 text-xs text-[#f4efea] focus:border-[#c8a97e] focus:outline-none transition-colors"
                        >
                          <option value="Luxury Wedding">Luxury Multi-Day Wedding & Cinema</option>
                          <option value="Destination Celebration">Destination Wedding & Travel</option>
                          <option value="Pre-Wedding & Editorial">Pre-Wedding & Editorial Portraits</option>
                          <option value="Commercial Campaign">Commercial & Brand Campaign</option>
                          <option value="Special Private Event">Special Private Celebration</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {/* Event Date */}
                      <div className="space-y-2">
                        <label className="text-[11px] font-mono tracking-wider text-[#aaaaaa] uppercase block">
                          Event Date(s) *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. October 2026"
                          value={formData.eventDate}
                          onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                          className="w-full rounded-xl border border-[#ffffff]/10 bg-[#141414] px-4 py-3.5 text-xs text-[#f4efea] placeholder-[#555555] focus:border-[#c8a97e] focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Primary Location */}
                      <div className="space-y-2">
                        <label className="text-[11px] font-mono tracking-wider text-[#aaaaaa] uppercase block">
                          Celebration Location *
                        </label>
                        <select
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full rounded-xl border border-[#ffffff]/10 bg-[#141414] px-4 py-3.5 text-xs text-[#f4efea] focus:border-[#c8a97e] focus:outline-none transition-colors"
                        >
                          <option value="USA - Chicago / Midwest">USA - Chicago / Normal / Midwest</option>
                          <option value="USA - Other Destination">USA - Other State / Destination</option>
                          <option value="Hyderabad, India">Hyderabad, Telangana</option>
                          <option value="India - Other Destination">India - Palace / Beach Destination</option>
                          <option value="International Destination">International Destination</option>
                        </select>
                      </div>

                      {/* Estimated Guest Count */}
                      <div className="space-y-2">
                        <label className="text-[11px] font-mono tracking-wider text-[#aaaaaa] uppercase block">
                          Approx. Guest Count
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 250 - 500"
                          value={formData.guestCount}
                          onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                          className="w-full rounded-xl border border-[#ffffff]/10 bg-[#141414] px-4 py-3.5 text-xs text-[#f4efea] placeholder-[#555555] focus:border-[#c8a97e] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Story & Vision */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-mono tracking-wider text-[#aaaaaa] uppercase block">
                        Tell Us About Your Vision & Story *
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Share your aesthetic preferences, venue details, rituals, or what resonates with you in our cinema work..."
                        value={formData.storyVision}
                        onChange={(e) => setFormData({ ...formData, storyVision: e.target.value })}
                        className="w-full rounded-xl border border-[#ffffff]/10 bg-[#141414] p-4 text-xs text-[#f4efea] placeholder-[#555555] focus:border-[#c8a97e] focus:outline-none transition-colors leading-relaxed"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-full bg-[#c8a97e] py-4 text-center text-xs font-semibold tracking-[0.25em] text-[#080808] uppercase transition-all hover:bg-[#e2c99b] hover:shadow-[0_0_30px_rgba(200,169,126,0.4)] disabled:opacity-50"
                    >
                      {loading ? "TRANSMITTING INQUIRY..." : "SUBMIT RESERVATION INQUIRY"}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
