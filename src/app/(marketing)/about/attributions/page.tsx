import { Separator } from "@/components/ui/separator";
import SectionHeading from "../../_components/section-heading";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-[50vh] bg-white space-y-10">
      <SectionHeading title="Attributions de la DGTCP" />

      <div className="container mx-auto gap-10">
        <h1 className="text-4xl font-bold">
          Les attributions de la Direction Générale du Trésor et de la
          Comptabilité Publique sur base du décret n° 22/ 12B du 31 mars 2022
        </h1>
      </div>

      <div className="container mx-auto flex gap-10">
        <div className="h-[40rem] w-1/3 bg-slate-100 relative">
          <Image
            src="/static/images/about-office-03.webp"
            alt="alt"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex-1 p-10 space-y-5">
          <h1 className="text-4xl font-bold">Direction générale</h1>
          <p>
            Le Directeur Général et les Directeurs Généraux Adjoints sont nommés
            et, le cas échéant, relevés de leurs fonctions par le Président de
            la République, sur proposition du Gouvernement délibérée en Conseil
            des Ministres, pour une durée de 5 ans renouvelable une fois, sauf
            en cas de cessation définitive de services prévus par la Loi n°
            16/013 du 15 juillet 2016 portant statut des agents de carrière des
            Services publics de l'État.
          </p>
          <p>
            Le Directeur général et les Directeurs Généraux Adjoints doivent
            justifier des compétences avérées en matière de gestion des finances
            publiques.
          </p>
          <p>
            Le Directeur général de la DGTCP est chargé d'organiser, de
            planifier, de superviser, de coordonner et de contrôler les
            activités des directions et de tous les services qui composent la
            DGTCP et d'en rendre compte.
          </p>
          <p>
            Le Directeur général de la DGTCP dispose des pouvoirs directs de
            gestion du budget, du personnel et des équipements informatiques et
            mobiliers de la DGTCP.
          </p>
          <p>
            Le Directeur général de la DGTCP propose au Ministre ayant les
            Finances dans ses attributions, la nomination des comptables publics
            directs du trésor.
          </p>
        </div>
      </div>

      <Separator />

      <div className="container mx-auto flex gap-10">
        <div className="h-[25rem] w-1/3 bg-slate-100 relative">
          <Image
            src="/static/images/about-office-01.webp"
            alt="alt"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex-1 p-10 space-y-5">
          <h1 className="text-4xl font-bold">Directeurs généraux Adjoints</h1>

          <p>
            Les Directeurs généraux Adjoints assistent le Directeur Général dans
            l'exercice de ses fonctions et s'occupent, sous sa supervision, l'un
            des questions administratives et financières et l'autre, des
            questions techniques et des réformes.
          </p>

          <p>
            L'intérim du Directeur général est assuré par l'un des Directeurs
            généraux adjoints, désigné par le Directeur-General, à tour de rôle.
          </p>

          <p>
            Le Directeur général peut déléguer certaines matières relevant de sa
            compétence aux Directions ou services sous sa gestion. Sous-section
          </p>
        </div>
      </div>

      <Separator />

      <div className="container mx-auto flex gap-10">
        <div className="h-[25rem] w-1/3 bg-slate-100 relative">
          <Image
            src="/static/images/about-office-04.webp"
            alt="alt"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex-1 p-10 space-y-5">
          <h1 className="text-4xl font-bold">
            Secrétariats administratif et technique de la Direction générale
          </h1>

          <p>
            Le Secrétariat administratif est chargé de (d') :
            <ul className="list-disc pl-5 space-y-2">
              <li>
                veiller au bon fonctionnement du service courrier de la
                Direction générale ;
              </li>
              <li>
                enregistrer, distribuer et expédier les courriers de la
                Direction générale et des services rattachés ;
              </li>
              <li>
                assurer le suivi de l'agenda du Directeur général et organiser
                les audiences ;
              </li>
              <li>
                gérer le protocole et les relations publiques de la Direction
                générale ;
              </li>
              <li>
                gérer la documentation et les archives de la Direction générale
                ;
              </li>
              <li>
                exécuter toute autre tâche administrative lui confiée par la
                Direction générale.
              </li>
            </ul>
          </p>
        </div>
      </div>

      <Separator />

      <div className="container mx-auto flex gap-10">
        <div className="h-[25rem] w-1/3 bg-slate-100 relative">
          <Image
            src="/static/images/about-office-05.webp"
            alt="alt"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex-1 p-10 space-y-5">
          <h1 className="text-4xl font-bold">Secrétariat technique</h1>

          <p>
            Le Secrétariat technique est chargé de (d') :
            <ul className="list-disc pl-5 space-y-2">
              <li>
                concevoir et suivre le plan de développement stratégique de la
                DGTCP ;
              </li>
              <li>
                mener des réflexions et émettre des avis techniques, à la
                demande de la Direction générale, sur toutes les questions
                relevant de la mise en oeuvre opérationnelle de la politique
                budgétaire, de la définition de la politique financière de
                l'Etat et de la réglementation comptable ;
              </li>
              <li>
                assurer le suivi de la mise en oeuvre des réformes au sein de la
                DGTCP.
              </li>
            </ul>
          </p>
        </div>
      </div>

      <Separator />

      <div className="container mx-auto flex gap-10">
        <div className="h-[25rem] w-1/3 bg-slate-100 relative">
          <Image
            src="/static/images/about-office-02.webp"
            alt="alt"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex-1 p-10 space-y-5">
          <h1 className="text-4xl font-bold">Directions</h1>

          <p>De la direction de l'inspection des services du trésor</p>
          <p>De la direction du trésor et moyens de financement</p>
          <p>De la direction de la règlementation et qualité comptables</p>
          <p>De la direction des contentieux financiers</p>
          <p>De la Direction informatique</p>
        </div>
      </div>

      <Separator />

      <div className="container mx-auto flex gap-10">
        <div className="h-[25rem] w-1/3 bg-slate-100 relative">
          <Image
            src="/static/images/about-person-03.jpeg"
            alt="alt"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex-1 p-10 space-y-5">
          <h1 className="text-4xl font-bold">Comptables du trésor</h1>

          <p>L'agence comptable centrale du trésor</p>
          <p>La trésorerie paierie pour l'étranger</p>
          <p>La trésorerie paierie provinciale</p>
          <p>La trésorerie paierie territoriale</p>
          <p>La trésorerie paierie urbaine</p>
          <p>Comptable des ministères</p>
          <p>Comptable des budgets annexes</p>
          <p>Comptable des comptes spéciaux</p>
        </div>
      </div>

      <div className="h-10"></div>
    </div>
  );
}
