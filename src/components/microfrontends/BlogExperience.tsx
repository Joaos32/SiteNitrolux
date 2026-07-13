export default function BlogExperience() {
  return (
    <section className="bg-[#f7f6f2] px-5 py-20 text-black sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[.26em] text-[#967741]">Journal</p>
        <div className="mt-6 grid gap-px bg-black/10 md:grid-cols-3">
          {[
            "Como escolher temperatura de cor para areas sociais",
            "Pendentes lineares em bancadas e mesas extensas",
            "Espelhos LED como solucao de luz funcional e cenica",
          ].map((title) => (
            <article key={title} className="bg-[#f7f6f2] py-8 pr-8">
              <span className="text-xs uppercase tracking-[.2em] text-black/38">Guia tecnico</span>
              <h3 className="mt-4 text-2xl font-semibold leading-snug">{title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
