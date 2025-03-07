import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

import { CooperHewitt } from "@/constants/fonts";

export const metadata: Metadata = {
  title:
    "DGTCP - La Direction Générale de la Comptabilité et du Trésor Publique",
  description:
    "La Direction Générale de la Comptabilité et du Trésor Publique (DGTCP) est un service public du Ministère des Finances.",
  openGraph: {
    title:
      "DGTCP - La Direction Générale de la Comptabilité et du Trésor Publique",
    description:
      "La Direction Générale de la Comptabilité et du Trésor Publique (DGTCP) est un service public du Ministère des Finances.",
    url: "https://dgtcp-preview.vercel.app",
    images: ["https://dgtcp-preview.vercel.app/static/images/bg-cover-01.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${CooperHewitt.className} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
