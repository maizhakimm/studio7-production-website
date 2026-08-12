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
      <section className="mx-auto grid max-w-7xl gap-0 px-5 pb-24 md:grid-cols-3">
        <div className="border-y border-[#ddd0bd] py-8">
          <MapPin className="text-[#b8893d]" />
          <h2 className="mt-8 text-2xl font-semibold">Coverage</h2>
          <p className="mt-3 text-[#6f6a61]">Malaysia & Singapore</p>
        </div>
        <div className="border-y border-[#ddd0bd] py-8 md:px-8">
          <AtSign className="text-[#b8893d]" />
          <h2 className="mt-8 text-2xl font-semibold">Instagram</h2>
          <a
            className="mt-3 block text-[#6f6a61] transition hover:text-[#b8893d]"
            href="https://www.instagram.com/studio7production_videophoto"
          >
            @studio7production_videophoto
          </a>
        </div>
        <div className="border-y border-[#ddd0bd] py-8">
          <Mail className="text-[#b8893d]" />
          <h2 className="mt-8 text-2xl font-semibold">Inquiry</h2>
          <Link className="mt-3 block text-[#6f6a61] transition hover:text-[#b8893d]" href="/inquiry">
            Submit project details
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
