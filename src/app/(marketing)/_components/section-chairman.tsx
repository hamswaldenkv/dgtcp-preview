import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Calendar1, MessageText } from "iconsax-react";
import React from "react";

export default function SectionChairman() {
  return (
    <div className="bg-[#112673]">
      <section className="py-20 max-w-[90%] md:container mx-auto">
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
                La gestion des finances publiques de notre pays est à un
                tournant décisif. Pendant trop longtemps, notre système a été
                entravé par des mécanismes obsolètes, un cadre juridique
                inadapté et une gouvernance financière qui ne garantissait ni
                l’efficacité ni la transparence nécessaire à une gestion
                optimale des ressources publiques. Face à ces défis, le
                Gouvernement, sous l’impulsion de Son Excellence le Président de
                la République Félix-Antoine Tshisekedi Tshilombo et la
                coordination de Son Excellence Madame la première ministre
                Judith Suminwa, a engagé des réformes profondes, structurantes
                et résolument tournées vers l’avenir.
              </p>
              <p className="mt-1 text-white md:mt-6">
                Notre vision est claire : moderniser la gestion des finances
                publiques en instaurant un cadre plus rigoureux, plus
                transparent et plus performant. Pour ce faire, nous avons
                identifié des actions prioritaires qui permettront de corriger
                les faiblesses du système actuel.
              </p>
              <p className="mt-1 text-white md:mt-6">
                Il s’agit notamment de :
                <ul className="list-disc ml-5">
                  <li>
                    L’opérationnalisation de la Direction Générale du Trésor et
                    de la Comptabilité Publique (DGTCP), qui constitue un pilier
                    essentiel pour assurer une gestion efficace des finances de
                    l’État.
                  </li>
                  <li>
                    La mise en place du Compte Unique du Trésor, un instrument
                    clé pour centraliser et rationaliser la gestion des
                    ressources financières, éviter la dispersion des fonds et
                    améliorer la trésorerie publique.
                  </li>
                  <li>
                    Le déploiement du Réseau National des Comptables Publics,
                    garantissant une exécution budgétaire plus fluide et mieux
                    encadrée, où chaque acteur assume pleinement son rôle.
                  </li>
                </ul>
              </p>
              <p className="mt-1 text-white md:mt-6">
                Cependant, la mise en œuvre de ces réformes ne doit pas être un
                simple ajustement administratif. Il s’agit d’un véritable
                changement de paradigme. Nous devons veiller à ce que chaque
                décision prise s’inscrive dans une logique de cohérence avec les
                textes existants, tout en restant fidèle aux objectifs de bonne
                gouvernance financière que nous poursuivons.
              </p>
              <p className="mt-1 text-white md:mt-6">
                Nous avons fait le choix de la transparence, de la rigueur et de
                la modernisation. Notre ambition est de garantir que chaque
                franc public soit utilisé de manière optimale pour le
                développement du pays et l’amélioration des conditions de vie de
                nos concitoyens.
              </p>
              <p className="mt-1 text-white md:mt-6">
                Nous sommes conscients que toute réforme suscite des
                interrogations et des résistances. Mais nous sommes déterminés.
                Cette transformation est nécessaire et inévitable pour bâtir une
                administration financière solide, crédible et au service du
                développement de notre nation. Ensemble, nous réussirons.
              </p>
              <ul className="mt-10 flex-wrap items-center gap-6 space-y-6 hidden md:flex md:space-y-0 text-white">
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
