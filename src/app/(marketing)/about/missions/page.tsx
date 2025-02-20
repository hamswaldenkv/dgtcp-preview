import { Separator } from "@/components/ui/separator";
import SectionHeading from "../../_components/section-heading";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-[50vh] bg-white space-y-10">
      <SectionHeading title="Missions de la DGTCP" />

      <div className="container mx-auto flex gap-10">
        <div className="h-[30rem] w-1/3 bg-slate-100 relative">
          <Image
            src="/static/images/about-office-01.webp"
            alt="alt"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex-1 space-y-5">
          <h1 className="text-4xl font-bold">Mission principale</h1>
          <p>
            La DGTCP exerce ses missions sur toute l'étendue du territoire
            national ainsi que dans les missions diplomatiques et consulaires de
            la République Démocratique du Congo.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              La mise en oeuvre opérationnelle de la politique budgétaire au
              plan de l'exécution des dépenses et du suivi des recettes
              recouvrées par les administrations financières
            </li>
            <li>
              La définition de la politique financière de l'Etat à travers la
              gestion de la trésorerie et le suivi de l'endettement du Pouvoir
              central, des Provinces, des Entités Territoriales Décentralisées
              et des organismes auxiliaires ;
            </li>
            <li>
              la réglementation, la tenue et la centralisation de la
              comptabilité et des flux financiers du Pouvoir central, des
              Provinces et Entites Territoriales Décentralisées ainsi que des
              organismes auxiliaires, conformément aux normes nationales et
              internationales en la matière.
            </li>
          </ul>
        </div>
      </div>

      <Separator />

      <div className="container mx-auto flex gap-10">
        <div className="md:h-[45rem] w-1/3 bg-slate-100 relative">
          <Image
            src="/static/images/about-office-01.webp"
            alt="alt"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex-1 space-y-5">
          <h1 className="text-4xl font-bold">
            Réglementation, tenue et centralisation de la Comptabilité et des
            flux financiers
          </h1>

          <p>
            Au titre de la mission « réglementation, tenue et centralisation de
            la Comptabilité et des flux financiers », la DGTCP est chargée de
            (d') :
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              - animer le réseau national des comptables publics dont la
              fonction essentielle est l'exécution des opérations budgétaires et
              comptables du Pouvoir central, des Provinces et des entités
              territoriales décentralisées ;{" "}
            </li>

            <li>
              - élaborer, en liaison avec les autres administrations
              compétentes, un cadre conceptuel relatif à l'organisation de la
              comptabilité publique du Pouvoir central, des Provinces, des
              Entités Territoriales Décentralisées et des organismes auxiliaires
              et définir les conditions de sa mise en oeuvre ;{" "}
            </li>

            <li>
              - définir, en relation avec les autres administrations
              compétentes, des normes comptables auxquelles les opérations de
              recettes et de dépenses du Pouvoir central, des Provinces, des
              Entités Territoriales Décentralisées et des organismes auxiliaires
              doivent satisfaire pour être admises en exécution par les
              comptables publics, de les diffuser et de suivre leur application
              dans les administrations publiques ;{" "}
            </li>

            <li>
              - définir, en relation avec les autres administrations
              compétentes, des mécanismes destinés à garantir la production
              régulière, la sincérité, la clarté et l'exhaustivité des
              informations relatives à la gestion financière du pouvoir central,
              des provinces, des entités territoriales décentralisées et des
              organismes auxiliaires ;{" "}
            </li>

            <li>
              - étudier tous les dossiers relatifs à la réglementation, à
              l'organisation et au fonctionnement de tous les services
              comptables du pouvoir central, des provinces, des entités
              territoriales décentralisées et des organismes auxiliaires soumis
              aux règles de la comptabilité publique ;{" "}
            </li>

            <li>
              - assurer le développement du dispositif de contrôle interne
              comptable ;{" "}
            </li>

            <li>
              - retracer toutes les écritures liées aux transactions budgétaires
              et financières et de tenir les comptabilités budgétaires, des
              matières et générale du Pouvoir central, des Provinces, des
              Entités Territoriales Décentralisées ;{" "}
            </li>

            <li>
              - produire la balance générale et les états financiers que sont :
              le bilan, le compte de résultat, le tableau de flux trésorerie et
              l'état annexé ;{" "}
            </li>

            <li>
              - garantir la production et la mise en état d'examen des comptes
              de gestion des comptables principaux du Pouvoir central, des
              Provinces, des Entités Territoriales Décentralisées et des
              organismes auxiliaires ;{" "}
            </li>

            <li>
              - assurer la centralisation des flux financiers du pouvoir
              central, des provinces, des entités territoriales décentralisées
              et des organismes auxiliaires.
            </li>
          </ul>
        </div>
      </div>

      <Separator />

      <div className="container mx-auto flex gap-10">
        <div className="h-[40rem] w-1/3 bg-slate-100 relative">
          <Image
            src="/static/images/about-office-01.webp"
            alt="alt"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex-1 space-y-5">
          <h1 className="text-4xl font-bold">
            Définir de la politique financière de l'Etat, à travers la gestion
            de la trésorerie et le suivi de l'endettement public
          </h1>

          <p>
            Au titre de la mission « définition de la politique financière de
            l'Etat, à travers la gestion de la trésorerie et le suivi de
            l'endettement public », la DGTCP est chargée de (d') :
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              - proposer et mettre en oeuvre la politique financière de l'Etat ;
            </li>

            <li>
              - étudier et faire le suivi des questions liées à la gestion de la
              trésorerie du Pouvoir central, des provinces, des Entités
              Territoriales Décentralisées ainsi que des organismes auxiliaires
              et proposer, le cas échéant, des arbitrages nécessaires ;
            </li>

            <li>
              - veiller à l'équilibre des ressources et des charges publiques
              dans l'espace et dans le temps ;
            </li>

            <li>
              - assurer le suivi de l'endettement public en collaboration avec
              la Direction Générale de la Dette Publique ;
            </li>

            <li>
              - organiser les marchés des titres et les interventions
              financières ad hoc en collaboration avec la Direction Générale de
              la Dette Publique et la Banque Centrale du Congo ;
            </li>

            <li>- émettre et négocier les effets et titres publics ;</li>

            <li>
              - participer, en relation avec la Banque Centrale du Congo, à la
              régulation et à la surveillance du secteur bancaire ;
            </li>

            <li>
              - analyser et faire le suivi des indicateurs macro-économiques et
              proposer des ajustements dans l'exécution du Plan de Trésorerie du
              Pouvoir central, des Provinces et des Entités Territoriales
              Décentralisées, en vue de garantir la stabilité du cadre
              macro-économique ;
            </li>

            <li>
              - alerter les autorités du pouvoir central, des provinces et des
              entités territoriales décentralisées de l'impact de l'exécution du
              Plan de Trésorerie sur la gestion de la liquidité et le cadre
              macro-économique ;
            </li>

            <li>
              - gérer le portefeuille des titres et actifs financiers ainsi que
              les valeurs inactives du pouvoir central, des provinces, des
              entités territoriales décentralisées et des organismes
              auxiliaires.
            </li>
          </ul>
        </div>
      </div>

      <Separator />

      <div className="container mx-auto flex gap-10">
        <div className="h-[20rem] w-1/3 bg-slate-100 relative">
          <Image
            src="/static/images/about-office-01.webp"
            alt="alt"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex-1 space-y-5">
          <h1 className="text-4xl font-bold">
            la DGTCP émet des circulaires, notes de services et instructions
            concernant le fonctionnement technique et administratif de services.
          </h1>

          <p>
            La DGTCP élabore, en collaboration avec les structures compétentes
            et soumet, le cas échéant, à l'autorité compétente, des
            Avant-projets de Lois, des projets de Décrets, d'Arrêtés, de
            Circulaires et de manuels ainsi que autres instructions relatives à
            la gestion de la trésorerie et à la comptabilisation des opérations
            des recettes, des dépenses et de patrimoine.
          </p>
        </div>
      </div>

      <div className="h-10"></div>
    </div>
  );
}
