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
    url: "https://www.dgtcp.cd",
    images: [
      "https://www.dgtcp.cd/wp-content/uploads/2023/07/50040357423_57dc2a2ca0_c.jpg",
    ],
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
