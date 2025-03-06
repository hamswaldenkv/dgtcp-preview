import { Separator } from "@/components/ui/separator";
import SectionHeading from "../../_components/section-heading";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-[50vh] bg-white space-y-10">
      <SectionHeading title="Réformes de la DGTCP" />

      <div className="container mx-auto flex flex-row-reverse gap-10 py-16">
        <div className="h-[30rem] w-[40%] bg-slate-100 relative">
          <Image
            src="/static/images/gallery-photo-02.jpeg"
            alt="alt"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex-1 space-y-5">
          <h1 className="text-4xl font-bold">À propos des réformes</h1>
          <p className="text-base text-justify">
            Les deux principales réformes de la DGTCP s’articulent autour de
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>La création d’un réseau national des comptables (RNC).</li>
            <li>La mise en place d’un Compte Unique du Trésor. (CUT)</li>
            <li>La déconcentration de l’ordonnancement</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto flex gap-10 pb-16">
        <div className="h-[30rem] w-[40%] bg-slate-100 relative">
          <Image
            src="/static/images/gallery-photo-02.jpeg"
            alt="alt"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex-1 space-y-5">
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
        </div>
      </div>
    </div>
  );
}
