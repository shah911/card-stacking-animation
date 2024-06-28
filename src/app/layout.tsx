import type { Metadata } from "next";
import { Forum } from "next/font/google";
import "./globals.css";

const forum = Forum({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Card Stacking Animtion",
  description: "Created by Framer Motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={forum.className}>{children}</body>
    </html>
  );
}
