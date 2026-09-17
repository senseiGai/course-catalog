import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Course Catalog",
  description: "Advanced Web Technologies Course Catalog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <header className="sticky top-0 z-10 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
          <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center gap-8">
            <Link href="/" className="font-bold text-xl tracking-tight text-blue-600 dark:text-blue-400">
              Catalog
            </Link>
            <div className="flex gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
              <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
              <Link href="/courses" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Courses</Link>
              <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</Link>
            </div>
          </nav>
        </header>
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
