import { TemplateCode } from "@/lib/templates";
import { RomanticClassicTemplate } from "@/components/templates/RomanticClassicTemplate";
import { FilmStripStoryTemplate } from "@/components/templates/FilmStripStoryTemplate";
import { MinimalEditorialTemplate } from "@/components/templates/MinimalEditorialTemplate";
import { ScrapbookPolaroidTemplate } from "@/components/templates/ScrapbookPolaroidTemplate";
import { AuroraGradientTemplate } from "@/components/templates/AuroraGradientTemplate";
import { GardenBloomTemplate } from "@/components/templates/GardenBloomTemplate";
import { SunsetBeachTemplate } from "@/components/templates/SunsetBeachTemplate";
import { StarryNightTemplate } from "@/components/templates/StarryNightTemplate";
import { VintageLetterTemplate } from "@/components/templates/VintageLetterTemplate";
import { KoreanPastelTemplate } from "@/components/templates/KoreanPastelTemplate";
import { MonochromeModernTemplate } from "@/components/templates/MonochromeModernTemplate";
import { RetroCamcorderTemplate } from "@/components/templates/RetroCamcorderTemplate";
import { WatercolorDreamTemplate } from "@/components/templates/WatercolorDreamTemplate";
import { NeonLoveTemplate } from "@/components/templates/NeonLoveTemplate";
import { WeddingCinematicTemplate } from "@/components/templates/WeddingCinematicTemplate";

const map: Record<TemplateCode, any> = {
  "romantic-classic": RomanticClassicTemplate,
  "film-strip-story": FilmStripStoryTemplate,
  "minimal-editorial": MinimalEditorialTemplate,
  "scrapbook-polaroid": ScrapbookPolaroidTemplate,
  "aurora-gradient": AuroraGradientTemplate,
  "garden-bloom": GardenBloomTemplate,
  "sunset-beach": SunsetBeachTemplate,
  "starry-night": StarryNightTemplate,
  "vintage-letter": VintageLetterTemplate,
  "korean-pastel": KoreanPastelTemplate,
  "monochrome-modern": MonochromeModernTemplate,
  "retro-camcorder": RetroCamcorderTemplate,
  "watercolor-dream": WatercolorDreamTemplate,
  "neon-love": NeonLoveTemplate,
  "wedding-cinematic": WeddingCinematicTemplate,
};

export function TemplateRenderer({ code, memoryData, styleTokens, settings }: any) {
  const Comp = map[code as TemplateCode] ?? RomanticClassicTemplate;
  return <Comp memoryData={memoryData} styleTokens={styleTokens} settings={settings} />;
}
