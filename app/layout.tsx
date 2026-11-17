import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, Montserrat } from "next/font/google"
import "./globals.css"

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
})

const sans = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Conciso | Studio de Imagem Masculina · Palmas, TO",
  description:
    "Cortes modernos, barba, consultoria de imagem e consultoria visagista em Palmas – TO. Sua imagem, com intenção. Agende pelo WhatsApp.",
  openGraph: {
    title: "Conciso | Studio de Imagem Masculina",
    description:
      "Sua imagem fala por você. Cortes, barba, consultoria de imagem e visagismo em Palmas – TO.",
    locale: "pt_BR",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-brand-black font-sans text-brand-ivory antialiased">
        {children}
      </body>
    </html>
  )
}
