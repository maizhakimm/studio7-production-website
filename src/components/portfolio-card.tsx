import Image from "next/image";
import type { PortfolioItem } from "@/lib/content";

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-[#e8e0d4] bg-white">
      <div className="relative aspect-[4/3]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/5 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f5c46d]">
            {item.category}
          </p>
          <h3 className="mt-2 text-3xl font-black">{item.title}</h3>
          {item.location ? <p className="mt-2 text-sm text-white/70">{item.location}</p> : null}
        </div>
      </div>
    </article>
  );
}
