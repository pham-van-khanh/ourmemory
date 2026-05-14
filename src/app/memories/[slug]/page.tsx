import { TemplateRenderer } from "@/components/template-engine/TemplateRenderer";

export default async function MemoryDetailPage(){
  const data={title:"Our First Date",date:"2025-01-10",location:"Da Nang",quote:"You are my favorite place.",gallery:["https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1200","https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=1200"]};
  const styleTokens={background:"linear-gradient(160deg,#fff1f2,#f5f3ff)",text:"#2a2238"};
  return <TemplateRenderer code="romantic-classic" memoryData={data} styleTokens={styleTokens} settings={{}}/>;
}
