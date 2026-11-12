
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Orizon Soluções | Tecnologia para empresas",
    template: "%s | Orizon Soluções",
  },
  description:
    "Soluções em tecnologia para empresas: suporte técnico, infraestrutura de redes, CFTV, desenvolvimento de sistemas e criação de websites.",
  applicationName: "Orizon Soluções",
  keywords: [
    "Orizon Soluções",
    "suporte técnico",
    "infraestrutura de TI",
    "redes de computadores",
    "manutenção de computadores",
    "CFTV",
    "câmeras de segurança",
    "desenvolvimento de sistemas",
    "criação de websites",
    "tecnologia para empresas",
  ],
  authors: [{ name: "Orizon Soluções" }],
  creator: "Orizon Soluções",
  publisher: "Orizon Soluções",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Orizon Soluções | Tecnologia para empresas",
    description:
      "Tecnologia, conectividade e inovação para pequenas empresas. Conheça as soluções da Orizon.",
    siteName: "Orizon Soluções",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Orizon Soluções | Tecnologia para empresas",
    description:
      "Soluções em tecnologia, conectividade e inovação para pequenas empresas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
