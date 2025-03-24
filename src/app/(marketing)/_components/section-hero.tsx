"use client";

import React, { useCallback, useEffect, useState } from "react";
import { ArrowRight, Call } from "iconsax-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  url: string;
}
const slides: Slide[] = [
  {
    id: 1,
    title: "Affectation des agents & cadres",
    description:
      "Mise en œuvre opérationnelle de la politique budgétaire en termes d’exécution des dépenses et de suivi des recettes perçues par les administrations financières",
    image: "/static/images/home-slider-01.jpeg",
    category: "Annonces",
    url: "#",
  },
  {
    id: 2,
    title: "Inauguration du Centre Financier de Kinshasa",
    description:
      "Mise en œuvre opérationnelle de la politique budgétaire en termes d’exécution des dépenses et de suivi des recettes perçues par les administrations financières",
    image: "/static/images/home-slider-02.jpg",
    category: "Annonces",
    url: "#",
  },
  {
    id: 3,
    title: "Avis d'appel à candidature DGTCP (Plusieurs postes)",
    description:
      "Mise en œuvre opérationnelle de la politique budgétaire en termes d’exécution des dépenses et de suivi des recettes perçues par les administrations financières",
    image: "/static/images/home-slider-03.jpg",
    category: "Communiqué de presse",
    url: "#",
  },
];

export default function SectionHero() {
  return (
    <section>
      <div className="flex flex-col items-center bg-accent/50">
        <div className="container mx-auto w-full overflow-clip rounded-lg">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="container flex flex-col items-center px-[4rem] py-16 text-center lg:mx-auto lg:items-start lg:px-[4rem] lg:py-12 lg:text-left">
              <h1 className="my-6 text-4xl font-bold text-pretty lg:text-6xl">
                Ideas reborn new
              </h1>
              <p className="max-w-xl text-muted-foreground lg:text-xl">
                Sunphenix est une entreprise de marketing relationnel :
              </p>
              <ul className="my-5 text-muted-foreground list-inside list-disc ml-5">
                <li>
                  Prestations métiers (BPO): sous-traitance de personnel
                  commercial, bancaires, téléopérateurs Call Center etc…
                </li>
                <li>
                  Prestations techniques (ITO): Télécommunications, mise en
                  œuvre de call center (CRM, IPBX); Sms Alert
                </li>
                <li>
                  Prestations à haute valeur ajoutée (KPO): Consultance
                  sectorielle (Mystery Shopping, Benchmark, Sondage…)
                </li>
              </ul>

              <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                <Button
                  data-slot="button"
                  size={"lg"}
                  onClick={() => {
                    window.open("tel:+243822050048");
                  }}
                >
                  <Call className="size-3 mr-1" />
                  Contactez notre service client
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="relative aspect-[7/8] h-full w-full">
                <div className="absolute top-[12%] right-[50%] flex aspect-square w-[24%] justify-center rounded-lg border border-border bg-accent overflow-hidden">
                  <Image
                    src="/static/images/service-enquete.webp"
                    alt="alt"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="absolute top-[36%] right-[50%] flex aspect-[5/6] w-[40%] justify-center rounded-lg border border-border bg-accent overflow-hidden">
                  <Image
                    src="/static/images/service-call-center.webp"
                    alt="alt"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="absolute bottom-[36%] left-[54%] flex aspect-[5/6] w-[40%] justify-center rounded-lg border border-border bg-accent overflow-hidden">
                  <Image
                    src="/static/images/service-telecom.webp"
                    alt="alt"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="absolute bottom-[12%] left-[54%] flex aspect-square w-[24%] justify-center rounded-lg border border-border bg-accent overflow-hidden">
                  <Image
                    src="/static/images/service-benchmark.jpeg"
                    alt="alt"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
