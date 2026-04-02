import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"

import "../styles/globals.css"
import BackgroundEffects from "@/components/layout/BackgroundEffects"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : new URL("http://localhost:3000")

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Mestre de Obras Valdir Vieira - Construção e Reforma",
    template: "%s | Valdir Vieira",
  },
  description:
    "Construção e reforma com qualidade e prazo. Orçamento rápido via WhatsApp. Atendimento em Colina e região.",
  alternates: {
    canonical: new URL("/", siteUrl).toString(),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: new URL("/", siteUrl).toString(),
    siteName: "Valdir Vieira",
    title: "Mestre de Obras Valdir Vieira - Construção e Reforma",
    description:
      "Construção e reforma com qualidade e prazo. Orçamento rápido via WhatsApp. Atendimento em Colina e região.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mestre de Obras Valdir Vieira - Construção e Reforma",
    description:
      "Construção e reforma com qualidade e prazo. Orçamento rápido via WhatsApp. Atendimento em Colina e região.",
  },
  icons: {
    icon: [
      {
        url: "/img/logo.png",
        type: "image/png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="relative">
        <BackgroundEffects />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}
