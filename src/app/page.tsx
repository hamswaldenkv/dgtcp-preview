import { Card, Facebook } from "iconsax-react";
import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

import { FooterSection } from "@/components/ui/footer-section";
import HeaderSection from "./(marketing)/_components/section-header";
import FeatureSection from "./(marketing)/_components/feature-section";
import SectionResearch from "./(marketing)/_components/section-research";
import SectionSubscribe from "./(marketing)/_components/section-subscribe";
import SectionChairman from "./(marketing)/_components/section-chairman";
import SectionHero from "./(marketing)/_components/section-hero";
import SectionRelated from "./(marketing)/_components/section-related";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeaderSection />
      <SectionHero />
      <SectionChairman />
      <FeatureSection />
      <SectionRelated
        links={[
          {
            href: "/about/attributions",
            title: "Attributions",
            description: "Attributions de la DGTCP",
            photo_url: "/static/images/about-office-01.webp",
          },
          {
            href: "/about/missions",
            title: "Missions",
            description: "Missions de la DGTCP",
            photo_url: "/static/images/about-office-02.webp",
          },
          {
            href: "/about/legal-texts",
            title: "Textes référentiels",
            description:
              "Textes référentiels portant création, missions, organisation et fonctionnement",
            photo_url: "/static/images/bg-cover-01.jpg",
          },
        ]}
      />
      <SectionResearch />
      <SectionSubscribe />
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
