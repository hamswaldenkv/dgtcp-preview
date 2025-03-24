import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

import { PolySansWeb } from "@/constants/fonts";

export const metadata: Metadata = {
  title: "Sunphenix - ideas reborn new.",
  description: "ideas reborn new.",
  openGraph: {
    title: "Sunphenix - ideas reborn new.",
    description: "ideas reborn new.",
    url: "https://sunphenix-preview.vercel.app",
    images: [
      "https://sunphenix-preview.vercel.app/static/images/bg-cover-01.jpg",
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
      <body className={`${PolySansWeb.className} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
