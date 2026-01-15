import type { Metadata } from "next";
import { Geist, Geist_Mono, Geom } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const geom = Geom({
  variable: "--font-geom",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "WeTech - Landing Pages que Venden",
  description: "Landing pages rápidas, limpias y medibles para tu negocio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${geom.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
