import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = "https://recanto-anjos-peludos.example.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ajude Joaquim a Voltar a Andar | Recanto Anjos Peludos",
  description:
    "Joaquim foi espancado e abandonado, e hoje luta contra a dor. Ajude a arrecadar R$ 1.400 para custear sua cirurgia e dar a ele a chance de voltar a andar.",
  keywords: [
    "doação",
    "resgate animal",
    "cachorro",
    "Joaquim",
    "Recanto Anjos Peludos",
    "vaquinha",
    "Instituto do Amor",
  ],
  authors: [{ name: "Recanto Anjos Peludos" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: "Ajude Joaquim a Voltar a Andar ❤️",
    description:
      "Precisamos arrecadar R$ 1.400 para a cirurgia de Joaquim. Cada doação aproxima ele da recuperação.",
    siteName: "Recanto Anjos Peludos",
    images: [
      {
        url: "/images/joaquim-hero.png",
        width: 1200,
        height: 630,
        alt: "Joaquim, cachorro resgatado que precisa de cirurgia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajude Joaquim a Voltar a Andar ❤️",
    description:
      "Precisamos arrecadar R$ 1.400 para a cirurgia de Joaquim. Cada doação faz a diferença.",
    images: ["/images/joaquim-hero.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#1f9d55",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
