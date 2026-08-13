import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { galleryImages } from "@/lib/content";

export default function GalleryPage() {
  return <main className="bg-white text-[#141414]"><SiteHeader />
    <section className="px-5 pb-10 pt-28 text-center md:px-8 md:pb-12 md:pt-32"><div className="mx-auto max-w-7xl"><p className="eyebrow">Gallery</p><h1 className="display-serif mx-auto mt-3 max-w-3xl text-4xl leading-none md:text-6xl">A closer look at the moments between.</h1><p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-black/55">Details, expressions and atmosphere from celebrations and productions across Malaysia and Singapore.</p></div></section>
    <section className="px-5 pb-24 md:px-8"><div className="mx-auto max-w-7xl columns-1 gap-4 sm:columns-2 lg:columns-3">
      {galleryImages.concat(galleryImages).map((item, index) => <article className="group relative mb-4 break-inside-avoid overflow-hidden rounded-lg bg-[#f5f4f1]" key={`${item.title}-${index}`}><div className={`relative ${index % 4 === 0 ? "aspect-[4/5]" : index % 4 === 1 ? "aspect-square" : "aspect-[4/3]"}`}><Image alt={item.title} className="object-cover transition duration-700 group-hover:scale-[1.04]" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" src={item.image} /><div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-75 transition group-hover:opacity-100" /><div className="absolute inset-x-0 bottom-0 translate-y-1 p-5 text-white transition duration-300 group-hover:translate-y-0"><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70">{item.category}</p><h2 className="display-serif mt-1 text-2xl">{item.title}</h2></div></div></article>)}
    </div></section>
    <section className="border-t border-black/10 px-5 py-20 text-center md:px-8"><p className="eyebrow">See complete stories</p><h2 className="display-serif mx-auto mt-4 max-w-2xl text-4xl md:text-5xl">Explore full event galleries and films.</h2><Link className="premium-button mt-7 inline-flex items-center gap-2 rounded-full bg-[#141414] px-7 py-3.5 text-sm font-semibold text-white" href="/portfolio">View portfolio <ArrowRight size={17} /></Link></section>
    <SiteFooter /></main>;
}
