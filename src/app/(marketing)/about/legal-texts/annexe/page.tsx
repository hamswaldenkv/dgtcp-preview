import SectionRelated from "../../../_components/section-related";
import SectionHeading from "../../../_components/section-heading";

export default function Page() {
  return (
    <div className="min-h-[50vh] bg-white space-y-10">
      <SectionHeading title="Textes référentiels" />

      <div className="container mx-auto flex gap-10">
        <div className="h-[40rem] w-1/3 bg-slate-100 hidden"></div>
        <div className="flex-1 space-y-5">
          <h1 className="text-4xl font-bold">
            ANNEXE AU DECRET N° 22/54 DU 30 DECEMBRE 2022 FIXANT LE CADRE ET LES
            STRUCTURES ORGANIQUES DE LA DIRECTION GENERALE DU TRESOR ET DE LA
            COMPTABILITE PUBLIQUE, « DGTCP » EN SIGLE
          </h1>
          <iframe
            src="/static/docs/0-cadre_organique-dgtcp-annexe decret.22.54.30.12.2022.pdf"
            frameBorder="0"
            className="h-[80vh] w-full"
          ></iframe>
        </div>
      </div>

      <SectionRelated
        links={[
          {
            href: "/about/legal-texts",
            title:
              "DECRET PORTANT CREATION, MISSIONS, ORGANISATION ET FONCTIONNEMENT DE LA DGTCP",
            photo_url: "/static/images/bg-cover-01.jpg",
          },
        ]}
      />
    </div>
  );
}
