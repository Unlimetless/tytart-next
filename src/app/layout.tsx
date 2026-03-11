import { client } from '@/sanity/lib/client'
import { navigationQuery, siteSettingsQuery, headerSettingsQuery } from '@/sanity/lib/queries'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { Outfit, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";
import { urlFor } from '@/sanity/lib/image';

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tytart.com";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await client.fetch(siteSettingsQuery);
  const seo = settings?.seoGlobals;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: seo?.metaTitle || "TytArt | Premium Lüks İnşaat & Tadilat",
      template: "%s | TytArt",
    },
    description: seo?.metaDescription || "İstanbul'da lüks inşaat, premium tadilat ve iç mimari tasarım hizmetleri.",
    keywords: seo?.keywords || ["inşaat", "tadilat", "mimar"],
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    openGraph: {
      type: "website",
      locale: "tr_TR",
      url: SITE_URL,
      siteName: "TytArt",
      images: seo?.shareImage ? [{ url: urlFor(seo.shareImage).url() }] : [],
    }
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch data on the server
  const [settings, nav, header] = await Promise.all([
    client.fetch(siteSettingsQuery),
    client.fetch(navigationQuery),
    client.fetch(headerSettingsQuery)
  ]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": SITE_URL,
    name: "TytArt",
    description: settings?.seoGlobals?.metaDescription || "İstanbul'da lüks inşaat, premium tadilat ve iç mimari tasarım hizmetleri.",
    url: SITE_URL,
    telephone: settings?.phone,
    email: settings?.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "İstanbul",
      addressCountry: "TR",
      streetAddress: settings?.address
    },
    sameAs: settings?.socialLinks?.map((s: any) => s.url) || []
  };

  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${outfit.variable} ${playfair.variable} antialiased bg-background text-white selection:bg-primary selection:text-secondary`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar
          menuItems={nav?.items}
          settings={settings}
          styling={nav?.styling}
          headerSettings={header}
        />
        {children}
        <Footer settings={settings} />
      </body>
    </html>
  );
}
