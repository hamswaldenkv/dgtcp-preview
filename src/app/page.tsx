import { Card, Facebook } from "iconsax-react";
import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

import { FooterSection } from "@/components/ui/footer-section";
import SectionHero from "./(marketing)/_components/section-hero";
import HeaderSection from "./(marketing)/_components/section-header";
import { SectionServices } from "./(marketing)/_components/section-services";
import { CMS_SERVICES } from "@/constants/cms";
import SectionCTA from "./(marketing)/_components/section-cta";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeaderSection />
      <SectionHero />
      <SectionServices
        title="Nos services"
        description="Découvrez nos services"
        items={CMS_SERVICES.map((e, x) => ({
          id: `item-${x}`,
          title: e.title,
          image: e.photo_url,
          description: e.description,
          href: e.href,
        }))}
      />
      <SectionCTA />
      <FooterSection
        logo={<Card className="h-10 w-10" />}
        brandName="i-Card"
        socialLinks={[
          {
            icon: <TwitterLogoIcon className="h-5 w-5" />,
            href: "https://twitter.com",
            label: "Twitter",
          },
          {
            icon: <InstagramLogoIcon className="h-5 w-5" />,
            href: "https://instagram.com",
            label: "Instagram",
          },
          {
            icon: <Facebook className="h-5 w-5" />,
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
