import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Calendar1, MessageText } from "iconsax-react";
import React from "react";

export default function SectionChairman() {
  return (
    <div className="bg-[#112673]">
      <section className="py-16 container mx-auto">
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
                Intégré à l'administration publique en 2010, Doudou Fwamba a
                occupé divers postes au sein du ministère des Finances,
                notamment en tant que vérificateur de la comptabilité publique,
                contrôleur des imputations budgétaires et assistant technique du
                Directeur du Trésor. En 2023, il est promu au grade de Directeur
                d'Administration Publique
              </p>
              <p className="mt-1 text-white md:mt-6">
                Le 12 juin 2024, il est nommé ministre des Finances du
                gouvernement Suminwa, succédant à Nicolas Kazadi. Depuis sa
                nomination, il a initié plusieurs réformes visant à moderniser
                les finances publiques et à renforcer la transparence
                budgétaire. Parmi ses actions notables, on compte la création
                d'un Compte Unique du Trésor pour centraliser les ressources
                publiques et la digitalisation des marchés publics. En novembre
                2024, la RDC a signé un accord avec le Fonds Monétaire
                International (FMI) pour un Programme Triennal Formel d'une
                valeur de 1,75 milliard USD, destiné à soutenir les réformes
                économiques et financières.
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
