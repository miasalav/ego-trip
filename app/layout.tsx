// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import { Raleway } from "next/font/google";

import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const garamond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  variable: "--font-raleway", 
});

export const metadata: Metadata = {
  title: "Ego Trip",
  description: "Seems like your ego deserves to trip. Start with a question and find your answer, get really silly and laugh ‘til you cry, fall in love with he or she or they or you, maybeeee feel how good it feels to be in this part of the simulation where the October sky in Montreal is so so beautiful, beautiful, & blue, remember BOOT, remember who you wanted to be when you were 7 and be that, play, cuddle, dream, and then do all three in reverse. It’s that sort of vibe - y’know?",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${garamond.variable} ${raleway.variable}  antialiased`} 
      >
       {children}
      </body>
    </html>
  );
}
