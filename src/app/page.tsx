import Image from "next/image";
import { ArrowRight, Camera, Clapperboard, Mail, MapPin, Play, Sparkles } from "lucide-react";
import { portfolio, services, stats } from "@/lib/content";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#0c0b10]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a className="text-lg font-black tracking-[0.18em]" href="#">
            STUDIO<span className="text-[#f3b23d]">7</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-white/72 md:flex">
            <a className="transition hover:text-white" href="#services">Services</a>
            <a className="transition hover:text-white" href="#portfolio">Portfolio</a>
            <a className="transition hover:text-white" href="#inquiry">Inquiry</a>
            <a className="transition hover:text-white" href="#contact">Contact</a>
          </nav>
          <a
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#161116] transition hover:bg-[#f3b23d]"
            href="#inquiry"
          >
            Get a Quote
          </a>
        </div>
      </header>

      <section className="relative min-h-screen px-5 pt-28">
        <Image
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1800&q=90"
          alt="Wedding production moment"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0b10] via-[#0c0b10]/78 to-[#0c0b10]/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(243,178,61,0.24),transparent_32%),radial-gradient(circle_at_70%_80%,rgba(72,214,200,0.18),transparent_28%)]" />

        <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl items-center">
          <div className="max-w-3xl py-16">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/82">
              <Sparkles size={16} />
              Malaysia & Singapore event coverage
            </div>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.95] md:text-7xl">
              Cinematic photo and video for moments that move.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/74">
              Visual-first storytelling for weddings, corporate events, ROM, engagements,
              birthdays, live feed and live streaming.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center gap-2 rounded-full bg-[#f3b23d] px-6 py-3 font-bold text-[#17110d] transition hover:bg-white"
                href="#portfolio"
              >
                View Portfolio <ArrowRight size={18} />
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-bold text-white transition hover:bg-white hover:text-[#17110d]"
                href="#inquiry"
              >
                <Play size={18} /> Start Inquiry
              </a>
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

      <section id="services" className="mx-auto max-w-7xl px-5 py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#48d6c8]">Services</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-black md:text-5xl">
              Built around the event, quoted around the details.
            </h2>
          </div>
          <p className="max-w-md text-white/62">
            Studio 7 does not need fixed package cards yet. The website leads visitors
            into an inquiry flow so the team can quote properly.
          </p>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service}
              className="group rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-[#f3b23d]/60 hover:bg-white/[0.07]"
            >
              <div className="mb-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#f3b23d]">
                {index % 2 === 0 ? <Camera size={20} /> : <Clapperboard size={20} />}
              </div>
              <h3 className="text-xl font-bold">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio" className="bg-[#fffaf2] px-5 py-24 text-[#161116]">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#b36b00]">Portfolio</p>
              <h2 className="mt-3 max-w-2xl text-4xl font-black md:text-5xl">
                Less talking. More proof.
              </h2>
            </div>
            <a className="inline-flex items-center gap-2 font-bold" href="#inquiry">
              Plan an event <ArrowRight size={18} />
            </a>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {portfolio.map((item) => (
              <article key={item.title} className="group overflow-hidden rounded-lg bg-[#161116]">
                <div className="relative aspect-[4/3]">
                  <Image src={item.image} alt={item.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f3b23d]">{item.category}</p>
                    <h3 className="mt-2 text-3xl font-black">{item.title}</h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="inquiry" className="mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#f36f6f]">Inquiry</p>
          <h2 className="mt-3 text-4xl font-black md:text-5xl">Tell us the date, mood and coverage.</h2>
          <p className="mt-5 max-w-lg leading-8 text-white/65">
            This form replaces a generic package table. It collects the event details
            Studio 7 needs before preparing a customised quotation.
          </p>
        </div>

        <form className="glass grid gap-4 rounded-lg p-5 md:p-7">
          <div className="grid gap-4 md:grid-cols-2">
            <input className="rounded-lg border border-white/10 bg-black/25 px-4 py-3 outline-none focus:border-[#f3b23d]" placeholder="Name" />
            <input className="rounded-lg border border-white/10 bg-black/25 px-4 py-3 outline-none focus:border-[#f3b23d]" placeholder="Email or WhatsApp" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <input className="rounded-lg border border-white/10 bg-black/25 px-4 py-3 outline-none focus:border-[#f3b23d]" placeholder="Event type" />
            <input className="rounded-lg border border-white/10 bg-black/25 px-4 py-3 outline-none focus:border-[#f3b23d]" placeholder="Event date" />
          </div>
          <textarea className="min-h-32 rounded-lg border border-white/10 bg-black/25 px-4 py-3 outline-none focus:border-[#f3b23d]" placeholder="Share location, coverage hours, photo/video needs and anything important." />
          <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-black text-[#161116] transition hover:bg-[#f3b23d]" type="button">
            Submit Inquiry <Mail size={18} />
          </button>
        </form>
      </section>

      <footer id="contact" className="border-t border-white/10 px-5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-lg font-black tracking-[0.18em]">STUDIO<span className="text-[#f3b23d]">7</span></div>
            <p className="mt-2 text-sm text-white/58">Videography & photography across Malaysia and Singapore.</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-white/70">
            <span className="inline-flex items-center gap-2"><MapPin size={16} /> Malaysia & Singapore</span>
            <span className="inline-flex items-center gap-2"><Mail size={16} /> Inquiry via website form</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
