"use client";

import { motion } from "framer-motion";
import { Download, MessageCircle, Ruler, ShieldCheck, SunMedium, Zap } from "lucide-react";
import Image from "next/image";
import { products } from "@/data/products";

const featured = products[0];

export default function ProductExperience() {
  return (
    <section id="produto" className="bg-[#0b0b0b] px-5 py-20 text-white sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative min-h-[560px] overflow-hidden"
        >
          <Image
            src={featured.image}
            alt={featured.name}
            fill
            sizes="(max-width: 1024px) 92vw, 58vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_18%,rgba(216,189,120,.35),transparent_28%),linear-gradient(180deg,transparent,rgba(0,0,0,.78))]" />
          <div className="absolute bottom-6 left-6 right-6 grid gap-4 sm:grid-cols-3">
            {["Antes", "Depois", "Cena real"].map((label, index) => (
              <div key={label} className="glass-panel min-h-28 p-4">
                <span className="text-xs uppercase tracking-[.22em] text-[#dcc486]">{label}</span>
                <div className={`mt-5 h-2 ${index === 0 ? "w-2/5 bg-white/25" : "w-4/5 bg-[#dcc486]"}`} />
              </div>
            ))}
          </div>
        </motion.div>

        <div className="lg:sticky lg:top-8">
          <p className="text-xs font-semibold uppercase tracking-[.26em] text-[#dcc486]">
            Produto em destaque
          </p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">{featured.name}</h2>
          <p className="mt-6 text-lg leading-8 text-white/68">
            Um lustre escultural com presenca silenciosa, brilho controlado e acabamento premium para
            projetos que exigem atmosfera, proporcao e precisao luminica.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {[
              [SunMedium, featured.lumens, "Fluxo luminoso"],
              [Zap, featured.temperature, "Temperatura"],
              [Ruler, featured.dimensions, "Medidas"],
              [ShieldCheck, featured.warranty, "Garantia"],
            ].map(([Icon, value, label]) => {
              const IconComponent = Icon as typeof SunMedium;
              return (
                <div key={String(label)} className="border border-white/10 bg-white/[.035] p-4">
                  <IconComponent className="mb-5 text-[#dcc486]" size={20} />
                  <strong className="block text-xl">{String(value)}</strong>
                  <span className="text-sm text-white/50">{String(label)}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a
              href="https://wa.me/5500000000000"
              className="inline-flex items-center justify-center gap-3 bg-[#dcc486] px-5 py-4 text-sm font-semibold uppercase tracking-[.18em] text-black"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
            <a
              href="#orcamento"
              className="inline-flex items-center justify-center gap-3 border border-white/16 px-5 py-4 text-sm font-semibold uppercase tracking-[.18em] text-white"
            >
              <Download size={18} /> Tecnico
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-7xl">
        <div className="mb-8 flex items-end justify-between gap-6">
          <h3 className="max-w-2xl text-3xl font-semibold sm:text-5xl">Veja este produto em ambientes reais</h3>
          <span className="hidden text-xs uppercase tracking-[.24em] text-white/45 sm:block">renderizacao progressiva</span>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <div key={product.slug} className="relative aspect-[4/3] overflow-hidden">
              <Image src={product.scene} alt={`Ambiente com ${product.name}`} fill sizes="33vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/64 to-transparent" />
              <span className="absolute bottom-4 left-4 text-sm uppercase tracking-[.2em] text-white/82">
                {product.room}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
