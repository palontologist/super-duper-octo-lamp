import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClientWrapper } from "@/components/ui/client-wrapper";

// Optimize font loading
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Add display swap for better loading performance
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap", // Add display swap for better loading performance
});

// Next metadata for SEO
export const metadata: Metadata = {
  title: "Sustainability Impact Platform",
  description: "Track your personal and organizational sustainability impact across UN SDGs",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#111111",
  icons: {
    icon: "/s.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/s.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#111] text-white`}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
