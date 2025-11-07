import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Playfair_Display, Rubik } from "next/font/google";

import Footer from "@/components/site-footer";
import Header from "@/components/site-header.client";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    default: "Oliva Italian Restaurant – Pizza & Pasta in Amman",
    template: "%s – Oliva Italian Restaurant",
  },
  description:
    "Since 2011, Oliva Pizza and Pasta has been serving authentic Italian cuisine in the heart of Amman. With locations in Jabal Al-Lweibdeh and Shmeisani, Oliva offers clay-oven pizzas, handmade pasta, and fresh seasonal salads — all crafted with care and local rhythm.",
  openGraph: {
    title: "Oliva Italian Restaurant – Pizza & Pasta in Amman",
    description:
      "Oliva Pizza and Pasta serves authentic Italian food in Jabal Al-Lweibdeh and Shmeisani, Amman. Since 2011, Oliva has been known for clay-oven pizzas, handcrafted pasta, and genuine hospitality.",
    url: siteUrl,
    siteName: "Oliva Italian Restaurant",
    locale: "en_JO",
    type: "website",
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} ${rubik.className} ${playfair.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
