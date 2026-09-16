export interface StoryItem {
  id: string;
  number: string;
  category: "WEDDING" | "PRE-WEDDING" | "FILM" | "COMMERCIAL" | "EDITORIAL";
  title: string;
  subtitle: string;
  location: string;
  year: string;
  coverImage: string;
  aspect: "landscape" | "portrait" | "wide";
  layoutType: "split" | "wide" | "editorial-duo" | "magazine";
  overview: string;
  narrative: string;
  quote?: string;
  filmDuration?: string;
  gallery: {
    url: string;
    caption: string;
    aspect?: "portrait" | "landscape";
  }[];
  specs: {
    cameras: string;
    optics: string;
    drone: string;
    colorGrade: string;
  };
}

export interface FilmItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  location: string;
  thumbnail: string;
  previewVideoUrl?: string;
  description: string;
  tags: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "royal-weddings" | "usa-weddings" | "pre-wedding" | "portraits" | "cinema-drone";
  categoryLabel: string;
  location: string;
  imageUrl: string;
  aspectRatio: "portrait" | "landscape" | "square";
  craftNote: string;
}

export interface ServiceItem {
  number: string;
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  image: string;
}

export const featuredStories: StoryItem[] = [
  {
    id: "royal-taj-falaknuma",
    number: "01",
    category: "WEDDING",
    title: "The Falaknuma Grandeur",
    subtitle: "A Three-Day Royal Celebration Above The City of Pearls",
    location: "Hyderabad, India",
    year: "2025",
    coverImage: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1920&q=85",
    aspect: "wide",
    layoutType: "split",
    overview: "Set against the marble courtyards and gilded heritage architecture of Hyderabad, this royal celebration brought together centuries-old traditions with modern cinematic aesthetics.",
    narrative: "From the delicate application of henna bathed in morning courtyards to the dramatic night procession lit by hundreds of ceremonial lanterns, every frame was composed to feel like a timeless period film. We utilized high-dynamic-range cinema sensors to capture the intricate zari craftsmanship, velvet textures, and subtle emotional glances between the couple and their elders.",
    quote: "HClicks didn't just document the day — they captured the soul and unspoken poetry of our heritage.",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
        caption: "Ceremonial heirloom jewels catching the golden afternoon light",
        aspect: "portrait",
      },
      {
        url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=80",
        caption: "The grand entrance through the historic palace arches",
        aspect: "landscape",
      },
      {
        url: "https://images.unsplash.com/photo-1545232979-fbf68fe9ec47?auto=format&fit=crop&w=1200&q=80",
        caption: "Intimate bridal preparation in antique mirror reflections",
        aspect: "portrait",
      },
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80",
        caption: "The sacred vows surrounded by loved ones and fragrant florals",
        aspect: "landscape",
      },
    ],
    specs: {
      cameras: "RED V-Raptor 8K VV & Sony Cine Prime Suite",
      optics: "Cooke Anamorphic /i & Master Primes",
      drone: "DJI Inspire 3 (8K X9-8K Air Cinema)",
      colorGrade: "Warm Film Stock Emulation • Custom Kodak 2383 Print Profile",
    },
  },
  {
    id: "chicago-lake-michigan",
    number: "02",
    category: "WEDDING",
    title: "Twilight on Lake Michigan",
    subtitle: "Modern Architectural Elegance Meets Timeless Vows",
    location: "Chicago, Illinois",
    year: "2025",
    coverImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1920&q=85",
    aspect: "landscape",
    layoutType: "wide",
    overview: "An editorial-style Chicago celebration blending South Asian vibrancy with the dramatic skyline and cool waters of Lake Michigan.",
    narrative: "With the Chicago riverwalk and iconic limestone towers serving as a backdrop, we captured the couple's celebration as dusk transitioned into deep indigo. The combination of sweeping drone movements across the waterfront and candid 50mm portraiture produced an unforgettable visual symphony.",
    quote: "Looking through our film felt like watching a Hollywood romance made exclusively for us.",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=80",
        caption: "Sunset overlooking the Chicago harbor skyline",
        aspect: "landscape",
      },
      {
        url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
        caption: "First look on the private terrace with architectural shadows",
        aspect: "portrait",
      },
      {
        url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1600&q=80",
        caption: "The grand ballroom first dance enveloped in low-lying fog",
        aspect: "landscape",
      },
    ],
    specs: {
      cameras: "Sony FX6 & FX3 Dual Cine Package",
      optics: "G-Master 24-70mm f/2.8 II & 50mm f/1.2 GM",
      drone: "DJI Mavic 3 Cine ProRes 422 HQ",
      colorGrade: "Clean Editorial Cool-Shadows with Luminous Warm Skin Tones",
    },
  },
  {
    id: "illinois-autumn-editorial",
    number: "03",
    category: "PRE-WEDDING",
    title: "The Autumn Equinox Estate",
    subtitle: "An Editorial Pre-Wedding Narrative in Rural Illinois",
    location: "Normal & Central Illinois",
    year: "2024",
    coverImage: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1920&q=85",
    aspect: "portrait",
    layoutType: "editorial-duo",
    overview: "A secluded countryside estate bathed in amber golden hour light, capturing effortless romance and editorial fashion sensibilities.",
    narrative: "Stepping away from rigid poses, we designed a guided storytelling session where the couple moved naturally through tall prairie grasses, vintage stone pergolas, and candlelit evening alcoves.",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=80",
        caption: "Golden hour silhouettes across wild prairie grass",
        aspect: "portrait",
      },
      {
        url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1600&q=80",
        caption: "Quiet laughter beneath centuries-old oak canopies",
        aspect: "landscape",
      },
    ],
    specs: {
      cameras: "Leica SL2 & Canon Cinema C70",
      optics: "Summilux-SL 35mm f/1.4 & 75mm f/2",
      drone: "DJI Mini 4 Pro Cine D-Log M",
      colorGrade: "Rich Organic Autumn Amber & Gentle Highlight Roll-off",
    },
  },
  {
    id: "midnight-revelry-sangeet",
    number: "04",
    category: "WEDDING",
    title: "The Midnight Sangeet",
    subtitle: "High-Energy Rhythm, Dhol Beats & Cinematic Light Sculpting",
    location: "Chicago Ballroom • USA",
    year: "2024",
    coverImage: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1920&q=85",
    aspect: "wide",
    layoutType: "magazine",
    overview: "A mesmerizing celebration of music, family performances, and electric energy documented with high-frame-rate cinema rigs and dynamic gimbal tracking.",
    narrative: "When the live music kicked in, our team deployed 3-axis stabilized rigs and fast cinema primes to float effortlessly through dance circles, capturing unrepeatable micro-expressions and explosive group choreography.",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1600&q=80",
        caption: "Dynamic choreography under custom concert-grade stage lights",
        aspect: "landscape",
      },
      {
        url: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1200&q=80",
        caption: "Groom squad celebratory arrival with live Dhol drummers",
        aspect: "portrait",
      },
    ],
    specs: {
      cameras: "RED Komodo 6K & Sony FX3 Rig",
      optics: "Zeiss Supreme Primes",
      drone: "Custom Indoor Cinewhoop 4K 60p",
      colorGrade: "Vibrant Low-Light Contrast with Preserved Silk & Gold Details",
    },
  },
];

