import SectionRelated from "../../_components/section-related";
import SectionHeading from "../../_components/section-heading";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-[50vh] bg-white space-y-10">
      <SectionHeading title="Présentation" />

      <div className="container mx-auto flex gap-10">
        <div className="h-[40rem] w-1/3 bg-slate-100 relative">
          <Image
            src="/static/images/about-office-01.webp"
            alt="alt"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex-1 p-10 space-y-5">
          <h1 className="text-4xl font-bold">À propos de la DGTCP</h1>
          <p className="text-base text-justify">
            La Direction Générale du Trésor et de la Comptabilité Publique
            (DGTCP) de la République Démocratique du Congo (RDC) est une
            institution essentielle au bon fonctionnement des finances
            publiques. Elle joue un rôle clé dans la gestion des ressources
            financières de l’État, en supervisant la collecte, la gestion, et le
            contrôle des fonds publics. Son mandat principal est de garantir
            l'équilibre et la transparence des finances publiques, tout en
            assurant la bonne exécution des politiques économiques et
            budgétaires du pays.
          </p>
          <p className="text-base text-justify">
            La DGTCP est responsable de l'élaboration et de la mise en œuvre des
            stratégies fiscales, de la gestion de la trésorerie de l'État, de la
            supervision de la comptabilité publique et de la gestion des dettes
            publiques. Elle veille également à la régularité et à la
            transparence des opérations financières, à la répartition des fonds
            publics et à la mise en œuvre de mesures visant à renforcer la
            gouvernance financière.
          </p>
          <p className="text-base text-justify">
            Dans ses efforts pour moderniser et rationaliser la gestion des
            finances publiques, la Direction travaille en étroite collaboration
            avec d’autres entités publiques et privées, et met en place des
            réformes visant à améliorer l'efficacité des systèmes de contrôle
            financier.
          </p>
        </div>
      </div>

      <SectionRelated
        links={[
          {
            href: "/about/leadership",
            title: "Leadership",
            description: "Equipe dirigeante de la DGTCP",
            photo_url: "/static/images/about-office-01.webp",
          },
          {
            href: "/about/missions",
            title: "Missions",
            description: "Missions de la DGTCP",
            photo_url: "/static/images/gallery-photo-01.jpeg",
          },
          {
            href: "/about/legal-texts",
            title: "Textes référentiels",
            description:
              "Textes référentiels portant création, missions, organisation et fonctionnement",
            photo_url: "/static/images/bg-cover-01.jpg",
          },
        ]}
      />
    </div>
  );
}
