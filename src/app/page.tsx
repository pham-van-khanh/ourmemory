import Link from "next/link";

const mock = [{slug:"our-first-date",title:"Our First Date",date:"2025-01-10",template:"romantic-classic"}];
export default function HomePage(){
  return <main className="mx-auto max-w-5xl p-6"><h1 className="text-3xl font-semibold">Love Memories</h1><div className="mt-6 grid gap-4 md:grid-cols-2">{mock.map(m=><Link key={m.slug} href={`/memories/${m.slug}`} className="rounded-2xl border p-4"><h3>{m.title}</h3><p>{m.date}</p><p className="text-xs opacity-60">{m.template}</p></Link>)}</div></main>
}
