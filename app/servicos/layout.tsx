import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Conheça os serviços da Orizon Soluções: suporte técnico, infraestrutura de redes, CFTV, desenvolvimento de sistemas e criação de websites.",
};

export default function ServicosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}