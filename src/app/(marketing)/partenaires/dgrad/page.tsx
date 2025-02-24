import Image from "next/image";
import { ArrowRightCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import SectionHeading from "../../_components/section-heading";

export default function Page() {
  return (
    <div className="min-h-[50vh] bg-white space-y-10 mb-10">
      <SectionHeading title="Direction Générale de la Dette Publique" />

      <div className="container mx-auto flex gap-10">
        <div className="h-[40rem] w-1/3 bg-slate-100 relative">
          <Image
            src="/static/images/partenaire-dgdep.jpg"
            alt="alt"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex-1 p-10 space-y-5">
          <h1 className="text-4xl font-bold">Présentation</h1>
          <p className="text-base">
            La Direction Générale de la Dette Publique (DGDP) de la République
            Démocratique du Congo (RDC) est l'institution chargée de la gestion,
            du suivi et du contrôle de l'ensemble des emprunts contractés par
            l'État congolais. Elle assure la gestion de la dette intérieure et
            extérieure, en veillant à la viabilité financière du pays tout en
            optimisant le coût de l'endettement. Sa mission principale est de
            garantir que les engagements financiers de l'État soient gérés de
            manière prudente et transparente, en évitant un endettement excessif
            ou incontrôlé.
          </p>
          <p className="text-base">
            La DGDP joue un rôle stratégique en matière de négociation de la
            dette, notamment lors de la restructuration de certaines créances ou
            de la recherche de nouvelles sources de financement. Elle est
            également responsable de l’élaboration de la politique d’endettement
            public en fonction des priorités économiques et budgétaires du pays.
            Cela implique une gestion proactive de la dette, en prenant en
            compte les risques associés aux fluctuations des taux d'intérêt, des
            devises et d'autres facteurs économiques.
          </p>
          <p className="text-base">
            La DGDP a pour mission de promouvoir la transparence et la bonne
            gouvernance dans la gestion de la dette publique en RDC. Elle met en
            œuvre des mécanismes de suivi régulier de l’évolution de la dette et
            de ses remboursements, tout en assurant une communication claire et
            efficace avec les bailleurs de fonds et les partenaires
            internationaux. Cette gestion rigoureuse de la dette est essentielle
            pour assurer la stabilité macroéconomique et soutenir le
            développement durable du pays à long terme.
          </p>

          <Separator />

          <a
            href="https://dgdp.cd/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-primary/10 hover:text-primary inline-flex items-center border p-5 py-3"
          >
            <span className="font-semibold">
              Visitez le site web de la DGDEP
            </span>
            <ArrowRightCircle className="ml-2 size-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
