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
      <section className="bg-[#171717] px-5 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-6">
          {portfolio.map((item, index) => (
            <div className={index % 3 === 0 ? "md:col-span-3" : "md:col-span-2"} key={item.title}>
              <PortfolioCard item={item} />
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
