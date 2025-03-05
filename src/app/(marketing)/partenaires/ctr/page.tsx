import Image from "next/image";
import { ArrowRightCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import SectionHeading from "../../_components/section-heading";

export default function Page() {
  return (
    <div className="min-h-[50vh] bg-white space-y-10 mb-10">
      <SectionHeading title="Comité Technique de suivi et évaluation des Réformes" />

      <div className="container mx-auto flex gap-10">
        <div className="h-[40rem] w-1/3 bg-slate-100 relative">
          <Image
            src="/static/images/partenaire-ctr.jpeg"
            alt="alt"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex-1 p-10 space-y-5">
          <h1 className="text-4xl font-bold">Présentation</h1>
          <p className="text-base text-justify">
            Le Comité Technique de Suivi et Évaluation des Réformes (CTR) de la
            République Démocratique du Congo (RDC) est une structure dédiée au
            suivi et à l’évaluation des réformes mises en œuvre dans divers
            secteurs de la gestion publique, en particulier celles liées à la
            gestion des finances publiques et aux réformes administratives. Il a
            pour mission principale de s'assurer que les réformes entreprises
            par l'État sont suivies de manière rigoureuse et que leur impact est
            évalué régulièrement. Le CTR permet ainsi d'identifier les défis et
            obstacles rencontrés dans l'application des réformes et de proposer
            des solutions pour améliorer leur efficacité.
          </p>
          <p className="text-base text-justify">
            Le CTR est composé de représentants des institutions publiques,
            d'experts techniques, ainsi que de partenaires au développement, et
            il travaille en étroite collaboration avec les différentes parties
            prenantes impliquées dans la mise en œuvre des réformes. Son rôle
            est de superviser les processus de mise en œuvre des réformes, en
            évaluant leur conformité aux objectifs fixés, leur pertinence et
            leur impact réel sur la gestion des ressources publiques. Le Comité
            s'assure que les réformes respectent les principes de transparence,
            de bonne gouvernance et de responsabilité.
          </p>
          <p className="text-base text-justify">
            Le CTR joue un rôle clé dans la production de rapports de suivi qui
            servent de base à des ajustements éventuels des politiques
            publiques. En identifiant les points forts et les domaines
            nécessitant des améliorations, il permet à l'État de prendre des
            décisions éclairées pour garantir que les réformes aboutissent à des
            résultats tangibles et bénéfiques pour le développement du pays. Par
            son action, le Comité contribue à renforcer la crédibilité et la
            durabilité des réformes entreprises par l'État, tout en soutenant
            une gestion plus transparente et performante des finances publiques.
          </p>

          <Separator />

          <a
            href="https://www.financetimes.cd/ctr-rdc"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-primary/10 bg-primary text-white rounded-full hover:text-primary inline-flex items-center border p-5 py-3"
          >
            <span className="font-medium">Visitez le site web du CTR</span>
            <ArrowRightCircle className="ml-2 size-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
