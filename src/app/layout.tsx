import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Webapp React - KearneyTech.com",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex direction-col">
          <Link href="/">Home</Link>
          <Link href="/cube">Cube</Link>
          <Link href="/flashCards">Flash Cards</Link>
          <Link href="/clock">Clock</Link>
          <Link href="/questions">Questions</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
