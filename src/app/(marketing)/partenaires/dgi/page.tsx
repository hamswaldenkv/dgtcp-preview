import { Separator } from "@/components/ui/separator";
import SectionHeading from "../../_components/section-heading";
import Image from "next/image";
import { ArrowRightCircle } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-[50vh] bg-white space-y-10 mb-10">
      <SectionHeading title="Direction Générale des Impôts" />

      <div className="container mx-auto flex gap-10">
        <div className="h-[40rem] w-1/3 bg-slate-100 relative">
          <Image
            src="/static/images/partenaire-dgi.jpeg"
            alt="alt"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex-1 p-10 space-y-5">
          <h1 className="text-4xl font-bold">Présentation</h1>
          <p className="text-base">
            La Direction Générale des Impôts (DGI) de la République Démocratique
            du Congo (RDC) est l'entité responsable de la collecte des impôts et
            des recettes fiscales au niveau national. Elle est placée sous
            l'autorité du ministère des Finances et a pour mission principale de
            garantir le financement du budget de l'État en assurant une gestion
            efficace et transparente des recettes fiscales. Elle administre
            l'ensemble des impôts directs et indirects, ainsi que d'autres
            sources de revenus de l'État, en s'assurant que chaque citoyen et
            entreprise paie sa juste part.
          </p>
          <p className="text-base">
            La DGI joue un rôle crucial dans la politique fiscale du pays,
            notamment à travers l'amélioration de l'assiette fiscale, la lutte
            contre la fraude et l'évasion fiscales, et la modernisation des
            outils de collecte. Elle met en place des stratégies visant à
            élargir la base fiscale tout en simplifiant les procédures
            administratives pour encourager les contribuables à s'acquitter de
            leurs obligations fiscales. La digitalisation des services et la
            mise en œuvre de nouvelles technologies pour la gestion des données
            fiscales font partie des priorités de la DGI.
          </p>
          <p className="text-base">
            La DGI œuvre pour la promotion de la culture fiscale au sein de la
            population congolaise. Cela inclut la sensibilisation des
            contribuables, le renforcement des capacités des agents de l'État,
            et la mise en place de mécanismes d'accompagnement pour faciliter le
            respect des obligations fiscales. Grâce à ses actions, la DGI
            contribue au développement economique et à la stabilité financière
            du pays, tout en soutenant l'amélioration de la gouvernance
            publique.
          </p>

          <Separator />

          <a
            href="https://www.dgi.gouv.cd/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-primary/10 bg-primary text-white rounded-full hover:text-primary inline-flex items-center border p-5 py-3"
          >
            <span className="font-medium">Visitez le site web de la DGI</span>
            <ArrowRightCircle className="ml-2 size-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
