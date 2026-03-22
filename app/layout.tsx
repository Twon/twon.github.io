import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Antony Peacock's Blog",
  description: "Musing on software development, focused primarily on high performance computing and C++",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="bg-blob blob-1"></div>
        <div className="bg-blob blob-2"></div>
        <Navbar />
        <main className="container animate-fade-in">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
