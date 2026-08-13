import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PortfolioCard } from "@/components/portfolio-card";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { portfolioCategories } from "@/lib/content";
import { getPortfolioContent } from "@/lib/get-portfolio-content";

export default async function PortfolioPage() {
  const portfolio = await getPortfolioContent();
  return <main className="bg-white"><SiteHeader /><PageHero eyebrow="Portfolio" title="Stories captured across every kind of event." intro="Browse Studio 7 work by celebration, business event, live production and more." />
    <section className="px-5 pb-8 md:px-8"><div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-2 border-y border-black/10 py-6">{portfolioCategories.map((category) => <Link className="rounded-full border border-black/10 px-4 py-2 text-sm font-medium transition hover:border-[#d6472c] hover:bg-[#d6472c] hover:text-white" href={`/portfolio/category/${category.slug}`} key={category.slug}>{category.title}</Link>)}</div></section>
    <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">{portfolio.map((item, index) => <Reveal delay={(index % 3) * 80} key={item.slug}><PortfolioCard item={item} /></Reveal>)}</div></section>
    <section className="px-5 pb-24 text-center md:px-8"><p className="eyebrow">Planning something?</p><h2 className="display-serif mx-auto mt-4 max-w-2xl text-4xl md:text-5xl">Let us shape the right coverage for your event.</h2><Link className="premium-button mt-7 inline-flex items-center gap-2 rounded-full bg-[#141414] px-7 py-3.5 text-sm font-semibold text-white" href="/inquiry">Tell us about your event <ArrowRight size={17} /></Link></section><SiteFooter /></main>;
}
