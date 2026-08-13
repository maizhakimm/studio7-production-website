import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { PortfolioItem } from "@/lib/content";

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <Link className="portfolio-tile group block overflow-hidden bg-[#141414]" href={`/portfolio/${item.slug}`}>
      <div className="relative aspect-[4/3]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/68 via-black/8 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f5c46d]">
            {item.subcategory}
          </p>
          <div className="flex items-end justify-between gap-4">
            <h3 className="display-serif mt-2 text-3xl">{item.title}</h3>
            <ArrowUpRight className="tile-arrow shrink-0" size={22} />
          </div>
          {item.location ? <p className="mt-2 text-sm text-white/70">{item.location}</p> : null}
        </div>
      </div>
    </Link>
  );
}
