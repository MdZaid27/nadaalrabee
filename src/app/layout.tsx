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
  title: "Nada al Rabee Foods",
  description:
    "Nada al Rabee Foods — quality food manufacturing and distribution across Horeca and Retail.",
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
        {children}
        <footer className="mt-0 w-full bg-brand text-white">
          <div className="mx-auto max-w-6xl px-8 md:px-16 py-14 grid sm:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl tracking-wide">Nada al Rabee Foods</div>
              <p className="mt-3 text-sm text-zinc-200">
                Culinary innovation for a sustainable future.
              </p>
            </div>
            <div>
              <div className="text-lg">Contact</div>
              <ul className="mt-3 space-y-2 text-zinc-200 text-sm">
                <li><a href="mailto:info@nadaalrabeefoods.example">info@nadaalrabeefoods.com</a></li>
                <li><a href="#">Discover On Map</a></li>
              </ul>
            </div>
            <div>
              <div className="text-lg">Location</div>
              <p className="mt-3 text-sm text-zinc-200">Dubai — United Arab Emirates</p>
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
