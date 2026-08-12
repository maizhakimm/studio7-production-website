import Link from "next/link";
import { navItems } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#e8e0d4]/80 bg-[#fbfaf7]/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link className="text-lg font-black tracking-[0.16em] text-[#171717]" href="/">
          STUDIO<span className="text-[#c8922f]">7</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-[#6f6a61] md:flex">
          {navItems.map((item) => (
            <Link className="transition hover:text-[#171717]" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          className="rounded-full bg-[#171717] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#c8922f]"
          href="/inquiry"
        >
          Get a Quote
        </Link>
      </div>
    </header>
  );
}
