import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre nós",
  description:
    "Conheça a Orizon Soluções, uma iniciativa voltada à tecnologia, conectividade e inovação para pequenas empresas.",
};

export default function SobreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}