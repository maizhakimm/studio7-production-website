type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
};

export function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <section className="bg-[#fbfaf7] px-5 pb-14 pt-32 text-[#171717]">
      <div className="mx-auto max-w-7xl">
        <p className="section-label">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.02em] md:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6f6a61]">{intro}</p>
      </div>
    </section>
  );
}
