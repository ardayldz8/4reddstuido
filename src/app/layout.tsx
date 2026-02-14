import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "./globals.css";
import Header from "@/components/layout/Header";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "REDD Studio | Premium Yaratıcı Stüdyolar",
  description: "Ciddi yaratıcılar için ciddi bir yer. Müzik prodüksiyonu, DJ, podcast ve fotoğraf stüdyoları.",
  keywords: ["stüdyo", "müzik prodüksiyonu", "DJ", "podcast", "fotoğraf stüdyosu", "İstanbul"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={outfit.variable}>
      <body className="antialiased">
        <AppRouterCacheProvider>
          <Header />
          <main>{children}</main>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

