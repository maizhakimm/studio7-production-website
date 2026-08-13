import Link from "next/link";
import { navItems } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#ddd0bd]/75 bg-[#f8f3ea]/86 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link className="text-lg font-semibold tracking-[0.18em] text-[#171717]" href="/">
          STUDIO<span className="text-[#c8922f]">7</span>
        </Link>
        <nav className="hidden items-center gap-7 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#756e63] md:flex">
          {navItems.map((item) => (
            <Link className="transition hover:text-[#171717]" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          className="rounded-full bg-[#171717] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#b8893d]"
          href="/inquiry"
        >
          Get a Quote
        </Link>
      </div>
    </header>
  );
}
