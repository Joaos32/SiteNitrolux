export default function InstitutionalExperience() {
  return (
    <section id="arquitetos" className="bg-[#111] px-5 py-20 text-white sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.26em] text-[#dcc486]">Institucional</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
            Engenharia luminica para interiores modernos.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Curadoria", "Linha premium para projetos residenciais, corporativos e hoteleiros."],
            ["Arquitetos", "Atendimento consultivo com especificacao tecnica e apoio comercial."],
            ["Performance", "Produtos LED eficientes, duraveis e preparados para ambientes exigentes."],
          ].map(([title, text]) => (
            <article key={title} className="border border-white/10 bg-white/[.035] p-6">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-4 leading-7 text-white/58">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