export const cinemaReels: FilmItem[] = [
  {
    id: "film-hyderabad-palace",
    title: "Echoes of the Nizam | A Royal Hyderabad Wedding Film",
    category: "Wedding Cinema",
    duration: "4:28",
    location: "Hyderabad, India",
    thumbnail: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
    previewVideoUrl: "https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-posing-for-wedding-photos-41712-large.mp4",
    description: "An evocative cinematic master film capturing royal Hyderabadi nuptials, featuring drone sunrise perspectives over heritage palaces and heart-stirring original score mixing.",
    tags: ["RED Cinema", "Heritage", "Anamorphic", "4K HDR"],
  },
  {
    id: "film-chicago-skyline",
    title: "City of Lights | Chicago Luxury Destination Nuptials",
    category: "Destination Highlight",
    duration: "3:45",
    location: "Chicago, IL • USA",
    thumbnail: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    previewVideoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-couple-walking-in-the-city-at-sunset-41708-large.mp4",
    description: "A sweeping urban love story framed by sunset over the Chicago River, architectural glass reflections, and an opulent ballroom afterparty.",
    tags: ["Sony FX Cine", "Urban Luxury", "Gimbal Motion"],
  },
  {
    id: "film-estate-prewedding",
    title: "Whispering Meadows | Editorial Film & Motion Portrait",
    category: "Pre-Wedding Film",
    duration: "2:50",
    location: "Central Illinois, USA",
    thumbnail: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=80",
    previewVideoUrl: "https://assets.mixkit.co/videos/preview/mixkit-romantic-couple-enjoying-the-sunset-in-nature-41703-large.mp4",
    description: "Intimate, sun-drenched moments filmed on vintage optics with organic handheld warmth and poetic ambient sound design.",
    tags: ["Leica Cine", "Editorial", "Golden Hour"],
  },
  {
    id: "film-commercial-couture",
    title: "The Silk Tapestry | High-End Bridal Couture Campaign",
    category: "Commercial Film",
    duration: "1:35",
    location: "Hyderabad & Chicago",
    thumbnail: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
    previewVideoUrl: "https://assets.mixkit.co/videos/preview/mixkit-model-posing-in-a-traditional-indian-dress-41710-large.mp4",
    description: "A brand narrative highlighting handcrafted bridal lehengas, diamond jewelry, and bespoke luxury textile details.",
    tags: ["Macro Cinema", "Commercial", "Art Direction"],
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Heritage Courtyard Glance",
    category: "royal-weddings",
    categoryLabel: "Royal Wedding",
    location: "Hyderabad, India",
    imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "portrait",
    craftNote: "RED V-Raptor • 50mm Anamorphic • Natural Courtyard Backlight",
  },
  {
    id: "gal-2",
    title: "Chicago Harbor at Twilight",
    category: "usa-weddings",
    categoryLabel: "USA Wedding",
    location: "Chicago, IL",
    imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "landscape",
    craftNote: "Sony FX6 • 24mm f/1.4 • Blue Hour City Skylight",
  },
  {
    id: "gal-3",
    title: "Intricate Bridal Mehendi Detail",
    category: "portraits",
    categoryLabel: "Fine Portraiture",
    location: "Hyderabad",
    imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "portrait",
    craftNote: "Macro 90mm f/2.8 • Handcrafted Henna & Emerald Accents",
  },
  {
    id: "gal-4",
    title: "The Royal Baraat Procession",
    category: "royal-weddings",
    categoryLabel: "Royal Wedding",
    location: "Hyderabad",
    imageUrl: "https://images.unsplash.com/photo-1545232979-fbf68fe9ec47?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "portrait",
    craftNote: "Inspire 3 8K • Low Altitude Drone Tracking",
  },
  {
    id: "gal-5",
    title: "Golden Hour Serenade",
    category: "pre-wedding",
    categoryLabel: "Pre-Wedding",
    location: "Normal, IL",
    imageUrl: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "landscape",
    craftNote: "Leica SL2 • 85mm f/1.4 • Amber Sunlight Flare",
  },
  {
    id: "gal-6",
    title: "Sacred Fire & Gathbandhan",
    category: "royal-weddings",
    categoryLabel: "Royal Wedding",
    location: "Hyderabad",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "landscape",
    craftNote: "50mm Master Prime • Embers & Sacred Mantras",
  },
  {
    id: "gal-7",
    title: "First Dance in the Mist",
    category: "usa-weddings",
    categoryLabel: "USA Wedding",
    location: "Chicago, IL",
    imageUrl: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "landscape",
    craftNote: "Ronin 4D 8K • Low-Floor Mist & Pin Spot Backlighting",
  },
  {
    id: "gal-8",
    title: "Aerial View of the Heritage Palace",
    category: "cinema-drone",
    categoryLabel: "Drone Cinematography",
    location: "Hyderabad",
    imageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "landscape",
    craftNote: "DJI Inspire 3 • 24mm ProRes RAW • Sunset Zenith",
  },
  {
    id: "gal-9",
    title: "Editorial Bridal Silhouette",
    category: "portraits",
    categoryLabel: "Fine Portraiture",
    location: "Chicago, IL",
    imageUrl: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "portrait",
    craftNote: "Hasselblad X2D • 80mm • Soft Window Light Falloff",
  },
];

