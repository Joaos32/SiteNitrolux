import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {};
  }

  return {
    title: product.name,
    description: `${product.category} em ${product.material}, acabamento ${product.color}, ${product.temperature}, ${product.power}.`,
    alternates: {
      canonical: `/produtos/${product.slug}`,
    },
    openGraph: {
      title: product.name,
      description: product.priceLabel,
      images: [{ url: product.image, width: 1200, height: 900, alt: product.name }],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.image,
    category: product.category,
    material: product.material,
    color: product.color,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "BRL",
      description: product.priceLabel,
    },
  };

  return (
    <main className="min-h-screen bg-[#090909] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:py-16">
        <div className="relative min-h-[72vh] overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 1024px) 92vw, 58vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
        <div className="self-center">
          <Link href="/#catalogo" className="text-xs uppercase tracking-[.22em] text-[#dcc486]">
            Voltar ao catalogo
          </Link>
          <h1 className="mt-6 text-5xl font-semibold leading-tight sm:text-7xl">{product.name}</h1>
          <p className="mt-6 text-lg leading-8 text-white/68">
            {product.category} para {product.room.toLowerCase()}, com acabamento {product.color.toLowerCase()},
            material {product.material.toLowerCase()} e tecnologia {product.technology}.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-white/72">
            {[
              product.lumens,
              product.temperature,
              product.power,
              product.dimensions,
              product.warranty,
              product.priceLabel,
            ].map((item) => (
              <span key={item} className="border border-white/10 p-4">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
