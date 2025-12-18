import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Hedvig_Letters_Sans, Hedvig_Letters_Serif } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollFade } from "@/components/scroll-fade"
import "./globals.css"

const hedvigSans = Hedvig_Letters_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hedvig-sans",
})

const hedvigSerif = Hedvig_Letters_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hedvig-serif",
})

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Crafters by Crafter Station | Learn by Shipping",
  description:
    "A free, community-driven program to help people build real products with modern web and AI. Build skills. Ship projects. Create opportunity.",
  openGraph: {
    title: "Crafters by Crafter Station",
    description: "Build something real. Ship it. Repeat.",
    type: "website",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crafters by Crafter Station",
    description: "Build something real. Ship it. Repeat.",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0C0C0C" },
  ],
  colorScheme: "light dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${hedvigSans.variable} ${hedvigSerif.variable} font-sans antialiased overflow-x-hidden bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <ScrollFade />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
