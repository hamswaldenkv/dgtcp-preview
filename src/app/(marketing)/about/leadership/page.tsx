"use client";

import SeeMoreText from "@/components/ui/see-more-text";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Image from "next/image";

const sections = [
  {
    title: "Direction Générale",
    members: [
      {
        name: "MAABE MUANYIMI Serge",
        role: "DG/TR",
        photo_url: "/static/images/leadership-001.jpg",
        biography: [
          "Mr. Maabe Muanyimi Serge est un expert en droit, finances publiques et réformes administratives, actuellement Directeur Général Adjoint en charge des questions techniques et de réformes. Il est doctorant en DEA à la FED de l’UCC et possède plusieurs diplômes de niveau Bac+5 en droit (UNIKIN), sciences économiques (UPC) et sciences politiques et administratives (UPN).",
          "Avocat inscrit au barreau de Matete, Kinshasa, il a également occupé des fonctions politiques majeures, notamment député provincial honoraire de l’Assemblée Provinciale de Kinshasa (APK) pendant 12 ans, où il a été membre de la Commission ÉcoFin et rapporteur du bureau.",
          "Son parcours administratif est marqué par des responsabilités de haut niveau, telles que Directeur de Cabinet du Gouverneur de l’ex-Province du Kasaï Occidental, Directeur Provincial de la Direction du Contrôle des Marchés Publics de Kinshasa, ainsi que Conseiller au Cabinet des Ministres des Affaires Sociales et des Mines. Passionné de recherche en finances publiques et politiques publiques, il a publié plusieurs ouvrages, dont Droit et Économie des Finances Publiques en RDC (Éditions L’Harmattan, Paris), et co-écrit Le Prince de Machiavel : Quelles leçons pour une bonne gouvernance publique aujourd’hui (Éditions Ishango).",
          "En plus de son engagement académique et professionnel, il est Président-Fondateur de l’Atelier pour le Leadership, l’Excellence et la Formation (ALEF) et co-fondateur du think tank ISHANGO, témoignant de son implication dans la réflexion stratégique et la promotion de la bonne gouvernance.",
        ],
      },
    ],
  },
  {
    title: "Directeurs adjoints",
    members: [
      {
        name: "KINDUELO LUMBU Lyvie",
        role: "DGA/AF",
        photo_url: "/static/images/team-profile-lyvie.jpeg",
        biography: [
          "Professionnelle qui détient plus de 20 ans d'expérience en Administration des affaires dans les domaines de l'Audit, des Finances, de la Comptabilité et de la Gestion.",
          "Un talent prouvé pour concevoir le plan stratégique d'une direction, identifier les objectifs, gérer les projets, organiser les ressources et atteindre les objectifs rapidement et efficacement.",
          "Remarquée pour obtenir un consensus, en veillant toujours à atteindre les objectifs et à les dépasser.",
        ],
      },
      {
        name: "MOKAKO KOLO Lydia",
        role: "Direction des moyens généraux du personnel",
        photo_url: "/static/images/team-profile-lydia.jpeg",
        biography: [
          "Experte en économie monétaire et gestion administrative, actuellement Directrice des Moyens Généraux et du Personnel à la Direction Générale du Trésor et de la Comptabilité Publique (DGTCP) depuis 2023. Doctorante en Économie monétaire et internationale à l’Université Protestante au Congo (UPC), elle détient également une licence dans la même spécialité obtenue en 2003. Son parcours académique est enrichi par diverses formations en anglais (Magri’s Institute, Afrique du Sud), comptabilité bancaire (IFBA, Angola) et informatique (CERIG, ISC Kinshasa).",
          "Son expérience professionnelle est marquée par des fonctions de haut niveau dans le secteur public et privé, notamment en tant que Conseillère du Vice-Premier Ministre, Ministre de la Fonction Publique (2021-2023), Chef de division à la DGRAD (2020) et Consultante à la Présidence de la RDC (Cabinet Vital Kamerhe, 2019). Elle a également occupé des postes de direction en Angola, notamment comme Responsable des Ressources Humaines du groupe Carrinho (2006) et Assistante du Chef d’État-Major général angolais en matière de Coopération Internationale (2005).",
          "En plus de ses responsabilités administratives, elle est fondatrice et présidente de la Fondation Dos Anjos (2010) et promotrice de l’École Active Bilingue Les Émeraudes (2011), témoignant de son engagement dans l’éducation et l’action sociale.",
        ],
      },
    ],
  },
  {
    title: "Directeurs",
    members: [
      {
        name: "KAZADI KATALA Désiré",
        role: "Directeur Informatique",
        photo_url: "/static/images/team-profile-desire.jpeg",
        biography: [
          "Désiré KAZADI est un expert en informatique avec une solide expérience dans la gestion des systèmes d’information et la transformation digitale. Il débute sa carrière en 1998 comme Responsable du Centre Informatique de la Faculté des Sciences et Professeur Assistant à l’UNIKIN, tout en enseignant comme chargé de cours à l’UPC. Il enchaîne ensuite plusieurs expériences en tant que développeur, formateur et support IT, notamment chez ECP Sprl et Transys Sprl.",
          "En 2001, il devient IT Manager dans la compagnie pétrolière Franco-britannique  Perenco-Rep en RDC avant de rejoindre l’opérateur de téléphonie mobile Vodacom en 2005, où il occupe successivement les postes de Manager Billing Applications, Manager VAS, Head of Billing & IT, Head of Enterprise IT & Technology Security, puis Head of IT Infrastructure.",
          "En septembre 2022, il intègre PHC en tant que Directeur IT & ERP, pilotant la transformation digitale et les opérations IT.",
          "Depuis mars 2023, il occupe le poste de Directeur Informatique de la Direction Générale du Trésor et de la Comptabilité Publique (DGTCP) au Ministère des Finances. Chargé de la mise en place du Système d’Information de la DGTCP, il joue un rôle clé dans l’opérationnalisation de la réforme des Finances Publique par la mise en place des outils numériques permettant à l’institution d’accomplir efficacement sa mission.",
        ],
      },
      {
        name: "MUNDELA MUANZA Franck",
        role: "Directeur / Inspection de service du trésor",
        photo_url: "/static/images/profile.jpg",
        biography:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo eius aperiam dolores assumenda exercitationem nostrum voluptatem eveniet amet, quis repudiandae iste! Dolores tenetur nisi sit? Architecto neque odio illum recusandae?",
      },
      {
        name: "SULIA KITAMBALA Mireille",
        role: "Direction du Trésor et Moyens de Financement",
        photo_url: "/static/images/team-profile-sulia.jpeg",
        biography:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo eius aperiam dolores assumenda exercitationem nostrum voluptatem eveniet amet, quis repudiandae iste! Dolores tenetur nisi sit? Architecto neque odio illum recusandae?",
      },
      {
        name: "NSIMBA NKINKI Eddy",
        role: "Direction de la Réglementation et de la Qualité Comptable",
        photo_url: "/static/images/team-profile-eddy.jpeg",
        biography: [
          "Eddy Nsimba Nkinki est un expert en comptabilité et finances publiques, possédant une solide expérience dans la gestion budgétaire et la trésorerie. Titulaire d’une licence en sciences économiques de l’Université de Kinshasa depuis 1997, il poursuit actuellement un DEA en gestion dans la même institution.",
          "Au cours de sa carrière, il a occupé plusieurs postes stratégiques, notamment en tant que Directeur Général du CPCC, où il est chargé de la Centrale nationale des Bilans. Il a également exercé les fonctions de Vice-Président de l’Axe 4 du PSRFP, consacré à la comptabilité publique et à la gestion de la trésorerie, ainsi que de Commissaire aux comptes",
          "Reconnu pour son expertise, il est membre de l’Ordre National des Experts-Comptables de la RDC (ONEC/RDC) sous le numéro EC/16.00429.",
        ],
      },
      {
        name: "MATARY MOWENGE MORYWELL Jean-Claude",
        role: "Agence Centrale des Comptables du Trésor",
        photo_url: "/static/images/profile.jpg",
        biography:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo eius aperiam dolores assumenda exercitationem nostrum voluptatem eveniet amet, quis repudiandae iste! Dolores tenetur nisi sit? Architecto neque odio illum recusandae?",
      },
      {
        name: "MAFUTALA BEKONDA Jean-Paul",
        role: "Direction juridique et Contentieux Financier",
        photo_url: "/static/images/team-profile-jeanpaul.jpeg",
        biography:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo eius aperiam dolores assumenda exercitationem nostrum voluptatem eveniet amet, quis repudiandae iste! Dolores tenetur nisi sit? Architecto neque odio illum recusandae?",
      },
    ],
  },
];

