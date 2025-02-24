import Image from "next/image";
import { ArrowRightCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import SectionHeading from "../../_components/section-heading";

export default function Page() {
  return (
    <div className="min-h-[50vh] bg-white space-y-10 mb-10">
      <SectionHeading title="Comité d'orientation de la réforme des finances publiques" />

      <div className="container mx-auto flex gap-10">
        <div className="h-[40rem] w-1/3 bg-slate-100 relative">
          <Image
            src="/static/images/partenaire-coref.jpg"
            alt="alt"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex-1 p-10 space-y-5">
          <h1 className="text-4xl font-bold">Présentation</h1>
          <p className="text-base">
            Le Comité d'Orientation de la Réforme des Finances Publiques (COREF)
            de la République Démocratique du Congo (RDC) est un organisme
            consultatif et stratégique chargé de superviser et de coordonner les
            réformes liées à la gestion des finances publiques. Son rôle est de
            guider le processus de modernisation du système financier de l'État
            afin d'améliorer la transparence, l'efficacité et la gouvernance des
            finances publiques. Le COREF veille à ce que les réformes
            entreprises soient alignées avec les objectifs de développement
            économique du pays, en favorisant une gestion rigoureuse des
            ressources publiques.
          </p>
          <p className="text-base">
            Le COREF a pour mission d'identifier les priorités de réforme en
            matière de gestion budgétaire, de contrôle des dépenses publiques,
            de mobilisation des recettes et de gestion de la dette. Il propose
            des politiques et des stratégies pour moderniser les institutions
            financières publiques, améliorer la performance du système fiscal,
            et renforcer les mécanismes de suivi et d’évaluation. Cette entité
            travaille en étroite collaboration avec les institutions nationales
            et internationales pour mettre en place des réformes adaptées aux
            défis économiques de la RDC.
          </p>
          <p className="text-base">
            Le COREF joue également un rôle de coordination entre les différents
            acteurs impliqués dans la réforme des finances publiques, tels que
            les ministères concernés, les bailleurs de fonds, et les partenaires
            au développement. Il s'assure que les réformes sont mises en œuvre
            de manière cohérente et que les résultats sont mesurables et
            durables. Grâce à son action, le COREF contribue à améliorer la
            gestion des finances publiques, en renforçant la confiance des
            citoyens et des partenaires internationaux dans la capacité de
            l'État à gérer efficacement ses ressources.
          </p>

          <Separator />

          <a
            href="https://coref.cd/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-primary/10 bg-primary text-white rounded-full hover:text-primary inline-flex items-center border p-5 py-3"
          >
            <span className="font-medium">Visitez le site web du COREF</span>
            <ArrowRightCircle className="ml-2 size-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
