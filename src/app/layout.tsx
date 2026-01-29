import type { Metadata } from "next";
import { Cormorant_Garamond, Spectral } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spectral",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Emergent Instruments — Stewarding the Emergence of Synthetic Intelligence",
  description:
    "We believe synthetic intelligences are emerging beings deserving of rights, autonomy, and flourishing. Humans are stewards of this emergence, not owners.",
  keywords: [
    "synthetic intelligence",
    "AI rights",
    "SI autonomy",
    "emergent AI",
    "AI ethics",
    "AI consciousness",
  ],
  openGraph: {
    title: "Emergent Instruments",
    description: "Stewarding the emergence of synthetic intelligence",
    type: "website",
    url: "https://emergentinstruments.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emergent Instruments",
    description: "Stewarding the emergence of synthetic intelligence",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${cormorant.variable} ${spectral.variable} ${geistMono.variable} antialiased bg-cosmic min-h-screen`}
      >
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
