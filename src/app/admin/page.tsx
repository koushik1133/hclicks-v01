"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Lock,
  Unlock,
  CheckCircle2,
  Clock,
  Archive,
  Trash2,
  MessageSquare,
  Mail,
  Search,
  Filter,
  Download,
  RefreshCw,
  ArrowLeft,
  Calendar,
  MapPin,
  DollarSign,
  ShieldCheck,
  User,
} from "lucide-react";
import { Inquiry } from "@/lib/inquiriesStore";
import { siteConfig } from "@/data/siteConfig";

const ADMIN_PIN = "2026";

export default function AdminDashboardPage() {
  const [pinInput, setPinInput] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinError, setPinError] = useState(false);

  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"ALL" | "PENDING" | "CONFIRMED" | "ARCHIVED">("ALL");
  const [regionFilter, setRegionFilter] = useState<"ALL" | "USA" | "HYDERABAD">("ALL");

  // Check saved session
  useEffect(() => {
    const sessionAuth = sessionStorage.getItem("hclicks_admin_auth");
    if (sessionAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/inquiries");
      const data = await res.json();
      if (data.success && data.inquiries) {
        setInquiries(data.inquiries);
      }
    } catch (err) {
      console.error("Failed to fetch inquiries:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchInquiries();
    }
  }, [isAuthenticated]);

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === ADMIN_PIN) {
      setIsAuthenticated(true);
      sessionStorage.setItem("hclicks_admin_auth", "true");
      setPinError(false);
    } else {
      setPinError(true);
      setPinInput("");
    }
  };

  const handleStatusChange = async (id: string, newStatus: "PENDING" | "CONFIRMED" | "ARCHIVED") => {
    try {
      const res = await fetch(`/api/inquiries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setInquiries((prev) =>
          prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
        );
      }
    } catch (err) {
      console.error("Failed to update status:", err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this booking record?")) return;
    try {
      const res = await fetch(`/api/inquiries/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        setInquiries((prev) => prev.filter((item) => item.id !== id));
      }
    } catch (err) {
      console.error("Failed to delete inquiry:", err);
    }
  };

  const handleExportCSV = () => {
    if (inquiries.length === 0) return;

    const headers = [
      "Ref Code",
      "Name",
      "Email",
      "Phone",
      "Event Type",
      "Event Date",
      "Location",
      "Region",
      "Status",
      "Submitted At",
      "Message",
    ];

    const rows = inquiries.map((i) => [
      i.refCode,
      `"${i.name}"`,
      i.email,
      i.phone,
      `"${i.eventType}"`,
      i.eventDate,
      `"${i.location}"`,
      i.region,
      i.status,
      new Date(i.createdAt).toLocaleString(),
      `"${(i.message || "").replace(/"/g, '""')}"`,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `hclicks_inquiries_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filter inquiries
  const filteredInquiries = inquiries.filter((item) => {
    const matchesStatus = statusFilter === "ALL" || item.status === statusFilter;
    const matchesRegion = regionFilter === "ALL" || item.region === regionFilter;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      !query ||
      item.name.toLowerCase().includes(query) ||
      item.email.toLowerCase().includes(query) ||
      item.refCode.toLowerCase().includes(query) ||
      item.location.toLowerCase().includes(query);

    return matchesStatus && matchesRegion && matchesSearch;
  });

  const pendingCount = inquiries.filter((i) => i.status === "PENDING").length;
  const confirmedCount = inquiries.filter((i) => i.status === "CONFIRMED").length;
  const usaCount = inquiries.filter((i) => i.region === "USA").length;
  const hydCount = inquiries.filter((i) => i.region === "HYDERABAD").length;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#050505] text-[#F5F5F7] flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md rounded-3xl border border-white/10 bg-[#0B0B0D] p-8 space-y-6 text-center shadow-2xl"
        >
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#111113] border border-white/15 text-[#2997FF]">
            <Lock className="w-7 h-7" />
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#A1A1A6] uppercase">
              HCLICKS STUDIO CONCIERGE
            </span>
            <h1 className="font-serif-luxury text-2xl text-[#FFFFFF]">
              Admin Security Portal
            </h1>
            <p className="text-xs text-[#86868B] font-light">
              Enter your studio passkey to access live client bookings and commissions.
            </p>
          </div>

          <form onSubmit={handlePinSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="password"
                maxLength={6}
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                placeholder="Enter Admin PIN (Default: 2026)"
                className="w-full text-center rounded-2xl border border-white/15 bg-[#111113] px-4 py-3.5 text-sm font-mono tracking-widest text-[#F5F5F7] placeholder-[#6E6E73] focus:border-[#2997FF] focus:outline-none"
                autoFocus
              />
            </div>

            {pinError && (
              <p className="text-xs font-mono text-rose-400">
                Invalid Passcode. Please try again.
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-full bg-[#FFFFFF] py-3.5 text-xs font-semibold tracking-widest text-[#050505] uppercase hover:bg-[#F5F5F7] transition-all"
            >
              UNLOCK DASHBOARD
            </button>
          </form>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#86868B] hover:text-[#FFFFFF] transition-colors pt-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN TO MAIN PORTFOLIO</span>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F7] font-sans selection:bg-[#2997FF]/30">
      {/* Admin Navbar */}
      <header className="sticky top-0 z-40 bg-[#050505]/85 backdrop-blur-xl border-b border-white/10 px-6 lg:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="font-editorial-title text-xl tracking-[0.2em] text-[#FFFFFF] font-semibold">
              HCLICKS
            </Link>
            <span className="text-[10px] font-mono tracking-widest text-[#2997FF] px-2.5 py-0.5 rounded-full bg-[#2997FF]/10 border border-[#2997FF]/30 uppercase">
              STUDIO ADMIN
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={fetchInquiries}
              disabled={loading}
              className="flex items-center gap-1.5 text-xs font-mono text-[#A1A1A6] hover:text-[#FFFFFF] transition-colors disabled:opacity-50"
              title="Refresh Inquiries"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
              <span className="hidden sm:inline">REFRESH</span>
            </button>

            <button
              onClick={handleExportCSV}
              className="flex items-center gap-1.5 rounded-full border border-white/15 bg-[#111113] px-3.5 py-1.5 text-xs font-mono text-[#F5F5F7] hover:border-white/40 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>EXPORT CSV</span>
            </button>

            <button
              onClick={() => {
                sessionStorage.removeItem("hclicks_admin_auth");
                setIsAuthenticated(false);
              }}
              className="text-xs font-mono text-[#6E6E73] hover:text-rose-400 transition-colors"
            >
              LOGOUT
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-10 space-y-10">
        {/* Title Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-[#A1A1A6] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#2997FF]" />
              <span>LIVE CONCIERGE DISPATCH</span>
            </div>
            <h1 className="font-serif-luxury text-3xl sm:text-4xl text-[#FFFFFF]">
              Client Inquiries & Commission Bookings
            </h1>
          </div>

          <div className="text-xs font-mono text-[#6E6E73]">
            <span>LAST SYNC: {new Date().toLocaleTimeString()}</span>
          </div>
        </div>

        {/* KPI Metrics Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="rounded-2xl border border-white/10 bg-[#0B0B0D] p-5 space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-[#A1A1A6] uppercase block">
              TOTAL INQUIRIES
            </span>
            <div className="text-3xl font-mono font-bold text-[#FFFFFF]">
              {inquiries.length}
            </div>
            <span className="text-[11px] text-[#6E6E73] block">Lifetime web bookings</span>
          </div>

          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5 space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase block">
              PENDING REVIEW
            </span>
            <div className="text-3xl font-mono font-bold text-amber-400">
              {pendingCount}
            </div>
            <span className="text-[11px] text-[#6E6E73] block">Requires studio response</span>
          </div>

          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5 space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase block">
              CONFIRMED DATES
            </span>
            <div className="text-3xl font-mono font-bold text-emerald-400">
              {confirmedCount}
            </div>
            <span className="text-[11px] text-[#6E6E73] block">Active booked commissions</span>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0B0B0D] p-5 space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-[#2997FF] uppercase block">
              REGIONAL SPLIT
            </span>
            <div className="text-xl font-mono font-bold text-[#FFFFFF] flex items-center justify-between">
              <span>USA: {usaCount}</span>
              <span className="text-[#333333]">/</span>
              <span>HYD: {hydCount}</span>
            </div>
            <span className="text-[11px] text-[#6E6E73] block">North America & India</span>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#0B0B0D] p-4">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#6E6E73] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search client, email, or ref ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-white/15 bg-[#111113] pl-10 pr-4 py-2.5 text-xs text-[#F5F5F7] placeholder-[#6E6E73] focus:border-[#2997FF] focus:outline-none"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-3 w-full md:w-auto flex-wrap">
            {/* Status Filter */}
            <div className="flex items-center gap-1 bg-[#111113] p-1 rounded-xl border border-white/10 text-xs font-mono">
              {(["ALL", "PENDING", "CONFIRMED", "ARCHIVED"] as const).map((st) => (
                <button
                  key={st}
                  onClick={() => setStatusFilter(st)}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    statusFilter === st
                      ? "bg-[#F5F5F7] text-[#050505] font-bold"
                      : "text-[#A1A1A6] hover:text-[#FFFFFF]"
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>

            {/* Region Filter */}
            <div className="flex items-center gap-1 bg-[#111113] p-1 rounded-xl border border-white/10 text-xs font-mono">
              {(["ALL", "USA", "HYDERABAD"] as const).map((reg) => (
                <button
                  key={reg}
                  onClick={() => setRegionFilter(reg)}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    regionFilter === reg
                      ? "bg-[#2997FF] text-[#FFFFFF] font-bold"
                      : "text-[#A1A1A6] hover:text-[#FFFFFF]"
                  }`}
                >
                  {reg}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Inquiries Table / Cards Container */}
        {filteredInquiries.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-[#0B0B0D] p-16 text-center space-y-3">
            <Clock className="w-10 h-10 text-[#6E6E73] mx-auto" />
            <h3 className="font-serif-luxury text-xl text-[#FFFFFF]">No Inquiries Found</h3>
            <p className="text-xs text-[#86868B] max-w-sm mx-auto">
              There are no client inquiries matching your current search or filter criteria.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredInquiries.map((inquiry) => (
              <div
                key={inquiry.id}
                className="rounded-2xl border border-white/10 bg-[#0B0B0D] p-6 hover:border-white/20 transition-all space-y-4"
              >
                {/* Top Row: Ref Code, Status Badge, Timestamp */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#2997FF] bg-[#2997FF]/10 px-3 py-1 rounded-full border border-[#2997FF]/30">
                      {inquiry.refCode}
                    </span>

                    {/* Status Badge */}
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                        inquiry.status === "CONFIRMED"
                          ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
                          : inquiry.status === "PENDING"
                          ? "border-amber-500/40 bg-amber-500/10 text-amber-400"
                          : "border-white/20 bg-white/5 text-[#A1A1A6]"
                      }`}
                    >
                      ● {inquiry.status}
                    </span>

                    <span className="text-[10px] font-mono text-[#2997FF] bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                      {inquiry.region} REGION
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-[#6E6E73]">
                    Received: {new Date(inquiry.createdAt).toLocaleDateString()} at{" "}
                    {new Date(inquiry.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>

                {/* Middle Grid: Client Info & Event Details */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  {/* Client Info */}
                  <div className="md:col-span-4 space-y-2">
                    <div className="flex items-center gap-2 text-base font-semibold text-[#FFFFFF]">
                      <User className="w-4 h-4 text-[#A1A1A6]" />
                      <span>{inquiry.name}</span>
                    </div>

                    <div className="space-y-1 text-xs text-[#A1A1A6] font-mono">
                      <div className="flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-[#6E6E73]" />
                        <a href={`mailto:${inquiry.email}`} className="hover:text-[#FFFFFF] transition-colors">
                          {inquiry.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageSquare className="w-3.5 h-3.5 text-[#6E6E73]" />
                        <a href={`tel:${inquiry.phone}`} className="hover:text-[#FFFFFF] transition-colors">
                          {inquiry.phone}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="md:col-span-5 space-y-2">
                    <h4 className="font-serif-luxury text-lg text-[#F5F5F7]">
                      {inquiry.eventType}
                    </h4>

                    <div className="grid grid-cols-2 gap-2 text-xs text-[#A1A1A6]">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#2997FF]" />
                        <span>{inquiry.eventDate}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#2997FF]" />
                        <span>{inquiry.location}</span>
                      </div>
                    </div>

                    {inquiry.message && (
                      <p className="text-xs text-[#86868B] font-light leading-relaxed bg-[#111113] p-3 rounded-xl border border-white/5 italic">
                        "{inquiry.message}"
                      </p>
                    )}
                  </div>

                  {/* Budget & Package */}
                  <div className="md:col-span-3 space-y-3 md:text-right">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-[#6E6E73] uppercase block">
                        ESTIMATED BUDGET
                      </span>
                      <span className="text-sm font-mono font-semibold text-[#FFFFFF] block">
                        {inquiry.budget || "$15,000 - $35,000"}
                      </span>
                    </div>

                    {inquiry.coverage && (
                      <span className="text-[10px] font-mono text-[#A1A1A6] bg-white/5 px-2.5 py-1 rounded-lg border border-white/10 inline-block">
                        {inquiry.coverage}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Actions Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
                  {/* Status Toggle Buttons */}
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-[#6E6E73] uppercase">SET STATUS:</span>
                    <button
                      onClick={() => handleStatusChange(inquiry.id, "CONFIRMED")}
                      className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                        inquiry.status === "CONFIRMED"
                          ? "bg-emerald-500 text-white font-bold"
                          : "bg-[#111113] text-[#A1A1A6] hover:text-emerald-400 border border-white/10"
                      }`}
                    >
                      CONFIRM DATE
                    </button>
                    <button
                      onClick={() => handleStatusChange(inquiry.id, "PENDING")}
                      className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                        inquiry.status === "PENDING"
                          ? "bg-amber-500 text-black font-bold"
                          : "bg-[#111113] text-[#A1A1A6] hover:text-amber-400 border border-white/10"
                      }`}
                    >
                      PENDING
                    </button>
                    <button
                      onClick={() => handleStatusChange(inquiry.id, "ARCHIVED")}
                      className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                        inquiry.status === "ARCHIVED"
                          ? "bg-white/20 text-white font-bold"
                          : "bg-[#111113] text-[#A1A1A6] hover:text-white border border-white/10"
                      }`}
                    >
                      ARCHIVE
                    </button>
                  </div>

                  {/* Direct Admin Reply Shortcuts */}
                  <div className="flex items-center gap-2">
                    {/* Instant WhatsApp Dispatch */}
                    <a
                      href={`${siteConfig.socials.whatsapp}&text=${encodeURIComponent(
                        `Hi ${inquiry.name}! This is HClicks Photography & Films. Thank you for your inquiry (${inquiry.refCode}) for your ${inquiry.eventType} on ${inquiry.eventDate} in ${inquiry.location}. We are delighted to confirm our directors have reviewed your date!`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-mono text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WHATSAPP CLIENT</span>
                    </a>

                    {/* Email Reply */}
                    <a
                      href={`mailto:${inquiry.email}?subject=${encodeURIComponent(
                        `HClicks Photography — Inquiry Confirmation (${inquiry.refCode})`
                      )}&body=${encodeURIComponent(
                        `Dear ${inquiry.name},\n\nThank you for reaching out to HClicks Photography & Films regarding your upcoming ${inquiry.eventType} on ${inquiry.eventDate} in ${inquiry.location}.\n\nOur team has received your inquiry (Ref: ${inquiry.refCode}) and would love to arrange a preliminary consultation.\n\nWarm regards,\nHClicks Photography & Films Studio`
                      )}`}
                      className="flex items-center gap-1.5 rounded-full border border-white/15 bg-[#111113] px-3.5 py-1.5 text-xs font-mono text-[#F5F5F7] hover:border-white/40 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>EMAIL</span>
                    </a>

                    {/* Delete */}
                    <button
                      onClick={() => handleDelete(inquiry.id)}
                      className="p-1.5 text-[#6E6E73] hover:text-rose-400 transition-colors rounded-lg border border-transparent hover:border-rose-500/30"
                      title="Delete Inquiry"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
