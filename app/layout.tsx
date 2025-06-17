import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Krishnatics Labs - AI Automation Agency | Custom AI Solutions",
  description:
    "Leading AI automation agency specializing in custom AI software, chatbots, agentic AI solutions, corporate training, and enterprise blockchain solutions. Transform your business with AI.",
  keywords:
    "AI automation, artificial intelligence, custom AI software, AI chatbots, machine learning, enterprise AI, blockchain solutions, AI training, agentic AI",
  authors: [{ name: "Krishnatics Labs" }],
  creator: "Krishnatics Labs",
  publisher: "Krishnatics Labs",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://krishnaticslabs.com",
    siteName: "Krishnatics Labs",
    title: "Krishnatics Labs - AI Automation Agency",
    description: "Transform your business with cutting-edge AI automation solutions",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Krishnatics Labs - AI Automation Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishnatics Labs - AI Automation Agency",
    description: "Transform your business with cutting-edge AI automation solutions",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0891b2",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
