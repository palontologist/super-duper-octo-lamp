import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { ClientWrapper } from "@/components/ui/client-wrapper";
import AdsConsent from '@/components/ui/ads-consent';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

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

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Next metadata for SEO and AEO optimization
export const metadata: Metadata = {
  title: "frontforumfocus - Mission Alignment & Impact Tracking for Founders | Greta",
  description: "frontforumfocus shows founders and teams—step by step—which activities truly advance your mission. Track daily work, measure impact, and build with purpose and clarity. AI-powered mission alignment for mission-driven founders, NGOs, and social enterprises.",
  keywords: [
    "founder productivity",
    "mission alignment",
    "impact tracking",
    "mission-driven founders",
    "social enterprise tools",
    "NGO management",
    "impact measurement",
    "founder focus",
    "purpose-driven business",
    "activity tracking",
    "mission analytics",
    "founder tools",
    "startup productivity",
    "impact reporting",
  ],
  authors: [{ name: "frontforumfocus" }],
  icons: {
    icon: "/s.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://frontforumfocus.com",
    title: "frontforumfocus - Mission Alignment & Impact Tracking for Founders",
    description: "Track daily activities, measure impact, and build with purpose. AI-powered tools for mission-driven founders and teams.",
    siteName: "frontforumfocus",
  },
  twitter: {
    card: "summary_large_image",
    title: "frontforumfocus - Mission Alignment for Founders",
    description: "Track daily activities, measure impact, and build with purpose. AI-powered tools for mission-driven founders.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111111",
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
        <meta name="google-adsense-account" content="ca-pub-5890845623424973" />
        {/* Structured Data for AEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "frontforumfocus",
              "alternateName": "Front Forum Focus",
              "url": "https://frontforumfocus.com",
              "logo": "https://frontforumfocus.com/s.png",
              "description": "A platform helping mission-driven founders align their daily activities with core mission through AI-powered impact tracking and measurement tools.",
              "sameAs": [
                "https://linkedin.com/company/frontforumfocus",
                "https://x.com/frontforumfocus",
                "https://youtube.com/@frontforumfocus",
                "https://instagram.com/frontforumfocus",
                "https://21givenchy.substack.com"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "hello@frontforumfocus.com",
                "contactType": "Customer Support"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Greta by frontforumfocus",
              "applicationCategory": "ProductivityApplication",
              "url": "https://greta-v2.vercel.app",
              "offers": {
                "@type": "Offer",
                "price": "15",
                "priceCurrency": "USD",
                "billingDuration": "P1M"
              },
              "description": "AI-powered mission alignment and impact tracking tool for founders, teams, and social enterprises.",
              "featureList": [
                "Daily activity tracking",
                "Real-time mission alignment scoring",
                "Automated impact reporting",
                "Integration with WhatsApp, Slack, Google Calendar, Notion",
                "Team collaboration and progress tracking"
              ]
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased bg-[#111] text-white`}>
        <ClientWrapper>
          {children}
          <AdsConsent />
        </ClientWrapper>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
