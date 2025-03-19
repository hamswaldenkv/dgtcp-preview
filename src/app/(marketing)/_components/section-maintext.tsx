import Image from "next/image";
import React from "react";

export default function SectionMainText() {
  return (
    <section className="bg-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center p-10 md:py-24 gap-10">
        <div className="md:flex-1 hidden md:flex justify-end">
          <div>
            <Image
              src="/static/images/logo-main-square.jpeg"
              alt="alt"
              width={220}
              height={200}
            />
          </div>
        </div>

        <div className="w-full h-0 md:w-1 md:h-[13rem] bg-slate-100"></div>
        <div className="flex-1 space-y-2">
          <h3 className="text-black text-sm md:text-base font-bold">
            Notre principale mission
          </h3>
          <h1 className={"text-black text-2xl md:text-3xl font-bold"}>
            Mise en œuvre opérationnelle de la politique budgétaire en termes
            d’exécution des dépenses et de suivi des recettes perçues par les
            administrations financières
          </h1>
        </div>
      </div>
    </section>
  );
}
