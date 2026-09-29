import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fiandev.dev"),
  title: {
    default: "FIANDEV — Alham Maesanjaya // Informatics & Data Systems",
    template: "%s — FIANDEV",
  },
  description:
    "Portfolio of Alham Maesanjaya (FIANDEV) — informatics undergraduate building data-driven systems, blockchain research, and mobile applications.",
  keywords: [
    "Alham Maesanjaya",
    "FIANDEV",
    "Informatics",
    "Data Analyst",
    "Data Science",
    "Blockchain",
    "Flutter",
    "Portfolio",
  ],
  authors: [{ name: "Alham Maesanjaya", url: "https://github.com/fiannnn9090" }],
  creator: "Alham Maesanjaya",
  openGraph: {
    title: "FIANDEV — Alham Maesanjaya // Informatics & Data Systems",
    description:
      "Informatics undergraduate translating data, algorithms, and distributed systems into reliable software.",
    url: "https://fiandev.dev",
    siteName: "FIANDEV",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FIANDEV — Alham Maesanjaya",
    description: "Informatics undergraduate // Data & Distributed Systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      id="top"
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full scroll-smooth antialiased`}
    >
      <body className="bg-surface font-body text-on-surface flex min-h-full flex-col">
        <Navbar />
        <main id="main" className="w-full flex-1 overflow-x-hidden pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
