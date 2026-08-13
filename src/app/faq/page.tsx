import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const faqs = [
  ["Do you offer fixed packages?", "Coverage is customised around the event type, schedule, location and deliverables. Share your details to receive a suitable recommendation and quotation."],
  ["Where does Studio 7 provide coverage?", "Studio 7 currently serves Malaysia and Singapore. Travel arrangements for other locations should be confirmed during the inquiry."],
  ["Can we book photography and videography together?", "Yes. Photography, videography, live feed and live streaming can be requested individually or combined depending on the event."],
  ["How early should we enquire?", "Availability depends on the date and production requirements. Enquiring early is recommended, especially for weddings, multi-day events and larger productions."],
  ["Do you cover multicultural weddings?", "The portfolio structure includes different ceremony types. The exact traditions, schedule and required coverage should be discussed before quotation."],
  ["When will we receive our photos or films?", "Turnaround time has not yet been confirmed for this website. It should be stated clearly in the final quotation or agreement for each project."]
];

export default function FaqPage() { return <main className="bg-white text-[#141414]"><SiteHeader /><section className="px-5 pb-10 pt-28 text-center md:px-8 md:pb-12 md:pt-32"><p className="eyebrow">FAQ</p><h1 className="display-serif mx-auto mt-3 max-w-3xl text-4xl md:text-6xl">A few things you may want to know.</h1></section><section className="px-5 pb-24 md:px-8"><div className="mx-auto max-w-4xl border-t border-black/10">{faqs.map(([question, answer]) => <details className="group border-b border-black/10 py-6" key={question}><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-semibold"><span>{question}</span><span className="text-2xl font-light text-[#d6472c] transition group-open:rotate-45">+</span></summary><p className="max-w-3xl pt-4 text-sm leading-7 text-black/55">{answer}</p></details>)}</div><div className="mt-14 text-center"><Link className="premium-button inline-flex items-center gap-2 rounded-full bg-[#141414] px-7 py-3.5 text-sm font-semibold text-white" href="/inquiry">Check your date <ArrowRight size={17} /></Link></div></section><SiteFooter /></main>; }
