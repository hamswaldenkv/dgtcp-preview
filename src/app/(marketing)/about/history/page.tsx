import SectionRelated from "../../_components/section-related";
import SectionHeading from "../../_components/section-heading";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-[50vh] bg-white space-y-10">
      <SectionHeading title="Présentation" />

      <div className="max-w-[90%] md:container mx-auto flex flex-col md:flex-row gap-10">
        <div className="h-[25rem] md:w-1/3 bg-slate-100 relative">
          <Image
            src="/static/images/gallery-photo-01.jpeg"
            alt="alt"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="md:flex-1 md:p-10 space-y-5">
          <h1 className="text-4xl font-bold">À propos de la DGTCP</h1>
          <p className="text-base text-justify">
            Le fondement juridique de la Direction Générale du Trésor et de la
            Comptabilité Publique (DGTCP) découle déjà de l’esprit et de la
            lettre de la loi relative aux finances publiques (LOFIP) qui, déjà
            en 2011, reconnaissait les comptables publics et l’ordonnateur comme
            les seuls acteurs compétant en matière d’exécution du budge
          </p>
          <p className="text-base text-justify">
            De même que l’article 110 de la LOFIP qui institue le principe de
            l’unité de la trésorerie de l’Etat en disposant que « Sauf
            disposition expresse de la loi de finances, toutes les
            administrations et tous les services publics, y compris les projets
            émergeant au budget du pouvoir central, sont tenus de déposer toutes
            leurs disponibilités dans le compte général du trésor ouvert auprès
            du caissier de l’Etat ».
          </p>
          <p className="text-base text-justify">
            Consécutivement à la LOFIP, le Règlement Général de la Comptabilité
            Publique (RGCP) dans sa version de 2013 rappelait en son article 4
            que « sont compétant pour effectuer les opérations d’exécution du
            budget du pouvoir central, des provinces et des ETD, les
            ordonnateurs et les comptables publics. Les comptables publics
            effectuent également des opérations de trésorerie et de patrimoine.
            », tout en rappelant l’incompatibilité entre les fonctions
            d’ordonnateur et de comptable.
          </p>
          <p className="text-base text-justify">
            Pourtant en 2020, dans le cadre du rapport final sur l’évaluation de
            la performance de la gestion des finances publiques en République
            Démocratique du Congo réalisé selon la méthodologie PEFA 2016 force
            a été de constater qu’en pratique, le RGCP 2013 n’était toujours pas
            d’application.
          </p>
          <p className="text-base text-justify">
            En effet, selon le rapport précité, non seulement il n’existait pas
            de réseau national des comptables publics rattaché à une Direction
            Générale du Trésor et de la Comptabilité publique (DGTCP) mais
            aussi, malgré les dispositions pertinentes de l’article 21 du RGCP,
            il n’existait pas d’agent comptable central du Trésor (ACCT).
          </p>
          <p className="text-base text-justify">
            La création de la DGTCP s’inscrit également dans le cadre du plan
            stratégique de réforme des finances publiques piloté par le COREF.
            Dans le troisième axe de ce plan, sont prévues les activités
            relatives à :
            <ul className="my-4">
              <li>
                (i) la gestion des dépenses publiques, de même que celles qui
                portent sur
              </li>
              <li>
                (ii) la déconcentration de l’ordonnancement, plus précisément
                les activités 2 et 3 visant respectivement
              </li>
              <li>
                (iii) l’Elaboration du guide de contrôle à priori de la dépense
                publique et
              </li>
              <li>
                (iv) la production du manuel des procédures de la dépense
                publique prenant en compte la déconcentration de
                l’ordonnancement.
              </li>
            </ul>
            Le quatrième axe de ce plan stratégique se rapporte à la réforme de
            la comptabilité publique ainsi que qu’à celle de la gestion de la
            trésorerie.
            <br />
            Ces deux réformes majeures ayant justifié la mise en place de la
            DGTCP.
          </p>
          <p className="text-base text-justify">
            En s’appuyant sur le diagnostic des finances publiques en RDC et sur
            le plan stratégique de réforme des finances publiques, le FMI et la
            Banque Mondiale avaient subordonné la conclusion d’un nouveau
            programme à la création de la DGTCP et à la désignation de ses
            animateurs. C’est dans ce contexte que le décret … (2022) a été
            signé et l’ordonnance présidentielle n° … a été prise pour désigner
            le DG et les deux DGA de la DGTCP.
          </p>
        </div>
      </div>

      <SectionRelated
        links={[
          {
            href: "/about/missions",
            title: "Missions",
            description: "Missions de la DGTCP",
            photo_url: "/static/images/gallery-photo-03.jpeg",
          },
          {
            href: "/about/reformes",
            title: "Réformes",
            description: "Réformes de la DGTCP",
            photo_url: "/static/images/gallery-photo-02.jpeg",
          },
          {
            href: "/about/legal-texts",
            title: "Textes référentiels",
            description:
              "Textes référentiels portant création, missions, organisation et fonctionnement",
            photo_url: "/static/images/bg-cover-01.jpg",
          },
          {
            href: "/about/leadership",
            title: "Leadership",
            description: "Equipe dirigeante de la DGTCP",
            photo_url: "/static/images/gallery-photo-07.jpeg",
          },
        ]}
      />
    </div>
  );
}
