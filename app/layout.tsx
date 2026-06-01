import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amos Amos | Founder & Financial Infrastructure Builder",
  description: "Founder of Vaulta. Building modern treasury systems, financial infrastructure, and operational software for the future.",
  metadataBase: new URL("https://amosamos.com"),
  openGraph: {
    title: "Amos Amos | Founder & Financial Infrastructure Builder",
    description: "Building modern treasury systems and financial infrastructure",
    url: "https://amosamos.com",
    siteName: "Amos Amos",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amos Amos | Founder & Financial Infrastructure Builder",
    description: "Building modern treasury systems and financial infrastructure",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050505]">{children}</body>
    </html>
  );
}
