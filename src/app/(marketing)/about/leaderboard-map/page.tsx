import { Category } from "iconsax-react";
import SectionHeading from "../../_components/section-heading";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-[50vh] bg-white space-y-10 pb-20">
      <SectionHeading title="Organigramme" />

      <div className="container mx-auto bg-slate-100 border shadow">
        <img
          src="/static/images/about-organigramme.png"
          alt="Organigramme"
          className="w-full h-[45rem] object-cover"
        />
      </div>
    </div>
  );
}
