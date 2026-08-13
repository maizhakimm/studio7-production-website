import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const values = [
  ["People first", "We make space for natural expressions, meaningful details and the people who shape every event."],
  ["Prepared for the moment", "Careful planning helps the team move confidently through ceremonies, schedules and live productions."],
  ["Made to be revisited", "The aim is not simply to document an event, but to create photographs and films worth returning to."]
];

export default function AboutPage() {
  return <main className="bg-white text-[#141414]"><SiteHeader />
    <section className="px-5 pb-10 pt-28 text-center md:px-8 md:pb-12 md:pt-32"><div className="mx-auto max-w-7xl"><p className="eyebrow">About Studio 7</p><h1 className="display-serif mx-auto mt-3 max-w-4xl text-4xl leading-none md:text-6xl">A production team focused on people, energy and honest moments.</h1><p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-black/55">Based across Malaysia and Singapore, Studio 7 brings photography, filmmaking and live production together for celebrations and business events.</p></div></section>

    <section className="px-5 pb-20 md:px-8 md:pb-28"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center"><Reveal><div className="relative aspect-[4/3] overflow-hidden rounded-lg"><Image alt="Sample visual of a production team working behind the scenes" className="object-cover" fill sizes="(max-width: 1024px) 100vw, 60vw" src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1600&q=85" /><span className="absolute bottom-4 left-4 rounded-full bg-black/70 px-4 py-2 text-xs text-white backdrop-blur">Sample team visual · replace with Studio 7 team photo</span></div></Reveal><Reveal delay={100}><div><p className="eyebrow">The story</p><h2 className="display-serif mt-4 text-4xl leading-tight md:text-5xl">Different events. One thoughtful way of seeing them.</h2><div className="mt-6 grid gap-5 leading-7 text-black/60"><p>Studio 7 Production works across weddings, engagements, corporate events, private celebrations and live productions. Every assignment begins by understanding the people involved, the flow of the day and what matters most after the event is over.</p><p>The team combines a calm on-site approach with organised production. The result is coverage that feels natural, polished and personal, whether it is an intimate ceremony or a multi-camera event.</p></div></div></Reveal></div></section>

    <section className="border-y border-black/10 bg-[#f5f4f1] px-5 py-20 md:px-8 md:py-24"><div className="mx-auto max-w-7xl"><div className="mb-10 text-center"><p className="eyebrow">How we work</p><h2 className="display-serif mt-3 text-4xl md:text-5xl">A clear approach from brief to final frame.</h2></div><div className="grid gap-4 md:grid-cols-3">{values.map(([title, description], index) => <Reveal delay={index * 80} key={title}><article className="h-full rounded-lg bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(20,20,20,0.08)]"><span className="display-serif text-xl text-[#d6472c]">0{index + 1}</span><h3 className="display-serif mt-8 text-3xl">{title}</h3><p className="mt-4 text-sm leading-6 text-black/55">{description}</p></article></Reveal>)}</div></div></section>

    <section className="px-5 py-20 text-center md:px-8 md:py-24"><p className="eyebrow">Start a conversation</p><h2 className="display-serif mx-auto mt-4 max-w-2xl text-4xl md:text-5xl">Have an event in mind?</h2><Link className="premium-button mt-7 inline-flex items-center gap-2 rounded-full bg-[#141414] px-7 py-3.5 text-sm font-semibold text-white" href="/inquiry">Tell us about it <ArrowRight size={17} /></Link></section>
    <SiteFooter /></main>;
}
