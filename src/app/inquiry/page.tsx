import { Mail } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function InquiryPage() {
  return (
    <main>
      <SiteHeader />
      <section className="px-5 pb-10 pt-28 text-center md:px-8 md:pb-12 md:pt-32"><div className="mx-auto max-w-7xl"><p className="eyebrow">Check your date</p><h1 className="display-serif mx-auto mt-3 max-w-3xl text-4xl leading-none md:text-6xl">Tell us what you are planning.</h1><p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-black/55">Share the essentials below and Studio 7 can recommend suitable coverage before preparing a customised quotation.</p></div></section>
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
          <label className="grid gap-2 text-sm font-semibold">Event type<select className="rounded-lg border border-black/10 bg-[#f8f7f5] px-4 py-3 font-normal outline-none focus:border-[#d6472c]" defaultValue="" name="eventType" required><option disabled value="">Select an event</option><option>Wedding</option><option>Corporate</option><option>Engagement</option><option>Registration of Marriage</option><option>Pre-wedding</option><option>Birthday</option><option>Live Feed</option><option>Live Streaming</option><option>Other</option></select></label>
          <label className="grid gap-2 text-sm font-semibold">Location<input className="rounded-lg border border-black/10 bg-[#f8f7f5] px-4 py-3 font-normal outline-none focus:border-[#d6472c]" name="location" placeholder="Venue, city or country" /></label>
          <fieldset className="grid gap-3"><legend className="text-sm font-semibold">Coverage needed</legend><div className="flex flex-wrap gap-3">{["Photography", "Videography", "Live Feed", "Live Streaming"].map((item) => <label className="flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm" key={item}><input name="coverage" type="checkbox" value={item} /> {item}</label>)}</div></fieldset>
          <div className="grid gap-4 md:grid-cols-3"><label className="grid gap-2 text-sm font-semibold">Coverage hours<input className="rounded-lg border border-black/10 bg-[#f8f7f5] px-4 py-3 font-normal outline-none focus:border-[#d6472c]" min="1" name="hours" placeholder="e.g. 8" type="number" /></label><label className="grid gap-2 text-sm font-semibold">Estimated guests<input className="rounded-lg border border-black/10 bg-[#f8f7f5] px-4 py-3 font-normal outline-none focus:border-[#d6472c]" min="1" name="guests" placeholder="e.g. 300" type="number" /></label><label className="grid gap-2 text-sm font-semibold">Budget range<select className="rounded-lg border border-black/10 bg-[#f8f7f5] px-4 py-3 font-normal outline-none focus:border-[#d6472c]" defaultValue="" name="budget"><option value="">Not decided</option><option>Below RM3,000</option><option>RM3,000–RM6,000</option><option>RM6,000–RM10,000</option><option>Above RM10,000</option></select></label></div>
          <fieldset className="grid gap-3"><legend className="text-sm font-semibold">Preferred deliverables</legend><div className="flex flex-wrap gap-3">{["Edited photos", "Highlight film", "Full event film", "Social reels", "Same-day edit"].map((item) => <label className="flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm" key={item}><input name="deliverables" type="checkbox" value={item} /> {item}</label>)}</div></fieldset>
          <label className="grid gap-2 text-sm font-semibold">How did you find Studio 7?<select className="rounded-lg border border-black/10 bg-[#f8f7f5] px-4 py-3 font-normal outline-none focus:border-[#d6472c]" defaultValue="" name="source"><option value="">Select one</option><option>Instagram</option><option>Facebook</option><option>Google</option><option>Referral</option><option>Previous client</option><option>Other</option></select></label>
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
