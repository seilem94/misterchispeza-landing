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
  title: "HHL Electricidad",
  description: "Servicios de Instalaciones Eléctricas y Electrónicas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased bg-white text-gray-900">
<header className="p-4 border-b">
          <h1 className="text-2xl font-bold">Mr Chispeza</h1>
        </header>
        <main className="min-h-screen p-6">{children}</main>
        <footer className="p-4 border-t text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Mr Chispeza
        </footer>
      </body>
    </html>
  );
};