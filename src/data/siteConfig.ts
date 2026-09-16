export interface SocialLinks {
  instagram: string;
  youtube: string;
  facebook: string;
  pinterest: string;
  pixieset: string;
  sulekha: string;
  whatsapp: string;
  email: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  description: string;
  locations: {
    primary: string;
    secondary: string;
    usaDetail: string;
    indiaDetail: string;
  };
  contact: {
    email: string;
    phoneUSA: string;
    phoneIndia: string;
    whatsappNumber: string;
    whatsappMessage: string;
  };
  socials: SocialLinks;
}

export const siteConfig: SiteConfig = {
  name: "HClicks Photography & Films",
  title: "HClicks Photography & Films | Luxury Cinematic Weddings & Editorial Stories",
  tagline: "Your Story. Framed Like Cinema.",
  description: "HClicks Photography & Films crafts timeless wedding visual narratives, royal celebrations, editorial portraits, and high-end films across the USA and Hyderabad.",
  locations: {
    primary: "USA",
    secondary: "Hyderabad, India",
    usaDetail: "Chicago & Normal, IL • Available Nationwide across the United States",
    indiaDetail: "Bespoke Palace & Destination Celebrations across Hyderabad & India",
  },
  contact: {
    email: "inquiries@hclicks.com",
    phoneUSA: "+1 (309) 533-8842",
    phoneIndia: "+91 98480 22338",
    whatsappNumber: "13095338842",
    whatsappMessage: "Hello HClicks Studio! I would like to inquire about wedding photography and cinematic film availability.",
  },
  socials: {
    instagram: "https://www.instagram.com/hclicks.official/",
    youtube: "https://www.youtube.com/@hclicksphotography7281",
    facebook: "https://www.facebook.com/hclickphotography/",
    pinterest: "https://www.pinterest.com/hclicksp/",
    pixieset: "https://hclicks.mypixieset.com",
    sulekha: "https://us.sulekha.com/hclicks-photography-chicago-il",
    whatsapp: "https://wa.me/13095338842?text=Hello%20HClicks%20Photography%20%26%20Films%2C%20I%20would%20like%20to%20inquire%20about%20booking%20and%20cinematography%20services.",
    email: "mailto:inquiries@hclicks.com",
  },
};
