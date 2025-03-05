import { Separator } from "@/components/ui/separator";
import SectionHeading from "../../_components/section-heading";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-[50vh] bg-white space-y-10">
      <SectionHeading title="Missions de la DGTCP" />

      <div className="container mx-auto flex gap-10">
        <div className="h-[30rem] w-[40%] bg-slate-100 relative">
          <Image
            src="/static/images/gallery-photo-02.jpeg"
            alt="alt"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex-1 space-y-5">
          <h1 className="text-4xl font-bold">Mission principale</h1>
          <p className="text-base text-justify">
            La mise en œuvre opérationnelle de la politique budgétaire au plan
            de l’exécution des dépenses dans leur phase comptable et du suivi
            des recettes recouvrées par les administrations financières ;
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              La contribution à la politique financière de l’Etat à travers la
              gestion de la trésorerie et le suivi de l’endettement du pouvoir
              central, des provinces, des ETD, des budget annexes et des comptes
              d’affectation spécial ;
            </li>
            <li>
              La définition de la politique financière de l'Etat à travers la
              gestion de la trésorerie et le suivi de l'endettement du Pouvoir
              central, des Provinces, des Entités Territoriales Décentralisées
              et des organismes auxiliaires ;
            </li>
            <li>
              La règlementation, la tenue, la centralisation de flux financiers
              ainsi que la consolidation des comptabilités du pouvoir central,
              des provinces et des ETD ainsi que des budgets annexes et des
              comptes d’affectation spécial.
            </li>
          </ul>
        </div>
      </div>

      <div className="h-10"></div>
    </div>
  );
}
