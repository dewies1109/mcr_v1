import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Media Center Riau",
  description: "Media center rovinnsi riau yang dikelola Diskominfo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/logo_tb.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
