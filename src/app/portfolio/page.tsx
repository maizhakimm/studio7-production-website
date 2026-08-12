import { PortfolioCard } from "@/components/portfolio-card";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getHomeContent } from "@/lib/get-home-content";

export default async function PortfolioPage() {
  const { portfolio } = await getHomeContent();

  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Portfolio"
        title="Selected work across events and productions."
        intro="A visual-first archive for wedding films, corporate stories, ROM, engagements, birthdays and live event coverage."
      />
      <section className="bg-white px-5 py-20 text-[#171717]">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          {portfolio.map((item) => (
            <PortfolioCard item={item} key={item.title} />
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
