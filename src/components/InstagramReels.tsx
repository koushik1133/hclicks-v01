"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Heart } from "lucide-react";
import { InstagramIcon } from "./SocialIcons";
import { siteConfig } from "@/data/siteConfig";
import { useMood } from "@/context/MoodContext";

const instagramPosts = [
  {
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
    caption: "The majesty of Falaknuma Palace. A celebration etched in light and shadow.",
    likes: "2.4k",
    tag: "@hclicks.official",
  },
  {
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    caption: "Heirloom bridal jewelry and the quiet moments before the Baraat arrives.",
    likes: "3.1k",
    tag: "@hclicks.official",
  },
  {
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    caption: "Dusk over Chicago. Modern vows framed against the Lake Michigan skyline.",
    likes: "1.9k",
    tag: "@hclicks.official",
  },
  {
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80",
    caption: "Sunset romance in the Illinois prairie. Unfiltered and effortless.",
    likes: "2.8k",
    tag: "@hclicks.official",
  },
];

export function InstagramReels() {
  const { config } = useMood();

  return (
    <section className="py-24 md:py-36 bg-[#050505] text-[#F5F5F7] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div className="space-y-3">
            <span className="text-[11px] tracking-[0.35em] text-[#A1A1A6] uppercase font-mono">
              LIVE FROM THE LENS
            </span>
            <h2 className="font-editorial-title text-3xl sm:text-5xl md:text-6xl uppercase tracking-[0.05em]">
              THE SOCIAL <span className="font-serif-luxury italic font-light normal-case text-[#F5F5F7]">Dispatch</span>
            </h2>
          </div>
          <a
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#111113] px-6 py-2.5 text-xs font-semibold tracking-wider text-[#F5F5F7] uppercase hover:bg-[#F5F5F7] hover:text-[#050505] transition-all"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>FOLLOW @HCLICKS.OFFICIAL</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 4 Instagram Feed Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instagramPosts.map((post, idx) => (
            <motion.a
              key={idx}
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#0B0B0D] border border-white/10 block"
            >
              <Image
                src={post.image}
                alt={post.caption}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ filter: config.lutFilter }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Instagram Floating Badge */}
              <div className="absolute top-3.5 right-3.5 rounded-full bg-[#050505]/70 p-2 text-[#F5F5F7] backdrop-blur-md border border-white/15">
                <InstagramIcon className="w-3.5 h-3.5 text-[#2997FF]" />
              </div>

              {/* Post Details */}
              <div className="absolute bottom-4 left-4 right-4 space-y-2">
                <p className="text-xs text-[#F5F5F7] font-light line-clamp-2 leading-relaxed">
                  {post.caption}
                </p>
                <div className="flex items-center justify-between text-[10px] font-mono text-[#A1A1A6] pt-1">
                  <span className="text-[#2997FF]">{post.tag}</span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3 fill-[#2997FF] text-[#2997FF]" />
                    {post.likes}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
