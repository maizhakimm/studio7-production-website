"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/content";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/92 backdrop-blur-xl">
      <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 md:px-8">
        <Link className="relative block h-11 w-[128px]" href="/" onClick={() => setIsOpen(false)}>
          <Image alt="Studio 7 Production" className="object-contain object-left" fill priority src="/brand/studio7-header.svg" />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-black/65 md:flex">
          {navItems.slice(0, 4).map((item) => (
            <Link className="nav-link transition hover:text-black" href={item.href} key={item.href}>{item.label}</Link>
          ))}
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
              <Link className="border-b border-black/10 py-4 text-[15px] font-medium last:border-0" href={item.href} key={item.href} onClick={() => setIsOpen(false)}>{item.label}</Link>
            ))}
          </nav>
          <Link className="mt-4 block rounded-full bg-[#141414] px-5 py-3.5 text-center text-sm font-semibold text-white" href="/inquiry" onClick={() => setIsOpen(false)}>
            Check your date
          </Link>
        </div>
      )}
    </header>
  );
}
