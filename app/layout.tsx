import { Geist_Mono, Noto_Sans, Oxanium } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { cn } from "@/lib/utils";
import PersonSchema from "./person-schema";
import Navbar from "@/components/shared/Navbar";

const oxaniumHeading = Oxanium({ subsets: ['latin'], variable: '--font-heading' });
const notoSans = Noto_Sans({ subsets: ['latin'], variable: '--font-sans' })
const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com"),
  title: {
    default: "Imran Hossain | Full Stack Developer",
    template: "%s | Imran Hossain",
  },
  description:
    "Imran Hossain is a Full Stack Developer specializing in React, Next.js, Node.js, Express, PostgreSQL, and Prisma. Explore my projects, skills, and experience.",
  keywords: [
    "Imran Hossain",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "MERN Stack Developer Bangladesh",
  ],
  authors: [{ name: "Imran Hossain" }],
  creator: "Imran Hossain",
  openGraph: {
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: "Imran Hossain | Full Stack Developer",
    description:
      "Full Stack Developer building modern, scalable web apps with React, Next.js, Node.js & PostgreSQL.",
    siteName: "Imran Hossain Portfolio",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Imran Hossain | Full Stack Developer",
    description: "Full Stack Developer building modern web experiences.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", notoSans.variable, oxaniumHeading.variable)}
    >
      <body>
        <PersonSchema />
        <Navbar />
        {children}
      </body>
    </html>
  )
}