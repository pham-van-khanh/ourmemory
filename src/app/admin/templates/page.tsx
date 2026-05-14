"use client";
import { useEffect, useMemo, useState } from "react";
import { TemplateRenderer } from "@/components/template-engine/TemplateRenderer";

export default function AdminTemplateManager() {
  const [templates, setTemplates] = useState<any[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const active = useMemo(() => templates.find((t) => t.id === activeId), [templates, activeId]);

  useEffect(() => {
    fetch("/api/templates").then((r) => r.json()).then((d) => {
      setTemplates(d);
      setActiveId(d[0]?.id);
    });
  }, []);

  return (
    <main className="grid gap-6 p-6 lg:grid-cols-[360px_1fr]">
      <aside>
        <h1 className="text-2xl font-semibold">Template Manager</h1>
        <p className="mt-1 text-sm opacity-70">Live preview · activate/deactivate · version metadata</p>
        <div className="mt-4 space-y-3">
          {templates.map((t) => (
            <button key={t.id} onClick={() => setActiveId(t.id)} className={`w-full rounded-xl border p-3 text-left ${activeId === t.id ? "border-pink-500" : ""}`}>
              <p className="font-medium">{t.name} · v{t.version}</p>
              <p className="text-xs opacity-70">{t.code} · {t.isActive ? "Published" : "Draft"}</p>
            </button>
          ))}
        </div>
      </aside>
      <section>
        {active && <TemplateRenderer code={active.code} memoryData={active.defaults} styleTokens={active.styleTokens} settings={{ preview: true }} />}
      </section>
    </main>
  );
}
