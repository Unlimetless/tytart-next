import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "TytArt | Lüks İnşaat, Tadilat ve Tasarım",
  description: "TytArt ile hayalinizdeki mekanları profesyonel dokunuşlarla inşa ediyoruz. İnşaat, tadilat ve dekorasyonda lüks ve hızın adresi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
