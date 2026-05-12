import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geistSans = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nikhil Khullar - UI/UX Designer & Frontend Developer",
  description:
    "Portfolio of Nikhil Khullar, a BCA student and UI/UX designer specializing in responsive web design, frontend development, and design systems. Located in Mohali, Punjab.",
  keywords: "UI/UX designer, frontend developer, web design, responsive design, Figma, portfolio, Mohali",
  authors: [{ name: "Nikhil Khullar" }],
  openGraph: {
    title: "Nikhil Khullar - UI/UX Designer & Frontend Developer",
    description: "Explore my portfolio featuring innovative UI/UX designs and responsive web projects.",
    type: "website",
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${_geistSans.className} antialiased`}>{children}</body>
    </html>
  )
}
