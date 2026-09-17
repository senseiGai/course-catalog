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
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-white dark:bg-zinc-950 text-zinc-950 dark:text-zinc-50">
        <header className="sticky top-0 z-10 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
          <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="font-bold text-lg tracking-tight">
              CourseCatalog
            </Link>
            <div className="flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
              <Link href="/" className="hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors">Home</Link>
              <Link href="/courses" className="hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors">Courses</Link>
              <Link href="/about" className="hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors">About</Link>
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
