import Link from "next/link";
import { navItems } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#0b0a10]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link className="text-lg font-black tracking-[0.18em]" href="/">
          STUDIO<span className="text-[#f3b23d]">7</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-white/72 md:flex">
          {navItems.map((item) => (
            <Link className="transition hover:text-white" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#161116] transition hover:bg-[#f3b23d]"
          href="/inquiry"
        >
          Get a Quote
        </Link>
      </div>
    </header>
  );
}