export default function Page() {
  return (
    <div className="min-h-[50vh] bg-slate-300/10">
      <div className="container mx-auto space-y-5 py-20">
        <h1 className="text-4xl font-bold mb-4">Leadership</h1>

        <div className="space-y-14">
          {sections.map((section, index) => (
            <div key={index} className="space-y-5">
              <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
              <div
                className={cn(
                  "grid gap-5 md:gap-8",
                  section.members.length > 1
                    ? "grid-cols-1 md:grid-cols-2"
                    : "grid-cols-1"
                )}
                aria-label="layout-grid-equals"
              >
                {section.members.map((member, memberIndex) => (
                  <div
                    key={memberIndex}
                    className="shadow-sm p-5 bg-white flex gap-5"
                  >
                    <div className="h-[20rem] w-[15rem] bg-slate-400 relative">
                      <Image
                        src={member.photo_url}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 space-y-2 flex flex-col justify-between">
                      <div className="space-y-2">
                        <h1 className="text-xl font-semibold">{member.name}</h1>
                        <p className="text-gray-500">{member.role}</p>
                      </div>
                      <div className="">
                        <SeeMoreText
                          maxLength={250}
                          title={member.name}
                          text={member.biography}
                        />
                        <Separator className="my-5" />
                        <ul className="flex items-center justify-end gap-5">
                          <li>
                            <a
                              href="https://www.x.com/dgtcp.cd"
                              target="_blank"
                            >
                              <img
                                src="/static/icons/logo-x.svg"
                                alt=""
                                className="h-5 text-primary"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.facebook.com/dgtcp.cd"
                              target="_blank"
                            >
                              <img
                                src="/static/icons/logo-facebook.svg"
                                alt=""
                                className="h-5 text-primary"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.linkedin.com/company/dgtcp/"
                              target="_blank"
                            >
                              <img
                                src="/static/icons/logo-linkedin.svg"
                                alt=""
                                className="h-5 text-blue-500"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
