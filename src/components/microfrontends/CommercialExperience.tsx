import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function CommercialExperience() {
  return (
    <footer id="orcamento" className="bg-black px-5 py-20 text-white sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_.8fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.26em] text-[#dcc486]">Area comercial</p>
          <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
            Transforme o catalogo em uma proposta luminica sob medida.
          </h2>
          <a
            href="https://wa.me/5500000000000"
            className="mt-8 inline-flex items-center gap-3 bg-white px-6 py-4 text-sm font-semibold uppercase tracking-[.18em] text-black"
          >
            Iniciar orcamento <ArrowRight size={18} />
          </a>
        </div>
        <div className="grid gap-3">
          {[
            [Phone, "+55 00 00000-0000"],
            [Mail, "projetos@nitroluxstudio.com"],
            [MapPin, "Showroom digital para todo o Brasil"],
          ].map(([Icon, label]) => {
            const IconComponent = Icon as typeof Phone;
            return (
              <div key={String(label)} className="flex items-center gap-4 border border-white/10 p-5 text-white/68">
                <IconComponent className="text-[#dcc486]" size={20} />
                {String(label)}
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
