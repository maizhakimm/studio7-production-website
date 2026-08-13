import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { HeroReel } from "@/components/hero-reel";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getHomeContent } from "@/lib/get-home-content";

export default async function Home() {
  const { coverage, headline, intro, portfolio, services } = await getHomeContent();
  const featured = portfolio.slice(0, 6);
  const celebrationServices = services.slice(0, 6);
  const businessServices = services.slice(6);

  return (
    <main className="min-h-screen bg-white text-[#141414]">
      <SiteHeader />

      <section className="px-5 pb-12 pt-32 text-center md:px-8 md:pb-16 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">{coverage}</p>
          <h1 className="display-serif mx-auto mt-5 max-w-[15ch] text-[clamp(3rem,6.5vw,5.5rem)] leading-[1.01]">
            {headline}
          </h1>
          <p className="mx-auto mt-6 max-w-[48ch] text-base leading-7 text-black/60 md:text-lg">
            {intro}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
            <Link className="inline-flex items-center gap-2 rounded-full bg-[#141414] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#d6472c]" href="/inquiry">
              Start an inquiry <ArrowRight size={17} />
            </Link>
            <Link className="border-b border-black pb-1 text-sm font-semibold" href="/portfolio">View work</Link>
          </div>
          <HeroReel />
        </div>
      </section>

      <section className="border-y border-black/10 px-5 py-6 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 text-sm text-black/55">
          <p className="display-serif text-xl font-semibold text-[#141414]">Malaysia · Singapore</p>
          <p>Weddings · Corporate · Celebrations · Live coverage</p>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28" id="portfolio">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="display-serif mt-3 text-4xl md:text-5xl">Recent frames.</h2>
            </div>
            <Link className="inline-flex items-center gap-2 border-b border-black pb-1 text-sm font-semibold" href="/portfolio">Open full portfolio <ArrowRight size={16} /></Link>
          </div>

          <div className="columns-2 gap-3 sm:gap-4 lg:columns-3">
            {featured.map((item, index) => (
              <Link className="group relative mb-3 block break-inside-avoid overflow-hidden rounded-lg bg-[#f5f4f1] sm:mb-4" href="/portfolio" key={`${item.title}-${index}`}>
                <div className={`relative ${index % 3 === 0 ? "aspect-[4/5]" : index % 3 === 1 ? "aspect-[4/3]" : "aspect-square"}`}>
                  <Image alt={item.title} className="object-cover transition duration-700 group-hover:scale-105" fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 420px" src={item.image} />
                </div>
                {item.videoUrl && <span className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-white text-black"><Play fill="currentColor" size={12} /></span>}
                <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold">{item.category}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between gap-5">
            <div><p className="eyebrow">Services</p><h2 className="display-serif mt-3 text-4xl md:text-5xl">What we cover.</h2></div>
            <Link className="hidden items-center gap-2 border-b border-black pb-1 text-sm font-semibold sm:inline-flex" href="/services">Explore services <ArrowRight size={16} /></Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="border border-black/10 p-6 md:p-8">
              <h3 className="display-serif text-xl italic text-black/75">For celebrations</h3>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
                {celebrationServices.map((service) => <span className="border-b border-black/15 pb-1 text-sm font-medium" key={service.title}>{service.title}</span>)}
              </div>
            </div>
            <div className="border border-black/10 p-6 md:p-8">
              <h3 className="display-serif text-xl italic text-black/75">For business and live</h3>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
                {businessServices.map((service) => <span className="border-b border-black/15 pb-1 text-sm font-medium" key={service.title}>{service.title}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 bg-[#f5f4f1] p-8 sm:flex-row sm:items-center md:p-14">
          <h2 className="display-serif max-w-[22ch] text-3xl italic leading-tight md:text-4xl">No fixed packages. Every quote is shaped around your event.</h2>
          <Link className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#141414] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#d6472c]" href="/inquiry">Get a custom quote <ArrowRight size={17} /></Link>
        </div>
      </section>

      <SiteFooter />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-white/95 p-3 backdrop-blur md:hidden">
        <Link className="block rounded-full bg-[#141414] px-5 py-3.5 text-center text-sm font-semibold text-white" href="/inquiry">Start an inquiry</Link>
      </div>
    </main>
  );
}
