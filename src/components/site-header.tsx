"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/content";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/92 backdrop-blur-xl">
      <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 md:px-8">
        <Link className="display-serif text-[22px] font-medium text-[#141414]" href="/" onClick={() => setIsOpen(false)}>
          STUDIO<span className="italic text-[#d6472c]">7</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-black/65 md:flex">
          {navItems.slice(0, 4).map((item) => (
            <Link className="transition hover:text-black" href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </nav>
        <Link className="hidden rounded-full bg-[#141414] px-5 py-3 text-[13px] font-semibold text-white transition hover:bg-[#d6472c] md:inline-flex" href="/inquiry">
          Start an inquiry
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
            Start an inquiry
          </Link>
        </div>
      )}
    </header>
  );
}
