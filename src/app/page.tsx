import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, Clapperboard, Play } from "lucide-react";
import { PortfolioCard } from "@/components/portfolio-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getHomeContent } from "@/lib/get-home-content";

export default async function Home() {
  const { coverage, headline, heroImage, intro, portfolio, services, stats } =
    await getHomeContent();
  const featured = portfolio.slice(0, 4);

  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#171717]">
      <SiteHeader />

      <section className="px-5 pb-16 pt-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div className="pb-4">
              <p className="section-label">{coverage} Photo & Video</p>
              <h1 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-[-0.03em] md:text-7xl">
                {headline}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#6f6a61]">{intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  className="inline-flex items-center gap-2 rounded-full bg-[#171717] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#c8922f]"
                  href="/portfolio"
                >
                  View Portfolio <ArrowRight size={18} />
                </Link>
                <Link
                  className="inline-flex items-center gap-2 rounded-full border border-[#d9cbb9] bg-white px-6 py-3 text-sm font-bold text-[#171717] transition hover:border-[#171717]"
                  href="/inquiry"
                >
                  <Play size={18} /> Start Inquiry
                </Link>
              </div>
            </div>
            <div className="relative min-h-[520px] overflow-hidden rounded-lg">
              <Image
                src={heroImage}
                alt="Studio 7 event photography and videography"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-lg bg-white/90 p-5 backdrop-blur">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#c8922f]">
                  Custom quote
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-[-0.02em]">
                  No fixed package table. Every event starts with the brief.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 border-y border-[#e8e0d4] py-6 md:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label}>
                <div className="text-3xl font-semibold text-[#c8922f]">{item.value}</div>
                <div className="mt-1 text-sm text-[#6f6a61]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-label">Services</p>
              <h2 className="mt-3 max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.02em] md:text-5xl">
                Coverage for moments, brands and live audiences.
              </h2>
            </div>
            <Link className="inline-flex items-center gap-2 font-bold text-[#c8922f]" href="/services">
              View services <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="rounded-lg border border-[#e8e0d4] bg-white p-5 transition hover:-translate-y-1 hover:border-[#c8922f]"
              >
                <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-[#f4efe6] text-[#c8922f]">
                  {index % 2 === 0 ? <Camera size={20} /> : <Clapperboard size={20} />}
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                {service.shortDescription ? (
                  <p className="mt-3 text-sm leading-6 text-[#6f6a61]">
                    {service.shortDescription}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-label">Portfolio</p>
              <h2 className="mt-3 max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.02em] md:text-5xl">
                Visual proof before anything else.
              </h2>
            </div>
            <Link className="inline-flex items-center gap-2 font-bold text-[#171717]" href="/portfolio">
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

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-label">Inquiry</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-[-0.02em] md:text-5xl">
              Short form. Clear quote. No package clutter.
            </h2>
          </div>
          <div className="grid gap-3">
            {[
              "Choose event type",
              "Share date and location",
              "Select photo, video, live feed or streaming",
              "Studio 7 prepares the quote"
            ].map((item, index) => (
              <div className="rounded-lg border border-[#e8e0d4] bg-white p-4" key={item}>
                <p className="text-sm font-bold text-[#c8922f]">0{index + 1}</p>
                <p className="mt-2 text-xl font-semibold">{item}</p>
              </div>
            ))}
            <Link
              className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#171717] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#c8922f]"
              href="/inquiry"
            >
              Submit Inquiry <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
