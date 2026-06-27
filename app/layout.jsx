import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://krishan-portfolio-tau.vercel.app";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Krishan Arpidani — Engineer",
    template: "%s · Krishan Arpidani",
  },
  description:
    "Krishan Arpidani — Package Reliability Operation Engineer at Micron, building software, data, and ML/AI tools. Electrical & Electronics engineer who ships.",
  keywords: [
    "Krishan Arpidani",
    "Reliability Engineer",
    "Software Engineer",
    "Machine Learning",
    "Data Analysis",
    "Micron",
    "Next.js",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: "Krishan Arpidani" }],
  creator: "Krishan Arpidani",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Krishan Arpidani — Engineer",
    description:
      "Package Reliability Operation Engineer at Micron, building software, data, and ML/AI tools.",
    siteName: "Krishan Arpidani",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishan Arpidani — Engineer",
    description:
      "Package Reliability Operation Engineer at Micron, building software, data, and ML/AI tools.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-[100dvh] bg-ink text-fg">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-ink-900"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
