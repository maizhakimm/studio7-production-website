import { Mail } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function InquiryPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Inquiry"
        title="Share the details. Studio 7 will quote from there."
        intro="No package table for now. The form collects the event information needed for a customised quotation."
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-24 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="glass h-fit rounded-lg p-6">
          <h2 className="text-2xl font-black">What to prepare</h2>
          <div className="mt-6 grid gap-4 text-sm text-white/66">
            <p>Event type, date and location.</p>
            <p>Whether you need photography, videography, live feed or live streaming.</p>
            <p>Coverage hours, venue details and any special moments to capture.</p>
          </div>
        </div>
        <form className="glass grid gap-4 rounded-lg p-5 md:p-7">
          <div className="grid gap-4 md:grid-cols-2">
            <input className="rounded-lg border border-white/10 bg-black/25 px-4 py-3 outline-none focus:border-[#f3b23d]" placeholder="Name" />
            <input className="rounded-lg border border-white/10 bg-black/25 px-4 py-3 outline-none focus:border-[#f3b23d]" placeholder="Email or WhatsApp" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <input className="rounded-lg border border-white/10 bg-black/25 px-4 py-3 outline-none focus:border-[#f3b23d]" placeholder="Event type" />
            <input className="rounded-lg border border-white/10 bg-black/25 px-4 py-3 outline-none focus:border-[#f3b23d]" placeholder="Event date" />
          </div>
          <input className="rounded-lg border border-white/10 bg-black/25 px-4 py-3 outline-none focus:border-[#f3b23d]" placeholder="Location" />
          <textarea className="min-h-36 rounded-lg border border-white/10 bg-black/25 px-4 py-3 outline-none focus:border-[#f3b23d]" placeholder="Tell us the coverage hours, photo/video needs and anything important." />
          <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-black text-[#161116] transition hover:bg-[#f3b23d]" type="button">
            Submit Inquiry <Mail size={18} />
          </button>
        </form>
      </section>
      <SiteFooter />
    </main>
  );
}
