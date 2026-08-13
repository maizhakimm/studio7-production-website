"use client";

import { useMemo, useState } from "react";
import { PortfolioCard } from "@/components/portfolio-card";
import { portfolioCategories, type PortfolioItem } from "@/lib/content";

export function PortfolioBrowser({ projects }: { projects: PortfolioItem[] }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const visibleProjects = useMemo(
    () => activeCategory === "all" ? projects : projects.filter((project) => project.categorySlug === activeCategory),
    [activeCategory, projects]
  );
  const activeTitle = activeCategory === "all"
    ? "All stories"
    : portfolioCategories.find((category) => category.slug === activeCategory)?.title;

  return (
    <section className="px-5 pb-20 md:px-8 md:pb-28">
      <div className="mx-auto max-w-7xl">
        <div aria-label="Filter portfolio" className="sticky top-[74px] z-30 -mx-5 overflow-x-auto border-y border-black/10 bg-white/95 px-5 py-4 backdrop-blur-xl md:mx-0 md:flex md:flex-wrap md:justify-center md:overflow-visible" role="tablist">
          <div className="flex min-w-max gap-2 md:min-w-0 md:flex-wrap md:justify-center">
            {[{ title: "All", slug: "all" }, ...portfolioCategories].map((category) => {
              const active = activeCategory === category.slug;
              return <button aria-selected={active} className={`rounded-full border px-4 py-2 text-sm font-medium transition ${active ? "border-[#141414] bg-[#141414] text-white" : "border-black/10 bg-white text-black/65 hover:border-[#d6472c] hover:text-[#d6472c]"}`} key={category.slug} onClick={() => setActiveCategory(category.slug)} role="tab" type="button">{category.title}</button>;
            })}
          </div>
        </div>

        <div className="flex items-end justify-between gap-5 pb-8 pt-10">
          <div><p className="eyebrow">Browse portfolio</p><h2 className="display-serif mt-2 text-3xl md:text-4xl">{activeTitle}</h2></div>
          <p aria-live="polite" className="text-sm text-black/45">{visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"}</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => <PortfolioCard item={project} key={project.slug} />)}
        </div>
      </div>
    </section>
  );
}
