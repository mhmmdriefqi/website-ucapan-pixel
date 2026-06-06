import type { Metadata } from "next";
import { Inter, Press_Start_2P } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const pixelFont = Press_Start_2P({
  weight: "400",
  variable: "--font-pixel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A Special Message For You",
  description: "A digital pixel art greeting and story full of memories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${pixelFont.variable} antialiased dark`}
    >
      <body className="bg-neutral-950 text-neutral-50 font-sans min-h-screen overflow-x-hidden selection:bg-pink-500/30 selection:text-pink-100">
        {children}
      </body>
    </html>
  );
}
