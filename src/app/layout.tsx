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
  title: "Squee & Spoon | Pan-Asian Restaurant, Seawoods",
  description: "A cozy Pan-Asian cafe in Seawoods, Navi Mumbai. Ramen, Bao, Sushi and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        {/* Fixed WhatsApp Button */}
        <a
          href="https://wa.me/918369716726?text=Hi%20Squee%20%26%20Spoon!%20I%27d%20like%20to%20enquire."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#CEAB79] text-[#03202B] font-semibold px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm md:text-base"
        >
          Enquire on WhatsApp
        </a>
      </body>
    </html>
  );
}
