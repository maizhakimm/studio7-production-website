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
        title="Tell us what you are planning."
        intro="Share the date, place and kind of coverage you need. Studio 7 will prepare a quotation around your event."
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-24 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="h-fit border-y border-[#ddd0bd] py-8">
          <h2 className="display-serif text-5xl leading-none">What to prepare</h2>
          <div className="mt-8 grid gap-4 text-sm text-[#6f6a61]">
            <p>Event type, date and location.</p>
            <p>Whether you need photography, videography, live feed or live streaming.</p>
            <p>Coverage hours, venue details and any special moments to capture.</p>
          </div>
        </div>
        <form className="grid gap-5 border border-black/10 bg-white p-5 shadow-[0_24px_80px_rgba(61,43,19,0.08)] md:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold">Your name<input className="rounded-lg border border-black/10 bg-[#f8f7f5] px-4 py-3 font-normal outline-none focus:border-[#d6472c]" name="name" placeholder="Full name" required /></label>
            <label className="grid gap-2 text-sm font-semibold">Email<input className="rounded-lg border border-black/10 bg-[#f8f7f5] px-4 py-3 font-normal outline-none focus:border-[#d6472c]" name="email" placeholder="name@email.com" required type="email" /></label>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold">Phone or WhatsApp<input className="rounded-lg border border-black/10 bg-[#f8f7f5] px-4 py-3 font-normal outline-none focus:border-[#d6472c]" name="phone" placeholder="+60" required type="tel" /></label>
            <label className="grid gap-2 text-sm font-semibold">Event date<input className="rounded-lg border border-black/10 bg-[#f8f7f5] px-4 py-3 font-normal outline-none focus:border-[#d6472c]" name="eventDate" type="date" /></label>
          </div>
          <label className="grid gap-2 text-sm font-semibold">Event type<select className="rounded-lg border border-black/10 bg-[#f8f7f5] px-4 py-3 font-normal outline-none focus:border-[#d6472c]" defaultValue="" name="eventType" required><option disabled value="">Select an event</option><option>Wedding</option><option>Corporate</option><option>Engagement</option><option>ROM</option><option>Pre-wedding</option><option>Birthday</option><option>Live Feed</option><option>Live Streaming</option><option>Other</option></select></label>
          <label className="grid gap-2 text-sm font-semibold">Location<input className="rounded-lg border border-black/10 bg-[#f8f7f5] px-4 py-3 font-normal outline-none focus:border-[#d6472c]" name="location" placeholder="Venue, city or country" /></label>
          <fieldset className="grid gap-3"><legend className="text-sm font-semibold">Coverage needed</legend><div className="flex flex-wrap gap-3">{["Photography", "Videography", "Live Feed", "Live Streaming"].map((item) => <label className="flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm" key={item}><input name="coverage" type="checkbox" value={item} /> {item}</label>)}</div></fieldset>
          <label className="grid gap-2 text-sm font-semibold">Tell us more<textarea className="min-h-36 rounded-lg border border-black/10 bg-[#f8f7f5] px-4 py-3 font-normal outline-none focus:border-[#d6472c]" name="message" placeholder="Coverage hours, venue details, number of guests and anything important." /></label>
          <button className="premium-button inline-flex items-center justify-center gap-2 rounded-full bg-[#171717] px-6 py-3 font-semibold text-white" type="button" title="Email delivery setup pending">
            Send event details <Mail size={18} />
          </button>
          <p className="text-center text-xs text-black/45">Form delivery will be enabled after the recipient email is confirmed.</p>
        </form>
      </section>
      <SiteFooter />
    </main>
  );
}
