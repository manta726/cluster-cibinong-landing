import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geistSans = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

const siteUrl = "https://cluster-cibinong.web.app"
const siteName = "Cluster Cibinong"
const siteDescription = "Cluster nyaman di Cibinong dengan tipe 40 fungsional untuk keluarga muda. Mulai 500 jutaan dengan fasilitas lengkap, lingkungan aman, dan proses KPR dibantu."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cluster Cibinong - Rumah Nyaman Mulai 500 Jutaan",
    template: "%s | Cluster Cibinong"
  },
  description: siteDescription,
  keywords: [
    "cluster cibinong",
    "rumah cibinong",
    "rumah 500 jutaan",
    "perumahan cibinong",
    "cluster bogor",
    "rumah type 40",
    "kpr cibinong",
    "rumah keluarga muda",
    "properti cibinong",
    "rumah dijual cibinong"
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    telephone: true,
    email: false,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: siteName,
    title: "Cluster Cibinong - Rumah Nyaman Mulai 500 Jutaan",
    description: siteDescription,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cluster Cibinong - Perumahan Modern",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cluster Cibinong - Rumah Nyaman Mulai 500 Jutaan",
    description: siteDescription,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "Cluster Cibinong",
              description: siteDescription,
              url: siteUrl,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Cibinong",
                addressRegion: "Bogor",
                addressCountry: "ID",
              },
              areaServed: {
                "@type": "City",
                name: "Cibinong",
              },
              priceRange: "Rp 500.000.000 - Rp 700.000.000",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Rumah Cluster Tipe 40 Cibinong",
              description: "Rumah cluster tipe 40 di Cibinong mulai 500 jutaan",
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "IDR",
                lowPrice: "500000000",
                highPrice: "700000000",
                availability: "https://schema.org/InStock",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.5",
                reviewCount: "10",
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
