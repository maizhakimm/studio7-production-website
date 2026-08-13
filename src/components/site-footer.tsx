import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/lib/content";

function BrandIcon({ path, size = 18 }: { path: string; size?: number }) {
  return <svg aria-hidden="true" fill="currentColor" height={size} viewBox="0 0 24 24" width={size}><path d={path} /></svg>;
}

const instagramPath = "M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z";
const facebookPath = "M13.6 22v-9h3l.45-3.5H13.6V7.27c0-1.01.28-1.7 1.73-1.7h1.85V2.44A25 25 0 0 0 14.48 2C11.8 2 9.96 3.64 9.96 6.66V9.5H7v3.5h2.96v9h3.64Z";
const whatsappPath = "M12.04 2a9.84 9.84 0 0 0-8.47 14.84L2 22l5.29-1.53A9.98 9.98 0 1 0 12.04 2Zm0 17.98a8 8 0 0 1-4.08-1.12l-.3-.18-3.14.91.94-3.06-.2-.31a8 8 0 1 1 6.78 3.76Zm4.39-5.99c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19a7.22 7.22 0 0 1-1.33-1.66c-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.39 1.37.5.58.18 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-white px-5 pb-7 pt-12 text-[#141414] md:px-8 md:pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.6fr_0.9fr]">
          <div>
            <div className="relative h-28 w-36">
              <Image alt="Studio 7 Production" className="object-contain object-left" fill src="/brand/studio7-footer.svg" />
            </div>
            <p className="mt-3 max-w-sm text-sm leading-6 text-black/55">Videography and photography for weddings, corporate events and life moments across Malaysia and Singapore.</p>
          </div>
          <div>
            <p className="eyebrow">Explore</p>
            <div className="mt-4 flex flex-col gap-2.5 text-sm text-black/65">
              {navItems.filter((item) => item.href !== "/inquiry" && item.href !== "/contact").map((item) => <Link className="transition hover:text-black" href={item.href} key={item.href}>{item.label}</Link>)}
            </div>
          </div>
          <div>
            <p className="eyebrow">Connect</p>
            <div className="mt-4 flex flex-col gap-2.5 text-sm text-black/65">
              <div className="flex items-center gap-3">
                <a aria-label="Studio 7 on Instagram" className="grid size-10 place-items-center rounded-full border border-black/10 transition hover:border-[#d6472c] hover:bg-[#d6472c] hover:text-white" href="https://www.instagram.com/studio7production_videophoto/" rel="noreferrer" target="_blank"><BrandIcon path={instagramPath} /></a>
                <span aria-label="Facebook link pending" className="grid size-10 cursor-not-allowed place-items-center rounded-full border border-black/10 text-black/35" title="Facebook link to be added"><BrandIcon path={facebookPath} size={17} /></span>
              </div>
              <Link className="transition hover:text-black" href="/inquiry">Plan your coverage</Link>
              <Link className="transition hover:text-black" href="/contact">Contact</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-black/10 pt-5 text-xs text-black/45">
          <span>© 2026 Studio 7 Production</span><div className="flex flex-wrap gap-4"><Link className="hover:text-black" href="/faq">FAQ</Link><Link className="hover:text-black" href="/terms">Terms</Link><Link className="hover:text-black" href="/privacy">Privacy Policy</Link><span>Malaysia · Singapore</span></div>
        </div>
      </div>
      <button aria-label="WhatsApp number to be added" className="fixed bottom-24 right-5 z-40 grid size-14 cursor-not-allowed place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.32)] md:bottom-6 md:right-6" title="WhatsApp number to be added" type="button"><BrandIcon path={whatsappPath} size={27} /></button>
    </footer>
  );
}
