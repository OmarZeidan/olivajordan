import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Playfair_Display, Rubik } from "next/font/google";

import Footer from "@/components/site-footer";
import Header from "@/components/site-header";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    default: "Oliva Italian Restaurant – Amman, Jabal Al Lweibdeh",
    template: "%s | Oliva Italian Restaurant",
  },
  description:
    "Since 2011, Oliva Italian Restaurant in Jabal Al Lweibdeh has served authentic Italian dishes — clay-oven pizzas, fresh pasta, and seasonal salads crafted with local warmth.",
  openGraph: {
    title: "Oliva Italian Restaurant – Amman, Jabal Al Lweibdeh",
    description:
      "Authentic Italian cuisine in the heart of Amman — clay-oven pizzas, handmade pasta, and warm hospitality since 2011.",
    url: siteUrl,
    siteName: "Oliva Restaurant",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-oliva.jpg",
        width: 1200,
        height: 630,
        alt: "Oliva Italian Restaurant in Jabal Al Lweibdeh, Amman",
      },
    ],
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
