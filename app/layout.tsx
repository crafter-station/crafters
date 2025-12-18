import type React from "react"
import type { Metadata } from "next"
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

export const metadata: Metadata = {
  title: "Crafters by Crafter Station | Learn by Shipping",
  description:
    "A free, community-driven program to help people build real products with modern web and AI. Build skills. Ship projects. Create opportunity.",
  generator: "v0.app",
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
