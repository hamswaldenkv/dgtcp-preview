import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Calendar1, MessageText } from "iconsax-react";
import React from "react";

export default function SectionChairman() {
  return (
    <div className="bg-[#112673]">
      <section className="py-20 container mx-auto">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col gap-12 md:flex-row">
            <img
              src="/static/images/profile-chairman.jpg"
              alt="placeholder"
              className="max-h-96 w-full rounded-lg object-cover md:max-h-[30rem] md:w-1/2"
            />

            <div className="">
              <div className="space-y-2">
                <h2 className="text-balance text-3xl font-bold md:text-5xl text-white uppercase">
                  Le mot du ministre
                </h2>
                <h2 className="text-balance text-xl text-white">
                  S.E.M,{" "}
                  <strong>Doudou Roussel FWAMBA LIKUNDE LI-BOTAYI</strong>
                </h2>
              </div>
              <p className="mt-1 text-white md:mt-6">
                Concernant les instruments multilatéraux dans le domaine fiscal,
                il est important de noter que des fonds importants sont
                transférés de la République démocratique du Congo vers des
                juridictions à fiscalité privilégiée ou des paradis fiscaux par
                des stratégies d'optimisation fiscale employées par les
                multinationales opérant dans notre pays. Cette optimisation
                agressive, particulièrement dans les secteurs extractifs qui
                représentant plus de 70 % de la production minière, empêche
                notre pays de mobiliser les recettes nécessaires au financement
                de son programme d'action.
              </p>
              <p className="mt-1 text-white md:mt-6">
                Pour contrer ce phénomène, la République démocratique du Congo a
                signé en octobre dernier deux conventions fiscales. La première
                concerne la lutte contre l'érosion de la base d'imposition et
                les transferts des bénéfices (BEPS), tandis que la seconde porte
                sur la règle d'assujettissement à l'impôt. La signature de ces
                deux instruments s'inscrit dans le cadre de la matérialisation
                de la vision de Son Excellence Monsieur le Président de la
                République, Félix-Antoine Tshisekedi Tshilombo, qui a assigné au
                gouvernement la mission d'améliorer la mobilisation des recettes
                publiques afin de financer les projets de développement.
              </p>
              <p className="mt-1 text-white md:mt-6">
                Le Président de l'Assemblée nationale et les membres du Bureau
                saluent cette initiative, qui vise à réduire significativement
                les pertes de recettes fiscales dues aux transferts de bénéfices
                vers des juridictions à faible fiscalité
              </p>
              <ul className="mt-10 flex-wrap items-center gap-6 space-y-6 md:flex md:space-y-0 text-white">
                <li>
                  <a
                    className="flex items-center gap-3"
                    href="http://finances.gouv.cd"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar1 className="size-4" />
                    Agenda
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3"
                    href="http://finances.gouv.cd"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageText className="size-4" />
                    Contactez
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3"
                    href="https://linkedin.com/in/doudou-roussel-5b1b1a1b8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInLogoIcon className="size-4" />
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
