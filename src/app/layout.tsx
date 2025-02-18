import './global.css'
import type { Metadata } from 'next'
import { Montserrat, Oxanium } from "next/font/google"

const oxanium = Oxanium({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-oxanium",
})

const montserrat = Montserrat({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: 'Devstage',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className={`${oxanium.variable} ${montserrat.variable} anti-aliasing`}>
      <body>{children}</body>
    </html>
  )
}
