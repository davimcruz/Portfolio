import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Davi Machado - Desenvolvedor Frontend",
  description: "Davi Machado Portfólio Frontend",
  keywords: [
    "Davi Machado",
    "Desenvolvedor Frontend",
    "Portfólio",
    "Desenvolvimento Web",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/profile.jpg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
