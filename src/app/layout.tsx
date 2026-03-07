import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import { siteSettingsQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "TytArt | Premium Lüks İnşaat & Tadilat",
  description: "Modern mimari, lüks dekorasyon ve anahtar teslim tadilat çözümleri.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await client.fetch(siteSettingsQuery);

  return (
    <html lang="tr">
      <body className="antialiased bg-background">
        <Navbar menuItems={settings?.mainMenu} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