export const weddingExperienceSteps = [
  {
    step: "01",
    phase: "THE PRELUDE",
    title: "Unfolding The Atmosphere",
    tagline: "Before the music begins, the quiet anticipation builds.",
    description: "The delicate jewelry placement, quiet prayers with parents, the fragrance of fresh jasmine, and the subtle stillness before two families unite.",
    image: "https://images.unsplash.com/photo-1545232979-fbf68fe9ec47?auto=format&fit=crop&w=1200&q=80",
    focus: "Intimate portraits, heirloom artifacts, genuine candid stillness.",
  },
  {
    step: "02",
    phase: "THE SACRED RITUALS",
    title: "Tradition Reimagined As Fine Cinema",
    tagline: "Every ritual is an ancient poem in motion.",
    description: "From the grand Baraat and the scent of the sacred Agni fire to the seven steps around the hearth, we capture the depth of your customs without obstructing the reverence.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    focus: "Multi-angle camera coverage, lossless sound recording of vows and mantras.",
  },
  {
    step: "03",
    phase: "THE UNSCRIPTED NUANCES",
    title: "The Tears, The Laughter, The Fleeting Touches",
    tagline: "The moments you didn't even know happened.",
    description: "A father holding back tears during the Vidaai, an inside joke whispered on the stage, the joyous burst of flower petals in slow-motion cinema.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
    focus: "High-frame-rate 120fps capture, telephoto discreet observation.",
  },
  {
    step: "04",
    phase: "THE MIDNIGHT REVELRY",
    title: "Electric Energy & Euphoric Celebrations",
    tagline: "When the lights dim and the bass drops.",
    description: "The joy overflows into the midnight afterparty — dynamic gimbal sweeps, immersive lighting, and high-energy cinematic framing.",
    image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=80",
    focus: "Low-light cinema sensors, 3-axis stabilized tracking, live ambient audio.",
  },
  {
    step: "05",
    phase: "THE MASTER FILM",
    title: "A Timeless Cinematic Archive",
    tagline: "Crafted to be cherished across generations.",
    description: "Our post-production studio meticulously grades color, balances dialogue, and scores original soundtracks so your film feels like a premier cinema release.",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
    focus: "Custom film score, organic color grading, archival 4K master delivery.",
  },
];

