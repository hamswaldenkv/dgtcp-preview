import Image from "next/image";
import React from "react";

export default function SectionMainText() {
  return (
    <section className="bg-white">
      <div className="container mx-auto flex justify-center p-10 py-24 gap-10">
        <div className="flex-1 flex justify-end">
          <div>
            <Image
              src="/static/images/logo-main-square.jpeg"
              alt="alt"
              width={220}
              height={200}
            />
          </div>
        </div>

        <div className="w-1 h-[15rem] bg-slate-100"></div>
        <div className="flex-1">
          <h1 className="text-black text-2xl md:text-4xl font-bold">
            Mise en œuvre opérationnelle de la politique budgétaire en termes
            d’exécution des dépenses et de suivi des recettes perçues par les
            administrations financières
          </h1>
        </div>
      </div>
    </section>
  );
}
