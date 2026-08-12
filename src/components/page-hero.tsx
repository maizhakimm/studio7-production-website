type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
};

export function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <section className="px-5 pb-14 pt-32">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#48d6c8]">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl text-5xl font-black leading-[0.98] md:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/66">{intro}</p>
      </div>
    </section>
  );
}
