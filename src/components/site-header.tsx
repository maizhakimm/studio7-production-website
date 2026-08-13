"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/content";
import { portfolioCategories } from "@/lib/content";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/92 backdrop-blur-xl">
      <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 md:px-8">
        <Link className="relative block h-11 w-[128px]" href="/" onClick={() => setIsOpen(false)}>
          <Image alt="Studio 7 Production" className="object-contain object-left" fill priority src="/brand/studio7-header.svg" />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-black/65 md:flex">
          <div className="mega-trigger group relative py-7">
            <Link aria-current={isActive("/portfolio") ? "page" : undefined} className={`nav-link transition hover:text-black ${isActive("/portfolio") ? "nav-link-active text-black" : ""}`} href="/portfolio">Portfolio</Link>
            <div className="mega-menu invisible absolute left-1/2 top-[68px] w-[720px] -translate-x-1/2 translate-y-2 opacity-0 transition duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="grid grid-cols-[1.5fr_0.7fr] gap-8 border border-black/10 bg-white p-7 shadow-[0_24px_70px_rgba(20,20,20,0.14)]">
                <div><p className="eyebrow">Browse by story</p><div className="mt-5 grid grid-cols-2 gap-x-7 gap-y-4">{portfolioCategories.map((category) => <Link className="group/item border-b border-black/10 pb-3 transition hover:border-[#d6472c]" href={`/portfolio/category/${category.slug}`} key={category.slug}><span className="block font-semibold text-[#141414]">{category.title}</span><span className="mt-1 block text-xs leading-5 text-black/45">{category.description}</span></Link>)}</div></div>
                <div className="bg-[#f5f4f1] p-5"><p className="eyebrow">Quick links</p><div className="mt-5 flex flex-col gap-4"><Link className="font-semibold text-[#141414] hover:text-[#d6472c]" href="/portfolio">All projects</Link><Link className="font-semibold text-[#141414] hover:text-[#d6472c]" href="/gallery">Photo gallery</Link><Link className="font-semibold text-[#141414] hover:text-[#d6472c]" href="/inquiry">Plan your coverage</Link></div></div>
              </div>
            </div>
          </div>
          {navItems.slice(0, 4).filter((item) => item.href !== "/portfolio").map((item) => <Link aria-current={isActive(item.href) ? "page" : undefined} className={`nav-link transition hover:text-black ${isActive(item.href) ? "nav-link-active text-black" : ""}`} href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>
        <Link className="premium-button hidden rounded-full bg-[#141414] px-5 py-3 text-[13px] font-semibold text-white md:inline-flex" href="/inquiry">
          Check your date
        </Link>
        <button aria-expanded={isOpen} aria-label={isOpen ? "Close menu" : "Open menu"} className="grid size-10 place-items-center md:hidden" onClick={() => setIsOpen((open) => !open)} type="button">
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {isOpen && (
        <div className="border-t border-black/10 bg-white px-5 pb-6 md:hidden">
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <Link aria-current={isActive(item.href) ? "page" : undefined} className={`border-b border-black/10 py-4 text-[15px] font-medium last:border-0 ${isActive(item.href) ? "text-[#d6472c]" : ""}`} href={item.href} key={item.href} onClick={() => setIsOpen(false)}>{item.label}</Link>
            ))}
            <div className="grid grid-cols-2 gap-2 border-b border-black/10 py-4">{portfolioCategories.map((category) => <Link className="text-xs text-black/55" href={`/portfolio/category/${category.slug}`} key={category.slug} onClick={() => setIsOpen(false)}>{category.title}</Link>)}</div>
          </nav>
          <Link className="mt-4 block rounded-full bg-[#141414] px-5 py-3.5 text-center text-sm font-semibold text-white" href="/inquiry" onClick={() => setIsOpen(false)}>
            Check your date
          </Link>
        </div>
      )}
    </header>
  );
}
