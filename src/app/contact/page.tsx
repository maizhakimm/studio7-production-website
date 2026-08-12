import Link from "next/link";
import { AtSign, Mail, MapPin } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Contact"
        title="Ready for Malaysia and Singapore enquiries."
        intro="The website can route visitors to the inquiry flow, Instagram and future WhatsApp contact once final details are confirmed."
      />
      <section className="mx-auto grid max-w-7xl gap-4 px-5 pb-24 md:grid-cols-3">
        <div className="glass rounded-lg p-6">
          <MapPin className="text-[#f3b23d]" />
          <h2 className="mt-8 text-2xl font-black">Coverage</h2>
          <p className="mt-3 text-white/64">Malaysia & Singapore</p>
        </div>
        <div className="glass rounded-lg p-6">
          <AtSign className="text-[#f3b23d]" />
          <h2 className="mt-8 text-2xl font-black">Instagram</h2>
          <a
            className="mt-3 block text-white/64 transition hover:text-[#f3b23d]"
            href="https://www.instagram.com/studio7production_videophoto"
          >
            @studio7production_videophoto
          </a>
        </div>
        <div className="glass rounded-lg p-6">
          <Mail className="text-[#f3b23d]" />
          <h2 className="mt-8 text-2xl font-black">Inquiry</h2>
          <Link className="mt-3 block text-white/64 transition hover:text-[#f3b23d]" href="/inquiry">
            Submit project details
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
