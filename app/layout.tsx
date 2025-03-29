import './globals.css'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from '../components/header'
import Footer from '../components/footer'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kibble Cruncher",
  description: "A hobby project helping you find dog & cat food.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen w-full md:w-9/10 grid grid-rows-[auto_1fr_auto] justify-self-center`}
      >
        <Header />
          <main>
            {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
