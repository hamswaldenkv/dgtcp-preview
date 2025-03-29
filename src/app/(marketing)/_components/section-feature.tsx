import { ArrowRight, ClipboardText } from "iconsax-react";
import Link from "next/link";
import React from "react";

export default function FeatureSection() {
  return (
    <div className="bg-white">
      <section className="py-32 max-w-[70%] md:container mx-auto">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col gap-12 md:flex-row">
            <div className="md:w-5/12 lg:p-10">
              <h2 className="text-balance text-3xl font-medium md:text-5xl text-black">
                Rapports d'activité de la DGTCP
              </h2>
              <p className="mt-1 text-black md:mt-6">
                Accédez ou téléchargez les rapports ainsi que les notes
                mensuellles d'activité de la DGTCP
              </p>
              <Link
                href="/actualites/rapports"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mt-6"
              >
                Accéder aux rapports d'activité{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-right ml-2 size-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
              {/** <ul className="mt-10 flex-wrap items-center gap-6 space-y-6 md:flex md:space-y-0">
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check-big size-4"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>{" "}
                  Quality
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check-big size-4"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  Multi-purpose
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check-big size-4"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>{" "}
                  Easy to use
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check-big size-4"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>{" "}
                  Fast
                </li>
              </ul> */}
            </div>
            {/** <div
              className="md:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-4"
              aria-label="layout-grid-equals"
            >
              {[
                {
                  title: "Exécution du PTR au 30 septembre 2024",
                  description: "",
                  link: "https://docs.google.com/document/d/1YbC7hDHXIwIfPKeuUCcMMBefcoFEZ6vg/edit?usp=drive_link&ouid=102562247311745483227&rtpof=true&sd=true",
                },
                {
                  title:
                    "NOTE SUR L’EXECUTION DU PTR A LA CLOTURE DU MOIS DE JUILLET 2024",
                  description: "",
                  link: "https://drive.google.com/file/d/1cLfyNHGQTVfckfbz0ZrEZ5P-gg37-XcH/view?usp=drive_link",
                },
                {
                  title: "NOTE SUR L’EXECUTION DU PTR AU 31 OCTOBRE 2024",
                  description: "",
                  link: "https://docs.google.com/document/d/12bMMjZIhTT8rVR8ItFfguilBjAy53O_-/edit?usp=drive_link&ouid=102562247311745483227&rtpof=true&sd=true",
                },
                {
                  title: "NOTE TECHNIQUE SUR L’EVOLUTION DU PTR AU MOIS DE JUIN 2024",
                  description: "",
                  link: "https://drive.google.com/file/d/1w_W5D7Ojb4vgm0gJ7-VUwVvfQh7hyAns/view?usp=drive_link",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-200 h-[24rem] rounded flex flex-col items-center p-4 animate-appear"
                >
                  <div className="flex-1 border border-slate-400 flex flex-col items-center p-6 space-y-4">
                    <div className="flex-1 flex flex-col items-center space-y-4">
                      <ClipboardText
                        className="size-8 text-primary"
                        variant="Bulk"
                      />
                      <h1 className="text-2xl text-center uppercase font-bold">
                        {item.title}
                      </h1>
                      <p className="text-sm text-center">{item.description}</p>
                    </div>
                    <Link
                      href={item.link}
                      className="inline-flex items-center font-semibold hover:underline md:text-base"
                    >
                      <span>Accéder</span>
                      <ArrowRight className="ml-2 size-4 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
