import { Category } from "iconsax-react";
import SectionHeading from "../../_components/section-heading";

export default function Page() {
  return (
    <div className="min-h-[50vh] bg-white space-y-10 pb-20">
      <SectionHeading title="Organigramme" />

      <div className="container mx-auto p-10 h-[40rem] bg-slate-100 flex flex-col justify-center items-center">
        <Category className="size-20 text-slate-300" />
      </div>
    </div>
  );
}
