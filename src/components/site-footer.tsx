import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { navItems } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#e8e0d4] bg-[#fbfaf7] px-5 py-10 text-[#171717]">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <div className="text-lg font-black tracking-[0.18em]">
            STUDIO<span className="text-[#c8922f]">7</span>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-6 text-[#6f6a61]">
            Videography and photography for weddings, corporate events and life moments across Malaysia and Singapore.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-[#6f6a61] md:flex-col">
          {navItems.map((item) => (
            <Link className="transition hover:text-[#171717]" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-3 text-sm text-[#6f6a61]">
          <span className="inline-flex items-center gap-2">
            <MapPin size={16} /> Malaysia & Singapore
          </span>
          <span className="inline-flex items-center gap-2">
            <Mail size={16} /> Inquiry via website form
          </span>
          <Link className="font-bold text-[#c8922f] transition hover:text-[#171717]" href="/studio">
            CMS Studio
          </Link>
        </div>
      </div>
    </footer>
  );
}
