import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Davi Machado - Desenvolvedor Frontend",
  description:
    "Davi Machado Portfólio Frontend",
  author: "Davi Machado",
  keywords: [
    "Davi Machado",
    "Desenvolvedor Frontend",
    "Portfólio",
    "Desenvolvimento Web",
  ],
  image: "/images/cover.jpg", 
  url: "https://davimachado.cloud", 
  siteName: "Portfólio de Davi Machado", 
  type: "website", 
  locale: "pt_BR", 
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
