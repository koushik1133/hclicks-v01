import type { Metadata } from "next";
import { Cormorant_Garamond, Cinzel, Manrope } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hclicks.com"),
  title: {
    default: "HClicks Photography & Films | Luxury Cinematic Storytelling",
    template: "%s | HClicks Photography & Films",
  },
  description: "HClicks Photography & Films is a luxury cinematic studio capturing weddings, royal celebrations, and editorial moments across the USA and Hyderabad.",
  keywords: [
    "HClicks Photography",
    "HClicks Films",
    "Luxury Wedding Photography",
    "Wedding Photography Hyderabad",
    "Wedding Videography Hyderabad",
    "Indian Wedding Photography USA",
    "South Asian Wedding Photography Chicago",
    "Cinematic Wedding Films",
    "Destination Wedding Filmmaker",
    "Pre Wedding Photography Normal IL",
    "Royal Indian Weddings",
  ],
  authors: [{ name: "HClicks Photography & Films" }],
  creator: "HClicks Studio",
  publisher: "HClicks Photography & Films",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hclicks.com",
    title: "HClicks Photography & Films | Luxury Cinematic Weddings & Editorial Stories",
    description: "Your Story. Framed Like Cinema. World-class wedding photography, 8K drone cinema, and editorial stories in the USA & Hyderabad.",
    siteName: "HClicks Photography & Films",
    images: [
      {
        url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&h=630&q=85",
        width: 1200,
        height: 630,
        alt: "HClicks Photography & Films - Luxury Weddings & Cinema",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HClicks Photography & Films | Luxury Cinematic Storytelling",
    description: "Capturing weddings, royal celebrations, and editorial moments across the USA & Hyderabad.",
    images: ["https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&h=630&q=85"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://hclicks.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "HClicks Photography & Films",
  "image": "https://images.unsplash.com/photo-1583939003579-730e3918a45a",
  "@id": "https://hclicks.com",
  "url": "https://hclicks.com",
  "telephone": "+1-309-533-8842",
  "priceRange": "$$$$",
  "address": [
    {
      "@type": "PostalAddress",
      "addressLocality": "Normal",
      "addressRegion": "IL",
      "addressCountry": "US"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "addressCountry": "US"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "addressCountry": "IN"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/hclicks.official/",
    "https://www.youtube.com/@hclicksphotography7281",
    "https://www.facebook.com/hclickphotography/",
    "https://www.pinterest.com/hclicksp/",
    "https://hclicks.mypixieset.com",
    "https://us.sulekha.com/hclicks-photography-chicago-il"
  ],
  "knowsAbout": [
    "Luxury South Asian Wedding Photography",
    "Cinematic 4K/8K Wedding Films",
    "Drone Aerial Cinematography",
    "Pre-Wedding Editorial Shoots",
    "Commercial Brand Campaigns"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${cinzel.variable} ${manrope.variable} dark scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#050505] text-[#F5F5F7] antialiased selection:bg-[#2997FF]/30 selection:text-[#FFFFFF]">
        <div className="film-grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
