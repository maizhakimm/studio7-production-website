import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { PortfolioCard } from "@/components/portfolio-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { portfolioCategories } from "@/lib/content";
import { getPortfolioContent } from "@/lib/get-portfolio-content";

export function generateStaticParams() { return portfolioCategories.map((category) => ({ slug: category.slug })); }
export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const category = portfolioCategories.find((item) => item.slug === slug); if (!category) notFound();
  const projects = (await getPortfolioContent()).filter((project) => project.categorySlug === slug);
  return <main className="bg-white"><SiteHeader /><PageHero eyebrow="Portfolio category" title={category.title} intro={category.description} /><section className="px-5 pb-24 md:px-8"><div className="mx-auto max-w-7xl"><Link className="text-link mb-8 inline-flex items-center gap-2 text-sm font-semibold" href="/portfolio"><ArrowLeft size={16} /> All categories</Link><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{projects.map((project) => <PortfolioCard item={project} key={project.slug} />)}</div></div></section><SiteFooter /></main>;
}
