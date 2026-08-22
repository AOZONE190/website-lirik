import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Baper.id — Makna & Obrolan Seputar Lagu",
  description:
    "Platform diskusi dan analisis makna lagu dari berbagai genre, dengan gaya bahasa santai dan lokal.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        {children}
        <footer>Baper.id — Contoh demo portfolio oleh Webforge Guild</footer>
      </body>
    </html>
  );
}