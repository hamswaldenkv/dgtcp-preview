"use client";

import { HeroSection } from "@/components/ui/hero-section";
import { Call, LoginCurve } from "iconsax-react";

export function SectionHero() {
  return (
    <HeroSection
      badge={{
        text: "Commandez vos cartes physiques",
        action: {
          text: "Learn more",
          href: "/docs",
        },
      }}
      title="Créez facilement votre carte de visite numérique"
      description="Créez un réseau commercial solide avec des cartes numériques"
      actions={[
        {
          text: "Créer un compte",
          href: "/signup",
          variant: "default",
          icon: <LoginCurve className="h-5 w-5" />,
        },
        {
          text: "Contactez-nous",
          href: "/contact",
          variant: "outline",
          icon: <Call className="h-5 w-5" />,
        },
      ]}
      image={{
        light: "/static/images/app-preview.webp",
        dark: "/static/images/app-preview.webp",
        alt: "UI Components Preview",
      }}
    />
  );
}
