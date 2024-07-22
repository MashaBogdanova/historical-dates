import "./globals.scss";

import type { Metadata } from "next";
import { Bebas_Neue, PT_Sans } from "next/font/google";
import React from "react";

import { DatesProvider } from "@/context/DatesContext";

const fontPrimary = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-primary",
});

const fontSecondary = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-secondary",
});

export const metadata: Metadata = {
  title: "Исторические даты",
  description:
    "Важные исторические события, произошедшие в разные периоды времени",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontPrimary.variable} ${fontSecondary.variable}`}>
        <DatesProvider>{children}</DatesProvider>
      </body>
    </html>
  );
}
