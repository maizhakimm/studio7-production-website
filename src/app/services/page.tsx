import { Camera, Clapperboard } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getHomeContent } from "@/lib/get-home-content";

export default async function ServicesPage() {
  const { services } = await getHomeContent();

  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Services"
        title="Coverage shaped around each event."
        intro="Studio 7 handles photography, videography, live feed and streaming for weddings, corporate events and private celebrations."
      />
      <section className="mx-auto grid max-w-7xl gap-x-12 gap-y-0 px-5 pb-24 md:grid-cols-2">
        {services.map((service, index) => (
          <article className="border-t border-[#ddd0bd] py-8" key={service.title}>
            <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-full bg-[#efe4d2] text-[#b8893d]">
              {index % 2 === 0 ? <Camera size={22} /> : <Clapperboard size={22} />}
            </div>
            <h2 className="display-serif text-5xl leading-none">{service.title}</h2>
            <p className="mt-3 leading-7 text-[#6f6a61]">
              {service.detail || service.shortDescription}
            </p>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
