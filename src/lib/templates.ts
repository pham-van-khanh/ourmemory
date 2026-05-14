export const TEMPLATE_CODES = [
  "romantic-classic","film-strip-story","minimal-editorial","scrapbook-polaroid","aurora-gradient","garden-bloom","sunset-beach","starry-night","vintage-letter","korean-pastel","monochrome-modern","retro-camcorder","watercolor-dream","neon-love","wedding-cinematic"
] as const;

export type TemplateCode = (typeof TEMPLATE_CODES)[number];

export const templateMeta = [
  { code:"romantic-classic", name:"Romantic Classic", category:"Romantic" },
  { code:"film-strip-story", name:"Film Strip Story", category:"Cinematic" },
  { code:"minimal-editorial", name:"Minimal Editorial", category:"Minimal" },
  { code:"scrapbook-polaroid", name:"Scrapbook Polaroid", category:"Creative" },
  { code:"aurora-gradient", name:"Aurora Gradient", category:"Modern" },
  { code:"garden-bloom", name:"Garden Bloom", category:"Nature" },
  { code:"sunset-beach", name:"Sunset Beach", category:"Travel" },
  { code:"starry-night", name:"Starry Night", category:"Dreamy" },
  { code:"vintage-letter", name:"Vintage Letter", category:"Vintage" },
  { code:"korean-pastel", name:"Korean Pastel", category:"K-style" },
  { code:"monochrome-modern", name:"Monochrome Modern", category:"Editorial" },
  { code:"retro-camcorder", name:"Retro Camcorder", category:"Retro" },
  { code:"watercolor-dream", name:"Watercolor Dream", category:"Art" },
  { code:"neon-love", name:"Neon Love", category:"Night" },
  { code:"wedding-cinematic", name:"Wedding Cinematic", category:"Wedding" }
];
