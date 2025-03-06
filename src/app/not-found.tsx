import Link from "next/link";
import HeaderSection from "./(marketing)/_components/section-header";
import { FooterSection } from "@/components/ui/footer-section";
import { Camera, Card, CloudCross } from "iconsax-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderSection />
      <div className="flex-1 flex flex-col justify-center items-center bg-slate-50 space-y-4">
        <CloudCross className="size-32" />
        <h2 className="text-2xl font-bold">Contenu introuvable</h2>
        <p>La ressource demandée n'a pas été trouvée</p>
        <Link href="/">Retourner sur la page d'accueil</Link>
      </div>
      <FooterSection
        logo={<Card className="h-10 w-10" />}
        brandName="i-Card"
        socialLinks={[
          {
            icon: <Camera className="h-5 w-5" />,
            href: "https://twitter.com",
            label: "Twitter",
          },
          {
            icon: <Camera className="h-5 w-5" />,
            href: "https://instagram.com",
            label: "Instagram",
          },
          {
            icon: <Camera className="h-5 w-5" />,
            href: "https://instagram.com",
            label: "Facebook",
          },
        ]}
        mainLinks={[
          { href: "/products", label: "Products" },
          { href: "/about", label: "About" },
          { href: "/blog", label: "Blog" },
          { href: "/contact", label: "Contact" },
        ]}
        legalLinks={[
          { href: "/privacy", label: "Privacy" },
          { href: "/terms", label: "Terms" },
        ]}
        copyright={{
          text: "© 2025 i-Card",
          license: "All rights reserved",
        }}
      />
    </div>
  );
}
