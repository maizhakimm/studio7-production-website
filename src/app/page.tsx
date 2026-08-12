import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getHomeContent } from "@/lib/get-home-content";

export default async function Home() {
  const { coverage, heroImage, portfolio, services } = await getHomeContent();
  const heroTiles = portfolio.slice(0, 3);
  const featured = portfolio.slice(0, 5);

  return (
    <main className="min-h-screen bg-[#f8f3ea] text-[#171717]">
      <SiteHeader />

      <section className="px-4 pb-16 pt-24 md:px-6">
        <div className="mx-auto max-w-[1500px]">
          <div className="relative min-h-[78vh] overflow-hidden rounded-[2px]">
            <Image
              src={heroImage}
              alt="Studio 7 photography and videography"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/16 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#f5c46d]">
                {coverage} / Weddings / Corporate / Live Coverage
              </p>
              <h1 className="display-serif mt-4 max-w-5xl text-6xl leading-[0.9] md:text-8xl lg:text-9xl">
                Visual stories with rhythm, colour and feeling.
              </h1>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#171717] transition hover:bg-[#f5c46d]"
                  href="/portfolio"
                >
                  View work <ArrowRight size={18} />
                </Link>
                <Link
                  className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#171717]"
                  href="/inquiry"
                >
                  <Play size={18} /> Start inquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-14">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <p className="section-label">Studio 7 Production</p>
          <div>
            <h2 className="display-serif text-5xl leading-none md:text-7xl">
              Photo and video coverage for moments that should still feel alive later.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#756e63]">
              A visual-first portfolio for weddings, corporate events, ROM, engagements,
              birthdays, live feed and live streaming across Malaysia and Singapore.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-12">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {heroTiles.map((item, index) => (
            <Link
              className={`group block ${index === 1 ? "md:mt-16" : ""}`}
              href="/portfolio"
              key={item.title}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-[#b8893d]">
                {item.category}
              </p>
              <h3 className="mt-1 text-2xl font-semibold">{item.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl border-y border-[#ddd0bd] py-14">
          <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="section-label">Services</p>
              <Link className="mt-6 inline-flex items-center gap-2 font-bold" href="/services">
                All services <ArrowRight size={18} />
              </Link>
            </div>
            <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {services.map((service) => (
                <div className="border-b border-[#ddd0bd] pb-5" key={service.title}>
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#756e63]">
                    {service.shortDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#171717] px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#f5c46d]">
                Portfolio
              </p>
              <h2 className="display-serif mt-4 max-w-3xl text-6xl leading-none md:text-8xl">
                Recent frames and stories.
              </h2>
            </div>
            <Link className="inline-flex items-center gap-2 font-bold text-[#f5c46d]" href="/portfolio">
              Open portfolio <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-6">
            {featured.map((item, index) => (
              <Link
                className={`group block ${
                  index === 0 || index === 3 ? "md:col-span-3" : "md:col-span-2"
                }`}
                href="/portfolio"
                key={item.title}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between gap-4 border-b border-white/18 pb-4">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <span className="text-xs uppercase tracking-[0.18em] text-white/52">
                    {item.category}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <h2 className="display-serif max-w-3xl text-6xl leading-none md:text-8xl">
            No fixed package table. Start with the event.
          </h2>
          <div>
            <p className="text-lg leading-8 text-[#756e63]">
              Studio 7 prepares quotations based on event type, date, location,
              coverage hours and whether the client needs photo, video, live feed
              or streaming.
            </p>
            <Link
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#171717] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#b8893d]"
              href="/inquiry"
            >
              Send inquiry <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
