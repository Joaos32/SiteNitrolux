export type Product = {
  slug: string;
  name: string;
  category: string;
  material: string;
  color: string;
  room: string;
  style: string;
  temperature: string;
  power: string;
  technology: "LED" | "Convencional";
  lumens: string;
  dimensions: string;
  warranty: string;
  priceLabel: string;
  image: string;
  scene: string;
};

export const products: Product[] = [
  {
    slug: "aurea-ring-chandelier",
    name: "Aurea Ring Chandelier",
    category: "Lustre decorativo",
    material: "Aluminio e cristal",
    color: "Dourado suave",
    room: "Living",
    style: "Luxury minimalism",
    temperature: "3000K",
    power: "72W",
    technology: "LED",
    lumens: "5.800 lm",
    dimensions: "120 x 38 cm",
    warranty: "5 anos",
    priceLabel: "Projeto sob consulta",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1100&q=78",
    scene:
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=76",
  },
  {
    slug: "linea-architectural-pendant",
    name: "Linea Architectural Pendant",
    category: "Pendente LED",
    material: "Aluminio usinado",
    color: "Preto fosco",
    room: "Jantar",
    style: "Arquitetonico",
    temperature: "2700K",
    power: "48W",
    technology: "LED",
    lumens: "3.900 lm",
    dimensions: "160 x 6 cm",
    warranty: "5 anos",
    priceLabel: "A partir de R$ 2.890",
    image:
      "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?auto=format&fit=crop&w=1100&q=78",
    scene:
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=76",
  },
  {
    slug: "halo-led-mirror",
    name: "Halo LED Mirror",
    category: "Espelho LED",
    material: "Vidro lapidado",
    color: "Branco clean",
    room: "Banho",
    style: "Contemporaneo",
    temperature: "4000K",
    power: "36W",
    technology: "LED",
    lumens: "2.400 lm",
    dimensions: "90 x 90 cm",
    warranty: "3 anos",
    priceLabel: "A partir de R$ 1.740",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1100&q=78",
    scene:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=76",
  },
  {
    slug: "axis-wall-washer",
    name: "Axis Wall Washer",
    category: "Iluminacao arquitetonica",
    material: "Aluminio anodizado",
    color: "Grafite",
    room: "Galeria",
    style: "Minimalista",
    temperature: "3000K",
    power: "24W",
    technology: "LED",
    lumens: "2.050 lm",
    dimensions: "60 x 4 cm",
    warranty: "5 anos",
    priceLabel: "A partir de R$ 980",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1100&q=78",
    scene:
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=1200&q=76",
  },
  {
    slug: "vesta-glass-pendant",
    name: "Vesta Glass Pendant",
    category: "Luminaria premium",
    material: "Vidro fumê",
    color: "Dourado suave",
    room: "Suite",
    style: "Editorial",
    temperature: "2700K",
    power: "18W",
    technology: "LED",
    lumens: "1.250 lm",
    dimensions: "32 x 42 cm",
    warranty: "3 anos",
    priceLabel: "A partir de R$ 1.290",
    image:
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=1100&q=78",
    scene:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=76",
  },
  {
    slug: "noir-table-lamp",
    name: "Noir Table Lamp",
    category: "Iluminacao decorativa",
    material: "Marmore e metal",
    color: "Preto fosco",
    room: "Office",
    style: "Contemporaneo",
    temperature: "3000K",
    power: "12W",
    technology: "LED",
    lumens: "820 lm",
    dimensions: "22 x 54 cm",
    warranty: "3 anos",
    priceLabel: "A partir de R$ 760",
    image:
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1100&q=78",
    scene:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=76",
  },
];

export const filters = {
  category: ["Todos", ...Array.from(new Set(products.map((item) => item.category)))],
  material: ["Todos", ...Array.from(new Set(products.map((item) => item.material)))],
  color: ["Todos", ...Array.from(new Set(products.map((item) => item.color)))],
  room: ["Todos", ...Array.from(new Set(products.map((item) => item.room)))],
  style: ["Todos", ...Array.from(new Set(products.map((item) => item.style)))],
  temperature: ["Todos", ...Array.from(new Set(products.map((item) => item.temperature)))],
  power: ["Todos", ...Array.from(new Set(products.map((item) => item.power)))],
  technology: ["Todos", "LED", "Convencional"],
};
