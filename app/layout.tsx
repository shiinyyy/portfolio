import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import MouseHighlight from "@/components/mouse-highlight";
import PreloaderWrapper from "./PreloaderWrapper";

const notoSans = Noto_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Minh Do - Portfolio",
  description: "Personal portfolio of Minh Do, a passionate Engineering graduate from University of Technology Sydney",
  icons: [
    { rel: "icon", url: "/favicon.svg", type: "image/svg+xml" },
    { rel: "icon", url: "/favicon.ico", type: "image/x-icon" },
    { rel: "shortcut icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/favicon.ico" }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${notoSans.variable} antialiased`}>
        <PreloaderWrapper />
        <MouseHighlight />
        {children}
      </body>
    </html>
  );
}
