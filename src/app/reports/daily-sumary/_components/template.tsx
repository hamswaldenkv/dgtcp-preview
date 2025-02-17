"use client";

import * as React from "react";
import dynamic from "next/dynamic";

import { Button } from "@/components/ui/button";
import { DocumentDownload } from "iconsax-react";
import { DailySumaryProps } from "@/app/types/pdf";
import DailySumaryDocument from "@/components/pdf/dailySumary";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

const ReportTemplate = ({ items }: DailySumaryProps) => {
  const generateAndPrintPdf = () => {
    import("@react-pdf/renderer").then(({ pdf }) => {
      pdf(<DailySumaryDocument items={items} />)
        .toBlob()
        .then((blob) => {
          const url = URL.createObjectURL(blob);

          // Create an anchor element to trigger the download
          const link = document.createElement("a");
          link.href = url;
          link.download = "hello.pdf";

          // Append the link to the DOM (it doesn't need to be visible)
          document.body.appendChild(link);

          // Trigger a click on the link to start the download
          link.click();

          // Clean up: remove the link and revoke the object URL
          document.body.removeChild(link);
          URL.revokeObjectURL(url);

          // Create a print window with the generated PDF
          /*const printWindow = window.open("");
          if (printWindow && blob) {
            const objectUrl = URL.createObjectURL(blob);
            printWindow.document.write(
              `<iframe src="${objectUrl}" width="100%" height="100%" style="border:none;"></iframe>`
            );
            printWindow.document.close();
          }*/
        })
        .catch((err) => {});
    });
  };

  return (
    <div className="w-full h-[100vh]">
      <div className="p-4 flex justify-center gap-2">
        <Button onClick={generateAndPrintPdf}>
          <DocumentDownload className="size-4 mr-2" /> Télécharger le rapport
        </Button>
      </div>
      <PDFViewer className="w-full h-full">
        <DailySumaryDocument items={items} />
      </PDFViewer>
    </div>
  );
};

export default ReportTemplate;