export const servicesData: ServiceItem[] = [
  {
    number: "01",
    id: "weddings",
    title: "Luxury Wedding Visuals & Films",
    tagline: "Royal, Destination & Intimate Multi-Day Celebrations",
    description: "Comprehensive coverage for multi-day South Asian, fusion, and American destination weddings. Seamless synergy between our master photographers and cinema crew.",
    deliverables: [
      "Bespoke High-Res Master Photography Suite",
      "Feature-Length Cinematic Wedding Film (15–30 mins)",
      "Trailer & Teaser Highlight Films (60s – 3 mins)",
      "4K Aerial Drone Cinematography & Venue Sweeps",
      "Handcrafted Fine-Art Heirloom Albums & Print Box",
    ],
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "02",
    id: "films",
    title: "Cinematography & Master Films",
    tagline: "Storytelling Powered by Cinema-Grade Technology",
    description: "Filmed on RED Cinema sensors and anamorphic prime lenses. We record the heartbeat of your story with original audio mastering and bespoke color science.",
    deliverables: [
      "Multi-Cam Director Rigs (RED V-Raptor / Sony Cine)",
      "Pro-grade sound design & dialogue mastering",
      "Custom color grade matching Kodak film stocks",
      "Online Private Cinema Screening Room",
    ],
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "03",
    id: "editorial",
    title: "Pre-Wedding & Editorial Portraits",
    tagline: "Art-Directed Romance in Iconic Locations",
    description: "From tranquil vineyard landscapes in Illinois to historic palaces in Hyderabad, we create high-fashion editorial imagery tailored to your personal aesthetic.",
    deliverables: [
      "Art direction, mood board and styling guidance",
      "Full golden hour & blue hour lighting setups",
      "Fine-art retouched high-resolution deliverables",
      "Same-week teaser gallery for save-the-dates",
    ],
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "04",
    id: "commercial",
    title: "Commercial & Couture Campaigns",
    tagline: "Elevated Visual Storytelling for Brands & Fashion",
    description: "Brand campaigns, luxury couture showcases, jewelry line visuals, and high-profile private events executed with precision.",
    deliverables: [
      "Studio and on-location production management",
      "High-end commercial color grading and retouches",
      "Multi-aspect deliverables for billboard, web & social",
      "Fast commercial turnaround timelines",
    ],
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
  },
];

export const craftEquipmentList = [
  {
    category: "CINEMA CAMERAS",
    items: ["RED V-Raptor 8K VV & Komodo", "Sony FX6 & FX3 Cinema Line", "Leica SL2 Master Stills"],
    description: "Sensor color science designed for organic skin tones, rich velvet reds, deep golds, and delicate highlights.",
  },
  {
    category: "OPTICS & GLASS",
    items: ["Cooke Anamorphic /i Suite", "Sony G-Master II Primes (f/1.2 - f/1.4)", "Zeiss Master & Macro Glass"],
    description: "Creamy cinematic bokeh, subtle oval flares, and razor-sharp edge-to-edge clarity.",
  },
  {
    category: "MOTION & AERIALS",
    items: ["DJI Inspire 3 8K Drone", "DJI Ronin 4D 4-Axis Steadicam", "DJI RS4 Pro Stabilizers"],
    description: "Seamless bird's-eye architectural perspectives and floating dance floor camera maneuvers.",
  },
  {
    category: "AUDIO & COLOR SCIENCE",
    items: ["Sennheiser MKH Shotguns & Wireless Lavs", "DaVinci Resolve Studio Color Suite", "Bespoke Kodak 2383 Emulation"],
    description: "Pristine sacred mantra audio recordings and rich, timeless cinematic film grades.",
  },
];
