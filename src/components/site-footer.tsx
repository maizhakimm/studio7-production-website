import Link from "next/link";
import { navItems } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-white px-5 pb-7 pt-12 text-[#141414] md:px-8 md:pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.6fr_0.9fr]">
          <div>
            <div className="display-serif text-[22px] font-medium">STUDIO<span className="italic text-[#d6472c]">7</span></div>
            <p className="mt-3 max-w-sm text-sm leading-6 text-black/55">Videography and photography for weddings, corporate events and life moments across Malaysia and Singapore.</p>
          </div>
          <div>
            <p className="eyebrow">Explore</p>
            <div className="mt-4 flex flex-col gap-2.5 text-sm text-black/65">
              {navItems.slice(0, 4).map((item) => <Link className="transition hover:text-black" href={item.href} key={item.href}>{item.label}</Link>)}
            </div>
          </div>
          <div>
            <p className="eyebrow">Connect</p>
            <div className="mt-4 flex flex-col gap-2.5 text-sm text-black/65">
              <a className="transition hover:text-black" href="https://www.instagram.com/studio7production_videophoto/" rel="noreferrer" target="_blank">Instagram</a>
              <Link className="transition hover:text-black" href="/inquiry">Start an inquiry</Link>
              <Link className="transition hover:text-black" href="/contact">Contact</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-2 border-t border-black/10 pt-5 text-xs text-black/45">
          <span>© 2026 Studio 7 Production</span><span>Malaysia · Singapore</span>
        </div>
      </div>
    </footer>
  );
}
