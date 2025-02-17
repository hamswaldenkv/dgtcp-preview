import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function SectionSubscribe() {
  return (
    <div className="flex md:flex-row flex-col bg-[#f4f4f4]">
      <div className="w-full md:w-1/2 md:h-[500px] h-[200px] relative">
        <Image
          src="/static/images/bg-cover-01.jpg"
          alt="alt"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="h-1 flex w-full">
          <div className="flex-1 h-full bg-primary" />
          <div className="flex-1 h-full bg-red-500" />
          <div className="flex-1 h-full bg-yellow-500" />
        </div>

        <div className="max-w-2xl mx-auto space-y-3 flex-1 flex flex-col justify-center">
          <h1 className="uppercase font-bold text-gray-500 text-xl">
            Restez avec nous
          </h1>
          <h1 className="font-bold text-4xl">
            Soyez informé de toutes les activités de la DGTCP
          </h1>

          <p className="text-sm">
            Abonnez-vous à la Newsletter pour ne rien manquer.
          </p>

          <Input
            type="email"
            placeholder="Entrez votre adresse e-mail"
            className="py-5 bg-white"
          />
          <Button className="rounded-full w-[200px]" size={"lg"}>
            Confirmer
            <ArrowRightCircle className="size-3 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
