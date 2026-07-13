import { MicrofrontendShell } from "@/components/MicrofrontendShell";
import { products } from "@/data/products";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Nitrolux",
    description:
      "Showroom digital premium de lustres decorativos, pendentes LED, iluminacao arquitetonica e luminarias para interiores modernos.",
    url: "https://nitrolux-studio.example",
    image: products[0].image,
    makesOffer: products.map((product) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: product.name,
        category: product.category,
        material: product.material,
        image: product.image,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MicrofrontendShell />
    </>
  );
}
