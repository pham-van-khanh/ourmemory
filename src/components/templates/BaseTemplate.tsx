"use client";
import { motion } from "framer-motion";

type Props = {
  memoryData: any;
  styleTokens: any;
  settings?: any;
  mood: string;
  layout?: "hero" | "split" | "poster";
};

export function BaseTemplate({ memoryData, styleTokens, mood, layout = "hero" }: Props) {
  return (
    <div className="min-h-screen" style={{ background: styleTokens.background, color: styleTokens.text, fontFamily: styleTokens.font || "inherit" }}>
      <motion.section initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-5xl p-6 md:p-12">
        <p className="text-xs uppercase tracking-[0.35em] opacity-70">{mood}</p>
        <h1 className="mt-3 text-4xl md:text-6xl font-semibold leading-tight">{memoryData.title}</h1>
        <p className="mt-3 opacity-80">{memoryData.date} · {memoryData.location}</p>
      </motion.section>

      <section className={`mx-auto max-w-6xl gap-4 p-6 ${layout === "split" ? "grid md:grid-cols-3" : "grid md:grid-cols-2"}`}>
        {(memoryData.gallery || []).map((img: string, idx: number) => (
          <motion.div key={idx} initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.05 }} className="overflow-hidden rounded-3xl shadow-xl">
            <img src={img} className={`w-full object-cover ${layout === "poster" ? "h-96" : "h-72"}`} />
          </motion.div>
        ))}
      </section>

      <motion.blockquote initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mx-auto max-w-3xl px-6 pb-20 text-center text-xl italic">
        “{memoryData.quote}”
      </motion.blockquote>
    </div>
  );
}
