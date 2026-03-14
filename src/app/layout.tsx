import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";

const halant = Halant({
  variable: "--font-halant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MoMo Café - Luxury Buffet Restaurant Bengaluru",
  description: "Bengaluru's premier all-day buffet dining at Courtyard by Marriott. Global cuisine, live stations, artisanal coffee & warm hospitality. 4.0★ rated.",
  keywords: "buffet restaurant Bengaluru, luxury dining Bengaluru, breakfast buffet, lunch buffet Marathahalli, Courtyard Marriott restaurant",
  metadataBase: new URL("https://momo-cafe-bengaluru.com"),
  alternates: {
    canonical: "https://momo-cafe-bengaluru.com",
  },
  openGraph: {
    title: "MoMo Café - Bengaluru's Most Loved Luxury Buffet",
    description: "Experience global cuisine, live cooking stations, and premium hospitality at MoMo Café.",
    url: "https://momo-cafe-bengaluru.com",
    siteName: "MoMo Café",
    type: "website",
    images: [
      {
        url: "https://momo-cafe-bengaluru.com/og-hero.jpg",
        alt: "MoMo Café luxury buffet spread",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MoMo Café - Luxury Buffet in Bengaluru",
    description: "Global flavors, live stations, premium coffee & warm hospitality. Open 24/7.",
    images: ["https://momo-cafe-bengaluru.com/twitter-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body
          className={`${halant.variable} ${inter.variable} ${manrope.variable} antialiased`}
        >
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
          }}
        />
        </body>
      </ServiceWrapper>
    </html>
  );
}