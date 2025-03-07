import { Separator } from "@/components/ui/separator";
import SectionHeading from "../../_components/section-heading";
import Image from "next/image";
import { ArrowSquareRight } from "iconsax-react";

export default function Page() {
  return (
    <div className="min-h-[50vh] bg-white space-y-10">
      <SectionHeading title="Réformes de la DGTCP" />

      <div className="max-w-[90%] md:container mx-auto flex flex-col md:flex-row-reverse gap-10 py-8 md:py-16">
        <div className="h-[20rem] md:h-[30rem] md:w-[40%] bg-slate-100 relative rounded overflow-hidden">
          <Image
            src="/static/images/gallery-photo-02.jpeg"
            alt="alt"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex-1 space-y-5">
          <h1 className="text-4xl font-bold">À propos des réformes</h1>
          <p className="text-lg text-justify">
            Les deux principales réformes de la DGTCP s’articulent autour de
          </p>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <ArrowSquareRight className="size-4 text-primary m-0" />
              <span className="text-base">
                La création d’un réseau national des comptables (RNC).
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowSquareRight className="size-4 text-primary m-0" />
              <span className="text-base">
                La mise en place d’un Compte Unique du Trésor. (CUT)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowSquareRight className="size-4 text-primary m-0" />
              <span className="text-base m-0">
                La déconcentration de l’ordonnancement
              </span>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      <div className="max-w-[90%] md:container mx-auto space-y-8 py-8 md:py-16">
        <div className="h-[20rem] md:h-[30rem] md:w-[40%] rounded overflow-hidden bg-slate-100 relative md:hidden">
          <Image
            src="/static/images/gallery-photo-04.jpeg"
            alt="alt"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="space-y-5">
          <h1 className="text-4xl font-bold">
            1. Le Réseau National des Comptables
          </h1>
          <p className="text-base text-justify">Base légale</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Article 102 LOFIP version 2011 puis version 2023 article
              correspondant.
            </li>
            <li>Article 18 RGCP version 2013 (alinéa 4)</li>
            <li>RAACP art 18, 19, 20, 22 (version 2025)</li>
            <li>
              Arrêté Ministériel n° 007/CAB/MIN/FINANCES/2023 du 03 mars 2023
              fixant organisation et fonctionnement du réseau national des
              comptables publics
            </li>
          </ul>
          <p className="text-base text-justify">
            Un principe fondamental gouverne la gestion des finances publiques
            en RDC ; il s’agit du principe de la séparation des ordonnateurs et
            des comptables. Selon le Décret n° 23/37 du 24 octobre 2023 fixant
            les procédures de paiement et de comptabilisation de la dépense
            publique, cette séparation vise à renforcer, en l’améliorant, le
            contrôle de la régularité des dépenses et à instaurer l’efficacité
            du travail. Le principe de séparation participe donc à la qualité de
            la gestion publique. Les réformes de la DGTCP en RDC incluent la
            création du Réseau National des Comptables (RNC) et l’instauration
            du Compte Unique du Trésor (CUT). Le principe de séparation entre
            ordonnateurs et comptables vise à renforcer le contrôle des dépenses
            et à améliorer la gestion publique. Le Comptable Public (CP) est
            responsable de la manipulation des fonds et de la comptabilité
            budgétaire et générale. Le RNCP regroupe les comptables directs du
            trésor et les comptables des administrations financières, avec une
            hiérarchie permettant la centralisation et la consolidation des
            données financières.
          </p>

          <div className="h-[20rem] md:h-[30rem] md:w-[40%] rounded overflow-hidden bg-slate-100 relative md:hidden">
            <Image
              src="/static/images/gallery-photo-06.jpeg"
              alt="alt"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <h1 className="text-4xl font-bold">
            2. La mise en place du compte unique du trésor
          </h1>
          <p className="text-base text-justify">(a) Base légale</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Art 110 LOFIP (version 2011)</li>
            <li>Art 110 LOFIP</li>
            <li>Art 97, 98, 99 RGCP</li>
            <li>
              Convention de tenue du compte unique du pouvoir central du 31
              décembre 2024
            </li>
            <li>
              Arrêté ministériel n° … portant création, organisation et
              fonctionnement du comité de du comité de pilotage pour le suivi de
              la mise en œuvre de la convention de tenue du compte unique du
              pouvoir central
            </li>
          </ul>
          <p className="text-base text-justify">
            La mise en place d’un CUT permet au ministre des Finances de
            contrôler l’allocation des crédits en surveillant les encaisses
            liquides de l’Etat. La dispersion des ressources publiques dans les
            banques commerciales permet à ces dernières d'utiliser les fonds de
            l’Etat, créant parfois des difficultés financières pour ce dernier.
            Le CUT aide à réduire les coûts de financement et maximise les
            rendements, permettant à l’Etat d'emprunter uniquement en cas
            d'extrême nécessité et d'investir les excédents de trésorerie.
          </p>
          <p className="text-base text-justify">
            Fort de cette réalité, le législateur congolais a instauré le
            principe de l'unité de trésorerie dans la LOFIP. Selon l'article
            110, toutes les administrations et les services publics doivent
            déposer leurs fonds dans le compte général du trésor à la Banque
            Centrale du Congo, sauf disposition contraire d'une loi de finances.
            L'article 99 du RGCP réaffirme ce principe pour toutes les
            administrations publiques et les projets budgétaires au niveau du
            pouvoir central des provinces, des ETD ainsi que des organismes
            auxiliaires. Les comptables publics communiquent quotidiennement les
            mouvements financiers au pouvoir central, aux provinces et aux
            entités territoriales décentralisées.
          </p>
          <p className="text-base text-justify">
            Le CUT a pour but d'améliorer la gestion de la trésorerie de l'État
            en rendant toutes les liquidités publiques interchangeables grâce à
            une structure unifiée des comptes bancaires des administrations
            publiques. Cela permet de disposer d'informations complètes et en
            temps réel sur les avoirs liquides de l'État, afin de réduire les
            coûts des emprunts et les frais liés aux services bancaires, comme
            les commissions et les transactions bancaires, tout en diminuant les
            risques de dispersion des ressources. En outre, cette approche
            facilite la coordination entre la politique monétaire et la
            politique budgétaire, contribue à une gestion efficace de la
            politique de la dette publique et permet un suivi rigoureux des
            excédents et déficits budgétaires.
          </p>
          <p className="text-base text-justify">(b) Structure du CUT</p>
          <p className="text-base text-justify">
            La réforme des finances publiques en cours en RDC, soutenue par le
            FMI, prévoit la mise en place d’un Compte Unique du Trésor (CUT)
            s’appuyant sur une architecture centralisée à la Banque Centrale du
            Congo (BCC) en tant que détenteur des fonds de l’Etat. Cette
            structure vise à consolider l’ensemble des ressources de l’État et à
            améliorer la visibilité, la traçabilité ainsi que l’efficacité de la
            gestion des fonds publics.
          </p>
          <p className="text-base text-justify">
            De manière synthétique, on peut présenter la structure du CUT comme
            suit :
          </p>
          <div className="space-y-2">
            <h1 className="font-bold">1. Un compte principal logé à la BCC</h1>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                C’est le cœur du dispositif : toutes les ressources et dépenses
                de l’État y sont centralisées, ce qui permet une vue d’ensemble
                des liquidités disponibles et facilite la planification de la
                trésorerie.
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h1 className="font-bold">2. Des sous-comptes opérationnels</h1>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Pour chaque ministère, institution ou programme, des
                sous-comptes peuvent être créés à la BCC
              </li>
              <li>
                Leur gestion reste individualisée (suivi des recettes et
                dépenses propres à chaque entité), mais les soldes sont
                systématiquement consolidés avec le compte principal.
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h1 className="font-bold">
              3. Des comptes transitoires ou de transit dans les banques
              commerciales
            </h1>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Dans certains cas, des comptes de transit (parfois appelés «
                comptes miroirs » ou « zero-balance accounts ») peuvent être
                ouverts dans des banques commerciales pour des opérations
                spécifiques (par exemple, des projets financés par des bailleurs
                de fonds).
              </li>
              <li>
                Les soldes de ces comptes doivent être rapatriés régulièrement
                (généralement en fin de journée ou en fin de période) vers le
                compte principal à la BCC, afin d’éviter toute fragmentation de
                la trésorerie.
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h1 className="font-bold">
              4. Un mécanisme de suivi et de contrôle automatisé
            </h1>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Un système d’information intégré doit permettre un suivi en
                temps réel (ou quasi-réel) de l’ensemble des soldes et
                transactions.
              </li>
              <li>
                Il facilite la production d’états financiers consolidés, le
                contrôle interne et la reddition des comptes.
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h1 className="font-bold">
              5. Un cadre légal et réglementaire renforcé
            </h1>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                La mise en place du CUT s’appuie sur des textes légaux (lois et
                règlements) obligeant toutes les entités publiques
                (administrations centrales, provinces, organismes et
                établissements publics) à déposer leurs disponibilités sur le
                compte principal ou dans ses sous-comptes.
              </li>
              <li>
                Les exceptions (notamment pour les comptes de projets ou les
                comptes spéciaux) sont strictement encadrées.
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h1 className="font-bold">
              6. Un dispositif progressif de mise en œuvre
            </h1>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Étant donné la multiplicité des comptes publics en RDC, la
                fermeture ou la migration de ces comptes vers le CUT se fait
                souvent de manière graduelle, avec un accompagnement technique
                (notamment par le FMI) et des formations pour les agents
                publics.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
