"use client";

import { useState } from "react";
import Image from "next/image";
import { Lock, Download, Heart, ShieldCheck } from "lucide-react";
import { useMood } from "@/context/MoodContext";

const vaultPhotos = [
  { id: 1, url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80", title: "The Royal Entrance", isFav: true },
  { id: 2, url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80", title: "Heirloom Henna & Jewels", isFav: false },
  { id: 3, url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80", title: "Lake Michigan Blue Hour", isFav: true },
  { id: 4, url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80", title: "Sacred Hearth Vows", isFav: false },
  { id: 5, url: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1000&q=80", title: "Illinois Golden Prairie", isFav: false },
  { id: 6, url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1000&q=80", title: "Sangeet Midnight Revelry", isFav: true },
];

export function InteractiveClientVault() {
  const [unlocked, setUnlocked] = useState(false);
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const [photos, setPhotos] = useState(vaultPhotos);
  const [downloading, setDownloading] = useState(false);
  const { config } = useMood();

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === "2026" || pin.toLowerCase() === "demo" || pin === "1234" || pin.length >= 3) {
      setUnlocked(true);
      setError(false);
      if (typeof window !== "undefined") {
        import("canvas-confetti").then(({ default: confetti }) => {
          confetti({
            particleCount: 25,
            spread: 40,
            ticks: 100,
            colors: ["#2997FF", "#E5E5EA", "#ffffff"],
          });
        }).catch(() => {});
      }
    } else {
      setError(true);
    }
  };

  const toggleFavorite = (id: number) => {
    setPhotos(
      photos.map((p) => (p.id === id ? { ...p, isFav: !p.isFav } : p))
    );
  };

  const simulateDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      alert("Demo Vault Download: Master Photo Archive (JPEG & RAW)");
    }, 1200);
  };

  return (
    <section className="py-24 md:py-36 bg-[#050505] text-[#F5F5F7] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#111113] px-4 py-1 text-[10px] tracking-[0.3em] text-[#A1A1A6] uppercase font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2997FF]" />
              <span>PRIVATE CLIENT VAULT DEMO</span>
            </div>
            <h2 className="font-editorial-title text-3xl sm:text-5xl md:text-6xl uppercase tracking-[0.05em] leading-tight">
              SEAMLESS CLIENT <br />
              <span className="font-serif-luxury italic font-light text-[#F5F5F7] normal-case">
                Proofing & Delivery.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#A1A1A6] font-light leading-relaxed">
            Every HClicks couple receives a private, PIN-protected online gallery vault for proofing, selecting album favorites, and downloading master archives.
          </p>
        </div>

        {/* Vault Container */}
        <div className="rounded-3xl border border-white/15 bg-[#0B0B0D] overflow-hidden shadow-2xl">
          {/* Top Vault Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#050505] border-b border-white/10 text-xs font-mono">
            <div className="flex items-center gap-3">
              <div className={`w-2.5 h-2.5 rounded-full ${unlocked ? "bg-emerald-500 animate-pulse" : "bg-[#2997FF]"}`} />
              <span className="text-[#A1A1A6] uppercase tracking-wider">
                {unlocked ? "VAULT UNLOCKED • PRIYA & ROHAN COLLECTION" : "HCLICKS CLIENT PORTAL SIMULATOR"}
              </span>
            </div>
            <div className="flex items-center gap-2 text-[#6E6E73]">
              <span>8K ARCHIVE</span>
              <span>•</span>
              <span className="text-[#F5F5F7]">PIN PROTECTED</span>
            </div>
          </div>

          <div className="p-6 sm:p-10">
            {!unlocked ? (
              /* Locked Pin Entry State */
              <div className="py-12 max-w-md mx-auto text-center space-y-6">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-[#111113] text-[#F5F5F7] shadow-xl">
                  <Lock className="w-7 h-7" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#F5F5F7]">
                    Enter VIP Access PIN
                  </h3>
                  <p className="text-xs text-[#A1A1A6]">
                    Experience our client gallery interface. Enter demo PIN <strong className="text-[#2997FF]">2026</strong> or click below to unlock.
                  </p>
                </div>

                <form onSubmit={handleUnlock} className="space-y-3">
                  <div className="flex gap-2">
                    <input
                      type="password"
                      maxLength={6}
                      placeholder="Enter PIN (2026)"
                      value={pin}
                      onChange={(e) => setPin(e.target.value)}
                      className="flex-1 rounded-xl border border-white/15 bg-[#111113] px-4 py-3 text-center text-sm font-mono tracking-[0.3em] text-[#F5F5F7] placeholder-[#6E6E73] focus:border-[#2997FF] focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="rounded-xl bg-[#F5F5F7] px-6 py-3 text-xs font-semibold tracking-wider text-[#050505] uppercase hover:bg-[#FFFFFF] transition-all"
                    >
                      UNLOCK
                    </button>
                  </div>
                  {error && (
                    <p className="text-[11px] text-rose-400 font-mono">
                      Invalid PIN. Try entering "2026"
                    </p>
                  )}
                </form>

                <button
                  onClick={() => {
                    setPin("2026");
                    setUnlocked(true);
                  }}
                  className="text-xs font-mono tracking-wider text-[#2997FF] hover:underline uppercase block mx-auto pt-2"
                >
                  ⚡ CLICK TO LAUNCH LIVE DEMO
                </button>
              </div>
            ) : (
              /* Unlocked Gallery Proofing Canvas */
              <div className="space-y-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#111113] border border-white/10">
                  <div className="space-y-0.5">
                    <h4 className="font-serif-luxury text-xl text-[#F5F5F7]">
                      Priya & Rohan • Master Collection
                    </h4>
                    <p className="text-[11px] font-mono text-[#6E6E73]">
                      742 Master Photographs • 3 Cinematic Films • Lossless Archival Access
                    </p>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      onClick={simulateDownload}
                      disabled={downloading}
                      className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-full bg-[#F5F5F7] px-5 py-2 text-xs font-semibold tracking-wider text-[#050505] uppercase hover:bg-[#FFFFFF] transition-all disabled:opacity-50"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>{downloading ? "PACKAGING..." : "DOWNLOAD ARCHIVE"}</span>
                    </button>
                    <button
                      onClick={() => setUnlocked(false)}
                      className="p-2 rounded-full border border-white/15 text-[#A1A1A6] hover:text-[#F5F5F7]"
                      title="Lock Vault"
                    >
                      <Lock className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
                  {photos.map((item) => (
                    <div
                      key={item.id}
                      className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#050505] border border-white/10"
                    >
                      <Image
                        src={item.url}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ filter: config.lutFilter }}
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                      <button
                        onClick={() => toggleFavorite(item.id)}
                        className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all ${
                          item.isFav
                            ? "bg-[#2997FF] text-white shadow-lg"
                            : "bg-[#050505]/70 text-[#A1A1A6] hover:text-white"
                        }`}
                        title={item.isFav ? "Saved to Favorites" : "Add to Favorites"}
                      >
                        <Heart className={`w-3.5 h-3.5 ${item.isFav ? "fill-current" : ""}`} />
                      </button>

                      <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-[11px] font-serif-luxury text-[#F5F5F7] block">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
