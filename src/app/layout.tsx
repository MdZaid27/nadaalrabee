import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nada al Rabee Foods",
  description:
    "Nada al Rabee Foods — quality food manufacturing and distribution across Horeca and Retail.",
  icons: {
    icon: "/Nada Al Rabee Logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Sidebar />
        {children}
        <footer id="contact" className="mt-0 w-full bg-brand text-white">
          <div className="mx-auto max-w-6xl px-8 md:px-16 py-14 grid sm:grid-cols-3 gap-8">
            <div>
              <div className="mb-6 relative w-24 h-24">
                <Image
                  src="/Nada Al Rabee Logo.svg"
                  alt="Nada Al Rabee Foods Logo"
                  fill
                  className="object-contain drop-shadow-lg rounded-full"
                />
              </div>
              <div className="text-2xl font-bold tracking-wide mb-2">Nada al Rabee Foods</div>
              <p className="text-sm text-zinc-200 leading-relaxed max-w-xs">
                Culinary innovation for a sustainable future.
              </p>
            </div>
            <div>
              <div className="text-lg">Contact</div>
              <ul className="mt-3 space-y-2 text-zinc-200 text-sm">
                <li>Phone: <a href="tel:067673039" className="hover:text-white transition-colors">067673039</a></li>
                <li>Mobile: <a href="tel:0562003579" className="hover:text-white transition-colors">+971 562003579</a></li>
                <li>Email: <a href="mailto:info@nadaalrabeefoods.com" className="hover:text-white transition-colors">info@nadaalrabeefoods.com</a></li>
                <li>Web: <a href="https://www.nadaalrabeefoods.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">www.nadaalrabeefoods.com</a></li>
              </ul>
            </div>
            <div>
              <div className="text-lg">Location</div>
              <p className="mt-3 text-sm text-zinc-200">
                Industrial Area 10, Warehouse 16<br />
                PO:30145 Sharjah- UAE
              </p>
            </div>
          </div>
          <div className="border-t border-white/20">
            <div className="mx-auto max-w-6xl px-8 md:px-16 py-6 flex items-center justify-between text-xs text-zinc-200">
              <span>© 2025 Nada al Rabee Foods</span>
              <span><a href="#">LinkedIn</a></span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
