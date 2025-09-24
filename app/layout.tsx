import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Nitvon ($NIT) - Community-Driven Solana Token",
  description:
    "Join the Nitvon community. A decentralized, community-driven token built on Solana blockchain offering fast, low-cost transactions and collective growth.",
  generator: "v0.app",
  keywords: "Nitvon, NIT, Solana, cryptocurrency, token, blockchain, community, DeFi",
  openGraph: {
    title: "Nitvon ($NIT) - Community-Driven Solana Token",
    description: "Join the Nitvon community. A decentralized, community-driven token built on Solana blockchain.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitvon ($NIT) - Community-Driven Solana Token",
    description: "Join the Nitvon community. A decentralized, community-driven token built on Solana blockchain.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
      <body>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
