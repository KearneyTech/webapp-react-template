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
        <div className="flex flex-col">
          <Link href="/" className="underline cursor-pointer">Home</Link>
          <Link href="/cube" className="underline cursor-pointer">Cube</Link>
          <Link href="/flashCards" className="underline cursor-pointer">Flash Cards</Link>
          <Link href="/clock" className="underline cursor-pointer">Clock</Link>
          <Link href="/questions" className="underline cursor-pointer">Questions</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
