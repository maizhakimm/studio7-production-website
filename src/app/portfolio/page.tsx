import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PortfolioBrowser } from "@/components/portfolio-browser";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getPortfolioContent } from "@/lib/get-portfolio-content";

export default async function PortfolioPage() {
  const portfolio = await getPortfolioContent();
  return <main className="bg-white"><SiteHeader />
    <section className="px-5 pb-10 pt-28 text-center md:px-8 md:pb-12 md:pt-32"><div className="mx-auto max-w-7xl"><p className="eyebrow">Portfolio</p><h1 className="display-serif mx-auto mt-3 max-w-3xl text-4xl leading-none md:text-6xl">Real moments, thoughtfully captured.</h1><p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-black/55">Explore photography, films and live productions by event type. Select a category to find work relevant to your celebration or business.</p></div></section>
    <PortfolioBrowser projects={portfolio} />
    <section className="px-5 pb-24 text-center md:px-8"><p className="eyebrow">Planning something?</p><h2 className="display-serif mx-auto mt-4 max-w-2xl text-4xl md:text-5xl">Let us shape the right coverage for your event.</h2><Link className="premium-button mt-7 inline-flex items-center gap-2 rounded-full bg-[#141414] px-7 py-3.5 text-sm font-semibold text-white" href="/inquiry">Tell us about your event <ArrowRight size={17} /></Link></section><SiteFooter /></main>;
}
