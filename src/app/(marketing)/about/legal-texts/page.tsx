"use client";

import { cn } from "@/lib/utils";
import SectionHeading from "../../_components/section-heading";
import React from "react";
import { DesktopView, MobileView } from "@/components/responsive";
import { DocumentDownload } from "iconsax-react";

const DOCUMENTS_LIST = [
  {
    id: "my-document-001",
    title:
      "DECRET PORTANT CREATION, MISSIONS, ORGANISATION ET FONCTIONNEMENT DE LA DGTCP",
    description:
      "Textes référentiels portant création, missions, organisation et fonctionnement",
    photo_url: "/static/images/bg-cover-01.jpg",
    href: "/static/docs/my-document-001.pdf",
  },
  {
    id: "my-document-002",
    title: "ANNEXE AU DECRET N° 22/54 DU 30 DECEMBRE 2022",
    description:
      "Textes référentiels portant création, missions, organisation et fonctionnement",
    photo_url: "/static/images/bg-cover-01.jpg",
    href: "/static/docs/my-document-002.pdf",
  },
];

export default function Page() {
  const [selectedDocument, setSelectedDocument] = React.useState(
    DOCUMENTS_LIST[0]
  );

  return (
    <div className="bg-white space-y-10">
      <SectionHeading title="Textes référentiels" />

      <DesktopView>
        <div className="container mx-auto flex h-[70vh] border">
          <div className="h-full w-1/3 bg-slate-100 flex flex-col">
            {DOCUMENTS_LIST.map((document) => (
              <div
                key={document.id}
                className={cn(
                  "p-5 border-b hover:bg-slate-100 cursor-pointer",
                  selectedDocument.id === document.id ? "text-primary" : ""
                )}
                onClick={() => setSelectedDocument(document)}
              >
                <h2 className="text-sm capitalize font-bold">
                  {document.title}
                </h2>
              </div>
            ))}
          </div>
          <div className="h-full flex-1 space-y-5">
            <iframe
              src={selectedDocument.href}
              frameBorder="0"
              className="h-full w-full"
            ></iframe>
          </div>
        </div>
      </DesktopView>

      <MobileView>
        <div className="max-w-[95%] mx-auto flex flex-col border">
          {DOCUMENTS_LIST.map((document) => (
            <div
              key={document.id}
              className="p-5 border-b hover:bg-slate-100 cursor-pointer space-y-1"
              onClick={() => window.open(document.href, "_blank")}
            >
              <h2 className="text-sm capitalize font-bold">{document.title}</h2>
              <div className="flex gap-2 items-center">
                <DocumentDownload className="size-3" />
                <span className="text-sm underline">
                  ouvrir/télécharger le document
                </span>
              </div>
            </div>
          ))}
        </div>
      </MobileView>

      <div className="h-[5rem]"></div>
    </div>
  );
}
