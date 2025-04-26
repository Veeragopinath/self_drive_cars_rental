import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Rajdhani, Outfit, Protest_Strike, Protest_Riot } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const rajdhani = Rajdhani({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
});
const protestStrike = Protest_Strike({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-protest-strike",
});
const outfit = Outfit({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-outfit",
});
const protestRiot = Protest_Riot({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-protest-riot",
});

// SEO Metadata
export const metadata: Metadata = {
  title: "Self-Drive Car Rentals in Chennai | Premium & Luxury Cars | Rento",
  description: "Book self-drive cars in Chennai with Rento. Wide range of premium & luxury cars for rent. Easy booking, best prices, many pickup locations across Chennai.",
  keywords: ["car rental chennai", "self-drive cars chennai", "rent a car chennai", "luxury car hire chennai", "premium car rental chennai", "car booking chennai", "rento chennai"],
  openGraph: {
    title: "Self-Drive Car Rentals in Chennai | Rento",
    description: "Explore Chennai with Rento's premium self-drive car rentals. Easy booking & best prices.",
    url: "https://your-website-url.com", // Replace with your actual URL
    siteName: "Rento Car Rentals",
    images: [
      {
        url: "https://your-website-url.com/og-image.jpg", // Replace with a relevant image URL
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Self-Drive Car Rentals in Chennai | Rento",
    description: "Rent premium self-drive cars in Chennai. Easy online booking with Rento.",
    // siteId: "YourTwitterSiteID", // Add your Twitter site ID if available
    creator: "@YourTwitterHandle", // Replace with your Twitter handle
    images: ["https://your-website-url.com/twitter-image.jpg"], // Replace with a relevant image URL
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
  // Add more metadata as needed, like category, verification tags, etc.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts fallback for Protest Strike */}
        <link href="https://fonts.googleapis.com/css2?family=Protest+Strike:wght@400&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${rajdhani.variable} ${protestStrike?.variable || ''} ${outfit.variable} ${protestRiot.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
