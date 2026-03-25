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
  metadataBase: new URL("https://4redd.com"),
  title: "REDD Studio | Premium Yaratıcı Stüdyolar",
  description: "Ciddi yaratıcılar için ciddi bir yer. Müzik prodüksiyonu, DJ, podcast ve fotoğraf stüdyoları.",
  keywords: ["stüdyo", "müzik prodüksiyonu", "DJ", "podcast", "fotoğraf stüdyosu", "İstanbul"],
  openGraph: {
    title: "REDD Studio | Premium Yaratıcı Stüdyolar",
    description: "Ciddi yaratıcılar için ciddi bir yer.",
    url: "https://4redd.com",
    siteName: "REDD Studio",
    images: [
      {
        url: "/brand/redd-logo-share.png",
        width: 1600,
        height: 1600,
        alt: "REDD Studio Logo",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "REDD Studio | Premium Yaratıcı Stüdyolar",
    description: "Ciddi yaratıcılar için ciddi bir yer.",
    images: ["/brand/redd-logo-share.png"],
  },
  icons: {
    icon: "/brand/redd-logo-share.png",
    shortcut: "/brand/redd-logo-share.png",
    apple: "/brand/redd-logo-share.png",
  },
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

