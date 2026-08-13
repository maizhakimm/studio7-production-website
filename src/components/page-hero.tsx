type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
};

export function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <section className="bg-white px-5 pb-14 pt-32 text-center text-[#171717] md:pt-40">
      <div className="mx-auto max-w-7xl">
        <p className="section-label">{eyebrow}</p>
        <h1 className="display-serif mx-auto mt-4 max-w-4xl text-5xl leading-[0.98] md:text-7xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6f6a61]">{intro}</p>
      </div>
    </section>
  );
}
