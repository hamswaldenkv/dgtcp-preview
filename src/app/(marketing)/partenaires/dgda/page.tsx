import Image from "next/image";
import { ArrowRightCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import SectionHeading from "../../_components/section-heading";

export default function Page() {
  return (
    <div className="min-h-[50vh] bg-white space-y-10 mb-10">
      <SectionHeading title="La Direction Générale des Douanes et Accises" />

      <div className="container mx-auto flex gap-10">
        <div className="h-[40rem] w-1/3 bg-slate-100 relative">
          <Image
            src="/static/images/partenaire-dgda.jpg"
            alt="alt"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex-1 p-10 space-y-5">
          <h1 className="text-4xl font-bold">Présentation</h1>
          <p className="text-base">
            La Direction Générale des Douanes et Accises (DGDA) en République
            Démocratique du Congo (RDC) est l'institution responsable de la
            gestion et du contrôle des importations et des exportations de
            marchandises sur le territoire national. Elle joue un rôle clé dans
            la régulation du commerce extérieur en veillant à la collecte des
            droits de douane et des accises, ainsi qu'à la lutte contre la
            fraude et les pratiques commerciales illégales. En outre, elle
            assure la sécurité des frontières commerciales en collaborant avec
            d'autres agences gouvernementales et internationales.
          </p>
          <p className="text-base">
            Les missions principales de la DGDA incluent la gestion des recettes
            douanières, l'application des politiques fiscales et commerciales du
            gouvernement, ainsi que la facilitation des échanges commerciaux
            tout en garantissant le respect des normes de sécurité. Elle est
            également chargée de la mise en œuvre de la politique nationale en
            matière de fiscalité douanière et d'accises, ce qui contribue à la
            mobilisation des ressources pour le financement du budget de l'État.
            Elle mène des contrôles rigoureux pour éviter les fraudes fiscales
            et la contrebande, tout en promouvant une meilleure transparence et
            efficacité dans ses services.
          </p>
          <p className="text-base">
            En tant qu'institution stratégique, la DGDA a aussi pour mission
            d'accompagner les opérateurs économiques dans la formalisation de
            leurs activités commerciales. Elle met en place des mécanismes
            visant à simplifier les procédures douanières tout en garantissant
            le respect des régulations. L'amélioration des infrastructures
            portuaires et aéroportuaires et l'automatisation des procédures sont
            des priorités de la DGDA pour rendre le commerce plus fluide et
            dynamique, tout en renforçant la compétitivité de l'économie
            congolaise sur le plan international.
          </p>

          <Separator />

          <a
            href="https://douane.gouv.cd/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-primary/10 bg-primary text-white rounded-full hover:text-primary inline-flex items-center border p-5 py-3"
          >
            <span className="font-medium">Visitez le site web de la DGDA</span>
            <ArrowRightCircle className="ml-2 size-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
