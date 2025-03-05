import { Card, Facebook } from "iconsax-react";
import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

import { FooterSection } from "@/components/ui/footer-section";
import HeaderSection from "./(marketing)/_components/section-header";
import FeatureSection from "./(marketing)/_components/section-feature";
import SectionBlog from "./(marketing)/_components/section-blog";
import SectionSubscribe from "./(marketing)/_components/section-subscribe";
import SectionChairman from "./(marketing)/_components/section-chairman";
import SectionHero from "./(marketing)/_components/section-hero";
import SectionRelated from "./(marketing)/_components/section-related";
import SectionMainText from "./(marketing)/_components/section-maintext";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeaderSection />
      <SectionHero />
      <SectionMainText />
      <SectionChairman />
      <FeatureSection />
      <SectionRelated
        links={[
          {
            href: "/about/missions",
            title: "Missions",
            description: "Missions de la DGTCP",
            photo_url: "/static/images/gallery-photo-03.jpeg",
          },
          {
            href: "/about/attributions",
            title: "Attributions",
            description: "Attributions de la DGTCP",
            photo_url: "/static/images/gallery-photo-02.jpeg",
          },
          {
            href: "/about/leadership",
            title: "Equipe directive",
            description: "Découvrez l'equipe directrice de la DGTCP",
            photo_url: "/static/images/about-office-01.webp",
          },
        ]}
      />
      <SectionBlog />
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
