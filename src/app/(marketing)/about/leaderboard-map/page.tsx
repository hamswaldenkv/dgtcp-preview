import { Category } from "iconsax-react";

export default function Page() {
  return (
    <div className="min-h-[50vh] bg-white space-y-10 pb-20">
      <div className="h-[15rem] bg-[#112673] flex flex-col justify-end p-10">
        <h1 className="text-white text-4xl font-bold">Organigrame</h1>
      </div>

      <div className="container mx-auto p-10 h-[40rem] bg-slate-100 flex flex-col justify-center items-center">
        <Category className="size-20 text-slate-300" />
      </div>
    </div>
  );
}
