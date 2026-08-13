import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { HeroReel } from "@/components/hero-reel";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getHomeContent } from "@/lib/get-home-content";

export default async function Home() {
  const { coverage, headline, intro, portfolio, services } = await getHomeContent();
  const featured = portfolio.slice(0, 6);
  const businessTitles = new Set(["Corporate", "Live feed", "Live streaming"]);
  const celebrationServices = services.filter((service) => !businessTitles.has(service.title));
  const businessServices = services.filter((service) => businessTitles.has(service.title));

  return (
    <main className="min-h-screen bg-white text-[#141414]">
      <SiteHeader />

      <section className="px-5 pb-12 pt-32 text-center md:px-8 md:pb-16 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow hero-enter hero-enter-1">{coverage}</p>
          <h1 className="display-serif hero-enter hero-enter-2 mx-auto mt-5 max-w-[15ch] text-[clamp(3rem,6.5vw,5.5rem)] leading-[1.01]">
            {headline}
          </h1>
          <p className="hero-enter hero-enter-3 mx-auto mt-6 max-w-[48ch] text-base leading-7 text-black/60 md:text-lg">
            {intro}
          </p>
          <div className="hero-enter hero-enter-4 mt-8 flex flex-wrap items-center justify-center gap-5">
            <Link className="premium-button inline-flex items-center gap-2 rounded-full bg-[#141414] px-7 py-3.5 text-sm font-semibold text-white" href="/inquiry">
              Tell us about your event <ArrowRight size={17} />
            </Link>
            <Link className="text-link border-b border-black pb-1 text-sm font-semibold" href="/portfolio">Explore our work</Link>
          </div>
          <div className="hero-enter hero-enter-5"><HeroReel /></div>
        </div>
      </section>

      <section className="border-y border-black/10 px-5 py-6 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-2 text-center text-sm text-black/55">
          <p className="display-serif text-xl font-semibold text-[#141414]">Malaysia · Singapore</p>
          <p>Weddings · Corporate · Celebrations · Live coverage</p>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28" id="portfolio">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-10 text-center">
            <div className="mx-auto">
              <p className="eyebrow">Selected work</p>
              <h2 className="display-serif mt-3 text-4xl md:text-5xl">Recent frames.</h2>
            </div>
            <Link className="text-link mt-5 inline-flex items-center gap-2 border-b border-black pb-1 text-sm font-semibold" href="/portfolio">Explore the full portfolio <ArrowRight size={16} /></Link>
          </Reveal>

          <div className="columns-2 gap-3 sm:gap-4 lg:columns-3">
            {featured.map((item, index) => (
              <Reveal className="mb-3 break-inside-avoid sm:mb-4" delay={(index % 3) * 90} key={`${item.title}-${index}`}>
              <Link className="portfolio-tile group relative block overflow-hidden rounded-lg bg-[#f5f4f1]" href="/portfolio">
                <div className={`relative ${index % 3 === 0 ? "aspect-[4/5]" : index % 3 === 1 ? "aspect-[4/3]" : "aspect-square"}`}>
                  <Image alt={item.title} className="object-cover transition duration-700 group-hover:scale-105" fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 420px" src={item.image} />
                </div>
                {item.videoUrl && <span className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-white text-black"><Play fill="currentColor" size={12} /></span>}
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/65 to-transparent p-4 pt-14 text-left text-white">
                  <div><span className="text-[10px] font-semibold uppercase tracking-[0.13em] text-white/75">{item.category}</span><p className="mt-1 text-sm font-semibold sm:text-base">{item.title}</p></div>
                  <ArrowRight className="tile-arrow shrink-0" size={18} />
                </div>
              </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-10 text-center">
            <p className="eyebrow">Services</p><h2 className="display-serif mt-3 text-4xl md:text-5xl">What we cover.</h2>
            <Link className="text-link mt-5 inline-flex items-center gap-2 border-b border-black pb-1 text-sm font-semibold" href="/services">Find the right coverage <ArrowRight size={16} /></Link>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            <Reveal className="service-panel border border-black/10 p-6 md:p-8">
              <h3 className="display-serif text-xl italic text-black/75">For celebrations</h3>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
                {celebrationServices.map((service) => <span className="border-b border-black/15 pb-1 text-sm font-medium" key={service.title}>{service.title}</span>)}
              </div>
            </Reveal>
            <Reveal className="service-panel border border-black/10 p-6 md:p-8" delay={100}>
              <h3 className="display-serif text-xl italic text-black/75">For business and live</h3>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
                {businessServices.map((service) => <span className="border-b border-black/15 pb-1 text-sm font-medium" key={service.title}>{service.title}</span>)}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <Reveal className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center gap-7 bg-[#f5f4f1] p-8 text-center md:p-14">
            <p className="eyebrow">Your event, your coverage</p>
            <h2 className="display-serif max-w-[24ch] text-3xl italic leading-tight md:text-4xl">Tell us what you are planning. We will shape the photo and video coverage around it.</h2>
            <Link className="premium-button inline-flex items-center gap-2 rounded-full bg-[#141414] px-7 py-3.5 text-sm font-semibold text-white" href="/inquiry">Plan your coverage <ArrowRight size={17} /></Link>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-white/95 p-3 backdrop-blur md:hidden">
        <Link className="block rounded-full bg-[#141414] px-5 py-3.5 text-center text-sm font-semibold text-white" href="/inquiry">Check your date</Link>
      </div>
    </main>
  );
}
