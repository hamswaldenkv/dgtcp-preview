import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DocumentDownload } from "iconsax-react";

export default function SectionHero() {
  return (
    <div className="min-h-[65vh] md:min-h-[55vh] flex flex-col bg-white">
      <div className="flex-1 relative">
        <Image
          src="/static/images/bg-cover-01.jpg"
          alt="Hero"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end py-20">
          <div className="container mx-auto flex gap-10">
            <div className="w-full md:w-1/2 space-y-4">
              <h1 className="text-5xl text-white font-bold animate-appear">
                Mise en œuvre opérationnelle de la politique budgétaire en
                termes d’exécution des dépenses et de suivi des recettes perçues
                par les administrations financières
              </h1>

              <Button
                variant={"outline"}
                size={"lg"}
                className="animate-appear delay-100"
              >
                <DocumentDownload className="size-3 mr-1" />
                Accéder à notre dernier rapport
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1 flex w-full">
        <div className="flex-1 h-full bg-primary" />
        <div className="flex-1 h-full bg-red-500" />
        <div className="flex-1 h-full bg-yellow-500" />
      </div>
    </div>
  );
}
