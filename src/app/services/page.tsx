import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const services = [
  { title: "Weddings", intro: "Complete visual storytelling for ceremonies, receptions and the moments between them.", details: ["Photography and cinematic videography", "Multi-day and multicultural celebrations", "Ceremony, reception and candid coverage", "Highlight film, portraits and event gallery"] },
  { title: "Corporate", intro: "Polished visual coverage designed for brands, organisations and professional audiences.", details: ["Conferences, launches and town halls", "Gala dinners and awards ceremonies", "Corporate portraits and team content", "Event recap films and social-ready highlights"] },
  { title: "Engagements", intro: "Relaxed photo and video coverage that reflects the couple and the atmosphere of the occasion.", details: ["Engagement ceremony coverage", "Family and guest moments", "Couple portraits", "Short-form highlights for sharing"] },
  { title: "Registration of Marriage", intro: "Refined coverage for civil registration ceremonies and intimate celebrations.", details: ["Ceremony documentation", "Couple and family portraits", "Venue and detail photography", "Compact photo or video coverage"] },
  { title: "Pre-wedding", intro: "Directed couple sessions with thoughtful locations, styling and an editorial finish.", details: ["Creative concept and location planning", "Outdoor, studio or destination sessions", "Guided posing and natural moments", "Photography, films and social reels"] },
  { title: "Birthdays", intro: "Energetic coverage for children, families and milestone celebrations.", details: ["Event photography and videography", "Décor, cake and detail coverage", "Family portraits and candid moments", "Short highlight film or reels"] },
  { title: "Live Feed", intro: "Reliable multi-camera visuals delivered directly to venue screens for every guest to follow.", details: ["Multi-camera event coverage", "Live switching for stage and audience", "Projection screen feed", "Suitable for halls, weddings and conferences"] },
  { title: "Live Streaming", intro: "Professional event broadcasts that connect remote guests and online audiences in real time.", details: ["Multi-camera online broadcast", "Audio and presentation integration", "Private or public streaming links", "Wedding, corporate and hybrid event support"] }
];

export default function ServicesPage() {
  return <main className="bg-white text-[#141414]"><SiteHeader />
    <section className="px-5 pb-10 pt-28 text-center md:px-8 md:pb-12 md:pt-32"><div className="mx-auto max-w-7xl"><p className="eyebrow">Services</p><h1 className="display-serif mx-auto mt-3 max-w-3xl text-4xl leading-none md:text-6xl">Coverage built around your story.</h1><p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-black/55">From intimate ceremonies to large-scale productions, choose photography, film and live coverage shaped around the flow of your event.</p></div></section>
    <section className="px-5 pb-20 md:px-8 md:pb-28"><div className="mx-auto max-w-7xl border-t border-black/10">
      {services.map((service, index) => <Reveal key={service.title}><article className="group grid gap-6 border-b border-black/10 py-10 transition-colors hover:border-[#d6472c]/45 md:grid-cols-[0.18fr_0.72fr_1.1fr] md:gap-10 md:py-14">
        <span className="display-serif text-2xl text-[#d6472c]">{String(index + 1).padStart(2, "0")}</span>
        <div><h2 className="display-serif text-4xl leading-none md:text-5xl">{service.title}</h2><p className="mt-4 max-w-md leading-7 text-black/55">{service.intro}</p><Link className="text-link mt-6 inline-flex items-center gap-2 border-b border-black pb-1 text-sm font-semibold" href={`/inquiry?service=${encodeURIComponent(service.title)}`}>Plan this coverage <ArrowRight size={16} /></Link></div>
        <div className="grid content-start gap-3 rounded-lg bg-[#f5f4f1] p-6 md:p-8">{service.details.map((detail) => <p className="flex items-start gap-3 text-sm leading-6 text-black/65" key={detail}><Check className="mt-1 shrink-0 text-[#d6472c]" size={15} />{detail}</p>)}</div>
      </article></Reveal>)}
    </div></section>
    <section className="px-5 pb-24 text-center md:px-8"><div className="mx-auto max-w-7xl rounded-lg bg-[#141414] px-6 py-14 text-white md:py-20"><p className="eyebrow">Not sure what you need?</p><h2 className="display-serif mx-auto mt-4 max-w-2xl text-4xl md:text-5xl">Tell us about the event. We will recommend the right coverage.</h2><Link className="premium-button mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#141414]" href="/inquiry">Check your date <ArrowRight size={17} /></Link></div></section>
    <SiteFooter /></main>;
}
