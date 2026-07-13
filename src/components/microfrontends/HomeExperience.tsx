"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const scenes = [
  "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1400&q=78",
  "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1400&q=78",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=78",
];

export default function HomeExperience() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.35]);

  return (
    <section ref={ref} className="hero-shell relative min-h-screen overflow-hidden bg-[#050505]">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <Image
          src={scenes[0]}
          alt="Showroom premium com lustres e iluminacao arquitetonica"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(214,181,108,.28),transparent_34%),linear-gradient(90deg,rgba(0,0,0,.88),rgba(0,0,0,.28)_52%,rgba(0,0,0,.78))]" />
      </motion.div>

      <div className="light-particles" aria-hidden="true" />

      <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="#home" className="inline-flex items-center" aria-label="Nitrolux - inicio">
          <Image
            src="/logo-transparent.png"
            alt="Nitrolux - Sua vida com mais brilho"
            width={474}
            height={127}
            priority
            className="h-8 w-auto brightness-0 invert sm:h-10"
          />
        </a>
        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[.22em] text-white/68 md:flex">
          <a href="#catalogo">Catalogo</a>
          <a href="#produto">Produto</a>
          <a href="#arquitetos">Arquitetos</a>
          <a href="#orcamento">Orcamento</a>
        </nav>
        <a
          href="#orcamento"
          className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[.18em] text-white backdrop-blur-xl transition hover:border-[#d8bd78]/70 hover:bg-[#d8bd78]/15"
        >
          Consultoria
        </a>
      </header>

      <div id="home" className="relative z-10 mx-auto grid min-h-[calc(100vh-88px)] w-full max-w-7xl items-center gap-10 px-5 pb-14 pt-8 sm:px-8 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 border border-white/12 bg-white/[.06] px-3 py-2 text-xs uppercase tracking-[.24em] text-[#dcc486] backdrop-blur-xl">
            <Sparkles size={14} /> Showroom digital premium
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[.96] text-white sm:text-7xl lg:text-8xl">
            Iluminacao que transforma ambientes em experiencias.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            Lustres, pendentes LED, espelhos iluminados e sistemas arquitetonicos apresentados
            como pecas de design para interiores contemporaneos.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#catalogo"
              className="inline-flex items-center justify-center gap-3 bg-white px-6 py-4 text-sm font-semibold uppercase tracking-[.18em] text-black transition hover:bg-[#d9bd78]"
            >
              Explorar colecao <ArrowRight size={18} />
            </a>
            <a
              href="https://wa.me/5500000000000"
              className="inline-flex items-center justify-center border border-white/18 px-6 py-4 text-sm font-semibold uppercase tracking-[.18em] text-white transition hover:border-[#d9bd78] hover:text-[#d9bd78]"
            >
              Solicitar projeto
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
          className="showcase-strip"
        >
          {scenes.map((scene, index) => (
            <div className="showcase-card" key={scene}>
              <Image
                src={scene}
                alt={`Ambiente renderizado premium ${index + 1}`}
                fill
                sizes="(max-width: 768px) 78vw, 28vw"
                className="object-cover"
              />
              <span>{index === 0 ? "Living" : index === 1 ? "Jantar" : "Galeria"}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 pb-10 sm:px-8 md:grid-cols-4">
        {["+420 projetos", "95+ Lighthouse", "5 anos garantia", "Entrega nacional"].map((item) => (
          <div key={item} className="border-t border-white/12 py-5 text-sm uppercase tracking-[.18em] text-white/58">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
