import Image from "next/image";
import { ArrowRightCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import SectionHeading from "../../_components/section-heading";

export default function Page() {
  return (
    <div className="min-h-[50vh] bg-white space-y-10 mb-10">
      <SectionHeading title="La Direction Générale des Recettes Administrative" />

      <div className="container mx-auto flex gap-10">
        <div className="h-[40rem] w-1/3 bg-slate-100 relative">
          <Image
            src="/static/images/about-office-02.webp"
            alt="alt"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex-1 p-10 space-y-5">
          <h1 className="text-4xl font-bold">Présentation</h1>
          <p className="text-base">
            La Direction Générale des Recettes Administratives, Judiciaires,
            Domaniales et de Participations (DGRAD) de la République
            Démocratique du Congo (RDC) est l'entité publique responsable de la
            collecte des recettes non fiscales, autrement dit les recettes
            administratives, judiciaires, domaniales, et de participations. Ces
            recettes proviennent de diverses sources telles que les taxes liées
            aux activités administratives, les amendes judiciaires, les revenus
            générés par l'État via la gestion de ses biens immobiliers et ses
            participations dans les entreprises publiques, ainsi que d'autres
            types de recettes spécifiques. La DGRAD a pour objectif de maximiser
            ces recettes afin de contribuer au financement du budget de l'État.
          </p>
          <p className="text-base">
            La mission de la DGRAD inclut également la gestion des patrimoines
            de l'État et des droits de propriété des institutions publiques.
            Cela englobe les opérations liées à la vente ou à la gestion des
            biens domaniaux, ainsi que la supervision des actifs publics et de
            leurs utilisations. Par ailleurs, la DGRAD a la responsabilité de
            veiller à la régularité des transactions impliquant les biens de
            l'État, en garantissant la transparence et l'efficacité des
            processus liés à la gestion de ces biens.
          </p>
          <p className="text-base">
            La DGRAD œuvre à l'amélioration du système de collecte et à la lutte
            contre la fraude et les détournements, en renforçant les contrôles
            et la transparence dans la gestion des recettes non fiscales. Elle
            est aussi impliquée dans la modernisation des procédures
            administratives, notamment par la mise en place d’outils numériques
            pour faciliter les paiements et les suivis des recettes. Par ces
            actions, la DGRAD contribue à renforcer les finances publiques et à
            soutenir le développement économique de la RDC.
          </p>

          <Separator />

          <a
            href="http://www.dgrad.cd/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-primary/10 bg-primary text-white rounded-full hover:text-primary inline-flex items-center border p-5 py-3"
          >
            <span className="font-medium">Visitez le site web de la DGRAD</span>
            <ArrowRightCircle className="ml-2 size-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
