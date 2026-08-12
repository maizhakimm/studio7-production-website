import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const values = [
  "Visual-first storytelling",
  "Simple inquiry, customised quote",
  "Malaysia and Singapore coverage",
  "Photo, video, live feed and streaming"
];

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="About"
        title="A lively production studio for real events."
        intro="Studio 7 Production creates photo and video coverage for weddings, corporate work and personal celebrations without overloading the website with heavy copy."
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative min-h-[540px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=85"
            alt="Event production team atmosphere"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
        <div className="grid content-center gap-0">
          {values.map((item) => (
            <div className="border-t border-[#ddd0bd] py-6" key={item}>
              <p className="display-serif text-4xl leading-none">{item}</p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
