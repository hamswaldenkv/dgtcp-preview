import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Calendar1, MessageText } from "iconsax-react";
import React from "react";

export default function SectionChairman() {
  return (
    <div className="bg-[#112673]">
      <section className="py-16 container mx-auto">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col gap-12 md:flex-row">
            <img
              src="/static/images/profile-chairman.jpg"
              alt="placeholder"
              className="max-h-96 w-full rounded-lg object-cover md:max-h-[30rem] md:w-1/2"
            />

            <div className="">
              <div className="space-y-2">
                <h2 className="text-balance text-3xl font-bold md:text-5xl text-white uppercase">
                  Le mot du ministre
                </h2>
                <h2 className="text-balance text-xl text-white">
                  S.E.M,{" "}
                  <strong>Doudou Roussel FWAMBA LIKUNDE LI-BOTAYI</strong>
                </h2>
              </div>
              <p className="mt-1 text-white md:mt-6">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Amalesuada
                cursus porttitor praesent eu nisl posuere est. Penatibus ornare
                velit porta nostra lacinia suspendisse habitasse lacinia
                elementum. Aptent ante venenatis in ultricies nullam et
                adipiscing nullam. Natoque hendrerit ante curae sollicitudin
                auctor lacus aliquam maecenas curabitur. Et imperdiet curabitur
                tortor lorem scelerisque natoque ut ante eu? Risus justo varius
                class interdum non pellentesque.
              </p>
              <p className="mt-1 text-white md:mt-6">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Amalesuada
                cursus porttitor praesent eu nisl posuere est. Penatibus ornare
                velit porta nostra lacinia suspendisse habitasse lacinia
                elementum. Aptent ante venenatis in ultricies nullam et
                adipiscing nullam. Natoque hendrerit ante curae sollicitudin
                auctor lacus aliquam maecenas curabitur. Et imperdiet curabitur
                tortor lorem scelerisque natoque ut ante eu? Risus justo varius
                class interdum non pellentesque.
              </p>
              <ul className="mt-10 flex-wrap items-center gap-6 space-y-6 md:flex md:space-y-0 text-white">
                <li className="flex items-center gap-3">
                  <Calendar1 className="size-4" />
                  Agenda
                </li>
                <li className="flex items-center gap-3">
                  <MessageText className="size-4" />
                  Contactez
                </li>
                <li className="flex items-center gap-3">
                  <LinkedInLogoIcon className="size-4" />
                  Linkedin
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
