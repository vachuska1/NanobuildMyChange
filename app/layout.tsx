import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/components/language-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NANOBUILD - Innovative Graphene Dispersions & Technology Solutions",
  description:
    "Leading Czech startup specializing in advanced graphene technology, innovative production solutions, and cutting-edge nanomaterials for industrial applications.",
  keywords: [
    "graphene",
    "nanomaterials",
    "graphene dispersions",
    "nanotechnology",
    "advanced materials",
    "Czech Republic",
    "startup",
    "innovation",
    "industrial applications",
    "research",
    "development",
    "2D materials",
    "carbon nanotubes",
    "material science",
  ],
  authors: [{ name: "NANOBUILD" }],
  creator: "NANOBUILD",
  publisher: "NANOBUILD",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nanobuild.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "cs-CZ": "/cs",
      "de-DE": "/de",
      "ru-RU": "/ru",
    },
  },
  openGraph: {
    title: "NANOBUILD - Innovative Graphene Dispersions & Technology Solutions",
    description:
      "Leading Czech startup specializing in advanced graphene technology, innovative production solutions, and cutting-edge nanomaterials for industrial applications.",
    url: "https://nanobuild.com",
    siteName: "NANOBUILD",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "NANOBUILD - Graphene Technology Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NANOBUILD - Innovative Graphene Dispersions",
    description: "Leading Czech startup in advanced graphene technology and nanomaterials for industrial applications.",
    images: ["/images/logo.png"],
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
  verification: {
    google: "f7OEr3SW-7eLiMXx4J6XXcOpWUu24JV0k_l9eqs_kuE",
  },
  category: "technology",
  generator: "Next.js",
  applicationName: "NANOBUILD",
  referrer: "origin-when-cross-origin",
  colorScheme: "light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0891b2" },
    { media: "(prefers-color-scheme: dark)", color: "#0891b2" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#0891b2",
      },
    ],
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#0891b2" />
        <meta name="theme-color" content="#0891b2" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <div className="min-h-screen bg-white">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
