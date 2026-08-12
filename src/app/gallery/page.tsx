import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { galleryImages } from "@/lib/content";

export default function GalleryPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Gallery"
        title="Photos and frames that set the mood."
        intro="A flexible gallery area for Studio 7 to upload fresh photo sets frequently through the CMS."
      />
      <section className="mx-auto grid max-w-7xl gap-5 px-5 pb-24 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((item, index) => (
          <article
            className={`group relative overflow-hidden ${
              index === 0 || index === 5 ? "sm:col-span-2" : ""
            }`}
            key={item.title}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f5c46d]">
                  {item.category}
                </p>
                <h2 className="mt-2 text-2xl font-black">{item.title}</h2>
              </div>
            </div>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
