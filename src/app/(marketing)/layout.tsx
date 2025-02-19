import { FooterSection } from "@/components/ui/footer-section";
import HeaderSection from "./_components/header-section";
import SectionSubscribe from "./_components/section-subscribe";
import { Card } from "iconsax-react";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <HeaderSection />
      {children}
      <SectionSubscribe />
      <FooterSection
        logo={<Card className="h-10 w-10" />}
        brandName="i-Card"
        socialLinks={[]}
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
