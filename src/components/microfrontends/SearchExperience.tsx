"use client";

import { Search } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { products } from "@/data/products";

export default function SearchExperience() {
  const [term, setTerm] = useState("");
  const results = useMemo(() => {
    const normalized = term.toLowerCase().trim();
    if (!normalized) return products.slice(0, 3);
    return products.filter((product) =>
      [product.name, product.category, product.room, product.style, product.temperature]
        .join(" ")
        .toLowerCase()
        .includes(normalized),
    );
  }, [term]);

  return (
    <section className="bg-white px-5 py-18 text-black sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 border-y border-black/10 py-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.26em] text-[#967741]">Busca inteligente</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Encontre a luz certa por ambiente, estilo ou temperatura.
            </h2>
          </div>
          <div>
            <label className="flex items-center gap-3 border border-black/10 bg-[#f7f6f2] px-4 py-4">
              <Search size={20} className="text-black/45" />
              <input
                value={term}
                onChange={(event) => setTerm(event.target.value)}
                placeholder="Ex: living, 3000K, pendente, grafite"
                className="w-full bg-transparent text-base outline-none placeholder:text-black/35"
              />
            </label>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {results.slice(0, 3).map((product) => (
                <article key={product.slug} className="grid grid-cols-[76px_1fr] gap-3 border border-black/10 p-2">
                  <div className="relative aspect-square overflow-hidden bg-black">
                    <Image src={product.image} alt={product.name} fill sizes="76px" className="object-cover" />
                  </div>
                  <div className="py-1">
                    <h3 className="text-sm font-semibold">{product.name}</h3>
                    <p className="mt-1 text-xs text-black/50">{product.category}</p>
                    <p className="mt-2 text-xs uppercase tracking-[.16em] text-[#967741]">{product.temperature}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
