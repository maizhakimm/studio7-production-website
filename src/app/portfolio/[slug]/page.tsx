import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Play } from "lucide-react";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getPortfolioContent, getPortfolioProject } from "@/lib/get-portfolio-content";

export async function generateStaticParams() { return (await getPortfolioContent()).map((project) => ({ slug: project.slug })); }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const project = await getPortfolioProject(slug); if (!project) notFound();
  const gallery = project.gallery?.length ? project.gallery : [project.image, project.image, project.image];
  return <main className="bg-white text-[#141414]"><SiteHeader />
    <section className="px-5 pb-10 pt-28 md:px-8 md:pb-16 md:pt-36"><div className="mx-auto max-w-7xl text-center"><Link className="text-link inline-flex items-center gap-2 text-sm font-semibold" href="/portfolio"><ArrowLeft size={16} /> All projects</Link><p className="eyebrow mt-10">{project.category} · {project.subcategory}</p><h1 className="display-serif mx-auto mt-4 max-w-4xl text-5xl leading-none md:text-7xl">{project.title}</h1>{project.location && <p className="mt-5 inline-flex items-center gap-2 text-sm text-black/55"><MapPin size={15} /> {project.location}</p>}</div></section>
    <section className="px-5 md:px-8"><div className="relative mx-auto aspect-[16/9] max-w-7xl overflow-hidden rounded-lg"><Image alt={project.title} className="object-cover" fill priority src={project.image} /></div></section>
    <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto grid max-w-5xl gap-8 text-center md:grid-cols-[0.7fr_1.3fr] md:text-left"><p className="eyebrow">The story</p><p className="display-serif text-3xl leading-snug md:text-4xl">{project.description || "A visual story captured with attention to the people, atmosphere and moments that made the event personal."}</p></div></section>
    {project.videoUrl && <section className="px-5 pb-16 text-center md:px-8"><a className="premium-button inline-flex items-center gap-2 rounded-full bg-[#141414] px-7 py-3.5 text-sm font-semibold text-white" href={project.videoUrl} rel="noreferrer" target="_blank"><Play size={16} /> Watch the film</a></section>}
    <section className="px-5 pb-24 md:px-8"><div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">{gallery.map((image, index) => <div className={`relative overflow-hidden rounded-lg ${index === 0 ? "aspect-[4/5]" : "aspect-[4/3]"}`} key={`${image}-${index}`}><Image alt={`${project.title} gallery ${index + 1}`} className="object-cover transition duration-700 hover:scale-[1.02]" fill src={image} /></div>)}</div></section>
    <section className="bg-[#f5f4f1] px-5 py-20 text-center md:px-8"><p className="eyebrow">Your story next</p><h2 className="display-serif mx-auto mt-4 max-w-2xl text-4xl md:text-5xl">Planning an event like this?</h2><Link className="premium-button mt-7 inline-flex items-center gap-2 rounded-full bg-[#141414] px-7 py-3.5 text-sm font-semibold text-white" href="/inquiry">Plan your coverage <ArrowRight size={17} /></Link></section><SiteFooter /></main>;
}
