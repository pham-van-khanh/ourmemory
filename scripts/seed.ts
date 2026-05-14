import { PrismaClient } from "@prisma/client";
import { templateMeta } from "../src/lib/templates";
const prisma = new PrismaClient();

const palettes = [
  ["#fff1f2", "#fdf2f8"], ["#111827", "#374151"], ["#ffffff", "#f3f4f6"], ["#fef3c7", "#fee2e2"], ["#dbeafe", "#ede9fe"],
  ["#ecfccb", "#fef3c7"], ["#ffedd5", "#fde68a"], ["#0f172a", "#1e1b4b"], ["#f5f5dc", "#f1e3d3"], ["#f5f3ff", "#fae8ff"],
  ["#fafafa", "#e5e7eb"], ["#1f2937", "#111827"], ["#e0f2fe", "#fce7f3"], ["#0a0a0a", "#7e22ce"], ["#f8fafc", "#e2e8f0"]
];

async function main() {
  for (const [idx, t] of templateMeta.entries()) {
    const [a, b] = palettes[idx % palettes.length];
    await prisma.templateDefinition.upsert({
      where: { code: t.code },
      create: {
        code: t.code, name: t.name, category: t.category, thumbnail: `/templates/${t.code}.jpg`, premium: false, isActive: true, version: 1, sortOrder: idx,
        schema: { type: "object", required: ["title", "gallery"], properties: { title: { type: "string" }, date: { type: "string" }, location: { type: "string" }, quote: { type: "string" }, gallery: { type: "array", items: { type: "string" } } } },
        defaults: { title: `${t.name} - Our Love`, date: "2025-01-10", location: "Da Nang", quote: "Love is in every small moment.", gallery: ["https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200", "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200"] },
        styleTokens: { background: `linear-gradient(140deg,${a},${b})`, text: idx === 7 || idx === 11 || idx === 13 ? "#f9fafb" : "#1f2937", font: idx % 2 ? "Inter" : "Playfair Display", spacing: "comfortable", animations: ["fade", "slide-up", "zoom-in"] },
        allowedBlocks: ["cover", "timeline", "gallery", "story", "quote", "video", "music"]
      },
      update: { name: t.name, category: t.category, sortOrder: idx }
    });
  }
}
main().finally(() => prisma.$disconnect());
