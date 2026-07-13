"use client";

import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Eye, Heart, RotateCcw, SlidersHorizontal, X } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { create } from "zustand";
import { filters, Product, products } from "@/data/products";

type FilterState = Record<keyof typeof filters, string>;

const defaultFilters = Object.fromEntries(
  Object.keys(filters).map((key) => [key, "Todos"]),
) as FilterState;

const filterLabels: Record<keyof typeof filters, string> = {
  category: "Linha",
  material: "Material",
  color: "Cor",
  room: "Ambiente",
  style: "Estilo",
  temperature: "Temperatura",
  power: "Potencia",
  technology: "Tecnologia",
};

const useCatalogStore = create<{
  active: FilterState;
  favorites: string[];
  setFilter: (key: keyof typeof filters, value: string) => void;
  toggleFavorite: (slug: string) => void;
}>((set) => ({
  active: defaultFilters,
  favorites: [],
  setFilter: (key, value) =>
    set((state) => ({ active: { ...state.active, [key]: value } })),
  toggleFavorite: (slug) =>
    set((state) => ({
      favorites: state.favorites.includes(slug)
        ? state.favorites.filter((item) => item !== slug)
        : [...state.favorites, slug],
    })),
}));

const queryClient = new QueryClient();

function Catalog() {
  const { active, favorites, setFilter, toggleFavorite } = useCatalogStore();
  const [quickView, setQuickView] = useState<Product | null>(null);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const { data = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => products,
    staleTime: Infinity,
  });

  const filtered = useMemo(
    () =>
      data.filter((product) =>
        Object.entries(active).every(([key, value]) => {
          if (value === "Todos") return true;
          return product[key as keyof Product] === value;
        }),
      ),
    [active, data],
  );
  const activeCount = Object.values(active).filter((value) => value !== "Todos").length;
  const clearFilters = () => {
    (Object.keys(filters) as Array<keyof typeof filters>).forEach((key) => setFilter(key, "Todos"));
  };
  const advancedFilters = (
    ["material", "color", "room", "style", "temperature", "power", "technology"] as Array<
      keyof typeof filters
    >
  );

  return (
    <section id="catalogo" className="bg-[#f7f6f2] px-5 py-20 text-[#101010] sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 border-b border-black/10 pb-10 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[.26em] text-[#967741]">
              Catalogo inteligente
            </p>
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">
              Pecas de luz organizadas como um acervo de design.
            </h2>
          </div>
          <div className="inline-flex w-fit items-center gap-3 border border-black/10 bg-white/70 px-4 py-3 text-xs uppercase tracking-[.2em] backdrop-blur-xl">
            <SlidersHorizontal size={16} /> {filtered.length} pecas
          </div>
        </div>

        <div className="my-8 border border-black/10 bg-white/72 p-3 backdrop-blur-xl sm:p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#967741]">
                Escolha uma linha
              </p>
              <p className="mt-1 text-sm text-black/52">
                Comece pelo tipo de produto e refine apenas se precisar.
              </p>
            </div>
            <div className="flex items-center gap-2">
              {activeCount > 0 ? (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="inline-flex h-11 items-center gap-2 border border-black/10 bg-[#f7f6f2] px-4 text-xs font-semibold uppercase tracking-[.16em] text-black/62 transition hover:border-black/25 hover:text-black"
                >
                  <RotateCcw size={15} /> Limpar
                </button>
              ) : null}
              <button
                type="button"
                onClick={() => setShowAdvanced((value) => !value)}
                className="inline-flex h-11 items-center gap-2 border border-black/10 bg-black px-4 text-xs font-semibold uppercase tracking-[.16em] text-white transition hover:bg-[#2a251a]"
                aria-expanded={showAdvanced}
              >
                Filtros {activeCount ? `(${activeCount})` : ""}
                <ChevronDown
                  size={16}
                  className={`transition ${showAdvanced ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          </div>

          <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
            {filters.category.map((category) => {
              const selected = active.category === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setFilter("category", category)}
                  className={`min-h-12 shrink-0 border px-4 text-left text-sm font-medium transition sm:px-5 ${
                    selected
                      ? "border-black bg-black text-white shadow-[0_18px_44px_rgba(0,0,0,.18)]"
                      : "border-black/10 bg-[#f7f6f2] text-black/64 hover:border-[#967741] hover:text-black"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <AnimatePresence initial={false}>
            {showAdvanced ? (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.24, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div className="mt-5 grid gap-4 border-t border-black/10 pt-5 md:grid-cols-2 xl:grid-cols-4">
                  {advancedFilters.map((key) => (
                    <fieldset key={key} className="min-w-0">
                      <legend className="mb-2 text-[11px] font-semibold uppercase tracking-[.18em] text-black/42">
                        {filterLabels[key]}
                      </legend>
                      <div className="flex flex-wrap gap-2">
                        {filters[key].map((value) => {
                          const selected = active[key] === value;
                          return (
                            <button
                              key={value}
                              type="button"
                              onClick={() => setFilter(key, value)}
                              className={`min-h-9 border px-3 text-xs transition ${
                                selected
                                  ? "border-[#967741] bg-[#967741] text-white"
                                  : "border-black/10 bg-white text-black/58 hover:border-black/25 hover:text-black"
                              }`}
                            >
                              {value}
                            </button>
                          );
                        })}
                      </div>
                    </fieldset>
                  ))}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-black/48">
            <span className="font-medium text-black/70">{filtered.length} resultados</span>
            {Object.entries(active)
              .filter(([, value]) => value !== "Todos")
              .map(([key, value]) => (
                <button
                  key={`${key}-${value}`}
                  type="button"
                  onClick={() => setFilter(key as keyof typeof filters, "Todos")}
                  className="inline-flex items-center gap-2 border border-black/10 bg-[#f7f6f2] px-3 py-2 text-black/58 hover:text-black"
                >
                  {filterLabels[key as keyof typeof filters]}: {value}
                  <X size={13} />
                </button>
              ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, index) => (
            <motion.article
              key={product.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: Math.min(index * 0.04, 0.24) }}
              className="group border border-black/8 bg-white"
            >
              <div className="relative aspect-[4/4.4] overflow-hidden bg-neutral-900">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 92vw, 30vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/5 to-transparent opacity-90" />
                <div className="absolute right-3 top-3 flex gap-2">
                  <button
                    type="button"
                    onClick={() => toggleFavorite(product.slug)}
                    className="icon-button"
                    aria-label="Favoritar produto"
                  >
                    <Heart size={17} fill={favorites.includes(product.slug) ? "currentColor" : "none"} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setQuickView(product)}
                    className="icon-button"
                    aria-label="Visualizacao rapida"
                  >
                    <Eye size={17} />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs uppercase tracking-[.22em] text-[#dcc486]">{product.category}</p>
                  <h3 className="mt-2 text-2xl font-semibold">{product.name}</h3>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-px bg-black/8 text-xs">
                {[product.temperature, product.power, product.technology].map((item) => (
                  <span key={item} className="bg-white px-4 py-3 text-black/60">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {quickView ? (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-5 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              className="grid max-h-[90vh] w-full max-w-4xl overflow-auto bg-[#101010] text-white md:grid-cols-[1fr_.9fr]"
            >
              <div className="relative min-h-[320px]">
                <Image src={quickView.image} alt={quickView.name} fill sizes="50vw" className="object-cover" />
              </div>
              <div className="p-6 sm:p-9">
                <button
                  type="button"
                  className="mb-8 ml-auto flex text-white/70 hover:text-white"
                  onClick={() => setQuickView(null)}
                  aria-label="Fechar"
                >
                  <X />
                </button>
                <p className="text-xs uppercase tracking-[.24em] text-[#dcc486]">{quickView.category}</p>
                <h3 className="mt-3 text-4xl font-semibold">{quickView.name}</h3>
                <p className="mt-5 leading-7 text-white/65">
                  {quickView.material}, acabamento {quickView.color.toLowerCase()} e luz {quickView.temperature}
                  para composicoes residenciais e comerciais de alto padrao.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-white/72">
                  {[quickView.lumens, quickView.dimensions, quickView.warranty, quickView.priceLabel].map((item) => (
                    <span key={item} className="border border-white/10 p-3">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

export default function CatalogExperience() {
  return (
    <QueryClientProvider client={queryClient}>
      <Catalog />
    </QueryClientProvider>
  );
}
