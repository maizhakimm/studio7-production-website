import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, Clapperboard, Play, Sparkles } from "lucide-react";
import { PortfolioCard } from "@/components/portfolio-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getHomeContent } from "@/lib/get-home-content";

export default async function Home() {
  const { coverage, headline, heroImage, intro, portfolio, services, stats } =
    await getHomeContent();
  const featured = portfolio.slice(0, 4);

  return (
    <main className="min-h-screen overflow-hidden">
      <SiteHeader />

      <section className="relative min-h-screen px-5 pt-28">
        <Image
          src={heroImage}
          alt="Studio 7 event production"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0a10] via-[#0b0a10]/82 to-[#0b0a10]/22" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(243,178,61,0.24),transparent_30%),radial-gradient(circle_at_70%_78%,rgba(72,214,200,0.18),transparent_26%)]" />

        <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-10 py-16 lg:grid-cols-[1fr_0.86fr]">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/82">
              <Sparkles size={16} />
              {coverage} event coverage
            </div>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.95] md:text-7xl">
              {headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/74">{intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                className="inline-flex items-center gap-2 rounded-full bg-[#f3b23d] px-6 py-3 font-bold text-[#17110d] transition hover:bg-white"
                href="/portfolio"
              >
                View Portfolio <ArrowRight size={18} />
              </Link>
              <Link
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-bold text-white transition hover:bg-white hover:text-[#17110d]"
                href="/inquiry"
              >
                <Play size={18} /> Start Inquiry
              </Link>
            </div>
          </div>

          <div className="hidden gap-4 lg:grid">
            <div className="grid grid-cols-2 gap-4">
              {featured.slice(0, 2).map((item) => (
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg" key={item.title}>
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
              ))}
            </div>
            <div className="glass rounded-lg p-5">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f3b23d]">
                No fixed packages
              </p>
              <p className="mt-3 text-2xl font-black">
                Every quote starts with the event details.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-5 py-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {stats.map((item) => (
            <div key={item.label} className="glass rounded-lg px-5 py-5">
              <div className="text-3xl font-black text-[#f3b23d]">{item.value}</div>
              <div className="mt-1 text-sm text-white/64">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#48d6c8]">
              Services
            </p>
            <h2 className="mt-3 max-w-2xl text-4xl font-black md:text-5xl">
              Wedding, corporate, ROM, live coverage and more.
            </h2>
          </div>
          <Link className="inline-flex items-center gap-2 font-bold text-[#f3b23d]" href="/services">
            View services <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-[#f3b23d]/60 hover:bg-white/[0.07]"
            >
              <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#f3b23d]">
                {index % 2 === 0 ? <Camera size={20} /> : <Clapperboard size={20} />}
              </div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              {service.shortDescription ? (
                <p className="mt-3 text-sm leading-6 text-white/58">{service.shortDescription}</p>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#fffaf2] px-5 py-24 text-[#161116]">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#b36b00]">
                Portfolio
              </p>
              <h2 className="mt-3 max-w-2xl text-4xl font-black md:text-5xl">
                Less talking. More proof.
              </h2>
            </div>
            <Link className="inline-flex items-center gap-2 font-bold" href="/portfolio">
              Open portfolio <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {featured.map((item) => (
              <PortfolioCard item={item} key={item.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#f36f6f]">
            Inquiry flow
          </p>
          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Custom coverage starts with a simple brief.
          </h2>
        </div>
        <div className="grid gap-3">
          {[
            "Event type",
            "Date and location",
            "Photo, video or live coverage",
            "Quote prepared by Studio 7"
          ].map((item, index) => (
            <div className="glass flex items-center gap-4 rounded-lg p-4" key={item}>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f3b23d] font-black text-[#161116]">
                {index + 1}
              </span>
              <p className="font-bold">{item}</p>
            </div>
          ))}
          <Link
            className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 font-black text-[#161116] transition hover:bg-[#f3b23d]"
            href="/inquiry"
          >
            Submit Inquiry <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
