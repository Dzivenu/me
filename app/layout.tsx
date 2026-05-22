import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dzivenu - Full Stack Developer",
  description:
    "Makafui George Dzivenu is a full stack software developer building blockchain infrastructure, financial systems, and modern web applications.",
  metadataBase: new URL("https://dzivenu.me"),
  openGraph: {
    title: "Dzivenu - Full Stack Developer",
    description:
      "Full stack software developer focused on blockchain infrastructure, decentralized organizations, and financial systems.",
    url: "https://dzivenu.me",
    siteName: "Dzivenu",
    type: "website"
  }
};

export const viewport: Viewport = {
  themeColor: "#f4efe4",
  colorScheme: "light"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
