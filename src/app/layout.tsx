import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-editorial",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nitrolux-studio.example"),
  title: {
    default: "Nitrolux | Iluminacao premium para arquitetura",
    template: "%s | Nitrolux",
  },
  description:
    "Website premium de lustres decorativos, pendentes LED, iluminacao arquitetonica, luminarias sofisticadas e espelhos LED para interiores modernos.",
  keywords: [
    "lustres decorativos",
    "pendentes LED",
    "iluminacao arquitetonica",
    "luminarias premium",
    "espelhos LED",
    "iluminacao decorativa",
  ],
  openGraph: {
    title: "Nitrolux",
    description: "Iluminacao que transforma ambientes em experiencias.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Showroom premium de iluminacao",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitrolux",
    description: "Iluminacao premium para interiores modernos.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
