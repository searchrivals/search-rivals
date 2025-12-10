import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// ========================
// DIRECT RELATIVE IMPORTS
// ========================
import Navbar from "../components/Navbar";
import FooterV0 from "../components/layout/Footer.v1";

// ========================
// FONTS
// ========================
const geistSans = localFont({
  variable: "--font-geist-sans",
  display: "swap",
  src: [
    {
      path: "./fonts/Geist-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const geistMono = localFont({
  variable: "--font-geist-mono",
  display: "swap",
  src: [
    {
      path: "./fonts/GeistMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

// ========================
// METADATA
// ========================
export const metadata: Metadata = {
  title: "Search Rivals — AI SEO Agency",
  description:
    "Outrank competitors and own the search with AI-first SEO systems.",
};

// ========================
// ROOT LAYOUT
// ========================
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <Navbar />
        {children}
        <FooterV0 />
      </body>
    </html>
  );
}
