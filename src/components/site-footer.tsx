import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { navItems } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-5 py-10">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <div className="text-lg font-black tracking-[0.18em]">
            STUDIO<span className="text-[#f3b23d]">7</span>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/58">
            Videography and photography for weddings, corporate events and life moments across Malaysia and Singapore.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-white/70 md:flex-col">
          {navItems.map((item) => (
            <Link className="transition hover:text-white" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-3 text-sm text-white/70">
          <span className="inline-flex items-center gap-2">
            <MapPin size={16} /> Malaysia & Singapore
          </span>
          <span className="inline-flex items-center gap-2">
            <Mail size={16} /> Inquiry via website form
          </span>
          <Link className="font-bold text-[#f3b23d] transition hover:text-white" href="/studio">
            CMS Studio
          </Link>
        </div>
      </div>
    </footer>
  );
}
